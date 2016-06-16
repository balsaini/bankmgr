/* eslint-disable func-names */

const uuid = require('uuid');

function Account(name) {
  this.name = name;
  this.bal = 0;
  this.deposits = [];
  this.withdraws = [];
  this.number = uuid.v1();
}

Account.prototype.deposit = function (amount) {
  this.bal += amount;
  this.deposits.push(amount);
  return this.bal;
};

Account.prototype.withdraw = function (amount) {
  if (amount > this.bal) {
    return this.bal;
  }
  this.bal -= amount;
  this.withdraws.push(amount);
  return this.bal;
};

module.exports = Account;
