const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    var boeteEmbed = new discord.MessageEmbed()
            .setDescription(`Je hebt een Boete gekregen, hieronder vind je de informatie van de boete!\n\n**__**Informatie**__\n**Persoon:** ${args[0]}\n**Agent:** ${message.author}\n**Boete:** ${args[1]},- euro\n**Celstraf:** ${args[2]} Maanden\n**Celstraf waarvan Voorwaardelijk:** ${args[3]} Maanden\n**Strafbare Feiten:** ${args.slice(4).join(" ")}`)
            .setColor("RED")
            .setTitle("Spijkenisse Roleplay - Boete Systeem")
            .setTimestamp()
            .setFooter("Boete Systeem • ")

        return message.channel.send(boeteEmbed);

}

module.exports.help = {
    name: "boete"
}