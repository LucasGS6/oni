const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'https://steamuserimages-a.akamaihd.net/ugc/862856107313203263/97FF16FDA006BF317E56BB6AA58173A51FA45901/?imw=500&imh=275&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('PERDEMO!!!')
.setColor("#5704e9")
.setDescription(`${message.author} **PERDEMO** `)
 .setImage(rand)
 .setTimestamp()
 .setAuthor(message.author.tag)
);  
}
}