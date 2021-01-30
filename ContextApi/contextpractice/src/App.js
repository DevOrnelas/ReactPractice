import './App.css';
import { useContext } from 'react'
import { UserContext } from './Context/UserContext';

function App() {
  const { users } = useContext(UserContext)
  const listOfUsers = users.map((value)=> <h1>{value.name}</h1>)
  return (
    <div className="App">
      <h1>Testing Basic React Context Api</h1>
      {listOfUsers}
    </div>
  );
}

export default App;
