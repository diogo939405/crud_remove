
import React, { useState} from 'react'
export async function getdata() {
    const [result, setResult] = useState([]);
    const url = "https://blue-enchanting-macaw.cyclic.cloud/diogo";
    console.log('ENTROU', url)
    // let result = {};
    await fetch(url).then(res => {
        setResult(res.json)
        
    });
     Promise.resolve(getdata()).then((rr) =>console.log("Console do rr",rr));
    console.log('RESULT  ',  Promise.resolve(getdata()))
    return result;
}