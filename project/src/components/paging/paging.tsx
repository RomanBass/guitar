type PagingProps = {
  compositionsNumber: number;
}

function Paging({compositionsNumber}: PagingProps): JSX.Element {
  return (
    <div className={`records__paging paging ${compositionsNumber > 4 ? '' : 'visually-hidden'}`}>
      <button type="button" className={`paging__control paging__control--disabled button ${compositionsNumber > 8 ? '' : 'visually-hidden'}`}>{'<<'}</button>
      <button type="button" className="paging__control button">{'<'}</button>
      <span className="paging__info">8/{compositionsNumber}</span>
      <button type="button" className="paging__control button ">{'>'}</button>
      <button type="button" className={`paging__control button ${compositionsNumber > 8 ? '' : 'visually-hidden'}`}>{'>>'}</button>
    </div>
  );
}

export default Paging;
