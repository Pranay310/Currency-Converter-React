import React from "react";

function InputBox(){



    return(
        <div className=" h-32 w-96  bg-red-300 rounded-3xl p-3 flex justify-between">

            <div>
            <label className=" p-2 text-white-600 font-bold">From</label><br/>
            <input type="number" className=" p-2 rounded-2xl h-10 w-28 my-2"></input>
            </div>

            <div>
            <h6 className=" font-bold">Current Type</h6>
            <select className=" h-10 w-28 rounded-2xl my-2"></select>
            </div>

        </div>
    )
}

export default InputBox;