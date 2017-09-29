<template>
  <ui-right-wrap :headOptions="headOptions">
aa
  </ui-right-wrap>
</template>
<script>
import UiRightWrap from '../../components/UiRightWrap'
export default {
    components:{
      UiRightWrap
    },
    data(){
        return {
          headOptions:{
            title: '账户管理',
            sub: '请不要透露短信和谷歌验证码给任何人，包括我们的客服。',
            back: '返回'
          },
        }
    }
}
</script>
<style lang="less" scoped>

</style>


