import './styles/Menu.css'
import React, { useState } from 'react'
import CardListAPI from './CardListAPI'
// import data from '../../chickenTab.json';

function Menu({ characters, setFilter }) {
  //   const teachers = data.chickenTab.filter(poulet => poulet.position === 'Teacher');
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const handleChange = event => {
    setSelectedGender(event.target.value)
  }

  return (
    <div className="menu">
      <h2>Menu</h2>
      <section className="filters-selector">
        <div className="cform gender">
          <input
            onChange={e =>
              setFilter(prevstate => [...prevstate, e.target.value])
            }
            checked={setGender === 'male'}
            value="male"
            type="radio"
            name="gender"
            id="option-one1"
          />
          <label for="option-one1">Male</label>
          <input
            onChange={e =>
              setFilter(prevstate => [...prevstate, e.target.value])
            }
            checked={setGender === 'female'}
            type="radio"
            name="gender"
            id="option-two2"
            value="female"
          />
          <label for="option-two2">Female</label>
          <input type="radio" name="gender" id="option-one3" />
          <label
            onChange={e =>
              setFilter(prevstate => [...prevstate, e.target.value])
            }
            for="option-one3"
            checked={setGender === null}
          >
            All
          </label>
        </div>

        <div className="affiliations">
          <select
            onChange={e =>
              setFilter(prevstate => [...prevstate, e.target.value])
            }
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
            onChange={e =>
              setFilter(prevstate => [...prevstate, e.target.value])
            }
            className="cform"
            name=""
            id=""
            multiple
          >
            <option value="select">Human</option>
            <option value="select">Droid</option>
          </select>
        </div>

        <div className="age">
          <option value="Age">Age</option>
          <input
            type="range"
            class="cform age"
            onChange={e => setAge(e.target.value)}
          />
          <p>age : {age}</p>
        </div>

        <div className="homeWorld">
          <select
            onChange={e =>
              setFilter(prevstate => [...prevstate, e.target.value])
            }
            className="cform"
            name=""
            id="id"
          >
            <option value="homeWorlds">Planète</option>
            <option value="select">select 1</option>
          </select>
        </div>

        <div className="cybernetics">
          <select className="cform" name="" id="id">
            <option value="cybernetics">Cybernectics</option>
            <option value="select">select 1</option>
          </select>
        </div>
      </section>
    </div>
  )
}

export default Menu
