import {useState } from "react";
import IMobileService from "../../Services/Mobile/IMobileService";

function DisplayMobileByModelNumber() {

    const [mobiles, setMobiles] = useState([
        {
            "mobileId": "",
            "mobileName": "",
            "mobileCost": "",
            "mfd": "",
            "modelNumber": "",
            "companyName": ""       
}]);
const [mobileModelNumber,setMobileModelNumber] = useState (
    {
        "modelNumber": ""
    }

);

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMobileModelNumber((preMobileModelNumber) => ({ ...preMobileModelNumber, [name]: value }))
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mobileModelNumber.modelNumber);
    IMobileService.showMobileBymodelNumber(mobileModelNumber.modelNumber)
        .then((response) => {
            console.log(response.data);
            setMobiles(response.data)
            console.log(mobiles)
            setMsg("Successfully mobile Details By modelNumber")
            setIsSubmitted(true)
        })
        .catch((error) => {
            console.log(error)
            setErrorMsg("Failed to Display Mobile Details")
            setIsSubmitted(false)
        })
};

    
    const mobileModelNumber = (
        <>
            <h3>Display mobile By modelNumber</h3><br></br>

            <form onSubmit={handleSubmit}>
                ModelNumber:
                <input type="text" name="modelNumber" value={mobileModelNumber.modelNumber} onChange={handleChange}></input>
                <input type="submit" />
            </form>
        </>
    );
        
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [msg,setMsg] = useState(undefined);
    const [errorMsg,setErrorMsg] = useState(undefined);


    const mobilesTableElement = (
        <>
            <h3>Display Mobile By modelNumber:</h3>
            {msg && <h5 className="alert alert-success">{msg}</h5>}
            {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                            <th>mobileId</th>
                            <th>mobileName</th>
                            <th>mobileCost</th>
                            <th>mdf</th>
                            <th>modelNumber</th>
							<th>companyName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           <td>
                        {mobiles.mobileId}

                    </td>
                    <td>
                        {mobiles.mobileName}
                    </td>
                    <td>
                        {mobiles.mobileCost}
                    </td>
                    <td>
                        {mobiles.modelNumber}
                    </td>
					<td>
					    {mobiles.mfd}
				    </td>
					    {mobiles.companyName}
                    </td>   
						}
                </tbody>
            </table><br />
        </>

    );
    return (
      isSubmitted?mobilesTableElement:modelNumber
    );
}
export default DisplayMobileByModelNumber;