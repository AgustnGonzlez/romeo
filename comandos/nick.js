const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "nickname",
  alias: ["apodo"],

execute (client, message, args){

  let user = message.mentions.users.first();
 
  if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('No podes cambiar el apodo de nadie :rofl:')
  const member = message.mentions.members.first();
  if(!member) return message.channel.send('A quien le queres cambiar el apodo')

  if (!message.guild.member(user).bannable) return message.reply('No puedo cambiar el apodo de este');

  if(!args.slice(1).join(" ")) return message.channel.send(`Que apodo le queres poner a ${member}?`)
  member.setNickname(args.slice(1).join(" ")), message.channel.send(`El apodo de ${member} ahora es ${args.slice(1).join(" ")}`)
  
 }
 
}