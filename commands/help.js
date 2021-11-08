const discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports.run = async (client, message, args) => {

        const embed = new discord.MessageEmbed()
            .setDescription("Startpagina Helpmenu")
            .setColor("BLUE");

        const embed2 = new discord.MessageEmbed()
            .setDescription("Startpagina Helpmenu 2")
            .setColor("BLUE");

        const embed3 = new discord.MessageEmbed()
            .setDescription("Startpagina Helpmenu 3")
            .setColor("BLUE");

        const embed4 = new discord.MessageEmbed()
            .setDescription("Startpagina Helpmenu")
            .setColor("BLUE");
        
        const embed5 = new discord.MessageEmbed()
            .setDescription("Startpagina Helpmenu")
            .setColor("BLUE");

    //----------------------- Opties ---------------------------

        let option1 = new MessageMenuOption()
            .setLabel('Startpagina')
            .setEmoji('🧱')
            .setValue('option1')
            .setDescription('Startpagina')

        let option2 = new MessageMenuOption()
            .setLabel('Informatieve Commands')
            .setEmoji('📚')
            .setValue('option2')
            .setDescription('Informatie Commands')

        let option3 = new MessageMenuOption()
            .setLabel('Algemene Commands')
            .setEmoji('📋')
            .setValue('option3')
            .setDescription('Algemene Commands')

        let option4 = new MessageMenuOption()
            .setLabel('Economoie Commands')
            .setEmoji('💰')
            .setValue('option4')
            .setDescription('Economoie Commands')

        let option5 = new MessageMenuOption()
            .setLabel('Staff Commands')
            .setEmoji('🔨')
            .setValue('option5')
            .setDescription('Staff Commands')
    
    let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Klik op het Help Menu wat jij wilt.')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4, option5)

    const SendMenu = await message.channel.send(embed, select);
      
}

module.exports.help = {
    name: "help",
    description: "Geeft al de verschillende commands",
}