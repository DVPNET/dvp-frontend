<template>
    <div class="home-wrap">
        <!--注册账号-->
        <div class="logAreg_boxbg" v-show="!comEmailinfo">

            <div class="logAreg_box" v-show="registerStatus" style="position: relative;">
            	<div class="ac" style="position: absolute;top: -30px;left:0;right: 0;width: 100%;" v-show='resShowBMZ'><strong><i class="el-icon-warning"></i>{{$t('message.Please_save_your_password_properly')}}</strong></div>
            	<div class="ac" style="position: absolute;top: -30px;left:0;right: 0;width: 100%;" v-show='resShowCS'><strong><i class="el-icon-warning"></i>{{$t('message.Please_save_your_password_properly')}}</strong></div>
            	<h2 v-show='loginShow'>User Register</h2><h2 v-show="resShowBMZ">Switch to <span class="comcolor">White Hat</span></h2><h2 v-show="dialog_zcbq">白帽子注册</h2><h2 v-show="resShowCS">Sign-up as a <span class="comcolor">Vendor</span></h2><a @click="Role" class="fr"v-show='!resSucess' style="position: absolute; top:60px;right:30px;cursor: pointer;" >{{Roleswitch}}</a>
	        	<el-steps :active="active" align-center>
				  <el-step :title="$t('message.selsctRole')"></el-step>
				  <el-step title="Sign-up"></el-step>
				  <el-step :title="$t('message.registerSuccess')"></el-step>
				</el-steps>
	        	<div class="roleBox" v-show='loginShow'>
					 <dl @click="BMZ_Role"  class="fl"  v-show="!BMZ_Roleshow">
					 		<dt><img src="/static/image/logAres/BMZportraitW.png" alt="" /></dt>
					 		<dd>White Hat</dd>
					 </dl>
					 <dl @click="BMZ_Role" class="fl"  v-show="BMZ_Roleshow">
					 		<span class="RoleRshape">√</span>
					 	    <span class="Roleshape"></span>
					 		<dt><img src="/static/image/logAres/BMZportrait.png" alt="" /></dt>
					 		<dd>White Hat</dd>
					 </dl>
					 <dl @click="CS_Role"  class="fr"  v-show="!CS_Roleshow">
						 	<dt><img src="/static/image/logAres/companyIconW.png" alt="" /></dt>
						 	<dd>Vendor</dd>
					 </dl>
					 <dl @click="CS_Role" class="fr"  v-show="CS_Roleshow">
					 	    <span class="RoleRshape">√</span>
					     	<span class="Roleshape"></span>
						 	<dt><img src="/static/image/logAres/companyIcon.png" alt="" /></dt>
						 	<dd>Vendor</dd>
					 </dl>

					 <el-button class="nextBtn btnshadow" @click="next"  type="primary" round>Next</el-button>
					 <div @click="loginBtn" class="ac">Already have an account? <a href="#">Login now</a></div>
				</div>
				<!--白帽子注册-->
				<div v-show="resShowBMZ">
	                <el-form :model="DVP_BMZRes"  v-enterToNext="true"  ref="DVP_BMZRes" label-width="100px" class="demo-dynamic resbox"  status-icon  :rules="DVP_BMZResS"  :label-position="labelPosition" >
	                    <el-form-item prop="user"   label="" >
	                        <el-input v-model="DVP_BMZRes.user" :placeholder="$t('message.InputNickname')"></el-input>
	                    </el-form-item>
	                     <el-form-item prop="address"   label="" >
	                      
	                        <el-tooltip content="Prevent password loss, can be used for wallet login" placement="top">
  <el-input v-model="DVP_BMZRes.address" placeholder="Please input ETH wallet address"></el-input>
							</el-tooltip>
	                    </el-form-item>
	                    <el-form-item label="" prop="pass">
	                        <el-input type="password" v-model="DVP_BMZRes.pass" autocomplete="off" :placeholder="$t('message.Your_password_must_be_6_50_characters')"></el-input>
	                    </el-form-item>
	                    <el-form-item label="" prop="checkPass">
	                        <el-input type="password" v-model="DVP_BMZRes.checkPass" autocomplete="off" placeholder="Confirm Password"></el-input>
	                    </el-form-item>
	                    <el-form-item label="" prop="yzm" class="yzmbox">
	                        <el-input type="text" v-model="DVP_BMZRes.yzm"  :placeholder="$t('message.input_verification_code')" @keyup.enter.native ="submitForm('DVP_BMZRes')"></el-input>
	                        <span class="yzmimg cp"><img :src="imgurl" alt="验证码"  @click="changeCodeImg" title="点击换一张" /></span>
	                    </el-form-item>
	                    <el-form-item>
		                	<el-checkbox v-model="checked">{{$t('message.i_have_view_agreement')}}  <router-link to="/agreement" target="_blank">《{{$t('dvp_footer.Dvp_Agreement')}}》</router-link></el-checkbox>
		                </el-form-item>
	                    <el-form-item>
	                        <el-button type="primary"  class="nextBtn btnshadow" @click="submitForm('DVP_BMZRes')"   :plain="true"  style="background: #2196f3 !important;color: #ffffff !important;">{{$t('dvp_head.register')}}</el-button>
	                    </el-form-item>
	                </el-form>
          	  </div>
                <!--厂商注册-->
                <div v-show="resShowCS">
                    <el-form :model="DVP_CSRes"  v-enterToNext="true"  ref="DVP_CSRes"  label-width="100px" class="demo-dynamic resbox" status-icon :rules="DVP_CSResS"  :label-position="labelPosition" >
                          <el-form-item prop="user" label="" >
                              <el-input v-model="DVP_CSRes.user" :placeholder="$t('message.Please_input_Enterprise_Name')"></el-input>
                          </el-form-item>
                          <el-form-item prop="comqyym" label="">
                              <el-input v-model="DVP_CSRes.comqyym" placeholder="Please input the domain name of the vendor website (https:// required)"></el-input>
                          </el-form-item>
                          <el-form-item prop="email" label=""  :rules="[
                                    { required: true, message: 'Please enter your email address', trigger: 'blur' },
    						        { type: 'email', message: 'Please enter your correct email address', trigger: ['blur', 'change'] }
                                ]">
                              <el-input v-model="DVP_CSRes.email" placeholder="Please input Enterprise Email"></el-input>
                          </el-form-item>
                          <el-form-item prop="contact" label="">
                              <el-input v-model="DVP_CSRes.contact" placeholder="Please input cellphone number/wechat account/telegram account"></el-input>
                          </el-form-item>
                          <el-form-item label="" prop="pass">
                              <el-input type="password" v-model="DVP_CSRes.pass" autocomplete="off" placeholder="Input Possword"></el-input>
                          </el-form-item>
                           <el-form-item label="" prop="checkPass">
                               <el-input type="password" v-model="DVP_CSRes.checkPass" autocomplete="off" placeholder="Confirm Password"></el-input>
                          </el-form-item>
                          <el-form-item label="" prop="yzm" class="yzmbox">
                              <el-input type="text" v-model="DVP_CSRes.yzm" :placeholder="$t('message.input_verification_code')" @keyup.enter.native ="submitForm('DVP_CSRes')"></el-input>
                              <span class="yzmimg cp"><img :src="imgurl" alt="验证码"  @click="changeCodeImg" title="点击换一张" /></span>
                          </el-form-item>
                          <el-form-item>
			                	<el-checkbox v-model="checked">{{$t('message.i_have_view_agreement')}}  <router-link to="/agreement_ven" target="_blank">《{{$t('dvp_footer.Dvp_Agreement_Ven')}}》</router-link></el-checkbox>
                          </el-form-item>
                          <el-form-item>
                              <el-button type="primary" @click="submitCSForm('DVP_CSRes')"  class="nextBtn btnshadow"  :plain="true"  style="background: #2196f3 !important;color: #ffffff !important;">{{$t('dvp_head.register')}}</el-button>
                          </el-form-item>
                        </el-form>
                </div>

            	<form class="id-edit-form  edit-form-active" v-show="dialog_zcbq">
	                <div class="form-input">
				        <div class="my-info-edit-item clearfix">
				        	<span class="fl">Advantage:</span>
				        	<div class="tags-select fr">
				        		<el-tag  :key="tag"  v-for="tag in dynamic"  size="medium"  closable  :disable-transitions="false" @close="handleClosebq(tag)">{{$t(tag)}}</el-tag>
				        	</div>
				        	<div class="tags-show fr clearfix">
								<div v-for="(item,index) in dynamicTags" >
				                    <span  :class="{'detail-selected': dynamicTagIds.includes(item.id) }" @click="handlePush(item,$event)" :tag-id=index>{{$t(item.name)}}</span>
                  				</div>
				        	</div>
                  			<div style="clear: both;text-align: center;height:80px;display: inline-block;">
                  				<el-button type="primary" class="nextBtn btnshadow" @click="submitSkill"   :plain="true"  style="background: #2196f3 !important;color: #ffffff !important;">Complete</el-button>
                  			</div>
				   		 </div>

				    </div>
				</form>
				<!--白帽子注册成功-->
				<div v-show="resSucess" class='ac'>
					<img src="/static/image/logAres/sucessIcon.png" style="margin-top: 30px;" alt="" /><br />
					<p style="font-size: 16px;margin: 30px 0;">Sign-up Successfully</p>
					<el-button type="primary" class="loginWCBtn" @click="BMZuserBtn" style="display: none;">Go into Personal Center in<b>{{count}}</b>Seconds</el-button>
				</div>
				<!--厂商注册成功-->
				<div v-show="resCSSucess" class='ac'>
					<img src="/static/image/logAres/sucessIcon.png" style="margin-top: 30px;" alt="" /><br />
					<p style="font-size: 16px;margin: 30px 0;">Sign-up Successfully</p>
					<el-button type="primary" class="loginWCBtn" @click="CSuserBtn" style="display:none">Go into Personal Center in<b>{{count}}</b>Seconds</el-button>
				</div>
            </div>
       </div>
		<!--邮箱信息-->
		<comEmailEn v-show="comEmailinfo" :userEmail="userZCEmail"></comEmailEn>
