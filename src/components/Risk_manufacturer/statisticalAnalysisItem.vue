<template>
	<div class="wrap_padding wrap_box">
		<div class="boxpadline">
			<h1>{{$t(title)}}</h1>
			<el-select v-if="false" v-model="value2" placeholder="月份" class="select_rank" @change="rankSelect" style="margin: 0 0 0 10px;">
			    <el-option
			      v-for="(item, index) in months"
				  :key="item.id"
			      :label="item.label"
			      :value="item.id">
			    </el-option>
			</el-select>
			 <el-select v-model="year" v-if="type !== 6 && type !== 7" placeholder="年份" class="select_rank" @change="rankingsSelectYear">
			    <el-option
			      v-for="(item, index)  in years"
			      :key="index"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div style="clear: both;"></div>
		<div :id="'myChart' + type" :style="{width: 'auto', height: '300px'}"></div>
	</div>
</template>

<script>
	export default {
		name: "wrapRiskstatistics",
		props: ['title', 'type'],
	 	data () {
		    return {
					data: [],
					year: 'all',
					years: [
						{
							label: '所有',
							value: 'all'
						},
						{
							label: '2011年',
							value: '2011'
						},
						{
							label: '2012年',
							value: '2012'
						},
						{
							label: '2013年',
							value: '2013'
						},
						{
							label: '2014年',
							value: '2014'
						},
						{
							label: '2015年',
							value: '2015'
						},
						{
							label: '2016年',
							value: '2016'
						},
						{
							label: '2017年',
							value: '2017'
						},
						{
							label: '2018年',
							value: '2018'
						},
						{
							label: '2019年',
							value: '2019'
						}
					],
					xData: [],
					yData: []
		    }
		  },
		  mounted() {
				if (this.type == 8) {
					this.year = '2019';
					this.years = [
						{
							label: '2011年',
							value: '2011'
						},
						{
							label: '2012年',
							value: '2012'
						},
						{
							label: '2013年',
							value: '2013'
						},
						{
							label: '2014年',
							value: '2014'
						},
						{
							label: '2015年',
							value: '2015'
						},
						{
							label: '2016年',
							value: '2016'
						},
						{
							label: '2017年',
							value: '2017'
						},
						{
							label: '2018年',
							value: '2018'
						},
						{
							label: '2019年',
							value: '2019'
						}
					];
				}
				this.getData();
			},
			computed: {
			},
		  methods: {
		    drawLine() {
		    
				},
				rankingsSelectYear(year) {
					this.year = year;
					this.getData();
				},
				// 饼图
				chartSetoption(r1, r2) {
					// 基于准备好的dom，初始化echarts实例
					let myChart = this.$echarts.init(document.getElementById('myChart'+this.type))
					// 绘制图表
					myChart.setOption({
						backgroundColor: '#ffffff',
						tooltip: {
						trigger: 'item',
						formatter: "{b}: {d}%"
					},
					color:['rgba(32, 146,241, 0.8)', 'rgba(32, 146,241, 0.7)','rgba(32, 146,241, 0.6)','rgba(32, 146,241, 0.5)','rgba(32, 146,241, 0.4)','rgba(32, 146,241, 0.3)','rgba(32, 146,241, 0.2)'],
					series : [
						{
							name:'',
							type:'pie',
							radius: [r1, r2],
							//avoidLabelOverlap: false,
							data: this.data,
							//roseType: 'radius',
							label: {
								normal: {
									textStyle: {
										//  color:['rgba(32, 146,241, 0.8)', 'rgba(32, 146,241, 0.7)','rgba(32, 146,241, 0.6)','rgba(32, 146,241, 0.5)','rgba(32, 146,241, 0.4)','rgba(32, 146,241, 0.3)','rgba(32, 146,241, 0.2)']
									}
								}
							},
							labelLine: {
								normal: {
									lineStyle: {
									//   color:['rgba(32, 146,241, 0.8)', 'rgba(32, 146,241, 0.7)','rgba(32, 146,241, 0.6)','rgba(32, 146,241, 0.5)','rgba(32, 146,241, 0.4)','rgba(32, 146,241, 0.3)','rgba(32, 146,241, 0.2)']
									},
									smooth: 0.2,
									length: 10,
									length2: 20
								}
							},
							itemStyle: {
								normal: {
									label: {
										show: true,
										formatter: function(val) {
											return val.name+':\n'+val.percent+'%';
													}
									},
									labelLine: {
										show:true,
										length:1
									}
								}
							}
						}
					]
					}, true);
				},
				// 折线图
				initLine() {
					// 基于准备好的dom，初始化echarts实例
					let myChart = this.$echarts.init(document.getElementById('myChart'+this.type))
					// 绘制图表
					myChart.setOption({
						grid: {
							top: '12%',
							left: '18%',
							right: '7%'
						},
						tooltip: {
					        trigger: 'item',
	        				formatter: '{b} : {c}'
						},
						xAxis: {
							type: 'category',
							data: this.xData,
							// boundaryGap: false,
							axisLabel: {
							splitNumber: 6,   
								// fontSize: 22,
								color: '#5e6b73',
								interval: 0

							},
							axisLine: {
								lineStyle: {
									color: '#ccc'
								}
							}
						},
						yAxis: {
							type: 'value',
							axisLabel: {
								// fontSize: 22,
								color: '#5e6b73'
							},
							axisLine: {
								lineStyle: {
									color: '#ccc'
								}
							}
						},
						series: [{
							data: this.yData,
							type: 'line',
							smooth: true,
							itemStyle: {  
								normal : {  
									color:'#00adef',  
									lineStyle: {  
										color:'#00adef'  
									},
									label:{
										show: true,
										color: '#04a9f3'
									}  
								}  
							},  
							lineStyle: {
								width: 2,
							},
							areaStyle: {
								color: '#d9f3fd'
							}
						}]
					}, true);
				},
				// type为0--攻击手段造成的经济损失分析(万美元)
				// type为1--各类攻击手段数量统计
				// type为2--易受攻击面带来的经济损失分析(万美元) 
				// type为3--易受攻击面被攻击次数统计 
				// type为4--易受攻击点带来的经济损失分析(万美元) 
				// type为5--易受攻击点被攻击次数统计  
				// type为6--安全事件造成的经济损失趋势(万美元) 
				// type为7--重大安全事件数量统计
				// type为8--每年安全事件造成的经济损失趋势(万美元)
				getData() {
					if (this.type === 0) {
						this.$ajax.attackMeans('year='+this.year+'&type=money')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types) {
									this.data = [];
									for (var i in res.data.types) {
										let obj = {
											name: res.data.types[i].attack_type,
											value: res.data.types[i].affect_money
										}
										this.data.push(obj);
										this.chartSetoption('0%', '46%');
									}
								}
							}
						})
					} else if (this.type === 1) {
						this.$ajax.attackMeans('year='+this.year+'&type=num')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types) {
									this.data = [];
									for (var i in res.data.types) {
										let obj = {
											name: res.data.types[i].attack_type,
											value: res.data.types[i].num
										}
										this.data.push(obj);
										this.chartSetoption('35%', '46%');
									}
								}
							}
						})
					} else if (this.type === 2) {
						this.$ajax.attackSurface('year='+this.year+'&type=money')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data) {
									this.data = [];
									for (var i in res.data) {
										let obj = {
											name: res.data[i].cate,
											value: res.data[i].affect_money
										}
										this.data.push(obj);
										this.chartSetoption('0%', '46%');
									}
								}
							}
						})
					} else if (this.type === 3) {
						this.$ajax.attackSurface('year='+this.year+'&type=num')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data) {
									this.data = [];
									for (var i in res.data) {
										let obj = {
											name: res.data[i].cate,
											value: res.data[i].num
										}
										this.data.push(obj);
										this.chartSetoption('35%', '46%');
									}
								}
							}
						})
					} else if (this.type === 4) {
						this.$ajax.attackPoint('year='+this.year+'&type=money')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types) {
									this.data = [];
									for (var i in res.data.types) {
										let obj = {
											name: res.data.types[i].cate,
											value: res.data.types[i].affect_money
										}
										this.data.push(obj);
										this.chartSetoption('0%', '46%');
									}
								}
							}
						})
					} else if (this.type === 5) {
						this.$ajax.attackPoint('year='+this.year+'&type=num')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types) {
									this.data = [];
									for (var i in res.data.types) {
										let obj = {
											name: res.data.types[i].cate,
											value: res.data.types[i].num
										}
										this.data.push(obj);
										this.chartSetoption('35%', '46%');
									}
								}
							}
						})
					} else if (this.type === 6) {
						this.$ajax.securityIncident('year='+this.year+'&type=money')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types && res.data.years) {
									this.xData = [];
									this.yData = [];
									res.data.years.forEach((val, key) => {
										this.xData.push(val.occur_time);
									})
									this.yData = res.data.types;
									this.initLine();
								}
							}
						})
					} else if (this.type === 7) {
						this.$ajax.securityIncident('year='+this.year+'&type=num')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types && res.data.years) {
									this.xData = [];
									this.yData = [];
									res.data.years.forEach((val, key) => {
										this.xData.push(val.occur_time);
									})
									this.yData = res.data.types;
									this.initLine();
								}
							}
						})
					} else if (this.type === 8) {
						this.$ajax.securityIncident('year='+this.year+'&type=moth')
						.then(res =>{
							if (res.state == 'yes') {
								if (res.data.types && res.data.moth) {
									this.xData = [];
									this.yData = [];
									this.xData = res.data.moth;
									this.yData = res.data.types;
									this.initLine();
								}
							}
						})
					} 
					
				}

		  }
	 }
</script>

<style>
	#myChartcircle>div{
		width: auto !important;
	}
</style>
