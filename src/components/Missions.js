import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    const text = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ text } />
        {
          missions.map((el) => (<MissionCard
            key={ el.name }
            name={ el.name }
            year={ el.year }
            destination={ el.destination }
            country={ el.destination }
          />))
        }
      </div>
    );
  }
}
