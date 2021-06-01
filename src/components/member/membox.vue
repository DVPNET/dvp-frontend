<template>
	<div>
		<transition name="el-fade-in-linear">           	
 			<router-view></router-view>
        </transition>
		<el-dialog
			  :title="$t('message.point')"
			  :show-close = false
			  :close-on-click-modal = false
			  :visible.sync="dialogBMZin"
			  width="40%">
			  <h2>{{$t('message.PleaseLoginWhiteHat')}}</h2><br />
			  <span>{{$t('message.NoLoginBeforeSubmittingLoopholes')}}</span>
			  <span slot="footer" class="dialog-footer">
			  	<router-link to="/register" target="_blank"><el-button type="primary">{{$t('message.SignUpWhiteHat')}}</el-button></router-link>
			    <router-link to="/login" target="_blank"><el-button type="primary">{{$t('message.LoginWhiteHat')}}</el-button></router-link>
			  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name : "membox",
		data() {
	      return {
	      	dialogBMZin: false,
		  }
		},
		created:function(){
		   	this.initData();
		},
	    methods: {
	    	initData(){
	    		this.tokenType=window.localStorage.getItem("tokenType");
				if(this.tokenType==2){
					this.dialogBMZin=true
				}
	  		}
	    }
	}
</script>

<style>
</style>