import LoaderSpiner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


function Loader() {
  return (
    <div>
      <LoaderSpiner type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;