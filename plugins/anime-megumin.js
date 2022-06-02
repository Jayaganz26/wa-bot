import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/megumin')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Gepeng :v', author, json.url, [['Get Again', `${usedPrefix}megumin`]], m)
}
handler.help = ['megumin']
handler.tags = ['internet']
handler.command = /^(megumin)$/i

export default handler