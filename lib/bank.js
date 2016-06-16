/* eslint-disable func-names */


function Bank(name) {
  this.name = name;
  this.accounts = [];
}


Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
  return this.bal;
};

Bank.prototype.getValue = function () {
  if (this.accounts.length === 0) { return 0; }
  let total = 0;
  const mapped = this.accounts.map(n => n.bal);
  total = mapped.reduce((acc, val) => val + val);
  return total;
};


module.exports = Bank;
