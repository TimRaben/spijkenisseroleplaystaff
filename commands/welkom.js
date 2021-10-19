const discord  =  require("discord.js")
const {MessageButton, MessageActionRow} = require("discord-buttons");
module.exports.run = async (client, message, args) => {
    
    const channelID = '866336985374392320'

    client.on('guildMemberAdd', (member) => {
        console.log(member)

        var welkomEmbed = discord.MessageEmbed()
            .setTitle("Spijkenisse Roleplay - Welkom")
            .setDescription(`Welkom <@${member.athor}>, hopelijk zien wij jou snel verschijnen bij de Roleplays!`)
            .setThumbnail("https://media.discordapp.net/attachments/866336989891264532/899585575798067230/standard_8.gif")
            .setTimestamp()
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

    const channel = member.guild.channels.chache.get(channelID)
      channel.send(welkomEmbed ,row)

    })

}