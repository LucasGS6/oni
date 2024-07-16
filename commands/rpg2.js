const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('Tire suas duvidas')
 .setColor("#5704e9")
.setDescription("tire suas duvidas no Livro do jogador e no Livro do mestre. Olhe o sumario para ver algo exato. \nLivro do jogador https://dnd5ed.github.io/livros/LDJ.pdf \nLivro do mestre https://dnd5ed.github.io/livros/GM.pdf")
 .setTimestamp()
 .setImage('https://1.bp.blogspot.com/-rXTh4qKcBRU/XlkL1O-JRTI/AAAAAAAAEnE/2xg7PGkz2Hogbfu0HX2D2vv2oDKASdRHwCNcBGAsYHQ/s640/Dica%2Bde%2BMestre%2B-%2BAs%2Btrapa%25C3%25A7as%2Bdo%2Bmestre%2Be%2Ba%2Bpercep%25C3%25A7%25C3%25A3o%2Bdos%2Bjogadores.jpg')
 .setAuthor(message.author.tag)
);  
}
}