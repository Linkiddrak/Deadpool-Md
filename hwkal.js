
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029Vag3MeuGJP8LZb1Okj39'
global.ig = 'confronter._' // ubah aja
global.email = 'confrontermfisa@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Raizen' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['22871255034'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝐃𝐄𝐀𝐃𝐏𝐎𝐎𝐋-𝐕2' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Darki-𝐕2' // ubah aja ini nama sticker
global.author = 'Raizen' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "FALSE"
global.wlcm = []
global.wlcmm = []
global.anticall = false
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
