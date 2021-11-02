const discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

module.exports.run = async (client, message, args) => {

    let button1 = new MessageButton()
        .setStyle('url')
        .setURL('https://spijkenisseroleplay.craftingstore.net')
        .setLabel('🛒 Store')
        .setID('click_to_function');

    let button2 = new MessageButton()
        .setStyle('url')
        .setURL('https://sway.office.com/QJVFr8icY5GWzJgd?ref=Link')
        .setLabel('📚 Regels')
        .setID('click_to_function');


    var ChannelID = '866336985374392320' 

    client.on('guildMemberAdd'), (member) => {    
        console.log(member)

    message.channel.send(`Welkom ${member.id}!\n\nWelkom op onze Server! Lees de Regels goed door en hopelijk zien wij jou binnenkort bij onze Roleplays!`, button1, button2);


    }
}
