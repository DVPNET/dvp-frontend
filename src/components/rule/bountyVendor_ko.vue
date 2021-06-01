<template>
	<el-row class="bounty-vendor" :gutter="20">
		<el-col
			:span="24"
			class="bounty-page-wrap"
			style="padding: 0 !important ; float: inherit; position: relative"
		>
			<!--所有-->
			<el-tabs
				v-model="activeName"
				@tab-click="handleClick"
				class="lddt_wrap bounty-pagecons bounty-pageconsEn"
			>
				<div
					class="search"
					style="width: 400px; position: absolute; right: 20px; top: -69px"
				>
					<el-row :gutter="2">
						<el-col :span="8">
							<el-select
								v-model="value1"
								placeholder="Sort"
								@change="bountySelect"
							>
								<el-option
									v-for="item in options1"
									:key="item.id"
									:label="item.label"
									:value="item.id"
								>
								</el-option>
							</el-select>
						</el-col>
						<el-col :span="16">
							<el-input
								placeholder="Please Input Company Name"
								v-model.trim="search"
								@keyup.enter.native="searchBtn"
							>
								<el-button
									slot="append"
									icon="el-icon-search"
									@click="searchBtn"
									class="searBtn"
								></el-button>
							</el-input>
						</el-col>
					</el-row>
				</div>
				<el-tab-pane label="취약점 포상금" name="first" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>
				<!--未认领漏洞-->
				<el-tab-pane label="거래 플랫폼" name="second" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>

				<!--修复漏洞-->
				<el-tab-pane label="퍼블릭 체인" name="four" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>
				<!--已认领漏洞-->
				<el-tab-pane label="사업자" name="three" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>
				<!--精华漏洞-->
				<el-tab-pane label="채굴 풀" name="five" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>
				<!--公开漏洞-->
				<el-tab-pane label="지갑" name="six" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>
				<el-tab-pane label="DEFI" name="seven" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
				</el-tab-pane>
				<el-tab-pane label="기타" name="eight" class="vul_state">
					<bountyVenCon
						:bountyDatas="bountyData"
						v-loading="loading"
					></bountyVenCon>
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
					layout="total,prev, pager, next"
					:total="total"
				>
				</el-pagination>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import bountyVenCon from "@/components/rule/bountyVenCon";

