let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, author, author, pickRandom(japan), ['Get again, '/cecanjapan'], m)
}
handler.help = ['cecanjapan']
handler.tags = ['image']

handler.command = /^cecanjapan$/i
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let japan = [
"https://a.top4top.io/p_1962cau3w1.jpg",
"https://k.top4top.io/p_1962w2hyp1.jpg",
"https://j.top4top.io/p_1962ufc7p1.jpg",
"https://h.top4top.io/p_19629eev81.jpg",
"https://d.top4top.io/p_1962ahcw21.jpg",
"https://c.top4top.io/p_1962qiubc1.jpg",
"https://b.top4top.io/p_1962ck87p1.jpg",
"https://l.top4top.io/p_1962i85aq1.jpg",
"https://i.top4top.io/p_19629cg431.jpg",
"https://g.top4top.io/p_1962o5sp41.jpg",
"https://f.top4top.io/p_1962vn5rc1.jpg",
"https://e.top4top.io/p_1962nvj4g1.jpg",
"https://d.top4top.io/p_1962847na1.jpg",
"https://c.top4top.io/p_1962tt38s1.jpg",
"https://b.top4top.io/p_1962vpyp71.jpg",
"https://a.top4top.io/p_1962fyik51.jpg",
"https://k.top4top.io/p_1962q7ura1.jpg",
"https://l.top4top.io/p_19625eppj1.jpg",
"https://j.top4top.io/p_196252lk91.jpg",
"https://i.top4top.io/p_1962p9nlk1.jpg"
]