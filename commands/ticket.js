const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var channel = message.mentions.channels.first();
    if(!channel) return message.reply(":x: **|** Verkeerd Commando! Gebruik: `spn/ticket-setup #channel`");

    var embed = new discord.MessageEmbed()
        .setAuthor("Spijkenisse Roleplay")
        .setTitle("Spijkenisse Roleplay - Ticket Systeem")
        .setDescription("\nKlik op een Emoji onder dit bericht om een ticket aan te maken, dit gaat per categorie dus kijk goed waarvoor je ticket bedoeld is, Bekijk hieronder wat welke Emoji inhoud!\n\n💬 **| Algemeen** *vragen, algemene dingen*\n📚 **| Overig** *overige zaken*\n📌 **| Staff Klachten**\n🔒 **| Lead Ticket** *staff sollicitaties en zaken voor echt alleen lead*\n\n*let op! zodra je Lead Tickets aanmaakt voor algemene dingen kan dit bestraft worden.")
        .setFooter("Spijkenisse Roleplay - Ticket Systeem")
        .setColor("00ff00")

            channel.send(embed)
    
        channel.send(embed).then(async (msg) => {
            await msg.react('💬');
            await msg.react('📚');
            await msg.react('📌');
            await msg.react('🔒');
            message.delete();

        })

('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();
    
    if(user.bot) return;
    
    let ticketid = await settings.get(`${reaction.message.guild.id}-sollicitatie`);
    
    if(!ticketid) return;
    
    if(reaction.message.id == ticketid && reaction.emoji.name == '💬') {
        reaction.users.remove(user);
    
        reaction.message.guild.channels.create(`algemeen-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '866238268357476402',
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}> <@&866336900225957898>`, new discord.MessageEmbed()
            .setTitle(`Welkom ${user.tag}`)
            .setDescription(`Hallo! Bedankt voor het aanmaken van een Ticket, een van onze Staffleden zal u z.s.m. helpen!\n\nStel alvast uw vraag of zeg alvast wat de reden is waarom je deze ticket aanmaakt.`)
            .setColor("BLUE"))
            .setTimestamp()
    
    if(reaction.message.id == ticketid && reaction.emoji.name == '📌') {
        reaction.users.remove(user);
    
        reaction.message.guild.channels.create(`staffklacht-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '882729506077556817',
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}> <@&882729506077556817>`, new discord.MessageEmbed()
            .setTitle(`Welkom ${user.tag}`)
            .setDescription(`Hallo! Bedankt voor het aanmaken van een Ticket, in deze ticket kan jij jou Klacht doen over een Stafflid, Let op! Voor klachten tegen Spelers kunt u een Algemene Ticket aanmaken en dan helpt een van onze Staffleden u daar verder.\n\nBeantwoord de volgende vragen alvast:\n**Tegen wie doe jij jou klacht?** *(naam persoon)*\n**Wat is de reden van deze klacht?** *(reden)*\n**Bewijs:** *(bewijs)*\n\nU word z.s.m. geholpen.`)
            .setColor("RED"))
    
    if(reaction.message.id == ticketid && reaction.emoji.name == '🔒') {
        reaction.users.remove(user);
    
        reaction.message.guild.channels.create(`lead-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '866407317461270548',
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}> <@&866407317461270548>`, new discord.MessageEmbed()
            .setTitle(`Welkom ${user.tag}`)
            .setDescription(`Hallo! Bedankt voor het aanmaken van een Lead ticket!\n\nWaarmee kunnen we u precies helpen?\n\nU word z.s.m. geholpen.`)
            .setColor("YELLOW"))
    
    if(reaction.message.id == ticketid && reaction.emoji.name == '📚') {
        reaction.users.remove(user);
        
        reaction.message.guild.channels.create(`overig-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: '866238268357476402',
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}> <@&866238268357476402>`, new discord.MessageEmbed()
            .setTitle(`Welkom ${user.tag}`)
            .setDescription(`Hallo! Bedankt voor het aanmaken van een Ticket, waarmee kunnen we u precies helpen?\n\nEen stafflid helpt u z.s.m.`)
            .setColor("GREEN"))
        })
    }
})

}

})
}
})
}
})
}

module.exports.help = {
    name: "ticket-setup"
} 