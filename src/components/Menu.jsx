import './styles/Menu.css';
// import data from '../../chickenTab.json';


function Menu() {
//   const teachers = data.chickenTab.filter(poulet => poulet.position === 'Teacher');



  return (
    <div className='menu'>
      <h2>Menu</h2>
      <section className='filters-selector'>
        {/* {....map((teacher) => (
        ))} */}
            <div className="cform gender">
                <input type="radio" checked />
                <label for="option-one3">Male</label>
                <input type="radio"  />
                <label for="option-two3">Female</label>
                <input type="radio"  />

            </div>
            <br></br>
            <select className="cform formInput" name="" id="id">
                <option value="Planets">
                    Affiliations
                </option>
                <option value="select">select 1</option>
                <option value="select">select 2</option>
                <option value="select">select 3</option>
                <option value="select">select 4</option>
                <option value="select">select 5</option>
                <option value="select">select 6</option>
                <option value="select">select 7</option>
            </select>
            <br></br>
            <br></br>
            <select class="cform cform-custom-input" name="" id="" multiple>
                <option value="select">Human</option>
                <option value="select">Droid</option>
                <option value="select">Wookiee</option>
                <option value="select">Rodian</option>
                <option value="select">yoda's species</option>
                <option value="select">ewok</option>
                <option value="select">sullustan</option>
                <option value="select">neimoidian</option>
                <option value="select">gungan</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
                <option value="select">select 3</option>
            </select>
      </section>
    </div>
  );
}

export default Menu;
  
