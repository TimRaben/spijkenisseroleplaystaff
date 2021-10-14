const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helpEmbed = new discord.MessageEmbed()
            .setDescription(`__Staff Commando's__\n**spn/ban (persoon) (reden)** - Verban iemand.\n**spn/warn (persoon (reden)** - Geef iemand een Warn.\n**spn/kick (persoon) (reden)** - Verwijder iemand.\n**spn/roleplay-host (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)** - Host een Roleplay.\n**spn/clear (aantal)** - Verwijder een bepaald aantal berichten.\n**spn/giveaway (winnercount) (tijd) (item)** - Host een Giveaway\n\n__Algemene Commando's__\n**spn/help** - Zie dit menu.\n**spn/info** - Krijg Server Info.\n**spn/ping** - Zie de ms snelheid van de BOT.\n**spn/say (bericht)** - Stuur een Commando via de BOT.\n**spn/suggestie (suggestie)** - Geef een suggestie.\n\n__Hulpdiensten Commando's__\n**spn/boete (@persoon) (boete in getallen bijv: 1250) (Celstraf in maanden) (voorwaardelijke celstraf) (Strafbare feit(en)** - Geef iemand een Boete\n**spn/112 (incident) (locatie)** - SOON...\n**spn/overval (bank/winkel/juwelier) (PSN)** - Start een overval.`)
            .setColor("YELLOW")
            .setTitle("Spijkenisse Roleplay - Help Menu")
            .setThumbnail("https://images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%3Fsize%3D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png")
            .setFooter(`Spijkenisse Roleplay • Help Menu`, message.author.displayAvatarURL({ dynamic: true}))
            .setTimestamp()

        return message.channel.send(helpEmbed);

}

module.exports.help = {
    name: "help"
}