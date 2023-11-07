const sortingOptions = [
  { value: 'rating', text: 'Начальная' },
  { value: 'composition', text: 'По названию композиции' },
  { value: 'author', text: 'По имени автора' },
  // { value: 'date-late', text: 'По дате записи' },
  // { value: 'rating', text: 'По рейтингу' },
];

type SortingProps = {
  onChangeSorting: (arg: string) => void;
  selectedSortingOption: string;
}

function Sorting({ onChangeSorting, selectedSortingOption}: SortingProps): JSX.Element {

  const sortingList = sortingOptions.map((sortingOption) => (
    <option
      key={sortingOption.value}
      className={`sorting-option ${sortingOption.value === selectedSortingOption ? 'sorting-option--active' : ''}`}
      value={sortingOption.value}
    >{sortingOption.text}
    </option>));

  return (
    <div className="records__sorting sorting">
      <label className="sorting-label" htmlFor="pet-select">Сортировка:</label>

      <select
        className="sorting-select"
        name="compositions-list"
        id="pet-select"
        value={selectedSortingOption}
        onChange={(evt) => {
          evt.preventDefault();
          onChangeSorting(evt.currentTarget.value);
        }}
      >
        {sortingList}
      </select>
    </div>
  );
}

export default Sorting;
