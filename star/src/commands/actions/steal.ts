import { CommandInteraction, GuildMember } from 'discord.js';
import { getUser, updateUser } from '../../services/economyService';

export const steal = async (interaction: CommandInteraction) => {
    const targetUserId = interaction.options.getUser('target')?.id;
    const thief = interaction.member as GuildMember;

    if (!targetUserId) {
        return interaction.reply('Você precisa mencionar um usuário para roubar!');
    }

    const targetUser = await getUser(targetUserId);
    const thiefUser = await getUser(thief.id);

    if (!targetUser || targetUser.balance <= 0) {
        return interaction.reply('O usuário alvo não possui starcoins para roubar!');
    }

    const stolenAmount = Math.floor(Math.random() * (targetUser.balance / 2)); // Rouba até metade do saldo do alvo
    if (stolenAmount <= 0) {
        return interaction.reply('Você não conseguiu roubar nada!');
    }

    targetUser.balance -= stolenAmount;
    thiefUser.balance += stolenAmount;

    await updateUser(targetUser);
    await updateUser(thiefUser);

    return interaction.reply(`Você roubou ${stolenAmount} starcoins de <@${targetUserId}>!`);
};