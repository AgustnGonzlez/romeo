const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "bipolar",
  alias: ["bipolaridad"],

async execute (client, message, args){
 
  let users =  message.mentions.users.first();
  if (!users) return message.channel.send("Menciona a alguien !")
  if (users === client.user) return message.channel.send("**No puedo calcular eso conmigo!**")



  const random = Math.floor(Math.random() * 100);
  let heard = "";
  if(random < 50) {
    heard='🤷‍♂️';

  }else if(random < 80) {
    heard='🤷‍♂️ ';
  }else if(random < 101) {
    heard='🤷‍♂️';
  }

  let resp = [`El porcetanje de ${users.username} es:`,`Vaya yo calculo que ${users.username} da:`]

  let msg = resp[Math.floor(Math.random() * resp.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${msg}`)
  .setDescription(`${heard} ${random} %${heard}`)
  .setColor("RANDOM")
  message.channel.send(embed)
  
 }
 
}