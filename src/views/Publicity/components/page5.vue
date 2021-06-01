<template>
	<div class="publicity-page-5">
		<page-title title="Ecosystem development" />
		<main>
			<div class="container left">
				<p class="sub-title">Strategic partners</p>
				<div class="images">
					<div class="image shield">
						<img
							src="@/views/Publicity/images/p5-shield.png"
							alt=""
							height="31px"
						/>
					</div>
					<div class="image bsc">
						<img src="@/views/Publicity/images/p5-bscec.png" alt="" />
					</div>
				</div>
				<div class="divider"></div>
				<p style="margin-bottom: 10px">First vulnerability disclosure</p>
				<p>July 5, 2018</p>
			</div>
			<div class="container">
				<div class="data-source">
					<div class="data-column">
						<div>
							<div class="source-title">15000+</div>
							<div>Registered White Hats</div>
						</div>
						<div>
							<div class="source-title">2029</div>
							<div>Related vendors</div>
						</div>
					</div>
					<div class="data-column">
						<div>
							<div class="source-title">42</div>
							<div>Current vendors</div>
						</div>

						<div>
							<div class="source-title">4214</div>
							<div>Completed vulnerability</div>
						</div>
					</div>
				</div>
				<div class="data-banner">
					<img src="../images/symbols.png" alt="" />
					<div style="position: relative">
						<h3>1802 ETH 4000000 DVP</h3>
						<p>Total incentive distributed</p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import PageTitle from "./PageTitle.vue";
export default {
	components: { PageTitle },
	name: "PublicityPage5",
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
.publicity-page-5 {
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	text-transform: uppercase;
	position: relative;
	main {
		display: flex;
		width: 100%;
		.container {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		.left {
			font-size: 24px;
		}
		.sub-title {
			margin-bottom: 30px;
		}
		.divider {
			width: 450px;
			height: 1px;
			background-color: rgba(#fff, 0.2);
			margin: 60px 0;
		}
		.images {
			display: flex;
			align-items: center;
			.image {
				width: 202px;
				height: 67px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				border: 1px solid rgba(#fff, 0.2);
				&:hover {
					border: 1px solid #196bfb;
				}
			}
			.shield {
				margin-right: 20px;
			}
		}
		.data-source {
			padding: 30px 40px;
			background: linear-gradient(to bottom right, #36a4fd, #196bfb);
			margin-bottom: 30px;
			box-sizing: border-box;
			height: 327px;
			overflow: hidden;
			display: flex;
			.data-column {
				flex: 1;
				display: flex;
				flex-direction: column;
				& > div {
					flex: 1;
					&:last-child {
						border-top: 1px solid rgba(#fff, 0.2);
						display: flex;
						justify-content: flex-end;
						flex-direction: column;
					}
				}
				&:last-child {
					border-left: 1px solid rgba(#fff, 0.2);
					& > div {
						padding-left: 40px;
					}
				}
			}
			.source-title {
				font-size: 36px;
				margin-bottom: 20px;
				font-weight: 700;
			}
		}
		.data-banner {
			background: linear-gradient(to bottom right, #36a4fd, #196bfb);
			padding: 30px 0;
			padding-left: 40px;
			display: flex;
			align-items: center;
			position: relative;
			img {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				z-index: 0;
			}
			h3 {
				font-size: 36px;
				margin-bottom: 20px;
			}
			p {
				font-size: 14px;
			}
		}
	}
}
@media (max-width: 768px) {
	.publicity-page-5 {
		max-width: 100%;
		width: 100%;
		main {
			display: block;
			.left {
				font-size: p2r(14);
				padding: 0 p2r(15);
				margin-bottom: p2r(20);
			}
			.sub-title {
				margin-bottom: p2r(10);
			}
			.divider {
				width: 100%;
				height: 1px;
				margin: p2r(20) 0;
			}
			.images {
				justify-content: space-between;
				.image {
					width: p2r(162);
					height: p2r(40);
					img {
						height: p2r(22);
					}
				}
				.shield {
					margin-right: 0;
				}
			}
			.data-source {
				padding: p2r(15);
				margin-bottom: p2r(10);
				height: p2r(186);
				.data-column {
					& > div {
						height: p2r(78);
					}
					&:last-child {
						& > div {
							padding-left: 0;
						}
					}
				}
				.source-title {
					font-size: p2r(20);
					margin-bottom: 20px;
				}
			}
			.data-banner {
				padding: p2r(15);
				display: flex;
				align-items: center;
				position: relative;
				h3 {
					font-size: p2r(20);
					margin-bottom: p2r(10);
				}
				p {
					font-size: p2r(12);
				}
			}
		}
	}
}
</style>
