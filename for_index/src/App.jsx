import { For } from 'solid-js';
import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <For each={Array.from({ length: count() })}>
        {(_, i) => (
          <p key={i}>Count: {i}</p>
        )}
      </For>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
    </div>
  );
}



export default App
