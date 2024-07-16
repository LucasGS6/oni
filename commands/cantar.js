const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'Me diga então\nDiga então, como fiquei assim?\nSe há um outro alguém\nPreso dentro de mim?\nEstou perdido, bem perdido\nNo mundo onde acordei\nE só te vejo rir, mas por que\nEu não sei 🎶🎶',
  'Agora eu sei, exatamente como andar de skate\nBom recomeçar, poder andar de skate\nPois eu me lembro de tudo irmão\nAndava de skate também\nO homem quando anda de skate\nnão anda de skate com ninguém🎶🎶',
  'Eu tava por ai, andando na minha bike🚲 \nE no meu pézinho tinha um tênis da nike 👟 ✔️\nEu olhei pro lado e vi um coelho🐇\nHagarauí guetchuí,Hama Agavaní geluí I candesi, pentelho!',
  'Se ela dança eu danço\nSe ela dança eu danço💃\nSe ela dança eu \ndanço💃, falei com o DJ🎧🎶 \nPra fazer diferente\nBotar chapa quente🔥 pra gente dançar💃\nMe diz quem é a menina 👧\nque dança e facinar💃🌠\nQue alucina querendo beijar 😘 ',
  'Tirap Tchoron! Tirap Tchoron!🎶\nOh! Ah! Oh! Ah!🎶\nTirap Tchoron! Tirap Tchoron!🎶\nOh! Ah!🎶\nDeu mole pra caramba\nÉ um tremendo vacilão\nTá todo arrependido\nVai comer na minha mão😋👏\nPensou que era o cara\nMas não é bem assim\nAgora baba😌, bobo\nVai correr 🏃  atrás de mim🎶\nOh! Ah! Oh! Ah!🎶\nTirap Tchoron! Tirap Tchoron!🎶\nOh! Ah!🎶'
];

var rand = list[Math.floor(Math.random() * list.length)];

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('Canta cmg 🎶🎶!!!')
 .setColor("#5704e9")
 .setDescription(rand)
 .setTimestamp()
 .setAuthor(message.author.tag)
);  
}
}