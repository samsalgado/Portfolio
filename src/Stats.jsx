import React, { Component } from 'react'
import './Stats.css';
import PropTypes from 'prop-types';
export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      myStats: [
        {
         
         languages:'JavaScript, C++, Go, Rust, Python, Solidity',
         age:25,
         experience:3,
         college:'Florida Gulf Coast University',
         holding:'Bitcoin, XRP',
         adjectives:'Master Strategist, Change Agent, Instructor',
         book:'The Bitcoin Standard'
        }
      ]
    };
  }
  componentDidMount() {
    const callback = () => {
      console.log("My Portfolio");
    }
    setTimeout(callback, 1000);
  }
  render() {
    return (
      <tr className="me-row">
        <td>{this.props.languages}</td>
        <td>{this.props.age}</td>
        <td>{this.props.experience}</td>
        <td>{this.props.college}</td>
        <td>{this.props.holding}</td>
        <td>{this.props.adjectives}</td>
        <td>{this.props.book}</td>
      </tr>
    );
  }
}
Stats.propTypes = {
  languages: PropTypes.string,
  age: PropTypes.number,
  experience: PropTypes.number,
  college: PropTypes.string,
  holding: PropTypes.string,
  adjectives: PropTypes.string,
  book: PropTypes.string
}