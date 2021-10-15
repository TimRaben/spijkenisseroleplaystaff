const discord = require("discord.js");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, prefix, message, args) => {

    help1 = new discord.MessageEmbed()
    .setTitle("Spijkenisse Roleplay - Help Menu")
    .setColor('BLUE')
    .setDescription(`Dit is ons Help Menu! Hieronder staan 2 emoji's eentje met een pijl naar links de andere wijst naar rechts, hieronder zie je alle categorieën met de pagina erbij, ga naar het Help Menu die jij wilt doormiddel van de pijltjes!\n\n**🔰 - Start Menu (Dit Menu) | Pagina 1**📌 - Algemene Commands | Pagina 2**\n**📚 - Informatieve Commands | Pagina 3**\n**🔨 - Staff Commands |  Pagina 4**\n**🎵 - Muziek Commands | Pagina 5**`)
    .setFooter('Spijkenisse Roleplay • Help Menu')
    .setTimestamp()

    algemenecommands = new discord.MessageEmbed()
    .setTitle("📌 - Help Menu - Algemene Commands - 📌")
    .setDiscription(`Zie hier alle Algemene Commands!\n\n**spn/avatar -** Zie iemand Profiel Foto/Gif\n**spn/id -** Maak een Identiteitskaart\n**spn/overval -** Start een Overval\n**!suggest -** Laat een Idee achter waarmee wij de Server kunnen verbeteren!\n**!rank -** Zie jou huidige Level!\n**spn/ping -** Zie de Ping van de BOT\n\n**Soon...** binnenkort word er meer toegevoegd laat vooral je ideeën achter doormiddel van !suggest (suggestie)`)
    .setColor('GREEN')
    .setFooter('Spijkenisse Roleplay • Help Menu')
    .setTimestamp()

    infocommands = new discord.MessageEmbed()
    .setTitle("📚 - Help Menu - Informatieve Commands - 📚")
    .setDiscription(`Zie hier alle Informatieve Commands!\n\n**spn/info -** *nog niet beschikbaar..*\n**spn/serverinfo -** Zie de Server Informatie\n**spn/overval -** Start een Overval\n\n**Soon...** binnenkort word er meer toegevoegd laat vooral je ideeën achter doormiddel van !suggest (suggestie)\n**spn/ping -** Zie de Status van de BOT!`)
    .setColor('ORANGE')
    .setFooter('Spijkenisse Roleplay • Help Menu')
    .setTimestamp()


    const pages = {
        help1,
        algemenecommands,
        infocommands
    }

    const emoji = ["⬅", "➡"]

    const timeout = '100000'

    pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "help"
}