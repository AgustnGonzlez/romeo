const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas')
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "love",
  alias: ["ship"],

async execute (client, message, args){

    let first = message.author;
    let second = message.mentions.users.first();
    if(!second) return message.channel.send('Tenes que mencionar un usuario')
    if(args[1]) return message.channel.send('Uso del comando `love <usuario>`')
    let random = Math.floor(Math.random() * 100);//meidor random hasta el 100%
    let img;
    let palabras;

    if (random < 50) {//definimos la variable vacias con un objeto tipo string adentro
      img = "https://cdn.discordapp.com/emojis/767829331514753084.png?v=1";
      palabras = `${first}** Ustedes no tendran nada ni como amigos **${second}`;
    } else if (random < 80) {
      img = "https://cdn.discordapp.com/emojis/76729547839258665.png?v=1";
      palabras = `${first}** Seran Hasta amigo no mas (: **${second}`;
    } else if (random < 101) {
      img = "https://cdn.discordapp.com/emojis/767829273557729310.png?v=1";
      palabras = `${first}** Ustedes estan Unidos Por siempre :D **${second}`;
    }

    const canvas = Canvas.createCanvas(450, 150);//creamos el canvas
    const ctx = canvas.getContext("2d");///2d
    const imagen2 = await Canvas.loadImage(first.displayAvatarURL({ dynamic: false, format: "png" }));//avatar del author
    const imagen1 = await Canvas.loadImage(second.displayAvatarURL({ dynamic: false, format: "png" }));//avatar del usuario mencionado
    const panda = await Canvas.loadImage(img);
    ctx.drawImage(imagen1, 0, 0, 150, 150);
    ctx.drawImage(imagen2, 300, 0, 150, 150);
    ctx.drawImage(panda, 150, 0, 150, 150);

    const attach = new Discord.MessageAttachment(canvas.toBuffer(), "love.png");

    message.channel.send(`${palabras} \n\n:heartbeat:Probabilidad:**${random}%**`, attach).catch(() => message.channel.send('Hubo un eror intente de nuevo'));

 /*
  let users =  message.mentions.users.first();
  if (!users) return message.channel.send("Menciona a alguien !")
  if (users === message.author) return message.channel.send("**No puedes hacer eso contigo mismo**")
  if (users === client.user) return message.channel.send("**No puedo calcular eso conmigo!**")



  const random = Math.floor(Math.random() * 100);
  let heard = "";
  if(random < 50) {
    heard=':broken_heart:';

  }else if(random < 80) {
    heard=':sparkling_heart: ';
  }else if(random < 101) {
    heard=':heart:';
  }

  let resp = [`El porcetanje de ${message.author.username} & ${users.username} son:`,`Valla yo calculo que ${message.author.username} & ${users.username} da a:`]

  let msg = resp[Math.floor(Math.random() * resp.length)]

  const embed = new Discord.MessageEmbed()
  .setAuthor(`${msg}`)
  .setDescription(`${heard} ${random} %${heard}`)
  .setColor(0xff4d4d)
  message.channel.send(embed)

  */
  
 }
 
}