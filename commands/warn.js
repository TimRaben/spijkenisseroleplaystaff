const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **|** Sorry! Jij bent niet gemachtigd om iemand een warnings te geven!");

    if (!args[0]) return message.reply(":x: **|** Gelieve een gebruiker op te geven!");

    if (!args[1]) return message.reply(":x: **|** Gelieve een Reden op te geven waarom je deze gebruiker een warning wilt geven!");

    if (!message.guild.me.hasPermissions("MANAGE_MESSAGES")) return message.reply(":x: **|** Error! Gelieve dit door te geven aan een Eigenaar dan zal dit zo spoedig mogelijk gefixed worden!");

    var warnUser = message.guild.member(message.mention.users.first() || message.guild.members.get(args[0]));

    var warnReden = args.slice(1).join(" ");

    if (!warnUser) return message.reply(":x: **|** Geen gebruiker gevonden! Zorg ervoor dat je een echte Speler tagged!");

    if (warnUser.hasPermission("KICK_MEMBERS")) return message.reply(":x: **|** Deze gebruiker is een hoger Stafflid deze persoon kan je daarom ook geen Warn geven!");

    var warnEmbed = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Spijkenisse Roleplay - Warnings")
        .setFooter(message.author.displayAvatarURL, "Spijkenisse Roleplay • Waarschuwingen")
        .setTimestamp()
        .setDescription(`Er is zojuist een Warn uitgedeeld! Less hieronder verdere informatie!\n\n**Persoon:** ${warnUser} **-** ${warnUser.displayName}\n**Stafflid:** ${message.author}\n**Reden:** ${warnReden}\n\n*Ben jij het echt niet eens met jou Warn? Maak dat een ticket aan of PM het Stafflid die jou een warning heeft gegeven.* `)

    var channel = message.guild.channels.cache.get("902193674576863292");

    if (!channel) return;

    channel.send(warnEmbed);

}

module.exports.help = {
    name: "warn"
} 