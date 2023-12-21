//import React from "react";

function ContactCard(props) {
    return( 
        <div className="contact-card">
            <img align="center" src={props.imgUrl} width="auto" height="250px" alt="man"/>
            <h3 style={{color:"#3AC1EF"}}>{props.name}</h3>
            <p>Phone:{props.phone}</p>
            <p>Email:{props.email}</p>
        </div>

    )
}

export default ContactCard

/*export default function App() {
    let contacts= [
        {name: "Victor",imgUrl:"https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg",
        phone:"(212) 555-1234",email:"mr.whiskaz@catnap.meow"}
    ]
    let mapContacts = contacts.map(contact =>
        <ContactCard
        name={contact.name}
        imgUrl={contact.imgUrl}
        phone={contact.phone}
        email={contact.email}
        />
        )
        return(
            <div className="contacts">
                {mapContacts}
            </div>
        );
}
*/