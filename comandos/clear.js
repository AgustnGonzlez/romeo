const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear",
  alias: ["c"],

execute (client, message, args){
 
 const cantidad = args.join(" ")

 var perms = message.member.hasPermission("MANAGE_MESSAGES")
 if(!perms) return message.channel.send("No tenes permisos suficientes :wink:")

 if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("JAJA, yo no puedo con eso")

 if(!cantidad) return message.channel.send("Cuantos mensajes queres borrar")

 if(cantidad === '0') return message.channel.send("Como que no se puede borrar 0 cosas, Digo yo :man_shrugging:")

 if(cantidad > 100) return message.channel.send("No podes borrar mas de 100 mensajes!")
 
 message.delete();

 message.channel.bulkDelete(cantidad).then(()=> {
   message.channel.send(`**${cantidad}** mensajes ya no estan entre nosotros!`).then(m => m.delete({timeout: 6000}))
 })

 }
 
}