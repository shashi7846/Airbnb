import React, { useState } from 'react'
import './banner.css';
import Search from './search';
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
function Banner() {
    const history= useHistory();
    const[showSearch,setshowSearch]=useState(false);
    return (
        <div className="banner"> 
        <div className="banner__search">
            {showSearch &&<Search/>}
            
            <Button onClick={()=>setshowSearch(!showSearch)} className="banner__searchButton"
            variant="outlined"> {showSearch ?"hide" :"Search Dates"} </Button>
        </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>plan a different kind of gateway to uncover the hidden
                    gems near you</h5>
                    <Button onClick={()=>history.push('/search')} variant="outlined">Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
