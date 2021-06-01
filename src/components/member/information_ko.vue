<template>
	<el-container>
			<el-header class='hole-top' style="height:0;"></el-header>
			<el-tabs v-model="activeName" @tab-click="handleClick" class="compUser_wrap">
					<el-tab-pane :label="$t('message.BasicInformation')" name="first">
						<form class="id-edit-form  edit-form-active jbzldj" v-cloak>
		                <div class="form-input">
					        <div class="my-info-edit-item clearfix">
					          <span class="fl">{{$t('message.Nickname')}}:</span>
					          <input type="text" class="form-control-inp fr" style="background: #ffffff !important;" placeholder=""  v-model="userName">
					        </div>
					        <div class="my-info-edit-item clearfix">
					        	<span class="fl">{{$t('message.Advantage')}}:</span>
					        	<div class="tags-div clearfix fr">
			                      <div v-for="tag in skillTag">
									<span>{{tag}} </span>
			                      </div>
		                    </div>
					        	<div class="tags-select fr">
					        		<el-tag  :key="tag"  v-for="tag in skillTag"  size="medium"  closable  :disable-transitions="false" @close="handleClosebq(tag)">{{$t(tag)}} </el-tag>
					        	</div>
					        	<div class="tags-show fr clearfix" style="width: 729px!important;">
												<div v-for="(item,index) in dynamicTags" >
				                    <span :class="{'detail-selected': addskillTagID.includes(item.id) }" @click="handlePush(item,$event)" :tag-id=index >{{$t(item.name)}} </span>
                  		  </div>
					        	</div>
                      			<div style="clear: both;">
                      				<el-button type="primary" class="btnshadow wrapBtn"  @click="submitSkill" style=" margin: 40px 0 50px 118px"  :plain="true">{{$t('message.save')}}</el-button>
                      			</div>
					   		 </div>

					    </div>
					 </form>
					</el-tab-pane>
					<el-tab-pane :label="$t('message.ReceiptAddress')" name="second">
						<form class="address-edit-form edit-form-active skdzdj" v-cloak>
		                	<div class="form-input">
		                		<div class="my-info-edit-item clearfix">
				                	<span class="fl">{{$t('message.ReceiptAddress')}}</span>
						          	<input type="text" class="form-control-inp fr" :placeholder="$t('message.PleaseInputRecipientAddress')" id="receipt" v-model="$store.state.BMZuser.info.receipt">
					       		 </div>
						        <div class="clearfix my-info-item fr" style="width:729px;color:#f06d6d;font-size: 14px;">
			                		<i class="icon iconfont icon-jingshi"></i>{{$t('message.ReceiptAddressNote')}}
			                	</div>
						        <div style="clear: both;">
		                      			<el-button type="primary" class="btnshadow wrapBtn" @click="submitReceipt"  style=" margin: 40px 0 50px 118px;"  :plain="true">{{$t('message.save')}}</el-button>
		                      	</div>
		                	</div>
				        </form>
					</el-tab-pane>
  			</el-tabs>
	</el-container>
</template>

<script>
	export default {
		name: 'information',
		data(){
			return{
				activeName: 'first',
				dyIds:[],
				dynamicTags: [],
				skillTag: [],
		        inputVisible: false,
		        inputValue: '',
		        message: false,
		        addskillTagID:[],
		        addId:[],
		        userName:'',
		        lang:'en'
			};
		 },
		mounted(){
		   this.lang=localStorage.getItem('locale')
		   if(this.lang=='zh'){
		   		this.$router.push({ path: '/membox/member/information' })
		   }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.$router.push({ path: '/membox/member/information_en' })
		   }else if(this.lang=='ko'){
		   		this.$router.push({ path: '/membox/member/information_ko' })
		   }
	    },
		 methods: {
			//获取skill标签
			initData(){
				var _this = this;
				//个人信息
				this.$ajax.BMZinfo({'language':'en_US'})
				.then(res => {
					if(res.errcode === 1){
						this.userName=res.data.info.hid
						for(var i=0;i<res.data.skillList.length; i++){
							_this.skillTag.push(res.data.skillList[i].name) //用户擅长领域
     					    _this.addId.push(res.data.skillList[i].id)
							_this.addskillTagID.push(res.data.skillList[i].id)
						}
					}
				})
				//标签
				this.$ajax.BMZskill({'language':'en_US'})
				.then(res => {
					if(res.errcode===1){
						_this.dynamicTags = res.data.skill;
					}
				})
				
			},
			handleClick(){
				this.message=false;
			},
			//skill标签
			handlePush(data,e){
				if(this.skillTag.indexOf(data.name) == -1 && this.skillTag.length < 5){
					this.skillTag.push(data.name);
					if($.inArray(data.id, this.addskillTagID) == -1){
						this.addskillTagID.push(data.id)
					}
				}
				if( this.skillTag.length == 5){
					 this.$message.error('Select up to 5 tags');
				}else if(this.skillTag.length == 1){
					 this.$message.error('Select at least one tag');
				}
			},
			//skill删除标签
			 handleClosebq(tag) {
				let index = this.skillTag.indexOf(tag);
				let skillId = this.addId[index];				// 领域id

			    this.skillTag.splice(index,1);			// 删除name
			    this.addId.splice(index,1);			// 删除name
			    this.addskillTagID.splice(index,1);

			    let inx = $.inArray(skillId, this.addskillTagID);

			    if(inx != -1){
			    	this.addskillTagID.splice(inx,1)
			    }
			},
			//提交skill标签
			submitSkill(){
				var _this=this
				let skillData={
					ids: this.addskillTagID,
					hid: this.userName
				}
				this.$ajax.BMZskillBack(skillData)
					.then(res => {
						if(res.errcode === 1){
							this.$message({
					          message: 'Success',
					          type: 'success'
								 });
							let tempUserInfo = JSON.parse(window.localStorage.getItem("$BMZuser"));
							tempUserInfo.info.hid = this.userName;
							window.localStorage.setItem('$BMZuser',JSON.stringify(tempUserInfo));
							this.$store.dispatch('setBMZuser',window.localStorage.getItem("$BMZuser"));
						}else{
							this.$message.error(res.errmsg);
						}
					})
			},//提交收款地址
			submitReceipt(){
				let ReceiptData={
					"receipt": this.$store.state.BMZuser.info.receipt
				}
				var _this=this
				this.$ajax.BMZQaddress(ReceiptData)
					.then(res => {
						if(res.errcode === 1){
							this.$message({
					          message: 'Success',
					          type: 'success'
					       });
						}else{
							 this.$message.error(res.errmsg);
						}
				})
			}
		},
		created(){
			this.initData();
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
    .compUser_wrap .el-tabs__header{
        border-bottom: 1px solid #E2EAF1;
    }
	.my-info-ul li{
		margin-bottom: 40px;
	}
	.detail-btn{
   		background: #ffffff;
	}
	.detail-selected{
	   background: #2196f2;
	   color: #ffffff;
	}
	.compUser_wrap input{
		border-radius: 0 !important;
		border-top: 0 !important;
		border-left: 0 !important;
		border-right: 0 !important;
	}
</style>
