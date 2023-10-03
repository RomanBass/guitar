import Composition from '../composition/composition';
import { Compositions } from '../../types/composition';

type CompositionsListProps = {
  compositions: Compositions;
}


function CompositionsList({compositions}: CompositionsListProps): JSX.Element {
  const CompositionsList = compositions.map((composition) => <Composition key={composition.id} composition={composition}/>);
  return (
    <div className="records__records-list records-list">{CompositionsList}</div>
  );
}

export default CompositionsList;
