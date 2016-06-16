const Account = require ('../lib/account.js');
const expect = require('chai').expect;
describe('Account', function(){
    it('should build the initial constructor', function(){
      const acc1 = new Account("tester",500);
      expect (acc1.bal).to.equal(500);
      expect (acc1.name).to.equal("tester");
    });
});
