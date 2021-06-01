<template>
	<div>
		<el-container class="about-container">
		<el-main>
				  <div class="about-title">DVP厂商入驻协议</div>
				 <p>欢迎您注册成为DVP社区的用户！在您成为的我们的注册用户前，请务必先仔细阅读、充分理解本协议各条款内容，特别是各方的权利义务、免除或者限制责任的条款、管辖与法律适用条款。一旦您完成账号注册，则意味着完全接受并同意本协议项下条款和内容。</p>
				
				<p class="ul-title"><b>一、服务</b></p>
				<ul class="first-ul">
				<li>1. 您有权拥有自已在DVP社区的用户名及密码，并有权使用自已的用户名及密码随时登录DVP社区；</li>
				<li>2. 您可以在DVP社区上发布漏洞赏金计划及内容；</li>
				<li>3. 您可以在DVP社区上认领白帽子提交给您的漏洞和威胁情报；</li>
				<li>4. 您可以查看DVP社区上公布的公开研究数据。</li>
				</ul>
				<p class="ul-title"><b>二、账户</b></p>
				<ul class="first-ul">
				<li>1. 请妥善保管您的账户和密码。若如丢失，请及时根据注册邮箱找回密码；</li>
				<li>
					2. 因您未能保管好该账户和密码而导致的法律责任由您全部承担。若因为您自身原因，而导致账号、密码遭他人非法使用时，DVP社区不负责处理。您自身原因包括但不限于：
					<ul class="second-ul">
						<li>2.1 任意向第三者透露账号和密码及所有注册资料；</li>
						<li>2.2 多人共享同一个账号；</li>
						<li>2.3 安装非法或来路不明的程序；</li>
						<li>2.4 将已经登陆帐号的设备提供给他人使用等。</li>
					</ul>
				</li>
				<li>3. 不得擅自转让自己的账户和密码给他人使用。任何通过注册账户编辑、发布的信息或做出的任何行为都被视为是该账户所属用户自己的行为。</li>				
				</ul>
				<p class="ul-title"><b>三、担保金、漏洞奖励和DVP社区矿工费</b></p>
				<ul class="first-ul">
					<li>1. DVP社区仅支持Ether和DVP Token作为漏洞奖励。</li>
					<li>2. <b>您注册DVP社区后，须先存储不低于单个漏洞的最高奖励作为担保金，用于后续向白帽子支付漏洞奖励。</b></li>
					<li>3. 担保金支持随时提现。</li>
					<li>4. 若白帽子提交的漏洞符合您的悬赏要求，您必须根据漏洞级别和严重性向白帽子支付相应的奖励。最低漏洞奖励为0.05 Ether。</li>
					<li>5. 您同意向DVP社区支付每个漏洞奖励10％的费用，作为DVP社区矿工费。</li>
				</ul>
				<p class="ul-title"><b>四、漏洞赏金计划及内容</b></p>
				<ul class="first-ul">
					<li>1. <b>虽然DVP可以协助您制定悬赏计划，但您对悬赏计划及内容负全部责任。</b></li>
					<li>2. 您声明并保证，通过DVP社区发布的悬赏计划及内容，绝不盗用和侵犯第三方的知识产权、违反任何适用法律法规。</li>
				</ul>
				<p class="ul-title"><b>五、责任范围及责任限制</b></p>
				<ul class="first-ul">
					<li>对于客户与白帽子或其他厂商通过DVP社区或其他方式进行的沟通或互动而导致的任何损害或伤害，DVP社区概不负责。</li>
				</ul>
				
				<p class="ul-title"><b>六、通告</b></p>
				<ul class="first-ul">
					<li>所有致您的通告均可通过邮件、网页公告、网页提示、站内信等方式中的一种或多种方式进行传送。<b>漏洞通告等其他重要事项将以邮件的形式进行传送。</b></li>
				</ul>
				
				<p class="ul-title"><b>七、其他</b></p>
				<ul class="first-ul">
				<li>1. 本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律；</li>
				<li>2. 如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；</li>
				<li>3. 如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力；</li>
				<li>4. 本协议解释权及修订权归DVP社区所有。</li>
				</ul>
				<br/><br/>
		</el-main>
	</el-container>
	
	
	</div>
	
</template>

<script>	
	export default {
		name:'agreement',		
		data() {
	      return {
	      	lang: 'zh'
	      }
	   	},
	   	mounted(){
		   this.lang=localStorage.getItem('locale')
		   if(this.lang=='zh'){
		   		this.$router.push({ path: '/agreement_ven' })
		   }else if(this.lang=='en' || this.lang==null || this.lang==''){
		   		this.$router.push({ path: '/agreement_ven_en' })
		   }else if(this.lang=='ko'){
		   		this.$router.push({ path: '/agreement_ven_ko' })
		   }
	    }
	}
</script>

<style>
	.vul_container{
		width: 100%;
		text-align: center;
		display: block;
		padding: 0 10%;
		box-sizing: border-box;
	}
	.vul_container h1{
		font-size: 24px;
	    color: #31412e;
	    line-height: 36px;
	    text-align: center;
	    padding-bottom: 20px;
	}
</style>