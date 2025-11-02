import { expect } from 'chai';
import { EconomyService } from '../src/services/economyService';
import { User } from '../src/models/user';

describe('Economy System', () => {
    let economyService: EconomyService;
    let user1: User;
    let user2: User;

    beforeEach(() => {
        economyService = new EconomyService();
        user1 = new User('1', 'User1', 100);
        user2 = new User('2', 'User2', 50);
        economyService.addUser(user1);
        economyService.addUser(user2);
    });

    describe('Balance', () => {
        it('should return the correct balance for a user', () => {
            const balance = economyService.getBalance(user1.id);
            expect(balance).to.equal(100);
        });
    });

    describe('Transfer', () => {
        it('should transfer starcoins between users', () => {
            economyService.transfer(user1.id, user2.id, 30);
            expect(economyService.getBalance(user1.id)).to.equal(70);
            expect(economyService.getBalance(user2.id)).to.equal(80);
        });

        it('should not allow transfer of more starcoins than available', () => {
            expect(() => economyService.transfer(user1.id, user2.id, 200)).to.throw('Insufficient funds');
        });
    });

    describe('Daily Rewards', () => {
        it('should allow users to claim daily rewards', () => {
            economyService.claimDailyReward(user1.id);
            expect(economyService.getBalance(user1.id)).to.be.greaterThan(100);
        });
    });

    describe('Steal', () => {
        it('should allow users to steal starcoins', () => {
            economyService.steal(user1.id, user2.id);
            expect(economyService.getBalance(user2.id)).to.be.lessThan(50);
        });
    });

    describe('Work', () => {
        it('should allow users to work for starcoins', () => {
            economyService.work(user1.id);
            expect(economyService.getBalance(user1.id)).to.be.greaterThan(100);
        });
    });

    describe('Fish', () => {
        it('should allow users to fish for starcoins', () => {
            economyService.fish(user1.id);
            expect(economyService.getBalance(user1.id)).to.be.greaterThan(100);
        });
    });
});