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
  return this.accounts.reduce((t, a) => t + a.bal, 0);
};


module.exports = Bank;
