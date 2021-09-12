import ondas from '../img/ondas.png';
import pontilhados from '../img/pontilhados.png';
import pontos from '../img/pontos.png';
import x from '../img/x.png';

const Grafismos = () => {
  return (
    <>
      <img className='img-ondas' src={ondas} alt='' />
      <img className='img-pontilhados' src={pontilhados} alt='' />
      <img className='img-pontos' src={pontos} alt='' />
      <img className='img-x' alt='' src={x} />
    </>
  );
};

export default Grafismos;
