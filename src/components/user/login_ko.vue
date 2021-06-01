<template>
    <div class="home-wrap">
        <!--白帽子登录-->
        <div class="logAreg_boxbg" v-show="!comEmailinfo">

	        <div class="logAreg_box  wrapshadow" style="position: relative;" v-show="!passEmailinfo">
	        	<h2 v-show='loginShow'>{{$t('message.userLogin')}}</h2>
	        	<h2 v-show="loginShowBMZ"><span class="comcolor">화이트 해커</span>로 로그인하기<a @click="Role" class="fr Roleswitch">{{Roleswitch}}</a></h2>
	        	<h2 v-show="loginShowCS"><span class="comcolor">공급업체</span>로 로그인하기<a @click="Role" class="fr Roleswitch">{{Roleswitch}}</a></h2>
    		    <el-steps :active="active" align-center>
				  <el-step :title="$t('message.selsctRole')"></el-step>
				  <el-step :title="$t('message.loginInformation')"></el-step>
				  <el-step :title="$t('message.loginSuccess')"></el-step>
			    </el-steps>

	        	<div class="roleBox" v-show='loginShow'>
					 <dl @click="BMZ_Role"  class="fl"  v-show="!BMZ_Roleshow">
					 		<dt><img src="/static/image/logAres/BMZportraitW.png" alt="" /></dt>
					 		<dd>{{$t('message.myBMZ')}}</dd>
					 </dl>
					 <dl @click="BMZ_Role" class="fl"  v-show="BMZ_Roleshow">
					 		<span class="RoleRshape">√</span>
					 	    <span class="Roleshape"></span>
					 		<dt><img src="/static/image/logAres/BMZportrait.png" alt="" /></dt>
					 		<dd>{{$t('message.myBMZ')}}</dd>
					 </dl>
					 <dl @click="CS_Role"  class="fr"  v-show="!CS_Roleshow">
						 	<dt><img src="/static/image/logAres/companyIconW.png" alt="" /></dt>
						 	<dd>{{$t('message.myCS')}}</dd>
					 </dl>
					 <dl @click="CS_Role" class="fr"  v-show="CS_Roleshow">
					 	    <span class="RoleRshape">√</span>
					     	<span class="Roleshape"></span>
						 	<dt><img src="/static/image/logAres/companyIcon.png" alt="" /></dt>
						 	<dd>{{$t('message.myCS')}}</dd>
					 </dl>

					 <el-button class="nextBtn btnshadow" @click="next"  type="primary" round>{{$t('message.next')}}</el-button>
				</div>

				<!--登录-->
				<div v-show="loginShowBMZ">
	 				<el-form :model="DVP_BMZLog" v-enterToNext="true" ref="DVP_BMZLog" label-width="100px" class="demo-ruleForm" status-icon  :rules="DVP_BMZLogS" :label-position="labelPosition">
                        <el-form-item prop="user"   label="" >
                            <el-input type="text" v-model="DVP_BMZLog.user" :placeholder="$t('message.InputNickname')"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="pass">
						    <el-input type="password" v-model="DVP_BMZLog.pass"  autocomplete="off" placeholder="비밀번호를 입력하세요"></el-input>
						</el-form-item>
                        <el-form-item label="" prop="yzm" class="yzmbox">
                            <el-input type="text" v-model="DVP_BMZLog.yzm" :placeholder="$t('message.input_verification_code')" @keyup.enter.native ="submitForm('DVP_BMZLog')"></el-input>
                            <span class="yzmimg cp"><img :src="imgurl" alt="验证码"  @click="changeCodeImg" title="点击换一张" /></span>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(DVP_BMZLog)" class="nextBtn btnshadow" :plain="true"  style="background: #2196f3 !important;color: #ffffff !important;" :loading="loadingBtn">{{loginState}}</el-button>
                        </el-form-item>
                    </el-form>
                	<div id="demo" style="margin-bottom: 50px;">
                		<el-button class="metamaskBtn" round  :loading="loadingmetaBtn" :plain="true" @click="metamaskBtn"><svg class="icon metamaskIcon" aria-hidden="true"><use xlink:href="#icon-metamask1"></use></svg>{{loginmetaState}}</el-button>
				        <vue-metamask
				            :userMessage="msg"
				            @onComplete="onComplete">
				        </vue-metamask>
	   				 </div>
		    	</div>
                <div v-show="loginShowCS">
                    <el-form :model="DVP_CSLog" v-enterToNext="true" ref="DVP_CSLog" label-width="100px" class="demo-ruleForm" status-icon :rules="DVP_CSLogS" :label-position="labelPosition" >
                        <el-form-item    prop="user"   label="" >
                            <el-input v-model="DVP_CSLog.user" :placeholder="$t('message.Please_Input_CompanyName')"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="pass">
                            <el-input type="password" v-model="DVP_CSLog.pass" autocomplete="off" placeholder="비밀번호를 입력하세요"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="yzm" class="yzmbox">
                            <el-input type="yzm" v-model="DVP_CSLog.yzm"  :placeholder="$t('message.input_verification_code')" @keyup.enter.native ="submitCSForm('DVP_CSLog')"></el-input>
                            <span class="yzmimg cp"><img :src="imgurl" alt="验证码"  @click="changeCodeImg" title="点击换一张" /></span>
                        </el-form-item>
                        <el-form-item>
                        	<p class="cp" @click="respass" style="padding: 0 15px;color: #2196f3;">비밀번호 찾기</p>
                            <el-button type="primary" @click="submitCSForm(DVP_CSLog)" class="nextBtn btnshadow" :plain="true"  style="background: #2196f3 !important;color: #ffffff !important;" :loading="loadingBtn">{{loginState}}</el-button>
                        </el-form-item>
                    </el-form>
                </div>
				<div v-show="resSucess" class='ac'>
					<img src="/static/image/logAres/sucessIcon.png" style="margin-top: 30px;" alt="" /><br />
					<p style="font-size: 16px;margin: 30px 0;">{{$t('message.loginSuccess')}}</p>
					<el-button type="primary" class="loginWCBtn" @click="BMZuserBtn" style="display: none;"><b>{{count}}</b>초 후 자동으로 마이 페이지로 이동하겠습니다</el-button>
				</div>
				<div v-show="resCSSucess" class='ac'>
					<img src="/static/image/logAres/sucessIcon.png" style="margin-top: 30px;" alt="" /><br />
					<p style="font-size: 16px;margin: 30px 0;">{{$t('message.loginSuccess')}}</p>
					<el-button type="primary" class="loginWCBtn" @click="CSuserBtn" style="display: none;"><b>{{count}}</b>초 후 자동으로 마이 페이지로 이동하겠습니다</el-button>
				</div>
	        </div>
	        <!--邮箱信息-->
			<passEmailEn v-show="passEmailinfo"></passEmailEn>
		</div>
		<!--邮箱信息-->
		<comEmailEn v-show="comEmailinfo" :userEmail = "userDLEmail"></comEmailEn>
		<!--metamask-->
	    <el-dialog
		  title="提示"
		  :visible.sync="dialog_metaMerr"
		  width="432px">
				<p class="ac">귀하의 브라우저에 아직 메타마스크가 설치되어 있지 않아 로그인할 수 없습니다.</p>
				<a href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank"><el-button class="nextBtn btnshadow"  style="background: #2196f3 !important;color: #ffffff !important;" >클릭하여 메타마스크 다운로드</el-button></a>
		</el-dialog>
    </div>
