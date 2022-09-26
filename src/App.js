import './App.css';

import Header from './components/Header';
import Contact from './components/Contact'
import ContactForm from './components/ContactForm';
import {useState} from 'react';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

// console.log(contactsJSON);

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [Contacts, setContacts] = useState(contactsJSON);

  const setContactForm = (newContact) => {
    setContacts([...Contacts, newContact]);
    // console.log(Contacts);
  }


  return (
    <div className="App">
      <Header/>
      <div style={{display: 'flex'}}>
        <ContactForm propsContactsSubmit={setContactForm}/>
        <Contact data={Contacts}/>
      </div>
    </div>
  );
};

export default App;
