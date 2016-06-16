const Account = require('../lib/account');
const expect = require('chai').expect;
describe('Account', () => {
  describe('Constructor', () => {
    it('should build the initial constructor', () => {
      const acc1 = new Account('tester');
      expect(acc1.bal).to.equal(0);
      expect(acc1.name).to.equal('tester');
      expect(acc1.number).to.be.length(36);
      expect(acc1.deposits).to.be.length(0);
      expect(acc1.withdraws).to.be.length(0);
    });
  });
  describe('#deposit', () => {
    it('should make a deposit add to diposit array and update the balance', () => {
      const acc1 = new Account('tester');
      acc1.deposit(20);
      expect(acc1.bal).to.equal(20);
      expect(acc1.deposits).to.be.length(1);
    });
  });

  describe('#withdraw', () => {
    it('withdraw from account, update array and update the balance', () => {
      const acc1 = new Account('tester');
      acc1.deposit(40);
      acc1.withdraw(20);
      expect(acc1.bal).to.equal(20);
      expect(acc1.withdraws).to.be.length(1);
    });
    it('withdraw failed from account, update array and update the balance', () => {
      const acc2 = new Account('tester2');
      acc2.withdraw(20);
      expect(acc2.bal).to.be.equal(0);
      expect(acc2.withdraws).to.be.length(0);
    });
  });
});
