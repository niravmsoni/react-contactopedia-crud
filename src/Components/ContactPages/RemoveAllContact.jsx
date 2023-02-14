const RemoveAllContact = (props) => {
    return(
    <div>
        <button className="btn btn-danger form-control" onClick={() => props.removeAllContactClick()}>Remove All</button>
    </div>);
}
export default RemoveAllContact;