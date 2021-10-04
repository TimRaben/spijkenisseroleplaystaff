const discord = require("discord.js");

module.exports = {
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const questions = [
            "**Wat is jou Naam + Achternaam?**",
            "**Wat is jou Leeftijd in de Roleplay?**",
            "**Wat is jou Geboortedatum in de Roleplay?**",
            "**Wat is jou Geslacht? (Man of Vrouw)**",
            "**Wat is je Lengte?**",
            "**Wat is jou Playstation Naam?**",
        ];

        let collectCounter = 0;
        let endCounter = 0;

        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () => {
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++]);
            } else {
                collector.stop("fulFilled");
            }
        });

        const appsChannel = client.channels.cache.get('894497740246114314');
        collector.on("end", (collected, reason) => {
            if (reason === "fulFilled") {
                let index = 1;
                const mappedResponses = collected
                .map((msg) => {
                    return `${index++}. ${questions[endCounter++]}\n${msg.content}`;
                })
                .join("\n\n");

                appsChannel.send(
                    new discord.MessageEmbed()
                        .setAuthor(
                            message.author.tag, 
                            message.author.displayAvatarURL({ dynamic: true})
                        )
                        .setTitle('Spijkenisse Roleplay - Identiteitskaart')
                        .addField('Spijkenisse Indentiteitskaart', `<https://cdn.discordapp.com/emojis/889759629305864253.png?size=128> - Koninklijk der Spijkenisse`)
                        .addField('Kingdom of the Spijkenisse Identity Card', 'Spijkenisse Roleplay')
                        .setDescription(mappedResponses)
                        .setColor('#ff6047')
                        .setTimestamp()
                );
            }
        });
    },
};

module.exports.help = {
    name: "id",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}