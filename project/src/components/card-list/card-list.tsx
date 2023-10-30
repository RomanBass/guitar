import Card from '../card/card';
import { Compositions } from '../../types/composition';

type CompositionsListProps = {
  compositions: Compositions;
}


function CompositionsList({compositions}: CompositionsListProps): JSX.Element {
  const CompositionsItems = compositions.map((composition) =>
    <Card key={composition.id} composition={composition}/>);

  return (
    <div className="records__records-list records-list">{CompositionsItems}</div>
  );
}

export default CompositionsList;
