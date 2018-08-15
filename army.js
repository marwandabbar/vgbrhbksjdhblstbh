const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ','

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`,help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**الأوامر على الخاص**');
            
	
		 


 message.author.sendMessage(`


   
╔[❖════════════❖]╗
             Prefix = ' help '
╚[❖════════════❖]╝


╔[❖════════════❖]╗
             أوامر الإدارة
╚[❖════════════❖]╝


 ❖ ,kick <mention>  لطرد العضو من السرفر

 ❖ ,ban <mention> ➾ لإعطاء العضو  البان

 ❖ ,clear ➾ clear (عدد الرسائل)

 ❖ ,ct <name> ➾ لإنشاء روم

 ❖ ,cv <name> لتحديد عدد أعضاء الموجودين في رومات السرفر

 ❖ ,bc <message> ➾ لإرسال برودكاست لأعضاء السرفر

 ❖ ,roll <number> ➾ لإعطاء رول للعضو

 
╔[❖════════════❖]╗
            الأوامر العامة
╚[❖════════════❖]╝


❖ :id:  ,id ➾ لمعرفة معلومات العضو :id:  

❖ :slight_smile:  ,avatar ➾ your avatar account :slight_smile: 

❖ :parking: :regional_indicator_i: :regional_indicator_n: :regional_indicator_g: ,ping ➾ ping/ms الخاص بك :parking: :regional_indicator_i: :regional_indicator_n: :regional_indicator_g: 

❖ ,server ➾ معلومات السرفر

❖ ,invite ➾ لاستدعاء البوت إلى سرفرك


[❖════════════❖]╗
         :joy: أوامر الرفاهية
╚[❖════════════❖]╝


:kissing_closed_eyes: لتقبيل شخص:kissing_closed_eyes: 

:kissing_closed_eyes: ,kiss  :kissing_closed_eyes:

:hearts: لحضن شخص :hearts:

:hearts: ,hug :hearts:

:rage:  لصفع شخص تكرهه :rage:

:rage: ,cuddle :rage:

:innocent:  لمداعبة شخص ما :innocent:

:innocent: ,pat :innocent:

:joy: لإحراج شخص :joy:

:joy: ,tickle :joy:

لوصف شخص بالمجنون

,crazy

        :رابط السرفر البوت
https://discord.gg/7nKFtcB
							  
       :لدعوة البوت لسرفرك
https://discordapp.com/oauth2/authorize?client_id=477047267451338772&scope=bot&permissions=2146958591


