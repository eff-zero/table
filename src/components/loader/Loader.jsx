import { useLoaderState } from '@/redux';
import HamsterLoader from './hamster/HamsterLoader';
import './Loader.css';

function Loader() {
  const { isVisible } = useLoaderState();

  return (
    <div className={`loader ${!isVisible && 'd-none'}`}>
      <HamsterLoader />
    </div>
  );
}

export default Loader;
