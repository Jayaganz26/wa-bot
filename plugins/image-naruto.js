let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, author, author, pickRandom(naruto), ['Get again', '/naruto'], m)
}
handler.help = ['naruto']
handler.tags = ['image']

handler.command = /^naruto$/i
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let naruto = [
"https://b.top4top.io/p_1962c801e1.jpg",
"https://e.top4top.io/p_1962vyyrh1.jpg",
"https://f.top4top.io/p_19620tfl81.jpg",
"https://d.top4top.io/p_1962x9edd1.jpg",
"https://l.top4top.io/p_196294gus1.jpg",
"https://h.top4top.io/p_1962tnabj1.jpg",
"https://i.top4top.io/p_19628zje01.jpg",
"https://c.top4top.io/p_1962rv3ku1.jpg",
"https://j.top4top.io/p_1962w9n0y1.jpg",
"https://g.top4top.io/p_19625kcdc1.jpg",
"https://a.top4top.io/p_1962vbxxc1.jpg",
"https://k.top4top.io/p_1962h7l031.jpg",
"https://e.top4top.io/p_1962fe3s91.jpg",
"https://c.top4top.io/p_1962eoi611.jpg",
"https://h.top4top.io/p_1962e3duz1.jpg",
"https://i.top4top.io/p_1962and2h1.jpg",
"https://f.top4top.io/p_1962rjjht1.jpg",
"https://d.top4top.io/p_1962lkjol1.jpg",
"https://b.top4top.io/p_1962ot3mp1.jpg",
"https://g.top4top.io/p_19622b3wb1.jpg",
"https://j.top4top.io/p_196264baz1.jpg"
]