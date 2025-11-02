import { Client, GatewayIntentBits } from 'discord.js';
import { config } from '../config/index';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Bot está online como ${client.user?.tag}`);
});

client.login(config.token);