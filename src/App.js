import './App.css';

function App() {

  return (
    <div className="container">
      <div className='title'><img src='assets/logo.svg' /></div>
      <div className='main-div'>
        <div className='calc'>
          <div className="bill">
            <h1>Bill</h1>
            <div className="input" >
              <img src="assets/dollar.svg" />
              <input type="number" placeholder="0" />
            </div>
          </div>


          <div className="tip">
            <h1>Tip</h1>
            <div className="input" >
              <img src="assets/person.svg" />
              <input type="number" placeholder="0" />
            </div>
          </div>


        </div>
        <div className='result' ></div>
      </div>
    </div>
  );
}

export default App;
