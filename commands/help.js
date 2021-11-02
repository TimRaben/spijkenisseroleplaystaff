const ButtonPages = require('discord-button-pages');
const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    var helpmenu1 = new discord.MessageEmbed()
        .setTitle(`Spijkenisse Roleplay - Help Menu`)
        .setThumbnail('https://media.discordapp.net/attachments/866336989891264532/905036514910695454/static_15.png')
        .setDescription('Hallo! Dit is onze Help Pagina.\n\nHieronder kan je klikken op de buttons elke keer dat je op een button klikt ga je naar een andere pagina, klik op de buttons om het goede help menu te vinden die jij nodig hebt!\n\n🧱  **Pagina 1 |** *standaard menu (dit menu)*\n📌  **Pagina 2 |** *algemene commands*\n💰  **Pagina 3 |** *economie commands*\n🔊  **Pagina 4 |** *muziek commands*\n🔰  **Pagina 5 |** *staff commands*\n⚡  **Pagina 6 |** *management commands*\n\n``1️⃣ | Pagina 1 van de 6``')
        .setFooter("Spijkenisse Roleplay • Help Menu • Start Menu");

    var helpmenu2 = new discord.MessageEmbed()    
        .setTitle(`Spijkenisse Roleplay - Help Menu`)
        .setThumbnail('https://media.discordapp.net/attachments/866336989891264532/905036514910695454/static_15.png')
        .setDescription('**Algemene Commands**\n\n``!server`` *Zie de Server Informatie.*\n``!user`` *Zie de informatie van een lid.*``!suggest`` *Maak een suggestie aan.*\n``spn/id`` *Maak een identiteitskaart aan.*\n``spn/ping`` *Zie de snelheid van de bot*\n\n``2️⃣ | Pagina 2 van de 6``')
        .setFooter("Spijkenisse Roleplay • Help Menu • Algemeen Help Menu");

    var helpmenu3 = new discord.MessageEmbed()    
        .setTitle(`Spijkenisse Roleplay - Help Menu`);

    var helpmenu4 = new discord.MessageEmbed()    
        .setTitle(`Spijkenisse Roleplay - Help Menu`);

    var helpmenu5 = new discord.MessageEmbed()    
        .setTitle(`Spijkenisse Roleplay - Help Menu`);

    var helpmenu6 = new discord.MessageEmbed()    
        .setTitle(`Spijkenisse Roleplay - Help Menu`);

    const embedPages = [helpmenu1, helpmenu2, helpmenu3, helpmenu4, helpmenu5, helpmenu6]
    ButtonPages.createPages(client, message, embedPages, 60 * 1000, "green", "👉", "👈", "❌");
};

module.exports.help = {
    name: "help",
    description: "Geeft al de verschillende commands",
}