const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'https://i.makeagif.com/media/3-06-2019/muL3xN.gif',
  'https://pa1.narvii.com/5920/ed1a3f6cdc6dcc2af589e1b35ea5f3eba14e0b2e_hq.gif',
  'https://i.pinimg.com/originals/86/56/d4/8656d413668a2bce6d659323f4c99f14.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('coquinha gelada hmmm')
.setColor("#5704e9")
.setDescription(`${message.author} **acaba de se deliciar com uma coquinha gelada** `)
 .setImage(rand)
 .setTimestamp()
 .setAuthor(message.author.tag)
);  
}
}