<template>
	<div>
		<div>
			<h3 class="company-h3">
				{{ $t("message.newsData") }}
				<p class="company-h3-line"></p>
			</h3>
			<div class="clearfix News-wrap">
				<el-card shadow="hover" v-for="(vul, index) in newsData" :key="index">
					<a :href="vul.url" target="_blank">
						<p class="new-title">{{ vul.title }}</p>
						<p class="new-desc">{{ vul.desc }}</p>
						<span>{{ vul.created_at }}</span>
					</a>
				</el-card>
			</div>
			<router-link to="/news"
				><el-button
					type="primary"
					class="common-btn btnshadow"
					style="margin-top: 20px"
					>{{ $t("btn.look_more") }}
				</el-button></router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "homeNews",
	data() {
		return {
			newsData: [],
		};
	},
	methods: {
		initData() {
			var _this = this;
			this.$ajax.ComNews({ type: 1, num: 6, page: 1 }).then((res) => {
				if (res.errcode === 1) {
					_this.newsData = res.data.news.data;
				}
			});
		},
	},
	created() {
		this.initData();
	},
};
</script>

<style lang="scss">
@import "~@/app.scss";
.News-wrap {
	background: #f5f9fc;
	display: inline-block;
	width: 100%;
	margin-top: 20px;
}
.News-wrap .el-card {
	width: 50%;
	float: left;
	text-align: left;
	margin-bottom: 20px;
	padding: 20px 0;
	background: #ffffff;
	cursor: pointer;
}
.News-wrap .el-card:nth-of-type(odd) {
	width: 48%;
	float: left;
	text-align: left;
	border-bottom: 1px solid #f2f4f5;
	padding: 20px 20px 10px 20px;
	box-sizing: border-box;
}
.News-wrap .el-card:nth-of-type(even) {
	width: 48%;
	float: right;
	text-align: left;
	border-bottom: 1px solid #f2f4f5;
	padding: 20px 20px 10px 20px;
	box-sizing: border-box;
}
.News-wrap .el-card p:nth-of-type(1) {
	color: #4c5b6a;
	margin-bottom: 8px;
}
.News-wrap .el-card span {
	color: #b4bdc2;
	margin-top: 14px;
	margin-bottom: 10px;
	display: inline-block;
}
.new-title {
	display: -webkit-box;
	height: 23px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	font-size: 16px;
}
.new-desc {
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	height: 50px;
	font-size: 14px;
	color: #8e9eae;
	line-height: 24px;
}
@media (max-width: 768px) {
	.projects-header h3 {
		font-size: p2r(24) !important;
		margin-bottom: p2r(30);
	}
	.News-wrap {
		margin-top: 0;
		padding: 0 p2r(15);
		box-sizing: border-box;
	}
}
</style>