import React from 'react';
import Carousel from '../Carousel/Carousel';
import ExtraItem1 from '../ExtraItem1/ExtraItem1';
import ExtraItem2 from '../ExtraItem2/ExtraItem2';
import InventoryItems from '../InventoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <InventoryItems></InventoryItems>
            <ExtraItem1></ExtraItem1>
            <ExtraItem2></ExtraItem2>
        </div>
    );
};

export default Home;