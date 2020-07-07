<template>
	<view class="home">
		<!-- 轮播 -->
		<u-swiper class="swiper u-skeleton-fillet" mode="round" indicator-pos="bottomRight" name="advImg" :list="swiperList"></u-swiper>
		<!-- 公告 -->
		<u-notice-bar class="bulletin u-skeleton-fillet" mode="vertical" duration="5000" :is-circular="false" :list="bulletins"></u-notice-bar>
		<!-- 宫格 -->
		<u-grid class="grid" col="4" :border="false">
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
			swiperList: [
				{
					id: '1262299542211330050',
					sort: 1,
					advTitle: 'banner1',
					advImg: 'https://ycb-images.oss-cn-beijing.aliyuncs.com/course/a1b3c40096fb46a0922a2786486006fe.png',
					advUrl: '',
					advTarget: '_blank',
					advLocation: 1,
					platShow: 2,
					courseCategory: null,
					courseId: null
				},
				{
					id: '1272369217630035970',
					sort: 1,
					advTitle: '黄寨村',
					advImg: 'https://ycb-images.oss-cn-beijing.aliyuncs.com/course/2de85412a06b42f89369ab754f6521d8.jpg',
					advUrl: '',
					advTarget: '_self',
					advLocation: 1,
					platShow: 2,
					courseCategory: null,
					courseId: null
				},
				{
					id: '1273448066761510913',
					sort: 1,
					advTitle: '补贴测算',
					advImg: 'https://ycb-images.oss-cn-beijing.aliyuncs.com/course/a631a4e7a1ec4f878e456cd470008b08.jpg',
					advUrl: '',
					advTarget: '_blank',
					advLocation: 1,
					platShow: 2,
					courseCategory: null,
					courseId: null
				}
			],
			bulletins: ['寒雨连江夜入吴', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶'],
			loading: true // 是否显示骨架屏组件
		};
	},
	onLoad() {
		// 通过延时模拟向后端请求数据，调隐藏骨架屏
		setTimeout(() => {
			this.loading = false;
		}, 1000);
	}
};
</script>

<style lang="scss" scoped>
.home {
	padding: 0 32rpx;
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
