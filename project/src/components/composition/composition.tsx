import { CompositionType} from '../../types/composition-type';

type CompositionProps = {
  composition: CompositionType;
}

function Composition({composition}: CompositionProps): JSX.Element {
  return (
    <section className="records-list__composition composition">
      <h3 className="composition-band main-middle-title">{composition.author}</h3>
      <p className="composition-title">Goodbye To Romance</p>
      <video className="composition-video" controls preload="none" poster="img/compositions/ozzy-osbourne.webp">
        <source src="records/GoodbyeToRomance.webm" type="video/webm" />
      </video>
      <p className="composition-date visually-hidden">27 августа 2023</p>
    </section>
  );
}

export default Composition;
