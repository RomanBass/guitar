import { useState } from 'react';

const sortingOptions = [
  { value: 'composition', text: 'По названию композиции' },
  { value: 'author', text: 'По имени автора' },
  { value: 'date-late', text: 'По дате записи' },
  { value: 'rating', text: 'По рейтингу' },
];

function Sorting(): JSX.Element {
  const [selectedSortingOption, setSelectedSorting] = useState('date-late');

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
          setSelectedSorting(evt.currentTarget.value);
        }}
      >
        {sortingList}
      </select>
    </div>
  );
}

export default Sorting;
