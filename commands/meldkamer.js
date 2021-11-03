const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    message.delete();

    if (!args[0]) return message.reply(":x: - FOUT! Geef een geldige Playstation Naam op zodat Justitie kan weten waar de overval zich plaats vind.");

    if (!args[1]) return message.reply(":x: - Geef een oorzaak van een melding op! Dus laat de reden weten waarom je een 112 melding wilt maken.")

    var meldkamerEmbed = new discord.MessageEmbed()
            .setTitle("Spijkenisse Roleplay - Meldkamer")
            .setDescription(`**112 Melding**\n\nEr is een melding binnengekomen bij de meldkamer! Bekijk hier onder de nodige Informatie! De Hulpdiensten zijn z.s.m. onderweg! Heb nog even geduld!**\n\n__Informatie:__\n**Locatie (PSN):** ${args[0]}\n**Discord Naam:** ${message.member.id}\n**Playstation naam:** ${args.slice(1).join(" ")}\n**Hulpdiensten:** Politie\n\nEen melding kan gemaakt worden met ``spn/112 (playstation naam) (melding)```)
            .setThumbnail("https://pbs.twimg.com/profile_images/746720808454717440/Mt-tSDgi_400x400.jpg")
            .setTimestamp()
            .setFooter("Spijkenisse Roleplay • Overval • Alle Rechten Voorbehoud")
            .setColor("RED")

        return message.channel.send('<@&866336898400911361>', meldkamerEmbed);
}

    module.exports.help = {
    name: "112"
}