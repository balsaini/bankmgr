const Account = require('../lib/account');
const expect = require('chai').expect;
describe('Account', () => {
  describe('Constructor', () => {
    it('should build the initial constructor', () => {
      const acc1 = new Account('tester', 500);
      expect(acc1.bal).to.equal(500);
      expect(acc1.name).to.equal('tester');
      expect(acc1.number).to.be.length(36);
      expect(acc1.deposits).to.be.length(0);
      expect(acc1.withdraws).to.be.length(0);
    });
  });
  describe('deposit', () => {
    it('should make a deposit add to diposit array and update the balance', () => {
      const acc1 = new Account('tester', 500);
      acc1.deposit(20);
      expect(acc1.bal).to.equal(520);
      expect(acc1.deposits).to.be.length(1);
    });
  });

  describe('withdraw', () => {
    it('withdraw from account, update array and update the balance', () => {
      const acc1 = new Account('tester', 500);
      acc1.withdraw(20);
      expect(acc1.bal).to.equal(480);
      expect(acc1.withdraws).to.be.length(1);
    });
  });
});
