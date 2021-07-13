import React, { useState } from 'react';
import insertProductApi from '../../api/insertProductApi';
    //we need to take the properties of the user from the login componenta!!! -tel, -userID

const ProductToInsert = () => {
    const [nameP, setNameP] = useState('');
    const [colorP, setColorP] = useState('');
    const [priceP, setPriceP] = useState(0);
    const [descP, setDescP] = useState('');
    const [categoryP, setCategoryP] = useState('');
    const [imgUrlP, setImgUrlP] = useState('');

    const categoryList = ['Living Room','Kitchen','Garden','סלון','Children Room'];





    //saving the details as an object.
    const save = async () => {
        debugger;
        const newProduct = {
            name: nameP,
            color: colorP,
            price: priceP,
            desc: descP,
            category: categoryP,
            imgUrl: imgUrlP
        };
        console.log(newProduct);
        debugger;
        let p = await insertProductApi(nameP,colorP,priceP,descP,imgUrlP,categoryP);
        debugger;

        if(p!= null){
            alert('succsses');
        }
        else{
            console.log('failed');
        }


    }


    return (
        <div>
            <form>
                <input type="text" name="nameP" onChange={e => setNameP(e.target.value)}></input>
                <button type="text">הכנס שם</button>
                <br />
                <br />



                <br></br>

                {/* <select id="dropdown">
                    <option value="N/A">בחר קטגוריה</option>
                    <option value="1" onSelect={e => setCategoryP(e.target.value)}>חדר ילדים</option>
                    <option value="2" onChange={e => setCategoryP(e.target.value)}>סלון</option>
                    <option value="3" onChange={e => setCategoryP(e.target.value)}>מטבח</option>
                    <option value="4" onChange={e => setCategoryP(e.target.value)}>חדר שינה</option>
                    <option value="4" onChange={e => setCategoryP(e.target.value)}> חצר</option>

                </select> */}


                <select id="dropdown" onChange={e => setCategoryP(e.target.value)}>
                    <option value="categoryP" >בחר קטגוריה</option>
                    <option value={categoryList[0]} >חדר ילדים</option>
                    <option value={categoryList[1]}>סלון</option>
                    <option value={categoryList[2]} >מטבח</option>
                    <option value={categoryList[3]} >חדר שינה</option>
                    <option value={categoryList[4]} > חצר</option>

                </select>

                <input type="text" name="colorP" onChange={e => setColorP(e.target.value)}></input>
                <button type="text">הכנס צבע</button>
                <br />
                <br />


                <input type="number" name="priceP" onChange={e => setPriceP(e.target.value)}></input>
                <button type="text">הכנס מחיר</button>
                <br />
                <br />


                <input type="text" name="descP" onChange={e => setDescP(e.target.value)}></input>
                <button type="text">הכנס תאור</button>
                <br />
                <br />


                {/* <input type="text" name="categoryP" onChange={e => setCategoryP(e.target.value)}></input>
                <button type="text">הכנס קטגוריה</button>
                <br />
                <br /> */}

<div >Upload a Picture</div>

                <input type="file" name="imgUrlP" onChange={e => setImgUrlP(e.target.value)}></input>
                <br />
                <br />

                <br>
                </br>

                <button type="button" onClick={save}>save</button>
            </form>
        </div>
    );

}

export default ProductToInsert;