</div>
</template>

<script>
	import homeBanner from '@/components/Home/homeBanner'
	import comEmailEn from '@/components/company/comEmailEn'
	export default {
		name: 'register',
		components: {homeBanner,comEmailEn},
		data () {
		var validateUser = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('The nickname cannot be blank！'))
			}
				callback()
		};
		var validateaddress = (rule, value, callback) => {
			var reg=/^[\s][{9fa5}a-zA-Z0-9]{42}$/
			if(!reg.test(value)){
				callback(new Error('ETH钱包地址格式错误！'))
			}else{				
				callback()
			}
		};
		var validatePass = (rule, value, callback) => {
			let reg=/(?=.*[a-z])(?=.*\d)(?=.*[#_$@!~%^&*])[a-z\d_$#@!~%^&*]{6,50}/i
	        if (value === '') {
	            callback(new Error('The password cannot be blank'));
	        } else if(!reg.test(value)){
	        	callback(new Error('The password must contain numbers, letters and special characters'));
	        }else {
	          if (this.DVP_BMZRes.checkPass !== '') {
	            this.$refs.DVP_BMZRes.validateField('checkPass');
	          }
	          if (this.DVP_CSRes.checkPass !== '') {
	            this.$refs.DVP_CSRes.validateField('checkPass');
	          }
	          callback();
	        }
	    };
	    var validatePass2 = (rule, value, callback) => {
		 	/*白帽子注册密码*/
	        if (value === '') {
	          callback(new Error('Please input the password again'));
	        } else if (value !== this.DVP_BMZRes.pass) {
	          callback(new Error('Inconsistent password input!'));
	        } else {
	          callback();
	        }
	    };
	    var validateCSPass2 = (rule, value, callback) => {
	        /*厂商注册密码*/
	         if (value === '') {
	          callback(new Error('Please input the password again'));
	        } else if (value !== this.DVP_CSRes.pass) {
	          callback(new Error('Inconsistent password input!'));
	        } else {
	          callback();
	        }
	    };
	    var validateyzm = (rule, value, callback) => {
	    	if (value === '') {
				callback(new Error('The verification code cannot be blank！'))
			}
	      	callback()
	    };
	     var validatecontact = (rule, value, callback) => {
	    	if (value === '') {
				callback(new Error('Contact cannot be empty！'))
			}
	      	callback()
	    };
	    var validateYm = (rule, value, callback) => {
	      	let reg = /^http(s)?:\/\/(.*?)/
	     /* 	let regHttp = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/*/
	   		if (value === 'https://') {
				callback(new Error('Please enter your domain name！'))
			}
	      	if(!reg.test(value)){
	        	callback(new Error('The domain name you entered is incorrect.'));
	        }
	      	callback()
	      };
		return {
			count: '',
			active: 1,
			Roleswitch: '',
			resShowCS: false,
			resShowBMZ: false,
			loginShow: true,
			BMZ_Roleshow: true,
			CS_Roleshow: false,
			activeType: 1,
			roleBox: true,
			labelPosition: "top",
			checked: false,
			imgurl: '',  //验证码初始化
			registerStatus: true,  //注册显示隐藏
			dialog_zcbq: false,    //skill框显示隐藏
			dynamic:[],
			dyIds:[],
			dynamicTags: [],
			resSucess: false,
			resCSSucess:false,
			inputVisible: false,
		    inputValue: '',
		    message:false,
		    comEmailinfo: false,
		    userZCEmail:'',
			DVP_BMZResS: {
				user: [
					{validator: validateUser, trigger: 'blur', message: "Input Nickname"},
					{ min: 2, max: 20, trigger: 'blur',  message: 'Account needs to be 2 to 20 characters'}
				],
				pass: [
			        { validator: validatePass, trigger: 'blur' }
			    ],
			    checkPass: [
			        { validator: validatePass2, trigger: 'blur' }
			    ],
			    yzm: [
			    	{validator: validateyzm, trigger: 'blur'}
			    ]

			},
			DVP_CSResS: {
				user: [
					{validator: validateUser, trigger: 'blur',required: true, message: "Input Nickname"},
					{ min: 2, max: 20, trigger: 'blur',  message: 'Account needs to be 2 to 20 characters'}
				],
				comqyym: [
					{validator: validateYm, trigger: 'blur' ,required: true },
				],
				pass: [
			        { validator: validatePass, trigger: 'blur'}
			    ],
			    checkPass: [
			        { validator: validateCSPass2, trigger: 'blur' }
			    ],
			    yzm: [
			    	{validator: validateyzm, trigger: 'blur'}
			    ],
			    contact: [
			   		{validator: validatecontact, trigger: 'blur',required: true}
			    ]
			},
			DVP_BMZRes: {	user: '',	address: '', pass: '',	checkPass: '',	yzm: '',	},
			DVP_CSRes: {	user: '',	pass: '',	checkPass: '',	comqyym: '',	yzm: '',	email: '',contact:''},
			activeName: 'first',
			dynamicTagIds: [],
			lang: 'en'
		}
	},
		  mounted(){
        	this.lang=localStorage.getItem('locale')
		    if(this.lang=='zh'){
		   		this.$router.push({ path: '/register' })
		    }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.$router.push({ path: '/register_en' })
		    }else if(this.lang=='ko'){
		   		this.$router.push({ path: '/register_ko' })
		    }
        },
		methods: {
		//获取skill标签
			initData(){
				this.imgurl=this.$ajax.captcha+'?t='+new Date().getTime();
			    if(this.$route.query.id==2){
                    this.BMZ_Roleshow=false
			        this.CS_Roleshow=true
                };
                this.lang=localStorage.getItem('locale')
				var _this = this;
					this.$ajax.BMZskill({'language':'en_US'})
					.then(res => {
						if(res.errcode===1){
							_this.dynamicTags = res.data.skill;
						}
					})

				   this.imgurl = this.$ajax.captcha
			},
			captcha(){
				 this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
			},
			BMZ_Role(){
				if(this.BMZ_Roleshow == false){
					this.BMZ_Roleshow = true
					this.CS_Roleshow = false
				}else if(this.BMZ_Roleshow == true){
					this.BMZ_Roleshow = false
					//this.CS_Roleshow = true
				}
			},
			CS_Role(){
				if(this.CS_Roleshow == false){
					this.CS_Roleshow = true
					this.BMZ_Roleshow = false
				}else if(this.CS_Roleshow == true){
					this.CS_Roleshow = false
					//this.BMZ_Roleshow = true
				}
			},
			Role(){
				this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
				if(this.Roleswitch == 'Switch to White Hat'){
					this.resShowCS= false
					this.resShowBMZ = true
					this.Roleswitch = 'Switch to Vendor'
				}else if(this.Roleswitch == 'Switch to Vendor'){
					this.resShowBMZ= false
					this.resShowCS= true
					this.Roleswitch = 'Switch to White Hat'
				}
			},
			next() {
		        if (this.active++ > 2) this.active = 0;
		        if(this.BMZ_Roleshow == true){
		        	this.loginShow = false
		        	this.resShowBMZ = true
		        	this.Roleswitch = 'Switch to Vendor'
		        }else if(this.CS_Roleshow == true){
		        	this.loginShow = false
		        	this.Roleswitch = 'Switch to White Hat'
		        	this.resShowCS = true
		        }
		    },
		    loginBtn(){
			    this.$router.push({ path:"/login" })
		    },
		    BMZuserBtn(){
		    	this.$router.push({ path:"/membox/member/vuls"})
		    },
		    CSuserBtn(){
		    	this.$router.push({ path:"/combox/company/companyOne" })
		    },
		    //提交skill标签
		   submitSkill(){
				let skillData={
					ids:this.dyIds,
					hid:this.DVP_BMZRes.user
				}
				this.$ajax.BMZskillBack(skillData)
					.then(res => {
						if(res.errcode === 1){
							this.dialog_zcbq = false
							this.active = 3
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
						          this.$router.push({ path:"/membox/member/vuls"})
						          window.localStorage.setItem("tokenType", 1);
						          //白帽子个人信息
						          	this.$ajax.BMZinfo({'language':'en_US'})
									.then(res => {
										if(res.errcode === 1){
			               					window.localStorage.setItem('$BMZuser',JSON.stringify(res.data))		          			
						          			this.$store.dispatch('setBMZuser',window.localStorage.getItem("$BMZuser"))
										}
									})
						        }
						      },1000)
						    }
						}else{
							 this.$message.error(res.errmsg);
						}
					})
			},
			//skill标签关闭
			handleClosebq(tag) {
				let index = this.dynamic.indexOf(tag);
			    this.dynamic.splice(index,1);
			    this.dyIds.splice(index,1);
			    this.dynamicTagIds.splice(index,1);
			},
			//skill标签
			handlePush(data,e){
				if(this.dynamic.indexOf(data.name) == -1 && this.dynamic.length < 5){
					this.dynamic.push(data.name);
					this.dyIds.push(data.id);
					if($.inArray(data.id, this.dynamicTags) == -1){
						this.dynamicTagIds.push(data.id)
					}
				}

				if( this.dynamic.length == 5){
					this.$message.error('Select up to 5 tags');
				}
		},
		    //获取验证码图片
		changeCodeImg(){
			 this.captcha()
	　 },
		handleClick (tab, event) {
			this.imgurl = this.$ajax.captcha+'?t='+new Date().getTime();
		},

		//白帽子提交表单
		submitForm (DVP_BMZResS) {
			/*this.dialog_zcbq = true
			this.registerStatus = false
			return*/
			/*this.resSucess = true
			this.registerStatus = false
			return*/
			let formData = {
		    	'hid' : this.DVP_BMZRes.user,
		    	'receipt': this.DVP_BMZRes.address,
		    	'pwd' : this.DVP_BMZRes.pass,
		    	'repwd' : this.DVP_BMZRes.checkPass,
		    	'captcha' : this.DVP_BMZRes.yzm,
			}
			var that=this
			if( this.checked== true){
			this.$refs[DVP_BMZResS].validate((DVP_BMZResS) => {
		        if (DVP_BMZResS) {
		            that.$ajax.BMZres(formData)
						.then(res => {
							console.log(res)
							if (res.errcode  === 1) {
								window.localStorage.setItem("token", res.data.token);
				          		//显示擅长领域
			    				that.resShowBMZ = false
				    	 		that.dialog_zcbq = true
					        }else {
					        	this.captcha()
								this.$message.error(res.errmsg);
					        }
						})
						.catch((res) => {
								 this.$message.error(res.errmsg);
			  		    })
		         } else {
		             return false;
		          }

			 })
			}else{
      	 		this.$message.error("Please select an agreement");
      	 		this.imgurl=this.$ajax.captcha+'?t='+new Date().getTime();
      		}

			},
		//厂商注册提交
		submitCSForm(DVP_CSResS){
			let formData = {
			    	'company_name' : this.DVP_CSRes.user, //厂商账号
			    	'domain' : this.DVP_CSRes.comqyym,	//厂商域名
			    	'email' : this.DVP_CSRes.email,
			    	'pwd' : this.DVP_CSRes.pass,
			    	'repwd' : this.DVP_CSRes.checkPass,
			    	'captcha' : this.DVP_CSRes.yzm,
			    	'contact' : this.DVP_CSRes.contact,
			}
			var _this=this
			if( _this.checked == true){
			this.$refs[DVP_CSResS].validate((DVP_CSResS) => {
		        if (DVP_CSResS) {		        	
		        		_this.messageXy=false;
		        		this.$ajax.CSres(formData)
						.then(res => {
							if (res.errcode  === 1) {
								window.localStorage.setItem("token", res.data.token);
								this.userZCEmail = res.data
								this.comEmailinfo = true
					        }else {
					        	this.captcha()
								this.$message.error(res.errmsg);
					        }
						})
						.catch((res) => {
							    this.captcha()
								this.$message.error(res.errmsg);
			  		    })

		         } else {
		            return false;
		          }
			  })
			}else{
        		this.$message.error("Please select an agreement");
        		this.imgurl=this.$ajax.captcha+'?t='+new Date().getTime();
        	}

			}

		},
		created(){
			this.initData();
		}
	}
</script>

<style>
.edit-form-active .tags-show div{
	float: left;
}
.edit-form-active .tags-select{
	box-sizing: border-box !important;
}
.edit-form-active .tags-show span{
	box-sizing: border-box;
}
.el-checkbox__label{
	font-size: 12px;
}
.resbox .el-form-item__content{
	width: 100% !important;
	margin: 0 auto;
	line-height: inherit;
}
.detail-btn{
   background: #ffffff;
}
.detail-selected{
   background: #2196f2;
   color: #ffffff;
}
.loginWCBtn{
	display: block;
	margin:0 auto;
	margin-top: 30px;
}
.loginWCBtn a{
	color: #ffffff;
}
</style>
