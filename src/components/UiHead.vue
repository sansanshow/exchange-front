<template>
  <div class="ui-head">
       <div class="title">{{options.title}}</div>
       <div class="subhead">{{options.sub}}</div>
       <div v-if="options.back" class="back" @click="headBack">
           <span class="icon"></span>
           <span>{{options.back}}</span>
       </div>
  </div>
</template>
<script>
export default {
    props:{
        options:{
            type: Object,
            default: () => {
                return {
                    title: '标题',
                    sub: '副标题',
                    back:'返回'
                };
            }
        }
    },
    data(){
        return {

        }
    },
    methods:{
        headBack(){
            // this.$emit("backEvent");
            if (this._events && this._events.backEvent) {
                this.$emit("backEvent");
            }
        },
    }
}
</script>
<style lang="less">
.ui-head {
    height: 58px;
    line-height: 58px;
    border-bottom: 1px solid #f2f2f5;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .title{
        vertical-align: baseline;
        font-size: 16px;
        color: #333;
        padding: 0 12px 0 34px;
    }
    .subhead{
        vertical-align: baseline;
        font-size: 14px;
        color: #999;
        flex: 1;
        
    }
    .back{
        vertical-align: baseline;
        font-size: 14px;
        color: #666;
        padding-right: 31px;
        .icon{
            vertical-align: middle;
            display: inline-block;
            background: url('../assets/images/i-back.png') no-repeat center;
            width: 20px;
            height: 16px;
        }
    }
}
</style>


