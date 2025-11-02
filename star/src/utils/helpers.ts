import { MessageEmbed } from 'discord.js';

export const formatCurrency = (amount: number): string => {
    return `${amount.toFixed(2)} starcoin${amount !== 1 ? 's' : ''}`;
};

export const createEmbed = (title: string, description: string, color: string = '#0099ff'): MessageEmbed => {
    return new MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(description)
        .setTimestamp();
};

export const isAdmin = (userId: string, adminIds: string[]): boolean => {
    return adminIds.includes(userId);
};

export const validateAmount = (amount: number): boolean => {
    return amount > 0;
};