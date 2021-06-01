<template>
	<div class="wrap_padding wrap_box">
		<div class="boxpadline">
			<h1>{{$t('message.TypesofLoopholes')}}</h1>
			<el-select v-model="value2" placeholder="月份" class="select_rank" @change="rankSelect" style="margin: 0 0 0 10px;">
			    <el-option
			      v-for="(item,index) in months"
				  :key="item.id"
			      :label="item.label"
			      :value="item.id">
			    </el-option>
			</el-select>
			 <el-select v-model="value1" placeholder="年份" class="select_rank" @change="rankingsSelectYear">
			    <el-option
			      v-for="(item,index)  in years"
			      :key="item"
			      :label="item+'年'"
			      :value="item">
			    </el-option>
			</el-select>
		</div>
		<div style="clear: both;"></div>
		<div id="myChartcircle" :style="{width: 'auto', height: '300px'}"></div>

	</div>

</template>

<script>
	export default {
	 	name: "wrapLdtypestatistics",
	 	data () {
		    return {
			    datas1:[],
			    value2: '00',
		        value1:'2019',
				dateObj:{},
			    years:[],
			    months:[],
			    lang:'zh',
		    }
		  },
		  mounted(){
		    this.drawLine();
		  },
		  methods: {
		    drawLine(){
		    	var _this=this
		    	this.$ajax.ComYearmonth()
				.then(res=>{
					if(res.errcode === 1){
						const resYear=res.data.year;
						const defaultYear = Object.keys(resYear)[0];
						this.dateObj=res.data;
						for(let key in resYear){
							this.years.push(key)
						}
                       this.months = resYear[Object.keys(resYear)[1]].map(item=>item);
					}
			   });
		    	this.$ajax.ComVulTypeMonth({year:'2019',month: '00','language':'zh_CN'})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.fxcsData = res.data.targetTypeMonth
		    			for(var i=0;i<res.data.targetTypeMonth.length;i++){
				      	 	this.datas1.push({value:_this.fxcsData[i].num, name:_this.fxcsData[i].name})
				      	 }
		    			_this.chartSetoption(1)
		    		}
		    	})
		    },
			rankingsSelectYear(year){
				this.value2="00"
				var  year = parseFloat(year);
				this.months = this.dateObj.year[year].map(item=>item);
				var _this=this
		    	this.$ajax.ComVulTypeMonth({year:this.value1,month:"00",'language':'zh_CN'})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.fxcsData = res.data.targetTypeMonth
		    			for(var i=0;i<res.data.targetTypeMonth.length;i++){
				      	 	this.datas1.push({value:_this.fxcsData[i].num, name:_this.fxcsData[i].name});
				      	 }
		    			_this.chartSetoption(1);
		    		}
		    	})
			},
		    rankSelect(){
		    	var _this=this
		    	this.$ajax.ComVulTypeMonth({year:this.value1,month: this.value2,'language':'zh_CN'})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.fxcsData = res.data.targetTypeMonth
		    			for(var i=0;i<res.data.targetTypeMonth.length;i++){
				      	 	this.datas1.push({value:_this.fxcsData[i].num, name:_this.fxcsData[i].name});
				      	 }
		    			_this.chartSetoption(1);
		    		}
		    	})
		    },
		    chartSetoption (isTrue=0) {
		        // 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myChartcircle'))
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
				            radius: ['35%', '46%'],
            				//avoidLabelOverlap: false,
				            data: this.datas1.sort(function (a, b) { return b.value - a.value; }),
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
								normal:{
									label:{
										show: true,
										formatter: function(val) {
											return val.name+':\n'+val.percent+'%';
							            }
									},
									labelLine :{show:true,length:1}
								}
							}
				        }
				    ]
		        },true);
		        if(isTrue==1){
		       		this.datas1 = []
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
