import { Message } from 'discord.js';
import { getUserBalance } from '../../services/economyService';

export const balanceCommand = async (message: Message) => {
    const userId = message.author.id;
    const balance = await getUserBalance(userId);

    message.channel.send(`Seu saldo de starcoins é: ${balance}`);
};