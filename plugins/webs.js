/* Codded by @cyberjeevi
Youtube: Cyber Noob Arena
Instagram: www.instagram.com/its__me_cj
WhatsApp: +15817003192
Github: github.com/cyberjeevi
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');

const Language = require('../language');
const Lang = Language.getString('web');

// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86
function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

Asena.addCommand({pattern: 'speedtest', fromMe: false, dontAddCommandList: true, deleteCommand: false,
desc: Lang.SPEEDTEST_DESC}, (async (message, match) => {
    var msg = await message.reply(Lang.SPEEDTESTING);
    var st = await speedTest({acceptLicense: true, acceptGdpr: true});
    var CMD_HELP = Lang.INFOMAT;
    
    await message.client.sendMessage(
      message.jid,'*_CJ BOT_*\n\n' + Lang.SPEEDTEST_RESULT + '\n' + 
    '*ISP:* ```' + st.isp + '```\n' +
    '*Ping:* ```' + st.ping.latency + 'ms```\n' +
    '*' + Lang.UPLOAD + ':* ```' + speedText(st.upload.bandwidth) + '```\n' +
    '*' + Lang.DOWNLOAD + ':* ```' + speedText(st.download.bandwidth) + '```\n',MessageType.text
    );
    await msg.delete();
}));

Asena.addCommand({pattern: 'ping', fromMe: false, dontAddCommandList: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
  var start = new Date().getTime();
  var msg = await message.reply('```Ping!```');
  var end = new Date().getTime();

  await msg.delete();
  await message.client.sendMessage(
    message.jid,'*_CJ BOT_*\n*Pong!*\n```' + (end - start) + 'ms```', MessageType.text);
}));
