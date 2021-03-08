/* Codded by @cyberjeevi
Youtube: Cyber Noob Arena
Instagram: www.instagram.com/its__me_cj
WhatsApp: +15817003192
Github: github.com/cyberjeevi
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asena');

Asena.addCommand({pattern: 'cjx ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    var CMD_HELP = Lang.INFOMAT;
    if (match[1] === '') {
        Asena.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                CMD_HELP += '╭═══════════════════›\n┠• *🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                if (command.usage !== '') CMD_HELP += '┠ *⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                if (command.warn !== '') CMD_HELP += '┠ *⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n';
                if (command.desc !== '') CMD_HELP += '┠ *💬 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '``` \n╰═══════════════════•\n\n' : '``` \n╰═══════════════════•\n\n');

            }
        );
        
        await message.client.sendMessage(
            message.jid, CMD_HELP, MessageType.text
        );    
    } else {
        var CMD_HELP = '';
        Asena.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zğüşiöç1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += '╭═══════════════════›\n┠• *🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                if (command.usage !== '') CMD_HELP += '┠ *⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                if (command.warn !== '') CMD_HELP += '┠ *⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n';
                if (command.desc !== '') CMD_HELP += '┠ *💬 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '``` \n╰═══════════════════•\n\n' : '``` \n╰═══════════════════•\n\n');
                }
            }
        );
        if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid, CMD_HELP, MessageType.text
        );
    }
}));
