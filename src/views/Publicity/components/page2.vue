<template>
	<div class="publicity-page-2">
		<page-title title="Advantages of DVP" />
		<el-row>
			<el-col :xs="0">
				<main ref="main">
					<div class="main-content">
						<div class="row">
							<div ref="column00" class="column community"></div>
							<div ref="column01" class="column services">
								<div class="cell right" @mouseenter="enter($event, '0,1')">
									<div :class="cellTitleActive('0,1')">
										<img
											:class="{ opacity1: isActive('0,1') }"
											src="../images/p2-icon2.png"
											height="60px"
											alt=""
										/>
										<page-sub-title
											:class="subTitleClasses('0,1')"
											prefix="02"
											title="Comprehensive security services"
										>
											<transition name="slide-fade">
												<div class="cell-desc" v-show="isActive('0,1')">
													From vulnerability search, information aggregation to
													situation awareness, DVP can provide one-stop security
													services for the pan-Internet industry.
												</div>
											</transition>
										</page-sub-title>
									</div>
								</div>
							</div>
						</div>

						<div class="cell" @mouseenter="enter($event, '0,0')">
							<div :class="cellTitleActive('0,0')">
								<img
									:class="{ opacity1: isActive('0,0') }"
									src="../images/p2-icon1.png"
									height="60px"
									alt=""
								/>
								<page-sub-title
									:class="subTitleClasses('0,0')"
									prefix="01"
									title="Strong technical community"
								>
									<transition name="slide-fade">
										<div class="cell-desc" v-show="isActive('0,0')">
											In depth cooperation with the world’s top security
											communities like PeckShield and BCSES, attracting over
											15000 White Hats to the platform.
										</div>
									</transition>
								</page-sub-title>
							</div>
						</div>
					</div>
					<div class="main-content">
						<div class="row">
							<div ref="column10" class="column model"></div>
							<div ref="column11" class="column schemes">
								<div class="cell right" @mouseenter="enter($event, '1,1')">
									<div :class="cellTitleActive('1,1')">
										<img
											:class="{ opacity1: isActive('1,1') }"
											src="../images/p2-icon4.png"
											height="60px"
											alt=""
										/>
										<page-sub-title
											:class="subTitleClasses('1,1')"
											prefix="04"
											title="Flexible incentive schemes"
										>
											<transition name="slide-fade">
												<div class="cell-desc" v-show="isActive('1,1')">
													Apart from daily vulnerability mining, DVP pays
													attention to industry hotspots in real time and
													carries out special bounty activities from time to
													time.
												</div>
											</transition>
										</page-sub-title>
									</div>
								</div>
							</div>
						</div>

						<div class="cell" @mouseenter="enter($event, '1,0')">
							<div :class="cellTitleActive('1,0')">
								<img
									:class="{ opacity1: isActive('1,0') }"
									src="../images/p2-icon3.png"
									height="60px"
									alt=""
								/>
								<page-sub-title
									:class="subTitleClasses('1,0')"
									prefix="03"
									title="Mature business model"
								>
									<transition name="slide-fade">
										<div class="cell-desc" v-show="isActive('1,0')">
											Benefiting from the technical abilities of the community,
											thousands of partner vendors have provided abundant bounty
											incentives.
										</div>
									</transition>
								</page-sub-title>
							</div>
						</div>
					</div>
				</main>
			</el-col>
			<el-col :xs="24" :sm="0">
				<div class="main-content expand">
					<div class="cell community">
						<div class="cell-overlayer"></div>
						<div class="cell-title">
							<img
								:class="{ opacity1: isActive('0,0') }"
								src="../images/p2-icon1.png"
								height="60px"
								alt=""
							/>
							<page-sub-title
								class="cell-sub-title"
								prefix="01"
								title="Strong technical community"
							>
								<div class="cell-desc">
									In depth cooperation with the world’s top security communities
									like PeckShield and BCSES, attracting over 15000 White Hats to
									the platform.
								</div>
							</page-sub-title>
						</div>
					</div>
					<div class="cell services">
						<div class="cell-title">
							<img
								class="opacity1"
								src="../images/p2-icon2.png"
								height="60px"
								alt=""
							/>
							<page-sub-title
								class="cell-sub-title"
								prefix="02"
								title="Comprehensive security services"
							>
								<div class="cell-desc">
									From vulnerability search, information aggregation to
									situation awareness, DVP can provide one-stop security
									services for the pan-Internet industry.
								</div>
							</page-sub-title>
						</div>
					</div>
					<div class="cell model">
						<div class="cell-overlayer"></div>
						<div class="cell-title">
							<img
								class="opacity1"
								src="../images/p2-icon3.png"
								height="60px"
								alt=""
							/>
							<page-sub-title
								class="cell-sub-title"
								prefix="03"
								title="Mature business model"
							>
								<div class="cell-desc">
									Benefiting from the technical abilities of the community,
									thousands of partner vendors have provided abundant bounty
									incentives.
								</div>
							</page-sub-title>
						</div>
					</div>
					<div class="cell schemes">
						<div class="cell-title">
							<img src="../images/p2-icon4.png" height="60px" alt="" />
							<page-sub-title
								class="cell-sub-title"
								prefix="04"
								title="Flexible incentive schemes"
							>
								<div class="cell-desc">
									Apart from daily vulnerability mining, DVP pays attention to
									industry hotspots in real time and carries out special bounty
									activities from time to time.
								</div>
							</page-sub-title>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import PageSubTitle from "./PageSubTitle.vue";
