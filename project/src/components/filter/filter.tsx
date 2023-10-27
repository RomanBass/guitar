const filterOptions = ['Все', 'Рок', 'Джаз', 'Классика'];


function Filter(): JSX.Element {

  const filterList = filterOptions.map((filterOption) => (
    <li value={filterOption} key={filterOption} className="filter__filter-option filter-option">
      <a href="/" className={`filter-option_filter-text filter-text ${filterOption === 'Рок' ? 'filter-text--active' : ''}`}>{filterOption}</a>
    </li>
  ));

  return <ul className="records__filter filter">{filterList}</ul>;
}

export default Filter;
