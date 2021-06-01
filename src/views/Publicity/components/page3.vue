<template>
	<div class="publicity-page-3">
		<page-title title="Business sections" />
		<div class="card-list" v-once>
			<div class="card" v-for="(item, index) in data" :key="index">
				<div :class="['card-content', item.contentClass]">
					<div class="desc">{{ item.content }}</div>
				</div>
				<div
					:class="['card-title', item.contentClass]"
					:style="{ order: item.order }"
				>
					<page-sub-title :title="item.title" :prefix="`0${index + 1}`" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageSubTitle from "./PageSubTitle.vue";
import PageTitle from "./PageTitle.vue";
export default {
	components: { PageTitle, PageSubTitle },
	name: "PublicityPage3",
	data() {
		return {
			data: [
				{
					title: "Long term incentive",
					contentClass: "incentive",
					order: 1,
					content:
						"Aiming at important nodes of crypto assets such as wallets and exchanges, DVP cooperates with vendors to establish long-term prize pools and enhance the security level of the industry.",
				},
				{
					title: "Special bounty",
					contentClass: "bounty",
					order: -1,
					content:
						"Working with a number of security audit institutions, DVP launches a special vulnerability bounty plan for DEFI, which aims to improve the security of smart contract and DAPP, as well as to protect the rights and interests of users.",
				},
				{
					title: "Aggregation platform",
					order: 1,
					contentClass: "platform",
					content:
						"By aggregating asset circulation, graphical display, block broadcasting, address tracking and etc., DVP manages to create an information aggregation platform of the blockchain industry.",
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";
.publicity-page-3 {
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
}
.card-list {
	display: flex;
	width: 100%;
	.card {
		flex: 1;
		display: flex;
		flex-direction: column;
		position: relative;
		transition: all 0.3s;
		&:hover {
			box-shadow: 0 2px 40px rgba(#000, 0.5);
			z-index: 9;
		}
		.card-title {
			box-sizing: border-box;
			height: 220px;
			padding-top: 50px;
			padding-left: 30px;
			background-size: cover;
			&.incentive {
				background-image: url("../images/t1.png");
			}
			&.bounty {
				background-image: url("../images/t2.png");
			}
			&.platform {
				background-image: url("../images/t3.png");
			}
		}
		.card-content {
			height: 340px;
			position: relative;
			background-size: cover;
			.desc {
				width: 313px;
				font-size: 14px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				opacity: 0;
				transition: opacity 0.3s linear;
			}
			&:hover .desc {
				opacity: 1;
			}
			&.incentive {
				background-image: url("../images/t1-1.png");
			}
			&.bounty {
				background-image: url("../images/t2-2.png");
			}
			&.platform {
				background-image: url("../images/t3-3.png");
			}
		}
	}
}

@media (max-width: 768px) {
	.publicity-page-3 {
		max-width: 100%;
	}
	.card-list {
		flex-direction: column;
		.card {
			flex: 1;
			flex-direction: row;
			.card-content {
				height: auto;
				width: 100%;
				.desc {
					padding: 0 p2r(14);
					box-sizing: border-box;
					opacity: 1;
					width: 100%;
					color: rgba(#fff, 0.6);
				}
			}
		}
	}
}
</style>
