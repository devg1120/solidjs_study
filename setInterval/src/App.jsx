
import { createSignal } from 'solid-js';
import { createEffect } from 'solid-js';

const App = () => {
  const [count, setCount] = createSignal(0)

  setInterval(() => setCount(count() + 1), 1000)
  
  createEffect(() => {
    console.log(count())
  })

  return <div>{ count() }</div>
}

export default App
