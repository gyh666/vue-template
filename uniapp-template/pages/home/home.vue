<template>
	<view class="home u-skeleton">
		<!-- 轮播 -->
		<u-swiper class="swiper u-skeleton-fillet" mode="round" indicator-pos="bottomRight" name="advImg" :list="swiperList" />
		<!-- 公告 -->
		<u-notice-bar class="bulletin u-skeleton-fillet" mode="vertical" duration="5000" :is-circular="false" :list="bulletins" />
		<!-- 宫格 -->
		<u-grid class="grid" col="4" :border="true">
			<u-grid-item>
				<view class="u-skeleton-fillet">
					<u-icon name="photo" :size="46"></u-icon>
					<view class="grid-text">图片</view>
				</view>
			</u-grid-item>
			<u-grid-item>
				<view class="u-skeleton-fillet">
					<u-icon name="lock" :size="46"></u-icon>
					<view class="grid-text">锁头</view>
				</view>
			</u-grid-item>
			<u-grid-item>
				<view class="u-skeleton-fillet">
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</view>
			</u-grid-item>
			<u-grid-item>
				<view class="u-skeleton-fillet">
					<u-icon name="hourglass" :size="46"></u-icon>
					<view class="grid-text">沙漏</view>
				</view>
			</u-grid-item>
		</u-grid>
		<!--引用组件-->
		<u-skeleton :loading="loading" animation />
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperList: [],
			routerList: [],
			bulletins: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶'],
			loading: true // 是否显示骨架屏组件
		};
	},
	onLoad() {
		// 向后端请求数据完成之后调隐藏骨架屏
		this.initData();
	},
	methods: {
		async initData() {
			const { code, msg, data } = await this.$api.getAdvList({
				platShow: 2,
				advLocation: 1
			});
			this.loading = false;
			if (code != 200) return this.$toast(msg);
			this.swiperList = data.advList;
		}	
	}
};
</script>

<style lang="scss" scoped>
.home {
	padding: 20px 32rpx 0;
	box-sizing: border-box;
	.swiper {
		width: 100%;
		margin-bottom: 20rpx;
		background-color: #fff;
	}
	.bulletin {
		margin-bottom: 20rpx;
	}
	.grid {
		.u-skeleton-fillet {
			width: 80%;
			margin: 0 auto;
			text-align: center;
		}
		.grid-text {
			font-size: 28rpx;
			margin-top: 8rpx;
		}		
	}
}
</style>
