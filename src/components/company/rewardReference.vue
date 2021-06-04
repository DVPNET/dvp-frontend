<template>
	<div class="child-page-sep-wrap">
	    <div class="company-bottom clearfix common-shadow">

		    <!-- 账户编辑 -->
		    <div class="company-personal-wrap">
		        <div class="company-personal-wrap">
			        <div class="reward-manage account-config">
			            <div class="clearfix" style="text-align:center">
			                <span class="reward-title" style="font-size: 24px;font-weight: 200;">悬赏计划参考模板</span>
			            </div>
			            <div class="clearfix">
			              <div class="fl reward-title" style="margin-bottom: 20px">悬赏计划</div>
			            </div>
			            <div class="reward-manage-item clearfix reward-plan-edit">
			                <span class="fl">奖励计划:</span>
			                <div class="fl">
			                    <div>
			                        <span>低危</span>
			                        <input type="text" placeholder="0.05" disabled class="form-control-inp" id="low_start" value="0.05"> - <input type="text"  disabled placeholder="0.20" class="form-control-inp inps" id="low_end" value="0.20">
			                    </div>
			                    <div>
			                        <span>中危</span>
			                        <input type="text" placeholder="0.20" class="form-control-inp" disabled id="mid_start" value="0.20"> - <input type="text"   disabled placeholder="3.00" class="form-control-inp inps" id="mid_end" value="3.00">
			                    </div>
			                    <div>
			                        <span>高危</span>
			                        <input type="text"  placeholder="3.00" class="form-control-inp" disabled id="high_start" value="3.00"> - <input type="text"  disabled placeholder="6.00" class="form-control-inp inps" id="high_end" value="6.00">
			                    </div>
			                    <div>
			                        <span>严重</span>
			                        <input type="text"  placeholder="6.00" class="form-control-inp" disabled id="gra_start" value="6.00"> - <input type="text"  disabled placeholder="22.00" class="form-control-inp inps" id="gra_end" value="22.00">
			                    </div>
			                </div>
			            </div>

			            <div class="reward-manage-item clearfix">
			                <span class="fl">测试范围:</span>
			                <div class="fl">
			                    <textarea class="company-textarea" style="height:140px" readonly placeholder="测试范围" id="test_range">
1. 目前可测试的域名包括但不限于（*.xxx.cn、 *.xx.com…），以及所有通过xxx官方途径发布的客户端程序；
2. 超出范围
   非官方发布客户端；
   非官方域名；
   注意：超出范围视为无效漏洞处理。
			                    </textarea>
			                </div>
			            </div>

			            <div class="reward-manage-item clearfix">
			                <span class="fl">漏洞评级:</span>
			                <div class="fl">
			                    <p class="vul-title">低危</p>
			                    <textarea class="company-textarea"  style="height:140px" readonly placeholder="低危" id="low_vul_rate">
• 非敏感信息泄露，包括但不限于目录遍历、异常信息泄露等；
• 短信接口滥用等问题；
• 交互要求较高的盗用身份凭证的漏洞，包括但不仅限于部分反射型 XSS（包括反射型 DOM-XSS）、普通CSRF、URL跳转漏洞；
• 其他未证明实际危害但理论存在的隐患；
• 利用起来实际危害较低的逻辑漏洞。
			                    </textarea>
			                    <p class="vul-title">中危</p>
			                    <textarea class="company-textarea"  style="height:110px" readonly placeholder="中危" id="mid_vul_rate">
• 少量的敏感信息泄露，包括但不限于SSRF内网信息泄露、用户部分信息泄露等；
• 需要交互、爆破等手段盗用其他用户身份凭证的漏洞，包括但不限于非常用页面存储型XSS、找回密码验证码可暴力枚举、找回密码逻辑缺陷等；
• 非敏感操作越权漏洞，包括但不限于越权修改用户个人资料等；
• 普通信息泄露。包括但不仅限于非核心系统源码泄露等。
			                    </textarea>
			                    <p class="vul-title">高危</p>
			                    <textarea class="company-textarea" style="height:140px" readonly placeholder="高危" id="high_vul_rate">
• 未授权访问。包括但不仅限于绕过认证直接访问管理后台可操作、核心业务非授权访问、核心业务后台弱密码等；
• 能直接盗取关键业务等用户身份信息的漏洞。包括：常见页面的存储型XSS漏洞、核心业务的SQL注入漏洞；
• 高风险的逻辑设计缺陷。包括但不仅限于查看任意用户信息、修改相关状态等；
• 高风险的信息泄漏漏洞。包括但不限于核心业务源代码压缩包泄漏、配置信息泄露；
• 严重的登录及验证安全风险。
			                    </textarea>
			                    <p class="vul-title">严重</p>
			                    <textarea class="company-textarea" style="height:165px"  readonly placeholder="严重" id="gra_vul_rate">
• 直接获取系统权限（服务器端权限、客户端权限）的漏洞。包括但不仅限于：命令注入、远程命令执行、上传获取 WebShell、SQL注入获取系统权限、缓冲区溢出；
• 可对用户或官方造成严重经济损失的漏洞；
• 涉及到核心业务的严重设计缺陷/逻辑漏洞；
• 影响用户/企业资产，包括但不限于严重的支付漏洞、数字资产私钥泄露等；
• 可导致市场操纵，例如越权操作大量用户下发买单、卖单等。
			                    </textarea>
			                </div>
			            </div>

			            <div class="reward-manage-item clearfix">
			                <span class="fl">注意事项:</span>
			                <div class="fl">
			                    <textarea class="company-textarea" style="height:280px;" readonly placeholder="注意事项" id="remarks">
• 漏洞奖励标准仅针对 xxx 的业务。目前 xxx 的域名包括但不限于(*.xxx.cn、 *.xx.com…)；
• 客户端包括所有通过官方途径发布的客户端程序；
• 提交在其他漏洞披露平台已提交的漏洞不计奖励；
• 开放平台的第三方应用漏洞不计奖励；
• 同一漏洞最早提交者得奖励；
• 同一漏洞导致的多个利用点按照级别最高的奖励执行如：同一个 JS引起的多个 XSS、漏洞、同一个发布系统引起的多个页面的 XSS漏洞、框架导致的整站 XSS/CSRF漏洞、泛域名解析产生的多个 XSS漏洞等等；
• 以漏洞测试为借口,利用漏洞进行损害用户利益、影响业务正常运作、修复前公开、盗取用户数据等行为的,将不会计奖励,同时xx保留采取进一步法律行动的权利；
• 禁止对线上系统（web）进行拒绝服务等影响系统可用性的测试。
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
		name: 'rewardReference',

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
