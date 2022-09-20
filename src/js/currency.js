export default class CurrencyExchange {
  static getExchange(currency) {
    return promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `GET https://v6.exchangerate-api.com/v6/${process.env.API_key}/latest/USD`;
      request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, currency]);
        } else {
          reject([this, response, currency]);
        }  
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}