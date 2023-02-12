import React from "react";
import {useState} from "react";
import RestoMenu from "./RestoMenu";
import "./RestoMenu.css";
import Orders from "./Orders";
function RestoDashboard(props){

    const [isMenuClicked,setIsMenu] = useState();
    const [isOrdersClicked,setIsOrdersClicked] = useState();
    function handleMenuClick(){
        setIsMenu(true);
        setIsOrdersClicked(false);
    }

    function handleOrdersClick(){
        setIsMenu(false);
        setIsOrdersClicked(true);
    }
return <div>
            <div className="sidenav">
            <div style={{'position':"absolute","top":"175px"}}> 
                <button onClick={handleMenuClick}>Menu</button>
                <button onClick={handleOrdersClick}>Orders</button>
            </div>
            </div>
            {isMenuClicked ? 
                <div className="itemsContainer">
                    <RestoMenu key="1" id="1" item="Golgappa" img="https://img.freepik.com/premium-photo/panipuri-shot-golgappa-shots-different-flavours-water-served-small-glasses-with-stuffed-puri-indian-starter-snack_466689-80519.jpg?w=2000"/>
                    <RestoMenu key="2" id="2" item="SamosaChaat" img="https://www.whiskaffair.com/wp-content/uploads/2021/04/Samosa-Chaat-2-3.jpg"/>
                    <RestoMenu key="3" id="3" item="Veg Pizza" img="https://media.istockphoto.com/id/1374648044/photo/pizza-with-prosciutto-and-basil-served-on-round-wooden-board.jpg?b=1&s=170667a&w=0&k=20&c=sWKkGS0zTkhCrm5bT12SFX0Tx36ny0tyBk3fn854Mxo="/>
                    <RestoMenu key="4" id="4" item="Chicken Tikka Masala" img="https://media.istockphoto.com/id/1281670497/photo/indian-food-chicken-tikka-masala.jpg?b=1&s=170667a&w=0&k=20&c=G6b00rYp9uZOnthkv55pUBG5__CXh5qcEIhdNefG8IM="/>
                    <RestoMenu key="5" id="5" item="Vegitable Biriyani" img="https://media.istockphoto.com/id/980078660/photo/indian-vegetable-pulav-or-biryani-made-using-basmati-rice-served-in-a-ceramic-bowl-selective.jpg?b=1&s=170667a&w=0&k=20&c=DI850BLgYDQF8VoPTPoXUIye5vHt28GlDwvkV1YP6SI="/>
                    <RestoMenu key="6" id="6" item="Chicken Biriyani" img="https://media.istockphoto.com/id/1424034303/photo/beef-biryani-with-pickle-salad-and-tomato-sauce-served-in-a-dish-isolated-on-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=hzc4OI7mbaWoij558_WV4reT2ZB2weX6XSx9Fne_xj0="/>
                </div>
            : null}
            {isOrdersClicked && <Orders/>}
        </div>
}

export default RestoDashboard;