
import { createSignal } from 'solid-js';
import { createEffect } from 'solid-js';

function even_check( num) {
  if ( num % 2 === 0 ) {
     return true
  } else {
     return false
  }
}

function App() {
  const [count, setCount] = createSignal(0);

  //const color = () => count() > 0 ? 'red' : 'blue';
  const color = () =>  {
	if (even_check( count() )) {
		return 'red';
	} else {
		return 'blue';
	};
  }

  // 反応関数
  createEffect(() => {
    console.log(count());
  });


  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrease</button>
      <p style={{ color: color() }}>Count: {count()}</p>
    </div>
  );
}

export default App
