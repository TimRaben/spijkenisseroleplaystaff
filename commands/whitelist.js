const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("⛔ **|** Sorry! Jij hebt niet de juiste bevoegdheid om iemand te whitelisten.");

    if (!args[0]) return message.reply("⛔ **|** Geef geen geldige persoon op.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("⛔ **|** Gelieve contact op te nemen met hogere hand, ik ben niet bevoegd om dit te doen.");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply("⛔ **|** Geef geen geldige gebruiker op!");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("⛔ **|** Sorry, je kan deze gebruiker niet whitelisten.");

    var muteRole = message.guild.roles.cache.get('866336919717675009', '866336939396169728', '866336940114837504', '866336938691395634');
    if (!muteRole) return message.channel.send("⛔ **|** Foutcode");

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} is succesvol gewhitelist.`);

    }

module.exports.help = {
    name: "whitelist"
}