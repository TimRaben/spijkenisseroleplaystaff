const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Politie Formulier - Spijkenisse Roleplay")
            .setDescription("Welkom bij de Sollicitatie Procedure van de Poltie vul het onderstaande formulier in en wellicht zien wij jou binnenkort terug bij de Politie!\n\n**Sollicitatie Formulier**\n**Naam:** *wat is jou naam?*\n**Leeftijd:** *wat is je leeftijd?*\n**PSN Naam:** *wat is je playstation naam?*\n**Discord Naam:** *wat is je discord naam + tag? bijvoorbeeld Jan#0001*\n\n**Motivatie:** *wat motiveert jou om politie te worden?*\n**Ervaring:** *wat was je ervaring in het politie werk?*\n**Speeltijd:** *hoevaak kan jij bij de roleplays zijn in 1 week? maximaal 14*\n**Wat vind je het leukste bij de Politie:** *wat vind je het leukste aan het vak*\n\n**Toevoegingen:** *wil je nog iets toevoegen? dit is niet verplicht*\n**Contact:** *via waar kunnen we je bereiken?*")
            .setFooter("Spijkenisse Roleplay • Sollicitaties • Alle Rechten Voorbehoud")

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "politie"
}