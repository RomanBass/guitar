import { useState } from 'react';

const filterOptions = ['Все', 'Рок', 'Джаз', 'Классика'];


function Filter(): JSX.Element {

  const [filterType, setFilterType] = useState('Все');

  const filterList = filterOptions.map((filterOption) => (
    <li key={filterOption} className="filter__filter-option filter-option">
      <a
        href="/"
        className={`filter-option_filter-text filter-text ${filterOption === filterType ? 'filter-text--active' : ''}`}
        data-filter={filterOption}
        onClick={(evt) => {
          evt.preventDefault();
          if (evt.currentTarget.dataset.filter) {
            setFilterType(evt.currentTarget.dataset.filter);
          }
        }}
      >{filterOption}
      </a>
    </li>
  ));

  return <ul className="records__filter filter">{filterList}</ul>;
}

export default Filter;
