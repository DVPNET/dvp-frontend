<template>
	<el-row :gutter="20">
		<el-col
			:span="24"
			class="lddt-page-wrap"
			style="padding: 0 !important ; float: inherit; position: relative"
		>
			<el-tabs
				v-model="activeName"
				@tab-click="handleClick"
				class="lddt_wrap lddt-pagecons"
			>
				<el-form class="fr" @submit.native.prevent>
					<el-form-item>
						<el-input
							:placeholder="$t('message.PleaseInputNumberVenderName')"
							v-model.trim="search"
							style="width: 310px"
							class="searinp"
							@keyup.enter.native="searchBtn"
						>
							<el-button
								slot="append"
								icon="el-icon-search"
								@click="searchBtn"
								class="searBtn"
							></el-button>
						</el-input>
					</el-form-item>
				</el-form>
				<!--所有-->
				<el-tab-pane
					:label="$t('message.allData')"
					name="first"
					class="vul_state"
				>
					<lddtDynamics
						:lddtDatas="lddtData"
						v-loading="loading"
					></lddtDynamics>
				</el-tab-pane>
				<!--未认领漏洞-->
				<el-tab-pane
					:label="$t('message.vulUnclaimed')"
					name="second"
					class="vul_state"
				>
					<lddtDynamics
						:lddtDatas="lddtData"
						v-loading="loading"
					></lddtDynamics>
				</el-tab-pane>
				<!--已认领漏洞-->
				<el-tab-pane
					:label="$t('message.vulConfirm')"
					name="three"
					class="vul_state"
				>
					<lddtDynamics
						:lddtDatas="lddtData"
						v-loading="loading"
					></lddtDynamics>
				</el-tab-pane>
				<!--修复漏洞-->
				<el-tab-pane
					:label="$t('message.vulFixed')"
					name="four"
					class="vul_state"
				>
					<lddtDynamics
						:lddtDatas="lddtData"
						v-loading="loading"
					></lddtDynamics>
				</el-tab-pane>
				<!--精华漏洞-->
				<el-tab-pane
					:label="$t('message.vulEssence')"
					name="five"
					class="vul_state"
				>
					<lddtDynamics
						:lddtDatas="lddtData"
						v-loading="loading"
					></lddtDynamics>
				</el-tab-pane>
				<!--公开漏洞-->
				<el-tab-pane
					:label="$t('message.vulOpen')"
					name="six"
					class="vul_state"
				>
					<div class="openvul">
						<div class="al">
							<p>
								<i class="el-icon-warning"></i
								>{{ $t("message.DescriptionAboutLoopholeLDisclosure") }}：
							</p>
							<p>
								1.&nbsp;{{
									$t(
										"message.DVPchoosesdisclosewhitehatsknowledgeAndskillspreventPotentialLoss"
									)
								}}
							</p>
							<p>
								2.&nbsp;{{
									$t("message.DVPdisclosesfixedsensitiveInformationRemoved")
								}}
							</p>
						</div>
					</div>
					<lddtDynamics
						:lddtDatas="lddtData"
						v-loading="loading"
					></lddtDynamics>
				</el-tab-pane>
			</el-tabs>
			<div style="clear: both"></div>
			<div
				class="block pages"
				id="pages"
				v-if="total != 0"
				style="margin-bottom: 40px"
			>
				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page.sync="currentPage"
					:page-size="pagesize"
					layout="prev, pager, next"
					:total="total"
				>
				</el-pagination>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import lddtDynamics from "@/components/LDDT/lddtDynamics";

