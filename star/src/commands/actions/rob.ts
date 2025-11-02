import { CommandInteraction, GuildMember } from 'discord.js';
import { getUser, updateUser } from '../../services/economyService';

export const rob = async (interaction: CommandInteraction) => {
    const targetUserId = interaction.options.getUser('target')?.id;
    const member = interaction.member as GuildMember;

    if (!targetUserId) {
        return interaction.reply('Você precisa mencionar um usuário para assaltar!');
    }

    const user = await getUser(member.user.id);
    const targetUser = await getUser(targetUserId);

    if (!targetUser) {
        return interaction.reply('Usuário alvo não encontrado!');
    }

    const success = Math.random() < 0.5; // 50% chance de sucesso
    let amount = Math.floor(Math.random() * 100); // valor aleatório entre 0 e 100

    if (success) {
        // Sucesso no assalto
        await updateUser(member.user.id, user.balance + amount);
        await updateUser(targetUserId, targetUser.balance - amount);
        return interaction.reply(`Você assaltou ${amount} starcoins de <@${targetUserId}>!`);
    } else {
        // Falha no assalto
        return interaction.reply(`Você falhou ao tentar assaltar <@${targetUserId}> e não ganhou nada.`);
    }
};