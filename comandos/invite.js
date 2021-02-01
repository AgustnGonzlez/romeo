const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invite",
  alias: ["invitar", "invitacion"],

execute (client, message, args){
 
  const invite = new Discord.MessageEmbed()
  .setTitle("**Como invitar a RomeoBot**")
  .setDescription("**Para invitar a RomeoBot solo haga click [Aquí](https://discord.com/api/oauth2/authorize?client_id=788116067502260234&permissions=8&scope=bot) **")
  .setTimestamp()
  .setThumbnail("https://i.giphy.com/xT0BKmnD1WVyPA88hy.gif")
  .setColor("RANDOM")
  message.channel.send(invite)
  
 }
 
}