<template>
	<div>
		<div class="user-container clearfix mytmp">
			<div class="fl user-menu">
				<div class="user-top">
					<div class="avatar-div ac">
						<el-upload
						  class="avatar-uploader"
						  action="$store.state.BMZuser.info.avatar_url"
						  name="file"
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :before-upload="beforeAvatarUpload">
						  <div style="position: relative;width: 80px;height: 80px;border-radius: 50%;">
						  	  <img  :src="$store.state.BMZuser.info.avatar_url" class="avatar" :onerror="defaultImg">
							  <div class="bmzpericon" style="display: none;">{{$t('message.ModifyAvatar')}}</div>
						  </div>
						</el-upload>
					</div>
					<p class="user-id ellipise" title="">
						<b style="font-weight: 400;">{{$store.state.BMZuser.info.hid}}</b>
						<span v-if='$store.state.BMZuser.frame >=0 && $store.state.BMZuser.frame <100'><img src="/static/image/risk/linshi.png" alt="" /></span>
		            	<span v-if='$store.state.BMZuser.frame >=100 &&  $store.state.BMZuser.frame <1000'><img src="/static/image/risk/qingtong.png" alt="" /></span>
		            	<span v-if='$store.state.BMZuser.frame >=1000 &&  $store.state.BMZuser.frame <5000'><img src="/static/image/risk/huangjin.png" alt="" /></span>
		            	<span v-if='$store.state.BMZuser.frame >=5000 &&  $store.state.BMZuser.frame <20000'><img src="/static/image/risk/baijin.png" alt="" /></span>
		            	<span v-if='$store.state.BMZuser.frame >=20000 &&  $store.state.BMZuser.frame <50000'><img src="/static/image/risk/zuanshi.png" alt="" /></span>
		            	<span v-if='$store.state.BMZuser.frame >=50000 &&  $store.state.BMZuser.frame'><img src="/static/image/risk/caijin.png" alt="" /></span>
					</p>

					<div class="other-info clearfix">
						<router-link class="fl" to="/membox/member/withdraw_history?state=all&type=0" >
							<p class="special-number-design">{{$store.state.BMZuser.ethPrice}}</p>
							<p>Ether</p>
						</router-link>
						<router-link class="fl" to="/membox/member/withdraw_history?state=all&type=1" >
							<p class="special-number-design">{{$store.state.BMZuser.dvpPrice}}</p>
							<p>DVP</p>
						</router-link>
						<div style="height: 20px;clear: both;width: 100%;"></div>
						<router-link class="fl" to="/membox/member/vuls">
							<p class="special-number-design">{{$store.state.BMZuser.vulCount}}</p>
							<p>{{$t('message.Item')}}</p>
						</router-link>
						<router-link class="fl" to="/membox/member/withdraw_history?state=all&type=2" >
							<p class="special-number-design">{{$store.state.BMZuser.frame}}</p>
							<p>{{$t('message.Reputation')}}</p>
						</router-link>
					</div>
					<router-link to="/membox/vul"><el-button type="primary" class="submit-hole-btn btnshadow">{{$t('btn.sub_vul')}}</el-button></router-link>
				</div>

			</div>
			<div  class="fr hole-table">
			    <el-menu  :default-active="$route.path"  class="el-menu-demo BMZmenu"  router  mode="horizontal">
			      <el-menu-item  index="/membox/member/vuls">
			        <span slot="title">{{$t('message.MyVulnerability')}}</span>
			      </el-menu-item>
			      <el-menu-item  index="/membox/member/information">
			        <span slot="title">{{$t('message.myprofile')}}</span>
			      </el-menu-item>
			      <el-menu-item  index="/membox/member/withdraw">
			        <span slot="title">{{$t('message.Apply_for_withdrawal')}}</span>
			      </el-menu-item>
			      <el-menu-item index="/membox/member/unread_message">
			        <span slot="title" >{{$t('message.MyMessage')}}</span>
			      </el-menu-item>
			    </el-menu>
			    <div class="BMZmenucons">
			    	<transition name="el-fade-in-linear">           	
		     			<router-view></router-view>
		            </transition>
			    </div>

			</div>

		</div>

</div>
</template>

<script>
	import { mapState,mapMutations } from 'vuex';
	export default {
	    name: 'member',
//	    inject: ['reload'],
		data () {
		    return {
		    	activeIndex:'',
		    	Avatar: '',
		    	msgErr:'',
		    	username: '',
		    	defaultImg: 'this.src="' + require('../../../static/image/default-avatar.png') + '"'
		    }
		},
		created(){
			this.initData();
		},
	  	methods:{
	  		initData(){
//	  			this.reload()
	  			this.activeIndex=this.$route.fullPath;
			},
	  		handleClick(tab,event){
	  			console.log(tab,event);
	  		},
	  		 /*上传头像*/
	  		handleAvatarSuccess(res, file) {
	  			this.$store.state.BMZuser.info.avatar_url = URL.createObjectURL(file.raw);
		    },
	    	beforeAvatarUpload(file) {
	      	  //const isJPG = file.type === 'image/jpeg';
	      	 // const isLt2M = file.size / 1024 / 1024 < 2;

	      /*  if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }*/
	       /* if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }*/
	         //校验成功上传文件
	        //if(isLt2M == true){
	        	let formData = new FormData();
				formData.append('file', file);
			    this.$ajax.BMZuserUpload(formData)
			 	 .then(res => {
			  		if (res.errcode === 1) {
			     		this.$store.state.BMZuser.info.avatar_url = res.data.imgpath
			   		}else{
			   			this.$message.error(res.errmsg);
			   		}
			 	});
		    //    }
		      	//  return isLt2M;
		     },

		    }
		}
