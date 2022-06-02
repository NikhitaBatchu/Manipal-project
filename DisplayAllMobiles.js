import { useEffect, useState } from "react";
import IMobileService from "../../Services/Mobile/IMobileService";

function DisplayAllMobiles() {

    const [mobiles, setMobiles] = useState(
        [
            {
            "mobileId": "",
            "mobileName": "",
            "mobileCost": "",
            "mfd": "",
            "modelNumber": "",
            "companyName": ""
            }
        ]);

    useEffect(() => {
        loadAllMobiles();
    }, []);



    const loadAllMobiles = () => {
        IMobileService.showAllMobile()
            .then((response) => {
                console.log(response.data);

                setMobiles(response.data);
            })
            .catch((error) => { console.log(error) })
    };

   const [msg]=useStatae(undefined);
   const [errorMsg]=useState(undefined);

    const mobilesTableElement = (
        <>
            <div className="displayMobiles" >
                <h3>Display All Mobiles:</h3>
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
                            mobiles.map((mobile) => (
                                <tr key={mobile.mobileId}>
                                    <td>{mobile.mobileName}</td>
                                    <td>{mobile.mobileCost}</td>
                                    <td>{mobile.mfd}</td>
                                    <td>{mobile.modelNumber}</td>
                                    <td>{mobile.companyName}</td>
                                    <td>
                                        <input className="btn btn-info" id="edit" type="button" value="Edit Mobile" onClick={() => updateHandler(mobile)}></input>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input className="btn btn-danger" id="delete" type="button" value="Delete Mobile" onClick={() => deleteHandler(mobile.mobileId)}></input>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
    return (
       <>
	   {mobilesTableElement}
	   </>
	   );
}
export default DisplayAllMobiles;