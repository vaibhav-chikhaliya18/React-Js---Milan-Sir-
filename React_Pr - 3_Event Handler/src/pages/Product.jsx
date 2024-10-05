import React, { useState } from 'react';
import './product.css'
import { IoFastFoodOutline } from "react-icons/io5";

const Product = ({ menu, item }) => {
    const [itemMenu, setItemMenu] = useState(menu);
    const [products, setProducts] = useState(item);

    const FilterData = (cat) => {
        if(cat == "All"){
            setProducts(item);
        }else{
            const f = item.filter((product) => product.catogry === cat);
            setProducts(f);
        }
       
    }

    return (
        <div>
      <h1 className='mt-1'><IoFastFoodOutline /> Restaurant</h1>

            <button className='btn btn-danger  mt-3 mx-3' onClick={() =>FilterData("All")}>All</button>
            {itemMenu.map((val, index) => (
                <button onClick={() => FilterData(val.catogry)} className='btn btn-light mt-3 mx-3' key={index}> {val.catogry}</button>
            ))}
            <br /><br />
            <div className='container'>
                <div className='row'>
                    {products.map((p, index) => (
                        <div key={index} className='col-lg-4'>
                            <div className="card mt-5" style={{ width: '20rem', height: "25rem" }}>
                                <img className="card-img-top" src={p.image} alt="Product" />
                                <div className="card-body">
                                    <h5 className="card-title mt-1">Name:- {p.name}</h5>
                                    <p className="card-text mt-2">Price:- {p.price}</p>
                                    <button className='btn btn-danger  w-100'>Buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
