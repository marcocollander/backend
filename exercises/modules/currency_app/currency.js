const CANADIAN_DOLLARS = 0.91;

const roundToDecimals = (amount) => {
  return Math.round(amount * 100) / 100;
};

exports.canadianToUS = (canadian) => {
  return roundToDecimals(canadian * CANADIAN_DOLLARS);
};

exports.usToCanadian = (us) => {
  return roundToDecimals(us / CANADIAN_DOLLARS);
};
