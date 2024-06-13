import './styles/Menu.css';
import React from 'react';

function Menu({ character = [] }) {

  const getUniqueValues = (key) => {
    return [...new Set(character.map(character => character[key]).filter(value => value).flat())];
  }

  const affiliations = getUniqueValues('affiliations');
  const species = getUniqueValues('species');
  const homeWorlds = getUniqueValues('homeworld');
  const cybernetics = getUniqueValues('cybernetics');

  return (
    <div className='menu'>
      <h2>Menu</h2>
      <section className='filters-selector'>
      <div className="cform gender">
                <input type="radio" name="gender" id="option-one1" />
                <label for="option-one1">Male</label>
                <input type="radio" name="gender" id="option-two2" />
                <label for="option-two2">Female</label>
                <input type="radio" name="gender" id="option-one3" />
                <label for="option-one3">All</label>
        </div>

        <div className='affiliations'>
          <select className="cform" name="" id="affiliations">
            <option value="affiliations">Affiliations</option>
            {affiliations.map((affiliation, index) => (
              <option key={index} value={affiliation}>{affiliation}</option>
            ))}
          </select>
        </div>
.

        <div className='species'>
          <select className="cform" name="" id="species" multiple>
            {species.map((specie, index) => (
              <option key={index} value={specie}>{specie}</option>
            ))}
          </select>
        </div>

        <div className='age'>
          <option value="Age">Age</option>
          <input type="range" className="cform age" />
        </div>

        <div className='homeWorld'>
          <select className="cform" name="" id="homeWorld">
            <option value="homeWorlds">Planète</option>
            {homeWorlds.map((homeWorld, index) => (
              <option key={index} value={homeWorld}>{homeWorld}</option>
            ))}
          </select>
        </div>

        <div className='cybernetics'>
          <select className="cform" name="" id="cybernetics">
            <option value="cybernetics">Cybernetics</option>
            {cybernetics.map((cybernetic, index) => (
              <option key={index} value={cybernetic}>{cybernetic}</option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
}

export default Menu;
