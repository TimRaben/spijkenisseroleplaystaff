const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("⛔ **|** Sorry! Jij hebt niet de juiste bevoegdheid om iemand te whitelisten.");

    if (!args[0]) return message.reply("⛔ **|** Geef geen geldige persoon op.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("⛔ **|** Gelieve contact op te nemen met hogere hand, ik ben niet bevoegd om dit te doen.");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("⛔ **|** Geef geen geldige gebruiker op!");

    var muteRole1 = message.guild.roles.cache.get('866336919717675009');
    var muteRole2 = message.guild.roles.cache.get('866336939396169728');
    var muteRole3 = message.guild.roles.cache.get('866336940114837504');
    var muteRole4 = message.guild.roles.cache.get('866336938691395634');
    if (!muteRole1) return message.channel.send("⛔ **|** Foutcode");
    if (!muteRole2) return message.channel.send("⛔ **|** Foutcode");
    if (!muteRole3) return message.channel.send("⛔ **|** Foutcode");
    if (!muteRole4) return message.channel.send("⛔ **|** Foutcode");

    await (mutePerson.roles.add(muteRole1.id, muteRole2.id, muteRole3.id, muteRole4.id));
    message.channel.send(`${mutePerson} is succesvol gewhitelist.`);

    }

module.exports.help = {
    name: "whitelist"
}