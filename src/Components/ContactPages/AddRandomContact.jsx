import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
const apiResponse = await getRandomUser();
console.log(apiResponse);

return props.handleAddRandomContact({
    name: apiResponse.data.first_name + " " + apiResponse.data.last_name,
    email: apiResponse.data.email,
    phone: apiResponse.data.phone_number,
    });
};

const AddRandomContact = (props) => {
    return(
    <div>
        <button className="btn btn-success form-control" onClick={() => GetRandomContact(props)}>Add Random Contact</button>
    </div>);
}
export default AddRandomContact;