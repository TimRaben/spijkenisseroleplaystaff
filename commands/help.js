const Discord = require('discord.js');
const disbut = require("discord-buttons");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports.run = async (client, message, args) => {

      //--------------------------------------S T A R T---------------------------------------

        const embed = new Discord.MessageEmbed()
        .setDescription("Klik op de Button hieronder!");

        const embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("Hlep 1");

        const embed2 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("Hlep 2");

        const embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("Hlep 3");


        //-----------------------------OPTIONS----------------------

        let option1 = new MessageMenuOption()
        .setLabel('📌- Algemeen Helpmenu - 📌')
        .setEmoji('📌')
        .setValue('Algemene Commands')
        .setDescription('Momenteel nog niet beschikbaar! Word beschikbaar over: *nog geen tijd en datum beschikbaar..*')

        let option2 = new MessageMenuOption()
        .setLabel('📚 - Informatie Menu')
        .setEmoji('📚')
        .setValue('Informatie Commands')
        .setDescription('Momenteel nog niet beschikbaar! Word beschikbaar over: *nog geen tijd en datum beschikbaar..*')

        let option3 = new MessageMenuOption()
        .setLabel('🔨 - Staff Menu - 🔨')
        .setEmoji('🔨')
        .setValue('Staff Commands')
        .setDescription('Momenteel nog niet beschikbaar! Word beschikbaar over: *nog geen tijd en datum beschikbaar..*')
        
    let select = new MessageMenu()
        .setID('Help Menu - Selecteren')
        .setPlaceholder('Klik op een optie om een Help Menu te selecteren!')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3)

        //-----------------------------OPTIONS----------------------
    
    const Sendmenu = await message.channel.send(embed, select);

    const filter = ( button ) => button.clicker.user.id === message.author.id; //if only the message author click thenit will work
    let collector = Sendmenu.createMenuCollector(filter, { time : 10000 });

    collector.on("collect" , (b) => {
        if(b.values[0] == "📌 - Algemeen Help Menu") {
            Sendmenu.edit(embed1, select)
        }

        if(b.values[0] == "📚 - Informatie Help Menu") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "🔨 - Staff Help Menu") {
            Sendmenu.edit(embed3, select)
        }

        b.reply.defer();
    })

    collector.on("end", (b) => {
        Sendmenu.edit("Helaas is het niet meer mogelijk om dit help commando te gebruken typ nogmaals spn/help")
    })

    module.exports.help = {
        name: "roleplay-host"
    }
  };