import './styles/Menu.css'
import React, { useState } from 'react'
import CardListAPI from './CardListAPI'
// import data from '../../chickenTab.json';

function Menu({
  setFilterGender,
  setFilterSpecies,
  setFilterHomeworld,
  setFilterCybernetics,
  setFilterAffiliations,
}) {
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
            <option value="select">select 1</option>
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
            <option value="human">Human</option>
            <option value="droid">Droid</option>
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
            <option value="select">select 1</option>
          </select>
        </div>

        <div className="cybernetics">
          <select
            className="cform"
            name=""
            id="id"
            onChange={e => setFilterCybernetics(e.target.value)}
          >
            <option value="cybernetics">Cybernetics</option>
            <option value="select">select 1</option>
          </select>
        </div>
      </section>
    </div>
  )
}

export default Menu