`);

    }
});	
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {
		 message.channel.send('**إذهب للخاص**');
            
	


	
 message.author.sendMessage(`



 Bot call link  :arrow_right: [http://cuon.io/rEVczg] :arrow_left:  رابط دعوة البوت

                  @youssef tube#5800:صاحب البوت

				  
`);

    }
});						 										 						 
client.on('message', message => {
if (message.content.startsWith(",ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باندإالى : " + mention.tag);
};
});
client.on('message', message => {
if (message.content.startsWith(",kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
 client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
client.on('message', message => {
    if (message.content.startsWith(",avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
 if(message.content.startsWith(prefix + 'hug')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://78.media.tumblr.com/28e86413485a973ae859a745a7a5382e/tumblr_o1hf0uK2NL1uapp8co1_500.gif",
        "https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif",
        "https://78.media.tumblr.com/e790af0168cd80394b7d792dde07407b/tumblr_o76qfcMiFn1sk1rjvo1_500.gif",
        "https://78.media.tumblr.com/350c512200d6cbb6506774f2cddc9641/tumblr_ooonx9vM691qzxv73o1_500.gif",
        "https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif",
        "https://78.media.tumblr.com/21f89b12419bda49ce8ee33d50f01f85/tumblr_o5u9l1rBqg1ttmhcxo1_500.gif",
        "https://78.media.tumblr.com/ebc214f892af851ffd7297e0e6212cdb/tumblr_o2kwkfyzT01uprh6zo1_500.gif",
        "https://78.media.tumblr.com/5fa89acc3637b84a29c6f528c1727135/tumblr_o3kyyxj5nF1unech7o1_500.gif",
        "https://78.media.tumblr.com/443c4235cae34242d014e2bb1276810d/tumblr_orldmdZJ2x1vb10byo1_500.gif",
        "https://78.media.tumblr.com/b8ce553824c59700049256fbc825390b/tumblr_ojf72iRAty1v312ebo1_500.gif",
        "https://78.media.tumblr.com/2fe074ad467af41a8230b8d9d8e322f1/tumblr_omvj49wYnq1v8tshbo1_500.gif",
        "https://78.media.tumblr.com/9956a4b53345e4031faccf8174cadb68/tumblr_ozy26yVcBu1ql0375o1_500.gif",
        "https://78.media.tumblr.com/14f5e0c6ef88280f75017987302a7dad/tumblr_o31a2iJsCw1uprh6zo1_500.gif",
        "https://78.media.tumblr.com/5e2130af66f9c548059c6452d1b55e03/tumblr_p8zuex4xZo1qzxv73o1_500.gif",
        "https://i.gifer.com/8WPN.mp4",
        "https://i.gifer.com/GAMC.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.author.username} Sorry to see you alone...`)
            .setImage('https://78.media.tumblr.com/9d9be702d1dda0559809d920bf1d01d1/tumblr_inline_nrw2mfIFBh1qafrh6_400.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been hugged by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`${message.author.username} Sorry to see you alone...`)
        .setImage('https://78.media.tumblr.com/9d9be702d1dda0559809d920bf1d01d1/tumblr_inline_nrw2mfIFBh1qafrh6_400.gif')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///kiss
client.on('message', message => {
 if(message.content.startsWith(prefix + "kiss")) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
        "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
        "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
        "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
        "https://media.giphy.com/media/kU586ictpGb0Q/giphy.gif",
        "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
        "https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif",
        "https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif",
        "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
        "https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif",
        "https://data.whicdn.com/images/271163043/original.gif",
        "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
        "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
        "https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif",
        "https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif",
		"https://media.giphy.com/media/124gj4XvM8f3fa/giphy.gif",
		"https://media.giphy.com/media/2stFpADPSpfQQ/giphy.gif",
		"https://media.giphy.com/media/5GdhgaBpA3oCA/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} chu can't kiss yourself...! B-but there you go..`)
           .setImage('https://cdn.discordapp.com/attachments/461525860910891008/462634925300908056/SydfnauPb-1.gif/')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a kiss! How sweet!`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTitle(`${message.author.username} chu can't kiss yourself...! B-but there you go..`)
       .setImage('https://cdn.discordapp.com/attachments/461525860910891008/462634925300908056/SydfnauPb-1.gif/')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///slap
client.on('message', message => {
 if(message.content.startsWith(prefix + 'slap')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467005787189805066/Slap_6.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005776880336896/Slap_9.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005776515563520/Slap_11.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005770114793492/Slap_8.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005766608486431/Slap_12.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005763814948864/Slap_13.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005759167791106/Slap_14.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005741694451713/Slap_5.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005741216169984/Slap_2.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005739530190865/Slap_4.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005740603801600/Slap_1.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005734412877854/Slap.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466953715039993856/staph_it.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951859148554260/nu.gif",
        "https://media0.giphy.com/media/fO6UtDy5pWYwM/giphy.gif",
		"https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif",
		"https://media.giphy.com/media/3otPonp0B03u7mxWYo/giphy.gif",
		"https://media.giphy.com/media/j3iGKfXRKlLqw/giphy.gif",
		"https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been slapped by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///pat
client.on('message', message => {
 if(message.content.startsWith(prefix + 'pat')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467186871290822657/pat-B1SOzCV0W.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466954354927337472/26d886c039e5f438d36c22964f1e79d0.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952080750280724/tenor.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951974726664192/1506871682_tumblr_o925gmua611uhpv9wo1_540.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951961439109130/pets.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466951936873201664/tenor-1.gif",
        "https://media2.giphy.com/media/109ltuoSQT212w/giphy.gif",
        "https://media3.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
        "https://media1.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
        "https://media2.giphy.com/media/aPOuFhSOoeoAo/giphy.gif",
        "https://media0.giphy.com/media/L2z7dnOduqEow/giphy.gif",
        "https://media0.giphy.com/media/X9MUeQelKifU4/giphy.gif",
        "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
        "https://media1.giphy.com/media/e7xQm1dtF9Zni/giphy.gif",
        "https://78.media.tumblr.com/6d55745d63a3829693ce68a71ddbd218/tumblr_ox5dckEwTQ1rupogao1_500.gif",
        "https://78.media.tumblr.com/59074e59e5563e15623216e3e33cd259/tumblr_ojt62uIuDB1vztiw8o1_500.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(``)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been patted by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(``)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///cuddle
client.on('message', message => {
 if(message.content.startsWith(prefix + 'cuddle')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/466949822604247044/467005578548346900/Cuddle6.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005575511932928/Cuddle7.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005570692677645/Cuddle4.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
        "https://i.imgur.com/IrY5w46.gif",
        "https://i.imgur.com/lGeXeTQ.gif",
        "https://i.imgur.com/0AaS08b.gif",
        "https://cdn.discordapp.com/attachments/347377586017665027/467497200792895498/cuddle-rkA6SU7w-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467499871138611204/cuddle-rylgIUmPW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500001669545985/cuddle-HkUlIUXDZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500500821213194/cuddle-ryURHLXP-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500585667788812/cuddle-r1Q0HImPZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467500675098607618/cuddle-rk2-UL7PW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467501362322604035/cuddle-rJ6zAkc1f.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467501503813386242/cuddle-r1s9RqB7G.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.author.username} Sorry to see you alone...`)
            .setImage('https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been cuddled by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`${message.author.username} Sorry to see you alone...`)
        .setImage('https://cdn.discordapp.com/attachments/466949822604247044/467005738804445185/Slap_3.gif')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///poke
client.on('message', message => {
 if(message.content.startsWith(prefix + 'poke')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.discordapp.com/attachments/467499708068265994/467507303432585227/poke-rJzUe1FwZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509021793058857/poke-B14SJlTQG.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509321412902922/poke-HJZpLxkKDb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509460458405888/poke-SydLxJFwW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509552024256515/poke-BJhIekKwb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509933626097674/poke-B1oSgytwW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509931084480522/poke-r1v6xoh0Z.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509944338481152/poke-H1fMRpYtb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467509925052940288/poke-rkB8eJYPZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467511056240082954/poke-rJ0hlsnR-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467511147927699474/poke-H1x2HxyYD-.gif",
        "https://cdn.weeb.sh/images/rkeaUeJKD-.gif",
        "https://cdn.weeb.sh/images/HkxwlkKPb.gif",
        "https://cdn.weeb.sh/images/SyQzRaFFb.gif",
        "https://cdn.weeb.sh/images/rkaUe1YPb.gif",
        "https://cdn.weeb.sh/images/BkcSekKwb.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`Are you trying to poke thin air...?`)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you have been poked by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`Are you trying to poke thin air...?`)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///tickle
client.on('message', message => {
 if(message.content.startsWith(prefix + "crazy")) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://media.giphy.com/media/12s2Es7u6eFI64/giphy.gif",
        "https://media.giphy.com/media/Qw4X3FDRolaUzXnPLNK/giphy.gif",
        "https://media.giphy.com/media/ftw0GLSRDWZxe/giphy.gif",
        "https://media.giphy.com/media/l4EoSv71T9ssPP31u/giphy.gif",
        "https://media.giphy.com/media/3oEdvdkSja6nXmOoqA/giphy.gif",
        "https://media.giphy.com/media/3oKGzb5AKWomgYrRIs/giphy.gif",
        "https://media.giphy.com/media/3ov9jQy2I0AERF8Jj2/giphy.gif",
        "https://media.giphy.com/media/3o7btTpitVOgsgVtfO/giphy.gif",
        "https://media.giphy.com/media/3ohzdGJK7RQ3v7HknC/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} chu can't crazy yourself...!`)
           .setImage('https://cdn.discordapp.com/attachments/461525860910891008/462634925300908056/SydfnauPb-1.gif/')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} you are crazy`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTitle(`${message.author.username} Am I crazy...? Describe yourself as crazy...`)
       .setImage('https://cdn.discordapp.com/attachments/461525860910891008/462634925300908056/SydfnauPb-1.gif/')
    message.channel.send({
        embed: ghembed
    })
}
});
///end
 
///slap
client.on('message', message => {
 if(message.content.startsWith(prefix + 'tickle')) {
   let args = message.content.split(" ").slice(1);
    let hug = [
        "https://cdn.weeb.sh/images/rkPzIyQi-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599200432160768/tickle-HyjNLkXiZ.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599311002271744/tickle-rybRByXjZ.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/467005567144165377/Cuddle3.gif",
        "https://cdn.discordapp.com/attachments/466949822604247044/466952826917093396/cuddlez.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599392426426369/tickle-SyGQIk7i-.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467599512366612520/tickle-HyPyUymsb.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467607824135094315/tickle-SyQHUy7oW.gif",
        "https://cdn.discordapp.com/attachments/467499708068265994/467607970268708865/tickle-Byj7LJmiW.gif",
        "https://cdn.weeb.sh/images/H1p0ByQo-.gif",
        "https://cdn.weeb.sh/images/SkmEI1mjb.gif",
        "https://78.media.tumblr.com/2d29fdbf47fd756caaea08f44b7eac92/tumblr_inline_ow4u7pIhWJ1u544cj_540.gif",
        "https://78.media.tumblr.com/eb8a0282d62c9697b93cd546b77106f8/tumblr_o505jxtnWk1vpbklao2_500.gif",
        "https://media.giphy.com/media/349HKeODRMQ36/giphy.gif",
        "https://media.giphy.com/media/IRKHf3hD2xsre/giphy.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`*giggles* :heart:`)
            .setImage('')
        message.channel.send({
            embed: ghembed
        })
        return;
     }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setTitle(`${message.mentions.members.first().user.username} you got tickled by ${message.author.username}`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(RANDOM)
        .setTitle(`${message.mentions.members.first().user.username} you got tickled by ${message.author.username}`)
        .setImage('')
    message.channel.send({
        embed: ghembed
    })
}
});
