import { createSignal } from 'solid-js';

function App() {
  const [isActive, setIsActive] = createSignal(false);

  return (
    <div
      classList={{
        active: isActive(),
      }}
    >
      <button onClick={() => {
	                      if ( isActive()) {
	                          setIsActive(false)
		              } else {
	                          setIsActive(true)
		              }
                           }
                     }>SetIsActive</button>
      <p>I am {isActive() ? 'active' : 'not active'} </p>
    </div>
  );
}

export default App
