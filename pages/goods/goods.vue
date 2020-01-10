<template>
	<view>
		<goodsList></goodsList>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goodsList.vue'
	export default {
		data() {
			return {
				
			}
		},
		props:["goods"],
		components:{
			goodsList
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
