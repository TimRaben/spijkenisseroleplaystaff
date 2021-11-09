const discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

client.on('guildMemberAdd', guildMember => {

    let button = new MessageButton()
            .setStyle('url')
            .setURL('https://sway.office.com/QJVFr8icY5GWzJgd?ref=Link2')
            .setLabel('📚 Regels')
            .setID('click_to_function');

    var embed = new discord.MessageEmbed()
        .setTitle(`Welkom <@${guildMember.user.id}>`)
        .setAuthor("Spijkenisse Roleplay")
        .setDescription(`Hey <@${guildMember.user.id}>, leuk dat je onze Server bent gejoined! Hopelijk heb je een fijne en leuke tijd op onze Server!\n\nLees wel even snel de regels door :wink:\n\n**Totale Members:** ${message.guild.memberCount}`)
        .setThumbnail("https://media.discordapp.net/attachments/866336989891264532/905036514910695454/static_15.png?width=205&height=205")
        .setFooter("Spijkenisse Roleplay • Welkom • Alle Rechten Voorbehoud")
        .setTimestamp();

        var channel = message.guild.channels.cache.get("902193674576863292");

    channel.send(embed, button);

}) 