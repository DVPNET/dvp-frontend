<template>
    <!--公共header-->
    <div class="DVP-header-wrap">
        <div class="DVP-header clearfix">
            <el-row>
                <el-col :xs="0">
                    <el-menu
                        :default-active="$route.path"
                        mode="horizontal"
                        background-color="rgba(0,0,0,0)"
                        text-color="#bdc4d5"
                        active-text-color="#ffffff !important"
                        class="DVP_home_header el-menu-dem"
                    >
                        <el-menu-item index="" style="margin-left: 0 !important"
                        >
                            <router-link to="/" target="_parent"
                            ><img
                                src="/static/image/home/home_logo.png"
                                style="margin-top: -5px"
                                alt=""/></router-link
                            >
                        </el-menu-item>
                        <el-menu-item index="/home" @click.native="toRouter('home')"
                        >{{ $t("dvp_head.home") }}
                            <p></p
                            ></el-menu-item>
                        <el-submenu
                            index="1"
                            class="home_headup"
                            background-color="#101932"
                            text-color="#bdc4d5"
                        >
                            <template slot="title">{{ $t("dvp_head.bounty") }}</template>
                            <el-menu-item
                                index="/bountyVendor"
                                @click.native="toRouter('bountyVendor')"
                            ><i class="icon iconfont icon-changshangloudong_huaban"></i
                            >{{ $t("message.BountyVendor") }}
                            </el-menu-item
                            >
                            <el-menu-item index="/Bounty" @click.native="toRouter('Bounty')"
                            ><i class="icon iconfont icon-loudongshangjin_huaban"></i
                            >{{ $t("message.AboutBounty") }}
                            </el-menu-item
                            >
                        </el-submenu>
                        <el-menu-item index="/lddt" @click.native="toRouter('lddt')"
                        >{{ $t("dvp_head.lddt") }}
                            <p></p
                            ></el-menu-item>
                        <el-menu-item index="/fund" @click.native="toRouter('fund')"
                        >{{ $t("dvp_head.fund") }}
                            <p></p
                            ></el-menu-item>
                        <el-submenu
                            index="4"
                            class="home_headup"
                            background-color="#101932"
                            text-color="#bdc4d5"
                        >
                            <template slot="title">{{
                                    $t("dvp_head.risk_manufacturer")
                                }}
                            </template>
                            <el-menu-item
                                index="/bountyVendor"
                                @click.native="toRouter('Risk_manufacturer')"
                            >{{ $t("dvp_head.situational_awareness") }}
                            </el-menu-item
                            >
                            <el-menu-item
                                index="/securityEventLib"
                                @click.native="toRouter('securityEventLib')"
                            >{{ $t("dvp_head.blockchain_security") }}
                            </el-menu-item
                            >
                            <el-menu-item
                                index="/statisticalAnalysis"
                                @click.native="toRouter('statisticalAnalysis')"
                            >{{ $t("dvp_head.Statistics") }}
                            </el-menu-item
                            >
                        </el-submenu>
                         <el-menu-item index="/defi"
                                       @click.native="toRouter('defi')">
                             {{$t('dvp_head.Detection')}}
                             <p></p>
                         </el-menu-item>
                        <el-submenu
                            index="2"
                            class="home_headup"
                            background-color="#101932"
                            text-color="#bdc4d5"
                        >
                            <template slot="title"> {{ $t("dvp_head.community") }}</template>
                            <el-menu-item index="/rule" @click.native="toRouter('rule')"
                            ><i class="icon iconfont icon-guize"></i
                            >{{ $t("dvp_head.rule") }}
                            </el-menu-item
                            >
                            <el-menu-item index="/leader" @click.native="toRouter('leader')"
                            ><i class="icon iconfont icon-guize"></i
                            >{{ $t("dvp_head.leader_plan") }}
                            </el-menu-item
                            >
                            <el-menu-item
                                index="/rankings"
                                @click.native="toRouter('rankings')"
                            ><i class="icon iconfont icon-paihang"></i
                            >{{ $t("dvp_head.rankings") }}
                            </el-menu-item
                            >
                            <el-menu-item index="/faq" @click.native="toRouter('faq')"
                            ><i class="icon iconfont icon-faq"></i
                            >{{ $t("dvp_head.faq") }}
                            </el-menu-item
                            >
                        </el-submenu>
                        <!--登录注册-->
                        <el-menu-item
                            index=""
                            v-cloak
                            v-show="headbtns"
                            style="
								float: right;
								padding-right: 70px !important;
								box-sizing: border-box !important;
							"
                        >
                            <router-link to="/login" target="_parent"
                            ><img
                                src="/static/image/common/loginIcon.png"
                                style="margin: 10px"
                            />{{ $t("dvp_head.login") }}
                            </router-link
                            >
                            <span class="S_line" :class="{ padding0: $i18n.locale == 'en' }"
                            >|</span
                            >
                            <router-link to="/register" target="_parent">{{
                                    $t("dvp_head.register")
                                }}
                            </router-link>
                        </el-menu-item>
                        <!--个人信息-->
                        <el-menu-item
                            class="zcpadd"
                            index=""
                            v-cloak
                            v-show="!headbtns"
                            style="
								float: right;
								padding-right: 70px !important;
								box-sizing: border-box !important;
							"
                        >
                            <!--白帽子个人中心-->
                            <div class="login_header imgMarginr" v-if="tokenType == 1">
                                <!--白帽子消息-->
                                <el-popover placement="bottom" trigger="click" width="150">
                                    <el-card class="box-card messagecard">
                                        <div style="clear: both">
                                            <div slot="header" class="msgHeader">
                                                <span class="fl">{{ $t("message.Message") }}</span>
                                                <span
                                                    class="fr cp"
                                                    @click="BMZmsgRem"
                                                    v-if="$store.state.BMZuser.msgList.length > 0"
                                                >{{ $t("message.Empty") }}</span
                                                >
                                            </div>
                                            <div class="msgBody">
												<span v-if="$store.state.BMZuser.msgList.length == 0">{{
                                                        $t("message.noMessage")
                                                    }}</span>
                                                <div
                                                    v-for="(val, index) in $store.state.BMZuser.msgList"
                                                >
                                                    <p>
                                                        <router-link to="/membox/member/unread_message">{{
                                                                val.title
                                                            }}
                                                        </router-link>
                                                    </p>
                                                </div>
                                            </div>
                                            <span
                                                class="msgFooter cp"
                                                @click="BMZmsgall"
                                                v-if="$store.state.BMZuser.msgList.length > 6"
                                            >{{ $t("message.viewAll") }}</span
                                            >
                                        </div>
                                    </el-card>
                                    <el-badge
                                        :value="
											$store.state.BMZuser.msgCount == 0
												? ($store.state.BMZuser.msgCount = '')
												: $store.state.BMZuser.msgCount
										"
                                        class="item hand"
                                        slot="reference"
                                    >
                                        <img
                                            src="/static/image/home/msg.png"
                                            class="bell-img notification-img"
                                        />
                                    </el-badge>
                                </el-popover>
                                <!--个人中心-->
                                <el-popover placement="bottom" trigger="click" width="150">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearfix">
                                            <span>{{ $store.state.BMZuser.info.hid }}</span>
                                        </div>
                                        <div class="text item personcen_box">
                                            <p>
                                                <router-link to="/membox/member/vuls">{{
                                                        $t("message.personalCenter")
                                                    }}
                                                </router-link>
                                            </p>
                                            <p @click="logoutBtn">
                                                <span>{{ $t("message.signOut") }}</span>
                                            </p>
                                        </div>
                                    </el-card>
                                    <!--白帽子头像-->
                                    <img
                                        :src="$store.state.BMZuser.info.avatar_url"
                                        :onerror="defaultImg"
                                        class="userImg"
                                        slot="reference"
                                    />
                                </el-popover>
                            </div>
                            <div class="login_header imgMarginr" v-if="tokenType == 2">
                                <!--厂商消息-->
                                <el-popover placement="bottom" trigger="click" width="150">
                                    <el-card class="box-card messagecard">
                                        <div v-if="tokenType == 2">
                                            <div slot="header" class="msgHeader">
                                                <span class="fl">{{ $t("message.Message") }}</span>
                                                <span
                                                    class="fr cp"
                                                    @click="CSmsgRem"
                                                    v-if="$store.state.CSuser.msgList.length > 0"
                                                >{{ $t("message.Empty") }}</span
                                                >
                                            </div>
                                            <div class="msgBody">
												<span v-if="$store.state.CSuser.msgList.length == 0">{{
                                                        $t("message.noMessage")
                                                    }}</span>
                                                <div v-for="val in $store.state.CSuser.msgList">
                                                    <p>
                                                        <router-link to="/combox/company/comMessage">{{
                                                                val.title
                                                            }}
                                                        </router-link>
                                                    </p>
                                                </div>
                                            </div>
                                            <span
                                                class="msgFooter cp"
                                                @click="CSmsgall"
                                                v-if="$store.state.CSuser.msgList.length > 6"
                                            >{{ $t("message.viewAll") }}</span
                                            >
                                        </div>
                                    </el-card>
                                    <el-badge
                                        :value="
											$store.state.CSuser.msgCount == 0
												? ($store.state.CSuser.msgCount = '')
												: $store.state.CSuser.msgCount
										"
                                        class="item hand"
                                        slot="reference"
                                    >
                                        <img
                                            src="/static/image/home/msg.png"
                                            class="bell-img notification-img"
                                        />
                                    </el-badge>
                                </el-popover>
                                <!--个人中心-->
                                <el-popover placement="bottom" width="150" trigger="click">
                                    <el-card class="box-card">
                                        <div slot="header" class="clearfix">
                                            <span>{{ $store.state.CSuser.user.company_name }}</span>
                                        </div>
                                        <div class="text item personcen_box">
                                            <p>
												<span @click="CSperson()">{{
                                                        $t("message.personalCenter")
                                                    }}</span>
                                            </p>
                                            <p>
                                                <router-link to="/combox/company/comMessage">{{
                                                        $t("message.MyMessage")
                                                    }}
                                                </router-link>
                                            </p>
                                            <p @click="logoutBtn2">
                                                <span>{{ $t("message.signOut") }}</span>
                                            </p>
                                        </div>
                                    </el-card>
                                    <!--厂商头像-->
                                    <img
                                        :src="$store.state.CSuser.user.logo"
                                        :onerror="defaultImg"
                                        class="userImg"
                                        slot="reference"
                                    />
                                </el-popover>
                            </div>
                        </el-menu-item>
                        <el-submenu
                            index="3"
                            class="home_headup language_box"
                            background-color="#101932"
                            text-color="#bdc4d5"
                        >
                            <template slot="title"
                            ><span>{{ $t("message.langs") }}</span></template
                            >
                            <el-menu-item
                                v-for="data in langList"
                                :index="data.index"
                                :key="data.index"
                                default-active
                                @click.native="toggleLang(data.lang)"
                                :disabled="$i18n.locale == data.lang"
                            >
                                <span style="color: #bdc4d5">{{data.text}}</span>
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :xs="24" :sm="0">
                    <div class="mobile-header">
                        <div class="left-item">
                            <router-link class="logo" to="/" target="_parent"
                            ><img src="/static/image/home/home_logo.png" alt=""
                            /></router-link>
                            <img
                                @click.stop="activeBar = !activeBar"
                                src="./images/more.svg"
                                alt=""
                            />
                        </div>
                        <div class="right-item">
                            <router-link to="/login" target="_parent"
                            ><img
                                src="/static/image/common/loginIcon.png"
                                style="margin: 10px"
                            />{{ $t("dvp_head.login") }}
                            </router-link
                            >
                            <span class="S_line" :class="{ padding0: $i18n.locale == 'en' }"
                            >|</span
                            >
                            <router-link to="/register" target="_parent">{{
                                    $t("dvp_head.register")
                                }}
                            </router-link>
                        </div>
                    </div>
                    <div
                        :class="['overlayer', { active: activeBar }]"
                        @click.stop="activeBar = false"
                    >
                        <div class="side-bar">
                            <template v-for="(item, index) in navs">
                                <div class="parent" v-if="!item.children" :key="item.name">
                                    <router-link :to="`/${item.name}`">{{
                                            $t(item.title)
                                        }}
                                    </router-link>
                                </div>
                                <template v-else>
                                    <div class="title parent">{{ $t(item.title) }}</div>
                                    <div
                                        :class="['child', { last: i === item.children.length - 1 }]"
                                        v-for="(d, i) in item.children"
                                        :key="d.name"
                                    >
                                        <router-link :to="d.name">{{ $t(d.title) }}</router-link>
                                    </div>
                                </template>
                            </template>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: "wrapHeader",
    data() {
        return {
            activeBar: false,
            navs: [
                {
                    name: "home",
                    title: "dvp_head.home",
                },
                {
                    title: "dvp_head.bounty",
                    children: [
                        {
                            name: "bountyVendor",
                            title: "message.BountyVendor",
                        },
                        {
                            name: "Bounty",
                            title: "message.AboutBounty",
                        },
                    ],
                },
                {
                    name: "lddt",
                    title: "dvp_head.lddt",
                },
                {
                    name: "fund",
                    title: "dvp_head.fund",
                },
                {
                    title: "dvp_head.risk_manufacturer",
                    children: [
                        {
                            name: "Risk_manufacturer",
                            title: "dvp_head.situational_awareness",
                        },
                        {
                            name: "securityEventLib",
                            title: "dvp_head.blockchain_security",
                        },
                        {
                            name: "statisticalAnalysis",
                            title: "dvp_head.Statistics",
                        },
                    ],
                },
                {
                    title: "dvp_head.community",
                    children: [
                        {
                            name: "rule",
                            title: "dvp_head.rule",
                        },
                        {
                            name: "leader",
                            title: "dvp_head.leader_plan",
                        },
                        {
                            name: "rankings",
                            title: "dvp_head.rankings",
                        },
                        {
                            name: "faq",
                            title: "dvp_head.faq",
                        },
                    ],
                },
            ],
            headbtns: true,
            activeIndex: "/",
            tokenType: 0,
            defaultImg:
                'this.src="' + require("../../../static/image/icon-hover.png") + '"',
            langList: [
                {index: '3-1', text: '中文', lang: 'zh'},
                {index: '3-2', text: 'English', lang: 'en'},
                {index: '3-3', text: 'Korean', lang: 'ko'},
            ]
        };
    },
    watch: {
        $route() {
            this.userData();
        },
    },
    computed:{
        ...mapState([
            'lang'
        ])
    },
    mounted() {
        this.initData();
        this.userData();
    },
    methods: {
        toRouter(url) {
            this.$router.push({path: `/${url}`});
        },
        userData() {
            this.$ajax.captcha + "?t=" + new Date().getTime();
            this.activeIndex = this.$route.fullPath;
            this.tokenType = window.localStorage.getItem("tokenType");
            if (this.tokenType == 1) {
                this.headbtns = false;
            } else if (this.tokenType == 2) {
                this.headbtns = false;
            } else {
                this.headbtns = true;
            }
        },
        initData() {
            this.$store.state.BMZuser.info = [];
            this.$store.state.BMZuser.msgList = [];
            this.$store.state.BMZuser.skillList = [];
            this.$store.state.CSuser.user = [];
            this.$store.state.CSuser.msgList = [];
            this.tokenType = window.localStorage.getItem("tokenType");
            if (!window.localStorage.getItem("token")) {
                window.localStorage.setItem("tokenType", 0);
            }
            if (this.tokenType != 0 && this.tokenType != 1 && this.tokenType != 2) {
                window.localStorage.setItem("tokenType", 0);
            }
            if (this.tokenType == 1) {
                this.headbtns = false;
                //白帽用户个人信息
                if (this.lang == "zh") {
                    this.$ajax.BMZinfo({language: "zh_CN"}).then((res) => {
                        if (res.errcode === 1) {
                            window.localStorage.setItem("$BMZuser", JSON.stringify(res.data));
                            this.$store.dispatch(
                                "setBMZuser",
                                window.localStorage.getItem("$BMZuser")
                            );
                        }
                    });
                } else if (
                    this.lang == "en" ||
                    this.lang == null ||
                    this.lang == "" ||
                    this.lang == "ko"
                ) {
                    this.$ajax.BMZinfo({language: "en_US"}).then((res) => {
                        if (res.errcode === 1) {
                            window.localStorage.setItem("$BMZuser", JSON.stringify(res.data));
                            this.$store.dispatch(
                                "setBMZuser",
                                window.localStorage.getItem("$BMZuser")
                            );
                        }
                    });
                }
            } else if (this.tokenType == 2) {
                this.headbtns = false;
                //厂商用户个人信息
                this.$ajax.CSinfo().then((res) => {
                    if (res.errcode === 1) {
                        window.localStorage.setItem("$CSuser", JSON.stringify(res.data));
                        this.$store.dispatch(
                            "setCSuser",
                            window.localStorage.getItem("$CSuser")
                        );
                    }
                });
            } else {
                this.headbtns = true;
            }
            if (this.$route.name == "unread_message") {
                this.$store.state.BMZuser.msgList.length = 0;
            }
        },
        toggleLang(lang) {
            this.$store.commit('setLang', lang);
            location.replace(location.href);
        },
        CSperson() {
            this.$ajax.CSinfo().then((res) => {
                if (res.errcode === 1) {
                    if (res.data.emailReal == 1) {
                        this.$router.push({path: "/combox/company/companyOne"});
                    } else if (res.data.emailReal == 0) {
                        this.$router.push({path: "/comEmails"});
                    }
                }
            });
        },
        //退出登录
        logoutBtn() {
            this.$ajax.BMZlogout().then((res) => {
                if (res.errcode == 1) {
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("tokenType");
                    this.$router.push({path: "/"});
                    this.$store.dispatch("clearUser");
                    this.$store.state.BMZuser.info = [];
                    this.$store.state.BMZuser.msgList = [];
                    this.$store.state.BMZuser.skillList = [];
                }
            });
        },
        logoutBtn2() {
            this.$ajax.CSlogout().then((res) => {
                if (res.errcode == 1) {
                    window.localStorage.removeItem("token");
                    window.localStorage.removeItem("tokenType");
                    this.$router.push({path: "/"});
                    this.$store.dispatch("clearUser");
                    this.$store.state.CSuser.user = [];
                    this.$store.state.CSuser.msgList = [];
                }
            });
        },
        handleSelect(key, keyPath) {
        },
        BMZmsgRem() {
            this.$store.state.BMZuser.msgCount = "";
            this.$ajax.BMZUserMsgList({type: 0, status: 0});
            this.$store.state.BMZuser.msgList.length = 0;
        },
        BMZmsgall() {
            this.$store.state.BMZuser.msgCount = "";
            this.$store.state.BMZuser.msgList.length = 0;
            this.$router.push({path: "/membox/member/unread_message"});
        },
        CSmsgRem() {
            this.$store.state.CSuser.msgCount = "";
            this.$ajax.CSUserMsgList({type: 1, status: 0});
            this.$store.state.CSuser.msgList.length = 0;
        },
        CSmsgall() {
            this.$store.state.CSuser.msgCount = "";
            this.$store.state.CSuser.msgList.length = 0;
            this.$router.push({path: "/combox/company/comMessage"});
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../app.scss";
@media (max-width: 768px) {
    .mobile-header {
        height: p2r(64);
        font-size: p2r(12);
        padding: p2r(16) 0;
        box-sizing: border-box;
        padding-right: p2r(15);
        font-size: p2r(37.5);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-item,
        .right-item {
            display: flex;
        }

        .logo {
            margin-right: p2r(20);

            img {
                width: p2r(91);
            }

            display: flex;
        }
    }
    .overlayer {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        overflow: scroll;
        transition: transform 0.3s;
        transform: translateX(-100%);
        display: flex;

        &.active {
            transform: translateX(0);
        }

        .side-bar {
            padding-top: p2r(64);
            min-width: p2r(193);
            background: #081024;
            padding: p2r(26) p2r(15);
            line-height: unset;

            .parent {
                color: #fff;
                line-height: p2r(22);
                font-size: p2r(16);
                margin-bottom: p2r(20);
                font-weight: 600;

                a {
                    padding: 0;
                    color: #fff;
                    font-size: p2r(16) !important;
                }
            }

            .child {
                line-height: p2r(20);
                color: #7e95ab;
                margin-bottom: p2r(10);

                &.last {
                    margin-bottom: p2r(20);
                }

                a {
                    padding: 0;
                    font-size: p2r(14) !important;
                }
            }
        }
    }
}
</style>
<style>
.home_headup:hover {
    background: #101932 !important;
}

.icon-language4 {
    color: #ffffff !important;
}

.language_box .el-submenu__title {
    padding-right: 0 !important;
}

.userImg {
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 15px;
}

[v-cloak] {
    display: none;
}

.DVP-header-wrap .el-badge__content.is-fixed {
    top: 20px !important;
    right: 30px !important;
}

.msgBody {
    height: 180px;
    overflow: hidden;
    padding: 0 20px;
    box-sizing: border-box;
}

.msgBody p a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.el-badge__content {
    width: 18px !important;
    height: 18px !important;
    padding: 0 !important;
    box-sizing: border-box;
}

.messageBox {
    padding: 10px;
    text-align: center;
}

.DVP-header-wrap .el-popover {
    width: auto !important;
    min-width: 150px;
    height: auto !important;
    padding: 0;
}

.login_header {
    margin-top: -5px;
}

.text {
    font-size: 14px;
}

.message_box {
    padding: 10px;
}

.el-card__body {
    padding: 0 !important;
}

.personcen_box p {
    color: #4c5b6a;
    display: block;
    padding: 10px;
    cursor: pointer;
}

.personcen_box p span {
    width: 100%;
    height: 100%;
    display: block;
}

.personcen_box a {
    color: #303133;
}

.personcen_box p:hover {
    background: #e2eaf1;
}

.left-header li:nth-of-type(1) {
    padding-left: 0 !important;
}

.right-header li:nth-last-of-type(1) {
    padding-right: 0 !important;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.DVP-header-wrap .box-card {
    width: auto;
}

.DVP-header-wrap {
    width: 100%;
    /* min-width: 1200px; */
    z-index: 9999999999999999999 !important;
    background: #091023;
}

.DVP-header-wrap .imgMarginr {
    margin-right: 10px;
}

.DVP-header-wrap .language_box {
    position: absolute;
    right: 0;
    top: 0;
}

.language_box span,
.language_box p {
    color: #bdc4d5 !important;
}

.DVP_home_header {
    /*min-width: 1300px;*/
}

.DVP_home_header .el-menu-item:nth-of-type(1).is-active {
    border-bottom: none !important;
}

.DVP_home_header .el-menu-item:nth-last-of-type(1).is-active {
    border-bottom: none !important;
}

.DVP-header-wrap .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 0 !important;
}

.DVP-header-wrap .el-menu-item {
    position: relative;
    border-bottom: 0 !important;
}

.DVP-header-wrap .el-menu-item p {
    width: 0px;
    left: 60px;
    position: absolute;
    border-top: 2px solid #ffffff;
    bottom: 0;
    left: 0;
    transition: width 0.3s;
    -moz-transition: width 0.3s;
    -webkit-transition: width 0.3s;
}

.DVP-header-wrap .el-menu-item:hover p {
    left: 60px;
    position: absolute;
    border-top: 2px solid #ffffff;
    bottom: 0;
    left: 0;
    width: 15px;
    transition: width 0.3s;
    -moz-transition: width 0.3s; /* Firefox 4 */
    -webkit-transition: width 0.3s; /* Safari 和 Chrome */
    -o-transition: width 0.3s;
}

.DVP-header-wrap .el-menu--horizontal > .el-menu-item.is-active p {
    width: 15px;
    left: 60px;
    position: absolute;
    border-top: 2px solid #ffffff;
    bottom: 0;
    left: 0;
    transition: width 0.3s;
    -moz-transition: width 0.3s;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
}

.DVP_home_header .el-menu-item:nth-of-type(1).is-active {
    border-bottom: none !important;
}

.DVP_home_header .el-menu-item:nth-last-of-type(1).is-active {
    border-bottom: none !important;
}

.DVP-header-wrap .el-menu-item {
    padding: 0 !important;
    margin: 0 15px !important;
}

.DVP-header-wrap .el-menu.el-menu--horizontal {
    border-bottom: 0 !important;
}

.DVP-header-wrap .el-menu-item,
.DVP-header-wrap .el-submenu__title {
    font-size: 16px !important;
    color: #bdc4d5 !important;
    background-color: 0 !important;
}

.DVP-header-wrap .el-menu-item:nth-of-type(1) img {
    width: 100px;
    /*background-image: url(/static/image/home/home_logo.png);
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 100px auto;*/
    z-index: 999999999999999999;
}

.DVP-header-wrap .el-menu-item:hover,
.DVP-header-wrap .el-submenu:hover,
.DVP-header-wrap .el-submenu__title:hover {
    background-color: inherit !important;
}

.DVP-header-wrap a,
.DVP-header-wrap .S_line {
    padding: 0 4px;
    font-size: 14px !important;
    background: inherit !important;
    border: inherit !important;
    display: inline-block;
    color: #68748e;
}

.DVP-header-wrap .el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
    min-width: 100px !important;
    width: auto !important;
    background: #101932 !important;
}

.el-menu--popup li {
    font-size: 16px;
}

.el-menu--popup li i {
    color: #bdc4d5;
}

.el-menu--popup li:hover {
    background: #2196f3 !important;
    color: #ffffff !important;
    font-size: 16px;
}

.el-menu--popup li:hover i {
    color: #ffffff !important;
}

.el-menu--popup i {
    margin: 0 8px 0 0;
}

.DVP-header-wrap .el-menu--popup li {
    color: transparent !important;
    color: #31412e !important;
}

.messagecard .el-card__body {
    max-height: 300px !important;
    clear: both;
}

.messagecard span {
    display: block;
    text-align: center;
    line-height: 32px;
}

.messagecard p a {
    width: 100%;
    display: inline-block;
    line-height: 32px;
    text-align: left;
}

.msgHeader {
    width: 100%;
    border-bottom: 1px solid #e2eaf1;
    display: inline-block;
    padding: 0 10px;
    box-sizing: border-box;
    background: #f2f4f5;
}

.msgHeader span {
    line-height: 32px;
}

.msgFooter {
    width: 100%;
    border-top: 1px solid #e2eaf1;
    line-height: 32px;
}

.el-message {
    z-index: 99999999999999999999999999999999 !important;
}

/* @media screen and (max-width: 760px) {
	.DVP-header-wrap {
		position: inherit;
		min-width: 465px;
	}
	.DVP-header-wrap {
		min-width: 465px;
	}
} */

.padding0 {
    padding: 0 !important;
    margin: 0 4px !important;
}
</style>
