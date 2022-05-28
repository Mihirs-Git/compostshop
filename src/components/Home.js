import React, { useState } from "react";
import { ButtonGroup, ButtonToolbar, Button } from "reactstrap";
import { MdViewList, MdGridView, MdShoppingCart, MdOutlineSortByAlpha} from 'react-icons/md';
import ReactSearchBox from "react-search-box";

function Home(props){
    const [isNavbarOpen, setNavBarOpen] = useState(false);
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
            </div>
    );
}

export default Home;