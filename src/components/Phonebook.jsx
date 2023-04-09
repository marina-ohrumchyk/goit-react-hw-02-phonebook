import React from 'react';
import { nanoid } from 'nanoid'
// class Phonebook extends React.Component {
  
//     render() {
      
//       return (
//         <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />
//       );
//     }
//   }
  
//   export default Phonebook;

const Phonebook = ({ contacts, name, onChange,number,onSubmit,nameInputId,numberInputId}) => (
   <form onSubmit={onSubmit}>
    <label htmlFor="">Name 
    <input
      type="text"
      value={name}
      name={nameInputId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onChange}
    /></label>
    <label htmlFor="">Number 
    <input
      type="text"
      value={number}
      name={numberInputId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onChange}
    /></label>
    <button type="submit">Add contact</button>
   </form> 
  );
  export default Phonebook;