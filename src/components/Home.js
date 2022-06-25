import React, { useState } from "react";
import { ButtonGroup, ButtonToolbar, Button, Card, CardImg, CardHeader, CardTitle, CardSubtitle, CardBody, CardText, Input} from "reactstrap";
import { MdShoppingCart, MdOutlineSortByAlpha} from 'react-icons/md';

function Home(props){
    const [isNavbarOpen, setNavBarOpen] = useState(false);
    const data = [{
        company: "Company 1",
        product: "Product 1",
        price: "5000",
        weight: "5",
        availableQuantity: 5,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        company: "Company 2",
        product: "Product 2",
        price: "5000",
        weight: "10",
        availableQuantity: 4,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        company: "Company 3",
        product: "Product 3",
        price: "5000",
        weight: "15",
        availableQuantity: 3,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    }];
    const toggleNavbar = () => {
        setNavBarOpen(!isNavbarOpen);
    }
    return (
            <div className="container">
                <div className="row">                
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
                    <div className="col-12 offset-md-2 col-md-4">
                        <ButtonToolbar className="justify-content-end">
                            <ButtonGroup>
                                {/* <Button className="genericBtns toolBarUIBtns"><MdViewList className="icons"></MdViewList></Button>
                                <Button className="genericBtns toolBarUIBtns"><MdGridView className="icons"></MdGridView></Button> */}
                                <Button className="genericBtns toolBarUIBtns">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <MdShoppingCart className="icons"></MdShoppingCart>
                                        <div className="iconBtnText">Your Cart</div>
                                    </div>
                                </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="row mt-5">
                    {data.map(d => (
                        <div className="col-12 col-md-3 mt-5 mt-md-0 ">
                            <Card>
                                <CardImg src={""} alt="Image"></CardImg>
                                <CardHeader className="cardHeader">
                                    <CardTitle className="cardTitle">{d.product}</CardTitle>
                                    <CardSubtitle className="cardSubtitle">{d.company}</CardSubtitle>
                                </CardHeader>
                                <CardBody className="text-justify">
                                    <CardText>{d.description}</CardText>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex text-center flex-column weightCardPart">
                                            <div className="labelTop">{d.weight} <sub>&#13199;</sub></div>
                                            <div className="labelBottom">Weight</div>
                                        </div>
                                        <div className="d-flex text-center flex-column priceCardPart">
                                            <div className="labelTop"><sup>&#8377;</sup>{d.price}</div>
                                            <div className="labelBottom">Price (M.R.P)</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <Input type="select" name="quantitySelect" id="quantitySelect">
                                            <option value={0} selected>Quantity</option>
                                            {Array.from({length: d.availableQuantity}).map((q, i) => (
                                                <option value={i+1}>{i+1}</option>
                                            ))}
                                        </Input>
                                        <Button className="btn btn-sm" id="cartBtn">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <MdShoppingCart className="icons"></MdShoppingCart>
                                                <div className="iconBtnText">Add to Cart</div>
                                            </div>
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>    
                        </div>
                    ))
                    }
                </div>
                {/* <div className="row mt-5">
                        {data.map(d => (
                            <div className="row mb-2 align-items-center">
                                <div className="col-2">
                                    <img src="" alt="Image"></img>
                                </div>
                                <div className="col-10 col-md-4">
                                    <div>{d.company}</div>
                                    <div>{d.product}</div>
                                </div>
                                <div className="col-12 offset-md-3 col-md-3 mb-2">
                                    <div className="d-flex align-items-center justify-content-around">
                                        <div className="">&#8377; {d.price}</div>
                                        <div className="">{d.weight} Kgs.</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-around m-2">
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
                </div> */}
            </div>
    );
}

export default Home;