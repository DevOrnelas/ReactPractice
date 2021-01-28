import './App.css';

import { connect } from 'react-redux'
import {add_to_state} from './Actions/addActions'
import {sub_from_state} from './Actions/subtractActions'

function App(props) {
  return (
    <div className="App">
      <h1>Redux Testing one wo one two one two....</h1>
      <h1>Number: <span>{props.state}</span></h1>
      <button onClick={props.add}>ADD</button>
      <button onClick={props.sub}>SUBTRACT</button>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: ()=>{
      dispatch(add_to_state())
    },
    sub: ()=>{
      dispatch(sub_from_state())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
