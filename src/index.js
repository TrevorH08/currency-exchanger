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
  console.log(currencyDataArray)
}

// UI Logic

function printElements(currency) {
  document.querySelector('#selectedCurrency').innerText = `${data[1].conversion_rates.${currency}}`
  //LEFT OFF TRYING TO FIGURE OUT LINE ABOVE AND HOW TO PROPERLY CALL EXCHANGE RATE
  console.log("#selectedCurrency")
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  getExchange(currency);
}

window.addEventListener("load", function() {
  this.document.querySelector('#exchanger').addEventListener("submit", handleFormSubmission);
});
