import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{ 
    //          const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)})
    // },[])

    return (
        <section className='mb-20'>
            <SectionTitles 
              subHeading={"---Check it out---"}
              heading={"FROM OUR MENU"}
            >

            </SectionTitles>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    popular.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>
            <div className=' flex justify-center mt-16'>
            <button className="btn  rounded-lg btn-outline   border-0 border-b-4    text-[#BB8506]">View full menu</button>
            
            </div>

        </section>
    );
};

export default PopularMenu;