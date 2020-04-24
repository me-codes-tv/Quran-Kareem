const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');
const prefix = '#' 

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "invite" || message.content === prefix + "inv") {
    	  message.react('✅');
      message.author.send(`** https://discordapp.com/api/oauth2/authorize?client_id=697943858801147924&permissions=66061056&scope=bot **`);


  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "server" || message.content === prefix + "ser") {
	  message.react('✅');
      message.author.send(`** https://discord.gg/gRbDbME **`);


  }
});


client.on('message', message => {
    if(message.content === "#bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`
<:580185227381702676:677203444788101170> | **Servers** **__${client.guilds.size}__**
<:581966414576091146:677203428119805983> | **Users** **__${client.users.size}__**
<:694579717013110914:697941197821575179> | **Channels** **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users16o\! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
 
client.user.setGame("#help quran| رمـضـان كـريـم", "https://www.twitch.tv/alpha");
});

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'Wrote quran')) {
        let codes = message.content.split(' ').slice(1);
        let num;
        if(!codes[0] || isNaN(codes[0])) num = 1
        else num = parseInt(codes[0])
        
        
        let embed = new Discord.RichEmbed()
        .setAuthor("Quran | القرآن", client.user.displayAvatarURL)
        .setTitle("صفحات القرآن الكريم")
        .setImage(getURLCodes(num))
        .setFooter(getFooterCodes(num))
        
        let l = '⬅';
        let p = '⏹';
        let r = '➡';
        
        let lF = (reaction, user) => reaction.emoji.name == l && user.id == message.author.id;
        let pF = (reaction, user) => reaction.emoji.name == p && user.id == message.author.id;
        let rF = (reaction, user) => reaction.emoji.name == r && user.id == message.author.id;
        message.channel.send(embed).then(async msg => {
            await msg.react(r)
            await msg.react(p)
            await msg.react(l)
            
            let lC = msg.createReactionCollector(lF)
            let pC = msg.createReactionCollector(pF)
            let rC = msg.createReactionCollector(rF)
            lC.on('collect', codes => {
                if(num == 604) return;
                num++;
                embed.setImage(getURLCodes(num))
                embed.setFooter(getFooterCodes(num))
                msg.reactions.forEach(reaction => {
                    reaction.fetchUsers().then(usersCodes => {
                        usersCodes.forEach(user => {
                            if(user.bot) return;
                            reaction.remove(user)
                        })
                    })
                })
                msg.edit(embed)
            })
            pC.on('collect', codes => {
                message.channel.send("سيتم اغلاق المصحف خلال 5 ثواني").then(codes => {
                    codes.delete(5000)
                    msg.delete(5000)
                    message.delete(5000)
                })
            })
            rC.on('collect', codes => {
                if(num == 1) return;
                num--;
                embed.setImage(getURLCodes(num))
                embed.setFooter(getFooterCodes(num))
                msg.reactions.forEach(reaction => {
                    reaction.fetchUsers().then(users => {
                        users.forEach(user => {
                            if(user.bot) return;
                            reaction.remove(user)
                        })
                    })
                })
                msg.edit(embed)
            })
        })
    }
})
function getURLCodes(num) {
    return `http://quran.ksu.edu.sa/ayat/safahat1/${num}.png`
}
function getFooterCodes(num) {
    return `الصفحة رقم ${num} من أصل 604 صفحة`
}

