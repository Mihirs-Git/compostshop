import React, { useEffect, useState } from "react";
import { Button, Card } from "reactstrap";
import { MdClose } from 'react-icons/md';
import { TiEquals } from 'react-icons/ti';

function Cart(props){

    const quantity = {
        1: 2,
        2: 3,
        3: 4
    };

    const rawData = [{
        id: 1,
        company: "Company 1",
        product: "Product A",
        price: 500,
        weight: 5,
        availableQuantity: 5,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        id: 2,
        company: "Company 2",
        product: "Product B",
        price: 1000,
        weight: 10,
        availableQuantity: 4,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        id: 3,
        company: "Company 3",
        product: "Product C",
        price: 5000,
        weight: 15,
        availableQuantity: 3,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    }];
    

    return(
        <React.Fragment className="cartPage">
            <div className="cartPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Card className="cartTemplate my-2 my-md-5 h-100">
                                <div className="row h-100 m-3 m-md-5">
                                    <div className="col-12 col-md-6">
                                        <div className="h-100 splitDiv p-md-2">
                                            <div className="cartTitleBar d-flex align-items-center m-md-2">
                                                <div className="col-12 col-md-6">
                                                    <div className="cartTitle">
                                                        Your Shopping Cart  
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="cartTitleInfo d-flex justify-content-end">
                                                        <div className="cartCountInfo pt-2">3 items</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="cardContent">
                                                {rawData.map(d => {
                                                    return(
                                                        <Card className="cartProductTemplate mb-2 d-flex flex-row p-2">
                                                            <div className="d-flex flex-column justify-content-center cartProductInfo w-40">
                                                                <div className="cartProductName">{d.product}</div>
                                                                <div className="cartProductCompany">{d.company}</div>
                                                            </div>            
                                                            <div className="cartWeightInfo d-flex align-items-center justify-content-center w-10">
                                                                <div className="cartProductWeight">
                                                                    {d.weight}<sub>&#13199;</sub>
                                                                </div>
                                                            </div>
                                                            <div className="cartPriceInfo d-flex align-items-center justify-content-center">
                                                                <div className="cartProductPrice">
                                                                    {d.price}<sup>&#8377;</sup>     
                                                                </div>
                                                                <div className="mx-2">
                                                                    <MdClose></MdClose>
                                                                </div>
                                                                <div className="cartProductQuantity">
                                                                    {quantity[d.id]}
                                                                </div> 
                                                                <div className="mx-2">
                                                                    <TiEquals ></TiEquals>
                                                                </div>
                                                                <div className="cartProductTotal">
                                                                    {d.price*quantity[d.id]}<sup>&#8377;</sup>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    )
                                                })}
                                            </div>
                                        </div>  
                                    </div>
                                    <div className="col-12 col-md-6 p-0">
                                        <div className="h-100 bg-primary text-white splitDiv p-2">  
                                            <div className="cartTitleBar d-flex align-items-center m-2">
                                                <div className="col-12 col-md-6">
                                                    <div className="cartTitle pl-2">
                                                        Checkout Here  
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="statusBtn d-flex justify-content-end">
                                                        <Button>Check Status</Button>  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;