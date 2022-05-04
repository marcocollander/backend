const Currency = function (canadianDollar) {
  this.canadianDollar = canadianDollar;
};

Currency.prototype.roundToDecimals = function (amount) {
  return Math.round(amount * 100) / 100;
};

Currency.prototype.canadianToUS = function (canadian) {
  return this.roundToDecimals(canadian * this.canadianDollar);
};

Currency.prototype.usToCanadian = function (us) {
  return this.roundToDecimals(us / this.canadianDollar);
};

module.exports = Currency;
