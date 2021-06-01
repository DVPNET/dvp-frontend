<template>	
		<!--修改密码-->	
		<div>
			<div class="respasswrap ac">
				<h1>忘记密码</h1>
				<el-form  :model="DVP_CSRes" ref="DVP_CSRes" status-icon :rules="DVP_CSResS">
					  <el-form-item prop="user" label="" >
	                      <el-input v-model="DVP_CSRes.user" placeholder="企业名称："></el-input>
	                  </el-form-item>
					  <el-form-item prop="email" label=""  :rules="[
	                            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
						        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
	                        ]">
	                      <el-input v-model="DVP_CSRes.email" placeholder="企业邮箱："></el-input>
	                  </el-form-item>
				    <el-button type="primary"  :plain="true" @click="respassEmail('DVP_CSRes')"  class="btnshadow wrapBtn" style="width:80%;margin-bottom: 30px;">发送重置密码链接</el-button>
				    <p><i class="el-icon-warning" style="opacity: 1;"></i>&nbsp;请输入以上信息，我们会将重置密码所需的信息发送给您。</p>
				  </el-form-item>
				</el-form>
			</div>  
			<el-dialog  title=""  :visible.sync="dialogldxq" width="500px" :modal-append-to-body="false">
	          <div class="mDVP" style="text-align: center;margin: 0;padding: 0;">
							<div class="reg-cgzc" style="padding-bottom: 50px;">
								<h2 style="margin: 10px 0 30px 0">忘记密码</h2>
									<p style="color: #8e9eae;">重置密码所需的信息已发送邮件给您 </p>
									<p style="color: #8e9eae;">请登录{{DVP_CSRes.email}} 查看</p>   	
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
					callback(new Error('昵称不能为空！'))
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
						{validator: validateUser, trigger: 'blur',required: true, message: "请输入昵称"},
						{ min: 2, max: 20, trigger: 'blur',  message: '账号必须是2~20位之间'}
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
	.mDVP{
		width: 100%;
		margin: 0;
		padding: 0;
		text-align: center;
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
