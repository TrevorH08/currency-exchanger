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
  });
}

// UI Logic

function printElements(data, currency) {
  document.querySelector('#results').innerText = "";
  document.querySelector('#rate').innerText = "";
  if (currency === "CAD" || currency === "JPY" || currency === "EUR" || currency === "SEK" || currency === "AUD") {
    let rate = `${data[0].conversion_rates[currency]}`;
    let userAmount = document.querySelector('#amountInput').value;
    let convertedAmount = userAmount * rate;
    document.querySelector('#rate').innerText = "Conversion Rate: $1 = " + rate + " " + currency;
    document.querySelector('#results').innerText = "Entered Amount: $" + userAmount + " = " + convertedAmount.toFixed(4) + " " + currency;
  } else {
    document.querySelector('#results').innerText = "The Currency in question either can't be fetched, or doesn't exist. Please enter another."
  }
}

function printError(error) {
  CurrencyExchange.response;
  document.querySelector('#results').innerText = `There was an error accessing the exchange data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[0].message} `;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  getExchange(currency);
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
