const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "905439432168058920";

    var userName = message.author.username;
    var user = message.author;
    var userDiscriminator = message.author.discriminator;

    var meldingBestaat = false;

    message.guild.channels.cache.forEach(channel => {

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

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        VIEW_CHANNEL: true,
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

                    var staff = "866336898400911361";
                    var person = message.author;

                    var vraag1 = new discord.MessageEmbed()
                        .setTitle("Meldkamer")
                        .setColor("RED")
                        .setDescription("Wat is je naam?")
                    
                    var vraag2 = new discord.MessageEmbed()
                        .setTitle("Meldkamer")
                        .setColor("RED")
                        .setDescription("Wat is je Playstation Naam? (dit is belangrijk zo kunnen wij weten waar je bent)")
                    
                    var vraag3 = new discord.MessageEmbed()
                        .setTitle("Meldkamer")
                        .setColor("RED")
                        .setDescription("Wat gebeurd er/waarvan wil je melding doen? (waarom heb je deze melding gemaakt)")

                    settedParent.send(message.author);
                    settedParent.send("<@&866336898400911361>");
                    settedParent.send(embedParent);
                    settedParent.send(vraag1);

                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                        var antwoord1 = antwoord.first();;
                        settedParent.send(vraag2);
                    
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                            var antwoord2 = antwoord.first();;
                            settedParent.send(vraag3);
                        
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                var antwoord3 = antwoord.first();;

                                var melding = new discord.MessageEmbed()
                                    .setTitle("112 Melding")
                                    .setColor("RED")
                                    .setThumbnail("https://pbs.twimg.com/profile_images/746720808454717440/Mt-tSDgi_400x400.jpg")
                                    .setDescription(`Hieronder vind je alle informatie!\n\n**Naam Melder:**\n${antwoord1}\n**Locatie (PSN):**\n${antwoord2}\n**Melding:**\n${antwoord3}\n\nDe hulpdiensten zijn z.s.m. onderweg!`)

                                settedParent.bulkDelete(6).then(
                                    settedParent.send("<@&866336898400911361>", melding)
                                )
                                })
                            })
                        })
                    })

                    settedParent.send(`Gelukt!`).then(msg => msg.delete({ timeout: 1000}));

                })
}


    module.exports.help = {
        name: "meldkamer",
        aliases: "status",
        description: "Geeft al de verschillende commands",
        category: "Informatie",
    }