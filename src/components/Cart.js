import React, { useEffect, useState } from "react";
import { Button, Card, CardFooter, Input, Progress } from "reactstrap";
import { MdDelete } from 'react-icons/md';

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
                                                            <div className="cartPriceInfo d-flex align-items-center justify-content-end mx-3">
                                                                <div className="cartProductPrice">
                                                                    {d.price}<sup>&#8377;</sup>     
                                                                </div>
                                                                <div className="mx-2">
                                                                    X
                                                                </div>
                                                                <div className="cartProductQuantity">
                                                                    {quantity[d.id]}
                                                                </div> 
                                                                <div className="mx-2">
                                                                    =
                                                                </div>
                                                                <div className="cartProductTotal">
                                                                    {d.price*quantity[d.id]}<sup>&#8377;</sup>
                                                                </div>
                                                            </div>
                                                            <CardFooter className="cartItemDelete d-flex align-items-center justify-content-center">
                                                                <MdDelete className="icons" id="cartIconDelete"></MdDelete>
                                                            </CardFooter>
                                                        </Card>
                                                    )
                                                })}
                                            </div>
                                            <Card className="cartProductTemplate d-flex flex-row align-items-center justify-content-end my-2">
                                                <div className="cartProductTotal mx-3">24000<sup>&#8377;</sup> </div>
                                                <CardFooter className="totalAmountTracker">
                                                    Total
                                                </CardFooter>
                                            </Card>
                                        </div>  
                                    </div>
                                    <div className="col-12 col-md-6 p-0">
                                        <div className="h-100 bg-primary text-white splitDiv p-md-2">  
                                            <div className="col-12 cartTitleBar m-2 d-flex align-items-center">
                                                <div className="col-12">
                                                    <div className="cartTitle pl-2">
                                                        Checkout Here  
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="checkoutline"></hr>    
                                            <div className="col-12 my-2">
                                                <div className=" d-flex flex-column align-items-center justify-content-center">
                                                    <h6>Please fill the address &#38; Aadhar number</h6>
                                                </div>
                                                <div>
                                                    <Progress multi className="orderProgress my-1">
                                                        <Progress bar striped animated color="success" value={33.33}>
                                                            Confirm your order
                                                        </Progress>
                                                        <Progress color="success" value={33.33}></Progress>
                                                        <Progress color="success" value={33.34}></Progress>
                                                    </Progress>
                                                </div>
                                            </div>                                     
                                            <div className="col-12 my-2">
                                                <Input type="textarea" name="address" 
                                                    id="address"
                                                    placeholder="Enter your address here..."
                                                    rows={5}/>
                                            </div>
                                            <div className="col-12 my-2">
                                                <Input type="text" name="aadhar"
                                                    id="aadhar"
                                                    pattern="[0-9]{12}"
                                                    maxLength={12}
                                                    placeholder="Enter your aadhar number"></Input>
                                            </div>
                                            <div className="col-12 d-flex align-items-center mt-2">
                                                <Button id="confirmOrderBtn" className="p-2 w-100 text-uppercase">
                                                    Confirm &#38; Proceed
                                                </Button>
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