<template>
	<div>
		<h3 class="company-h3">
			{{ $t("message.Leaderboard") }}
			<p class="company-h3-line"></p>
		</h3>
		<div class="clearfix">
			<div id="certify">
				<div class="ranksbox">
					<el-card shadow="hover" class="ranks">
						<span class="huanguan">2</span>
						<dl class="risk_head">
							<dt>
								<span
									><img
										:src="rankingData0.avatar_url"
										:onerror="defaultImg"
										alt=""
								/></span>
							</dt>
							<dd>
								<p>
									{{ rankingData0.hid }}
									<span v-if="rankingData0.fame >= 0 && rankingData0.fame < 100"
										><img
											:title="$t('icon_title.temporary')"
											src="/static/image/risk/linshi.png"
											alt=""
									/></span>
									<span
										v-if="rankingData0.fame >= 100 && rankingData0.fame < 1000"
										><img
											:title="$t('icon_title.bronze')"
											src="/static/image/risk/qingtong.png"
											alt=""
									/></span>
									<span
										v-if="rankingData0.fame >= 1000 && rankingData0.fame < 5000"
										><img
											:title="$t('icon_title.gold')"
											src="/static/image/risk/huangjin.png"
											alt=""
									/></span>
									<span
										v-if="
											rankingData0.fame >= 5000 && rankingData0.fame < 20000
										"
										><img
											:title="$t('icon_title.platinum')"
											src="/static/image/risk/baijin.png"
											alt=""
									/></span>
									<span
										v-if="
											rankingData0.fame >= 20000 && rankingData0.fame < 50000
										"
										><img
											:title="$t('icon_title.diamond')"
											src="/static/image/risk/zuanshi.png"
											alt=""
									/></span>
									<span v-if="rankingData0.fame >= 50000 && rankingData0.fame"
										><img
											:title="$t('icon_title.challenger')"
											src="/static/image/risk/caijin.png"
											alt=""
									/></span>
								</p>
								<p>{{ rankingData0.team }}</p>
							</dd>
						</dl>
					</el-card>
					<el-card shadow="hover" class="ranks" style="margin-top: -38px">
						<span class="huanguan">1</span>
						<dl class="risk_head risk_head">
							<dt>
								<span
									><img
										:src="rankingData1.avatar_url"
										:onerror="defaultImg"
										alt=""
								/></span>
							</dt>
							<dd>
								<p>
									{{ rankingData1.hid }}
									<span v-if="rankingData1.fame >= 0 && rankingData1.fame < 100"
										><img
											:title="$t('icon_title.temporary')"
											src="/static/image/risk/linshi.png"
											alt=""
									/></span>
									<span
										v-if="rankingData1.fame >= 100 && rankingData1.fame < 1000"
										><img
											:title="$t('icon_title.bronze')"
											src="/static/image/risk/qingtong.png"
											alt=""
									/></span>
									<span
										v-if="rankingData1.fame >= 1000 && rankingData1.fame < 5000"
										><img
											:title="$t('icon_title.gold')"
											src="/static/image/risk/huangjin.png"
											alt=""
									/></span>
									<span
										v-if="
											rankingData1.fame >= 5000 && rankingData1.fame < 20000
										"
										><img
											:title="$t('icon_title.platinum')"
											src="/static/image/risk/baijin.png"
											alt=""
									/></span>
									<span
										v-if="
											rankingData1.fame >= 20000 && rankingData1.fame < 50000
										"
										><img
											:title="$t('icon_title.diamond')"
											src="/static/image/risk/zuanshi.png"
											alt=""
									/></span>
									<span v-if="rankingData1.fame >= 50000 && rankingData1.fame"
										><img
											src="/static/image/risk/caijin.png"
											:title="$t('icon_title.challenger')"
											alt=""
									/></span>
								</p>
								<p>{{ rankingData1.team }}</p>
							</dd>
						</dl>
					</el-card>
					<el-card shadow="hover" class="ranks">
						<span class="huanguan">3</span>
						<dl class="risk_head">
							<dt>
								<span
									><img
										:src="rankingData2.avatar_url"
										:onerror="defaultImg"
										alt=""
								/></span>
							</dt>
							<dd>
								<p>
									{{ rankingData2.hid }}
									<span v-if="rankingData2.fame >= 0 && rankingData2.fame < 100"
										><img
											src="/static/image/risk/linshi.png"
											:title="$t('icon_title.temporary')"
											alt=""
									/></span>
									<span
										v-if="rankingData2.fame >= 100 && rankingData2.fame < 1000"
										><img
											:title="$t('icon_title.bronze')"
											src="/static/image/risk/qingtong.png"
											alt=""
									/></span>
									<span
										v-if="rankingData2.fame >= 1000 && rankingData2.fame < 5000"
										><img
											:title="$t('icon_title.gold')"
											src="/static/image/risk/huangjin.png"
											alt=""
									/></span>
									<span
										v-if="
											rankingData2.fame >= 5000 && rankingData2.fame < 20000
										"
										><img
											:title="$t('icon_title.platinum')"
											src="/static/image/risk/baijin.png"
											alt=""
									/></span>
									<span
										v-if="
											rankingData2.fame >= 20000 && rankingData2.fame < 50000
										"
										><img
											:title="$t('icon_title.diamond')"
											src="/static/image/risk/zuanshi.png"
											alt=""
									/></span>
									<span v-if="rankingData2.fame >= 50000 && rankingData2.fame"
										><img
											src="/static/image/risk/caijin.png"
											:title="$t('icon_title.challenger')"
											alt=""
									/></span>
								</p>
								<p>{{ rankingData2.team }}</p>
							</dd>
						</dl>
					</el-card>
				</div>
			</div>
			<el-button type="primary" class="common-btn" @click="RankingBtn"
				>{{ $t("btn.look_more") }}
			</el-button>
		</div>
	</div>
