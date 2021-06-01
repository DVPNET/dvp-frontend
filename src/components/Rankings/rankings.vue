<template>
	<div class="Risk_wrapphb">
		<div class="Risk_wrap">
			<div class="homebanner wow fadeInDown animated hidden-xs animated">
				<div class="cen_1phb">
					<div class="cen_1phb1_1 wow fadeInDown animated hidden-xs animated">
						<dl class="risk_head2 risk_head">
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
									<span v-if="rankingData1.fame >= 0 && rankingData1.fame < 100"
										><img
											src="/static/image/risk/linshi.png"
											:title="$t('icon_title.temporary')"
											alt=""
									/></span>
									<span
										v-if="rankingData1.fame >= 100 && rankingData1.fame < 1000"
										><img
											src="/static/image/risk/qingtong.png"
											:title="$t('icon_title.bronze')"
											alt=""
									/></span>
									<span
										v-if="rankingData1.fame >= 1000 && rankingData1.fame < 5000"
										><img
											src="/static/image/risk/huangjin.png"
											:title="$t('icon_title.gold')"
											alt=""
									/></span>
									<span
										v-if="
											rankingData1.fame >= 5000 && rankingData1.fame < 20000
										"
										><img
											src="/static/image/risk/baijin.png"
											:title="$t('icon_title.platinum')"
											alt=""
									/></span>
									<span
										v-if="
											rankingData1.fame >= 20000 && rankingData1.fame < 50000
										"
										><img
											src="/static/image/risk/zuanshi.png"
											:title="$t('icon_title.diamond')"
											alt=""
									/></span>
									<span v-if="rankingData1.fame >= 50000 && rankingData1.fame"
										><img
											src="/static/image/risk/caijin.png"
											:title="$t('icon_title.challenger')"
											alt=""
									/></span>
									<span>{{ rankingData1.hid }}</span>
								</p>
							</dd>
						</dl>
					</div>
					<div class="cen_1phb1_2 wow fadeInDown animated hidden-xs animated">
						<dl class="risk_head1 risk_head">
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
									<span v-if="rankingData0.fame >= 0 && rankingData0.fame < 100"
										><img
											src="/static/image/risk/linshi.png"
											:title="$t('icon_title.temporary')"
											alt=""
									/></span>
									<span
										v-if="rankingData0.fame >= 100 && rankingData0.fame < 1000"
										><img
											src="/static/image/risk/qingtong.png"
											:title="$t('icon_title.bronze')"
											alt=""
									/></span>
									<span
										v-if="rankingData0.fame >= 1000 && rankingData0.fame < 5000"
										><img
											src="/static/image/risk/huangjin.png"
											:title="$t('icon_title.gold')"
											alt=""
									/></span>
									<span
										v-if="
											rankingData0.fame >= 5000 && rankingData0.fame < 20000
										"
										><img
											src="/static/image/risk/baijin.png"
											:title="$t('icon_title.platinum')"
											alt=""
									/></span>
									<span
										v-if="
											rankingData0.fame >= 20000 && rankingData0.fame < 50000
										"
										><img
											src="/static/image/risk/zuanshi.png"
											:title="$t('icon_title.diamond')"
											alt=""
									/></span>
									<span v-if="rankingData0.fame >= 50000 && rankingData0.fame"
										><img
											src="/static/image/risk/caijin.png"
											:title="$t('icon_title.challenger')"
											alt=""
									/></span>
									<span>{{ rankingData0.hid }}</span>
								</p>
							</dd>
						</dl>
					</div>
					<div class="cen_1phb1_3 wow fadeInDown animated hidden-xs animated">
						<dl class="risk_head3 risk_head">
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
									<span v-if="rankingData2.fame >= 0 && rankingData2.fame < 100"
										><img
											src="/static/image/risk/linshi.png"
											:title="$t('icon_title.temporary')"
											alt=""
									/></span>
									<span
										v-if="rankingData2.fame >= 100 && rankingData2.fame < 1000"
										><img
											src="/static/image/risk/qingtong.png"
											:title="$t('icon_title.bronze')"
											alt=""
									/></span>
									<span
										v-if="rankingData2.fame >= 1000 && rankingData2.fame < 5000"
										><img
											src="/static/image/risk/huangjin.png"
											:title="$t('icon_title.gold')"
											alt=""
									/></span>
									<span
										v-if="
											rankingData2.fame >= 5000 && rankingData2.fame < 20000
										"
										><img
											src="/static/image/risk/baijin.png"
											:title="$t('icon_title.platinum')"
											alt=""
									/></span>
									<span
										v-if="
											rankingData2.fame >= 20000 && rankingData2.fame < 50000
										"
										><img
											src="/static/image/risk/zuanshi.png"
											:title="$t('icon_title.diamond')"
											alt=""
									/></span>
									<span v-if="rankingData2.fame >= 50000 && rankingData2.fame"
										><img
											src="/static/image/risk/caijin.png"
											:title="$t('icon_title.challenger')"
											alt=""
									/></span>
									<span>{{ rankingData2.hid }}</span>
								</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<div style="clear: both"></div>
			<div class="cons">
				<div class="left_cons" style="position: relative">
					<div class="cen_1phb3">
						<div class="cen_1phb3_1 Risk_wraptab table-condensed_risk">
							<div class="boxpadline" style="padding-bottom: 0 !important">
								<el-tabs
									v-model="activeName"
									@tab-click="handleClick"
									class="rankingtab"
								>
									<el-tab-pane
										:label="$t('message.DVPrankings')"
										name="first"
										class="vul_state"
									></el-tab-pane>
									<!--总榜-->
									<el-tab-pane
										:label="$t('message.OverallLeaderboard')"
										name="second"
										class="vul_state"
									></el-tab-pane>
								</el-tabs>
							</div>
							<div
								class="search-group"
								style="position: absolute; right: 20px; top: 20px"
								v-show="ranktabshow"
							>
								<el-select
									v-model="value2"
									placeholder="月份"
									class="select_rank"
									@change="rankingsSelect"
									style="margin: 0 0 0 10px"
								>
									<el-option
										v-for="(item, index) in months"
										:key="item.id"
										:label="item.label"
										:value="item.id"
									>
									</el-option>
								</el-select>
								<el-select
									v-model="value1"
									placeholder="年份"
									class="select_rank"
									@change="rankingsSelectYear"
								>
									<el-option
										v-for="(item, index) in years"
										:key="item"
										:label="item + '年'"
										:value="item"
									>
									</el-option>
								</el-select>
							</div>
							<div style="clear: both"></div>
							<el-table
								:data="rankingData"
								class="rankings_table"
								v-loading="loading"
							>
								<el-table-column
									prop="risk_rank_th"
									:label="$t('message.tabRanking')"
									type="index"
									width="80"
								></el-table-column>
								<el-table-column
									prop=""
									:label="$t('message.whiteHat')"
									width="360"
								>
									<template slot-scope="scope">
										<div class="bmz_riskname">
											<dl>
												<dt>
													<img
														:src="scope.row.avatar_url"
														:onerror="defaultImg"
														alt=""
													/>
												</dt>
												<dd>
													<h2>
														{{ scope.row.hid }}
														<span
															v-if="scope.row.fame >= 0 && scope.row.fame < 100"
															><img
																:title="$t('icon_title.temporary')"
																src="/static/image/risk/linshi.png"
																alt=""
														/></span>
														<span
															v-if="
																scope.row.fame >= 100 && scope.row.fame < 1000
															"
															><img
																src="/static/image/risk/qingtong.png"
																:title="$t('icon_title.bronze')"
																alt=""
														/></span>
														<span
															v-if="
																scope.row.fame >= 1000 && scope.row.fame < 5000
															"
															><img
																src="/static/image/risk/huangjin.png"
																:title="$t('icon_title.gold')"
																alt=""
														/></span>
														<span
															v-if="
																scope.row.fame >= 5000 && scope.row.fame < 20000
															"
															><img
																src="/static/image/risk/baijin.png"
																:title="$t('icon_title.platinum')"
																alt=""
														/></span>
														<span
															v-if="
																scope.row.fame >= 20000 &&
																scope.row.fame < 50000
															"
															><img
																src="/static/image/risk/zuanshi.png"
																:title="$t('icon_title.diamond')"
																alt=""
														/></span>
														<span
															v-if="scope.row.fame >= 50000 && scope.row.fame"
															><img
																src="/static/image/risk/caijin.png"
																alt=""
																:title="$t('icon_title.challenger')"
														/></span>
														<span
															class="team-style"
															v-if="scope.row.team != null"
															><span
																style="font-size: 12px !important; margin: 0"
																>{{ scope.row.team }}</span
															></span
														>
													</h2>
													<p style="white-space: normal !important">
														擅长：
														<span v-for="(val, index) in scope.row.skill">{{
															index == 0 ? val.name : "、" + val.name
														}}</span>
													</p>
												</dd>
											</dl>
										</div>
									</template>
								</el-table-column>
								<el-table-column
									prop="fame"
									:label="$t('message.Reputation')"
									width="auto"
								>
									<template slot-scope="scope">
										<p class="risk_sy">{{ scope.row.fame }}</p>
									</template>
								</el-table-column>
								<el-table-column
									prop=""
									:label="$t('message.Level')"
									width="100"
								>
									<template slot-scope="scope">
										<span v-if="scope.row.fame >= 0 && scope.row.fame < 100"
											>临时矿工</span
										>
										<span v-if="scope.row.fame >= 100 && scope.row.fame < 1000"
											>青铜矿工</span
										>
										<span v-if="scope.row.fame >= 1000 && scope.row.fame < 5000"
											>黄金矿工</span
										>
										<span
											v-if="scope.row.fame >= 5000 && scope.row.fame < 20000"
											>白金矿工</span
										>
										<span
											v-if="scope.row.fame >= 20000 && scope.row.fame < 50000"
											>钻石矿工</span
										>
										<span v-if="scope.row.fame >= 50000 && scope.row.fame"
											>彩金矿工</span
										>
									</template>
								</el-table-column>
								<el-table-column
									prop=""
									:label="$t('message.Rewards')"
									width="auto"
								>
									<template slot-scope="scope">
										<div class="risk_ldjltj">
											<strong>{{ scope.row.ether }} Ether</strong>
											<strong>{{ scope.row.dvp }} DVP</strong>
											<p class="font_color_798">≈￥{{ scope.row.cny }}</p>
										</div>
									</template>
								</el-table-column>
								<el-table-column
									prop="num"
									:label="$t('message.vulNums')"
									width="auto"
								>
									<template slot-scope="scope">
										<span
											class="hole_th cp"
											style="color: #2196f3"
											@click="dialogfundBtn(scope.row.hid)"
											v-show="ranktabshow"
											>{{ scope.row.num }}</span
										>
										<span
											class="hole_th cp"
											style="color: #2196f3"
											@click="dialogfundBtn2(scope.row.hid)"
											v-show="!ranktabshow"
											>{{ scope.row.num }}</span
										>
									</template>
								</el-table-column>
							</el-table>
							<el-dialog title="" :visible.sync="dialogldxq" width="1024px">
								<vulNum :lddtData="fundXQData"></vulNum>
							</el-dialog>
							<div class="click_more" v-show="ranktabshow">
								<el-button
									type="primary"
									class="btnshadow"
									v-if="this.rankingData.length > 19"
									@click="click_more"
									v-html="morebtn"
								></el-button>
							</div>
							<div class="click_more" v-show="!ranktabshow">
								<el-button
									type="primary"
									class="btnshadow"
									v-if="this.rankingData.length > 19"
									@click="click_more2"
									v-html="morebtn"
								></el-button>
							</div>
						</div>
					</div>
				</div>
				<div class="right_cons">
					<div class="cen_1phbright">
						<div class="conbox">
							<h1>{{ $t("message.LeaderboardDescription") }}</h1>
							<ul class="conbox_phbsm">
								<li>
									<p>
										<b>{{ $t("message.OverallLeaderboard") }}：</b
										>{{ $t("message.OverallLeaderboardDes") }}
									</p>
								</li>
								<li>
									<p>
										<b>{{ $t("message.MonthlyLeaderboard") }}：</b
										>{{ $t("message.MonthlyLeaderboardDes") }}
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="cen_1phbright">
						<div class="conbox">
							<h1>{{ $t("message.reputationHow") }}</h1>
							<div style="clear: both"></div>
							<ul class="conbox_rhhdsy">
								<li>
									<p><span>1</span>{{ $t("message.reputationHowCon1") }}</p>
								</li>
								<li>
									<p><span>2</span>{{ $t("message.reputationHowCon2") }}</p>
								</li>
								<li>
									<p><span>3</span>{{ $t("message.reputationHowCon3") }}</p>
								</li>
							</ul>
							<router-link to="/membox/vul"
								><el-button
									type="primary"
									style="width: 150px; display: block; margin: 20px auto"
									class="btnshadow"
									>去提交漏洞</el-button
								></router-link
							>
						</div>
					</div>
					<div class="cen_1phbright">
						<div class="conbox">
							<h1>{{ $t("message.LevelsDes") }}</h1>
							<div style="clear: both"></div>
							<ul class="conbox_chsm">
								<li>
									<p>
										<b></b><span>{{ $t("message.Challenger") }}</span>
									</p>
									<p>50000≤{{ $t("message.rep") }}</p>
								</li>
								<li>
									<p>
										<b></b><span>{{ $t("message.Diamond") }}</span>
									</p>
									<p>20000≤{{ $t("message.rep") }}<50000</p>
								</li>
								<li>
									<p>
										<b></b><span>{{ $t("message.Platinum") }}</span>
									</p>
									<p>5000≤{{ $t("message.rep") }}<20000</p>
								</li>
								<li>
									<p>
										<b></b><span>{{ $t("message.Gold") }}</span>
									</p>
									<p>1000≤{{ $t("message.rep") }}<5000</p>
								</li>
								<li>
									<p>
										<b></b><span>{{ $t("message.Bronze") }}</span>
									</p>
									<p>100≤{{ $t("message.rep") }}<1000</p>
								</li>
								<li>
									<p>
										<b></b><span>{{ $t("message.Temporary") }}</span>
									</p>
									<p>0≤{{ $t("message.rep") }}<100</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import vulNum from "@/components/vulNum/vulNum";

