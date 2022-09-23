import axios from 'axios';
import React, { Component, useState, useRef, state } from 'react';
import { NavLink } from "react-router-dom";
const MAX_ITEMS = 5;
export class LoginLanguage extends Component {
  componentWillMount() {
    this.state = {
      isOpen: false,
      items: [],
      selectedItem: ''
    };
    axios.post(`${process.env.REACT_APP_IPURL}/public/getAllAppLanguages/`)
      .then((res) => { 
        this.setState({ items: res.data.data.successResult.rows });
        this.props.setUser.languagId=res.data?.data?.successResult?.rows[0]?.id})
      .catch((err) => {
        console.log(err)
      })
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  getRenderedItems() {
    if (this.state.isOpen) {
      return this.state.items;
    }
    return this.state.items.slice(0, MAX_ITEMS);
  }

  render() {
    return (
      <div className="language-selection-section">
        <div className="lang-sel-block">
          <b>Choose Language:</b>
          <span className="language-list">
            {this.getRenderedItems().map((item, id) => (
              <a className={this.props.setUser?.languagId === item.id ? 'text-primary text-decoration-underline' : 'text-primary'} key={id} onClick={() => { this.setState({ selectedItem: item.id }); this.props.setUser.languagId =item.id}}>{item.name}</a>
            ))}
        </span>
        <button onClick={this.toggle}>
          {this.state.isOpen ? 'Less' : '...More'}
        </button>
      </div>
      </div >
    );
  }
}

export default LoginLanguage 