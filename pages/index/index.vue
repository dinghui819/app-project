<template>
	<view>
		<!-- 轮播图 -->
		<swiper class="home-swiper" indicator-dots="true" indicator-color="rgba(255,34,45)" indicator-active-color="rgba(255,255,255)" autoplay circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航结构 -->
		<view class="nav">
			<view class="nav-item">
				<view class="icon iconfont icon-remen"></view>
				<text>热门销售</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-mendianxianhuo_nor"></view>
				<text>店内现货</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-food"></view>
				<text>休闲食品</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-jiushuiyinliao"></view>
				<text>酒水饮料</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-meironghufu"></view>
				<text>美妆护肤</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-chujingxinxianshuiguohanlengdongshuiguoguoyuanzhucedengji"></view>
				<text>新鲜水果</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-riyongbaihuo"></view>
				<text>日用百货</text>
			</view>
			<view class="nav-item">
				<view class="icon iconfont icon-quanbufenlei"></view>
				<text>全部分类</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<view class="goods-lists">
				<view class="goods-item" v-for="item in goods" :key="item.id">
					<image :src="item.img"></image>
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 用于存轮播图的数据
				swipers:[{
					"id":1,
					"img":"../../static/img/banner.jpg"
				}, {
					"id":2,
					"img":"../../static/img/banner4.jpg"
				}, {
					"id":3,
					"img":"../../static/img/banner5.jpg"
				}],
				goods:[{
					"id":1,
					"img":"../../static/img/goods1.jpg",
					"beforeprice":"￥4299",
					"price":"￥1299",
					"name":"口红"
				}, {
					"id":2,
					"img":"../../static/img/goods2.jpg",
					"beforeprice":"￥6299",
					"price":"￥3299",
					"name":"奶粉"
				}, {
					"id":3,
					"img":"../../static/img/goods3.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				}, {
					"id":4,
					"img":"../../static/img/goods4.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				}, {
					"id":5,
					"img":"../../static/img/goods5.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				}, {
					"id":6,
					"img":"../../static/img/goods6.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				}, {
					"id":7,
					"img":"../../static/img/goods7.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				}, {
					"id":8,
					"img":"../../static/img/goods8.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				}, {
					"id":9,
					"img":"../../static/img/goods9.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				},  {
					"id":10,
					"img":"../../static/img/goods10.jpg",
					"beforeprice":"￥7299",
					"price":"￥2299",
					"name":"口红"
				},]
			}
		},
		// 页面一加载就发送请求
		onLoad() {
			// this.getSwipers()
		},
		methods: {
			// 获取轮播图的数据，使用封装的uni.request
			// async getSwipers () {
			// 	const res =await this.$myRequest({
			// 		url:'/getBanner'
			// 	})
			// 	this.swipers = res.data.list
			// }
			
			// 获取轮播图的数据
			// getSwipers () {
			// 	// 发送请求
			// 	uni.request({
			// 		url:"http://localhost:3001/getBanner",
			// 		success:(res) =>{
			// 			console.log(res)//返回的是一个对象
			// 			if (res.statusCode !== 200) {
			// 				// 请求失败就返回提示
			// 				return uni.showToast({
			// 					// 提示的内容
			// 					title:"获取数据失败"
			// 				})
			// 			}
			// 			// 请求成功就把数据存入swipers数组中,可以在开发者工具中——AppData中查看是否有数据
			// 			this.swipers = res.data.list
			// 		}
			// 	})
			// }
			// 获取轮播图的数据
			// async getSwipers () {
			// 	const res =await uni.request({
			// 		url:"http://localhost:3001/getBanner",
			// 	})
			// 	console.log(res)//打印出来是一个数组
			// }
		}
	}
</script>

<style>
	.home-swiper image{
		width: 750rpx;
		height: 350rpx;
	}
	/*  */
	.nav{
		display: flex;
		flex-wrap: wrap;
		/* justify-content: center; */
	}
	.nav-item{
		width: 25%;
		text-align: center;
	}
	.nav-item .icon{
		color: #fff;
		width: 120rpx;
		height: 120rpx;
		line-height: 120rpx;
		border-radius: 50%;
		font-size: 60rpx;
		/* 设置左右居中 */
		margin: 10rpx auto;
		border: none;
	}
	.nav-item text{
		/* display: block; */
		font-size: 28rpx;
	}
	.nav-item:nth-child(1) .icon{	
		background: linear-gradient(to top left, #fba789, #ee655f);
	}
	.nav-item:nth-child(2) .icon{
		background: linear-gradient(to top left, #62e4ec, #6f88fa );
	}
	.nav-item:nth-child(3) .icon{
		background: linear-gradient(to top left, #32e27f, #18a88b );
	}
	.nav-item:nth-child(4) .icon{
		background: linear-gradient(to top left, #fbba37, #f6674f );
	}
	.nav-item:nth-child(5) .icon{
		background: linear-gradient(to top left, #db7ae2, #9e42a5 );
	}
	.nav-item:nth-child(6) .icon{
		background: linear-gradient(to top left, #cbb694, #8f7762 );
	}
	.nav-item:nth-child(7) .icon{
		background: linear-gradient(to top left, #e88396, #bd2342 );
	}
	.nav-item:nth-child(8) .icon{
		background: linear-gradient(to top left, #6ecaf4, #13a8eb );
	}
	
	/* 推荐商品 */
	.hot-goods{
		margin-top: 20rpx;
		background: #eee;
		overflow: hidden;//解决背景色没出来的原因
	}
	.hot-goods .title{
		height: 90rpx;
		line-height: 90rpx;
		background: #fff;
		color: #000;
		font-size: 40rpx;
		font-weight: 600;
		letter-spacing:8rpx;
		margin: 10rpx 0;
	}
	.hot-goods .goods-lists{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 15rpx;
	}
	.hot-goods .goods-lists .goods-item{
		width: 49%;
		background: #fff;
		margin: 10rpx 0;
		padding: 15rpx;
	}
	.hot-goods .goods-item image{
		width: 80%;
		height: 150px;
		/* 下面这两行代码，设置图片居中 */
		display: block;
		margin: auto;
	}
	.hot-goods .goods-item .price{
		color: #ff2d52;
		font-size: 36rpx;
	}
	.hot-goods .goods-item .price text:nth-child(2) {
		color: #ccc;
		font-size: 28rpx;
		margin-left: 7rpx;
		text-decoration: line-through;
	}
	.hot-goods .goods-item .goods-name{
		font-size: 28rpx;
		line-height: 50rpx;
		padding-bottom: 15rpx;
		padding-top: 10rpx;
	}
</style>
