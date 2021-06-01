<template>
	<el-row :gutter="20">
		<el-col
			:span="24"
			class="home-wrap"
			style="padding: 0 !important ; background: #ffffff"
		>
			<!--公共中部main-->
			<homeBanner></homeBanner>
			<!--漏洞赏金-->
			<div class="projects">
				<div class="projects-header page-header">
					<homeVulreward></homeVulreward>
				</div>
			</div>
			<!--漏洞动态-->
			<div class="projects homecomBg">
				<div class="projects-header">
					<homeVuldynamic></homeVuldynamic>
				</div>
			</div>
			<!--白帽子排行-->
			<div class="projects">
				<div class="projects-header page-header">
					<homeRankings></homeRankings>
				</div>
			</div>
			<!--新闻动态-->
			<div class="projects homecomBg">
				<div class="projects-header">
					<homeNews></homeNews>
				</div>
			</div>
			<!--生态节点-->
			<div class="projects homecomBgimg" style="position: relative">
				<div class="projects-header page-header">
					<homeEcological></homeEcological>
				</div>
			</div>
		</el-col>
	</el-row>
</template>

<script>
import homeBanner from "@/components/Home/homeBanner";
import homeVuldynamic from "@/components/Home/homeVuldynamic"; //漏洞动态
import homeVulreward from "@/components/Home/homeVulreward"; //漏洞悬赏
import homeRankings from "@/components/Home/homeRankings"; //白帽子排行
import homeNews from "@/components/Home/homeNews"; //新闻动态
import homeEcological from "@/components/Home/homeEcological"; //生态节点
export default {
	name: "home",
	components: {
		homeBanner,
		homeVuldynamic,
		homeVulreward,
		homeEcological,
		homeRankings,
		homeNews,
	},
	data() {
		return {};
	},
	methods: {
		initData() {},
	},
	created() {
		this.initData();
	},
};
</script>

<style lang="scss">
@import "~@/app.scss";
@font-face {
	font-family: pingfang;
	src: url("/static/font/pingfang.ttf");
	font-weight: bold;
}
@font-face {
	font-family: pingfangWeight;
	src: url("/static/font/pingfang-weight.ttf");
	font-weight: bold;
}
.company-h3-line {
	width: 30px;
	border: 1px solid #409eff;
	margin: 20px auto;
}
.projects-header {
	width: 1178px;
	margin: 0 auto;
	text-align: center;
	margin-top: 60px;
	margin-bottom: 60px;
}

.projects-header h3 {
	font-family: "microsoft yahei";
	font-size: 32px !important;
	line-height: 32px !important;
	margin-bottom: 40px;
	font-weight: 400;
	display: inline-block;
	color: #20293b;
}

.projects table {
	table-layout: fixed;
	width: 1178px;
	margin: 0 auto;
	font-size: 16px;
	margin-bottom: 49px;
}

.projects .table-striped > tbody > tr:nth-of-type(even) {
	background-color: #f2f5f5;
}

.projects .table-striped > tbody > tr:nth-of-type(odd) {
	background-color: #fff;
}

.projects .table tbody tr {
	height: 48px;
	line-height: 48px;
	font-size: 14px;
}

.projects .table thead tr {
	height: 50px;
	line-height: 50px;
	font-weight: normal;
	background-color: #dae2e5;
}

.projects .table thead tr th {
	font-weight: normal;
	color: #4c5b6a !important;
}

.projects .table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
	padding-top: 0;
	padding-bottom: 0;
	color: #4a4c52;
	vertical-align: middle;
	border-color: #dee3e2;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.projects .table > tbody > tr:last-child > td {
	border-bottom: 1px solid #dee3e2;
}
.hometop {
	z-index: 9999999999999999999999 !important;
}
.homecomBg {
	background: #f5f9fc;
	display: inline-block;
	width: 100%;
}
.homecomBgimg {
	display: inline-block;
	width: 100%;
	background: url(/static/image/home/homeBgimg1.png);
	background-repeat: no-repeat;
	background-position: 120px 20px;
}
.home-wrap .el-popover {
	min-width: auto !important;
}
.common-btn {
	width: 170px;
	height: 50px;
	border-radius: 30px !important;
	-webkit-box-shadow: 0 5px 40px 0 rgba(64, 158, 225, 0.4);
	-moz-box-shadow: 0 5px 40px 0 rgba(64, 158, 225, 0.4);
	box-shadow: 0 5px 40px 0 rgba(64, 158, 225, 0.4);
}
.home-wrap .zcpadd {
	padding: 0 !important;
}
.home-wrap .projects table {
	margin-bottom: 0 !important;
}
.home-wrap .el-table__body p {
	display: inline-block;
}
.home-wrap .el-table .cell {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	white-space: nowrap;
	word-break: break-all;
	line-height: 20px;
	color: #8e9eae;
	font-weight: 400;
}
@media (max-width: 768px) {
	.home-wrap {
		.projects-header {
			width: 100%;
			margin-top: 0;
			padding-top: p2r(30);
			min-width: 100% !important;
			max-width: 100% !important;
		}
	}
}
</style>
