<template>
	<div id="statistical-analysis">
		<div class="chart-wrap">
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[6]"
					:type="6"
				></statisticalAnalysisItem>
			</div>
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[7]"
					:type="7"
				></statisticalAnalysisItem>
			</div>
		</div>
		<div class="chart-wrap">
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[8]"
					:type="8"
				></statisticalAnalysisItem>
			</div>
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[0]"
					:type="0"
				></statisticalAnalysisItem>
			</div>
		</div>
		<div class="chart-wrap">
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[1]"
					:type="1"
				></statisticalAnalysisItem>
			</div>
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[2]"
					:type="2"
				></statisticalAnalysisItem>
			</div>
		</div>
		<div class="chart-wrap">
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[3]"
					:type="3"
				></statisticalAnalysisItem>
			</div>
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[4]"
					:type="4"
				></statisticalAnalysisItem>
			</div>
		</div>
		<div class="chart-wrap">
			<div class="chart-item">
				<statisticalAnalysisItem
					:title="titles[5]"
					:type="5"
				></statisticalAnalysisItem>
			</div>
		</div>
	</div>
</template>

<script>
import statisticalAnalysisItem from "@/components/Risk_manufacturer/statisticalAnalysisItem";
export default {
	name: "statisticalAnalysis",
	components: {
		statisticalAnalysisItem,
	},
	data() {
		return {
			lang: "zh",
			langshow: true,
			titles: [
				"攻击手段造成的经济损失分析(万美元)",
				"各类攻击手段数量统计",
				"易受攻击面带来的经济损失分析(万美元)",
				"易受攻击面被攻击次数统计",
				"易受攻击点带来的经济损失分析(万美元)",
				"易受攻击点被攻击次数统计",
				"安全事件造成的经济损失趋势(万美元)",
				"重大安全事件数量统计",
				"今年安全事件造成的经济损失趋势(万美元)",
			],
		};
	},
	mounted() {
		this.lang = localStorage.getItem("locale");
		if (this.lang == "zh") {
			this.langshow = "zh";
		} else if (this.lang == "en" || this.lang == null || this.lang == "") {
			this.langshow = "en";
		} else if (this.lang == "ko") {
			this.langshow = "ko";
		}
	},
};
</script>

<style scoped>
#statistical-analysis {
	width: 1200px;
	margin: 0 auto;
	margin-top: 78px;
}

.chart-wrap {
	display: flex;
	margin-bottom: 17px;
}

.chart-item {
	width: 50%;
	margin-right: 15px;
	background: #fff;
	box-shadow: 0 5px 10px 0 rgba(64, 158, 225, 0.1);
}

.chart-wrap .chart-item:last-child {
	margin-right: 0;
}

.chart-item /deep/ h1 {
	float: left;
	font-size: 20px;
	color: #4c5b6a;
	margin: 0.6em 0 0;
	font-weight: 400;
}

.chart-item /deep/ .select_rank {
	width: 90px;
	float: right;
}
</style>