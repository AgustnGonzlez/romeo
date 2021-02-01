const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "RuletaRusa",
  alias: ["ruletarusa"],

execute (client, message, args){
  const randomm = new Discord.MessageEmbed()
  .setTitle('Ruleta rusa!')
  .setDescription('El afortunado es: ' + message.guild.members.cache.random().displayName)
  .setThumbnail('https://i.imgur.com/5Z1rsZO.gif')
  .setColor("RANDOM")
  message.channel.send(randomm)
  
 }
 
}