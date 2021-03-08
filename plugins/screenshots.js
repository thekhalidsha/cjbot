/* Codded by @cyberjeevi
Youtube: Cyber Noob Arena
Instagram: www.instagram.com/its__me_cj
WhatsApp: +15817003192
Github: github.com/cyberjeevi
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('webss');

Asena.addCommand({pattern: 'ss ?(.*)', fromMe: false, dontAddCommandList: true, desc: Lang.SS_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await axios.get(`https://nurutomo.herokuapp.com/api/ssweb?delay=1000&url=${match[1]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*_CJ BOT_*'})

}));