export default {
	name: "rankings",
	components: { vulNum },
	data() {
		return {
			lang: "zh",
			ranktabshow: true,
			activeName: "first",
			dialogldxq: false,
			rankingData: [],
			rankingData0: "",
			rankingData1: "",
			rankingData2: "",
			lddtData: [],
			fundXQData: [],
			loading: false,
			tokenType: 0,
			morebtn: "点击查看更多",
			value2: "00",
			value1: "2019",
			pages: 1,
			dateObj: {},
			years: [],
			months: [],
			defaultImg:
				'this.src="' + require("../../../static/image/risk/2.png") + '"',
		};
	},
	methods: {
		initData() {
			var now = new Date();
			var pre_month = now.getMonth() + 1;
			var pr_year = now.getFullYear();
			if (pre_month < 10) {
				pre_month = "0" + pre_month;
			}
			this.value2 = pre_month;
			this.value1 = pr_year;

			this.lang = localStorage.getItem("locale");
			if (this.lang == "zh") {
				this.$router.push({ path: "/rankings" });
			} else if (this.lang == "en" || this.lang == null || this.lang == "") {
				this.$router.push({ path: "/rankings_en" });
			} else if (this.lang == "ko") {
				this.$router.push({ path: "/rankings_ko" });
			}
			this.rankingData = [];
			this.tokenType = window.localStorage.getItem("tokenType");
			var _this = this;
			this.$ajax.ComYearmonth().then((res) => {
				if (res.errcode === 1) {
					const resYear = res.data.year;
					const defaultYear = Object.keys(resYear)[0];
					_this.dateObj = res.data;
					for (let key in resYear) {
						_this.years.push(key);
					}
					_this.months = resYear[Object.keys(resYear).pop()].map(
						(item) => item
					);
				}
			});
			this.$ajax
				.ComWhiteRank({ year: pr_year, month: this.value2, language: "zh_CN" })
				.then((res) => {
					if (res.errcode === 1) {
						_this.rankingData = res.data.rankList.data;
						_this.rankingData0 = res.data.rankList.data[0]
							? res.data.rankList.data[0]
							: "";
						_this.rankingData1 = res.data.rankList.data[1]
							? res.data.rankList.data[1]
							: "";
						_this.rankingData2 = res.data.rankList.data[2]
							? res.data.rankList.data[2]
							: "";
					}
				});
		},
		handleClick(tab, event) {
			this.morebtn = "点击查看更多";
			this.rankingData = [];
			this.pages = 1;
			var _this = this;
			if (tab.index == 1) {
				this.ranktabshow = false;
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
				}, 2000);
				this.$ajax
					.ComWhiteRank({ year: "00", month: "00", language: "zh_CN" })
					.then((res) => {
						if (res.errcode === 1) {
							_this.rankingData = res.data.rankList.data;
							_this.rankingData0 = res.data.rankList.data[0]
								? res.data.rankList.data[0]
								: "";
							_this.rankingData1 = res.data.rankList.data[1]
								? res.data.rankList.data[1]
								: "";
							_this.rankingData2 = res.data.rankList.data[2]
								? res.data.rankList.data[2]
								: "";
						}
					});
			} else if (tab.index == 0) {
				this.ranktabshow = true;
				this.$ajax
					.ComWhiteRank({
						year: this.value1,
						month: this.value2,
						language: "zh_CN",
					})
					.then((res) => {
						if (res.errcode === 1) {
							_this.rankingData = res.data.rankList.data;
							_this.rankingData0 = res.data.rankList.data[0]
								? res.data.rankList.data[0]
								: "";
							_this.rankingData1 = res.data.rankList.data[1]
								? res.data.rankList.data[1]
								: "";
							_this.rankingData2 = res.data.rankList.data[2]
								? res.data.rankList.data[2]
								: "";
						}
					});
			}
		},
		rankingsSelectYear(year) {
			this.morebtn = "点击查看更多";
			this.rankingData = [];
			this.pages = 1;
			this.value2 = "00";
			var year = parseFloat(year);
			this.months = this.dateObj.year[year].map((item) => item);
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 2000);
			var _this = this;
			this.$ajax
				.ComWhiteRank({
					year: this.value1,
					month: this.value2,
					language: "zh_CN",
				})
				.then((res) => {
					if (res.errcode === 1) {
						_this.rankingData = res.data.rankList.data;
						_this.rankingData0 = res.data.rankList.data[0]
							? res.data.rankList.data[0]
							: "";
						_this.rankingData1 = res.data.rankList.data[1]
							? res.data.rankList.data[1]
							: "";
						_this.rankingData2 = res.data.rankList.data[2]
							? res.data.rankList.data[2]
							: "";
					}
				});
		},
		rankingsSelect() {
			this.morebtn = "点击查看更多";
			this.rankingData = [];
			this.pages = 1;
			this.loading = true;
			setTimeout(() => {
				this.loading = false;
			}, 2000);
			var _this = this;
			this.$ajax
				.ComWhiteRank({
					year: this.value1,
					month: this.value2,
					language: "zh_CN",
				})
				.then((res) => {
					if (res.errcode === 1) {
						_this.rankingData = res.data.rankList.data;
						_this.rankingData0 = res.data.rankList.data[0]
							? res.data.rankList.data[0]
							: "";
						_this.rankingData1 = res.data.rankList.data[1]
							? res.data.rankList.data[1]
							: "";
						_this.rankingData2 = res.data.rankList.data[2]
							? res.data.rankList.data[2]
							: "";
					}
				});
		}, //白帽子漏洞详情
		dialogfundBtn(userName) {
			this.fundXQData = "";
			this.dialogldxq = true;
			var _this = this;
			this.$ajax
				.ComWhiteVulDetail({
					userName: userName,
					year: this.value1,
					month: this.value2,
				})
				.then((res) => {
					if (res.errcode === 1) {
						_this.fundXQData = res.data.whiteVulDetail;
					}
				});
		},
		dialogfundBtn2(userName) {
			this.fundXQData = "";
			this.dialogldxq = true;
			var _this = this;
			this.$ajax
				.ComWhiteVulDetail({ userName: userName, year: "00", month: "00" })
				.then((res) => {
					if (res.errcode === 1) {
						_this.fundXQData = res.data.whiteVulDetail;
					}
				});
		},
		//点击查看更多
		click_more() {
			this.morebtn = "点击查看更多";
			var _this = this;
			this.pages += 1;
			this.$ajax
				.ComWhiteRank({
					year: this.value1,
					month: this.value2,
					page: this.pages,
					language: "zh_CN",
				})
				.then((res) => {
					if (res.errcode === 1) {
						var arr = [];
						arr = res.data.rankList.data;
						for (var i = 0; i < arr.length; i++) {
							_this.rankingData.push(arr[i]);
						}
						if (arr == "") {
							this.morebtn = "全部加载完毕";
						}
					}
				});
		},
		click_more2() {
			this.morebtn = "点击查看更多";
			var _this = this;
			this.pages += 1;
			this.$ajax
				.ComWhiteRank({
					year: "00",
					month: "00",
					page: this.pages,
					language: "zh_CN",
				})
				.then((res) => {
					if (res.errcode === 1) {
						var arr = [];
						arr = res.data.rankList.data;
						for (var i = 0; i < arr.length; i++) {
							_this.rankingData.push(arr[i]);
						}
						if (arr == "") {
							this.morebtn = "全部加载完毕";
						}
					}
				});
		},
	},
	created: function () {
		this.initData();
	},
};
</script>

