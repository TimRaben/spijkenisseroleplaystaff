const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var wetboekEmbed = new discord.MessageEmbed()
            .setTitle('📖 • Spijkenisse Roleplay - Wetboek • 📖')
            .setDescription(`Beste Inwoners,\n\nWe hebben een Wetboek! We hebben hier veel tijd ingestoken, in dit Wetboek vind je de belangrijkste Wetten & Reglementen, hier dient ook elke Inwoner zich aan te houden, zodra u deze Wet overtreed hebben dat gevolgen!\n\nOok zijn de Straffen aangepast en zijn er Strafbare feiten weggehaald & toegevoegd! de nieuwe straffen & boetes zijn te zien in Boek Strafrecht, lees dit Wetboek goed door om misverstanden tegen te gaan, hopelijk vinden jullie dit een leuke toevoegingen aan de Roleplay!\n\n**Let op! Er kunnen ieder moment aanpassingen zijn aan het Wetboek & Strafrechten houd hier rekening mee!**\n\n**:link: Link •** https://docs.google.com/spreadsheets/d/1IhZP8skUP_Zf4tj48wKecBxDZ5_cjrAD8kPY6EBQeog/edit\n\n
            **❔ - Vragen •** Stuur een Privé Bericht naar ${args[0]}\n\n** 🔍 - Opmerkingen •** Stuur een Privé Bericht naar ${args[0]}\n\nMet vriendelijke groet,\n**Justitie - Spijkenisse Roleplay**\n*Spijkenisse Roleplay || NL/BE* `)
            .setColor("#ff4400")
            .setThumbnail('https://images-ext-1.discordapp.net/external/L07ODu0HdOMNLwViR1qpWq0US6vL2yWJAnwuehx1_Ts/https/images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%253Fsize%253D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png')
            .setTimestamp()
            .setFooter('Officiële Wetboek • Goedgekeurd door het Raadsteam van SPN-RP', 'https://images-ext-1.discordapp.net/external/L07ODu0HdOMNLwViR1qpWq0US6vL2yWJAnwuehx1_Ts/https/images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%253Fsize%253D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png');

        return message.channel.send(wetboekEmbed);

}

module.exports.help = {
    name: "wetboeksetup"
}