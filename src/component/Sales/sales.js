import React from 'react';
// import ProductToInsert from './productToInsert';
import { useHistory } from 'react-router-dom';


const Sales = () => {
    let history = useHistory();

    function insertButton(){
        history.push('insertProduct');
        console.log(history);
    }

    // console.log("hi' i am event");
    return <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Sales
        <button onClick={insertButton}>insert new product</button>

    </div>
}

export default Sales;