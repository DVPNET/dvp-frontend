<template>
	<div>
		<div class="hole_rl">
			<p v-if="dialog_data.company_state == 0"> 待认领</p>
        	<p v-if="dialog_data.company_state == 1"> 已认领</p>
        	<p v-if="dialog_data.company_state == 2"> 不认领</p>
        	<p v-if="dialog_data.company_state == 3">DVP社区认领</p>
        	<span v-if="dialog_data.company_state == 2">原因：{{dialog_data.company_reason}}</span>
        	<span v-if="dialog_data.company_state == 3">该笔漏洞奖励已被DVP社区支付</span>
		</div>
		<div class="hole-detailed">
		    <p>漏洞信息</p>
		    <div class="hole-item clearfix">
		      <span class="fl">漏洞编号 :</span>
		      <div class="fl">{{dialog_data.vulSign}}</div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">漏洞标题 :</span>
		      <div class="fl" id="pocTitle">{{dialog_data.title}}</div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">目标类型 :</span>
		      <div class="fl">{{dialog_data.target_type}}</div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">攻击类型 :</span>
		      <div class="fl">{{dialog_data.attack_type}}</div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">漏洞等级 :</span>
		      <div class="fl">
		      	<p v-if="dialog_data.level == 3"><span class="com-dot-lv ser-lv"></span> 严重</p>
	        	<p v-if="dialog_data.level == 2"><span class="com-dot-lv high-lv"></span>高危 </p>
	        	<p v-if="dialog_data.level == 1"><span class="com-dot-lv mid-lv"></span> 中危</p>
	        	<p v-if="dialog_data.level == 0"><span class="com-dot-lv low-lv"></span> 低危</p>
		      </div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">漏洞奖励 :</span>
		      <div class="fl">
		      	<p v-if="dialog_data.state == 0"> -</p>
	        	<p v-if="dialog_data.state == 2"> -</p>
	        	<p v-if="dialog_data.state == 3"> -</p>
	        	<p v-if="dialog_data.state == 1 && dialog_data.price != 0 && dialog_data.dvp == 0"> {{dialog_data.price}} Ether</p>
	        	<p v-if="dialog_data.state == 1 && dialog_data.price == 0 && dialog_data.dvp == 0">-</p>
	        	<p v-if="dialog_data.state == 1 && dialog_data.price == 0 && dialog_data.dvp != 0"> {{dialog_data.dvp}} DVP</p>
	        	<p v-if="dialog_data.state == 1 && dialog_data.price != 0 && dialog_data.dvp != 0"> {{dialog_data.price}} Ether、 {{dialog_data.dvp}} DVP</p>
		      </div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">目标厂商 :</span>
		      <div class="fl">{{dialog_data.company}}</div>
		    </div>
		    <div class="hole-item clearfix">
		      <span class="fl">白帽子ID :</span>
		      <div class="fl"></div>
		    </div>
		    <div class="hole-item clearfix simditor" style="border: none;">
		      <span class="fl">漏洞描述 :</span>
		      <div class="fl simditor-body" style="" v-html="dialog_data.description"></div>
		    </div>
		</div>
		<div class="hole-detailed" style="padding-bottom: 50px; margin-top: 30px;"  v-if="dialog_data.company_state == 1 ||dialog_data.company_state == 3">
			<p>
				修复状态：
				<span v-if="dialog_data.is_fix == 0">未修复</span>
				<span v-if="dialog_data.is_fix == 1">已修复</span>
			</p>
			<p>修复时间：
			<span>{{dialog_data.fix_time}}</span></p>		
		</div>
		
		<!--修复-->
		<div  v-if="dialog_data.company_state == 1 || dialog_data.company_state == 3">
			<div v-if="dialog_data.is_fix == 0">
				<el-button type="primary" class="no-claim-btn fr" @click="repair(dialog_data.id)" v-show='!repairshow'>修复</el-button>
				<div v-show="repairshow"  class="red fr">操作成功</div>
			</div>		
		</div>
		<!--认领不认领-->
		 <div class="company-operate-btns ar" v-if="dialog_data.company_state == 0">
		 	<div v-if="dialog_data.is_fix == 0">
			 	<el-button type="primary" class="no-claim-btn" @click="noClaimBtn">不认领</el-button>
			 	<el-button type="primary" class="claim-btn" @click="yesClaimBtn">认领</el-button>
		 	</div>
		 </div>
		 <!--不认领原因-->
	    <el-dialog
	      width="30%"
	      title="不认领原因"
	      :visible.sync="noclaimbtn"
	      append-to-body>
	      		<el-input
				  placeholder="请输入内不认领原因"
				  v-model="claim_input"
				  clearable>
				</el-input>
				<p class="claim_notes">*若不认领漏洞。待漏洞修复后，社区会选择性公开。</p>
				<div v-show="message"  class="red">{{msgErr}}</div>
				<div class="ar"><el-button type="primary" class="claimtrue-btn"  @click="noClaim(dialog_data.id)">确定</el-button></div>
	    </el-dialog>
	    <!--支持漏洞奖励-->
	    <el-dialog
	      width="30%"
	      title="支持漏洞奖励"
	      :visible.sync="claimbtn"
	      append-to-body>
	      		<p class="apply-address">漏洞奖励: <span>{{dialog_data.price}}</span> Ether</p>
	      		<p class="apply-address ser-charge">
	      			<img src="/static/image/question.png" alt="" class="ketubbah-btn" />
	      			手续费: <span>{{dialog_data.comPrice}}</span> Ether 
	      			<span class="fr sub-color">漏洞奖励的10%</span>
	      		</p>
	      		<div class="ar">
	      			<p class="claim_total">共计 <span>{{dialog_data.totalPrice}}</span> Ether</p>
	      			<div v-show="message"  class="red">{{msgErr}}</div>
	      			<el-button type="primary" class="common-btn common-btn-normal claim-submit"  @click="yesClaim(dialog_data.id)">确定</el-button>
	      		</div>
	    </el-dialog>
	</div>
