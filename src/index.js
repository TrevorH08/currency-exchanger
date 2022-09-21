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
    console.log(errorArray);
  });
}

// UI Logic

function printElements(data, currency) {
  let rate = `${data[0].conversion_rates[currency]}`;
  let userAmount = document.querySelector('#amountInput').value;
  let convertedAmount = userAmount * rate;
  document.querySelector('#rate').innerText = "Conversion Rate: $1 = " + rate + " " + currency
  document.querySelector('#results').innerText = "Entered Amount: $" + userAmount + " = " + convertedAmount.toFixed(4) + " " + currency;
  //LEFT OFF TRYING TO FIGURE OUT LINE ABOVE AND HOW TO PROPERLY CALL EXCHANGE RATE
  console.log(currency);
}

function printError(error) {
  CurrencyExchange.response;
  document.querySelector('#results').innerText = `There was an error accessing the exchange data for ${error[2]} `;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  getExchange(currency);
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
