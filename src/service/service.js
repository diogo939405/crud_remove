
import  { useState} from 'react'
export async function Getdata() {
    const [result, setResult] = useState([]);
   
    const url = "https://blue-enchanting-macaw.cyclic.cloud/diogo";
    console.log('ENTROU', url)
    // let result = {};
    await fetch(url).then(res => {
        setResult(res.json)
        
    });
     Promise.resolve(Getdata()).then((rr) =>console.log("Console do rr",rr));
    console.log('RESULT  ',  Promise.resolve(Getdata()))
    return result;
}