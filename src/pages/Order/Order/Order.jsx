import React, { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drink'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
   

    const [menu] =  useMenu();
    const desert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drink = menu.filter(item => item.category === 'drinks')
  return (
    <div>
          <Helmet>
            <title>Bistro Boss | Order Dish</title>
            </Helmet>
      <Cover
        img={orderCover}
        title="Order Dish"
        subTitle="Would you like to try dish?"
      ></Cover>
  
    <Tabs className="text-center mt-24" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
  <TabList>
    <Tab >Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Desert</Tab>
    <Tab>Drinks</Tab>
  </TabList>

<TabPanel  >
   <div className="grid lg:grid-cols-3 my-9 gap-8 mx-8">
   {

salad.map(item => <FoodCard
  key={item._id}
  item={item}

></FoodCard>)
  }
   </div>
  </TabPanel>

  <TabPanel>
  <div className="grid lg:grid-cols-3 my-9 gap-8 mx-8">
   {

pizza.map(item => <FoodCard
  key={item._id}
  item={item}

></FoodCard>)
  }
   </div>
  </TabPanel>
  <TabPanel>
  <div className="grid lg:grid-cols-3 my-9 gap-8 mx-8">
   {

soup.map(item => <FoodCard
  key={item._id}
  item={item}

></FoodCard>)
  }
   </div>
  </TabPanel>
  <TabPanel>
  <div className="grid lg:grid-cols-3 my-9 gap-8 mx-8">
   {

desert.map(item => <FoodCard
  key={item._id}
  item={item}

></FoodCard>)
  }
   </div>
  </TabPanel>
  <TabPanel>
  <div className="grid lg:grid-cols-3 my-9 gap-8 mx-8">
   {

drink.map(item => <FoodCard
  key={item._id}
  item={item}

></FoodCard>)
  }
   </div>
  </TabPanel>
</Tabs>
    </div>

  );
};

export default Order;
