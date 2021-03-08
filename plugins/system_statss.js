/* Codded by @cyberjeevi
Youtube: Cyber Noob Arena
Instagram: www.instagram.com/its__me_cj
WhatsApp: +15817003192
Github: github.com/cyberjeevi
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: false, dontAddCommandList: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    if (Config.ALIVEMSG == 'default') {
        await message.client.sendMessage(message.jid,'```CJ BOT by CyberJeevi```\n\n*Version:* ```1.0```\n*Branch:* ```'+Config.BRANCH+'```\n*Blog:*\n https://cyberjeevi-blog.tk\n*WhatsApp:*\n https://wa.me/15817003192\n*Youtube Channel:*\n https://youtube.com/CYBERARENA' , MessageType.text);
    }
    else {
        await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by CYBERJEEVI*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'sysd', fromMe: false, dontAddCommandList: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
