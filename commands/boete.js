const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("USE_APPLICATION_COMMANDS")) return message.reply("Jij bent GEEN Politie en hebt dus niet de juiste machtigingen om boetes uit te schrijven!");

    if (!args[0]) return message.reply("Gebruik: ``spn/boete (Persoon) (Boete in getallen bijvoorbeeld 650, daarmee bedoel je 650 euro!) (Celstraf in Maanden) (Verwaardelijke Celstraf) (Strafbaar(e) feiten)");

    if (!args[1]) return message.reply("Gebruik: ``spn/boete (Persoon) (Boete in getallen bijvoorbeeld 650, daarmee bedoel je 650 euro!) (Celstraf in Maanden) (Verwaardelijke Celstraf) (Strafbaar(e) feiten)");

    if (!args[2]) return message.reply("Gebruik: ``spn/boete (Persoon) (Boete in getallen bijvoorbeeld 650, daarmee bedoel je 650 euro!) (Celstraf in Maanden) (Verwaardelijke Celstraf) (Strafbaar(e) feiten)");

    if (!args[3]) return message.reply("Gebruik: ``spn/boete (Persoon) (Boete in getallen bijvoorbeeld 650, daarmee bedoel je 650 euro!) (Celstraf in Maanden) (Verwaardelijke Celstraf) (Strafbaar(e) feiten)");

    if (!args[4]) return message.reply("Gebruik: ``spn/boete (Persoon) (Boete in getallen bijvoorbeeld 650, daarmee bedoel je 650 euro!) (Celstraf in Maanden) (Verwaardelijke Celstraf) (Strafbaar(e) feiten)");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");


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