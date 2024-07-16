const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('funcionamento dos codigos ｡◕‿◕｡')
 .setColor("#5704e9")
.setDescription("(っ◔◡◔)っ ♥ esses sao meus comandos ♥\nmeu prefixo é `o!`\nduvidas em um comando ? \n👿 \navatar:gera um imagem do seu perfil ao ser usado \nbeijar: use o comando `o!beijar` em seguida marque o `@` de um usuario para beijar ele \nmamar: use o comando `o!mamada` em seguida marque o `@` de um usuario para mamar ele \nsugar: use o comando `o!sugar` em seguida marque o `@` de um usuario para sugar ele \natirar: use o comando `o!atirar` em seguida marque o `@` de um usuario para atirar nele \nexplodir: use o comando `o!explodir` em seguida marque o `@` de um usuario para explodir ele \ncafé: use o comando `o!café` para tomar café \nbreja: use o comando `o!breja` para tomar uma cerveja \ncoquinha: use o comando `o!coquinha` para tomar uma coquinha gelada \nloli:descubra por si só \ntuégay:use o comando `o!tuégay` em seguida marque o `@` de um usuario para ver se ele é\ncantar:o bot canta ")
 .setTimestamp()
 .setImage('https://cdn.discordapp.com/attachments/787677860558667797/810540379128594452/1613314536495.png')
 .setAuthor(message.author.tag)
);  
}
}