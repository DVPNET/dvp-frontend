<template>
		<div>
			<div class="about-container" style="min-height:700px" v-if="aboutwrap == 'zh'">
				<div class="about-title">关于我们</div>
				<p class="sub-title">关于DVP社区</p>
				<p>DVP全称是Decentralized Vulnerability Platform（去中心化漏洞平台），是全球首家以去中心化的漏洞平台。DVP社区作为一个去中心化的自治组织，全方位多维度贯彻执行漏洞的负责任披露，同时作为白帽子与厂商的核心纽带，为区块链厂商用户搭建高效、透明的安全信息平台。提升区块链整体的安全意识，共同构建更好的区块链生态。同时DVP社区将为区块链行业生态安全提供公益性的平台服务，白帽子可以进行威胁信息收集，帮助厂商发现安全威胁，同时提交信息的白帽子将获得相应奖励，努力实现区块链厂商与白帽子双赢的良性循环。</p>
				<p class="sub-title">DVP社区的核心价值观</p>
				<p>由于漏洞的敏感性和可能造成的危害性，DVP社区必须遵循严谨，客观，和中立的原则，全方位多维度贯彻执行漏洞的负责任披露，务必保护白帽子，厂商，和普通用户的正当权益。对平台的任何参与方，包括白帽子，注册厂商，和DVP社区的执行团队，需要明确理解关于漏洞负责任披露的出发点和最终目标，在DVP社区的底层系统设计和日常运维上切实落实，并且有效加强相应的漏洞预警和应急响应机制。</p>
				<p>同时，我们预期漏洞可能会不可避免的引入利益相关方的竞争和冲突，要求DVP社区必须维持中立和客观的角色。也因为此，在DVP社区搭建和运行过程中所需要引入的资金和团队，必须时刻强调和维持平台中立和客观的必要性，并且采取切实措施避免引入利益相关方。另外，DVP社区本身的运营必须透明化，这也完全符合区块链技术的精神。</p>
				<!-- <p class="sub-title">目前DVP社区主要由两大安全团队负责运营搭建</p>
				<p>1. BCSEC：核心创始团队来自于白帽汇安全研究院，运营着超过2万名白帽子；有行业最大的漏洞平台创办和运营经验；BCSEC聚焦区块链安全生态，提供区块链行业领先的安全解决方案。关注和研究最前沿的漏洞以及相关安全情报资讯，目前已对数字钱包、交易所、矿池、智能合约等多个应用场景有深厚研究积累，可为区块链社区安全运营提供预警，持续为区块链安全生态提供技术支撑。</p>
				<p>2. PeckShield： PeckShield (派盾) 是面向全球的顶尖区块链安全团队，团队核心成员过去在移动安全方面有深厚的积累，提交过大量高质量的漏洞报告，并多次获得谷歌，高通，三星，华为等厂商致谢及奖金。结合对区块链的系统性理解，以及安全研究方面的丰富经验, PeckShield团队于近日接连发现并命名了BEC、SMT、EDU等项目的安全漏洞，这些漏洞一旦被利用，往往会造成直接的、巨大的经济损失。PeckShield团队承袭着以往白帽黑客的背景，协助厂商鉴别风险、解决问题，并通过各种漏洞的曝光，提升区块链整体的安全意识，共同构建更好的区块链生态。</p>				 -->
			</div>	
			
			<div class="about-container" style="min-height:700px"  v-if="aboutwrap == 'en'">
				<div class="about-title">About Us</div>
				<p class="sub-title">About the DVP Community</p>
				<p>The full name of DVP is the Decentralized Vulnerability Platform and it is the first decentralized vulnerability platform in the world. The DVP community is a decentralized autonomous organization, which is responsible for the vulnerability identification from multi-dimensions and comprehensive. At the same time, it acts as the core bridge between the white hats and the blockchain projects to provide an efficient and transparent blockchain security information platform, which will help improve the overall security awareness and build a better blockchain ecology. The DVP community will provide some public welfare services, in which the white hats can help the blockchain projects identify the security vulnerabilities and deliver them to DVP. As rewards, the white hat will by paid the corresponding bounty. By this model, it will lead to the achievement of win-win virtuous circle for both the blockchain projects and the white hats.</p>
				
				<p class="sub-title">Core value</p>
				<p>
				Because of the sensitivity and potential risk of vulnerabilities, the DVP community must follow the principles of rigorous, objective and neutral. The DVP community is obligated to disclose vulnerabilities in all dimensions and protect the legitimate rights for the white hats, the blockchain projects and users. Any participant in the platform, including the white hats, the registered blockchain projects and the DVP community operation team, should understand clearly the starting point and the final goal of the vulnerability identification, which should be implemented in both lower system design and daily maintenance, and should strengthen the corresponding vulnerability warning and emergency response mechanism.
				</p>
				<p>
				Because the vulnerability will inevitably lead to stakeholders’ competition and conflict, the DVP Community should only act as a neutral and objective role. Any fund or team introduced during construction and operation should be emphasized the necessity of neutrality and objectivity, and the stakeholder should not be introduced. Furthermore, the operation of the DVP community should be transparent to all, which is align with the spirit of blockchain technology.
				</p>
				<!-- <p class="sub-title">The DVP community is owned by two security teams</p>
				<p>
				1. BCSEC’s core founding team is from the Baimaohui Security Research Institute and working with more than 20,000 white hats. BCSEC owns the industry's largest vulnerability platform and is focusing on the cutting-edge vulnerabilities and related security information of blockchain to provide the leading security solutions. At present, there has been profound accumulation of research on digital wallets, exchanges, mining pools and smart contracts, which can be used to provide early warning for the operation of blockchain communities and the continuous technical support for blockchain security ecology.
				</p>
				<p>
				2.PeckShield is a blockchain security company which aims to elevate the security, privacy, and usability of entire blockchain ecosystem by offering top-notch, industry-leading services and products. The company was founded by forward-looking, passionate entrepreneurs and veteran researchers, with a strong desire to improve state-of-the-art security of large-scale systems. With a recent focus on blockchains, PeckShield publishes trending reports and provides services and products to identify hidden vulnerabilities (e.g., in smart contracts and consensus protocols), expose zero-day exploits, and defend against emerging threats.
				</p> -->
			</div>

			<div class="about-container" style="min-height:700px"  v-if="aboutwrap == 'ko'">
				<div class="about-title">회사 소개</div>
				<p class="sub-title">DVP 커뮤니티 소개</p>
				<p>DVP의 전체 이름은 Decentralized Vulnerability Platform이며 세계에서 처음으로 탈중앙화 결함 플랫폼입니다. DVP 커뮤니티는 분산된 자율 조직으로서 다차원 및 포괄적인 결함 식별을 담당합니다. 이와 동시에, 화이트 해커와 블록 체인 프로젝트 사이의 핵심 다리 역할을 하여 효율적이고 투명한 블록 체인 보안 정보 플랫폼을 제공함으로써 전반적인 보안 인식을 향상시키고 더 나은 블록 체인 생태계를 구축하는 데 도움을 제공합니다. DVP 커뮤니티는 공공 복지 서비스를 제공하기도 합니다. 화이트 해커는 블록 체인 프로젝트가 보안 결함을 파악하고 DVP로 전달하는 데 도움이 됩니다. 보상으로 화이트 해커는 상응하는 현상금을 받게 됩니다. 이 모델을 통해 블록 체인 프로젝트와 화이트 해커 모두에서 윈 - 윈 (win-win) 선순환의 성취로 이어질 것입니다.</p>
				
				<p class="sub-title">핵심 가치</p>
				<p>
				DVP 커뮤니티는 취약성의 민감성과 잠재적 위험 때문에 엄격하고 객관적이며 중립적인 원칙을 따라야 합니다. DVP 커뮤니티는 모든 차원에서 결함을 공개하고 화이트 해커, 블록 체인 프로젝트 및 사용자에 대한 합법적인 권리를 보호해야 합니다. 화이트 해커, 등록된 블록 체인 프로젝트 및 DVP 커뮤니티 운영 팀을 포함하여 플랫폼에 참여하는 모든 참가자는 결함 식별의 출발점과 최종 목표를 분명히 이해해야 하며, 이는 하위 시스템 설계 및 일일 유지 보수 모두에서 구현되어야 하며, 해당 결함 경고 및 비상 대응 메커니즘을 강화해야 합니다. 
				</p>
				<p>
				결함은 필연적으로 이해 관계자의 경쟁과 갈등을 가져올 것이기 때문에 DVP 커뮤니티는 중립적이고 객관적인 역할을 수행해야 합니다. 건설 및 운영 과정에서 도입된 자금이나 팀은 중립성과 객관성의 필요성을 강조해야 하며 이해 관계자는 도입 되어서는 안됩니다. 또한 DVP 커뮤니티의 운영은 모든 사람에게 투명해야 하며 블록 체인 기술의 정신에 부합해야 합니다.
				</p>
				<!-- <p class="sub-title">DVP 커뮤니티는 두 개의 보안 팀이 소유하고 있음</p>
				<p>
				1.BCSEC의 핵심 창립 팀은 Baimaohui Security Research Institute에서 왔으며 20,000 개가 넘는 화이트 해커를 다루고 있습니다. BCSEC은 업계 최대의 결함 플랫폼을 소유하고 있으며 선도적인 보안 솔루션을 제공하기 위해 블록 체인의 최첨단 취약점 및 관련 보안 정보에 중점을 두고 있습니다. 현재 디지털 지갑, 교환, 마이닝 풀 및 스마트 계약에 대한 심층적인 연구가 이루어져 블록 체인 커뮤니티 운영에 대한 조기 경고 및 블록 체인 보안 생태계에 대한 지속적인 기술 지원을 제공할 수 있습니다.
				</p>
				<p>
				2.PeckShield는 최고 수준의 업계, 최고 수준의 서비스 및 제품을 제공하여 전체 블록 체인 생태계의 보안, 개인 정보 보호 및 유용성을 높이는 것을 목표로 하는 블록 체인 보안 회사입니다. 이 회사는 미래 지향적이며 열정적인 기업가 및 베테랑 연구자들에 의해 설립되었으며 대규모 시스템의 최첨단 보안을 향상시키려는 강한 열망을 가지고 있습니다. 최근 PeckShield는 블록 체인에 초점을 맞춰 추세 보고서를 게시하고 숨겨진 결함 (예: 현명한 계약 및 합의 프로토콜)을 식별하고 제로 데이 익스플로잇을 노출하며 새로운 위협에 대해 방어할 수 있는 서비스 및 제품을 제공합니다. 
				</p> -->
			</div>		
		</div>
</template>

<script>
	export default {
		name: 'about',		
		data(){
			return{
				lang:'zh',
				aboutwrap: true
			}
		},
		mounted (){
			this.initData();
		},
		methods:{
			initData(){
				this.lang=localStorage.getItem('locale')
				 if(this.lang=='zh'){
					this.aboutwrap='zh'
				}else if(this.lang=='en' || this.lang==null || this.lang==''){
					this.aboutwrap='en'
				}else if(this.lang=='ko'){
					this.aboutwrap='ko'
				}
			}
		}
		
	  }
</script>

<style>
</style>