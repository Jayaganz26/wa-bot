import fetch from 'node-fetch'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json').json()
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.asahotak[id][0])
        throw false
    }
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Soal: ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, author, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['Main Lagi', '/asahotak']
            ], conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

export default handler

const buttons = [
    ['Bantuan', '/hint'],
    ['Menyerah', 'menyerah']
]