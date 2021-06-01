<template>
	<el-rate
	  v-model="rateData"
	  disabled
	  show-score
	  text-color="#000000"
	  :colors="['#8e9eae']"
	  score-template="-{value}">
	</el-rate>       
</template>

<script>
	export default {
		props:{
			rateData:''
		},
		name: 'rateData',
		data() {
	      return {
	      	
	      }
 	 	 },
	 	methods:{
		  	initData(){
			
			}
		},
		created:function(){
		   	this.initData();
		}
		
	  }
</script>

<style>
	.el-table td{
		white-space: nowrap;
	}
	.vulNum .el-table{
		height: 600px;
		overflow: auto;
	}
</style>