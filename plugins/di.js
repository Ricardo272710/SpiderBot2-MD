//Comando por: diegojadibot

let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
            const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

const pp = './storage/logos/Menu2.jpg'

let di = `> Texto: ${text} 🏴\n\n*${name} quiere yaoi 💋*`

conn.sendMessage(m.chat, {text: di}, m, fake,)

//conn.reply(m.chat, `*❌️ Ocurrió un fallo*`, m, fake, )

}
handler.help = ['di']
handler.tags = ['decir']
handler.command = /^(decir|di)$/i
//handler.register = true
export default handler