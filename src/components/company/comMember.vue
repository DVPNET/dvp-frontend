<template>
	<div>
	    <!-- 担保金管理 -->
	    <div class="company-personal-wrap">
	        <div class="reward-manage  account-config">
	        	<el-tabs v-model="activeName" @tab-click="handleClick" class="compUser_wrap">
					<el-tab-pane :label="$t('message.Settings')" name="first">
							<el-form :label-position="labelPosition" label-width="80px">
					          		<el-form-item label="LOGO:">
					          			<el-upload
										  class="avatar-uploader"
										  action="$store.state.CSuser.user.logo"
										  name="file"
										  :show-file-list="false"
										  :on-success="handleAvatarSuccess"
										  :before-upload="beforeAvatarUpload">
										  <img  :src="$store.state.CSuser.user.logo" :onerror="defaultImg" class="avatar">
										</el-upload>
										<p>{{$t('message.Pictureformat')}}</p>
								    </el-form-item>
								  	<el-form-item :abel="$t('message.Name')">
								    	<el-input v-model="$store.state.CSuser.user.company_name" :disabled="true"></el-input>
								  	</el-form-item>
								 	<el-form-item :label="$t('message.Email')">
								    	<el-input v-model="$store.state.CSuser.user.email" :disabled="true"></el-input>
								  	</el-form-item>
								  	<el-form-item :label="$t('message.Website')">
								    	<el-input v-model="$store.state.CSuser.user.domain" :placeholder="$t('message.PleaseInputDomainVendorWebsite')"></el-input>
								    </el-form-item>
								    <!--<el-form-item label="钱包地址:">
								    	<el-input v-model="$store.state.CSuser.user.eth_addr" :placeholder="comUserPrice"></el-input>
								    </el-form-item>-->
								    <el-form-item :label="$t('message.ContactInfo')">
								    	<el-input v-model="$store.state.CSuser.user.contact" placeholder=""></el-input>
								    </el-form-item>
								    <el-form-item :label="$t('message.Description')">
								     	<el-input type="textarea" v-model="$store.state.CSuser.user.introduction" :placeholder="comUserJS"></el-input>
								    </el-form-item>
								    <el-form-item label="">
								    	<el-button type="primary"  @click="ZHSZdjbc" :plain="true"  class="btnshadow wrapBtn">{{$t('message.UpdateInfo')}}</el-button>
								    </el-form-item>
							</el-form>

					</el-tab-pane>
					<el-tab-pane :label="$t('message.ChangePassword')" name="second">
						    <el-form :label-position="labelPosition2" label-width="80px" :model="formLabelAlignPass">
								  <el-form-item :label="$t('message.OldPassword')">
								    <el-input type='password' v-model="formLabelAlignPass.pwd" autocomplete="off" placeholder=""></el-input>
								  </el-form-item>
								  <el-form-item :label="$t('message.NewPassword')">
								    <el-input type='password'  v-model="formLabelAlignPass.repwd" autocomplete="off" placeholder=""></el-input>
								  </el-form-item>
								  <el-form-item :label="$t('message.ConfirmNewPassword')">
								    <el-input type='password'  v-model="formLabelAlignPass.respwd" autocomplete="off" placeholder=""></el-input>
								  </el-form-item>
								  <el-form-item label="">
								    <el-button type="primary"  @click="XGMMdjbc"  :plain="true"  class="btnshadow wrapBtn" style="margin-bottom: 100px;">{{$t('message.ConfirmUpdate')}}</el-button>
								  </el-form-item>
							</el-form>
					</el-tab-pane>
	  			</el-tabs>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
			name: 'comMember',
			data () {
				return {
					activeName:'first',
					labelPosition: 'right',
					labelPosition2: "top",
					comUserPrice:'',
					comUserJS:'',
					formLabelAlign: true,
					formLabelAlignZH:[],
					formLabelAlignZHweb:'',
					formLabelAlignZHcontact:'',
			        formLabelAlignPass: { pwd:'', repwd:'',respwd:'' },
				    message: false,
				    defaultImg: 'this.src="' + require('../../../static/image/company-logo-default.png') + '"'
				}
			},
			methods: {
				initData(){

				},
				 /*上传头像*/
		  		handleAvatarSuccess(res, file) {
		  			this.$store.state.CSuser.user.logos = URL.createObjectURL(file.raw);
			    },
		    	beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		       /* if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }*/
		       /* if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }*/
		         //校验成功上传文件
		       // if(isLt2M == true){
		        	let formData = new FormData();
					formData.append('file', file);
					 // post上传图片
				    let _this = this
				    this.$ajax.CScomUpload(formData)
				 	 .then(res => {
				  		if (res.errcode === 1) {
				     		_this.$store.state.CSuser.user.logo = res.data.imgpath
				   		}else{
				   			_this.msgErr =res.errmsg
			         		_this.message=true;
				   		}
				 	});
		     //   }
		      	//  return isLt2M;
		        },
		        handleClick(){
		        	this.message = false
		        },
			    //账号设置
			    ZHSZdjbc(){
			    	this.message = false
			    	var _this=this
					var Update={
						'logo_url': this.$store.state.CSuser.user.logo,
						'company_name': this.$store.state.CSuser.user.company_name,
						'email': this.$store.state.CSuser.user.email,
						'eth_addr': this.$store.state.CSuser.user.eth_addr,
						'introduction': this.$store.state.CSuser.user.introduction,
						'contact': this.$store.state.CSuser.user.contact,
						'domain': this.$store.state.CSuser.user.domain
					}
					this.$ajax.CScomUpdate(Update)
					.then(res => {
						if(res.errcode === 1){
							this.$message({
					          message: '更新成功',
					          type: 'success'
					      });

						}else{
							this.$message.error(res.errmsg);
						}
					})
			    },
			    //修改密码
			    XGMMdjbc(){
			    	this.message = false
			    	var _this=this
					var Pasword={
						'oldPassword': this.formLabelAlignPass.pwd,
						'newPassword': this.formLabelAlignPass.repwd,
						'reNewPassword': this.formLabelAlignPass.respwd
					}
					this.$ajax.CScomUpdatePass(Pasword)
					.then(res => {
						console.log(res)
						if(res.errcode === 1){
							this.$message({
					          message: '修改成功',
					          type: 'success'
					       });
						}else{
							this.$message.error(res.errmsg);
						}
					})
			  },
			},
		    created:function(){
		   		this.initData();
			}

	  }
</script>

<style>
	.compUser_wrap .el-form{
		margin-top: 20px;
	}
	.compUser_wrap .el-button{
		margin-top: 20px;
	}
	/*.compUser_wrap input{
		border-top: 0 !important;
		border-left: 0 !important;
		border-radius: 0 !important;
		border-right: 0 !important;
	}*/
	.compUser_wrap .el-form-item__label{
		text-align: left !important;
	}
	.compUser_wrap .el-tabs__header{
		padding: 0 !important;
	}
	 .avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 148px;
	    height: 148px;
	    line-height: 148px;
	    text-align: center;
	  }
	  .avatar {
	    width: 148px;
	    height: 148px;
	    display: block;
	  }
	.el-form-item__label{
	    text-align: right;
	    white-space: nowrap;
	}
	.el-button{
		padding: 8px 35px;
	}
	.ZHSZdj{
		display: none;
	}
	.XGMMdj{
		display: none;
	}
	.company-personal-wrap .el-form-item__content{
		line-height: inherit !important;
	}
</style>-->
