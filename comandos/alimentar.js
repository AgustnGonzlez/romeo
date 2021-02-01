const Discord = require('discord.js');
const client = new Discord.Client();
const star = require('star-labs');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "alimentar",
  alias: ["feed"],

execute (client, message, args){
 
  let aA = message.author
  let aB = message.mentions.users.first()
  if(!aB) return message.channel.send('Menciona al usuario que quieras alimentar');
  const aC = new Discord.MessageEmbed()
  .setDescription(aA.tag+' alimento a '+aB.tag)
  .setImage(star.feed())
  .setFooter(" RomeoBot | alimento", client.user.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp();
  message.channel.send(aC)
  
 }
 
}