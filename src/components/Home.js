import React, { useState } from "react";
import { ButtonGroup, ButtonToolbar, Button} from "reactstrap";
import { MdViewList, MdGridView, MdShoppingCart, MdOutlineSortByAlpha} from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import ReactSearchBox from "react-search-box";

function Home(props){
    const [isNavbarOpen, setNavBarOpen] = useState(false);
    const data = [{
        company: "Company 1",
        product: "Product 1",
        price: "5000",
        weight: "5"
    },{
        company: "Company 2",
        product: "Product 2",
        price: "5000",
        weight: "10"
    },{
        company: "Company 3",
        product: "Product 3",
        price: "5000",
        weight: "15"
    }];
    const toggleNavbar = () => {
        setNavBarOpen(!isNavbarOpen);
    }
    return (
            <div className="container-fluid">
                <div className="row justify-content-between justify-content-around">                
                    <div className="col-12 col-md-6">
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button className="genericBtns toolBarFilterBtns" active>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <MdOutlineSortByAlpha className="mr-1 icons"></MdOutlineSortByAlpha> 
                                        <div>Sort By Name</div>
                                    </div>
                                </Button>
                                <Button className="genericBtns toolBarFilterBtns">	&#8377; Sort By Price</Button>
                                <Button className="genericBtns toolBarFilterBtns" active>A &#8594; Z</Button>
                                <Button className="genericBtns toolBarFilterBtns">Z &#8594; A</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    {/* <div className="col-12 col-md-2">
                        <ReactSearchBox
                            placeholder="Search Your Item Here"
                            data={[]}
                            value=""
                            callback={(record) => console.log(record)}
                        />
                    </div> */}
                    <div className="col-12 col-md-4">
                        <ButtonToolbar className="ml-auto">
                            <ButtonGroup>
                                <Button className="genericBtns toolBarUIBtns"><MdViewList className="icons"></MdViewList></Button>
                                <Button className="genericBtns toolBarUIBtns"><MdGridView className="icons"></MdGridView></Button>
                                <Button className="genericBtns toolBarUIBtns">
                                    <div className="d-flex justify-content-center align-items-center">
                                        Your Cart
                                        <MdShoppingCart className="ml-1 icons"></MdShoppingCart>
                                    </div>
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="row justify-content-between justify-content-around m-5">
                        {data.map(d => (
                            <div className="row mb-2 align-items-center">
                                <div className="col-3">
                                    <img src="" alt="Image"></img>
                                </div>
                                <div className="col-9 col-md-3">
                                    <div>{d.company}</div>
                                    <div>{d.product}</div>
                                </div>
                                <div className="col-12 col-md-6 mb-2">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="mr-5">&#8377; {d.price}</div>
                                        <div className="ml-5">{d.weight} Kgs.</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center m-2">
                                        <ButtonGroup>
                                            <Button className="btn btn-sm"><AiOutlineMinus className="icons"></AiOutlineMinus></Button>
                                            <Button className="btn btn-sm">Add To Cart</Button>
                                            <Button className="btn btn-sm"><AiOutlinePlus className="icons"></AiOutlinePlus></Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        ))
                        }
                </div>
            </div>
    );
}

export default Home;