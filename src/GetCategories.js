import React, { useState } from 'react';

export default class  GetCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    //const apiUrl = 'https://ppn3v9rcdg.execute-api.us-east-1.amazonaws.com/Stage/GetMmorpg/'
    //var queryString = 'categories'
  }

  // addCategories(names) {
  //   console.log(names);
  //   return(
  //     <div>{names.map(name => (name))}</div>
  //   )
  // }

  componentDidMount() {
    console.log(this.props.apiUrl+this.props.queryString);
    fetch(this.props.apiUrl+this.props.queryString)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({
          categories: data
        });
        console.log(this.state.categories);
        //this.addCategories(this.state.categories);
      });
    }

  render() {
    return(
      <div>
        <h1>Categories</h1>
        <ul>
          {this.state.categories.map((cate) => (<li>{cate}</li>))}
        </ul>
      </div>
    );
  }

}
