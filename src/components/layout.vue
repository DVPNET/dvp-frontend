<template>
    <el-container class="root-container">
        <el-header style="height: auto">
            <!--公共头部-->
            <wrapHeader
                v-show="
					$route.name !== 'vul_BulletinNo' &&
					$route.name !== 'whitePaper' &&
					$route.name !== 'Publicity'
				"
            ></wrapHeader>
        </el-header>
        <!--公共中部main-->
        <el-main :class="{ isWhitePaper: $route.name == 'whitePaper' }">
            <back-to-top visibleoffset="500">
                <div class="hometop">
                    <div>
                        <el-popover placement="left" width="150" trigger="hover">
                            <img
                                src="/static/image/common/qianbaodizhi.png?v=1"
                                style="width: 150px"
                            />
                            <span slot="reference">
								<span v-if="langshow == 'zh'"
                                ><p style="padding-top: 8px">捐赠</p>
									<p>地址</p></span
                                >
								<span v-if="langshow == 'en'"
                                ><p style="padding-top: 12px; font-size: 12px">Donation</p>
									<p style="font-size: 12px">Address</p></span
                                >
								<span v-if="langshow == 'ko'"
                                ><p style="font-size: 12px; line-height: 60px">기부</p>
									<p style="font-size: 12px"></p
                                    ></span>
							</span>
                        </el-popover>
                    </div>
                    <div>
                        <el-popover placement="left" width="150" trigger="hover">
                            <img
                                src="/static/image/common/dvpweixin.png"
                                style="width: 150px"
                            />
                            <span slot="reference" style="line-height: 60px; display: block"
                            ><img src="/static/image/home/weixin.png"
                            /></span>
                        </el-popover>
                    </div>
                    <div>
						<span style="display: inline-block; line-height: 60px"
                        ><img src="/static/image/home/hometop.png"
                        /></span>
                    </div>
                </div>
            </back-to-top>
            <transition name="el-fade-in-linear">
                <router-view></router-view>
            </transition>
        </el-main>
        <el-footer>
            <!--公共底部footer-->
            <wrapFooter
                v-show="
					$route.name !== 'login' &&
					$route.name !== 'login_en' &&
					$route.name !== 'login_ko' &&
					$route.name !== 'register' &&
					$route.name !== 'register_en' &&
					$route.name !== 'register_ko' &&
					$route.name !== 'vul_BulletinNo' &&
					$route.name !== 'whitePaper' &&
					$route.name !== 'Publicity'
				"
            ></wrapFooter>
        </el-footer>
        <div>
            <el-dialog
                title="Notice"
                :visible.sync="dialog_metaMerr"
                :show-close="false"
                :close-on-click-modal="false"
                width="500px"
            >
                <h3 class="ac" style="margin-bottom: 20px">网站维护公告</h3>
                <p class="ac" style="margin-bottom: 20px">
                    暂因系统升级网站无法登录，给您造成的不便，敬请谅解！
                </p>
            </el-dialog>
        </div>
    </el-container>
</template>

<script>
import wrapHeader from "./common/wrapHeader";
import wrapFooter from "./common/wrapFooter";

export default {
    name: "layout",
    components: {wrapHeader, wrapFooter},
    data() {
        return {
            myBackToTopStyle: {
                right: "100px",
                bottom: "150px",
            },
            dialog_metaMerr: false,
            langshow: true,
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            this.lang = localStorage.getItem("locale");
            if (this.lang == "zh") {
                this.langshow = "zh";
            } else if (this.lang == "en" || this.lang == null || this.lang == "") {
                this.langshow = "en";
            } else if (this.lang == "ko") {
                this.langshow = "ko";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../app.scss";
.root-container {
    min-width: 1200px;
}

@media (max-width: 768px) {
    .root-container {
        min-width: 100%;
    }
}

.el-main {
    min-height: 700px;
}

.el-header,
.el-main,
.el-footer {
    padding: 0 !important;
}

.btn-to-top {
    width: 60px;
    height: 60px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
}
</style>