<style scoped>
.Risk_wraptab h1 {
	float: left;
	font-weight: normal;
}
.Risk_wraptab .select_rank {
	width: 100px;
	float: right;
}
.rankings_table tbody tr:hover td {
	background-color: #f5f9fc !important;
}
.team-style {
	background-image: url(/static/image/DH_public/diweihui.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	color: #ffffff;
	padding: 0 20px 8px 10px;
	box-sizing: border-box;
}
.rankings_table {
	margin-top: 20px;
	padding: 0 20px;
}
.rankings_table thead tr th {
	border-bottom: none !important;
	background: #f5f9fc;
}
.rankings_table tbody tr:nth-of-type(1) td:nth-of-type(1) {
	font-size: 10px;
	color: rgba(0, 0, 0, 0);
	background-image: url(/static/image/DH_public/1ming.png);
	background-repeat: no-repeat;
	background-position: center;
}
.rankings_table tbody tr:nth-of-type(2) td:nth-of-type(1) {
	font-size: 1px;
	color: rgba(0, 0, 0, 0);
	background-image: url(/static/image/DH_public/2ming.png);
	background-repeat: no-repeat;
	background-position: center;
}
.rankings_table tbody tr:nth-of-type(3) td:nth-of-type(1) {
	font-size: 1px;
	color: rgba(0, 0, 0, 0);
	background-image: url(/static/image/DH_public/3ming.png);
	background-repeat: no-repeat;
	background-position: center;
}
.Risk_wrapphb .Risk_wrap {
	width: 100%;
	text-align: center;
	margin: 60px auto;
}
.Risk_wrapphb .homebanner {
	width: 100%;
	background-image: url(/static/image/DH_public/taishibbg.png);
	background-color: #20293b;
	background-repeat: no-repeat;
	background-position: 50% !important;
	text-align: center;
	display: inline-block;
}
.Risk_wrapphb .axianbg {
	color: #ffffff !important;
	font-size: 16px;
	margin-top: 10px;
}
.Risk_wrapphb .table-condensed_risk {
	width: 100%;
}
.Risk_wrapphb .table-condensed_risk tbody tr td,
.table-condensed_risk thead tr th {
	vertical-align: middle;
	text-align: center;
	color: #4c5b6a;
}
.Risk_wrapphb .table-condensed_risk thead tr th:nth-of-type(2) {
	text-align: left !important;
}
.Risk_wrapphb .table-condensed_risk tbody tr td:nth-of-type(2) {
	text-align: left !important;
	padding-left: 0;
	padding-right: 0;
}
.Risk_wrapphb .table-condensed_risk tbody tr td {
	padding: 20px 10px;
}
.Risk_wrapphb .font_color_798 {
	color: #8e9eae;
}
.Risk_wrapphb .Risk_wraptab h1 {
	font-size: 18px;
	margin: 0.67em 0;
	text-align: left;
	font-weight: normal;
}
.Risk_wrapphb .cons {
	max-width: 1200px;
	min-width: 1024px;
	display: inline-block;
	box-sizing: border-box;
	margin: 20px auto;
}
.Risk_wrapphb .left_cons {
	width: 78.5%;
	float: left;
	margin-right: 1%;
	padding-bottom: 50px;
}
.Risk_wrapphb .right_cons {
	width: 20%;
	float: right;
	text-align: left;
}
.Risk_wrapphb .right_cons h1 {
	font-size: 18px;
	margin: 0.67em 0;
	font-weight: normal;
	text-align: left;
}
.Risk_wrapphb dl,
.Risk_wrapphb p {
	margin: 0 !important;
}
.Risk_wrapphb .bmz_riskname dl {
	display: inline-block;
	width: 100%;
	width: 350px;
}
.Risk_wrapphb .bmz_riskname dl dt {
	width: 56px;
	height: 56px;
	border-radius: 56px;
	overflow: hidden;
	text-align: center;
	float: left;
}
.Risk_wrapphb .bmz_riskname dl dt img {
	width: auto;
	height: 100%;
	display: inline-block;
}
.Risk_wrapphb .bmz_riskname dl dd {
	padding-left: 10px;
	box-sizing: border-box;
	width: 290px;
	float: left;
}
.Risk_wrapphb .bmz_riskname dl dd h2 {
	font-size: 16px;
	color: #4c5b6a;
}
.Risk_wrapphb .bmz_riskname dl dd h2 span {
	margin-left: 8px;
}
.Risk_wrapphb .bmz_riskname dl dd h2 span img {
	margin-top: -3px;
}
.Risk_wrapphb .bmz_riskname dl dd p {
	font-size: 12px;
	color: #8e9eae;
	margin-top: 8px !important;
}
.Risk_wrapphb .cen_1phb3 .cen_1phb3_1 {
	border: none;
	-webkit-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	-moz-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	background: #ffffff;
	box-sizing: border-box;
	max-width: 938px;
	padding-bottom: 20px;
}
.Risk_wrapphb .cen_1phbright {
	width: 100%;
	height: auto;
	display: inline-block;
	background: #ffffff;
	-webkit-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	-moz-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	margin-bottom: 25px;
}
.Risk_wrapphb .cen_1phbright .conbox {
	padding: 20px 20px;
	box-sizing: border-box;
}
.conbox_phbsm li,
.Risk_wrapphb .conbox_rhhdsy li {
	margin-bottom: 12px;
	width: 100%;
}
.conbox_rhhdsy .axianbg {
	width: 167px;
	height: 42px;
	line-height: 42px;
	text-align: center;
	padding: 0;
	display: inline-block;
}
.Risk_wrapphb .conbox_phbsm li:nth-last-of-type(1),
.conbox_rhhdsy li:nth-last-of-type(1) {
	margin-bottom: 0;
}
.Risk_wrapphb .conbox_phbsm li p {
	position: relative;
	padding-left: 18px;
	background-image: url(/static/image/risk/icon.png);
	background-position: left 5px;
	background-repeat: no-repeat;
	box-sizing: border-box;
}
.conbox_phbsm li p,
.conbox_rhhdsy li p {
	width: 100%;
	font-size: 14px;
	line-height: 24px;
	color: #8e9eae;
	display: inline-block;
	font-family: "微软雅黑";
}
.conbox_rhhdsy li p {
	position: relative;
	padding-left: 22px;
	box-sizing: border-box;
}
.conbox_rhhdsy li p span {
	width: 14px;
	height: 14px;
	line-height: 14px;
	text-align: center;
	border-radius: 7px;
	background: #8e9eae;
	display: inline-block;
	color: #ffffff;
	font-size: 12px;
	margin-right: 8px;
	position: absolute;
	left: 0;
	top: 5px;
}
.conbox_chsm li {
	margin-bottom: 8px;
}
.conbox_chsm li p {
	font-size: 14px;
	color: #8e9eae;
	line-height: 24px;
	margin-bottom: 5px;
	padding-left: 15px;
}
.conbox_chsm li p b {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	margin-bottom: 3px;
	margin-left: -15px;
	margin-right: 10px;
	background: #8e9eae;
	display: inline-block;
}
.conbox_chsm li:nth-last-of-type(1) p {
	margin-bottom: 0 !important;
}
.conbox_chsm li p span {
	font-size: 14px;
	color: #4c5b6a;
	padding-right: 8px;
}
.risk_head1 dt {
	width: 242px;
	height: 242px;
	min-height: 242px;
	background-image: url(/static/image/risk/top1kuang.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
	padding-top: 63px;
	box-sizing: border-box;
}
.risk_head2 dt {
	width: 184px;
	height: 184px;
	text-align: center;
	background-image: url(/static/image/risk/top2kuang.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
	padding-top: 48px;
	box-sizing: border-box;
}
.risk_head3 dt {
	width: 184px;
	height: 184px;
	text-align: center;
	background-image: url(/static/image/risk/top3kuang.png);
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
	padding-top: 48px;
	box-sizing: border-box;
}
.risk_head dd p {
	color: #ffffff;
	padding: 20px 0 0 0;
}
.risk_head dd p span {
	margin-left: 8px;
	display: inline-block;
	font-size: 16px;
}
.cen_1phb {
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: auto 120px;
	padding: 58px 50px 65px 50px;
	margin-bottom: 0;
	box-sizing: border-box;
	display: inherit;
}
.cen_1phb1_1,
.cen_1phb1_2,
.cen_1phb1_3 {
	display: inline-block;
	float: initial;
	width: auto;
}
.cen_1phb1_2 {
	padding: 0 100px;
}
.risk_ldjltj strong {
	display: block;
	font-weight: 600;
	line-height: 18px;
}
.risk_ldjltj p {
	margin-top: 5px !important;
}
.risk_head img {
	width: auto;
	height: 85%;
	display: inline-block;
}
.risk_head2 dt span,
.risk_head3 dt span {
	width: 118px;
	height: 85%;
	border-radius: 50%;
	overflow: hidden;
	display: inline-block;
	position: relative;
}
.risk_head2 dt span img,
.risk_head3 dt span img {
	width: 100%;
	height: auto;
	min-height: 124px;
	display: inline-block;
}
.risk_head1 dt span {
	width: 158px;
	height: 85%;
	border-radius: 50%;
	overflow: hidden;
	display: inline-block;
	position: relative;
}
.risk_head1 dt span img {
	width: 100%;
	height: auto;
	min-height: 158px;
	display: inline-block;
}
.axianbg {
	background: #2196f3;
	padding: 8px 20px;
	color: #ffffff;
	border-radius: 2px;
}
</style>
