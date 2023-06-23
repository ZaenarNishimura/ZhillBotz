/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['6283188229366', '6283188229366']  
global.mods = ['6283188229366'] 
global.prems = ['6283188229366']
global.nameowner = 'ZkySky'
global.numberowner = '6283188229366' 
global.mail = 'NO EMAILP' 
global.dana = '6283188229366'
global.pulsa = '6283188229366'
global.gopay = '6283188229366'
global.namebot = 'ZhillBotz'
global.gc = 'Belum Buat'
global.web = 'https://github.com/ZAKYZJ1'
global.instagram = 'https://instagram.com/zkyze_1'
global.wm = '© Made By ZhillBotz'
global.watermark = wm
global.wm2 = '⫹⫺ Made with By ZhillBotz'
global.wm3 = '© Made with By ZhillBotz'
global.wm4 = '© Made with By ZhillBotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'ZhillBotz'


global.btc = 'DdLsPah2' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = '46EZTtKk' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me

global.APIs = { 
  tio: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'DdLsPah2' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
