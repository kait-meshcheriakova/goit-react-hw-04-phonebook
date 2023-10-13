import React from 'react';

import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            &times;
          </Button>
        }
      </Item>
    ))}
  </List>
);
export default ContactList;
