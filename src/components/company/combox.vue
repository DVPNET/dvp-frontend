<template>
	<div>
		<transition name="el-fade-in-linear">           	
 			<router-view></router-view>
        </transition>
		<el-dialog
			  :title="$t('message.point')"
			  :show-close = false
			  :close-on-click-modal = false
			  :visible.sync="dialogCSin"
			  width="40%">
			  <h2>{{$t('message.PleaseLoginCS')}}</h2><br />
			  <span>{{$t('message.NoLoginBeforeSubmittingLoopholesCS')}}</span>
			  <span slot="footer" class="dialog-footer">
			  	<router-link :to="{path:'/register',query:{id:2}}" target="_blank"><el-button type="primary">{{$t('message.SignUpCS')}}</el-button></router-link>
			    <router-link :to="{path:'/login',query:{id:2}}" target="_blank"><el-button type="primary">{{$t('message.LoginCS')}}</el-button></router-link>
			  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name : "combox",
		data() {
	      return {
	      	dialogCSin: false,
		  }
		},
		created:function(){
		   	this.initData();
		},
	    methods: {
	    	initData(){
	    		this.tokenType=window.localStorage.getItem("tokenType");
				if(this.tokenType==1){
					this.dialogCSin=true
				}
	  		}
	    }
	}
</script>

<style>
</style>