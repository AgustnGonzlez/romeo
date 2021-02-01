const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "anuncio",
  alias: ["anuciar"],

execute (client, message, args){
  let anuncio = args.join(" ") //definimos anuncio
  let perms = message.member.hasPermission("MANAGE_GUILD"); //definimos los permisos necesarios
  let autor = message.author; 

  if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto!**'); //si no tienen permisos
  if(!anuncio) return message.reply(' **debes de escribir un anuncio!**') //si no han escrito el anuncio
  const embed = new Discord.MessageEmbed()
  .setTitle('Anuncio')
  .setDescription(anuncio)
  .addField('Anuncio por:', `${message.author}`)
  .setColor('#00ff11')
  message.channel.send(embed)  
  message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**')
  }
}