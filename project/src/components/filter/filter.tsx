import { useState, MouseEvent } from 'react';

const filterOptions = ['Все', 'Рок', 'Джаз', 'Классика'];

type FilterProps = {
  onChangeFilter: (arg: string) => void;
}

function Filter({onChangeFilter}: FilterProps): JSX.Element {

  const [filterType, setFilterType] = useState('Все');

  const filterChangeHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    if (evt.currentTarget.innerHTML) {
      setFilterType(evt.currentTarget.innerHTML);
    }
    onChangeFilter(evt.currentTarget.innerHTML);
  };

  const filterList = filterOptions.map((filterOption) => (
    <li key={filterOption} className="filter__filter-option filter-option">
      <a
        href="/"
        className={`filter-option_filter-text filter-text ${filterOption === filterType ? 'filter-text--active' : ''}`}
        // data-filter={filterOption}
        onClick={filterChangeHandler}
      >{filterOption}
      </a>
    </li>
  ));

  return <ul className="records__filter filter">{filterList}</ul>;
}

export default Filter;
