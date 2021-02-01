const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hackban",
  alias: ["banid"],

async execute (client, message, args){
 
  const perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("Jaja vos no podes")

  const id = args.join(" ")
  if(!id) return  message.channel.send("Necesito la id! :wink:")

  const member = await client.users.fetch(id)
  message.guild.members.ban(member.id)

  message.channel.send(`El bldo de **${member.username}** se fue baneadaso`)
  
 }
 
}