import React, {useEffect, useState} from "react"
import { getUserInsurances, getInsurances } from "../ApiCalls";
import Insurance from "./Insurance"
import "./InsuranceList.css" 

const InsuranceList = ({user}) => {
    const [userInsurances, setUserInsurances] = useState([])
    const [insurances, setInsurences] = useState([])
     
    
    //if there is insurances available, display them
    const InsuranceList = () =>{
        if(userInsurances.length > 0){
            return userInsurances.map(ui => {
                const insurance = insurances.find(i => i.id === ui)
                if(typeof insurance !== "undefined"){
                    
                    return(<Insurance key={insurance.id} insurance={insurance}/>)
                }else{
                    return(<p>Ops, nu blev det fel. Vi kan inte hitta din försäkring.</p>)
                }
            }); 
        }
        else{
            return <p>Laddar..</p>
        }
    }

    //On render, get User Insurences from api and set it to userInsurances state.
    useEffect(()=>{
        const fetchUserInsurances = async () => {
            const result = await getUserInsurances();
            setUserInsurances(result[user.id]);
        }
        fetchUserInsurances();
    },[user.id])

    //On render, get insurence plans and set it to insurances state.
    useEffect(()=>{
        const fetchInsurences = async () => {
          const response = await getInsurances();
          setInsurences(response)
        }
        fetchInsurences();
        
    }, [])

    

    return(
    <div className="insurance_list"> 
        <InsuranceList/>
    </div>);
}

export default InsuranceList;