<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1578633742720'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1578633742720#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1578633742720') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1578633742720') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1578633742720#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-meironghufu:before {
	  content: "\e67f";
	}
	
	.icon-remen:before {
	  content: "\e621";
	}
	
	.icon-food:before {
	  content: "\e6a6";
	}
	
	.icon-quanbufenlei:before {
	  content: "\e63d";
	}
	
	.icon-xuanzhongshangcheng:before {
	  content: "\e600";
	}
	
	.icon-mendianxianhuo_nor:before {
	  content: "\e622";
	}
	
	.icon-jiushuiyinliao:before {
	  content: "\e603";
	}
	
	.icon-riyongbaihuo:before {
	  content: "\e757";
	}
	
	.icon-chujingxinxianshuiguohanlengdongshuiguoguoyuanzhucedengji:before {
	  content: "\e66a";
	}
	
	.icon-xuanzhongshangcheng1:before {
	  content: "\e601";
	}
	*{
		box-sizing: border-box;
	}

</style>
