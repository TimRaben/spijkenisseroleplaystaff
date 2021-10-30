const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) return message.reply(":x: **-** Geef een suggestie op!");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var embed = new discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
            .setTitle("Spijkenisse Roleplay - Suggestie")
            .setDescription(`**Suggestie:**\n${args.slice(0).join(" ")}\n**Ingezonden door:**\n${message.author}\n\n*Laat jou suggestie weten met* ``spn/suggestie (suggestie)```)
            .setColor("BLUE")
            .setFooter(`${message.member.displayName} • Spijkenisse Roleplay`)
            .setTimestamp()

            var channel = message.member.guild.channels.cache.get("866337040759783454");
 
            if (!channel) return;

        channel.send(embed);

        var msg = await message.channel.send(embed)

        await msg.react('✅');
        await msg.react('❌');

            return message.channel.send(embed);       

}


module.exports.help = {
    name: "suggestie"
}