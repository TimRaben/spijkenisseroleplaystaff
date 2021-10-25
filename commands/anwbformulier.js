const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setColor("YELLOW")
            .setTitle("ANWB Formulier - Spijkenisse Roleplay")
            .setDescription("Welkom bij de Sollicitatie Procedure van de ANWB vul het onderstaande formulier in en wellicht zien wij jou binnenkort terug bij de ANWB!\n\n**Sollicitatie Formulier**\n**Naam:** *wat is jou naam?*\n**Leeftijd:** *wat is je leeftijd?*\n**PSN Naam:** *wat is je playstation naam?*\n**Discord Naam:** *wat is je discord naam + tag? bijvoorbeeld Jan#0001*\n\n**Motivatie:** *wat motiveert jou om anwb te worden?*\n**Ervaring:** *wat was je ervaring in het anwb werk?*\n**Speeltijd:** *hoevaak kan jij bij de roleplays zijn in 1 week? maximaal 14*\n**Wat vind je het leukste bij ANWB:** *wat vind je het leukste aan het vak*\n\n**Toevoegingen:** *wil je nog iets toevoegen? dit is niet verplicht*\n**Contact:** *via waar kunnen we je bereiken?*")
            .setFooter("Spijkenisse Roleplay - Sollicitaties")

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "anwb"
}

