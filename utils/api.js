// 分装uni.request
// 通过export向外暴露一个方法myRequest
const api = "http://localhost:3001"
export const myRequest = (options) =>{
	// 通过promise来处理异步请求
	return new Promise ((resolve,reject) =>{
		uni.request({
			url:api+options.url,
			method:options.method || "get",
			data:options.data || {},
			success: (res) => {
				console.log(res)
				if (res.statusCode !== 200) {
					// 请求失败就返回提示
					return uni.showToast({
						// 提示的内容
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) =>{
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}