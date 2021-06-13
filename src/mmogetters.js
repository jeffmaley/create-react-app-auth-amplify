import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { render } from 'react-dom';
Amplify.configure(aws_exports);

export default function MmoGetter() {
  const apiUrl = 'https://ppn3v9rcdg.execute-api.us-east-1.amazonaws.com/Stage/GetMmorpg/'
  let queryString = '';
  const container = document.getElementById('App');
  const app = document.getElementById('appscreen');
  const queryselector = document.createElement('div')


  function createQueryElements(category) {
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('name', category)
    checkbox.setAttribute('value', category)
    checkbox.setAttribute('id', category)
    checkbox.setAttribute('class', 'gametype')
    let label = document.createElement('label')
    label.setAttribute('id', `lbl${category}`)
    queryselector.append(checkbox)
    queryselector.append(label)
    document.getElementById(`lbl${category}`).htmlFor = category
    document.getElementById(`lbl${category}`).innerHTML = category
  }

  function getCategories() {
    var queryString = 'categories'
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', apiUrl+queryString, true)
    request.onload = function () {
      var data = JSON.parse(this.response)
      if(request.status >= 200 && request.status <400) {      
        createQueryElements('all')
        data.forEach((category) => {
          createQueryElements(category)
        })
    }else {
      const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `Gah, it's not working!`
      //queryselector.appendChild(errorMessage)
    }
    }
    request.send()  
  }

  function getGames() {
    const apiUrl = 'https://ppn3v9rcdg.execute-api.us-east-1.amazonaws.com/Stage/GetMmorpg/'
    // Remove existing card divs
    //clearDivs()

    // Get gametypes
    queryString = ''
    var gameTypes = document.querySelectorAll('.gametype');
    gameTypes.forEach((game) => {
      if(game.checked == true) {
        if(queryString == '') {
          queryString = game.id
        } else {
          queryString = queryString + "+" + game.id
        }
      }
    })
    // Create a request variable and assign a new XML
    // HttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', apiUrl+queryString, true);

    request.onload = function () {
    // Begin accessing JSON data here
    // console.log(this.response)
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status <400) {
    data.forEach((game) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card')
        const h1 = document.createElement('h1')
        h1.textContent = game
        const p = document.createElement('p')
        p.textContent = `${game}`
        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        // console.log(game)
    })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
    }
    request.send()

    }
    return(
        <h>Oi</h>
    );
}
