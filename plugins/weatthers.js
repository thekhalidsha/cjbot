/* Codded by @cyberjeevi
Youtube: Cyber Noob Arena
Instagram: www.instagram.com/its__me_cj
WhatsApp: +15817003192
Github: github.com/cyberjeevi
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'weather ?(.*)', fromMe: false, dontAddCommandList: true, desc: Lang.WEATHER_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_LOCATION);
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${match[1]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '_*CJ BOT*_\n\n*📍 ' + Lang.LOCATION +':* ```' + match[1] + '```\n\n' +
		'*☀ ' + Lang.TEMP +':* ```' + json.main.temp_max + '°```\n' + 
		'*ℹ ' + Lang.DESC +':* ```' + json.weather[0].description + '```\n' +
		'*☀ ' + Lang.HUMI +':* ```%' + json.main.humidity + '```\n' + 
		'*💨 ' + Lang.WIND +':* ```' + json.wind.speed + 'm/s```\n' + 
		'*☁ ' + Lang.CLOUD +':* ```%' + json.clouds.all + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
	}
});
