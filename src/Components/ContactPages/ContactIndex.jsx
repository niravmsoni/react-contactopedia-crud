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
                    id: 1,
                    name: "Saanvi Soni",
                    phone: "5678",
                    email: "saanvi@soni.com",
                    isFavorite: true,
                },
            ]
        }
    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className="continer" style={{minHeight: "85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact/>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact/>
                        </div>
                        <div className="row py-2">
                            <AddContact/>
                        </div>
                        <div className="row py-2">
                            <FavoriteContacts 
                            contacts={
                                this.state.contactList.filter
                                ((u) => u.isFavorite == true)}
                            />
                        </div>
                        <div className="row py-2">
                            <GeneralContacts
                            contacts={
                                this.state.contactList.filter
                                ((u) => u.isFavorite == false)}
                                />
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    };
};

export default ContactIndex;