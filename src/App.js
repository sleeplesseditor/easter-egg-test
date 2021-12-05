import './App.css';
import Snowfall from 'react-snowfall'

function App() {
  const name = ['Christmas'];

  return (
    <div className="App">
      <header className="App-header">
        {name.includes('Christmas') ? (
          <>
            <Snowfall
              // Changes the snowflake color
              color="white"
              // Applied to the canvas element
              // style={{ background: '#fff' }}
              // Controls the number of snowflakes that are created (default 150)
              snowflakeCount={700}
            />
            <p>Here Be Snow?</p>
          </>
        ) : null}
      </header>
    </div>
  );
}

export default App;
