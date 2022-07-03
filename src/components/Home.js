import React, { useEffect, useState } from "react";
import { ButtonGroup, ButtonToolbar, Button, Card, CardImg, CardHeader, CardTitle, CardSubtitle, CardBody, CardText, Input, Badge, InputGroup} from "reactstrap";
import { MdShoppingCart, MdSearch} from 'react-icons/md';

function Home(props){

    const rawData = [{
        id: 1,
        company: "Company 1",
        product: "Product A",
        price: "500",
        weight: "5",
        availableQuantity: 5,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        id: 2,
        company: "Company 2",
        product: "Product B",
        price: "1000",
        weight: "10",
        availableQuantity: 4,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    },{
        id: 3,
        company: "Company 3",
        product: "Product C",
        price: "5000",
        weight: "15",
        availableQuantity: 3,
        description: "This is a sample product description with all the details about the product to be displayed to the user"
    }];

    const [isNavbarOpen, setNavBarOpen] = useState(false);
    const [quantity, setQuantity] = useState({});
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [data, setData] = useState(rawData);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const sortByName = (isAtoZ) => {
         console.log(data.sort((a, b) => {
            if(a.product.toLowerCase() < b.product.toLowerCase()){
                if(isAtoZ)
                    return -1;
                else
                    return 1;
            }
            if(b.product.toLowerCase() < a.product.toLowerCase()){
                if(isAtoZ)
                    return 1;
                else
                    return -1;
            }
            return 0;
         }));
    }
    const sortByPrice = (isHighToLow) => {
        console.log(data.sort((a, b) => {
            if(isHighToLow)
                return a.price - b.price;
            else
                return b.price - a.price;
            return 0;
         }));
    }

    const changeQuantity = (e, d) => {
        let isObjExist = d.id in quantity;
        if(isObjExist){
            quantity[d.id] += parseInt(e.target.value);  
        }
        else{
            quantity[d.id] = parseInt(e.target.value);
        }
    }

    const addToCart = (e, d) => {
        let itemQuantity = d.id in quantity ? quantity[d.id] : 0;
        let isObjExist = cart.filter(c => c.id === d.id);
        let isQuantitySelected = d.id in quantity;
        if(isQuantitySelected){
            if(isObjExist.length > 0){
                setCart(cart);
            }
            else{
                setCart([...cart, d]);
            }
            setCartCount(Object.values(quantity).reduce((total, i) => total + i));
        }
        else{
            alert("Please select quantity");
        }
    }

    const toggleNavbar = () => {
        setNavBarOpen(!isNavbarOpen);
    }
    return (
            <div className="container">
                <div className="row mt-3">                
                    <div className="col-12 col-md-3 d-flex">
                        <div className="w-100">
                            <Button outline active className="leftFilterBtn w-50" onClick={() => sortByName(true)}>Name: A-Z</Button>
                            <Button outline className="rightFilterBtn w-50" onClick={() => sortByName(false)}>Name: Z-A</Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex">
                        <div className="w-100">
                            <Button outline active className="leftFilterBtn w-50" onClick={() => sortByPrice(false)}>Price: Low to High</Button> 
                            <Button outline className="rightFilterBtn w-50" onClick={() => sortByPrice(false)}>Price: High to Low</Button>
                        </div>
                    </div>                
                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">                   
                            <Input type="text" name="search" id="search" className="w-100" placeholder="Search here..."></Input>
                            <div id="search-icon" className="d-flex align-items-center justify-content-center">
                                <Button type="secondary" id="searchBtn">
                                    <MdSearch className="icons"></MdSearch>
                                </Button>
                            </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <Button className="w-100">
                            <div className="d-flex justify-content-center align-items-center">
                                <MdShoppingCart className="icons"></MdShoppingCart>
                                <div className="iconBtnText">Your Cart</div>
                                <span className="cartBadge">({cartCount})</span>
                            </div>
                        </Button>
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
                                            <div className="labelBottom">Price</div>
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