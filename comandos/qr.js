const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "qr",
  alias: ["qr"],

async execute (client, message, args){
  
  let text = args.join(" ");

  if(!text) {
    return message.channel.send("Tenes que especificar un texto")
  }

  let pleaseWait = await message.channel.send("Espera un momento...");

  let embed = new Discord.MessageEmbed()
  .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`)
  .setColor('GREEN');

  message.channel.send(embed).then(() => pleaseWait.delete());
  
 }
 
}