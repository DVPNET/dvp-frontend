<template>
	<div class="publicity-page-1" v-once>
		<el-row>
			<el-col :xs="0">
				<el-carousel class="my-carousel" height="100vh">
					<el-carousel-item v-for="item in data" :key="item.className">
						<div :class="['carousel-item banner', item.className]">
							<img src="@/views/Publicity/images/logo.png" height="141px" />
							<h3 :class="item.className" v-html="item.slogin"></h3>
							<el-row>
								<el-col :xs="0">
									<p class="desc">{{ item.desc }}</p>
								</el-col>
								<el-col :xs="24" :sm="0">
									<p class="desc" v-show="item.desc">
										<span class="desc-inner">{{ item.desc }}</span>
									</p>
								</el-col>
							</el-row>
						</div>
					</el-carousel-item>
				</el-carousel>
			</el-col>
			<el-col :xs="24" :sm="0">
				<el-carousel class="my-carousel" height="11rem">
					<el-carousel-item v-for="item in data" :key="item.className">
						<div :class="['carousel-item banner', item.className]">
							<img src="@/views/Publicity/images/logo.png" height="141px" />
							<h3 :class="item.className" v-html="item.slogin"></h3>
							<el-row>
								<el-col :xs="0">
									<p class="desc">{{ item.desc }}</p>
								</el-col>
								<el-col :xs="24" :sm="0">
									<p class="desc" v-show="item.desc">
										<span class="desc-inner">{{ item.desc }}</span>
									</p>
								</el-col>
							</el-row>
						</div>
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Collapse from "./Collapse.vue";
export default {
	name: "PublicityPage1",
	components: { Collapse },
	data() {
		return {
			isMobile: false,
			isCollapsed: "",
			data: [
				{
					className: "no1",
					slogin: "DECENTRALIZED VULNERABILITY PLATFORM",
					desc:
						"DVP (Decentralized Vulnerability Platform) is an international community of information security professionals (White Hats). By using the blockchain technology and token-incentive schemes, it endeavors to establish an anonymous security crowd-testing community, follow the core concept of vulnerability as mining, and create a decentralized information security platform, so as to safeguard the digital information industry.",
				},
				{
					className: "no2",
					slogin:
						"Fully support DEFI <br/> Special bounty for <br/> BINANCE SMART CHAIN <br/> is coming",
					desc: "",
				},
			],
		};
	},
	methods: {
		toggle() {
			if (!this.isCollapsed) {
				this.isCollapsed = "1";
			} else {
				this.isCollapsed = "";
			}
		},
	},
	mounted() {
		let mql = window.matchMedia("(max-width: 768px)");
		this.isMobile = mql.matches;
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
.carousel-item {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	&.no1 {
		background-image: url("../images/p1-banner.png");
	}
	&.no2 {
		background-image: url("../images/p1-banner2.png");
	}
	img {
		margin-bottom: 71px;
	}
	h3 {
		width: 787px;
		font-size: 44px;
		text-transform: uppercase;
		line-height: 64px;
		text-align: center;
		position: relative;
		margin-bottom: 112px;
		&::after {
			content: "";
			position: absolute;
			width: 120px;
			height: 10px;
			bottom: -40px;
			left: 50%;
			transform: translateX(-50%);
		}
		&.no1::after {
			background-color: #3f9eff;
		}
		&.no2::after {
			background-color: #fbde69;
		}
	}
	.desc {
		text-indent: 20px;
		width: 905px;
		color: rgba(#fff, 0.6);
		font-size: 14px;
		line-height: 24px;
		text-align: center;
	}
}

@media (max-width: 768px) {
	.carousel-item {
		padding-top: p2r(64);
		background-size: 100% auto;
		justify-content: unset;
		height: auto;
		.slide-item {
			padding-top: p2r(10);
		}
		img {
			width: p2r(79);
			margin-bottom: p2r(15);
			height: p2r(28);
		}
		h3 {
			width: p2r(190);
			font-size: p2r(16);
			line-height: 1;
			margin-bottom: p2r(39);
			&::after {
				width: p2r(23);
				height: p2r(2);
				bottom: p2r(-6);
			}
		}
		.desc {
			background: linear-gradient(to bottom right, #36a4fd, #196bfb);
			box-sizing: border-box;
			width: 100%;
			color: #fff;
			font-size: p2r(14);
			padding: p2r(15);
			line-height: p2r(18);
			.desc-inner {
				/* display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden; */
			}
		}
	}
}
</style>