</template>

<script>
	export default {
		props: {
		      dialog_data: '',
		      required: true,
		 },
		name:"vulDetailrl",
		data(){
			return{
				noclaimbtn: false,
				claimbtn:false,
				message: false,
				claim_input: '',
				repairshow: false,
				msgErr:''
			}
		},
		methods:{
			repair(id){
				console.log(id)
				var _this = this;
				let MyVulData={
		    	  	"id": id
		    	}
				this.$ajax.CSvulSureFix(MyVulData)
				.then(res => {
					if(res.errcode == 1){
						_this.repairshow = true
					}
				
				})
			},
			noClaimBtn(){
				this.noclaimbtn= true
			},
			yesClaimBtn(){
				this.claimbtn= true
			},
			/*不认领*/
			noClaim(id){			
				console.log(id)
				var _this = this;
				let MyVulData={
		    	  	"id": id,
		    	  	'reason': this.claim_input,
		    	  	'type': 0
		    	}
				this.$ajax.CSvulClaim(MyVulData)
				.then(res => {
					if(res.errcode == 1){
						_this.noclaimbtn= false
					}else{
						_this.msgErr =res.errmsg
			         	_this.message=true;
					}
				
				})
			},
			/*认领*/
			yesClaim(id){			
				console.log(id)
				var _this = this;
				let MyVulData={
		    	  	"id": id,
		    	  	'type':1
		    	}
				this.$ajax.CSvulClaim(MyVulData)
				.then(res => {
					if(res.errcode == 1){
						_this.claimbtn= false
					}else{
						_this.msgErr =res.errmsg
			         	_this.message=true;
					}
				
				})
			}
		}
	}
</script>

<style>
	.hole_rl{
		font-size: 18px;
		margin-bottom: 20px;
	}
	.claim_notes{
		line-height: 24px;
		font-size: 14px;
	    text-align: left;
	    margin: 10px 0;
	}
	.claim_total{
		display: inline-block;
		margin-right: 5px;
	}
</style>