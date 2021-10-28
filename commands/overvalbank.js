const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.channel.name.includes("bankov-", "overval-", "ovbank-")) return message.channel.send(":x: **|** Dit is niet mogelijk in dit kanaal! Maak een overval kanaal aan en typ dit dan nogmaals.")

    var begin = new Date((time * 1000));

    if (begin) return message.channel.send('Type spn/bovs1')

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Je hebt succesvol een bank overval gestart, volg alle instructies die worden meegegeven.\n\nHet begint in 10 seconden, wees ervan bewust dat het verplicht is bij de bank te staan, de Politie is gealameerd!")
            .setColor("GREEN")
            .setTitle('Bank Overval Gestart...')
            .setFooter("Spijkenisse Roleplay - Overvallen")
            .setTimestamp()

        return message.channel.send(serverEmbed);



}

module.exports.help = {
    name: "bankovstart"
}