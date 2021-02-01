const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "sniper",
  alias: ["franco"],

execute (client, message, args){

  const member = message.mentions.members.first() || message.member
  if(!member) return message.channel.send('A quien vas a snipear')
  let author = message.author.username;

  let embedkill = new Discord.MessageEmbed()
  .setTitle(`${author} le dio un snipaso a ${member.user.tag}`)
  .setColor("0x18cbda")
  .setImage("https://media.tenor.com/images/2f10c5bbbb33738fd79de2736d20853b/tenor.gif");
  message.channel.send(embedkill)
  
 }
 
}