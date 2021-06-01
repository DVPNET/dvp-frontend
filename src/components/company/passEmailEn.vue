<template>	
		<!--修改密码-->	
		<div>
			<div class="respasswrap ac">
				<h1>Forget Password</h1>
				<el-form  :model="DVP_CSRes" ref="DVP_CSRes" status-icon :rules="DVP_CSResS">
					  <el-form-item prop="user" label="" >
	                      <el-input v-model="DVP_CSRes.user" placeholder="Account Name:"></el-input>
	                  </el-form-item>
					  <el-form-item prop="email" label=""  :rules="[
	                            { required: true, message: 'Please enter your email address', trigger: 'blur' },
						        { type: 'email', message: 'Please enter your correct email address', trigger: ['blur', 'change'] }
	                        ]">
	                      <el-input v-model="DVP_CSRes.email" placeholder="Email Address:"></el-input>
	                  </el-form-item>
				    <el-button type="primary"  :plain="true" @click="respassEmail('DVP_CSRes')"  class="btnshadow wrapBtn" style="width:80%;margin-bottom: 30px;">Send a reset password link</el-button>
				    <p><i class="el-icon-warning" style="opacity: 1;"></i>&nbsp;Please provide the above data. We will send you the information for resetting your password.</p>
				  </el-form-item>
				</el-form>
			</div>  
			<el-dialog
	          title=""
	          :visible.sync="dialogldxq"
	          width="500px" :modal-append-to-body="false">
	            <div class="mDVP" style="width: 100%;text-align:center;margin:0;padding:0;">
				    <div class="reg-cgzc" style="padding-bottom: 50px;">
				    	<h2 style="margin: 10px 0 30px 0">Forget Password</h2>
				      	<p style="color: #8e9eae;">We have sent out the info for resetting your password via email </p>
				      	<p style="color: #8e9eae;">Please use{{DVP_CSRes.email}} to login and check it</p>   	
				    </div>
				</div>
	        </el-dialog>
		</div>
		
</template>

<script>
	export default {
		name: 'passEmail',
		data () {
			var validateUser = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Nickname can NOT be empty！'))
				}
					callback()
			};
			return {
				resEmailSucess: true,
				emailshow: false,
				dialogldxq:false,
				passEmailInfo:'',
				DVP_CSResS: {
					user: [
						{validator: validateUser, trigger: 'blur',required: true, message: "Input Nickname"},
						{ min: 2, max: 20, trigger: 'blur',  message: 'Account needs to be 2 to 20 characters'}
					]
				},
				DVP_CSRes: {user: '',email: ''},
			}
		},
		methods: {
			initData(){
				var _this = this; 
			},
			respassEmail(DVP_CSResS){				
				let formData = {
			    	'companyName' : this.DVP_CSRes.user, 
			    	'email' : this.DVP_CSRes.email
			    }
				var _this=this
				this.$refs[DVP_CSResS].validate((DVP_CSResS) => {
				  if (DVP_CSResS) {
			    		this.$ajax.ComForpass(formData)
						.then(res => {
							if (res.errcode  === 1) {
								this.dialogldxq=true						
					       }else {
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
				
			},
		},
		created(){
			this.initData();
		}
	}
</script>

<style scoped>
	.el-dialog__wrapper{
			z-index: 2001;
			background: rgba(0, 0, 0, 0.5);
	}
	.respasswrap{
		width: 500px;
		padding: 50px 80px;
		box-sizing: border-box;
		background: #ffffff;
		margin: 90px auto;
	}
	.respasswrap h1{
		text-align: center;
		margin-bottom: 30px;
	}
	.respasswrap p{
		text-align: center;
		margin-bottom: 30px;
		color: #f06d6d;
		font-size: 12px;
	}
</style>
