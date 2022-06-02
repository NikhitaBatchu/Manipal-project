import { useState } from "react";
import IMobileService from "../../Services/Mobile/IMobileService";

const DeleteMobile = () => {

    const [Delete, setDelete] = useState(
        {
            "modelNumber": ""
        }
    );

    
    const [msg, setMsg] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(undefined);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDelete((preDelete) => ({ ...preDelete, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(delet.modelNumber);
        IMobileService.deleteMobile(delet.modelNumber)
            .then((response) => {
                console.log(response.data)
                setMsg("Mobile deleted successfully !");
                setErrorMsg(undefined);
            })
            .catch((error) => {
                console.log(error)
                setErrorMsg("Failed to delete Mobile !");
                setMsg(undefined);
            })
    }
    return (
        <>
            <div className="Mobile">
                <h3>Delete Account BY ModelNumber:</h3>
                {msg && <h5 className="alert alert-success">{msg}</h5>}
                {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
                <form onSubmit={handleSubmit}>
                    ModelNumber:
                    <input type="text" name="modelNumber" value={delet.modelNumber} onChange={handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
};

export default DeleteMobile;