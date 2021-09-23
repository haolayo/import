
import request from '@/utils/request'
// 获取你要的数据
export function getData(data) {
	return request({
		url: '/test/testdata/',//自己的接口地址
		method: 'post',//请求方法
        data //需要携带的参数
	})

}