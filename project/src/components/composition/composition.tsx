import { CompositionType} from '../../types/composition-type';

type CompositionProps = {
  composition: CompositionType;
}

function Composition({composition}: CompositionProps): JSX.Element {
  return (
    <section className="records-list__composition composition">
      <h3 className="composition-band main-middle-title">{composition.author}</h3>
      <p className="composition-title">{composition.name}</p>
      <video className="composition-video" controls preload="none" poster={composition.poster}>
        <source src={composition.record} type="video/webm" />
      </video>
      <p className="composition-date visually-hidden">{composition.data}</p>
    </section>
  );
}

export default Composition;
