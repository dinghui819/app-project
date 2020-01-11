<template>
	<view class="goods-lists">	
		<goodsList :goods="goods"></goodsList>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goodsList.vue'
	export default {
		data() {
			return {
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
				}],
				navs:[{
					icon:'iconfont icon-remen',
					title: '热门销售',
					path:'/pages/goods/goods'
				},{
					icon:'iconfont icon-mendianxianhuo_nor',
					title: '店内现货',
					path:'/pages/shops/shops'
				},{
					icon:'iconfont icon-food',
					title: '休闲食品',
					path:'/pages/foods/foods'
				},{
					icon:'iconfont icon-jiushuiyinliao',
					title: '酒水饮料',
					path:'/pages/water/water'
				},{
					icon:'iconfont icon-meironghufu',
					title: '美容护肤',
					path:'/pages/skin/skin'
				},{
					icon:'iconfont icon-chujingxinxianshuiguohanlengdongshuiguoguoyuanzhucedengji',
					title: '新鲜水果',
					path:'/pages/fruits/fruits'
				},{
					icon:'iconfont icon-riyongbaihuo',
					title: '日用百货',
					path:'/pages/dayuse/dayuse'
				},{
					icon:'iconfont icon-quanbufenlei',
					title: '全部分类',
					path:'/pages/allclassify/allclassify'
				}]
			}
		},
		components:{
			goodsList
		},
		methods: {
			getGoods(goods) {
				console.log(goods)
			}
		},
		// 页面一打开就开始加载
		onLoad() {
			// console.log(this.hotGoodsList)
		},
		// 触底就触发这个函数
		onReachBottom () {
			console.log("到底了哦")
		}
	}
</script>

<style>
.goods-lists{
	background: #eee;
}
</style>
