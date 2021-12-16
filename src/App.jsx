import './assets/styles/rightContainer.scss';
import './assets/styles/leftContainer.scss';
import { LeftContainer } from './Components/LeftContainer';


function App() {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-sm-12 col-md-12 col-lg-3 left-container">
          <LeftContainer/>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-9 right-container">
          <h2>Im developer</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
