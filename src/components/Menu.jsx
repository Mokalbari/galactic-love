import './styles/Menu.css';
import React, { useState } from 'react';
import CardListAPI from './CardListAPI';
// import data from '../../chickenTab.json';


function Menu({characters}) {


//   const teachers = data.chickenTab.filter(poulet => poulet.position === 'Teacher');



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
                <select className="cform" name="" id="id">
                    <option value="affiliations">
                        Affiliations
                    </option>
                    <option value="select">select 1</option>
                </select>
            </div>

            <div className='species'>
                <select className="cform" name="" id="" multiple>
                    <option value="select">Human</option>
                    <option value="select">Droid</option>

                </select>
            </div>

            <div className='age'>
                <option value="Age">
                        Age
                    </option>
                <input type="range" class="cform age" />
            </div>
            
            <div className='homeWorld'>
                <select className="cform" name="" id="id">
                    <option value="homeWorlds">
                        Planète
                    </option>
                    <option value="select">select 1</option>
                </select>
             </div>

             <div className='cybernetics'>
                <select className="cform" name="" id="id">
                    <option value="cybernetics">
                        Cybernectics
                    </option>
                    <option value="select">select 1</option>
                </select>
            </div>
           
      </section>
    </div>
  );

}

export default Menu;
  
