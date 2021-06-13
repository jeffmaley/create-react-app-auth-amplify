import React, { Component } from 'react';

export default function GetCategories() {
  const apiUrl = 'https://ppn3v9rcdg.execute-api.us-east-1.amazonaws.com/Stage/GetMmorpg/'
  var queryString = 'categories'
  var request = new XMLHttpRequest()
  var returnData = '';

  // Open a new connection, using the GET request on the URL endpoint
  fetch(apiUrl+queryString)
    .then(result => result.json())
    .then(data => function (data) {
    if(request.status >= 200 && request.status <400) {      
      data.forEach((category) => {
        returnData = returnData + " " + category;       
      })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    //queryselector.appendChild(errorMessage)
  }
  });
  console.log(returnData);
  return(
    <div>
    <h1>Categories</h1>
    <h1>{returnData}</h1>
    </div>
  );
}
