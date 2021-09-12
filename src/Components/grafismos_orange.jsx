import ondas from '../img/ondas.svg';
import pontilhados from '../img/pontilhados.svg';
import pontos from '../img/pontos.svg';
import x from '../img/x.svg';

const GrafismosOrange = () => {
  return (
    <>
      <img className='img-ondas' src={ondas} alt='' />
      <img className='img-pontilhados' src={pontilhados} alt='' />
      <img className='img-pontos' src={pontos} alt='' />
      <img className='img-x' alt='' src={x} />
    </>
  );
};

export default GrafismosOrange;
