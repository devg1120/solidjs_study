import { createSignal } from 'solid-js';

function App() {
  const [position, setPosition] = createSignal({ x: 0, y: 0 });

  return (
    <div>
      <p>Position: {position().x}, {position().y}</p>
      <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>
        <p>Move here</p>
      </div>
    </div>
  );
}

export default App
