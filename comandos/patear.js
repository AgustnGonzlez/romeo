const Discord = require('discord.js');
const client = new Discord.Client();
const star = require('star-labs');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "patada",
  alias: ["patear"],

execute (client, message, args){
 
  let aA = message.author
  let aB = message.mentions.users.first()
  if(!aB) return message.channel.send('Menciona al usuario que quieras patear');
  const aC = new Discord.MessageEmbed()
  .setDescription(aA.tag+' le dio una patada a '+aB.tag)
  .setImage(star.kick())
  .setFooter(" RomeoBot | Patada", client.user.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp();
  message.channel.send(aC)
  
 }
 
}