import s from './Contacts.module.css';

export default function ContactListItem({ contact, onDelete }) {
  return (
    <li className={s.item} key={contact.id}>
      <p>
        {contact.name} : {contact.number}
      </p>
      <button
        className={s.btn__delete}
        type="button"
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