</template>

<script>
import data from "../../../static/json/ecological.json";
export default {
	name: "homeRankings",
	data() {
		return {
			rankingData: [],
			rankingData1: "",
			rankingData0: "",
			rankingData2: "",
			defaultImg:
				'this.src="' + require("../../../static/image/risk/2.png") + '"',
			lang: "zh",
		};
	},
	methods: {
		initData() {
			var _this = this;
			this.lang = localStorage.getItem("locale");
			if (this.lang == "zh") {
				this.$ajax
					.ComWhiteRank({ year: "00", month: "00", language: "zh_CN" })
					.then((res) => {
						if (res.errcode === 1) {
							_this.rankingData = res.data.rankList.data;
							_this.rankingData1 = res.data.rankList.data[0];
							_this.rankingData0 = res.data.rankList.data[1];
							_this.rankingData2 = res.data.rankList.data[2];
						}
					});
			} else if (
				this.lang === "en" ||
				this.lang == null ||
				this.lang == "" ||
				this.lang == "ko"
			) {
				this.$ajax
					.ComWhiteRank({ year: "00", month: "00", language: "en_US" })
					.then((res) => {
						if (res.errcode === 1) {
							_this.rankingData = res.data.rankList.data;
							_this.rankingData1 = res.data.rankList.data[0];
							_this.rankingData0 = res.data.rankList.data[1];
							_this.rankingData2 = res.data.rankList.data[2];
						}
					});
			}
		},
		RankingBtn() {
			this.$router.push({ path: "/rankings" });
		},
		Hzcsenter(event) {
			$(event.target).addClass("hzcs_active");
		},
		Hzcsleave(event) {
			$(event.target).removeClass("hzcs_active");
		},
	},
	created() {
		this.initData();
	},
};
</script>

<style lang="scss" scoped>
@import "~@/app.scss";
#certify {
	position: relative;
	max-width: 1200px;
	margin: 60px auto 20px auto;
	height: 424px;
}
#certify dd p {
	color: #4a5e72;
	font-size: 16px;
	line-height: 16px;
}
#certify .ranks {
	width: 322px;
	height: 386px;
	background: #fff;
	-webkit-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	-moz-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	border-top: 6px solid #60b9ff !important;
	border-radius: 10px;
	float: left;
}
#certify .ranks:nth-of-type(2) {
	width: 354px;
	height: 424px;
	margin: 0 38px 0 38px;
}
.ranksbox {
	margin: auto;
	padding-left: 50px;
}
.huanguan {
	display: block;
	margin-top: 30px;
	height: 46px;
	background-image: url(/static/image/home/huangguan2.png);
	background-repeat: no-repeat;
	background-size: 70px 46px;
	background-position: top center;
	line-height: 66px;
	font-size: 18px;
	color: #ffffff;
}
#certify .ranks:nth-of-type(2) .huanguan {
	margin-top: 26px;
	height: 56px;
	background-image: url(/static/image/home/huangguan1.png);
	background-repeat: no-repeat;
	background-size: 85px 56px;
	background-position: top center;
	line-height: 76px;
	font-size: 24px;
}
#certify .ranks img {
	display: block;
}
#certify .ranks dl dt {
	margin: 26px auto;
}
#certify .ranks dl dt span {
	overflow: hidden;
}
#certify .ranks:nth-of-type(2) dl dt {
	width: 164px;
	height: 164px;
	margin: auto;
	padding: 10px;
	box-sizing: border-box;
	/*background-image:url(/static/image/home/yuanbg.png);*/
	background-size: 164px 164px;
	background-repeat: no-repeat;
	background-position: top center;
	margin: 26px auto;
}
#certify .ranks dl dt span {
	display: block;
	width: 134px;
	height: 134px;
	border-radius: 134px;
	border: 5px solid #2198f2;
	margin: 0 auto;
}
#certify .ranks dl dt span img {
	width: 100%;
	height: auto;
	display: inline-block;
}
#certify .ranks dl dd {
	padding-top: 20px;
}
#certify .ranks dl dd p b {
	font-size: 18px;
}
#certify .ranks dl dd p img {
	display: inline-block;
	margin-left: 8px;
}
#certify .ranks dl dd p:nth-of-type(2) {
	margin-top: 20px;
}
#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}

#certify .swiper-button-prev {
	left: -30px;
	width: 45px;
	height: 45px;
}
@media (max-width: 768px) {
	.projects-header h3 {
		font-size: p2r(24);
		margin-bottom: p2r(30);
	}
	#certify {
		margin-top: 0;
		height: auto;
		.ranksbox {
			width: 100%;
			box-sizing: border-box;
			overflow: hidden;
			padding: 0 p2r(15);
			.ranks {
				width: 100%;
				margin-left: 0 !important;
				margin-bottom: p2r(30);
			}
		}
	}
}
</style>