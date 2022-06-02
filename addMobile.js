import { useState } from "react";
import IMobileService from "../../Services/Mobile/IMobileService";

const addMobile = () => {

    const [mobile,setMobile] = useState(
	{
            "mobileId": "",
            "mobileName": "",
            "mobileCost": "",
            "mfd": "",
            "modelNumber": "",
            "companyName": ""
	}
          
    );
	const [msg,setMsg]=useState(undefined);
	const [errorMsg,setErrorMsg]=useState(undefined);
    
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setMobile((preMobile)=>({...preMobile,[name]:value}))
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(mobile);
        IMobileService.addMobile(mobile)
        .then((response)=>{
		console.log(response.data)
		setMsg("Mobile Details added successfully!");
		setErrorMsg(undefined);
		})
        .catch((error)=>{
		console.log(error)
		setErrorMsg("Failed to add Mobile details");
		})

    }
    return (
        <>
		<div className="Mobile">
        <h3> Create new Mobile.</h3>
		{msg && <h5 className="alert alert-success">{msg}</h5>}
			{erroeMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
        <form onSubmit={handleSubmit}>
            mobileId:
            <input type="Number" name="mobileId" value={mobile.mobileId} onChange = {handleChange} /><br/>
            mobileName:
            <input type="text" name="mobileName" value={mobile.mobileName} onChange = {handleChange} /><br/>
            mobileCost:
            <input type="text" name="mobileCost" value={mobile.mobileCost} onChange = {handleChange} />
			mfd:
			<input type="text" name="mfd" value={mobile.mfd} onChange = {handleChange} />
			modelNumber:
			<input type="text" name="modelNumber" value={mobile.modelNumber} onChange = {handleChange} />
			companyName:
			<input type="text" name="companyName" value={mobile.companyName} onChange = {handleChange} />
			
            <input type="submit"/>
        </form>

        </>
    );
};
export default addMobile;