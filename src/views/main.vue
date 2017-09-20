<template>
  <div>
    
    <router-view class="container">
       
    </router-view >
    <g-footer></g-footer>
  </div>
</template>
<script>
export default {
    components:{
    },
    data(){
        return {

        }
    }
}
</script>
<style>
.i-login-form {
    box-sizing: border-box;
    width: 300px;
    height: 322px;
    padding-top: 28px;
    margin-top: 29px;
    background: rgba(0, 0, 0, 0.5);
}

.i-form-title {
    text-align: center;
    font-size: 18px;
    line-height: 1.33;
    color: #eee;
    margin-bottom: 21px;
}

.i-form-field {
    margin-bottom: 15px;
    padding: 0 20px;
}

.i-form-field input {
    padding: 0 14px;
    height: 34px;
    border-top: 1px solid #aebdc8;
    background: #fff;
}

.i-form-field a {
    color: #fff;
}

.i-form-field .login-btn {
    height: 34px;
    font-size: 14px;
    color: #fff;
    background: #0f88ed;
}
</style>
