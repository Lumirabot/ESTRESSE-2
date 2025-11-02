import { CommandInteraction, Message } from 'discord.js';
import { getUser, updateUser } from '../../services/economyService';

const WORK_REWARDS = [50, 100, 150, 200]; // Possible rewards for working

export const work = async (interaction: CommandInteraction) => {
    const userId = interaction.user.id;
    const user = await getUser(userId);

    if (!user) {
        return interaction.reply("Você não tem uma conta. Use o comando de registro para criar uma.");
    }

    const reward = WORK_REWARDS[Math.floor(Math.random() * WORK_REWARDS.length)];
    user.balance += reward;

    await updateUser(userId, user);
    return interaction.reply(`Você trabalhou duro e ganhou ${reward} starcoins! Seu novo saldo é ${user.balance} starcoins.`);
};

export const workMessage = async (message: Message) => {
    const userId = message.author.id;
    const user = await getUser(userId);

    if (!user) {
        return message.reply("Você não tem uma conta. Use o comando de registro para criar uma.");
    }

    const reward = WORK_REWARDS[Math.floor(Math.random() * WORK_REWARDS.length)];
    user.balance += reward;

    await updateUser(userId, user);
    return message.reply(`Você trabalhou duro e ganhou ${reward} starcoins! Seu novo saldo é ${user.balance} starcoins.`);
};