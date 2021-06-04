<template>
    <!--激活邮箱-->
    <div class="resEmailSucessBox">
        <div v-show="resEmailSucess" class="resEmailSucess">
            <div class="reg-yzyx">
                <p>{{ $t('Login.ActivationEmail') }} <br>{{ $t('Login.PleaseSignIn') }}
                    <a href="#">{{ userEmail.email }}</a>
                    {{ $t('Login.ActivateTheAccount') }}</p>
                <div class="comemailBtn">
                    <a :href="'https://'+userEmail.emailUrl" target="_blank"
                       v-if="userEmail.emailUrl !=''">
                        <el-button type="primary" class="reg-jryx btnshadow" style="width:150px">
                            {{ $t('Login.EnterTheMailbox') }}
                        </el-button>
                    </a>
                    <el-button type="primary"
                               v-if="userEmail.emailUrl ==''" class="reg-jryx btnshadow"
                               style="width:150px" @click="emailshowBtn">
                        {{ $t('Login.EnterTheMailbox') }}
                    </el-button>
                </div>
                <p>{{ $t('Login.NotReceived') }} <a href="#" class="repeat-btn" @click="repeatBtn">
                    {{ $t('Login.Resend') }}
                </a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userEmail: '',
        required: true
    },
    name: 'comEmail',
    data() {
        return {
            resEmailSucess: true,
            emailshow: false
        }
    },
    methods: {
        initData() {
        },
        emailshowBtn() {
            this.$message.error("点击进入邮箱无反应？请直接到邮箱查收呢");
        },
        //再次发送
        repeatBtn() {
            this.$ajax.CSsendEmail()
        }
    },
    created() {
        this.initData();
    }
}
</script>

<style>
.reg-yzyx p {
    text-align: center;
    font-size: 16px;
}

.comemailBtn {
    width: 100%;
}

.comemailBtn .el-button {
    margin: 20px auto !important;
    display: block;
}

.comemailBtn .el-button a:hover {
    color: #ffffff !important;
}

.comemailBtn .reg-jryx {
    display: block;
    margin: 20px auto;
}

.comemailBtn .reg-jryx a {
    color: #ffffff;
}

.resEmailSucessBox {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
}

.resEmailSucess {
    width: 500px;
    position: fixed;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 99;
    margin: 100px auto;
    padding: 30px;
    box-sizing: border-box;
}
</style>
