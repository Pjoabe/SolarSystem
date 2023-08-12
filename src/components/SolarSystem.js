import React, { Component } from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    const text = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ text } />
        {
          planets.map((el) => (<PlanetCard
            key={ el.name }
            planetName={ el.name }
            planetImage={ el.image }
          />))
        }
      </div>
    );
  }
}