export default {
	name: "bountyVendor",
	components: { bountyVenCon },
	activeName: "first",
	data() {
		return {
			total: 0, //默认数据总数
			pagesize: 0, //每页的数据条数
			currentPage: 1, //默认开始页面
			bountyData: [],
			activeName: "first",
			Vulindex: 0,
			type: 0,
			search: "",
			loading: false,
			lang: "zh",
			options1: [
				{ id: 0, label: "Newest" },
				{ id: 1, label: "Bounty" },
			],
			value1: null,
		};
	},
	mounted() {
		this.lang = localStorage.getItem("locale");
		if (this.lang == "zh") {
			this.$router.push({ path: "/bountyVendor" });
		} else if (this.lang == "en" || this.lang == null || this.lang == "") {
			this.$router.push({ path: "/bountyVendor_en" });
		} else if (this.lang == "ko") {
			this.$router.push({ path: "/bountyVendor_ko" });
		}
	},
	methods: {
		initData() {
			for (var i = 0; i < this.options1.length; i++) {
				if (this.options1[i].id == this.value1) {
					this.value1 = this.options1[i].label;
				}
			}
			this.loading = true;
			var _this = this;
			this.$ajax
				.ComCompanyAudit({ type: this.type, num: 20, sort: 2 })
				.then((res) => {
					if (res.errcode === 1) {
						setTimeout(() => {
							this.loading = false;
						}, 500);
						_this.bountyData = res.data.auditList.data;
						_this.total = res.data.auditList.total;
						_this.pagesize = res.data.auditList.per_page;
					}
				});
		},
		bountySelect() {
			this.bountyData = [];
			let sorts = this.value1;
			let types = null;
			if (sorts == "Newest") {
				types = 1;
			} else if (sorts == "Bounty") {
				types = 2;
			} else if (sorts == null) {
				types = 2;
			} else if (sorts == 0) {
				types = 1;
			} else if (sorts == 1) {
				types = 2;
			}
			this.$ajax.ComCompanyAudit({ sort: types, num: 20 }).then((res) => {
				if (res.errcode === 1) {
					this.bountyData = res.data.auditList.data;
					this.total = res.data.auditList.total;
					this.pagesize = res.data.auditList.per_page;
				}
			});
		},
		searchBtn() {
			this.bountyData = [];
			if (this.search != "") {
				this.loading = true;
				var _this = this;
				this.$ajax
					.ComCompanyAudit({ type: this.type, like: this.search, num: 20 })
					.then((res) => {
						let arr = [];
						if (res.errcode === 1) {
							setTimeout(() => {
								this.loading = false;
							}, 500);
							_this.bountyData = res.data.auditList.data;
							_this.total = res.data.auditList.total;
							_this.pagesize = res.data.auditList.per_page;
						} else {
							arr.push(res.errmsg);
						}
					});
			} else {
				this.$message.error("Please enter the content");
			}
		},
		handleCurrentChange(currentPage) {
			this.currentPage == currentPage;
			var _this = this;
			let sorts = this.value1;
			let types = null;
			if (sorts == "Newest") {
				types = 1;
			} else if (sorts == "Bounty") {
				types = 2;
			} else if (sorts == null) {
				types = 2;
			} else if (sorts == 0) {
				types = 1;
			} else if (sorts == 1) {
				types = 2;
			}
			this.$ajax
				.ComCompanyAudit({
					type: this.type,
					page: this.currentPage,
					num: 20,
					sort: types,
				})
				.then((res) => {
					if (res.errcode === 1) {
						_this.bountyData = res.data.auditList.data;
					}
				});
		},
		handleClick(tab, event) {
			this.loading = true;
			this.bountyData = [];
			this.Vulindex = tab.index;
			var _this = this;
			if (this.Vulindex == 0) {
				this.type = 0;
			} else if (this.Vulindex == 1) {
				this.type = 1;
			} else if (this.Vulindex == 2) {
				this.type = 2;
			} else if (this.Vulindex == 3) {
				this.type = 3;
			} else if (this.Vulindex == 4) {
				this.type = 4;
			} else if (this.Vulindex == 5) {
				this.type = 5;
			} else if (this.Vulindex == 6) {
				this.type = 6;
			} else if (this.Vulindex == 7) {
				this.type = 7;
			}
			let sorts = this.value1;
			let types = null;
			if (sorts == "Newest") {
				types = 1;
			} else if (sorts == "Bounty") {
				types = 2;
			} else if (sorts == null) {
				types = 2;
			} else if (sorts == 0) {
				types = 1;
			} else if (sorts == 1) {
				types = 2;
			}
			this.$ajax
				.ComCompanyAudit({ type: this.type, num: 20, sort: types })
				.then((res) => {
					if (res.errcode === 1) {
						setTimeout(() => {
							this.loading = false;
						}, 500);
						_this.bountyData = res.data.auditList.data;
						_this.pagesize = res.data.auditList.per_page;
						_this.total = res.data.auditList.total;
					}
				});
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
.bounty-pagecons thead tr:hover td {
	background: #f5f9fc !important;
}
.bounty-pageconsEn .el-tabs__item {
	padding: 0 12px;
}
.bounty-pageconsEn .el-tabs__item:nth-of-type(1) {
	padding: 0 22px 0 0 !important;
}
.searinp {
	position: absolute;
	right: 20px;
	top: -79px;
	z-index: 99;
}
.select_bounty {
	width: 120px;
	position: absolute !important;
	top: -69px;
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
.bounty-page-wrap {
	max-width: 1200px;
	min-height: 700px;
	margin: 0 auto;
	margin-top: 96px;
	margin-bottom: 40px;
	padding-bottom: 84px;
	box-sizing: border-box;
	position: relative;
}
.bounty-page-wrap .el-tabs__content {
	margin: 20px 0 0 0;
	overflow: inherit !important;
}
.bounty-page-wrap .el-tabs__header {
	background: #ffffff;
	-webkit-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	-moz-box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
}
.bounty-page-wrap .el-form-item__content {
	margin-top: 10px;
}
.el-table th > .cell {
	font-size: 16px !important;
}
.lddt_wrap .el-table .cell {
	white-space: nowrap !important;
}
.bounty-pagecons .el-tabs__header {
	padding: 0 10px;
	box-sizing: border-box;
	margin: 0 10px;
}
.bounty-pagecons .el-tabs__header .el-tabs__item {
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
