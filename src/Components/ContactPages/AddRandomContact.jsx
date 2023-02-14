import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async () => {
const apiResponse = await getRandomUser();
console.log(apiResponse);
};

const AddRandomContact = () => {
    return(
    <div>
        <button className="btn btn-success form-control" onClick={() => GetRandomContact()}>Add Random Contact</button>
    </div>);
}
export default AddRandomContact;