client.on('message', message => {
if (message.content.startsWith(prefix + 'help quran')) { 
message.react('✅');
    let pages = [`	**
االــســلام عــلــيــكــم | <a:601514247674920998:677203449997426688>

مـرحـب بـك فـى قـائـمـة صـوتـى اللـقـرأن الـكـريـم | <:580185227381702676:677203444788101170>

بــصــوت الــشـيــخ : \`يــاســر الـدوسـري\` | <:694579701100052500:697941189105680534>

رمــضــان كــريــم | <a:2_:674311882340827167>

رابـط بـوت : \` #invite \` 

	** `
	,
	`**
#Wrote quran <a:525837021558865961:677203465646243844> صور المصحف الكريم كامل (604)
#quran 1 <a:525837021558865961:677203465646243844> سورة الفاتحة
#quran 2 <a:525837021558865961:677203465646243844> سورة البقرة
#quran 3 <a:525837021558865961:677203465646243844> سورة ال عمران
#quran 4 <a:525837021558865961:677203465646243844> سورة النساء
#quran 5 <a:525837021558865961:677203465646243844> سورة المائدة
#quran 6 <a:525837021558865961:677203465646243844> سورة الأنعام
#quran 7 <a:525837021558865961:677203465646243844> سورة الأعراف
#quran 8 <a:525837021558865961:677203465646243844> سورة الأنفال
#quran 9 <a:525837021558865961:677203465646243844> سورة التوبة
#quran 10 <a:525837021558865961:677203465646243844> سورة يونس
#quran 11 <a:525837021558865961:677203465646243844> سورة هود
#quran 12 <a:525837021558865961:677203465646243844> سورة يوسف
#quran 13 <a:525837021558865961:677203465646243844> سورة الرعد
#quran 14 <a:525837021558865961:677203465646243844> سورة إبراهيم
#quran 15 <a:525837021558865961:677203465646243844> سورة الحجر
#quran 16 <a:525837021558865961:677203465646243844> سورة النحل
#quran 17 <a:525837021558865961:677203465646243844> سورة الإسراء
#quran 18 <a:525837021558865961:677203465646243844> سورة الكهف
#quran 19 <a:525837021558865961:677203465646243844> سورة مريم
#quran 20 <a:525837021558865961:677203465646243844> سورة طه
#quran 21 <a:525837021558865961:677203465646243844> سورة الأنبياء
#quran 22 <a:525837021558865961:677203465646243844> سورو الحج
#quran 23 <a:525837021558865961:677203465646243844> سورة المؤمنون
#quran 24 <a:525837021558865961:677203465646243844> سورة النور
#quran 25 <a:525837021558865961:677203465646243844> سورة الفرقان
#quran 26 <a:525837021558865961:677203465646243844> سورة الشعراء
#quran 27 <a:525837021558865961:677203465646243844> سورة النمل
#quran 28 <a:525837021558865961:677203465646243844> سورة القصص
#quran 29 <a:525837021558865961:677203465646243844> سورة العنكبوت
#quran 30 <a:525837021558865961:677203465646243844> سورة الروم	
**`
	,
	`**
#quran 31 <a:525837021558865961:677203465646243844> سورة لقمان	
#quran 32 <a:525837021558865961:677203465646243844> سورة السجدة	
#quran 33 <a:525837021558865961:677203465646243844> سورة الأحزاب	
#quran 34 <a:525837021558865961:677203465646243844> سورة سبأ	
#quran 35 <a:525837021558865961:677203465646243844> سورة فاطر	
#quran 36 <a:525837021558865961:677203465646243844> سورة يس	
#quran 37 <a:525837021558865961:677203465646243844> سورة الصافات
#quran 38 <a:525837021558865961:677203465646243844> سورة ص	
#quran 39 <a:525837021558865961:677203465646243844> سورة الزمر	
#quran 40 <a:525837021558865961:677203465646243844> سورة غافر	
#quran 41 <a:525837021558865961:677203465646243844> سورة فصلت	
#quran 42 <a:525837021558865961:677203465646243844> سورة الشورى	
#quran 43 <a:525837021558865961:677203465646243844> سورة الزخرف	
#quran 44 <a:525837021558865961:677203465646243844> سورة الدخان	
#quran 45 <a:525837021558865961:677203465646243844> سورة الجاثية
#quran 46 <a:525837021558865961:677203465646243844> سورة الأحقاف	
#quran 47 <a:525837021558865961:677203465646243844> سورة محمد	
#quran 48 <a:525837021558865961:677203465646243844> سورة الفتح	
#quran 49 <a:525837021558865961:677203465646243844> سورة الحجرات
#quran 50 <a:525837021558865961:677203465646243844> سورة ق	
#quran 51 <a:525837021558865961:677203465646243844> سورة الذاريات
#quran 52 <a:525837021558865961:677203465646243844> سورة الطور	
#quran 53 <a:525837021558865961:677203465646243844> سورة النجم	
#quran 54 <a:525837021558865961:677203465646243844> سورة القمر	
#quran 55 <a:525837021558865961:677203465646243844> سورة الرحمن	
#quran 56 <a:525837021558865961:677203465646243844> سورة الواقعة
#quran 57 <a:525837021558865961:677203465646243844> سورة الحديد	
#quran 58 <a:525837021558865961:677203465646243844> سورة المجادلة
#quran 59 <a:525837021558865961:677203465646243844> سورة الحشر	
#quran 60 <a:525837021558865961:677203465646243844> سورة الممتحنة
	**`
	,
	`**
#quran 61 <a:525837021558865961:677203465646243844> سورة الصف	
#quran 62 <a:525837021558865961:677203465646243844> سورة الجمعة	
#quran 63 <a:525837021558865961:677203465646243844> سورة المنافقون
#quran 64 <a:525837021558865961:677203465646243844> سورة التغابن
#quran 65 <a:525837021558865961:677203465646243844> سورة الطلاق	
#quran 66 <a:525837021558865961:677203465646243844> سورة التحريم
#quran 67 <a:525837021558865961:677203465646243844> سورة الملك	
#quran 68 <a:525837021558865961:677203465646243844> سورة القلم	
#quran 69 <a:525837021558865961:677203465646243844> سورة الحاقة	
#quran 70 <a:525837021558865961:677203465646243844> سورة المعارج
#quran 71 <a:525837021558865961:677203465646243844> سورة نوح	
#quran 72 <a:525837021558865961:677203465646243844> سورة الجن	
#quran 73 <a:525837021558865961:677203465646243844> سورة المزمل	
#quran 74 <a:525837021558865961:677203465646243844> سورة المدثر	
#quran 75 <a:525837021558865961:677203465646243844> سورة القيامة
#quran 76 <a:525837021558865961:677203465646243844> سورة الإنسان	
#quran 77 <a:525837021558865961:677203465646243844> سورة المرسلات
#quran 78 <a:525837021558865961:677203465646243844> سورة النبأ	
#quran 79 <a:525837021558865961:677203465646243844> سورة النازعات
#quran 80 <a:525837021558865961:677203465646243844> سورة عبس
#quran 81 <a:525837021558865961:677203465646243844> سورة التكوير
#quran 82 <a:525837021558865961:677203465646243844> سورة الإنفطار
#quran 83 <a:525837021558865961:677203465646243844> سورة المطففين
#quran 84 <a:525837021558865961:677203465646243844> سورة الإنشقاق	
#quran 85 <a:525837021558865961:677203465646243844> سورة البروج	
#quran 86 <a:525837021558865961:677203465646243844> سورة الطارق	
#quran 87 <a:525837021558865961:677203465646243844> سورة الأعلى	
#quran 88 <a:525837021558865961:677203465646243844> سورة الغاشية	
#quran 89 <a:525837021558865961:677203465646243844> سورة الفجر	
#quran 90 <a:525837021558865961:677203465646243844> سورة البلد	
	**`
	,
	`**
#quran 91 <a:525837021558865961:677203465646243844> سورة الشمس	
#quran 92 <a:525837021558865961:677203465646243844> سورة الليل	
#quran 93 <a:525837021558865961:677203465646243844> سورة الضحى	
#quran 94 <a:525837021558865961:677203465646243844> سورة الشرح	
#quran 95 <a:525837021558865961:677203465646243844> سورة التين	
#quran 96 <a:525837021558865961:677203465646243844> سورة العلق	
#quran 97 <a:525837021558865961:677203465646243844> سورة القدر	
#quran 98 <a:525837021558865961:677203465646243844> سورة البينة	
#quran 99 <a:525837021558865961:677203465646243844> سورة الزلزلة	
#quran 100 <a:525837021558865961:677203465646243844> سورة العاديات	
#quran 101 <a:525837021558865961:677203465646243844> سورة القارعة	
#quran 102 <a:525837021558865961:677203465646243844> سورة التكاثر	
#quran 103 <a:525837021558865961:677203465646243844> سورة العصر	
#quran 104 <a:525837021558865961:677203465646243844> سورة الهمزة	
#quran 105 <a:525837021558865961:677203465646243844> سورة الفيل	
#quran 106 <a:525837021558865961:677203465646243844> سورة قريش	
#quran 107 <a:525837021558865961:677203465646243844> سورة الماعون	
#quran 108 <a:525837021558865961:677203465646243844> سورة الكوثر	
#quran 109 <a:525837021558865961:677203465646243844> سورة الكافرون	
#quran 110 <a:525837021558865961:677203465646243844> سورة النصر	
#quran 111 <a:525837021558865961:677203465646243844> سورة المسد	
#quran 112 <a:525837021558865961:677203465646243844> سورة الإخلاص	
#quran 113 <a:525837021558865961:677203465646243844> سورة الفلق	
#quran 114 <a:525837021558865961:677203465646243844> سورة الناس	
	**`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});
 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Users] ${client.users.size}`)
});
 
function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('*' + str);
}
 
function pluck(array) {
    return array.map(function(item) { return item['name']; });
}
 
function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
 
  }
 
 
var servers = {};
 
var q1 = "#quran 1"
var q2 = "#quran 2"
var q3 = "#quran 3"
var q4 = "#quran 4"
var q5 = "#quran 5"
var q6 = "#quran 6"
var q7 = "#quran 7"
var q8 = "#quran 8"
var q9 = "#quran 9"
var q10 = "#quran 10"
var q11 = "#quran 11"
var q12 = "#quran 12"
var q13 = "#quran 13"
var q14 = "#quran 14"
var q15 = "#quran 15"
var q16 = "#quran 16"
var q17 = "#quran 17"
var q18 = "#quran 18"
var q19 = "#quran 19"
var q20 = "#quran 20"
var q21 = "#quran 21"
var q22 = "#quran 22" 
var q23 = "#quran 23" 
var q24 = "#quran 24"
var q25 = "#quran 25"
var q26 = "#quran 26"
var q27 = "#quran 27"
var q28 = "#quran 28" 
var q29 = "#quran 29"
var q30 = "#quran 30"
var q31 = "#quran 31"
var q32 = "#quran 32"
var q33 = "#quran 33"
var q34 = "#quran 34"
var q35 = "#quran 35"
var q36 = "#quran 36"
var q37 = "#quran 37"
var q38 = "#quran 38"
var q39 = "#quran 39"
var q40 = "#quran 40"
var q41 = "#quran 41"
var q42 = "#quran 42"
var q43 = "#quran 43"
var q44 = "#quran 44"
var q45 = "#quran 45"
var q46 = "#quran 46"
var q47 = "#quran 47"
var q48 = "#quran 48"
var q49 = "#quran 49"
var q50 = "#quran 50"
var q51 = "#quran 51" 
var q52 = "#quran 52" 
var q53 = "#quran 53" 
var q54 = "#quran 54" 
var q55 = "#quran 55" 
var q56 = "#quran 56" 
var q57 = "#quran 57" 
var q58 = "#quran 58" 
var q59 = "#quran 59" 
var q60 = "#quran 60" 
var q61 = "#quran 61" 
var q62 = "#quran 62"
var q63 = "#quran 63"
var q64 = "#quran 64"
var q65 = "#quran 65"
var q66 = "#quran 66"
var q67 = "#quran 67"
var q68 = "#quran 68"
var q69 = "#quran 69"
var q70 = "#quran 70"
var q71 = "#quran 71"
var q72 = "#quran 72"
var q73 = "#quran 73"
var q74 = "#quran 74"
var q75 = "#quran 75"
var q76 = "#quran 76"
var q77 = "#quran 77"
var q78 = "#quran 78"
var q79 = "#quran 79"
var q80 = "#quran 80"
var q81 = "#quran 81"
var q82 = "#quran 82"
var q83 = "#quran 83"
var q84 = "#quran 84"
var q85 = "#quran 85"
var q86 = "#quran 86"
var q87 = "#quran 87"
var q88 = "#quran 88"
var q89 = "#quran 89"
var q90 = "#quran 90"
var q91 = "#quran 91"
var q92 = "#quran 92"
var q93 = "#quran 93"
var q94 = "#quran 94"
var q95 = "#quran 95"
var q96 = "#quran 96"
var q97 = "#quran 97"
var q98 = "#quran 98"
var q99 = "#quran 99"
var q100 = "#quran 100"
var q101 = "#quran 101"
var q102 = "#quran 102"
var q103 = "#quran 103"
var q104 = "#quran 104"
var q105 = "#quran 105"
var q106 = "#quran 106"
var q107 = "#quran 107"
var q108 = "#quran 108"
var q109 = "#quran 109"
var q110 = "#quran 110"
var q111 = "#quran 111"
var q112 = "#quran 112"
var q113 = "#quran 113"
var q114 = "#quran 114"

function play(connection, message) {
    var server = servers[message.guild.id];
   
   server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));
 
    server.queue.shift();
 
    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}
 
client.on("ready", () => {
    console.log(`Quran bot is in ${client.guilds.size} servers `)
});
 
client.on("message", message => {
                        if (message.content === q1 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);  
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=pZcP-fCwoao&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=1', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                        if (message.content === q2 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | <a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=URRjX-cYOJE&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=2', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                            if (message.content === q3 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=NPNZj8KXH3I&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=3', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
 
                            if (message.content === q4 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ASShxNuUM4A&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=4', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                              if (message.content === q5 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=SzO_GgCi4kI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=5', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                                  if (message.content === q6 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4etODaX3dD8&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=6', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
                                      if (message.content === q7 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ns90u5vmjxA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=7', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q8 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Q9a8d2McYFM&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=8', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q9 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=svNdXfqhosY&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=9', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q10 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=N6anevqip58&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=10', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q11 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=hWc_EdIzdro&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=11', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q12 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=-jgs42h1tUA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=12', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q13 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=l239j0dHJRI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=13', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q14 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=THhXAhUrcIU&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=14', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q15 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=R4JsfV6lYaw&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=15', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q16 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=SoB2MsEbPpA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=16', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q17 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=aa_XUY_vHfY&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=17', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q18 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=wAMcljbJSJ0&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=18', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q19 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Gvi8JURE3LQ&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=19', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q20 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=OLin2hAa3ps&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=20', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q21 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ZdA46zPM_b0&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=21', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q22 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=xocx3ZMqOso&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=22', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q23 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=GDuM6sfNS0M&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=23', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q24 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Jq7edDk2aMI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=24', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q25 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=bjmsAYOcNWI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=25', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q26 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=cgnx59M_sYI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=26', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q27 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=r7rzDWmb57Y&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=27', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q28 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=crtjWX3dq3M&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=28', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q29 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=3wWCE_JOOPs&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=29', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q30 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=-s8FW0YQUMg&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=30', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q31 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Pw6xCo69XG4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=31', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q32 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=FjgruT8A-dU&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=32', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q33 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vs2XrYUzXoU&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=33', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q34 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=AvClB8EFQK4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=34', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q35 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=o7O5U3aF_qw&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=35', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q36 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=X7Zp-Vj5B3E&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=36', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q37 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=JFFG5Zn2fto&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=37', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q38 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=1BaJxbbqMlM&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=38', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q39 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=JJ0kiw2Bgbs&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=39', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q40 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=XvZZ4Zwcqd4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=40', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q41 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=EeH5M9hBNwM&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=41', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q42 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=FIQh7ccE1hA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=42', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
                                       if (message.content === q43 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=PqVPc7EeEpI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=43', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q44 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=jeeZVjkRh6U&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=44', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q45 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=O3WOux_azjs&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=45', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q46 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=z7LMmOgAeC8&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=46', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q47 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=s_ieFoRFbI8&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=47', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q48 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=oRK0oPpq-lI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=48', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q49 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=LHLNkLhNOug&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=49', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q50 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=j4g6YZY0VbA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=50', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q51 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ka1ycyYQFng&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=51', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q52 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ESNkXcgFZ1g&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=52', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q53 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=aXqxearUGjI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=53', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q54 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=hM8NA3Jclm4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=54', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q55 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=SM_TwZigNYk&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=55', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q56 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ytLtLaS43J4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=56', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q57 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=yOkaT9qVUHg&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=57', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q58 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=qUT08vhEm3U&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=58', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q59 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=buanHPg8LbE&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=59', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q60 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=HFOfYW03FUI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=60', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q61 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=WbYd1luedos&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=61', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q62 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=EvmNmodasv4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=62', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q63 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Fk0-XaYMizo&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=63', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q64 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=VqefYqKnc6A&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=64', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q65 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=2keSigCnt7I&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=65', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q66 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=yZgx2BpRgsQ&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=66', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q67 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=7qaBnfsZ-AQ&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=67', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q68 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=CHCa8NOpWIA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=68', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q69 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=LEyeQ5ifSzs&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=69', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q70 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=GILXxB39feI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=70', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q71 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=J9vA7CM35dQ&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=71', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q72 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=S7tCJJqVvjQ&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=72', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q73 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=FPSiKoOrAjg&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=73', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q74 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=PPrubmN2Hgc&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=74', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q75 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=n1Zev0cpdww&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=75', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q76 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=vPt_xGz4QoE&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=76', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q77 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=qMSJRDMentI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=77', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q78 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=u1AgLz8JAT8&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=78', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
                                       if (message.content === q79 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=3Y7Rc1enIxo&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=79', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
                                       if (message.content === q80 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=5pdM28GslMc&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=80', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q81 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=MTQKnVb96G4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=81', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q82 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=wuBBfEGdW-4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=82', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                      if (message.content === q83 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=xrvB6x2-Wsg&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=83', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q84 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=wJd0Lbo07nI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=84', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q85 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=slK32rGe7s4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=85', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q86 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=IGU13q3gmR0&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=86', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q87 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Qa6mFfS_EEQ&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=87', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q88 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=-cNMO59nS-0&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=88', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q89 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=XgFVZuHrEYM&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=89', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q90 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=G2pZICTZkSA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=90', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q91 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=YrgooISl1vY&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=91', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q92 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=XAFMrVBxjmc&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=92', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q93 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=NwQoaa_TJMI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=93', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
                                       if (message.content === q94 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ai-CY5kPvy4&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=94', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q95 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q96 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=x1EjDAzbzWs&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=96', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q97 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=jAtknXseV6A&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=97', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q98 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=PzHlL5Xlz6o&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=98', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q99 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=BDajRVUsImU&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=99', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q100 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=fJJCcAVD3Og&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=100', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q101 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=nQv0ksmSP3A&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=101', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q102 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=-aN-_lMvzE0&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=102', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q103 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ApNOe_iaRtU&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=103', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q104 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=C5B6yI7Pksc&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=104', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
                                       if (message.content === q105 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=0_YomRrf83Y&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=105', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q106 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Y--Z--V0c-0&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=106', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q107 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ZGwqzwEon5o&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=107', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q108 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=NSFI-AiDV6A&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=108', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q109 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=2-OQQOpZ9ts&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=109', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q110 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=iFRWMV-RjVI&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=110', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q111 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=aUw78IvCQ8k&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=111', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q112 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ma05AWM6Hjg&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=112', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
                                       if (message.content === q113 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=fqj7gejLTuA&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=113', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
  
                                        if (message.content === q114 ) {
                  message.react('ߔʧ)
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`<a:568120432948150273:677203429507989573> | **عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=pZXTLibHsYg&list=PL5jkFTg3NXIy1Ik3dxp8yD-jV-_wbWqLF&index=114', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
 
 
 
 
 
 
 
 
 
 
 
  if(message.content === "!stop" ) {
                var servers = {};
 
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
   
  }
 
 if(message.content === "server2quran") {
   message.channel.send(` QuranBot
شكرا لإستعمال البوت | Thanks You
 `)
 }
 
       
});

client.login('Token Bot');