<template>
	<div class="child-page-sep-wrap">
	    <div class="company-bottom clearfix common-shadow">
	
		    <!-- 账户编辑 -->
		    <div class="company-personal-wrap">
		        <div class="company-personal-wrap">
			        <div class="reward-manage account-config">  
			            <div class="clearfix" style="text-align:center">
			                <span class="reward-title" style="font-size: 24px;font-weight: 200;">DVP Reward Plan Template</span>
			            </div>        
			            <div class="clearfix">
			              <div class="fl reward-title" style="margin-bottom: 20px">Bounty Plan</div>
			            </div>  
			            <div class="reward-manage-item clearfix reward-plan-edit reward-manage-item-en">           
			                <span class="fl">Reward Plan:</span>
			                <div class="fl">
			                    <div>
			                        <span>Low</span>
			                        <input type="text" placeholder="0.05" disabled class="form-control-inp" id="low_start" value="0.05"> - <input type="text"  disabled placeholder="0.20" class="form-control-inp inps" id="low_end" value="0.20">
			                    </div>
			                    <div>
			                        <span>Mid</span>
			                        <input type="text" placeholder="0.20" class="form-control-inp" disabled id="mid_start" value="0.20"> - <input type="text"   disabled placeholder="3.00" class="form-control-inp inps" id="mid_end" value="3.00">
			                    </div>
			                    <div>
			                        <span>High</span>
			                        <input type="text"  placeholder="3.00" class="form-control-inp" disabled id="high_start" value="3.00"> - <input type="text"  disabled placeholder="6.00" class="form-control-inp inps" id="high_end" value="6.00">
			                    </div>
			                    <div>
			                        <span>Serious</span>
			                        <input type="text"  placeholder="6.00" class="form-control-inp" disabled id="gra_start" value="6.00"> - <input type="text"  disabled placeholder="22.00" class="form-control-inp inps" id="gra_end" value="22.00">
			                    </div>
			                </div>
			            </div>
			
			            <div class="reward-manage-item clearfix">
			                <span class="fl">Range:</span>
			                <div class="fl">
			                    <textarea class="company-textarea" style="height:137px" readonly placeholder="Range" id="test_range">
1. Currently domains that can be tested include but not limited to (*.xxx.cn, *.xx.com…), and all client apps officially published by xxx; 
2. Out of test range:
   Non-official domains;
   client apps not officially published;
   Note: Out of range loophole are treated as invalid.
			                    </textarea>
			                </div>
			            </div>
			
			            <div class="reward-manage-item clearfix">
			                <span class="fl">Vulnerability Rating:</span>
			                <div class="fl">
			                    <p class="vul-title">Low</p>
			                    <textarea class="company-textarea"  style="height:168px" readonly placeholder="Low" id="low_vul_rate">
• Non-sensitive information exposure, include but not limited to directory traversal, abnormal information leaks, etc;                   
• Short message interface abuse, etc;
• Highly interactive ID stealing loopholes, include but not limited to some reflection XSS (include reflection DOM-XSS), regular CSRF, URL redirection loopholes;
• Loopholes that exist in theory but not proved in real scenarios yet;
• Logic loopholes that has minor effects.
			                    </textarea>
			                    <p class="vul-title">Mid</p>
			                    <textarea class="company-textarea"  style="height:170px" readonly placeholder="Mid" id="mid_vul_rate">
• Small amount sensitive information exposure, include but not limited to SSRF intranet information exposure, partial user information exposure, etc;                   
• User ID stealing loopholes that need interaction or explosion, etc, include but not limited to less frequently used web page storage XSS, brute-force finding password verification code or password logic fault, etc;
• Non-Sensitive operation privilege violation loopholes, include but not limited to illegal changing user personal information, etc;
• Regular information leaks, include but not limited to non-essential system source code leak, etc.
			                    </textarea>
			                    <p class="vul-title">High</p>
			                    <textarea class="company-textarea" style="height:197px" readonly placeholder="High" id="high_vul_rate">
• Not approved access, include but not limited to, without access verification, directly access to management backend operations such as essential business operations or weak password, etc;                    
• Loopholes that can steal critical business user ID information, include: popular webpage storage XSS loopholes, critical operation SQL insertion loopholes;
• High risk logic design faults, include but not limited to those that allow arbitrary checking/changing user information, etc;  
• High risk information exposure loophole, include but not limited to critical operation source code or config files exposures;
• High risk user login or ID verification loopholes.
			                    </textarea>
			                    <p class="vul-title">Serious</p>
			                    <textarea class="company-textarea" style="height:168px"  readonly placeholder="Serious" id="gra_vul_rate">
• Loopholes that get direct system (servers and client apps) access privilege, include but not limited to, command injections, remote command execution, WebShell upload, buffer overflow, etc;
• Loopholes that can cause severe financial loss to users and projects;
• Severe design fault/logic loopholes related to critical business operations;
• Loopholes that affect user/company assets, include but not limited to, payment loopholes, digital asset private key exposure, etc;
• Loopholes that can cause market manipulation, such as starting large amount of illegal user buy/sell orders. 
			                    </textarea>
			                </div>
			            </div> 
			            
			            <div class="reward-manage-item clearfix">
			                <span class="fl">Precautions:</span>
			                <div class="fl">
			                    <textarea class="company-textarea" style="height:283px;" readonly placeholder="Precautions" id="remarks">
• Loophole reward only covers xxx related operations, currently xxxx domain names include but not limited to (*.xxx.cn, *.xx.com…);
• Client apps officially published;
• Loopholes that has been published by other loophole platforms would not be rewarded;
• Third party application loopholes on open platforms would not be rewarded;
• Only the first submitter of a loophole is rewarded;
• A loophole with multiple effects is rewarded according to the most severe one, such as one JavaScript code could have multiple loopholes like XSS, XSS/CSRF, etc;
• Exploring loopholes to affect users and business operations would not be rewarded, and we reserve the right of further legal actions against such behavior;
• Doing tests that affect web system operations such as DDoS are strictly prohibited. 
			
			                    </textarea>
			                </div>
			            </div>  
			            
			            
			          </div>
	            </div>
		    </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'rewardReference_en',
		
		data(){
			return{
				
			}
		},
		mounted(){
		   this.lang=localStorage.getItem('locale')
		   if(this.lang=='zh'){
		   		this.$router.push({ path: '/rewardReference' })
		   }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.$router.push({ path: '/rewardReference_en' })
		   }else if(this.lang=='ko'){
		   		this.$router.push({ path: '/rewardReference_ko' })
		   }
	    }
		
	  }
</script>

<style scoped>
	.reward-manage-item-en>div span {
		display: inline-block;
		width: 44px;
	}
</style>

<style>
	.reward-manage-item>span{
		font-size: 14px;
    	color: #4c5b6a;
	}
	.company-textarea{
		resize: none !important;
		border: 1px solid #dbe2e5;
		outline:none;
		line-height: inherit;
		overflow: hidden;
		color: inherit;
		resize: none !important;
	}
	.form-control-inp{
		background: #f5f5f5;
	}
	.inps{
		background: #ffffff !important;
	}
</style>