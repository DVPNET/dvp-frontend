<template>
	<div class="publicity">
		<wrap-header :class="['header', { transparent: !isScroll }]" />
		<page-1 />
		<page-2 class="slide-item" />
		<page-3 class="slide-item" />
		<page-4 class="slide-item" />
		<page-5 class="slide-item" />
		<page-6 class="slide-item" />
	</div>
</template>

<script>
import WrapHeader from "../../components/common/wrapHeader.vue";
import NextBtn from "./components/NextBtn.vue";
import Page1 from "./components/page1.vue";
import Page2 from "./components/page2.vue";
import Page3 from "./components/page3.vue";
import Page4 from "./components/page4.vue";
import Page5 from "./components/page5.vue";
import Page6 from "./components/page6.vue";

export default {
	name: "Publicity",
	components: {
		WrapHeader,
		Page1,
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		NextBtn,
	},
	data() {
		return {
			isScroll: false,
		};
	},
	methods: {
		onScroll(e) {
			if (this.timer !== null) {
				return;
			}
			this.timer = setTimeout(() => {
				const scrollTop =
					document.body.scrollTop || document.documentElement.scrollTop;
				this.isScroll = scrollTop > window.innerHeight;
				this.timer = null;
			}, 300);
		},
	},
	mounted() {
		this.timer = null;
		window.addEventListener("scroll", this.onScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.onScroll);
	},
};
</script>
<style lang="scss" scoped>
.publicity {
	background-color: #0f1117;
	color: #fff;
	padding-bottom: 120px;
	.header {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #0f1117;
		&.transparent {
			background-color: transparent;
		}
	}

	.slide-item {
		padding-top: 110px;
		/* height: 100%; */
		position: relative;
	}

	.swiper-pagination {
		position: fixed;
	}
}
@import "~@/app.scss";
@media (max-width: 768px) {
	.publicity {
		width: 100vw;
		overflow: hidden;
		padding-bottom: p2r(64);
		.slide-item {
			padding-top: p2r(10);
		}
	}
}
</style>