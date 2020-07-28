/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input.toLowerCase();
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    //console.log("api")
    //console.log(input, initNum, initUnit);
    //console.log(typeof initNum, typeof initUnit)

    let result;

    if (initUnit === null && initNum === null) {
      result = {
        error: "invalid number and unit"
      };
    } else if (initUnit === null) {
      result = {
        error: "invalid unit"
      };
    } else if (initNum === null) {
      result = {
        error: "invalid number"
      };
    } else {
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
            console.log(returnNum, returnUnit, toString)

      result = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString
      };
    }
    console.log("result")
    //console.log(result);

    res.json(result);
  });
};