</template>

<script>
	import { mapState,mapMutations } from 'vuex';
    import VueMetamask from "./VueMetamask";
    import homeBanner from "../Home/homeBanner";
    import passEmailEn from "../company/passEmailKo";
    import comEmailEn from "../company/comEmailKo";
	export default {
		name: 'login',
		components: {homeBanner,comEmailEn,passEmailEn,VueMetamask},
		data () {
			return {
				passEmailinfo:false,
				loadingBtn:false,
				loginState:'SIGN IN',
				resCSSucess:false,
				resSucess:false,
				loginShow: true,
				BMZ_Roleshow: true,
				CS_Roleshow: false,
				loginShowCS: false,
				loginShowBMZ: false,
				labelPosition: 'top',
				roleBox: true,
				msgErr:'',
				imgurl: '',
				message: false,
				DVP_BMZLogS: {	user: [],	pass: [] },
				DVP_CSLogS: {	user: [],	pass: [] },
				DVP_BMZLog: {user: '',pass: '',yzm: ''},
				DVP_CSLog: {user: '',pass: '',yzm: ''},
				activeName: 'first',
				comEmailinfo: false,
				userDLEmail: [],
				active: 1,
				Roleswitch: '',
				count: '',
				tokenType:0,
				adds: true,
				loadingmetaBtn: false,
            	loginmetaState: '메타마스크로 로그인',
            	dialog_metaMerr: false,
				msg: "This is demo net work",
				metaMaskAddress: '',
				BMZmetaMNcon:'',
				metaMaskType: '',
				lang:'zh'
			}
		},
        mounted(){
        	this.lang=localStorage.getItem('locale')
		    if(this.lang=='zh'){
		   		this.$router.push({ path: '/login' })
		    }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.$router.push({ path: '/login_en' })
		    }else if(this.lang=='ko'){
		   		this.$router.push({ path: '/login_ko' })
		    }
            setTimeout(() => {
                window.sessionStorage.removeItem('userCSrole')
            }, 100);
        },
		methods: {
			onComplete(data){
                console.log('data:', data);
                this.metaMaskAddress=data.metaMaskAddress
                this.metaMaskType=data.type
            },
			initData(){
                if (window.sessionStorage.getItem('userCSrole')=== 'null') {
                    this.BMZ_Roleshow = true
                    this.CS_Roleshow = false
                }else if(this.$route.query.id == 2){
                    this.BMZ_Roleshow = false
                    this.CS_Roleshow = true
                    window.sessionStorage.removeItem('userCSrole')
                }else if(window.sessionStorage.getItem('userCSrole')===2){
                	 this.BMZ_Roleshow = false
                    this.CS_Roleshow = true
                    window.sessionStorage.removeItem('userCSrole')
                }
				this.imgurl = this.$ajax.captcha
			},
			respass(){
				this.loginShowCS=false
				this.passEmailinfo=true
			},
			captcha(){
				 this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
			},
			BMZuserBtn(){
			 	window.localStorage.setItem("tokenType", 1);
		    	this.$router.push({ path:"/membox/member/vuls"})
		    },
		    CSuserBtn(){
		    	window.localStorage.setItem("tokenType", 2);
		    	this.$router.push({ path:"/combox/company/companyOne" })
		    },
			changeCodeImg(){
				 this.captcha()
		　 },
			BMZ_Role(){
				if(this.BMZ_Roleshow == false){
					this.BMZ_Roleshow = true
					this.CS_Roleshow = false
				}else if(this.BMZ_Roleshow == true){
					this.BMZ_Roleshow = false
				}
			},
			CS_Role(){
				if(this.CS_Roleshow == false){
					this.CS_Roleshow = true
					this.BMZ_Roleshow = false
				}else if(this.CS_Roleshow == true){
					this.CS_Roleshow = false
				}
			},
			Role(){
				this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
				if(this.Roleswitch == '화이트 해커로 변경하기'){
					this.loginShowCS= false
					this.loginShowBMZ = true
					this.Roleswitch = '공급업체로 변경하기'
				}else if(this.Roleswitch == '공급업체로 변경하기'){
					this.loginShowBMZ= false
					this.loginShowCS= true
					this.Roleswitch = '화이트 해커로 변경하기'
				}
			},
			next() {
				this.tokenType=window.localStorage.getItem('tokenType')
		        if (this.active++ > 2) this.active = 0;
		        	 if(this.BMZ_Roleshow == true){
		        	 	if(this.tokenType!=1){
		        	 		this.loginShow = false
				        	this.loginShowBMZ = true
				        	this.Roleswitch = '공급업체로 변경하기'
		        	 	}else if(this.tokenType==1){
		        	 		this.$router.push({ path:"/membox/member/vuls"})
		        	 	}
			        }else if(this.CS_Roleshow == true){
			        	if(this.tokenType!=2){
			        		this.loginShow = false
				        	this.Roleswitch = '화이트 해커로 변경하기'
				        	this.loginShowCS = true
			        	}else if(this.tokenType==2){
			        		this.$router.push({ path:"/combox/company/companyOne" })
			        	}
			        }

		    },
			handleClick (tab, event) {
				this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
			},
			metamaskBtn(){
				var that=this
				if(this.metaMaskType=="NO_INSTALL_METAMASK"&&this.metaMaskAddress==''){
					this.dialog_metaMerr=true
				}else if(this.metaMaskType=="NO_LOGIN"&&this.metaMaskAddress==''){
					this.$message.error("귀하의 메타마스크 계정에 로그인하세요");
				}else{
					this.loadingmetaBtn = true
	        		this.loginmetaState="logging in..."
	        		//metaMask nonce
					this.$ajax.BMZmetaMnonce({'receipt': this.metaMaskAddress})
					.then(res => {
						if(res.errcode===1){
							this.BMZmetaMNcon=res.data.nonce
								web3.personal.sign(web3.fromUtf8(`I am signing my one-time nonce: ${res.data.nonce}`), web3.eth.coinbase, function(res,sigmsg){
								if(res==null){
									that.$ajax.BMZmetaMnonceAuth({'receipt': that.metaMaskAddress,'signature':sigmsg})
								.then(res => {
									if (res.errcode === 1) {
						            	that.loadingBtn=false
						           		window.localStorage.setItem("token", res.data.token);
						           		that.active = 3
						           		that.loginShowBMZ = false
						           		that.resSucess = true
						           		const TIME_COUNT = 1;
									    if(!that.timer){
									      that.count = TIME_COUNT;
									      that.show = false;
									      that.timer = setInterval(()=>{
									        if(that.count > 0 && that.count <= TIME_COUNT){
									          that.count--;
									        }else{
									          that.show = true;
									          clearInterval(that.timer);
									          that.timer = null;
									          window.localStorage.setItem("tokenType", 1);
									          that.$router.push({ path:that.$route.query.redirect || "/membox/member/vuls"})
									          //白帽子个人信息

								          	that.$ajax.BMZinfo({'language':'en_US'})
											.then(res => {
												if(res.errcode === 1){
					               					window.localStorage.setItem('$BMZuser',JSON.stringify(res.data))
								          			that.$store.dispatch('setBMZuser',window.localStorage.getItem("$BMZuser"))
												}
											})

									        }
									      },1000)
									    }
						            } else {
						            	that.captcha()
						            	that.$message.error("No such user, please register");
					            	 	    setTimeout(() => {
									          that.loadingmetaBtn = false
									          that.loginmetaState="메타마스크로 로그인"
									        }, 300);
									     that.$router.push({ path:"/register"})
						            }
								})
								}else{
									that.captcha()
					            	that.$message.error("서명을 취소하셨으니 로그인할 수 없습니다");
				            	 	    setTimeout(() => {
								          that.loadingmetaBtn = false
								          that.loginmetaState="메타마스크로 로그인"
								    }, 300);
								}

							})
							console.log(web3.eth.coinbase)

						}else {
				            	that.captcha()
				            	that.$message.error("No such user, please register");
			            	 	    setTimeout(() => {
							          that.loadingmetaBtn = false;
							          that.loginmetaState="메타마스크로 로그인"
							        }, 300);
							        this.$router.push({ path:"/register"})
				            }
					})

				}

	        },
			//白帽子点击登录
			submitForm (DVP_BMZLogS) {
			    let formData = {
			    	'hid' : this.DVP_BMZLog.user,
			    	'pwd' : this.DVP_BMZLog.pass,
			    	'captcha' : this.DVP_BMZLog.yzm,
			    }
		        this.loadingBtn = true
		        this.loginState="logging in..."
				this.$ajax.BMZlogin(formData)
				.then(res => {
		            if (res.errcode === 1) {
		            	this.loadingBtn=false
		           		window.localStorage.setItem("token", res.data.token);
		           		this.active = 3
		           		this.loginShowBMZ = false
		           		this.resSucess = true
		           		const TIME_COUNT = 1;
					    if(!this.timer){
					      this.count = TIME_COUNT;
					      this.show = false;
					      this.timer = setInterval(()=>{
					        if(this.count > 0 && this.count <= TIME_COUNT){
					          this.count--;
					        }else{
					          this.show = true;
					          clearInterval(this.timer);
					          this.timer = null;
					          window.localStorage.setItem("tokenType", 1);
					          this.$router.push({ path:this.$route.query.redirect || "/membox/member/vuls"})
					          //白帽子个人信息
					          	this.$ajax.BMZinfo({'language':'zh_CN'})
								.then(res => {
									if(res.errcode === 1){
		               					window.localStorage.setItem('$BMZuser',JSON.stringify(res.data))
					          			this.$store.dispatch('setBMZuser',window.localStorage.getItem("$BMZuser"))
									}
								})
					        }
					      },1000)
					    }
		            } else {
		            	this.captcha()
		            	this.$message.error(res.errmsg);
	            	 	    setTimeout(() => {
					          this.loadingBtn = false;
					          this.loginState="SIGN IN"
					        }, 300);
		            }
		        }).catch((res) => {
		        	    this.$message.error(res.errmsg);
		        		    setTimeout(() => {
					           this.loadingBtn = false;
					           this.loginState="SIGN IN"
					        }, 300);
        		})

			},
			//厂商点击登录
			submitCSForm (DVP_BMZLogS) {
			    let formData = {
			    	'company_name' : this.DVP_CSLog.user,
			    	'pwd' : this.DVP_CSLog.pass,
			    	'captcha' : this.DVP_CSLog.yzm,
			    }
			    this.loadingBtn = true;
		        this.loginState="logging in..."
				this.$ajax.CSlogin(formData)
				.then(res => {
		            if (res.errcode === 1) {
		           		window.localStorage.setItem("token", res.data.token);
		           		if(res.data.emailReal === 0){
		           			this.userDLEmail = res.data
		           			this.comEmailinfo = true
		           		}else{
		           			this.active = 3
		           			this.loginShowCS= false
		           			this.resCSSucess = true
		           			const TIME_COUNT = 1;
						    if(!this.timer){
						      this.count = TIME_COUNT;
						      this.show = false;
						      this.timer = setInterval(()=>{
						        if(this.count > 0 && this.count <= TIME_COUNT){
						          this.count--;
						        }else{
						          this.show = true;
						          clearInterval(this.timer);
						          this.timer = null;
						          	window.localStorage.setItem("tokenType", 2);
						            this.$router.push({ path:this.$route.query.redirect || "/combox/company/companyOne" })
									//厂商用户个人信息
									this.$ajax.CSinfo()
									.then(res => {
										if(res.errcode === 1){
											window.localStorage.setItem('$CSuser',JSON.stringify(res.data))
							      			this.$store.dispatch('setCSuser',window.localStorage.getItem("$CSuser"))
										}
									})
						        }
						      },1000)
						    }

		           		}
		            } else {
		            	this.captcha()
		                this.$message.error(res.errmsg);
		            	 setTimeout(() => {
					           this.loadingBtn = false;
					           this.loginState="SIGN IN"
					        }, 300);
		            }
		        }).catch((res) => {
		        		this.$message.error(res.errmsg);
		        		 setTimeout(() => {
					           this.loadingBtn = false;
					           this.loginState="SIGN IN"
					    }, 300);
        		})

			}
		},
		created(){
			this.initData();
		}
	}

