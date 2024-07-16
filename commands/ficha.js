const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('Monte um(a) aventureiro(a) do seu jeito 🧝')
 .setColor("#5704e9")
.setDescription("Aqui vai o link para prencher a ficha do(a) aventureiro(a)\nhttps://meublogderpg.files.wordpress.com/2014/07/ficha-de-personagem-dd-5e-completc3a1vel-pt.pdf \nA ficha está na quinta edição de D&D \nMais para frente irei atulizar as fichas para podermos jogar o RPG Call of cthulhu.")
 .setTimestamp()
 .setImage('https://1.bp.blogspot.com/-5Kk0LwfiQf8/VHTbc6zamUI/AAAAAAAABaQ/3RTDxa8EfJQ/s1600/Imagem.png')
 .setAuthor(message.author.tag)
);  
}
}