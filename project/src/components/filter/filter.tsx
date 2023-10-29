const filterOptions = ['Все', 'Рок', 'Джаз', 'Классика'];

type FilterProps = {
  onChangeFilter: (arg: string) => void;
  selectedFilter: string;
}

function Filter({ onChangeFilter, selectedFilter }: FilterProps): JSX.Element {

  const filterList = filterOptions.map((filterOption) => (
    <li key={filterOption} className="filter__filter-option filter-option">
      <a
        href="/"
        className={`filter-option_filter-text filter-text ${filterOption === selectedFilter ? 'filter-text--active' : ''}`}
        data-filter={filterOption}
        onClick={(evt) => {
          evt.preventDefault();
          if (evt.currentTarget.dataset.filter) {
            onChangeFilter(evt.currentTarget.dataset.filter);
          }
        }}
      >{filterOption}
      </a>
    </li>
  ));

  return <ul className="records__filter filter">{filterList}</ul>;
}

export default Filter;
