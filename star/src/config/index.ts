import { config } from 'dotenv';

config();

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN || '';
export const COMMAND_PREFIX = '!';
export const COIN_NAME = 'starcoin';