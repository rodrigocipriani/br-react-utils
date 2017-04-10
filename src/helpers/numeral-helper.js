var numeral = require('numeral');
var language = require('numeral/locales/pt-br');

numeral.locale('pt-br', language);
numeral.locale('pt-br');

var NumeralHelper = numeral;

export default NumeralHelper;
 