var requestURL = 'https://github.com/SimonCLAUS76/ProjetWEB/blob/main/users.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.responseType = 'json';
request.send();

request.onload = function() {
    var value = request.response;
    console.log(value);
  }