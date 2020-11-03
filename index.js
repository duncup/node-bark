'use strict';
require('dotenv').config();
const url = require('url');
const got = require('got');

class Client {
	constructor(host, key) {
		host = process.env.HOST || host
		key = process.env.KEY || key

		this.client = got.extend({
			prefixUrl: url.resolve(host, key),
		});
	}

	/**
	 * 发送函数
	 * @param title { string } 标题
	 * @param body { string } 内容
	 * @param params { object } 参数
	 * @param params.automaticallyCopy { number } 0/1 为 1 时自动复制
	 * @param params.copy { string } 复制内容
	 * @param params.url { string } 一段网址，点击时自动打开
	 * @param params.copy { isArchive } 是否保存点击记录
	 * @param params.sound { string } 推送铃声
	 * @param params.copy { string } 复制内容
	 * @return {Promise<*>}
	 */
	async send(title, body, params) {
		return await this.client.post({
			form: {
				title,
				body,
			},
			searchParams: params,
			responseType: 'json'
		})
	}
}

module.exports = Client;
