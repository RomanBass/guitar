import { COMPOSITIONS_PER_PAGE } from '../../pages/main/main';

type PagingProps = {
  compositionsNumber: number;
  currentPage: number;
}


function Paging({compositionsNumber, currentPage}: PagingProps): JSX.Element {
  const firstPage = 1;
  const lastPage = Math.ceil(compositionsNumber / COMPOSITIONS_PER_PAGE);
  return (
    <div className={`records__paging paging ${compositionsNumber > 4 ? '' : 'visually-hidden'}`}>
      <button
        type="button"
        className={`paging__control ${currentPage === firstPage ? 'paging__control--disabled' : ''} button ${compositionsNumber > 8 ? '' : 'visually-hidden'}`}
      >{'<<'}
      </button>
      <button
        type="button"
        className={`paging__control button ${currentPage === firstPage ? 'paging__control--disabled' : ''}`}
      >{'<'}
      </button>
      <span className="paging__info">{currentPage}/{lastPage}</span>
      <button
        type="button"
        className={`paging__control button ${currentPage === lastPage ? 'paging__control--disabled' : ''} `}
      >{'>'}
      </button>
      <button
        type="button"
        className={`paging__control button ${currentPage === lastPage ? 'paging__control--disabled' : ''} ${compositionsNumber > 8 ? '' : 'visually-hidden'}`}
      >{'>>'}
      </button>
    </div>
  );
}

export default Paging;
