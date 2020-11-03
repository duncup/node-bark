const Client = require('../index');

(async () => {
	const client = new Client();
	const res = await client.send('Title', '这是内容////、、\nBAA', { copy: '3', automaticallyCopy: 1 });
	console.log(res);
})();
