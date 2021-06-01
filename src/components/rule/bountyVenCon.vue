<template>
	<div class="bounty-ven-con">
		<div
			v-for="(item, index) in bountyDatas"
			:key="index"
			class="company-item company-items cp"
		>
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
	</div>
</template>

<script>
export default {
	name: "bountyVenCon",
	props: {
		bountyDatas: "",
	},
	data() {
		return {
			tokenType: 0,
			activeName: "first",
			comy_item: -1,
			lang: "zh",
		};
	},
	computed: {},
	mounted() {},
	methods: {
		initData() {
			this.lang = localStorage.getItem("locale");
			this.tokenType = window.localStorage.getItem("tokenType");
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
		}, //点击查看更多
	},
	created() {
		this.initData();
	},
};
</script>

<style lang="scss" scoped>
@import "~@/app.scss";

.bounty-ven-con {
	overflow: hidden;
}

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
.company-items dl {
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
.company-items {
	float: left;
	text-align: center;
	width: 280px;
	height: auto;
	margin: 0 10px 25px 10px;
	position: relative;
	-moz-border-radius: 2px;
	border-radius: 2px;
}
.company-items p {
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
@media (max-width: 768px) {
	.bounty-ven-con {
		padding: 0 p2r(15);
		.company-items {
			width: 100%;
			margin: 0;
			margin-bottom: p2r(15);
		}
	}
}
</style>

<style scoped>
.company-items {
	height: 280px !important;
}

.company-logo {
	height: 175px !important;
}

.company-con {
	height: 105px !important;
}
</style>
