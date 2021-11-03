const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "905439432168058920";

    var userName = message.author.username;
    var userDiscriminator = message.auhtor.dicriminator;

    var meldingBestaat = false;

    message.guild.channel.chache.array.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            meldingBestaat = true;

            message.reply("Je hebt al een 112 melding!");

            return;

        }


    });

    if (meldingBestaat) return;

    var meldinggemaaktembed = new discord.MessageEmbed()
        .setTitle("Meldkamer - Spijkenisse Roleplay")
        .setAuthor("Meldkamer")
        .setDescription("📞 **|** Er word momenteel verbinding gemaakt met de meldkamer een enkel moment geduld alstublieft...")
        .setFooter("Je word getagged in een kanaal")

    message.channel.send(meldinggemaaktembed)

    message.guild.channel.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.chache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Justitie Meldkamer`)
                        .setDescription(`Hallo ${message.author.username}, je spreekt met de meldkamer beantwoord de vragen hieronder, zodra je dit hebt gedaan zullen er z.s.m. hulpdiensten naar jou locatie komen!`)
                        .setAuthor("Meldkamer")
                        .setFooter('Spijkenisse Roleplay - Meldkamer')

                    message.channel.send(embedParent);

                        const questions = [
                            "**Wat is je naam?**",
                            "**Wat is je Playstation Naam? (Locatie)**",
                            "**Wat is er aan de hand? (reden)**",
                        ];
                
                        let collectCounter = 0;
                        let endCounter = 0;
                
                        const filter = (m) => m.author.id === message.author.id;
                
                        const appStart = await message.channel.send(questions[collectCounter++]);
                        const channel = appStart.channel;
                
                        const collector = channel.createMessageCollector(filter);
                
                        collector.on("collect", () => {
                            if (collectCounter < questions.length) {
                                channel.send(questions[collectCounter++]);
                            } else {
                                collector.stop("fulFilled");
                            }
                        });
            
                        collector.on("end", (collected, reason) => {
                            if (reason === "fulFilled") {
                                let index = 1;
                                const mappedResponses = collected
                                .map((msg) => {
                                    return `${index++}. ${questions[endCounter++]}\n${msg.content}`;
                                })
                                .join("\n\n");
                
                                message.channel.send(
                                    new discord.MessageEmbed()
                                        .setAuthor(
                                            message.author.tag, 
                                            message.author.displayAvatarURL({ dynamic: true})
                                        )
                                        .setTitle('Spijkenisse Roleplay - 112 Melding')
                                        .setThumbnail(`https://pbs.twimg.com/profile_images/746720808454717440/Mt-tSDgi_400x400.jpg`)
                                        .setDescription(mappedResponses)
                                        .setColor('#ff6047')
                                        .setTimestamp()
                                        .setFooter('Spijkenisse Roleplay • Meldkamer • Alle Rechten Voorbehoud')
                                );
                            }
                        });

                }


            )


        }


    )

}

module.exports.help = {
    name: "112melding",
    aliases: "status",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}