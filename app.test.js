
const fetch = require('node-fetch');
const https = require('https');
var basePath = 'https://exam-simulation-5-12.herokuapp.com/';

//jest.setTimeout(30000);
/*
function call(url) {
	return new Promise(function (resolve, reject) {
		fetch(url)
			.then(function(response) {
				resolve(response);			
			});
		});
}
*/

test('dummy test', () => {
	expect(3).toBe(3);
});

test('base path landing call', async () => {
	https.get(basePath, (res) => {
		res.on('data', (chunk) => {
			let value = String(chunk);
			console.log(value);
			expect(value).toBe('Hello there!');
		})
	})
});

test('base api call on ?string=banana', () => {
	let stringParamName = 'string';
	let stringValue = 'banana';
	https.get(basePath+ 'square?' +stringParamName+'='+stringValue, (res) => {
		res.on('data', (chunk) => {
			console.log(String(chunk));
			expect(String(chunk)).toBe('{"result":'+stringValue.length * stringValue.length+'}');
		});
	});
});

test('base api call on ?string= [empty string]', () => {
	let stringParamName = 'string';
	let stringValue = '';
	https.get(basePath+ 'square?' +stringParamName+'='+stringValue, (res) => {
		res.on('data', (chunk) => {
			console.log(String(chunk));	//result explicitly declared for intuition purposes
			expect(String(chunk)).toBe('{"result":0}');
		});
	});
});

test('base api call on ?sting= [incorrect query param]', () => {
	let stringParamName = 'sting';
	let stringValue = 'banana';
	https.get(basePath+ 'square?' +stringParamName+'='+stringValue, (res) => {
		res.on('data', (chunk) => {
			console.log(String(chunk));	//result explicitly declared for intuition purposes
			expect(String(chunk)).toBe('{"result":-1}');
		});
	});
});
