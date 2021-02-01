const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "puterio",
  alias: ["puta"],

async execute (client, message, args){
 
  let users =  message.mentions.users.first();
  if (!users) return message.channel.send("Menciona a alguien !")
  if (users === client.user) return message.channel.send("**No puedo calcular eso conmigo!**")



  const random = Math.floor(Math.random() * 100);
  let heard = "";
  if(random < 50) {
    heard=':hot_face:';

  }else if(random < 80) {
    heard=':hot_face: ';
  }else if(random < 101) {
    heard=':hot_face:';
  }

  let resp = [`El porcetanje de puterio de ${users.username} es:`]

  let msg = resp[Math.floor(Math.random() * resp.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${msg}`)
  .setDescription(`${heard} ${random} %${heard}`)
  .setColor(0xff4d4d)
  message.channel.send(embed)
  
 }
 
}