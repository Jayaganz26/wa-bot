let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, author, author, nhentai, ['Get again', '/nhentai'], m)
}
handler.help = ['nhentai']
handler.tags = ['premium']

handler.command = /^nhentai$/i
handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let nhentai = [
"https://t.nhentai.net/galleries/1957699/thumb.jpg",
"https://t.nhentai.net/galleries/1957700/thumb.jpg",
"https://t.nhentai.net/galleries/1957692/thumb.jpg",
"https://t.nhentai.net/galleries/1957681/thumb.jpg",
"https://t.nhentai.net/galleries/1957684/thumb.jpg",
"https://t.nhentai.net/galleries/1957661/thumb.jpg",
"https://t.nhentai.net/galleries/1957641/thumb.jpg",
"https://t.nhentai.net/galleries/1957663/thumb.jpg",
"https://t.nhentai.net/galleries/1957018/thumb.jpg",
"https://t.nhentai.net/galleries/1954712/thumb.jpg",
"https://t.nhentai.net/galleries/1957467/thumb.jpg",
"https://t.nhentai.net/galleries/1956891/thumb.jpg",
"https://t.nhentai.net/galleries/1955106/thumb.jpg",
"https://t.nhentai.net/galleries/1957414/thumb.jpg",
"https://t.nhentai.net/galleries/1957266/thumb.jpg",
"https://t.nhentai.net/galleries/1952653/thumb.jpg",
"https://t.nhentai.net/galleries/1957184/thumb.jpg",
"https://t.nhentai.net/galleries/1954373/thumb.jpg",
"https://t.nhentai.net/galleries/1957032/thumb.jpg",
"https://t.nhentai.net/galleries/1957029/thumb.jpg",
"https://t.nhentai.net/galleries/1956929/thumb.jpg",
"https://t.nhentai.net/galleries/1956833/thumb.jpg",
"https://t.nhentai.net/galleries/1956758/thumb.jpg",
"https://t.nhentai.net/galleries/1948448/thumb.jpg",
"https://t.nhentai.net/galleries/1956755/thumb.jpg",
"https://t.nhentai.net/galleries/1956610/thumb.jpg",
"https://t.nhentai.net/galleries/1956568/thumb.jpg",
"https://t.nhentai.net/galleries/1956449/thumb.jpg",
"https://t.nhentai.net/galleries/1956386/thumb.jpg",
"https://t.nhentai.net/galleries/1955173/thumb.jpg",
"https://t.nhentai.net/galleries/1956364/thumb.jpg",
"https://t.nhentai.net/galleries/1956305/thumb.jpg",
"https://t.nhentai.net/galleries/1956319/thumb.jpg",
"https://t.nhentai.net/galleries/1956306/thumb.png",
"https://t.nhentai.net/galleries/1956320/thumb.jpg",
"https://t.nhentai.net/galleries/1954374/thumb.jpg",
"https://t.nhentai.net/galleries/1956301/thumb.jpg",
"https://t.nhentai.net/galleries/1956284/thumb.jpg",
"https://t.nhentai.net/galleries/1955372/thumb.jpg",
"https://t.nhentai.net/galleries/1955378/thumb.png",
"https://t.nhentai.net/galleries/1956198/thumb.jpg",
"https://t.nhentai.net/galleries/1956189/thumb.jpg",
"https://t.nhentai.net/galleries/1956186/thumb.jpg",
"https://t.nhentai.net/galleries/1956128/thumb.jpg",
"https://t.nhentai.net/galleries/1956100/thumb.jpg",
"https://t.nhentai.net/galleries/1956066/thumb.jpg",
"https://t.nhentai.net/galleries/1955869/thumb.jpg",
"https://t.nhentai.net/galleries/1955884/thumb.jpg",
"https://t.nhentai.net/galleries/1955858/thumb.jpg",
"https://t.nhentai.net/galleries/1955862/thumb.jpg",
"https://t.nhentai.net/galleries/1955818/thumb.jpg",
"https://t.nhentai.net/galleries/1955708/thumb.jpg",
"https://t.nhentai.net/galleries/1955710/thumb.jpg",
"https://t.nhentai.net/galleries/1955752/thumb.jpg",
"https://t.nhentai.net/galleries/1955684/thumb.jpg",
"https://t.nhentai.net/galleries/1955725/thumb.jpg",
"https://t.nhentai.net/galleries/1955711/thumb.jpg",
"https://t.nhentai.net/galleries/1955581/thumb.jpg",
"https://t.nhentai.net/galleries/1955627/thumb.jpg",
"https://t.nhentai.net/galleries/1955639/thumb.jpg",
"https://t.nhentai.net/galleries/1955597/thumb.jpg",
"https://t.nhentai.net/galleries/1955587/thumb.jpg",
"https://t.nhentai.net/galleries/1955477/thumb.jpg",
"https://t.nhentai.net/galleries/1955436/thumb.jpg",
"https://t.nhentai.net/galleries/1955406/thumb.jpg",
"https://t.nhentai.net/galleries/1955367/thumb.jpg",
"https://t.nhentai.net/galleries/1955299/thumb.jpg",
"https://t.nhentai.net/galleries/1955332/thumb.jpg",
"https://t.nhentai.net/galleries/1955287/thumb.jpg",
"https://t.nhentai.net/galleries/1955247/thumb.jpg",
"https://t.nhentai.net/galleries/1955179/thumb.jpg",
"https://t.nhentai.net/galleries/1955141/thumb.jpg",
"https://t.nhentai.net/galleries/1954536/thumb.jpg",
"https://t.nhentai.net/galleries/1955068/thumb.jpg",
"https://t.nhentai.net/galleries/1951431/thumb.jpg",
"https://t.nhentai.net/galleries/1954982/thumb.jpg",
"https://t.nhentai.net/galleries/1948444/thumb.png",
"https://t.nhentai.net/galleries/1954874/thumb.jpg",
"https://t.nhentai.net/galleries/1954861/thumb.jpg",
"https://t.nhentai.net/galleries/1954858/thumb.jpg",
"https://t.nhentai.net/galleries/1954810/thumb.jpg",
"https://t.nhentai.net/galleries/1954637/thumb.jpg",
"https://t.nhentai.net/galleries/1954599/thumb.jpg",
"https://t.nhentai.net/galleries/1954526/thumb.jpg",
"https://t.nhentai.net/galleries/1954507/thumb.jpg",
"https://t.nhentai.net/galleries/1954348/thumb.jpg",
"https://t.nhentai.net/galleries/1953771/thumb.png",
"https://t.nhentai.net/galleries/1954469/thumb.jpg",
"https://t.nhentai.net/galleries/1954434/thumb.jpg",
"https://t.nhentai.net/galleries/1923405/thumb.jpg"
]