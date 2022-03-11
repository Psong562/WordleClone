import Keyboard from './Components/Keyboard'
import './App.css'


function App() {



  return (
    <div className="container">

      <div className='heading'>
        <div className="title">
          WORDLE<sup>clone</sup>
        </div>

      </div>

      <div className='cube'>
        {[0, 1, 2, 3, 4, 5].map((row, rowIndex) => (
          <div className='cubeRow'
          key={rowIndex}>
            {
              [0, 1, 2, 3, 4].map((column, letterIndex) => (
                <div className='letterBox'
                 key={letterIndex}  >
                </div>
              ))
            }
          </div>
        ))}
      </div>






    <div className='keys'>
    <Keyboard />
    </div>
    
    
    </div>
  );
}

export default App;
