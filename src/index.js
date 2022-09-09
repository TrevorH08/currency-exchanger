import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

// Business Logic

function getExchange(currency) {
  let promise = CurrencyExchange.getExchange(currency);
  promise.then(function(currencyDataArray) {
    printElements(currencyDataArray);
  }, function (errorArray) {
    printError(errorArray);
  });
}
