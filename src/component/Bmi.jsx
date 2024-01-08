import React, { useState } from 'react'

function Bmi() {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [status, setStatus] = useState("");


    const bmiCalculation = (e) => {
        e.preventDefault();
        const heightm = height / 100;
        const BMI = weight / (heightm * heightm);
        
        // console.log(BMI)
        if(BMI < 18.5){
            setStatus("Under Weight")
        }else if(BMI > 18.5 && BMI < 24.9){
            setStatus("Normal Weight")
        }else if(BMI > 30 && BMI < 35){
            setStatus("Obese")
        }else if(BMI > 35){
            setStatus("Morbid obesity")
        }else{
            setStatus("Negligible")
        }
        console.log(status);

    }
    return (
        <>
        <form onSubmit={bmiCalculation}>
            <label htmlFor="weight">Weight in (KG)</label>
            <br />
            <input type="text" name="" id="" value={weight} onChange={(e) => { setWeight(e.target.value) }} />
            <br />
            <label htmlFor="height">Height in (cm)</label>
            <br />
            <input type="text" name="" id="" value={height} onChange={(e) => { setHeight(e.target.value) }} />
            <br />
            <input type="submit" value="Submit" />

        </form>
        <h1>Status of BMI Calculator : {status}</h1>
        <p>
Below 18.5 Underweight</p>
<p>18.5–24.9 Normal weight</p>
<p>25–29.9 Overweight</p>
<p>30–35 Obese</p>
<p>Over 35 Morbid obesity
</p>
</>
        
    )
}

export default Bmi
