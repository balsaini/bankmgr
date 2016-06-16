const uuid = require('uuid');

function Account(name, bal) {
  this.name = name;
  this.bal = bal;
  this.deposits = [];
  this.withdraws = [];
  this.number = uuid.v1();
}

Account.prototype.deposit = function (amount) {
  this.bal += amount;
  this.deposits.push(amount);
};

Account.prototype.withdraw = function (amount) {
  this.bal -= amount;
  this.withdraws.push(amount);
};

module.exports = Account;
