<template>
  <div>
    <ul class="pagination" >
        <li class="total text">共{{total}}条</li>
        <li v-show="current != 1" @click="current-- && goto(current)" >首页</li>
        <li v-show="current != 1" @click="current-- && goto(current)" >上一页</li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
            {{index}}
        </li>
        <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">下一页</li>
        <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">尾页</li>
        <li class="info text">页次{{current}}/{{allpage}}页({{unit}}条/页)</li>
    </ul>  
  </div>
</template>
<script>
export default {
    components:{
    
    },
    data(){
        return {
            total: 60, // 总条数
            unit: 10,
            current:11,
            showItem:5,
            allpage:29
        }
    },
     computed:{
        pages:function(){
            var pag = [];
                if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                    //总页数和要显示的条数那个大就显示多少条
                    var i = Math.min(this.showItem,this.allpage);
                    while(i){
                        pag.unshift(i--);
                    }
                }else{ //当前页数大于显示页数了
                    var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                        i = this.showItem;
                    if( middle >  (this.allpage - this.showItem)  ){
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while(i--){
                        pag.push( middle++ );
                    }
                }
                return pag
            }
    },
    methods: {
        goto:function(index){
            if(index == this.current) return;
            this.current = index;
            this.$emit('goPage',this.current);
            //这里可以发送ajax请求
        }
    }
}
</script>
<style lang="less" scoped>
li{
    list-style:none;
    cursor: pointer;
}
.pagination li.total,
.pagination li.info{
    border: none;
}
a{
    text-decoration:none;
}
.pagination {
    margin: 0 auto;
    position: relative;
}
.pagination li{
    display: inline-block;
    margin:0 5px;
}
.pagination li{
    padding:.5rem .5rem;
    display:inline-block;
    border:1px solid #e4e4e4;
    background:#fff;
    color:#999999;
}
.pagination li:hover{
    background:#eee;
}
.pagination li.active{
    border:none;
    color:#0f88ed;
}
.pagination li.text:hover{
    background:none;
}
</style>


