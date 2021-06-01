<template>
	<div class="project-main">
		<h3 class="company-h3 wow fadeInLeft animated title hidden-xs animated">
			{{ $t("message.vulfirms") }}
			<p class="company-h3-line"></p>
		</h3>
		<p class="company_p"><em></em>~{{ $t("message.vulfirmsTitle") }}~</p>
		<div v-for="(item, index) in LDSJData" :key="index" class="company-item cp">
			<el-card shadow="hover">
				<dl @mouseleave="comy_item = -1">
					<dt
						class="company-logo"
						@mouseenter="comy_hover(index)"
						@click="companyIN(item.company_name)"
					>
						<img v-bind:src="item.logo" />
					</dt>
					<dd class="company-con">
						<router-link to="/membox/vul">
							<p>
								{{ item.company_name }}
								<img
									:title="$t('icon_title.dvp_partners')"
									src="/static/image/home/Security_aut.png"
									alt=""
								/>
							</p>
							<div class="clearfix company-reward">
								<span class="fl">
									<el-popover
										placement="bottom-start"
										title=" "
										width="150"
										trigger="hover"
										content=""
									>
										<div class="elpopcons">
											<p
												style="
													color: #2196f3;
													text-align: center;
													margin-bottom: 7px;
													font-size: 14px;
												"
											>
												{{ $t("message.vulfirmsHighest") }}
											</p>
											<p style="font-size: 12px; line-height: 22px">
												{{ $t("message.highestbountyclaimed") }}
											</p>
										</div>
										<i class="el-icon-warning" slot="reference"></i>
									</el-popover>
									{{ $t("message.vulfirmsHighest") }}: <b>{{ item.gra_end }}</b>
								</span>
								<span class="fr">
									<el-popover
										placement="bottom-start"
										title=""
										width="150"
										trigger="hover"
										content=""
									>
										<div class="elpopcons">
											<p
												style="
													color: #2196f3;
													text-align: center;
													margin-bottom: 7px;
													font-size: 14px;
												"
											>
												{{ $t("message.SecurityDeposit") }}
											</p>
											<p style="font-size: 12px; line-height: 22px">
												{{ $t("message.depositvendorDVPpool") }}
											</p>
										</div>
										<i class="el-icon-warning" slot="reference"></i>
									</el-popover>
									{{ $t("message.Security") }}:
									<b>{{ (item.balance * 1).toFixed(2) }}</b>
								</span>
							</div>
						</router-link>
					</dd>
				</dl>
			</el-card>

			<div
				class="ldsj_hover"
				v-show="comy_item == index"
				style="pointer-events: none"
			>
				<div class="wow fadeInUp animated hidden-xs animated">
					<p v-if="item.introduction != ' '">{{ item.introduction }} <b></b></p>
					<p v-if="item.introduction == '' || item.introduction == null">
						暂无简介
					</p>
				</div>

				<el-button
					class="btnshadow wow fadeInUps animated little-title animated homewardbtn"
					style="width: 160px; color: #2196f3; font-size: 16px"
					>{{ $t("btn.sub_vul") }}</el-button
				>
			</div>
		</div>
		<div style="clear: both"></div>
		<div class="click_more">
			<router-link to="/bountyVendor"
				><el-button type="primary" class="common-btn">{{
					$t("btn.look_more")
				}}</el-button></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "homeVulreward",
	data() {
		return {
			tokenType: 0,
			activeName: "first",
			LDSJData: [],
			comy_item: -1,
			pages: 0,
			lang: "zh",
		};
	},
	computed: {},
	mounted() {},
	methods: {
		initData() {
			this.lang = localStorage.getItem("locale");
			this.tokenType = window.localStorage.getItem("tokenType");
			var _this = this;
			this.$ajax.ComCompanyAudit({ num: 12, sort: 2 }).then((res) => {
				if (res.errcode === 1) {
					_this.LDSJData = res.data.auditList.data;
				}
			});
		},
		companyIN(company) {
			this.company = company;
			this.$router.push({
				path: "/companyTwo",
				query: { company: this.company },
			});
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		comy_hover(index) {
			this.comy_item = index;
		},
	},
	created() {
		this.initData();
	},
};
</script>

<style lang="scss" scoped>
@import "~@/app.scss";
.Vulreward .el-tabs__item {
	font-size: 24px !important;
}
.Vulreward .swiper-container {
	width: 100%;
	height: auto;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 50px;
}
.Vulreward .swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	height: auto !important;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.company-item dl {
	width: 100%;
	border-radius: 2px;
	border: 0px;
}
.company-reward .el-popover {
	width: 100px !important;
	padding: 20px !important;
}
.company-wrap {
	overflow: hidden;
}
.company-item {
	float: left;
	width: 273px;
	height: auto;
	margin: 0 19px 25px 0;
	position: relative;
	display: inline-block;
	-moz-border-radius: 2px;
	border-radius: 2px;
}
.company-item p {
	font-family: "microsoft yahei";
	font-size: 16px;
	font-weight: 400;
	text-align: left;
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #4c5b6a;
}
.ldsj_hover {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 999;
	background-color: #2196f3;
	background-image: url(/static/image/home/rewardtu.png);
	background-position: right -30% bottom -19px;
	background-repeat: no-repeat;
	padding: 20px;
	border-radius: 4px;
	box-sizing: border-box;
	z-index: 9999999999999;
}
.ldsj_hover button {
	border: 0 !important;
}
.ldsj_hover div {
	height: 162px;
}
.ldsj_hover p {
	width: 100%;
	color: #ffffff;
	position: relative;
	white-space: normal;
	font-family: "微软雅黑";
	line-height: 26px;
	max-height: 130px;
	font-size: 14px;
	font-weight: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	display: -moz-box;
	-moz-line-clamp: 5;
	-moz-box-orient: vertical;
}
.ldsjhover-btn {
	width: 160px;
	height: 42px;
	color: #2196f3;
	background: #ffffff;
	border-radius: 30px;
	margin-top: 30px;
	margin: auto;
}
.ldsjhover-btn a {
	color: #2196f3 !important;
}
.home-wrap .company_p {
	font-family: "PingFang SC";
	display: block;
	margin: 0 0 60px 0;
	font-size: 22px;
	color: #7e95ab;
}
.el-popover .elpopcons {
	padding: 16px 20px 20px 20px !important;
}
.company-items {
	height: 273px !important;
}

.company-logo {
	height: 168px !important;
}

.company-con {
	height: 105px !important;
}

@media (max-width: 768px) {
	.project-main {
		padding: 0 p2r(15);
	}
	.projects-header h3 {
		font-size: p2r(24);
	}
	.company-h3-line {
		margin: p2r(10) auto;
	}
	.home-wrap .company_p {
		font-size: p2r(14);
		margin-bottom: p2r(30);
	}
	.company-item {
		margin-right: 0;
		width: 100%;
	}
}
</style>
