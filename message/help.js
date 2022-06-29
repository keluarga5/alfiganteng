const fs = require("fs");

let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

Hitung Mundur Idul Adha
${mundur}

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal}
 • Runtime :
 ${runtime(process.uptime())}

*USER INFO*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
 • Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 • Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 • Balance : $${toCommas(getBalance(sender, balance))}
${readmore}
*MAIN MENU*
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}sewabot
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa

*CONVERTER/TOOLS*
 • ${prefix}sticker
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tovideo
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}nulis
 • ${prefix}spamcall
 • ${prefix}say
 • ${prefix}translate

*ANONYMOUS CHATS*
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop

*STORE MENU*
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}jeda
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi

*PROSES/DONE*
 • proses < reply chat >
 • done < reply chat >
 • ${prefix}setproses
 • ${prefix}changeproses
 • ${prefix}delsetproses
 • ${prefix}setdone
 • ${prefix}changedone
 • ${prefix}delsetdone

*DOWNLOADS MENU*
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}getmusic
 • ${prefix}getvideo
 • ${prefix}youtube
 • ${prefix}instagram
 • ${prefix}igstory
 • ${prefix}tiktok
 • ${prefix}facebook
 • ${prefix}mediafire
 • ${prefix}telesticker
 • ${prefix}pinterestdl

*GROUP MENU*
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}open
 • ${prefix}close
 • ${prefix}setopen
 • ${prefix}changeopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}changeclose
 • ${prefix}delsetclose
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa

*GAME MENU*
 • ${prefix}tictactoe
 • ${prefix}delttt
 • ${prefix}tebakgambar
 • ${prefix}kuis
 • ${prefix}tebaklagu
 • ${prefix}family100
 • ${prefix}nyerah
 • ${prefix}casino
 • ${prefix}delcasino
 • ${prefix}akinator
 • ${prefix}cancelakinator

*KERANG MENU*
 • ${prefix}apakah
 • ${prefix}bisakah
 • ${prefix}kapankah
 • ${prefix}bagaimanakah
 • ${prefix}rate
 • ${prefix}gantengcek
 • ${prefix}cantikcek
 • ${prefix}sangecek
 • ${prefix}gaycek
 • ${prefix}lesbicek
 • ${prefix}cekbapak

*SEARCH MENU*
  • ${prefix}lirik
 • ${prefix}grupwa
 • ${prefix}pinterest
 • ${prefix}ytsearch
 • ${prefix}whatmusic
 • ${prefix}igstalk
 • ${prefix}searchbyimage

*RANDOM MENU*
 • ${prefix}quotes
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}waifu
 • ${prefix}meme
 • ${prefix}darkjoke
 • ${prefix}couple

*BALANCE MENU*
 • ${prefix}topglobal
 • ${prefix}toplocal
 • ${prefix}buylimit
 • ${prefix}buyglimit
 • ${prefix}transfer
 • ${prefix}limit
 • ${prefix}balance

*BAILEYS*
 • ${prefix}fitnah
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd

*OWNERS MENU*
 • > evalcode
 • x evalcode-2
 • $ executor
 • ${prefix}exif
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setprefix
 • ${prefix}setppbot
 • ${prefix}broadcast
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa`
}

exports.donate = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian biswa mendukung saya agar bot ini tetap up to date dengan:
🏧 085101617929 (Dana)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber.split("@")[0]} (Owner)`
}
