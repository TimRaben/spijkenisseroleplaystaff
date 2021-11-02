const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ **|** Je hebt niet de juiste bevoegdheid om iemand te whitelisten.')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.channel.send('⛔ **|** Persoon niet gevonden!')
    
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === '')
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is succesvol gewhitelist.`)
    }

module.exports.help = {
    name: "whitelist",
    description: "Ban iemand",
    category: "Algemeen"
}