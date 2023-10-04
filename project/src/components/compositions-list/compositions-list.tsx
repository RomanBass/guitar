import Composition from '../composition/composition';
import { CompositionsType } from '../../types/composition-type';

type CompositionsListProps = {
  compositions: CompositionsType;
}


function CompositionsList({compositions}: CompositionsListProps): JSX.Element {
  const CompositionsItems = compositions.map((composition) => <Composition key={composition.id} composition={composition}/>);
  return (
    <div className="records__records-list records-list">{CompositionsItems}</div>
  );
}

export default CompositionsList;
