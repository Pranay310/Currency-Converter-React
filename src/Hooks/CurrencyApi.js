import { useState , useEffect} from "react";

function CurrencyApi(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/ca91150b45999728ed83d9ef/latest/${currency}`)
        .then((res)=>res.json())
        .then((res) => setData(res[currency]))
        // console.log(res)
    },[currency])
        console.log(res)

}
export default CurrencyApi;