import React from 'react';
import './App.css'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showMessage = (index) => {
    toast.success(`success ${index}`)
  }
  render(){
    console.log("render")
    return (

      <div>
        <ToastContainer/>
        {this.showMessage(1)}
      </div>  
    )
  }
}
export default App;
