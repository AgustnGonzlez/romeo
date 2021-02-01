const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["h"],

async execute (client, message, args){

  const espera = new Discord.MessageEmbed()
  .setTitle("Apartado de ayuda")
  .setDescription("Espere mientras cargan las reacciones")

  const helped = new Discord.MessageEmbed()
  .setTitle("Bienvenido al apartado de ayuda")
  .setDescription("Reacciona en 🤣 para ir al apartado de diversion\n\nReacciona en ️⚔️ para ir al apartado de Moderacion\n\nReacciona en 🔨 para ir al apartado de Utilidad\n\nReacciona en 🔞 para ir al apartado NSFW\n\nReacciona en 🌟 para volver a la pagina principal")
  .setFooter("Centro de ayuda")
  .setTimestamp()
  .setColor("RANDOM")

  const embeddiversion = new Discord.MessageEmbed()
  .addField('8ball', 'Obten la respuesta a todas tus preguntas')
  .addField('love', 'Calcula el amor entre vos y la persona que menciones')
  .addField('sniper', 'Asesina al usuario mencionado con un snipaso')
  .addField('rps', 'Juega piedra papel o tijera contra Romeo')
  .addField('me-llaman-romeo', 'Descubrelo :wink:')
  .addField('alimentar', 'Alimenta a un usuario')
  .addField('abrazar', 'Abraza a un usuario')
  .addField('patear', 'Patea a un usuario')
  .addField('kiss', 'Besa a un usuario')
  .setFooter("Centro de ayuda")
  .setTimestamp()
  .setColor("YELLOW")

  const embedmoderacion = new Discord.MessageEmbed()
  .addField('setprefix', 'Cambia el prefix a alguno que te guste')
  .addField('clear', 'Borrar cierta cantidad de mensajes (Maximo 100)')
  .addField('ban', 'Banear a un usuario del servidor')
  .addField('kick', 'Expulsa a un usuario del servidor')
  .addField('hackban', 'Banear a un usuario de forma que jamas pueda volver')
  .addField('say', 'Haz que el bot diga un mensaje especifico')
  .addField('say-c', 'Haz que el bot diga un mensaje especifico en un canal especifico')
  .addField('nickname', 'Cambia el apodo del usuario mencionado')
  .setFooter("Centro de ayuda")
  .setTimestamp()
  .setColor("BLUE")

  const embedutilidad = new Discord.MessageEmbed()
  .addField('avatar', 'Muestra el avatar tuyo o de un usuario especifico')
  .addField('user', 'Pone la informacion del usuario que desees')
  .setFooter("Centro de ayuda")
  .setTimestamp()
  .setColor("ORANGE")

  const embednsfw = new Discord.MessageEmbed()
  .addField('4k', 'Porno en 4k')
  .addField('boobs', 'Porno de pechos')
  .addField('ass', 'Porno de culos')
  .addField('porngif', 'Porno en GIF')
  .addField('pussy', 'Porno de pussys')
  .addField('anal', 'Porno anal')
  .addField('Hentai', 'Hentai para otakus')
  .addField('Hentaiass', 'Hentai de culos para otakus')
  .addField('solo', 'No te voy a mentir, nose que hace')
  .addField('wallpaperxxx', 'Fondos de pantallas xxx')
  .setFooter("Centro de ayuda")
  .setTimestamp()
  .setColor("RED")

  message.channel.send(helped).then(msg => {
    msg.react('🤣')
    msg.react('⚔️') 
    msg.react('🔨')
    msg.react('🔞')
    msg.react('🌟')
    msg.awaitReactions((reaction, user) => {
      if(message.author.id !== user.id) return;
      if(reaction.emoji.name === '🌟') {
        msg.edit(helped)
      }
      if(reaction.emoji.name === '🔞') {
        msg.edit(embednsfw)
      }
      if(reaction.emoji.name === '🔨') {
        msg.edit(embedutilidad)
      }
      if(reaction.emoji.name === '⚔️') {
        msg.edit(embedmoderacion)
      }
      if(reaction.emoji.name === '🤣') {
        msg.edit(embeddiversion)
      }
    })
  })

  //🤣⚔️🔨🔞🌟

 }

}