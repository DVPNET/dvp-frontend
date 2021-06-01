<template>
	<div class="repairdt_tablebox">
		<h1>{{$t('message.StatusofBugFixes')}}</h1>
		<div id="text-container">
			 <vue-seamless-scroll  :data="rankingData"  :class-option="optionSingleHeightTime"  class="seamless-warp">
			        <ul class="val">
						<li v-for="val in rankingData">		
							<span class="diffTime"><b><img src="/static/image/DH_public/shijzhou.png" alt="" /></b>{{val.diffTime}}</span>
							<p><b class="companyName" v-text="val.companyName"></b>修复了一条<b>”{{val.title_zh}}”</b>漏洞</p>						
						</li> 
					</ul>
		    </vue-seamless-scroll>
		</div>
    </vue-seamless-scroll>
	</div>	
</template>

<script>
	export default {
		name: "wrapRepairdt",
		data() {
	      return {
	        rankingData: [],
	        lang: 'en'
	      }
 	   }, 	     
 	   mounted(){
 	  	   this.initData();
 	   },
		created:function(){
		   	this.initData();
		},
 	    methods:{
		  	initData(){
		  		let _this=this
		  		this.lang=localStorage.getItem('locale')
	  			this.$ajax.ComVulFixList({'language': '	en_US'})
		    	.then(res =>{
		    		if(res.errcode === 1){
		    			_this.rankingData = res.data.fixList.data
		    		}
		    	}) 		    	
			},
		},
		computed: {
            optionSingleHeightTime () {
                return {
                    singleHeight: 26,
                    waitTime: 2500
               }
            }
       },
 	    
	}
</script>

<style lang="scss" scoped>
	 .seamless-warp {
        max-height: 720px;
        overflow: hidden;
    }
	.repairdt_tablebox{
		padding: 10px 20px;
		box-sizing: border-box;
	 }
	.repairdt_tablebox h1{
		font-size: 18px;
		text-align: left;
		color: #4c5b6a;
	}
	#text-container {
		  width: 100%;
		  height: auto;
		  margin: 0 auto;
		  overflow: hidden;
		  margin-top: 30px;
     }
	#text-container ul {
		overflow: hidden;
		padding-left: 10px;
		width: 100%; }
	
	#text-container ul li {
	  border-left: 1px solid #E2EAF1;
	  display: block;
	  height: auto;
	  background: #fff;
	  box-sizing: border-box;
	  text-align: left;
	  padding: 10px 0;
	  box-sizing: border-box;}
	 .diffTime img{
		margin-left: -5px;
		margin-right: 10px;
	}
    #text-container ul li span {
      font-size: 12px;
      color: #b4bdc2;
      display: block;
      padding: 0;
      margin-bottom: 10px;
      font-family: "微软雅黑"; }
    #text-container ul li  p {
      font-size: 12px;
      color: #4a4c52;
      padding: 0;
      margin: 0 0 0 18px;
      line-height: 18px;
      font-family: "微软雅黑"; }
    #text-container ul li  p b{
      font-size: 14px;
      font-family: "微软雅黑"; }

	#text-container ul li p b:nth-of-type(1) {	  
      margin-right: 8px; }

</style>