<template>
    <div class="login_page fillcontain">
        <transition name="form-fade" mode="in-out">
            <section class="form_contianer" v-show="showLogin">
                <div class="manage_tip">
                    <p>计算机应用大赛专家管理系统</p>
                </div>
                <el-form :model="loginForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" placeholder="用户名"><span></span></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitLoginForm('loginForm')" class="submit_btn">登陆
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitSigninForm('loginForm')" class="submit_btn">注册
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleNavIndex" class="submit_btn">游客模式
                        </el-button>
                    </el-form-item>
                </el-form>
            </section>
        </transition>
    </div>
</template>
<script>
    import {login, signin, getAdminInfo} from '@/api/getData'
    import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                signinForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                },
                showLogin: false,
            }
        },
        mounted() {
            this.showLogin = true;
            if (!this.adminInfo.id) {
                this.getAdminData()
            }
        },
        computed: {
            ...mapState(['adminInfo']),
        },
        methods: {
            ...mapActions(['getAdminData']),
            async submitLoginForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = await login({name: this.loginForm.username, password: this.loginForm.password})
                        if (res.status == 1) {
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            });
                            this.$router.push('manage')
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.message
                            });
                        }
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '登录失败,请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            },
            async submitSigninForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const res = await signin({name: this.loginForm.username, password: this.loginForm.password})
                        if (res.status == 1) {
                            this.$message({
                                type: 'success',
                                message: '您已提交注册申请,请等待管理员审批'
                            });
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.message
                            });
                        }
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            },
            handleNavIndex(){
                this.$router.push('/manage')
            }
        },
        watch: {
            adminInfo: function (newValue) {
                if (newValue.id) {
                    this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
                    this.$router.push('manage')
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../style/mixin';

    .login_page {
        background-color: #324057;
    }

    .manage_tip {
        position: absolute;
        width: 100%;
        top: -100px;
        left: 0;

        p {
            font-size: 34px;
            color: #fff;
        }
    }

    .form_contianer {
        .wh(320px, 300px);
        .ctp(320px, 300px);
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        background-color: #fff;

        .submit_btn {
            width: 100%;
            font-size: 16px;
        }
    }

    .tip {
        font-size: 12px;
        color: red;
    }

    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }

    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>
