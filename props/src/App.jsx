import { createSignal } from 'solid-js';


// ok
// 関数でラップする
function Child1(props) {
    const count = () => props.count

  return <p>Child1 Count: {count()}</p>;
}

// ok
// propsのまま使う
function Child2(props) {
  return <p>Child2 Count: {props.count}</p>;
}

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
      <Child1 count={count()} />
      <Child2 count={count()} />
    </div>
  );
}


export default App
