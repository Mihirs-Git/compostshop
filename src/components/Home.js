import React, { useEffect, useState } from "react";
import { ButtonGroup, ButtonToolbar, Button, Card, CardImg, CardHeader, CardTitle, CardSubtitle, CardBody, CardText, Input, Badge} from "reactstrap";
import { MdShoppingCart, MdOutlineSortByAlpha} from 'react-icons/md';

function Home(props){
    const [isNavbarOpen, setNavBarOpen] = useState(false);
    const [quantity, setQuantity] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        console.log(cart, quantity);
    }, [cart, quantity]);

    const changeQuantity = (e, d) => {
        setQuantity([...quantity, {
            id: d.id,
            quantity: e.target.value
        }]);
    }

    const addToCart = (e, d) => {
        let itemQuantity = quantity.filter(q => q.id == d.id).quantity;
        setCartCount(prev => prev + itemQuantity);
        setCart([...cart, {...d, quantity: itemQuantity}]);
    }

    const data = [{
        id: 1,
        company: "Company 1",
        product: "Product 1",
        price: "5000",
        weight: "5",
        availableQuantity: 5,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        id: 2,
        company: "Company 2",
        product: "Product 2",
        price: "5000",
        weight: "10",
        availableQuantity: 4,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        id: 3,
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
                <div className="row mt-3">                
                    <div className="col-12 col-md-8 d-flex">
                        <div className="">
                            <Button outline active className="leftFilterBtn">Name: A-Z</Button>
                            <Button outline className="rightFilterBtn">Name: Z-A</Button>
                        </div>
                        <div>
                            <Button outline active className="leftFilterBtn">Price: Low to High</Button> 
                            <Button outline className="rightFilterBtn">Price: High to Low</Button>
                        </div>
                    </div>                
                    <div className="col-12 col-md-4">
                        <ButtonToolbar className="justify-content-end">
                            <ButtonGroup>
                                <Button>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <MdShoppingCart className="icons"></MdShoppingCart>
                                        <div className="iconBtnText">Your Cart</div>
                                        <Badge color="secondary" className="cartBadge">({cartCount})</Badge>
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
                                <CardImg src={require('../images/sample.jpg')} alt="Image"></CardImg>
                                <CardHeader className="cardHeader">
                                    <CardTitle className="cardTitle">{d.product}</CardTitle>
                                    <CardSubtitle className="cardSubtitle">{d.company}</CardSubtitle>
                                </CardHeader>
                                <CardBody className="text-justify pt-0">
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
                                        <Input type="select" name="quantitySelect" id="quantitySelect" 
                                                defaultValue={0}
                                                onChange={(e) => changeQuantity(e, d)}>
                                            <option value={0} selected>Quantity</option>
                                            {Array.from({length: d.availableQuantity}).map((q, i) => (
                                                <option value={i+1}>{i+1}</option>
                                            ))}
                                        </Input>
                                        <Button className="btn btn-sm" id="cartBtn" onClick={(e) => addToCart(e, d)}>
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
            </div>
    );
}

export default Home;