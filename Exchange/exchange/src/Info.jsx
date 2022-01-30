import React, { Component } from 'react'
import Stats from './Stats'
import './App.css';
export default class Info extends Component {
  render() {
    return (
      <div>
      <table className='container'>
      <thead>
      <tr className='titles'>
      <th>Languages</th>
      <th>Age</th>
      <th>Years of Experience</th>
      <th>College</th>
      <th>Coins I Hold</th>
      <th>Adjectives To Describe Me</th>
      <th>Favorite Book</th>
      </tr>
      </thead>
      <tbody>
      {
          this.state.myStats.map( ({languages, age, experience, college, holding, adjectives, book}) => 
          <Stats languages={languages} age={age} experience={experience} college={college} holding={holding} adjectives={adjectives} book={book} />
          )
      }
      </tbody>
      </table>

      </div>
    )
  }
}