</script>

<style scoped>
    .wrapBtnlg{
        width: 150px;
        background: #2196f3 !important;
        color: #ffffff !important;
    }
    .btnshadow{
        border-radius: 25px !important;
        -webkit-box-shadow: 0 5px 40px 0 rgba(64,158,225,.4);
	   -moz-box-shadow: 0 5px 40px 0 rgba(64,158,225,.4);
	   box-shadow: 0 5px 40px 0 rgba(64,158,225,.4);
    }
    .user-container {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 96px;
        margin-bottom: 41px;
    }
    .user-container>.fl {
        width: 280px;
    }
    .user-top {
        padding-bottom: 40px;
        margin-bottom: 29px;
        background-color: #fff;
        -webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
    }
    .user-id{
    	padding-top: 10px;
    	text-align: center;
    	margin-bottom: 39px;
    }
    .user-id b{
    	display: inline-block;
    	overflow: hidden;
    	text-overflow: ellipsis;
        max-width: 123px;
        margin: 0 auto;
        font-size: 18px;
        /*line-height: 18px;*/
        color: #4c5b6a;        
        text-align:center;      
    }
    .user-id span img{
    	display: inline-block;
    	margin-top: -10px;
    }

    .other-info {
        position: relative;
        /*width: 220px;*/
        margin: 0 auto;
        font-size: 14px;
        color: #8E9EAE;
        text-align: center;
    }

    .other-info>a {
        width: 33.33%;
        display: inline-block;
        float: inherit;
    }

    .other-info p {
        /*width: 110px;*/
        line-height: 18px;
        text-align: center;
    }

    .other-info a {
        color: #8E9EAE;
    }

    .other-info .line {
        position: absolute;
        top: -9px;
        left: 90px;
        width: 1px;
        height: 54px;
        background-color: #dbe2e5;
    }

    .other-info .another-line {
        left: 186px;
    }

    .submit-hole-btn {
        display: block;
        width: 220px;
        font-size: 18px;
        color: #fff;
        height: 42px;
        margin: 0 auto;
        -moz-border-radius: 2px;
        border-radius: 2px;
        margin-top: 41px;
        background-color: #2196f3;
    }

    .submit-hole-btn:hover {
        color: #fff;
    }

    .user-bottom {
        -webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        background-color: #fff;
    }

    .user-bottom a {
        position: relative;
        display: block;
        font-size: 16px;
        color: #4c5b6a;
        height: 48px;
        text-align: center;
        line-height: 48px;
    }

    .user-bottom a span {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 48px;
        background-color: #2196f3;
    }

    .user-bottom a {
        border-bottom: 1px solid #dbe2e5;
    }

    .user-bottom a:last-child {
        border-bottom: none;
    }

    .user-bottom .active span {
        display: block;
    }

    .user-container>.fr {
        width: 890px;
        min-height: 800px;
        box-sizing: border-box;
        background-color: #fff;
        -webkit-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        -moz-box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
        box-shadow: 0 5px 10px 0 rgba(64,158,225,.1);
    }
    .avatar-div img{
		margin: 0;
	}
	.avatar-div{
		padding: 58px 0 0 0;
		box-sizing: border-box;
	}
	.other-info .special-number-design{
		font-weight: bolder;
		color: #2196f3;
		font-size: 24px;
		margin-bottom: 10px;
	}
	.avatar-uploader:hover .bmzpericon{
		display: block !important;
		position: absolute;
		top: 0;bottom: 0;
		left: 0;
		right: 0;
		color: #ffffff;
		background: rgba(0,0,0,0.2);
		border-radius: 50%;
		z-index: 9999999999;
		padding-top: 40%;
	}
	.user-top .avatar-uploader-icon{
		width: 80px !important;
		height: 80px !important;
	}
	.avatar-uploader .el-upload{
		border: none !important;
	}
	.user-top .avatar{
		width: 80px;
		height: 80px;
	}
	.user-bottom .is-active{
		border-left: 5px solid #2196F3;
	}
	.user-bottom .el-menu-item{
		text-align: center;
		border-bottom: 1px solid #dbe2e5;
		font-size: 18px !important;
	}
	.user-bottom .el-menu-item:focus, .user-bottom .el-menu-item:hover{
		background: none;
	}
	.submit-hole-btn a{
		color: #ffffff !important;
	}
	.BMZmenu{
		width: 100%;
		border: none !important;
	}
	.BMZmenu li{
		width: 25%;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		border-left: solid 1px #E2EAF1;
		border-bottom: solid 1px #E2EAF1;
		box-sizing: border-box;
	}
	.BMZmenu li:nth-of-type(1){
		border-left: none;
	}
	.BMZmenucons{
		padding: 30px 24px;
	}
	.BMZmenu>.el-menu-item.is-active{
		border-top: 2px solid #409EFF;
		border-bottom: none !important;
		color: #2096f3 !important;
	}
	.BMZmenu>.el-menu-item{
		border-bottom-color: inherit !important;
		border-bottom: solid 1px #E2EAF1 !important;
	}
</style>
