import { Message } from 'discord.js';
import { getUser, updateUser } from '../../services/economyService';

const DAILY_COINS = 100; // Amount of starcoins to reward daily
const COOLDOWN_TIME = 86400000; // 24 hours in milliseconds

export const dailyReward = async (message: Message) => {
    const userId = message.author.id;
    const user = await getUser(userId);

    const now = Date.now();
    if (user.lastDaily && now < user.lastDaily + COOLDOWN_TIME) {
        const timeLeft = Math.ceil((user.lastDaily + COOLDOWN_TIME - now) / 1000);
        return message.reply(`Você já reivindicou sua recompensa diária! Tente novamente em ${timeLeft} segundos.`);
    }

    user.balance += DAILY_COINS;
    user.lastDaily = now;
    await updateUser(userId, user);

    return message.reply(`Você reivindicou sua recompensa diária de ${DAILY_COINS} starcoins!`);
};