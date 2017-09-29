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
    mounted(){
      this.init()
    },
    methods: {
      init(){
        let _this = this ;
        if(_this.$websocket==null){
          _this.$websocket = new WebSocket("ws://localhost:8089/websocket");
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
          let assets = _this.$store.state.assets;
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
      ...mapActions([
        'updateSocketData'
      ]),
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
          let fieldName1 = asset+"Price";
          let fieldName2 = asset+"Sort";
          if(_this.socketInfo[fieldName1]==undefined || _this.socketInfo[fieldName1]==null){
            _this.socketInfo[fieldName1]=0;//price default 0
            _this.socketInfo[fieldName2]=1;//sort default asc
          }
          let lastPrice = _this.socketInfo[fieldName1];
          if(lastPrice>=obj.data.latestprice){
            _this.socketInfo[fieldName2]=0;//sort desc
          }else{
            _this.socketInfo[fieldName2]=1;//sort asc
          }
          _this.socketInfo[fieldName1] = obj.data.latestprice;
          // console.log(_this.socketInfo[fieldName1]+">>>>>"+_this.socketInfo[fieldName2]+">>>>>"+obj.channel);
          _this.updateSocketData(_this.socketInfo);
        }
      },
      //get daily data for index page
      getdailydata(obj){
        let _this = this ;
        if(obj.channel.indexOf("_cny_")>-1){
          let asset = obj.channel.replace('sub_spot_','').replace('_cny_dailydata','');
          let fieldName1 = asset+"Range";
          let fieldName2 = asset+"Price";
          let fieldName3 = asset+"Volume";
          let fieldName4 = asset+"MaxPrice";
          let fieldName5 = asset+"MinPrice";

          if(_this.socketInfo[fieldName1]==undefined || _this.socketInfo[fieldName1]==null){
            _this.socketInfo[fieldName1]=0+"%"
            _this.socketInfo[fieldName2]=0
            _this.socketInfo[fieldName3]=0
            _this.socketInfo[fieldName4]=0
            _this.socketInfo[fieldName5]=0
          }


          _this.socketInfo[fieldName1]=obj.data.changePercent+"%"
          _this.socketInfo[fieldName2]=obj.data.closingPrice
          _this.socketInfo[fieldName3]=obj.data.volumeQuantity
          _this.socketInfo[fieldName4]=obj.data.maxPrice
          _this.socketInfo[fieldName5]=obj.data.minPrice

          _this.updateSocketData(_this.socketInfo);
        }
      },
      //get user asset
      getUserAsset(obj){
        // console.log(obj.data);
        let _this = this ;
        let fieldName1 = "assetcny";
        let fieldName2 = "freezecny";
        let fieldName3 = "total";
        if(_this.socketInfo[fieldName1]==undefined || _this.socketInfo[fieldName1]==null){
          _this.socketInfo[fieldName1]=0;
          _this.socketInfo[fieldName2]=0;
          _this.socketInfo[fieldName3]=0;
        }
        _this.socketInfo[fieldName1] = obj.data.assetcny ;
        _this.socketInfo[fieldName2] = obj.data.freezecny ;
        _this.socketInfo[fieldName3] = obj.data.total ;

        let assets = _this.$store.state.assets;
        for(let key in assets){
          let fieldName1 = "asset"+assets[key].code;
          let fieldName2 = "freeze"+assets[key].code;

          if(_this.socketInfo[fieldName1]==undefined || _this.socketInfo[fieldName1]==null){
            _this.socketInfo[fieldName1]=0;
            _this.socketInfo[fieldName2]=0;
          }

          _this.socketInfo[fieldName1] = obj.data["asset"+assets[key].code] ;
          _this.socketInfo[fieldName2] = obj.data["freeze"+assets[key].code] ;

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
