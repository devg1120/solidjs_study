
import { createSignal } from 'solid-js';
import { createMemo } from 'solid-js';
import { batch } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  const sum = createMemo(() => count() + count2())

  const handleClick = () => {
    batch(() => {
      setCount(count() + 1);
      setCount2(count2() + 1);
    });
  };

  return (
    <div>
      <p>Sum: {sum()}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}



export default App
