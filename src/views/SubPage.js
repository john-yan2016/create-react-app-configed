import React, { Component } from 'react';
import './SubPage.less';

/**
 * 
 * @author : xujunjie (yinhunfeixue@163.com)
 * @date   : 2018-2-8 14:37:09
 */
class SubPage extends Component {
	render() {
		return (
			<div className='SubPage'>
				<h3>此处是默认子页面 src/views/SubPage.js</h3>
				<h4>使用说明</h4>
				<p>此模板基于create-react-app，对配置进行了修改
					<br />支持：less、Map/Set、支持打包后的文件放在非根目录下
					<br />添加了：Url配置，Route配置,添加了常用的依赖配置
					<br />请按下列步骤使用</p>
				<ol>
					<li>修改 src/App.js 搭建页面框架</li>
					<li>修改 src/config/UrlConfig.js 修改开发和生产模式（也允许更多模式）中使用到的链接</li>
					<li>在src/views中创建子页面，并在 src/config/RouteConfig.js 中配置页面的路由</li>
					<li>npm i 安装依赖包</li>
					<li>npm start 运行，npm run build打包</li>
					<li>删除默认页面——SubPage.js、SubPage.less</li>
				</ol>
			</div>
		);
	}
}
export default SubPage;