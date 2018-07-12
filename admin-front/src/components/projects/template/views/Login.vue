<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item prop="captcha">
                    <el-col :span="12">
                        <el-input placeholder="验证码" v-model='ruleForm.captcha'></el-input>
                    </el-col>
                    <el-col :span="12">
                        <img :src="valImg" @click="updateVal" class="val-img">
                    </el-col>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
            <p class="copyright">Copyright &copy; 2017 keywa.com All Rights Reserved</p>
        </div>
    </div>
</template>

<script>
    import http from '../../../common/http.js';
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    captcha: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    captcha: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                },
                valImg: ''
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        http.getData('/Admin/Public/checklogin/', {
                            ...this.ruleForm
                        }, res => {
                            if(parseInt(res.data.code) === 200){
                                localStorage.setItem('ms_username',this.ruleForm.username);
                                this.$router.push('/');
                            }else{
                                
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            updateVal(){
                this.valImg = `${http.proSetting.domain}/Admin/Public/verify/${new Date().getTime()}`
            }
        },
        created(){
            this.valImg = `${http.proSetting.domain}/Admin/Public/verify/${new Date().getTime()}`
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:200px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    .val-img{
        width:85%;
        height: 35px;
        margin-left: 20px;
    }
    .copyright {
      position: absolute;
      left: 0;
      width: 100%;
      bottom: -30px;
      color: #ccc;
      font-family: arial;
      font-size: 12px;
      text-align: center;
    }
</style>