const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    message.delete();

    if (!args[0]) return message.reply(":x: - FOUT! Geef een geldige type overval op! Kies uit: Winkel/Juwelier/Bank.");

    if (!args[1]) return message.reply(":x: - FOUT! Geef een geldige Playstation Naam op zodat Justitie kan weten waar de overval zich plaats vind.");

    var overvalEmbed = new discord.MessageEmbed()
            .setTitle("Spijkenisse Roleplay - Overval")
            .setDescription(`**Er is een overval gestart! Bekijk hier onder de nodige Informatie! De Hulpdiensten zijn snel ter plaatsen! Heb nog even geduld!**\n\n__Informatie:__\n**Type Overval:** ${args[0]}\n**Discord Naam:** ${message.member.author}\n**Playstation naam:** ${args[1]}\n**Tijd van melding:** ${message.createdTimestamp}\n**Hulpdiensten:** Politie, DSI & KMAR`)
            .setTimestamp()
            .setFooter("Spijkenisse Roleplay • Overval")
            .setColor("RED")

        return message.channel.send('<@&866336898400911361> <@&866336951632003072> <@&866336909693550612>', overvalEmbed);
}

    module.exports.help = {
    name: "overval"
}