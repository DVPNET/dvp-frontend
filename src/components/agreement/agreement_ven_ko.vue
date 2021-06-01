<template>
	<div>
		<el-container class="about-container">
		<el-main>
				  <div class="about-title">Vendor Agreement</div>
				 <p>Welcome to the DVP community! Before you become our registered user, please be sure to carefully read and fully understand the terms and conditions of this agreement, especially the rights and obligations of both parties, the terms of exemption or limitation of liability, the jurisdiction and the applicable provisions of the law. Your completion of the account registration constitutes your fully acceptance of this agreement. </p>
				
				<p class="ul-title"><b>一、Service</b></p>
				<ul class="first-ul">
				<li>1. You have the right to possess your own username and password in the DVP community and have access to the community at any time using your username and password.</li>
				<li>2. You can post bounty programs in the DVP community.</li>
				<li>3. You can claim the vulnerability and threat information submitted to you by White Hat in the DVP community.</li>
				<li>4. You can access public research data published in the DVP community.</li>
				</ul>
				<p class="ul-title"><b>二、Account</b></p>
				<ul class="first-ul">
				<li>1. Please keep your account and password safe . If it is lost, please retrieve the password using the registered email address immediately.</li>
				<li>
					2. You are solely responsible for your failure of keeping your account credentials secure.If the account and password are illegally used by others because of your inappropriate handling of these information, the DVP community is not responsible for this.Inappropriate handling of account credentials include but are not limited to:
					<ul class="second-ul">
						<li>2.1 Disclose the account credentials and all other registration information to third parties.</li>
						<li>2.2 Multiple people share the same account.</li>
						<li>2.3 Installation of illegal or potential harmful programs.</li>
						<li>2.4 Allow others use your device before logging out.</li>
					</ul>
				</li>
				<li>3. You agree not to share your account credentials or give others access to your account.Any information edited, posted, or any activities through a registered account is considered to be the user's behavior.</li>				
				</ul>
				<p class="ul-title"><b>三、Deposit, Bug Bounty, DVP community mining fees</b></p>
				<ul class="first-ul">
					<li>1. The DVP community only supports Ether and DVP Token as bounty program rewards.</li>
					<li>2. <b>After your sign-up, a minimum amount of deposit is required, which is no less than the highest reward of individual vulnerability. This will be used to reward the White Hats.</b></li>
					<li>3. You can withdraw at any time.</li>
					<li>4. If the vulnerability submitted by White Hats meets your requirements, you must pay the appropriate reward to White Hats according to the vulnerability level and severity.The minimum vulnerability reward is 0.05 Ether.</li>
					<li>5. You agree to pay the DVP Community 10% of the reward per vulnerability as community mining fees.</li>
				</ul>
				<p class="ul-title"><b>四、Bug Bounty Program</b></p>
				<ul class="first-ul">
					<li>1. <b>Although DVP can assist you make a reward plan, you are fully responsible for the reward program and its content.</b></li>
					<li>2. You promise that the bounty program and its content posted in the DVP Community will not infringe the intellectual property rights of third parties or violate applicable laws or regulations in any way.</li>
				</ul>
				<p class="ul-title"><b>五、Scope of responsibility and limitation of liability</b></p>
				<ul class="first-ul">
					<li>The DVP community is not responsible for any damage or loss caused by your communication or interaction with the White Hats or other vendors in the DVP community.</li>
				</ul>
				
				<p class="ul-title"><b>六、Notices</b></p>
				<ul class="first-ul">
					<li>All notices will be sent to you by one or more of these methods: email, website announcement, website reminder, and website messages.<b>Other important information such as vulnerability notifications will be sent by email.</b></li>
				</ul>
				
				<p class="ul-title"><b>七、Other</b></p>
				<ul class="first-ul">
				<li>1. The construction, execution and interpretation of this Agreement and resolution of disputes are subject to the laws of the People's Republic of China.</li>
				<li>2. Regarding the content of this Agreement or its execution,if any dispute occurs between the two parties, both parties should try to resolve it through friendly negotiation.</li>
				<li>3. if any provision of the Agreements be held invalid or unenforceable for any reason or to any extent, such invalidity or enforceability shall not in any manner affect or render invalid or unenforceable the remaining provisions of the Agreements.</li>
				<li>4. The DVP community reserves the right of the interpretation and modification of this Agreement.</li>
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
	      	lang: 'en'
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