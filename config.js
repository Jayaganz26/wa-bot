import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6289524664142', 'Jaya', true],
  ['62895323263219', 'Ryan'],
  ['12053866602', 'Gulfi', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6288296620382'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  neoxr: 'https://api.neoxr.my.id'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zenzapis.xyz': '01a0d20fe0',
  'https://api.neoxr.my.id': 'uaINCCO2'
}

// Sticker WM
global.packname = 'HurvyBotz-Md'
global.author = 'Powered By Hurvybotz'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      health: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π',
      cat: 'π',
      dog: 'π',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
