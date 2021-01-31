import './App.css';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger'

function App() {
  
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)

  return (
    <div>
      <h1>Custom Hooks?!??!??!??!??!??!??!??!??!~~</h1>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        />
    </div>
  );
}

export default App;
