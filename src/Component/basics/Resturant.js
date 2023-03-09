import React, { useState } from 'react' 
import './style.css';
import Menu from './MenuAPi';
import Menucard from './Menucard'
import Navbar from './Navbar';
const uniqueList = [
    // ... spread operator
    ...new Set (
    Menu.map((curElem) =>{
    return curElem.category;
})
), 
"All",
]


const Resturant = () => {
    // const myStyle ={color : 'red'} style={myStyle}
    // we use state to manage data
    // menuData= state variable 
    //updated function = setMenuData
    const [menuData, setMenuData]= useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
      
        if(category ==='All')
        {
            setMenuData(Menu);
            return
        }

        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        });
     setMenuData(updatedList);
    };
    
        return (
        
            <>
           <Navbar filterItem= {filterItem} menuList={menuList} />
            <Menucard menuData= {menuData}/>
            </>
        )
}

export default Resturant
