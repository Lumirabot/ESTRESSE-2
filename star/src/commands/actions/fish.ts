import { CommandInteraction, Message } from 'discord.js';
import { getUser, updateUser } from '../../services/economyService';

export const fish = async (interaction: CommandInteraction) => {
    const userId = interaction.user.id;
    const user = await getUser(userId);

    // Simulação de pesca
    const fishCaught = Math.floor(Math.random() * 10); // Pesca entre 0 a 9 starcoins
    user.balance += fishCaught;

    await updateUser(userId, user);

    await interaction.reply(`Você pescou ${fishCaught} starcoins! Seu saldo atual é ${user.balance} starcoins.`);
};

export const fishMessage = async (message: Message) => {
    const userId = message.author.id;
    const user = await getUser(userId);

    // Simulação de pesca
    const fishCaught = Math.floor(Math.random() * 10); // Pesca entre 0 a 9 starcoins
    user.balance += fishCaught;

    await updateUser(userId, user);

    message.channel.send(`Você pescou ${fishCaught} starcoins! Seu saldo atual é ${user.balance} starcoins.`);
};