import PageTitle from "./PageTitle.vue";
export default {
	components: { PageTitle, PageSubTitle },
	name: "PublicityPage2",
	data() {
		return {
			activeIdx: "0,0",
		};
	},
	computed: {
		columnsEl() {
			return [
				[this.$refs.column00, this.$refs.column01],
				[this.$refs.column10, this.$refs.column11],
			];
		},
		rowsEl() {
			return this.$refs.main.querySelectorAll(".row");
		},
		mainEl() {
			return this.$refs.main.querySelectorAll(".main-content");
		},
	},
	watch: {
		activeIdx: {
			handler(val) {
				this.$nextTick(() => {
					const [row, idx] = val.split(",").map(Number);
					this.mainEl.forEach((el, i) => {
						if (row === i) {
							el.classList.add("expand");
						} else {
							el.classList.remove("expand");
						}
					});

					this.rowsEl.forEach((el, i) => {
						if (!idx) {
							el.classList.add("row-active");
						} else {
							el.classList.remove("row-active");
						}
					});

					[
						[row, idx],
						[Number(!row), Number(!idx)],
					].forEach(([i, j]) => {
						this.columnsEl[i][j].classList.add("active");
						this.columnsEl[i][+!j].classList.remove("active");
					});
				});
			},
			immediate: true,
		},
	},
	methods: {
		isActive(val) {
			return this.activeIdx === val;
		},
		cellTitleActive(val) {
			const active = this.isActive(val);
			return [
				"cell-title",
				{
					active,
				},
			];
		},
		subTitleClasses(val) {
			const active = this.isActive(val);
			return [
				"cell-sub-title",
				{
					"sub-title20": !active,
				},
			];
		},
		enter(e, idxs) {
			this.activeIdx = idxs;
		},
	},
};
</script>
<style lang="scss" scoped>
@import "~@/app.scss";

.sub-title20 {
	font-size: 20px !important;
}

.main-content {
	height: calc((100vh - 380px) / 3);
	transition: height 0.15s linear;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	position: relative;
	&.expand {
		height: calc((100vh - 380px) * 2 / 3);

		.community {
			background-image: url("../images/p2-banner1-1.png");
		}
		.services {
			background-image: url("../images/p2-banner2-2.png");
		}
		.model {
			background-image: url("../images/p2-banner3-3.png");
		}
		.schemes {
			background-image: url("../images/p2-banner4-4.png");
		}
	}
	.cell {
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		position: relative;
		padding: 60px 0;
	}
	.cell-title {
		display: flex;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		transition: transform 0.15s;
		&.active {
			transform: translateY(-100%);
		}

		img {
			margin: 20px 30px 0 0;
			opacity: 0.5;
		}

		.opacity1 {
			opacity: 1;
		}
	}
	.cell.right {
		width: auto;
		padding-left: 50px;
	}
	.cell-desc {
		position: absolute;
		width: 400px;
	}
}

.row {
	transition: width 0.15s linear;
	display: flex;
	overflow: hidden;
	position: absolute;
	width: 100vw;
	left: 50%;
	transform: translateX(-50%);
	height: 100%;
	& .column:nth-child(1) {
		width: 45%;
		background-position: top right;
	}
	& .column:nth-child(2) {
		width: 55%;
		background-position: top left;
	}

	&.row-active {
		& .column:nth-child(1) {
			width: 55%;
		}
		& .column:nth-child(2) {
			width: 45%;
		}
	}
	.community {
		background-image: url("../images/p2-banner1.png");
		background-position: top right;
	}
	.model {
		background-image: url("../images/p2-banner3.png");
	}
	.services {
		background-image: url("../images/p2-banner2.png");
	}
	.schemes {
		background-image: url("../images/p2-banner4.png");
	}
	.column {
		height: 100%;
		box-sizing: border-box;
		background-repeat: no-repeat;
		background-size: auto 100%;
		position: relative;
		transition: all 0.15s;
		overflow: hidden;
		&.active::before {
			opacity: 1;
		}
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			transition: opacity 0.1s linear;
			background-color: rgba(#196bfb, 0.5);
			height: 100%;
			width: 100%;
		}
	}
}
@media (max-width: 768px) {
	.main-content {
		max-width: 100%;
		height: auto !important;
		flex-direction: column;
		.cell {
			width: 100%;
			padding: p2r(20) p2r(15);
			position: relative;
			.cell-overlayer {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(#196bfb, 0.5);
			}
			.cell-title {
				position: inherit;
				transform: translateY(0);
				& > img {
					height: p2r(24);
					margin-top: p2r(10);
					margin-right: p2r(20);
				}
			}
			.cell-desc {
				position: inherit;
				width: auto;
			}
		}
	}
}
</style>
<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translate(50px, 30px);
	opacity: 0;
}
</style>
