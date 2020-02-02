import React from 'react';
import logo from './logo.svg';
 import axios from "axios";

 class App extends React.Component {
   state = {
     bookDetails: "",
     error: ""
   };

   fetchBookDetails = () => {
     axios
     .get("/book/12345789")
     .then(res => {
       console.log(res.data);
       this.setState({bookDetails : JSON.stringify(res.data)});
     })
     .catch(err => {
       this.setState({ error : err.toString() }); 
     });
   };
 render () {
  return (
    <div>
      <p>Hi from React</p>
      <p>{this.state.bookDetails}</p>
      <p>{this.state.err}</p>
      <button onClick={this.fetchBookDetails}>Fetch Book Data</button>
    </div>
  );
}
 }

export default App;
