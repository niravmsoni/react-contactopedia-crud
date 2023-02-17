import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";

class ContactIndex extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactList: [
                {
                    id: 1,
                    name: "Nirav Soni",
                    phone: "12345",
                    email: "nirav@soni.com",
                    isFavorite: false,
                },
                {
                    id: 2,
                    name: "Hemali Soni",
                    phone: "9876",
                    email: "hemali@soni.com",
                    isFavorite: true,
                },
                {
                    id: 3,
                    name: "Saanvi Soni",
                    phone: "5678",
                    email: "saanvi@soni.com",
                    isFavorite: true,
                },
            ],
            selectedContact: undefined,
            isUpdating: false,
        }
    }

    handleAddContact = (newContact) => {
        if (newContact.name ==""){
            return{status: "failure", msg: "Please enter a valid name"};
        }
        else if (newContact.phone ==""){
            return{status: "failure", msg: "Please enter a valid name"};
        }
        
        const duplicateRecord = this.state.contactList.filter((x) => {
            if (x.name == newContact.name && x.phone == newContact.phone){
                return true;
            }
        });

        if (duplicateRecord.length > 0){
            return{status: "failure", msg: "Duplicate Record"};
        }
        else{
            const newFinalContact = {...newContact,
                id: this.state.contactList[this.state.contactList.length-1].id + 1,
                isFavorite: false
            };
            this.setState((prevState) => {
                return{
                    contactList: prevState.contactList.concat([newFinalContact]),
                }
            })
            return{status: "success", msg: "Contact added successfully"};
        }
    }

    handleToggleFavorite = (contact) => {
        this.setState((prevState) =>{
            return{
                contactList: prevState.contactList.map((obj) => {
                    if (obj.id === contact.id){
                        return{...obj, isFavorite: !obj.isFavorite};
                    }
                    return obj;
                })
            }
        })
    }

    handleDeleteContact = (contactId) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.filter((obj) => {
                    return obj.id !== contactId
                })
            };
        });
    }

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {...newContact,
            id: this.state.contactList[this.state.contactList.length-1].id + 1,
            isFavorite: false
        };
        this.setState((prevState) => {
            return{
                contactList: prevState.contactList.concat([newFinalContact]),
            }
        })
    }

    handleRemoveAllContact = () => {
        this.setState((prevState) => {
            return{
                contactList: [],
            }
        })
    }

    handleUpdateClick = (contact) => {
        console.log(contact);
        this.setState((prevState) => {
            return {
                selectedContact: contact,
                isUpdating: true
            }
        })
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="continer" style={{minHeight: "85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact handleAddRandomContact = {this.handleAddRandomContact}/>
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContact removeAllContactClick = {this.handleRemoveAllContact}/>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <AddContact handleAddContact = {this.handleAddContact}/>
                            </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <FavoriteContacts 
                            contacts={
                                this.state.contactList.filter
                                ((u) => u.isFavorite == true)}
                                favoriteClick = {this.handleToggleFavorite}
                                deleteClick = {this.handleDeleteContact}
                                updateClick = {this.handleUpdateClick}
                            />
                        </div>
                        </div>
                        <div className="row py-2">
                        <div className="col-8 offset-2 row">
                            <GeneralContacts
                            contacts={
                                this.state.contactList.filter
                                ((u) => u.isFavorite == false)}
                                favoriteClick = {this.handleToggleFavorite}
                                deleteClick = {this.handleDeleteContact}
                                updateClick = {this.handleUpdateClick}
                                />
                        </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    };
};

export default ContactIndex;