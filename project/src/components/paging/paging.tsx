import { COMPOSITIONS_PER_PAGE } from '../../pages/main/main';

type PagingProps = {
  compositionsNumber: number;
  currentPage: number;
  onChangePage: (arg: string) => void;
}


function Paging({compositionsNumber, currentPage, onChangePage}: PagingProps): JSX.Element {
  const firstPage = 1;
  const lastPage = Math.ceil(compositionsNumber / COMPOSITIONS_PER_PAGE);
  return (
    <div className={`records__paging paging ${compositionsNumber > 4 ? '' : 'visually-hidden'}`}>
      <button
        value="first-page"
        type="button"
        className={`paging__control ${currentPage === firstPage ? 'paging__control--disabled' : ''} button ${compositionsNumber > 8 ? '' : 'visually-hidden'}`}
        onClick={(evt) => {
          evt.preventDefault();
          onChangePage(evt.currentTarget.value);
        }}
      >{'<<'}
      </button>
      <button
        value="previous-page"
        type="button"
        className={`paging__control button ${currentPage === firstPage ? 'paging__control--disabled' : ''}`}
        onClick={(evt) => {
          evt.preventDefault();
          if (currentPage > firstPage) {
            onChangePage(evt.currentTarget.value);
          }
        }}
      >{'<'}
      </button>
      <span className="paging__info">{currentPage}/{lastPage}</span>
      <button
        value="next-page"
        type="button"
        className={`paging__control button ${currentPage === lastPage ? 'paging__control--disabled' : ''} `}
        onClick={(evt) => {
          evt.preventDefault();
          if (currentPage < lastPage) {
            onChangePage(evt.currentTarget.value);
          }
        }}
      >{'>'}
      </button>
      <button
        value="last-page"
        type="button"
        className={`paging__control button ${currentPage === lastPage ? 'paging__control--disabled' : ''} ${compositionsNumber > 8 ? '' : 'visually-hidden'}`}
        onClick={(evt) => {
          evt.preventDefault();
          onChangePage(evt.currentTarget.value);
        }}
      >{'>>'}
      </button>
    </div>
  );
}

export default Paging;
