import React, { Component } from 'react'
import './Stats.css';
import PropTypes from 'prop-types';
export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStats: [
        {
         
         languages:'JavaScript, C++, Go, Rust, Python, Solidity',
         experience:3,
         projects:'Red Art Splash, Portfolio Project, The Merlin Group, Go Blockchain, RustChain',
         holding:'Bitcoin, XRP',
         adjectives:'Manufacturing, Data Analytics, Wellness, Blockchain, Cybersecurity',
         certifications:'JavaScript, React, Solidity, Python, Big Data, Hadoop'
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
        <td>{this.props.experience}</td>
        <td>{this.props.projects}</td>
        <td>{this.props.holding}</td>
        <td>{this.props.adjectives}</td>
        <td>{this.props.certifications}</td>
      </tr>
    );
  }
}
Stats.propTypes = {
  languages: PropTypes.string,
  experience: PropTypes.number,
  college: PropTypes.string,
  holding: PropTypes.string,
  adjectives: PropTypes.string,
  book: PropTypes.string
}