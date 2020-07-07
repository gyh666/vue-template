<template>
	<view>
		<u-tabs-swiper ref="tabs" name="cate_name" :list="list" :is-scroll="false"></u-tabs-swiper>
	</view>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{
					cate_name: '待收货'
				},
				{
					cate_name: '待付款'
				},
				{
					cate_name: '待评价'
				}
			]
		};
	}
};
</script>
