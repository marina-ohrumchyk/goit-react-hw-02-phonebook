import React from 'react';
import { nanoid } from 'nanoid'
import Phonebook from 'components/Phonebook'

// import Phonebook from 'components/Phonebook';

// export default function App() {
//   return (
//     <div>
//       <Phonebook/>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  nameInputId= nanoid();
  numberInputId= nanoid()

  handleChange =e=>{
    const{name, value} = e.currentTarget
    this.setState({ [name]: value})
  }

  hendleSubmit=e=>{
    e.preventDefault()
    console.log(this.state)
    // this.reset()
  }

  // reset=()=>{
  //   this.setState({name: '',
  //   number: ''})
  // }

  // handleInputChange = e =>{
  //   this.setState({name: e.currentTarget.value})
  // }
    render() {
      const {contacts, name, number} = this.state
      return (<div>
        <h2>Phonebook</h2>
        <Phonebook 
        contacts={contacts}
        value={name}
        valueNamber={number}
        onChange= {this.handleChange}
        onSubmit={this.hendleSubmit}
        nameInputId={this.nameInputId}
        numberInputId={this.numberInputId}
        />
      </div>
        
      );
    }
  }
  
  export default App;