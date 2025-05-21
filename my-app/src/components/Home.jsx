'use client';
import { useState } from "react";
import Base from "./Base";
import { useEffect } from "react";

export default function Home()
{
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);

    // let response=await fetch('https://dummyjson.com/products')
    // let data=response.json()
    // console.log(data);

    let [products , setProducts ] = useState([]);
    console.log(products)

    async function fetchproduct() {
        let response = await fetch('https://dummyjson.com/products')
        let data=await response.json()
        console.log(data)
        setProducts(data.products)
    }
    useEffect(()=>{
        fetchproduct()
    },[])
    
    return(
        <>
        <Base/>
        <div className="container">
            <div className="row">
                {
                    products && products.map((products,index)=>{
                        return(
                            <>
                            <div className="col-md-3 mb-3 key={products.id}">
                            <div className="card" style={{width: 15+"rem"}}>
                            <img src={products.thumbnail} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{products.title}</h5>
                                <p className="card-text">{products.description}</p>
                                <p className="card-text">Price:{products.price}</p>
                                <a href="#" className="btn btn-primary">View More</a>
                            </div>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}