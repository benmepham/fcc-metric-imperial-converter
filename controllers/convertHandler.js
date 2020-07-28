/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

const UNITS = ["gal", "l", "mi", "km", "lbs", "kg"];
const UNITS_DICT = {
  gal: "l",
  l: "gal",
  lbs: "kg",
  kg: "lbs",
  mi: "km",
  km: "mi"
};

const UNITS_SPELL = {
  gal: "gallons",
  l: "liters",
  lbs: "pounds",
  kg: "kilograms",
  mi: "miles",
  km: "kilometers"
};

function ConvertHandler() {
  this.getNum = function(input) {
    // //const unit = this.getUnit(input);
    // //const num = input.split(unit)[0];
    // const num = input.match(/[\d/.]+/);
    // console.log(num)
    // try {
    //   return eval(num === null ? 1 : num[0]);
    // } catch {
    //   return null;
    // }
    //const unit = this.getUnit(input);
    //const num = input.split(unit)[0];
    
    const num = input.match(/[\d/.]+/g);
    if (num === null) return 1;

    const noUnit = input.replace(/([a-zA-Z]+$)/, "");
    //console.log("unitremoved");
    //console.log(noUnit);
    try {
      return eval(noUnit);
    } catch {
      return null;
    }
  };

  this.getUnit = function(input) {
    const result = input.match(/((gal)|(l)|(lbs)|(kg)|(mi)|(km))$/);
    //console.log(result);
    return result === null ? null : result[0];
  };

  this.getReturnUnit = function(initUnit) {
    return UNITS_DICT[initUnit];
  };

  this.spellOutUnit = function(unit) {
    return UNITS_SPELL[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum.toFixed(5)} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
