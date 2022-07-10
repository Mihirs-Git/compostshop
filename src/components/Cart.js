import React, { useEffect, useState } from "react";
import { Card } from "reactstrap";

function Cart(props){
    return(
        <React.Fragment className="cartPage">
            <div className="cartPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Card className="cartTemplate my-2 my-md-5 h-100">
                                <div className="row h-100 m-5">
                                    <div className="col-12 col-md-6">
                                        <div className="h-100 splitDiv p-2">
                                            <div className="cartTitleBar d-flex align-items-center justify-content-between">
                                                <div className="cartTitle">
                                                    Your Shopping Cart  
                                                </div>
                                                <div className="cartTitleInfo">
                                                    3 items
                                                </div>
                                            </div>
                                            <hr></hr>
                                        </div>  
                                    </div>
                                    <div className="col-12 col-md-6 p-0">
                                        <div className="h-100 bg-primary text-white splitDiv p-2">  
                                            <div className="cartTitleBar d-flex align-items-center justify-content-between">
                                                <div className="cartTitle">
                                                    Checkout Here  
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