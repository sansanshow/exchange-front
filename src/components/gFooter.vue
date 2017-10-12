<template>
    <!--footer-->
    <div class="g-footer">
        <div class="wrap1200 link-group fix">
            <ul class="link-list l">
                <li class="link-head">关于我们</li>
                <li><a href="">公司简介</a></li>
                <li><a href="">管理团队</a></li>
                <li><a href="">联系我们</a></li>
            </ul>
            <ul class="link-list l">
                <li class="link-head">下载支持</li>
                <li><a href="">API文档</a></li>
                <li><a href="">其他下载</a></li>
            </ul>
            <ul class="link-list l">
                <li class="link-head">客户服务</li>
                <li><a href="">使用教程</a></li>
                <li><a href="">常见问题</a></li>
                <li><a href="">用户协议</a></li>
            </ul>
            <div class="qrcode fix r">
                <div class="img-wrap r">
                    <img src="../assets/images/qrcode.png" alt="">
                </div>
                <div class="text r">
                    <p class="line p1">客服电话</p>
                    <p class="line p2">40055698521</p>
                    <p class="line p3">www.51bi.com</p>
                </div>

            </div>
        </div>
        <div class="wrap1200">
            <div class="other fix">
                <ul class="help-list l">
                    <li><a href="">使用条款</a></li>
                    <li><a href="">隐私政策</a></li>
                    <li><a href="">Block@2017</a></li>
                </ul>
                <span class="warn-tips r">市场有风险 投资需谨慎</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {

      }
  }
}
</script>
<style>
.g-footer {
    background: #2e3033;
    height: 243px;
}

.g-footer .link-group {
    box-sizing: border-box;
    padding: 30px 31px 0 38px;
    height: 172px;
    border-bottom: 1px solid #666;
}

.g-footer .link-list {
    margin-right: 198px;
    font-size: 14px;
    color: #999;
}

.g-footer .link-list li {
    line-height: 30px;
}

.g-footer .link-head {
    padding: 5px 0;
    font-size: 14px;
    color: #cccccc;
}

.g-footer .link-list a {
    color: #999;
}

.g-footer .qrcode {
    margin-top: 24px;
    width: 265px;
}

.g-footer .qrcode .img-wrap {
    width: 80px;
    height: 80px;
    overflow: hidden;
}

.g-footer .qrcode .text {
    margin-right: 20px;
    font-size: 14px;
    color: #999;
}

.g-footer .qrcode .text .line {
    text-align: right;
    line-height: 1.5;
}

.g-footer .qrcode .text .p2 {
    font-size: 24px;
    color: #ccc;
}

.g-footer .other {
    margin: 16px 31px 0 38px;
    font-size: 12px
}

.g-footer .help-list a {
    color: #ccc;
}

.g-footer .help-list li {
    float: left;
    margin-right: 24px;
}

.g-footer .other .warn-tips {
    color: #666;
}
</style>


