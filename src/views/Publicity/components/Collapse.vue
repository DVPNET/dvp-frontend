<template>
	<div class="collapse-component">
		<header v-show="$slots.title || title">
			<slot v-if="$slots.title" name="title" />
			<div v-else>{{ title }}</div>
			<span :class="['toggle', { 'is-active': isCollapse }]">
				<i class="el-icon-arrow-up" @click="toggle"></i>
			</span>
		</header>
		<main :class="{ collapse: isCollapse }">
			<slot />
		</main>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
		collapse: {
			type: [String, Number, Boolean],
			default: "",
		},
		value: {
			type: [String, Number, Boolean],
			default: true,
		},
	},
	computed: {
		isCollapse() {
			return this.collapse !== this.value;
		},
	},
	methods: {
		toggle() {
			this.$emit("toggle", this.isCollapse ? this.value : "");
		},
	},
	mounted() {
		console.log(this.$slot, "this.$slot", 1111111111);
	},
};
</script>
<style lang="scss" scoped>
.collapse-component {
	header {
		font-size: 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;
		.toggle {
			cursor: pointer;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			background-color: rgba(#fff, 0.2);
			display: flex;
			align-items: center;
			justify-content: center;
			// box-shadow: 0 2px 4px 0px rgba(#000, 0.2);
			transition: all 0.2s linear;
			&.is-active {
				transform: rotate(180deg);
			}
		}
	}
	main {
		font-size: 14px;
		line-height: 19px;
		transition: height 0.3s linear;
		height: auto;
	}
	.collapse {
		height: 40px;
		overflow: hidden;
	}
}
</style>