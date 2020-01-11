<template>
	<view class="allclassify">
		<scroll-view scroll-y class="nav-left">
			<view 
			@click="leftClickHandle(index)"
			:class="active===index?'active':''"
			 v-for="(item,index) in classifyList" :key="item.id">{{item.title}}</view>
		</scroll-view>
		<scroll-view scroll-y class="nav-right">
			<goodsList :goods="goods"></goodsList>
		</scroll-view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goodsList.vue'
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				// 选中谁，就给谁添加背景色,
				//用index和active做比较
				// 点击谁，谁的样式就变
					// 注册一个点击事件
				active:0,
				classifyList:[{
					"id":1,
					"title":"美妆"
				}, {
					"id":2,
					"title":"鞋靴"
				},{
					"id":3,
					"title":"食品"
				},{
					"id":4,
					"title":"饰品"
				},{
					"id":5,
					"title":"生鲜"
				},{
					"id":6,
					"title":"进口"
				},{
					"id":7,
					"title":"百货"
				},{
					"id":8,
					"title":"箱包"
				},{
					"id":9,
					"title":"手机"
				},{
					"id":10,
					"title":"母婴"
				}, {
					"id":11,
					"title":"母婴"
				},{
					"id":12,
					"title":"母婴"
				},{
					"id":13,
					"title":"母婴"
				}, {
					"id":14,
					"title":"男装"
				}, {
					"id":15,
					"title":"内衣"
				},],
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
					"img":"../../static/img/goods10.jpg",
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
				}]
			}
		},
		methods: {
			// 注册的点击事件,
			// 把index传过来，让active=index即可
			leftClickHandle (index) {
				this.active = index
			}
		}
	}
</script>

<style>
	page{
		height: 100%;
	}
	.allclassify{
		display: flex;
		height: 100%;
	}
	.nav-left{
		border-right:1px solid #eee;
		width: 200rpx;
		height: 100%;
		text-align: center;
	}
	.nav-left view{
		border-top:1px solid #eee;
		font-size: 35rpx;
		height: 120rpx;
		line-height: 120rpx;
	}
	.active{
		background: #FF2D52;
		color: #fff;
	}
	.nav-right{
		float: right;
	}
</style>
