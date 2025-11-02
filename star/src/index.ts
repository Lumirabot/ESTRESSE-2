import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config';
import { handleReady } from './events/ready';
import { handleMessageCreate } from './events/messageCreate';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => handleReady(client));
client.on('messageCreate', handleMessageCreate);

client.login(config.token);