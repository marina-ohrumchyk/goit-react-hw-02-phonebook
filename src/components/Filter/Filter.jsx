import React from 'react';
import css from 'components/Filter/Filter.module.css';

const Filter = ({
  UpHandleFilterChange,
  UphandleDelete,
  UpfilteredContacts,
  Upfilter,
}) => (
  <div>
    <h2 className={css.title}>Contacts</h2>
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" value={Upfilter} onChange={UpHandleFilterChange} />
    </label>
    <ul>
      {UpfilteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => UphandleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Filter;
