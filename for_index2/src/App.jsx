import { For } from 'solid-js';
import { Index } from 'solid-js';

function App() {
 const arr = ['a', 'b', 'c', 'd'];

  return (
    <div>
    <div> For
	  <For each={arr}>{(item, index) => <div>{index()}. {item}</div>}</For>
    </div>
    <div> Index
	  <Index each={arr}>{(item, index) => <div>{index}. {item()}</div>}</Index>
    </div>
    </div>
  );
}



export default App
