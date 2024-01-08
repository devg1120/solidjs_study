import { createSignal } from 'solid-js';
import { createRenderEffect } from 'solid-js';

function App() {

  const [name, setName] = createSignal("");
  
  function model(el, value) {       /* custom directive */
    const [field, setField] = value();
    createRenderEffect(() => (el.value = field()));
    el.addEventListener("input", (e) => setField(e.target.value));
  }

  return (
    <div>
      <input type="text" use:model={[name, setName]} />;
      <p>input: {name()} </p>
    </div>
  );
}

export default App
