const Discord = require('discord.js');
const client = new Discord.Client();
const Instagram = require("user-instagram");
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "instagram",
  alias: ["insta"],

async execute (client, message, args){
 
      if(message.author.bot){//para primero si el autor del mensaje es un bot 
        return ;//returnamos nada simplemente cerramos
    }
    var busqueda = args.join(" ")//creamos una variable busqueda la que sera todos los argumentos
    if(!busqueda){//si no puso ningun argumento (una busqueda) 
        return message.channel.send('por favor pon una busqueda')//returnamos un mensaje en el que le diremos que ponga una busqueda
    }//si no ocurrio nada de lo antierior (no era un bot y si puso una busqueda) hacemos la busqueda
    let TrueFalse = { //creamos una varible la que usaremos despues para poner cosas como que si una cuenta esta verificada si es privada etc
        'true' : "Si",
        'false' : "No"
    }
    message.channel.send('buscando...').then(msg  => { //ponemos un mensaje en el canal y lo obtenemos como msg

    Instagram(busqueda).then(res =>{//con la const intagram que es el npm buscamos los datos de nuestra busqueda y lo obtenemos como res
        const embed = new Discord.MessageEmbed()//creamos un mensaje embed
        .setThumbnail(res.profilePicHD)//a nuestro embed le agregamos un setTumbnail en la que pondremos el logo de la persona que buscamos
        .setColor("GREEN")//Agregamos un setcolor con el que haremos el embed de color verde
        .addField('ID', res.id , true)/*entramos a los resultados de nuestra busqueda y sacamos id si quieres ver todos los datos pues puedes poner un 
        console.log(res)*/
        .addField('Nombre Completo', res.fullName , true)//agregamos otro field en la que sacaremos el full name por ejemplo de fernanflo su full name seria Fernanfloo
        .addField('Apodo', res.username ,true)//creamos otra field en la que buscaremos el apodo de la persona siguiendo con le ejemplo con fernanfllo su apodo seria fernanfloo ya que asi lo tiene puesto
        .addField('Segidores', res.subscribersCount,true)//agregamos otro field en la que pondremos el total de segidores de la persona
        .addField('Siguiendo', res.subscribtions , true)//agregamos otro field en la que sacaremos el total de personas que este usuarios sige
        .addField('publicaciones', res.postsCount , true)//creamoos otro flied en la que entraremos a los datos y sacaremos los post que tiene el usuario
        .addField('Cuenta Reciente', TrueFalse[res.isRecentUser] , true)//esto devolvera si la cuenta se creo hace poco devolvera true o falso para eso isimos una varible con la que solo envse de true / false pondremos Si / no
        .addField('Cuenta Privada', TrueFalse[res.isPrivate] , true)//creamos otra field en la que pondremos si la cuenta es privada y como hisimos con arriba enves de true / false  ponemos Si / No
        .addField('Cuenta Verificada', TrueFalse[res.isVerified],true)//haora creamos otra field en la que devolveremos si la cuenta es privada en true / false que con nuestra variable TrueFalse cambiaremos a por Si / No
        .addField('biografia', res.biography)//agregamos otro field en la que sacaremos la biografia 
        msg.edit(embed)// y editamos el anterior mensaje por nuestro embed
    }).catch(error =>{//en caso algo salga mal como que no encuentre al usuario returnamos lo siguiente
        return message.channel.send('perdon no encontre al usuario intentelo denuevo')
    })//ponemos un mensaje que no encontro al usuario y cerramos
})
  
 }
 
}