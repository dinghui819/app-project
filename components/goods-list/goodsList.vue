<template>
	<view class="goods-lists">
		<view class="goods-item" v-for="item in goods" :key="item.id" @click=sendGoods>
			<image :src="item.img" @click="previewImg(item.img)"></image>
			<view class="price">
				<text>{{item.price}}</text>
				<text>{{item.beforeprice}}</text>
			</view>
			<view class="goods-name">{{item.name}}</view>
		</view>
		<!-- <view class="goods-item">
			<image src="../../static/img/goods5.jpg"></image>
			<view class="price">
				<text>￥1299</text>
				<text>￥2499</text>
			</view>
			<view class="goods-name">婴儿奶粉</view>
		</view>
		<view class="goods-item">
			<image src="../../static/img/goods5.jpg"></image>
			<view class="price">
				<text>￥1299</text>
				<text>￥2499</text>
			</view>
			<view class="goods-name">婴儿奶粉</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		methods:{
			sendGoods () {
				console.log("跳转")
			},
			previewImg (current) {
				// 拿到goods里面的所有图片img
				const urls = this.goods.map(item=>{
					return item.img
				})
				console.log(urls)
				uni.previewImage({
					// current代表你点击的当前图片
					current,
					urls
				})
			}
		},
		// 接受父组件传过来的数据goods
		props:['goods']
	}
</script>

<style>
	.goods-lists{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 15rpx;
	}
	.goods-lists .goods-item{
		width: 49%;
		background: #fff;
		margin: 10rpx 0;
		padding: 15rpx;
	}
	.goods-item image{
		width: 80%;
		height: 150px;
		/* 下面这两行代码，设置图片居中 */
		display: block;
		margin: auto;
	}
	.goods-item .price{
		color: #ff2d52;
		font-size: 36rpx;
	}
	.goods-item .price text:nth-child(2) {
		color: #ccc;
		font-size: 28rpx;
		margin-left: 7rpx;
		text-decoration: line-through;
	}
	.goods-item .goods-name{
		font-size: 28rpx;
		line-height: 50rpx;
		padding-bottom: 15rpx;
		padding-top: 10rpx;
	}
</style>
