import logo from './logo.svg';
import './App.css';
//import Operations from './Operations';
//import Count2 from './Count2';
//import Buttons from './Buttons';
//import Greetings from './Greetings'
//import Hello from './Hello'
//import Hello2 from './Hello2'
import ContactCard from './ContactCard';

export default function App() {
  let contacts = [
    {
      name: "Victor", imgUrl: "https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg",
      phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"
    },
    {
      name: "Sergey", imgUrl: "https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg",
      phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"
    },


  ]



  let mapContacts = contacts.map(contact =>
    <ContactCard
      name={contact.name}
      imgUrl={contact.imgUrl}
      phone={contact.phone}
      email={contact.email}
    />
  )
  return (
    <div className="contacts">
      {mapContacts}
    </div>
  );
}



/*function App() {
  const props = {firstNAme: 'Pallav', lastName:'Hegde'}
  return <Hello2{...props}/>
}*/




/*
return (
  <div className="contacts">
  <ContactCard
  name= "Victor"
  imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg"
  phone="(212) 555-1234"
  email="mr.whiskaz@catnap.meow"
  />

  <ContactCard
  name= "Sergey"
  imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1614528057_41-p-muzhchina-na-belom-fone-47.png"
  phone="(212) 555-1234"
  email="mr.whiskaz@catnap.meow"
  />

<ContactCard
  name= "Andrey"
  imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1614528072_100-p-muzhchina-na-belom-fone-117.jpg"
  phone="(212) 555-1234"
  email="mr.whiskaz@catnap.meow"
  />

<ContactCard
  name= "Igor"
  imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1614528007_43-p-muzhchina-na-belom-fone-49.jpg"
  phone="(212) 555-1234"
  email="mr.whiskaz@catnap.meow"
  />
  </div>
);
}*/

