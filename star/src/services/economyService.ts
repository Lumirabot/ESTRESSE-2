import { User } from '../models/user';

interface EconomyService {
    getBalance(userId: string): Promise<number>;
    transferCoins(fromUserId: string, toUserId: string, amount: number): Promise<string>;
    addCoins(userId: string, amount: number): Promise<string>;
    dailyReward(userId: string): Promise<string>;
    stealCoins(stealerId: string, victimId: string): Promise<string>;
    robCoins(robberId: string): Promise<string>;
    work(userId: string): Promise<number>;
    fish(userId: string): Promise<number>;
}

class Economy implements EconomyService {
    private users: Map<string, User>;

    constructor() {
        this.users = new Map();
    }

    async getBalance(userId: string): Promise<number> {
        const user = this.users.get(userId);
        return user ? user.balance : 0;
    }

    async transferCoins(fromUserId: string, toUserId: string, amount: number): Promise<string> {
        const fromUser = this.users.get(fromUserId);
        const toUser = this.users.get(toUserId);

        if (!fromUser || !toUser) {
            return 'Um dos usuários não existe.';
        }

        if (fromUser.balance < amount) {
            return 'Saldo insuficiente.';
        }

        fromUser.balance -= amount;
        toUser.balance += amount;

        return `Transferência de ${amount} starcoins de ${fromUserId} para ${toUserId} realizada com sucesso.`;
    }

    async addCoins(userId: string, amount: number): Promise<string> {
        const user = this.users.get(userId);
        if (user) {
            user.balance += amount;
            return `${amount} starcoins adicionados a ${userId}.`;
        }
        return 'Usuário não encontrado.';
    }

    async dailyReward(userId: string): Promise<string> {
        const user = this.users.get(userId);
        const reward = 50; // Exemplo de recompensa diária
        if (user) {
            user.balance += reward;
            return `Você recebeu sua recompensa diária de ${reward} starcoins!`;
        }
        return 'Usuário não encontrado.';
    }

    async stealCoins(stealerId: string, victimId: string): Promise<string> {
        const stealer = this.users.get(stealerId);
        const victim = this.users.get(victimId);

        if (!stealer || !victim) {
            return 'Um dos usuários não existe.';
        }

        const amountStolen = Math.min(victim.balance, 10); // Exemplo de valor roubado
        victim.balance -= amountStolen;
        stealer.balance += amountStolen;

        return `${stealerId} roubou ${amountStolen} starcoins de ${victimId}.`;
    }

    async robCoins(robberId: string): Promise<string> {
        const robber = this.users.get(robberId);
        if (!robber) {
            return 'Usuário não encontrado.';
        }

        const amountRobbed = 100; // Exemplo de valor roubado
        robber.balance += amountRobbed;

        return `${robberId} realizou um assalto e ganhou ${amountRobbed} starcoins.`;
    }

    async work(userId: string): Promise<number> {
        const user = this.users.get(userId);
        const earned = 20; // Exemplo de valor ganho ao trabalhar
        if (user) {
            user.balance += earned;
            return earned;
        }
        return 0;
    }

    async fish(userId: string): Promise<number> {
        const user = this.users.get(userId);
        const caught = 15; // Exemplo de valor ganho ao pescar
        if (user) {
            user.balance += caught;
            return caught;
        }
        return 0;
    }
}

export default new Economy();