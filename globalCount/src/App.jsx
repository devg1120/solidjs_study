import { createSignal } from 'solid-js';

// globalなステート
const [globalCount, setGlobalCount] = createSignal(0);

function App() {
  // localなステート
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <button onClick={() => {
	                       setCount(count() + 1);
	                       setGlobalCount(globalCount() + 1);
                               }
                      }>Increase</button>

      <button onClick={() => {
	                       setCount(count() - 1);
	                       setGlobalCount(globalCount() - 1);
                               }
                      }>Decrease</button>

      <p>Count: {count()}</p>
      <p>Global Count: {globalCount()}</p>
    </div>
  );
}

export default App
