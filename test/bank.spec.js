const Bank = require('../lib/bank');
const Account = require('../lib/account');
const expect = require('chai').expect;
describe('Bank', () => {
  describe('Constructor', () => {
    it('should build the initial constructor', () => {
      const bk1 = new Bank('Bank1');
      expect(bk1.name).to.equal('Bank1');
      expect(bk1.accounts).to.be.length(0);
    });
  });

  describe('addAccount', () => {
    it('create a new account', () => {
      const bk1 = new Bank('Bank1');
      const ac1 = new Account('tester');
      bk1.addAccount(ac1);
      expect(bk1.accounts).to.be.length(1);
    });
  });
  describe('getValue', () => {
    it('get the bank value', () => {
      const bk1 = new Bank('Bank1');
      const ac1 = new Account('tester');
      ac1.deposit(20);
      bk1.addAccount(ac1);
      const val = bk1.getValue();
      expect(val).to.equal(20);
    });
  });
});
