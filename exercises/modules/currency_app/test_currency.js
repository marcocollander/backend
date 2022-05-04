const currency = require("./currency");

console.log(
  `50 dolarów kanadyjskich odpowiada następującej ilości dolarów amerykańskich:`
);
console.log(currency.canadianToUS(50));

console.log(
  `30 dolarów amerykańskich odpowiada następującej ilości dolarów amerykańskich:`
);
console.log(currency.usToCanadian(30));
