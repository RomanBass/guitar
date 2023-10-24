function Filter(): JSX.Element {
  return (
    <ul className="records__filter filter">
      <li className="filter__filter-option filter-option">
        <a href="/" className="filter-option_filter-text filter-text filter-text--active">Все</a>
      </li>
      <li className="filter__filter-option filter-option">
        <a href="/" className="filter-option_filter-text filter-text">Рок</a>
      </li>
      <li className="filter__filter-option filter-option">
        <a href="/" className="filter-option_filter-text filter-text">Джаз</a>
      </li>
      <li className="filter__filter-option filter-option">
        <a href="/" className="filter-option_filter-text filter-text">Классика</a>
      </li>
    </ul>
  );
}

export default Filter;
