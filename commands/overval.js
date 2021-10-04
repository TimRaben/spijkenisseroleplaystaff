const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    message.delete();

    if (!args[0]) return message.reply(":x: - FOUT! Geef een geldige type overval op! Kies uit: Winkel/Juwelier/Bank.");

    if (!args[1]) return message.reply(":x: - FOUT! Geef een geldige Playstation Naam op zodat Justitie kan weten waar de overval zich plaats vind.");

    var overvalEmbed = new discord.MessageEmbed()
            .setTitle("Spijkenisse Roleplay - Overval")
            .setDescription(`**OVERVAL!!**\n\nEr is een overval gestart! Bekijk hier onder de nodige Informatie! De Hulpdiensten zijn snel ter plaatsen! Heb nog even geduld!**\n\n__Informatie:__\n**Type Overval:** ${args[0]}\n**Discord Naam:** ${message.member.username}\n**Playstation naam:** ${args[1]}\n**Hulpdiensten:** Politie, DSI & KMAR`)
            .setThumbnail("https://pbs.twimg.com/profile_images/746720808454717440/Mt-tSDgi_400x400.jpg")
            .setTimestamp()
            .setFooter("Spijkenisse Roleplay • Overval")
            .setColor("RED")

        return message.channel.send('<@&866336898400911361> <@&866336951632003072> <@&866336909693550612>', overvalEmbed);
}

    module.exports.help = {
    name: "overval"
}