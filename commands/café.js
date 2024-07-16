const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'https://p.favim.com/orig/2018/09/08/kawaii-gif-hyouka-Favim.com-6253666.gif',
  'https://i.pinimg.com/originals/85/63/96/8563964b94b21e9826d8f65ce1ba12f4.gif',
  'https://pa1.narvii.com/6506/8c5c0425fbcd8c6ae0e609215f40b8707402fdb7_hq.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('☕Café☕')
.setColor("#5704e9")
.setDescription(`${message.author} **acaba de se deliciar com uma cafézinho** `)
 .setImage(rand)
 .setTimestamp()
 .setAuthor(message.author.tag)
);  
}
}