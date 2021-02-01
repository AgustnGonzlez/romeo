const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require("ms");
/*
module.exports = {
  name: "mute",
  alias: ["tempmute"],

async execute (client, message, args) {

  let user = message.mentions.members.first() || message.guild.members.resolve(args[0]); 

  let razon = args.slice(2).join(" ") || "No específico";

  let rol = message.guild.roles.cache.find(r => r.name.toLowerCase() === "muteado");

  if(!rol) {

    message.channel.send('Rol de mute no creado, espere lo estoy creando y configurando...')

    rol = await message.guild.roles.create({ data: {
      name: 'Muteado',
      color: '#444444'
    }, reason: 'Mute Command'});

    message.guild.channels.cache.forEach((ch) => {
      if(ch.type == "category") return;
      if(!ch.type == "voice") {
        ch.overwritePermissions([{
          id: rol.id,
          deny: ["SPEAK"]
        }]);

      }

        ch.overwritePermissions([{
          id: rol.id,
          deny: ["SEND_MESSAGES"]
        }]);
      });

    message.channel.send('Rol de mute creado :white_check_mark:')
  }
  
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('No podés jaja')
  
    if(!user) {return message.channel.send("Debes mencionar a alguien o introduccir un ID valido!")}

    if(user.roles.cache.size > 1 ? user.roles.cache.has(rol) : user.roles.cache.id === rol.id)  return message.channel.send('Sos un bolud@');

    if(message.member.roles.highest.comparePositionTo(user.roles.highest) === 0) return message.channel.send('a');

    if(user.id === message.author.id) {return message.channel.send("No te puedes mutear!")}

    if(user.id === client.user.id) {return message.channel.send("No puedes mutearme!!")}

    if(!args[1]) {return message.channel.send("Debes añadir un tiempo!")}

    const embedmute = new Discord.MessageEmbed()
    .setTitle("Mute")
    .setDescription(`${user} ha sido muteado!`)
    .addField("Razon:", `${razon}`)
    .addField("Admin/Responsable", `${message.author.username}`)
    .addField("Tiempo", `${args[1]}`)
    user.roles.add(rol, 'Mute Command');
    message.channel.send(embedmute);

    setTimeout(() => {
      user.roles.remove(rol);
      message.channel.send(`El mute de ${user} a terminado`)
    }, ms(args[1]));

  }
}

*/