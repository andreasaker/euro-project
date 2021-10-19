import React, {useEffect, useState} from "react"
import { getUserInsurances, getInsurances } from "../ApiCalls";
import Insurance from "./Insurance"
import "./InsuranceList.css" 

const InsuranceList = ({user}) => {
    const [userInsurances, setUserInsurances] = useState([])
    const [insurances, setInsurences] = useState([])
     
    
    //listview
    const InsuranceList = () =>{
        if(userInsurances.length > 0){
            return userInsurances.map(ui => {
                const insurance = insurances.find(i => i.id === ui)
                console.log("insuranse", insurances, insurance, ui)
                if(typeof insurance !== "undefined"){
                return(<Insurance key={insurance.id} insurance={insurance}/>)
                }
            }); 
        }
        else{
            return <p>Laddar..</p>
        }
    }

    //On render, get UserInsurences from api and set it to userInsurances var.
    useEffect(()=>{
        const fetchUserInsurances = async () => {
            const result = await getUserInsurances();
            setUserInsurances(result[user.id]);
        }
        fetchUserInsurances();
    },[user.id])

    //On render, get insurence plans
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