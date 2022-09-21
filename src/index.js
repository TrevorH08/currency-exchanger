import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency.js';

// Business Logic

function getExchange(currency) {
  let promise = CurrencyExchange.getExchange(currency);
  promise.then(function(currencyDataArray) {
    printElements(currencyDataArray, currency);
  }, function (errorArray) {
    printError(errorArray);
    console.log(currency);
  });
}

// UI Logic

function printElements(data, currency) {
  document.querySelector('#selectedCurrency').innerText = `${data[0].conversion_rates[currency]}`;
  //LEFT OFF TRYING TO FIGURE OUT LINE ABOVE AND HOW TO PROPERLY CALL EXCHANGE RATE
  console.log(currency);
}

function printError(error) {
  document.querySelector('#selectedCurrency').innerText = `There was an error accessing the exchange data for ${error[1]}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  getExchange(currency);
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
