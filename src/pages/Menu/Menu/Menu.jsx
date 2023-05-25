import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from  '../../../assets/menu/banner3.jpg'
import desertImg from  '../../../assets/menu/dessert-bg.jpeg'
import soupImg from  '../../../assets/menu/soup-bg.jpg'
import pizzaImg from  '../../../assets/menu/pizza-bg.jpg'
import saladImg from  '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
   
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
      <Cover img={menuImg} title="Our Menu" subTitle='Would you like to try dish?'></Cover>
     <SectionTitles 
      subHeading="Don't Miss" heading="todays offer"
     ></SectionTitles>
     {/* offered items */}
     <MenuCategory items={offered}></MenuCategory>
     {/* deserts */}
           <MenuCategory items={desert}
              title="Desert"
              subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              img={desertImg}
           ></MenuCategory>
{/* soups */}
<MenuCategory items={soup}
              title="Soup"
              subTitle="Mushrooms,Onion, Garlic, Mushrooms,Butter or olive oil."
              img={soupImg}
           ></MenuCategory>

           {/* pizza */}

           <MenuCategory items={pizza}
              title="Pizza"
              subTitle="Pizza sauce,Cheese, Pepperoni, Mushrooms,Olives."
              img={pizzaImg}
           ></MenuCategory>
           <MenuCategory items={salad}
              title="salad"
              subTitle="Pizza sauce,Cheese, Pepperoni, Mushrooms,Olives."
              img={saladImg}
           ></MenuCategory>
        </div>
    );
};

export default Menu;