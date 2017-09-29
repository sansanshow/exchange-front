<template>
  <div class="mwrap">
    <g-header v-if="header"></g-header>
    <router-view>

    </router-view>
    <g-footer></g-footer>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    components:{

    },
    name: 'app',
    data(){
      return {
        msg: '',
        socketInfo:{
        }
      }
    },
    created(){
      this.init()
    },
    methods: {
      ...mapActions([
        'updateSocketData'
      ]),
      init(){
        let _this = this ;

        if(_this.socketInfo.cny==undefined || _this.socketInfo.cny==null){
              _this.socketInfo.cny = new Object();
              _this.socketInfo.cny.usable=0;
              _this.socketInfo.cny.freeze=0;
              // _this.updateSocketData(_this.socketInfo);
        }

        if(_this.socketInfo.total==undefined || _this.socketInfo.total==null){
          _this.socketInfo.total=0;
          // _this.updateSocketData(_this.socketInfo);
        }

      let assets = _this.$store.state.assets;

      for(let key in assets){
          if(_this.socketInfo[assets[key].code]==undefined || _this.socketInfo[assets[key].code]==null){
              _this.socketInfo[assets[key].code] = new Object();
              _this.socketInfo[assets[key].code].price=0;//price default 0
              _this.socketInfo[assets[key].code].sort=1;//sort default asc
              _this.socketInfo[assets[key].code].range=0+"%";
              _this.socketInfo[assets[key].code].volume=0;//24 hours transations volume
              _this.socketInfo[assets[key].code].maxPrice=0;
              _this.socketInfo[assets[key].code].minPrice=0;
              _this.socketInfo[assets[key].code].usable=0;
              _this.socketInfo[assets[key].code].freeze=0;
              // _this.updateSocketData(_this.socketInfo);
          }
      }

      _this.updateSocketData(_this.socketInfo);


        if(_this.$websocket==null){
          _this.$websocket = new WebSocket(_this.WsUrl);
        }
        // console.log(_this.user.id);
        // let ws = new WebSocket("ws://localhost:8080/websocket");
        _this.$websocket.onopen=function(){
          // console.log(111);
        }
        _this.$websocket.onmessage=function(event){
          _this.socketData(event.data);
        }

        setTimeout(function(){
          for(let key in assets){
            let channel = "sub_spot_"+assets[key].code+"_cny_latestprice";//sub_spot_btc_cny_latestprice
            _this.$websocket.send("{\"channel\":\""+channel+"\"}");//btc latest price

            channel = "sub_spot_"+assets[key].code+"_cny_dailydata";//sub_spot_btc_cny_dailydata
            _this.$websocket.send("{\"channel\":\""+channel+"\"}");//btc dailydata
          }
          let currUserid = _this.$store.getters.getUserId ;
          // console.log(">>>>>>"+currUserid)
          if(currUserid!=undefined && currUserid!=null){
            _this.$websocket.send("{\"channel\":\"sub_customer_asset\",\"uuid\":\""+currUserid+"\"}");
          }

        },2000);

        setInterval(function(){
          //心跳监测，当客户端关闭时，服务端websocketSession关闭
          _this.$websocket.send("1");
        },10000);
      },
      socketData(obj){
        obj = JSON.parse(obj);
        if(obj!=undefined && obj!=null){
          let currchannel = obj.channel;
          if(currchannel!=undefined && currchannel.indexOf('_latestprice')>-1){//get latest price
            this.getLatestPrice(obj);
          }

          if(currchannel!=undefined && currchannel.indexOf('_dailydata')>-1){//get dailydata
            this.getdailydata(obj);
          }

          if(currchannel!=undefined && currchannel.indexOf('sub_customer_asset')>-1){//user asset
            this.getUserAsset(obj);
          }
        }

      },
      //get latest price
      getLatestPrice(obj){
        let _this = this ;
        if(obj.channel.indexOf("_cny_")>-1){
          let asset = obj.channel.replace('sub_spot_','').replace('_cny_latestprice','');
          let lastPrice = _this.socketInfo[asset].price;
          if(lastPrice>=obj.data.latestprice){
            _this.socketInfo[asset].sort=0;//sort desc
          }else{
            _this.socketInfo[asset].sort=1;//sort asc
          }
          _this.socketInfo[asset].price = obj.data.latestprice;
          // console.log(_this.socketInfo[fieldName1]+">>>>>"+_this.socketInfo[fieldName2]+">>>>>"+obj.channel);
          _this.updateSocketData(_this.socketInfo);
        }
      },
      //get daily data for index page
      getdailydata(obj){
        let _this = this ;
        if(obj.channel.indexOf("_cny_")>-1){
          let asset = obj.channel.replace('sub_spot_','').replace('_cny_dailydata','');
         _this.socketInfo[asset].range=obj.data.changePercent+"%";
          _this.socketInfo[asset].price=obj.data.closingPrice;
          _this.socketInfo[asset].volume=obj.data.volumeQuantity;
          _this.socketInfo[asset].maxPrice=obj.data.maxPrice;
          _this.socketInfo[asset].minPrice=obj.data.minPrice;

          _this.updateSocketData(_this.socketInfo);
        }
      },
      //get user asset
      getUserAsset(obj){
        // console.log(obj.data);
        let _this = this ;
        _this.socketInfo.cny.usable = obj.data.assetcny ;
        _this.socketInfo.cny.freeze = obj.data.freezecny ;
        _this.socketInfo.total = obj.data.total ;

        let assets = _this.$store.state.assets;
        for(let key in assets){
          let fieldName1 = "asset"+assets[key].code;
          let fieldName2 = "freeze"+assets[key].code;

          if(_this.socketInfo[assets[key].code]==undefined || _this.socketInfo[assets[key].code]==null){
            _this.socketInfo[assets[key].code]={};
            _this.socketInfo[assets[key].code].usable=0;
            _this.socketInfo[assets[key].code].freeze=0;
          }

          _this.socketInfo[assets[key].code].usable = obj.data["asset"+assets[key].code] ;
          _this.socketInfo[assets[key].code].freeze = obj.data["freeze"+assets[key].code] ;

          // console.log(obj.data["asset"+assets[key].code]);
        }

        _this.updateSocketData(_this.socketInfo);
      }
    }
  }
</script>

<style lang="less">
  @import './style/common';
  .mwrap{
    height: 100%;
  }
</style>
