import { Client, Message } from 'discord.js';
import { prefix } from '../config/index';
import { handleCommand } from '../utils/helpers';

const client = new Client();

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return; // Ignora mensagens de bots

    if (!message.content.startsWith(prefix)) return; // Verifica se a mensagem começa com o prefixo

    const args = message.content.slice(prefix.length).trim().split(/ +/); // Divide a mensagem em argumentos
    const command = args.shift()?.toLowerCase(); // Obtém o comando

    try {
        await handleCommand(command, args, message); // Processa o comando
    } catch (error) {
        console.error('Erro ao processar o comando:', error);
        message.reply('Houve um erro ao processar seu comando.'); // Responde ao usuário em caso de erro
    }
});