<template>
	<div class="Ldyzstatistics_conbox">
		<h1>{{$t('message.SeveritiesofLoopholes')}}</h1>
		<div style="clear: both;"></div>
		<ul  class="Ldyzstatistics_con">
			<li>
				<span>{{ser_bars}}</span>
				<p>{{$t('message.seriousrisk')}}</p>
			</li>
			<li>
				<span>{{high_bars}}</span>
				<p>{{$t('message.highrisk')}}</p>
			</li>
			<li>
				<span>{{mid_bars}}</span>
				<p>{{$t('message.midrisk')}}</p>
			</li>
			<li>
				<span>{{low_bars}}</span>
				<p>{{$t('message.lowrisk')}}</p>
			</li>
		</ul>
	</div>
		
</template>

<script>
	export default {
		name: "wrapLdyzstatistics",
		data() {
	      return {
	        rankingData: '',
	        low_bars: '',
	        ser_bars:'',
	        high_bars:'',
	        mid_bars:''
	      }
 	  	},
 	  	methods:{
		  	initData(){
				var _this=this
		    	this.$ajax.ComVulAllTotal({level: 3})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.ser_bars = res.data.count
		    		}
		    	}) 
		    	this.$ajax.ComVulAllTotal({level: 2})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.high_bars = res.data.count
		    		}
		    	}) 
		    	this.$ajax.ComVulAllTotal({level: 1})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.mid_bars = res.data.count
		    		}
		    	}) 
		    	this.$ajax.ComVulAllTotal({level: 0})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.low_bars = res.data.count
		    		}
		    	}) 
			}
		},
		created:function(){
		   	this.initData();
		}
	}
</script>

<style>
	.Ldyzstatistics_conbox{
		padding: 10px 20px;
		box-sizing: border-box;
	}
	.Ldyzstatistics_conbox h1{
		font-size: 18px;
		text-align: left;
		color: #4c5b6a;
	}
	.Ldyzstatistics_con{
		padding: 50px 0 76px 0;
		box-sizing: border-box;
		width: 100%;;
		display: inline-block;
	}
	.Ldyzstatistics_con li{
		width: 50%;
		float: left;
		margin-top: 20px;
		text-align:center;
	}
	.Ldyzstatistics_con li span{
		width: 56px;
		height: 56px;
		line-height: 56px;
		text-align: center;
		display: inline-block;
		border-radius: 4px;
		background-color: rgba(229, 28, 35, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 12px;
		text-align: center;
		font-family: Roboto;

	}
	.Ldyzstatistics_con li:nth-of-type(1) span{
		background: #E51C23;
	}
	.Ldyzstatistics_con li:nth-of-type(2) span{
		background: #F57618;
	}
	.Ldyzstatistics_con li:nth-of-type(3) span{
		background: #F7C708;
	}
	.Ldyzstatistics_con li:nth-of-type(4) span{
		background: #009688;
	}
	.Ldyzstatistics_con li p{
		font-size: 12px;
		line-height: 24px;
		text-align:center;
	}


</style>