export default {
	name: "lddt",
	components: { lddtDynamics },
	activeName: "first",
	data() {
		return {
			total: 0, //默认数据总数
			pagesize: 0, //每页的数据条数
			currentPage: 1, //默认开始页面
			lddtData: [],
			activeName: "first",
			Vulindex: 0,
			type: "4",
			search: "",
			loading: false,
			lang: "zh",
		};
	},
	methods: {
		initData() {
			this.loading = true;
			var _this = this;
			if (this.lang == "zh") {
				this.$ajax
					.ComVulTrend({ type: this.type, language: "zh_CN" })
					.then((res) => {
						if (res.errcode === 1) {
							setTimeout(() => {
								this.loading = false;
							}, 500);
							_this.lddtData = res.data.trendList.data;
							_this.total = res.data.trendList.total;
							_this.pagesize = res.data.trendList.per_page;
						}
					});
			} else if (
				this.lang == "en" ||
				this.lang == null ||
				this.lang == "" ||
				this.lang == "ko"
			) {
				this.$ajax
					.ComVulTrend({ type: this.type, language: "en_US" })
					.then((res) => {
						if (res.errcode === 1) {
							setTimeout(() => {
								this.loading = false;
							}, 500);
							_this.lddtData = res.data.trendList.data;
							_this.total = res.data.trendList.total;
							_this.pagesize = res.data.trendList.per_page;
						}
					});
			}
		},
		searchBtn() {
			this.lddtData = [];
			if (this.search != "") {
				this.loading = true;
				var _this = this;
				if (this.lang == "zh") {
					this.$ajax
						.ComVulTrend({
							type: this.type,
							like: this.search,
							language: "zh_CN",
						})
						.then((res) => {
							let arr = [];
							if (res.errcode === 1) {
								setTimeout(() => {
									this.loading = false;
								}, 500);
								_this.lddtData = res.data.trendList.data;
								_this.total = res.data.trendList.total;
								_this.pagesize = res.data.trendList.per_page;
							} else {
								arr.push(res.errmsg);
							}
						});
				} else if (
					this.lang == "en" ||
					this.lang == null ||
					this.lang == "" ||
					this.lang == "ko"
				) {
					this.$ajax
						.ComVulTrend({
							type: this.type,
							like: this.search,
							language: "en_US",
						})
						.then((res) => {
							let arr = [];
							if (res.errcode === 1) {
								setTimeout(() => {
									this.loading = false;
								}, 500);
								_this.lddtData = res.data.trendList.data;
								_this.total = res.data.trendList.total;
								_this.pagesize = res.data.trendList.per_page;
							} else {
								arr.push(res.errmsg);
							}
						});
				}
			} else {
				this.$message.error("Please enter the content");
			}
		},
		handleCurrentChange(currentPage) {
			this.currentPage == currentPage;
			var _this = this;
			if (this.lang == "zh") {
				this.$ajax
					.ComVulTrend({
						type: this.type,
						like: this.search,
						page: this.currentPage,
						language: "zh_CN",
					})
					.then((res) => {
						if (res.errcode === 1) {
							_this.lddtData = res.data.trendList.data;
						}
					});
			} else if (
				this.lang == "en" ||
				this.lang == null ||
				this.lang == "" ||
				this.lang == "ko"
			) {
				this.$ajax
					.ComVulTrend({
						type: this.type,
						like: this.search,
						page: this.currentPage,
						language: "en_US",
					})
					.then((res) => {
						if (res.errcode === 1) {
							_this.lddtData = res.data.trendList.data;
						}
					});
			}
		},
		handleClick(tab, event) {
			this.loading = true;
			this.lddtData = [];
			this.Vulindex = tab.index;
			var _this = this;
			if (this.Vulindex == 0) {
				this.type = 4;
			} else if (this.Vulindex == 1) {
				this.type = 0;
			} else if (this.Vulindex == 2) {
				this.type = 1;
			} else if (this.Vulindex == 3) {
				this.type = 5;
			} else if (this.Vulindex == 4) {
				this.type = 2;
			} else if (this.Vulindex == 5) {
				this.type = 3;
			}
			if (this.lang == "zh") {
				this.$ajax
					.ComVulTrend({ type: this.type, language: "zh_CN" })
					.then((res) => {
						if (res.errcode === 1) {
							setTimeout(() => {
								this.loading = false;
							}, 500);
							_this.lddtData = res.data.trendList.data;
							_this.pagesize = res.data.trendList.per_page;
							_this.total = res.data.trendList.total;
						}
					});
			} else if (
				this.lang == "en" ||
				this.lang == null ||
				this.lang == "" ||
				this.lang == "ko"
			) {
				this.$ajax
					.ComVulTrend({ type: this.type, language: "en_US" })
					.then((res) => {
						if (res.errcode === 1) {
							setTimeout(() => {
								this.loading = false;
							}, 500);
							_this.lddtData = res.data.trendList.data;
							_this.pagesize = res.data.trendList.per_page;
							_this.total = res.data.trendList.total;
						}
					});
			}
		},
		handleSizeChange(pagesize) {
			this.pagesize = pagesize;
		},
	},
	created: function () {
		this.initData();
	},
};
</script>

<style>
.lddt-pagecons thead tr:hover td {
	background: #f5f9fc !important;
}
.searinp {
	position: absolute;
	right: 10px;
	top: 0;
	z-index: 99;
}
.searBtn:hover {
	background: #2196f3 !important;
	border-radius: 0 !important;
	color: #ffffff;
}
.searBtn:hover .searinp {
	border: 1px solid #2196f3 !important;
}
.searBtn:hover i {
	color: #ffffff;
}
.searBtn i {
	font-size: 18px;
}
.fa-bolt {
	color: #f00;
	margin-right: 5px;
}
.lddt-page-wrap {
	max-width: 1200px;
	min-height: 700px;
	margin: 0 auto;
	margin-top: 96px;
	margin-bottom: 40px;
	padding-bottom: 84px;
	box-sizing: border-box;
	position: relative;
}
.lddt-page-wrap .el-tabs__content {
	margin: 20px 0 0 0;
	-webkit-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	-moz-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
}
.lddt-page-wrap .el-tabs__header {
	background: #ffffff;
	-webkit-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	-moz-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
}
.lddt-page-wrap .el-form-item__content {
	margin-top: 10px;
}
.el-table th > .cell {
	font-size: 16px !important;
}
.lddt_wrap .el-table .cell {
	white-space: nowrap !important;
}
.lddt-pagecons .el-tabs__header {
	padding: 0 10px;
	box-sizing: border-box;
}
.lddt-pagecons .el-tabs__header .el-tabs__item {
	height: 60px;
	line-height: 60px;
}
.lddt_wrap thead tr th,
.lddt_wrap tr td {
	text-align: left !important;
}
.el-table__body p {
	display: inline-block;
}
.lddt_wrap .el-tabs__item {
	font-size: 16px;
}
</style>