</script>

<style>
   .metamaskBtn{
   		width: 80%;
   		padding: 8px 23px !important;
   		border: 1px solid #F6851B !important;
   		display: block !important;
	    clear: both;
	    margin: -40px auto !important;
	    color: #F6851B !important;
	    background: #ffffff !important;
	    -webkit-box-shadow: 0 5px 40px 0 rgba(246,133,27,.1);
		-moz-box-shadow: 0 5px 40px 0 rgba(246,133,27,.1);
		box-shadow: 0 5px 40px 0 rgba(246,133,27,.1);
   }
   .metamaskBtn:hover{
   		border: 1px solid #F6851B !important;
	    color: #ffffff !important;
	    background: #F6851B !important;
   }
   .metamaskIcon{
   	  width: 20px;
	  height: 20px;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
	  margin-right: 10px;
   }
.Roleswitch{
	position: absolute; top:60px;right:30px;cursor: pointer;
	font-size: 12px;
}
.edit-form-active .tags-show div{
	float: left;
}
.edit-form-active .tags-select{
	box-sizing: border-box !important;
}
.edit-form-active .tags-show span{
	box-sizing: border-box;
}
.dialog_zcbqbtn{
	width: 100%;
	margin: 0 auto;
}
.el-checkbox__label{
	font-size: 12px;
}
.home-wrap .el-form-item__content{
	width: 80%;
	margin: auto;
	line-height: inherit;
}
	.S_line{
		margin: 0 12px;
	}
	.home-wrap .el-menu--popup{
		background-color: transparent !important;
		background: #ffffff !important;
	}
	.home-wrap .DVP-header-wrap{
		background: none;
	}
	.home-wrap .DVP-header-wrap .el-menu-item,.home-wrap .DVP-header-wrap .el-submenu__title{
		color: #ffffff !important;
	}
	.home_header .DVP-header-wrap .el-menu-item:nth-of-type(1){
		width:100px;
		background-image: url(/static/image/home/home_logo.png);
		background-position: left center;
		background-repeat: no-repeat;
		background-size: 100px auto;
		z-index: 999999999999999999;
	}
	.home-wrap .el-menu--popup li{
		color:transparent !important;
		color: #31412E !important;
	}
	.home-wrap	.el-menu--horizontal>.el-menu-item{
		background-color: transparent !important;
		border-bottom: 0;
	}
	.home-wrap	.projects-header{
		width: 100% !important;
		max-width: 1170px;
		min-width: 1170px;
	}
	.home-wrap .DVP_home_header{
		border-bottom: 0 !important;
	}
	.home-wrap .DVP_home_header li,.home-wrap .DVP_home_header .home_headup .el-submenu__title{
		font-size: 16px !important;
	}
	.home-wrap .DVP_home_header .home_headup .el-submenu__title:hover{
		background: inherit !important;
	}
	.home-wrap .DVP_home_header li:nth-of-type(1){
		padding-left: 0 !important;
	}
	.home-wrap .DVP-header-wrap .language_box{
		float: right !important;
	}
	@media screen and (max-width: 760px) {

	}
</style>
