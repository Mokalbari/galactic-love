import '../styles/Menu.css'
import React from 'react'
import CardListAPI from './CardListAPI'

function Menu({
  setFilterGender,
  setFilterSpecies,
  setFilterHomeworld,
  setFilterCybernetics,
  setFilterAffiliations,
  filteredCharacters = [],
}) {
  const getUniqueValues = key => {
    return [
      ...new Set(
        filteredCharacters
          .map(filteredCharacters => filteredCharacters[key])
          .filter(value => value)
          .flat(),
      ),
    ]
  }

  const affiliations = getUniqueValues('affiliations')
  const species = getUniqueValues('species')
  const homeWorlds = getUniqueValues('homeworld')
  const cybernetics = getUniqueValues('cybernetics')

  const handleResetButton = () => {
    setFilterGender('')
    setFilterAffiliations('')
    setFilterCybernetics('')
    setFilterHomeworld('')
    setFilterSpecies('')
  }

  return (
    <div className="menu">
      <h2>Menu</h2>
      <section className="filters-selector">
        <div className="cform gender">
          <input
            onChange={e => setFilterGender(e.target.value)}
            value="male"
            type="radio"
            name="gender"
            id="option-one1"
          />
          <label for="option-one1">Male</label>
          <input
            onChange={e => setFilterGender(e.target.value)}
            type="radio"
            name="gender"
            id="option-two2"
            value="female"
          />
          <label for="option-two2">Female</label>
          <input type="radio" name="gender" id="option-one3" />
          <label
            onChange={e => setFilterGender(e.target.value)}
            for="option-one3"
          >
            All
          </label>
        </div>

        <div className="affiliations">
          <select
            onChange={e => setFilterAffiliations(e.target.value)}
            className="cform"
            name=""
            id="id"
          >
            <option value="affiliations">Affiliations</option>
            {affiliations.map((affiliation, index) => (
              <option key={index} value={affiliation}>
                {affiliation}
              </option>
            ))}
          </select>
        </div>

        <div className="species">
          <select
            onChange={e => setFilterSpecies(e.target.value)}
            className="cform"
            name=""
            id=""
            multiple
          >
            {species.map((specie, index) => (
              <option key={index} value={specie}>
                {specie}
              </option>
            ))}
          </select>
        </div>

        <div className="homeWorld">
          <select
            onChange={e => setFilterHomeworld(e.target.value)}
            className="cform"
            name=""
            id="id"
          >
            <option value="homeWorlds">Planète</option>
            {homeWorlds.map((homeWorld, index) => (
              <option key={index} value={homeWorld}>
                {homeWorld}
              </option>
            ))}
          </select>
        </div>

        <div className="cybernetics">
          <select
            className="cform"
            name=""
            id="id"
            onChange={e => setFilterCybernetics(e.target.value)}
          >
            {cybernetics.map((cybernetics, index) => (
              <option key={index} value={cybernetics}>
                {cybernetics}
              </option>
            ))}
          </select>
        </div>
      </section>

      <button type="button" onClick={handleResetButton}>
        reset filters
      </button>
    </div>
  )
}

export default Menu
