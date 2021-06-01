<template>
	<div class="passTokenEmail">
		<div>
			<h1>重置密码</h1>
			<el-form  :model="DVP_CSRes" ref="DVP_CSRes" status-icon :rules="DVP_CSResS">
			  <el-form-item label="" prop="pass">
                  <el-input type="password" v-model="DVP_CSRes.pass" autocomplete="off" :placeholder="$t('message.Please_input_the_password')"></el-input>
              </el-form-item>
               <el-form-item label="" prop="checkPass">
                   <el-input type="password" v-model="DVP_CSRes.checkPass" autocomplete="off" :placeholder="$t('message.Please_re_input_the_password')"></el-input>
              </el-form-item>
			  <el-form-item label="">
			    <el-button type="primary"  @click="XGMMdjbc('DVP_CSRes')"  :plain="true"  class="btnshadow wrapBtn" style="width:100%;margin-bottom: 100px;">{{$t('message.UpdatePassword')}}</el-button>
			  </el-form-item>
			</el-form>
		</div>
        <el-dialog
          title=""
          :visible.sync="dialogldxq"
          width="500px">
            <div class="mDVP">
			    <img src="/static/image/logAres/sucessIcon.png" style="margin: 30px 0;" alt="" /><br />
			    <div class="reg-cgzc">
			    	<h2 style="margin-bottom: 10px;">{{$t('message.point')}}</h2>
			      	<span style="color: #8e9eae;" v-show="actEn">
			      		{{$t('message.ResetPasswordSuccessfully')}}，
			      		<b>{{count}}</b>秒进入登录页面
			      	</span>
			      	<span style="color: #8e9eae;" v-show="!actEn && this.lang == 'en'">
			      		{{$t('message.ResetPasswordSuccessfully')}}，
			      		Go into Login Page in<b>{{count}}</b>Seconds
			      	</span>
							<span style="color: #8e9eae;" v-show="!actEn && this.lang == 'ko'">
			      		{{$t('message.ResetPasswordSuccessfully')}}，
			      		<b>{{count}}</b>초 후 자동으로 로그인 화면으로 이동하겠습니다
			      	</span>
			      	<el-button class="reg-percon btnshadow wrapBtnlg"  type="primary"  @click="goCompany">{{$t('message.GotIt')}}</el-button>	      	
			    </div>
			</div>
        </el-dialog>
        <el-dialog
          title=""
          :visible.sync="dialogpasserr2"
          width="600px">
            <div class="mDVP">
			    <div class="reg-cgzc al">
			    	<span>{{$t('message.Hello')}}：</span><br />
			      	<span style="color: #8e9eae;">{{$t('message.ThePasswordExpiredPleaseLoginResend')}}</span>    	
			    </div>
			</div>
        </el-dialog>
        <el-dialog
          title=""
          :visible.sync="dialogpasserr"
          width="600px">
            <div class="mDVP">
			    <div class="reg-cgzc al">
			    	<span>{{$t('message.Hello')}}：</span><br />
			    	<span style="color: #8e9eae;">{{$t('message.TheLinkPasswordUsedPleaseLoginResend')}}</span>
			    </div>
			</div>
        </el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'passTokenEmail',
		data () {
			var validatePass = (rule, value, callback) => {
				let reg=/(?=.*[a-z])(?=.*\d)(?=.*[#_$@!~%^&*])[a-z\d_$#@!~%^&*]{6,50}/i
		        if (value === '') {
		        	 if(this.actEn==true){
		        	 	 callback(new Error('密码不能为空'));
		        	 }else if(this.actEn==false){
		        	 	 callback(new Error('The password cannot be blank'));
		        	 }
		           
		        } else if(!reg.test(value)){
		        	if(this.actEn==true){
		        	 	 callback(new Error('密码必须包含数字、字母、特殊字符组成，例如： _~!@#$%'));
		        	 }else if(this.actEn==false){
		        	 	 callback(new Error('The password must contain numbers, letters and special characters'));
		        	 }
		        }else {
		          if (this.DVP_CSRes.checkPass !== '') {
		            this.$refs.DVP_CSRes.validateField('checkPass');
		          }
		          callback();
		        }
		    };
		     var validateCSPass2 = (rule, value, callback) => {
		        /*厂商注册密码*/
		         if (value === '') {
		         	if(this.actEn==true){
		        	 	 callback(new Error('请再次输入密码'));
		        	 }else if(this.lang=='en'){
		        	 	 callback(new Error('Please input the password again'));
		        	 }
		        } else if (value !== this.DVP_CSRes.pass) {
		        	if(this.actEn==true){
		        	 	 callback(new Error('两次输入密码不一致'));
		        	 }else if(this.actEn==false){
		        	 	 callback(new Error('Inconsistent password input'));
		        	 }
		        } else {
		          callback();
		        }
		    };
			return{
				dialogldxq:false,
				DVP_CSResS: {
					pass: [
				        { validator: validatePass, trigger: 'blur'}
				    ],
				    checkPass: [
				        { validator: validateCSPass2, trigger: 'blur' }
				    ]
				},
				DVP_CSRes: {pass: '',checkPass: ''},
				count: '',
				dialogpasserr:false,
				dialogpasserr2:false,
				actEn: true,
				lang: 'zh'
			}
		},
		mounted(){
        	this.lang=localStorage.getItem('locale')
		    if(this.lang=='zh'){
		   		this.actEn=true
		    }else if(this.lang=='en' || this.lang==null || this.lang=='' || this.lang=='ko'){
		   		this.actEn=false
		    }
        },
		created(){
			this.initData();
		},
		methods: {
			initData(){
				this.$ajax.ComForpassinfo({'token' : this.$route.query.token})
				.then(res => {
					if(res.errcode === 1){
						
					}else if(res.errcode === 2){
						this.dialogpasserr=true
					}else if(res.errcode === 3){
						this.dialogpasserr2=true
					}
				})
				window.sessionStorage.setItem('userCSrole',2)				
			},
		 //修改密码
		    XGMMdjbc(DVP_CSResS){
		    	this.message = false
		    	var _this=this
				var Pasword={
					'token' : this.$route.query.token,
			    	'password' : this.DVP_CSRes.pass,
			    	'rePassword' : this.DVP_CSRes.checkPass,
				}
				this.$refs[DVP_CSResS].validate((DVP_CSResS) => {
				  if (DVP_CSResS) {
					this.$ajax.ComForpassRep(Pasword)
					.then(res => {
						if(res.errcode === 1){
							this.dialogldxq=true
								const TIME_COUNT = 3;
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
								           this.$router.push({ path:"/login?id=2"})								
								        }
								      },1000)
								    }
						}else if(res.errcode === 2){
							this.dialogpasserr=true
						}else if(res.errcode === 3){
							this.dialogpasserr2=true
						}else{
							this.$message.error(res.errmsg);
						}
					})
				 } else {

		            return false;
		          }
				})
		   },
			goCompany(){
				this.$router.push({ path:"/login?id=2" })
			}
		}

	}
</script>

<style scoped> 
	.passTokenEmail{
		width: 500px;
		margin: 80px auto;
		background: #ffffff;
		padding: 0 80px;
		box-sizing: border-box;
	}
	.passTokenEmail h1{
		text-align: center;
		padding: 50px 0 20px 0;
	}
	.mDVP{
		width: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
	}
	.reg-percon{
		display: block;
		margin:  80px auto !important;
	}
	.reg-cgzc span{
		display: block;
		margin: auto;
	}
	.reg-cgzc img{
		margin: 130px 0 20px 0;
	}
</style>