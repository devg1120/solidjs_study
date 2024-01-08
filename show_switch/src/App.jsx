import { Show } from 'solid-js';
import { createSignal } from 'solid-js';

function App() {
  const [count1, setCount1] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  return (
    <div>
    <div>
      <Show when={count1() > 0}>
        <p>Count: {count1()}</p>
      </Show>
      <Show when={count1() === 0}>
        <p>Count is 0</p>
      </Show>
      <button onClick={() => setCount1((prevCount) => prevCount + 1)}>Increase</button>
      <button onClick={() => setCount1((prevCount) => prevCount - 1)}>Decrease</button>
    </div>
    <div>
      <Switch fallback={<p>Count is {count2()}</p>}>
        <Match when={count2() > 0}>
          <p>Count: {count2()} </p>
        </Match>
        <Match when={count2() === 0}>
          <p>Count is 0</p>
        </Match>
      </Switch>
      <button onClick={() => setCount2((prevCount) => prevCount + 1)}>Increase</button>
      <button onClick={() => setCount2((prevCount) => prevCount - 1)}>Decrease</button>
    </div>
    </div>
  );
}

export default App
