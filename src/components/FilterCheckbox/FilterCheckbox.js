import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChange }) {
  return (
    <div className="filter">
      <label htmlFor="checkbox" className="filter__switch">
        <input type="checkbox" id="checkbox" className="filter__checkbox" 
          onChange={onChange}
          checked={checked}/>
        <span className="filter__checkbox-slider" />
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;