const discord  =  require("discord.js")
const {MessageButton, MessageActionRow} = require("discord-buttons");
module.exports.run = async (client, message, args) => {

    client.on('guildMemberAdd'), (member) => {
        console.log(member)

        var welkomEmbed = new discord.MessageEmbed()
            .setTitle("Spijkenisse Roleplay - Welkom")
            .setDescription(`Welkom <@${member.athor}>, hopelijk zien wij jou snel verschijnen bij de Roleplays!`)
            .setThumbnail("https://media.discordapp.net/attachments/866336989891264532/899585575798067230/standard_8.gif")
            .setTimestamp()
            .setImage('https://images-ext-2.discordapp.net/external/NnzYDIXpqCSQG1loreVvfYIp1X_MLvyY13gXhTGVzY4/https/cdn-longterm.mee6.xyz/guild-images/866238268277784586/47e4554f51ef8fd884264f803eebf47462090faef4c3eab10a3cdc8f39035773.gif')
            .setFooter("Spijkenisse Roleplay • Welkom")
            .setColor("BLUE")
    
let button = new MessageButton()
  .setStyle('url')
  .setURL('https://spijkenisseroleplay.craftingstore.net') 
  .setLabel('Store')
  .setEmoji("💰")
  
let button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/channels/866238268277784586/866336995805888572/889420676694417429') 
  .setLabel('Regels')
  .setEmoji("📚")

let row = new MessageActionRow()
  .addComponents(button, button2);

message.member.guild.channels.cache.get("866379875904520202");

message.channel.send(welkomEmbed ,row);

    }

}

module.exports.help = {
    name: "overval"
}