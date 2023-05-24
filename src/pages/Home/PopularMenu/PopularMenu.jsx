import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{ 
             const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])
    return (
        <section className='mb-12'>
            <SectionTitles 
              subHeading={"---Check it out---"}
              heading={"FROM OUR MENU"}
            >

            </SectionTitles>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    menu.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;