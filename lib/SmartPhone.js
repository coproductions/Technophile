var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
extend(SmartPhone.prototype,WebBrowser.prototype)

function SmartPhone(phoneNumber){
Tablet.call(this);
Phone.call(this,phoneNumber);
GameConsole.call(this,'Smart Phone')
WebBrowser.call(this);
}



module.exports = SmartPhone;