const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //!giveaway aantalSpeler tijd berichtjeTekst test test

    var item = "";
    var time;
    var winnerCount;

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **|** Jij hebt niet de juiste machtigingen om een giveaway te hosten!");

    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(" ");

    if (!winnerCount) return message.reply("Gebruik: ``spn/giveawayhost (Hoeveelheid winnaars) (Hoelang de giveway duurt) ()``");
    if (!time) return message.reply("Geen tijd opgegeven");
    if (!item) return message.reply("Geen winnaars item opgegeven");

    message.delete();

    var date = new Date().getTime();
    var dateEnd = new Date(date + (time * 1000));

    var giveawayEmbed = new discord.MessageEmbed()
        .setTitle("🎉 **• Spijkenisse Roleplay - GIVEAWAY •** 🎉")
        .setFooter(`Spijkenisse Roleplay • Giveaway Systeem`)
        .setTimestamp()
        .setColor("ORANGE")
        .setDescription(`Jaja! We hebben weer een leuke giveaway namelijk ${args.slice(2).join(" ")} vind hier onder extra informatie!\n\n__**Informatie:**__\n**Prijs:** ${args.slice(1).join(" ")}\n**Aantal Winnaars:** ${winnerCount} Winnaar(s)\n**Host:** ${message.author}\n**Eindigt op:** ${dateEnd}`);

    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");

    setTimeout(function () {

        var random = 0;
        var winners = [];
        var inList = false;

        var peopleReacted = embedSend.reactions.cache.get("🎉").users.cache.array();

        for (let i = 0; i < peopleReacted.length; i++) {

            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }

        }

        if (peopleReacted.length == 0) {
            return message.channel.send("**HELAAS!** • Niemand heeft gewonnen dus ik win!");
        }

        if (peopleReacted.length < winnerCount) {
            return message.channel.send("**HELAAS!** • Niemand heeft gewonnen dus ik win!");
        }

        for (let y = 0; y < winnerCount; y++) {

            inList = false;

            random = Math.floor(Math.random() * peopleReacted.length);

            for (let o = 0; o < winners.length; o++) {

                if (winners[o] == peopleReacted[random]) {
                    inList = true;
                    y--;
                    break;
                }

            }

            if (!inList) {
                winners.push(peopleReacted[random]);
            }

        }

        for (let y = 0; y < winners.length; y++) {

            message.channel.send("**GEFELICITEERD!** • Proficiat: " + winners[y].username + `Je hebt ${item} gewonnen!`);

        }

    }, time * 1000)

}

module.exports.help = {
    name: "giveaway",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}