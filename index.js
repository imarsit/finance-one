module.exports = {
	// 模版标识
	name: 'finance-one',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '我要投资',
			// 路径
			path: 'cases',
			// 预览图
			thumbnail: 'cases.png',
		},
		{
			name: '活动专区',
			// 路径
			path: 'product',
			// 预览图
			thumbnail: 'product.png',
		},
		{
			name: '安全保障',
			// 路径
			path: 'safety',
			// 预览图
			thumbnail: 'safety.png',
		},
		{
			name: '关于我们',
			// 路径
			path: 'about',
			// 预览图
			thumbnail: 'about.png',
		},
		{
			name: '注册',
			// 路径
			path: 'register',
			// 预览图
			thumbnail: 'register.png',
		}

	]
}
