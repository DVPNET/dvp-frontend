<template>
	<div class="wrap_padding wrap_box wrapsection_box">
		<div class="section_box wow fadeInDown animated hidden-xs animated">
			<div class="section_1_box">{{$t('message.riskyVendors')}}</div>
			<p class="afonts">
				{{fxcsDatas.num}}
					<span v-if="fxcsDatas.amp == 0 " class='select_1_afonts'>0 %</span>
					<span v-if="fxcsDatas.amp < 0 " class='select_1_afonts'>- {{(fxcsDatas.amp*100).toFixed(2)}}%<i class="fa fa-arrow-down" aria-hidden="true" style="margin-left: 5px;"></i></span>
					<span v-if="fxcsDatas.amp > 0 " class='select_1_afonts'>+ {{(fxcsDatas.amp*100).toFixed(2)}}% <i class="fa fa-arrow-up" aria-hidden="true" style="margin-left: 5px;"></i></span>
			</p>
		</div>
		<div id="myCharthone" :style="{width: 'auto', height: '150px'}"></div>
	</div>
</template>
 
<script>
	export default {
	 	name: "wrapRiskhone",
	 	data () {
		    return {
				fxcsDatas:[],
				max_num:'',
				min_num:''
		    }
		  },
		  mounted(){
		    this.drawLine();
		  },
		  methods: {
		    drawLine(){
		    	var _this=this
		    	this.$ajax.ComCompanyMark()
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.fxcsDatas = res.data.list
		    			_this.max_num = Math.floor(Math.max.apply(null, _this.fxcsDatas.list.num) + Math.max.apply(null, _this.fxcsDatas.list.num)*0.05);
		      	 		_this.min_num = Math.floor(Math.min.apply(null, _this.fxcsDatas.list.num) - Math.min.apply(null, _this.fxcsDatas.list.num)*0.05);
		    			_this.chartSetoption();
		    		}
		    	}) 
		  },
		  chartSetoption () {
		  	 // 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myCharthone'))
		        // 绘制图表
		        myChart.setOption({
		        	tooltip: {
				        trigger: 'axis',
				        formatter: function (p) {          
				        	var res = ''            
				        	res += p[0].name + ' : ' + p[0].value + '个<br/>'            
				        	return res     
				        }
				    },
				    grid: {
				        left: '-5%',
				        right: '8%',
				        bottom: '3%',
				        containLabel: true
				    },
				    toolbox: {
				        feature: {
				            saveAsImage: {show:false}
				        }
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        show: false,
				        data: this.fxcsDatas.list.week,
				        axisLine: {
                            lineStyle: {
                                color: 'blue'
                            }
                        },
                        splitLine:{
						　show:false
						},
                       axisTick: { show: false }
				    },
				    yAxis: {
				    	min: this.min_num,
						max: this.max_num,
				        show: false,
				        axisLine: {
                            show: false
                       },
                       splitLine:{
						　show:false
						},
						axisLabel: {
                            formatter: '{value} %'
                        },
                       axisTick: { show: false }
				    },
				    series: [
				        {
				            name: null,
				            type:'line',
				            stack: '总量',
				            data: this.fxcsDatas.list.num,
				            symbol: "none",
				            smooth: true,
				            itemStyle: {
						        normal: {
						            color: "#2196f3",
						            lineStyle: {
						                color: "#2196f3"
						            },
						            formatter: function (p) {
                                       return p.value + '个'
                                    }
						        }
						    },
						    areaStyle: {normal: {        
				                color: new this.$echarts.graphic.LinearGradient( 0, 0, 0, 1,                            
				            		[                               
					            		{offset: 0, color: 'rgba(33,150,243,0.4)'},                   
					            		{offset: 0.5, color: 'rgba(33,150,243,0.2)'},                  
					            		{offset: 1, color: 'rgba(33,150,243,0.01)'}                       
				            		]                 
				            	)                 
				            }}
				        }
				    ]
		        });
		    } 
		  }
	 }
</script>

<style scoped>
	#myChartcircle>div{
		width: auto !important;
	}
	#myCharthone,#myCharthtwo,#myCharththree,#myCharthfour{
		box-sizing: border-box;
	}
	#myCharthone>div{     
		height: 150px !important;
	}

	
</style>