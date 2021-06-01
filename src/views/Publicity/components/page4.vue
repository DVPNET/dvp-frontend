<template>
	<div class="publicity-page-4">
		<page-title title="Roadmaps" />
		<el-row>
			<el-col :xs="0">
				<main class="main">
					<div class="left">
						<page-sub-title
							prefix="01"
							title="Decentralized vulnerability searching community (accomplished)"
						>
							<collapse :collapse="leftActive" value="01">
								<p class="font-color">
									DVP has now set up a business procedure from vendors
									publishing rewards, White Hats discovering vulnerability and
									community examination, to White Hats and community gaining the
									rewards in the end, so as to attract the world’s top White
									Hats to join the ecosystem, forming a decentralized community
									specialized in vulnerability search. In the next stage, DVP
									community will continue to carry out global development around
									the concept of “vulnerability search as mining”, attracting
									more vendors and White Hats from different countries and
									regions to join the DVP ecosystem.
								</p>
							</collapse>
							<el-button
								v-show="leftActive !== '01'"
								type="text"
								@click="toggleLeft('01')"
								>MORE 》</el-button
							>
						</page-sub-title>
						<div class="divider"></div>
						<page-sub-title
							prefix="03"
							title="Security services platform for the pan-Internet industry"
						>
							<collapse :collapse="leftActive" value="03">
								<p class="font-color">
									Based on the current DVP technical framework, DVP would issue
									new community rules to expand the scope of vulnerability
									collection to all the third-party applications and open source
									projects on the Internet. In the meantime, companies with
									security needs will be allowed to post rewards on the DVP
									platform once certified. They can claim their own
									vulnerabilities and receive the details and fixing suggestions
									about the vulnerability, which would improve the efficiency of
									vulnerability response and save related security costs. In
									this way, DVP can also expand its technical community as well
									as the influence of the platform. The win-win situation will
									ultimately enhance the security of open source products in the
									information industry.
								</p>
							</collapse>
							<el-button
								v-show="leftActive !== '03'"
								type="text"
								@click="toggleLeft('03')"
								>MORE 》</el-button
							>
						</page-sub-title>
					</div>
					<div class="right">
						<page-sub-title
							prefix="02"
							title="Multifunctional security platform"
							style="margin-bottom: 30px"
						>
							DVP will develop from a single-function platform to a
							multifunctional platform by using the rich experience of the White
							Hats community in the information security industry.
						</page-sub-title>
						<div class="collapse">
							<collapse
								:collapse="rightActive"
								value="1"
								@toggle="toggle"
								style="padding-bottom: 30px"
							>
								<template slot="title">
									<div>
										<span class="tip">2.1</span> Information aggregation
									</div>
								</template>
								<div>
									The DVP platform will be used for developing and integrating
									multi-chain security information, including blockchain
									browsers, asset circulation, graphical display, block
									broadcasting, address tracking and etc., so as to create an
									information aggregation platform of the blockchain industry.
									Currently, DVP community and Tokenview has reached an
									agreement to combine Tokenview’s technical experience in
									multi-chain browser with DVP’s technical advantage in White
									Hat community, in order to create a comprehensive information
									security platform.
								</div>
							</collapse>
							<collapse :collapse="rightActive" value="2" @toggle="toggle">
								<template slot="title">
									<div>
										<span class="tip">2.2</span> Security infrastructure
									</div>
								</template>
								<div>
									DVP would develop multi-platform (H5, IOS, Android, Dapp)
									scalable tools, embedding security information tools into
									wallets and platform, in order to improve industry security
									infrastructure. Analysis would be conducted on each layer of
									blockchain business, contract and network and finalized into a
									one-stop event library according to the security situation,
									which is supportive to the security rating of projects and
									technologies. The characteristics of historical security
									events will also be analyzed to set up a warning mechanism of
									industry security situation and form the most authoritative
									third-party security evaluation agency.
								</div>
							</collapse>
						</div>
					</div>
				</main>
			</el-col>
			<el-col :xs="24" :sm="0">
				<div class="mobile-body">
					<page-sub-title
						prefix="01"
						title="Decentralized vulnerability searching community (accomplished)"
					>
						<collapse :collapse="leftActive" value="01">
							<p class="font-color">
								DVP has now set up a business procedure from vendors publishing
								rewards, White Hats discovering vulnerability and community
								examination, to White Hats and community gaining the rewards in
								the end, so as to attract the world’s top White Hats to join the
								ecosystem, forming a decentralized community specialized in
								vulnerability search. In the next stage, DVP community will
								continue to carry out global development around the concept of
								“vulnerability search as mining”, attracting more vendors and
								White Hats from different countries and regions to join the DVP
								ecosystem.
							</p>
						</collapse>
						<el-button
							v-show="leftActive !== '01'"
							type="text"
							@click="toggleLeft('01')"
							>MORE 》</el-button
						>
					</page-sub-title>
					<div class="divider"></div>
					<page-sub-title
						prefix="02"
						title="Multifunctional security platform"
						style="margin-bottom: 30px"
					>
						DVP will develop from a single-function platform to a
						multifunctional platform by using the rich experience of the White
						Hats community in the information security industry.
					</page-sub-title>
					<div class="collapse">
						<collapse
							:collapse="rightActive"
							value="1"
							@toggle="toggle"
							style="padding-bottom: 30px"
						>
							<template slot="title">
								<div><span class="tip">2.1</span> Information aggregation</div>
							</template>
							<div>
								The DVP platform will be used for developing and integrating
								multi-chain security information, including blockchain browsers,
								asset circulation, graphical display, block broadcasting,
								address tracking and etc., so as to create an information
								aggregation platform of the blockchain industry. Currently, DVP
								community and Tokenview has reached an agreement to combine
								Tokenview’s technical experience in multi-chain browser with
								DVP’s technical advantage in White Hat community, in order to
								create a comprehensive information security platform.
							</div>
						</collapse>
						<collapse :collapse="rightActive" value="2" @toggle="toggle">
							<template slot="title">
								<div><span class="tip">2.2</span> Security infrastructure</div>
							</template>
							<div>
								DVP would develop multi-platform (H5, IOS, Android, Dapp)
								scalable tools, embedding security information tools into
								wallets and platform, in order to improve industry security
								infrastructure. Analysis would be conducted on each layer of
								blockchain business, contract and network and finalized into a
								one-stop event library according to the security situation,
								which is supportive to the security rating of projects and
								technologies. The characteristics of historical security events
								will also be analyzed to set up a warning mechanism of industry
								security situation and form the most authoritative third-party
								security evaluation agency.
							</div>
						</collapse>
					</div>
					<div class="divider"></div>
					<page-sub-title
						prefix="03"
						title="Security services platform for the pan-Internet industry"
					>
						<collapse :collapse="leftActive" value="03">
							<p class="font-color">
								Based on the current DVP technical framework, DVP would issue
								new community rules to expand the scope of vulnerability
								collection to all the third-party applications and open source
								projects on the Internet. In the meantime, companies with
								security needs will be allowed to post rewards on the DVP
								platform once certified. They can claim their own
								vulnerabilities and receive the details and fixing suggestions
								about the vulnerability, which would improve the efficiency of
								vulnerability response and save related security costs. In this
								way, DVP can also expand its technical community as well as the
								influence of the platform. The win-win situation will ultimately
								enhance the security of open source products in the information
								industry.
							</p>
						</collapse>
						<el-button
							v-show="leftActive !== '03'"
							type="text"
							@click="toggleLeft('03')"
							>MORE 》</el-button
						>
					</page-sub-title>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Collapse from "./Collapse.vue";
import PageSubTitle from "./PageSubTitle.vue";
import PageTitle from "./PageTitle.vue";
export default {
	components: { PageTitle, PageSubTitle, Collapse },
	name: "PublicityPage4",
	data() {
		return {
			leftActive: "",
			rightActive: "",
		};
	},
	methods: {
		toggle(val) {
			this.rightActive = val;
		},
		toggleLeft(val) {
			this.leftActive = val === this.leftActive ? "" : val;
		},
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
$col: rgba(#fff, 0.2);

.font-color {
	color: $col;
}
.publicity-page-4 {
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
	.main {
		display: flex;
		width: 100%;

		& > div {
			width: 600px;
			box-sizing: border-box;
		}
		.left > div {
			padding-right: 50px;
		}
		.right {
			height: 645px;
			background-image: url("../images/p4-banner.png");
			background-size: cover;
			padding: 40px;
		}

		.divider {
			height: 1px;
			background-color: $col;
			margin: 40px 0;
		}

		.tip {
			font-size: 24px;
			line-height: 33px;
		}
	}
}
@media (max-width: 768px) {
	.publicity-page-4 {
		max-width: 100%;
		.mobile-body {
			padding: 0 p2r(15);
		}
	}
}
</style>