import React, { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'

const Header = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Home',
      path: '#home'
    },
    {
      id: 2,
      name: 'About Us',
      path: '#about'
    },
    {
      id: 3,
      name: 'Courses',
      path: '#course'
    },
    {
      id: 4,
      name: 'Testimonial',
      path: '#testimony'
    },
    {
      id: 5,
      name: 'Community',
      path: '#community'
    },
  ];

  const [activeMenuItemId, setActiveMenuItemId] = useState(null);
  const [showMenu, hideMenu] = useState(false)
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuShow = () => {
    hideMenu(!showMenu)
  }

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItemId(itemId);
  };

  return (
    <div className={`flex justify-between items-center lg:px-20 py-3 px-5 relative bg-background z-50 
    ${scroll ? "sticky top-0 left-0 w-full" : ""}}`}>
      <div className="block font-Tech lg:text-logo text-lg">TechTime</div>
      <ul className={` items-center font-satoshi font-bold gap-6 text-normal md:text-gray2 flex md:flex-row flex-col md:relative absolute top-20 right-2 md:top-[unset] md:right-[unset] md:bg-transparent bg-white text-background p-4 md:p-[unset] rounded-[5px] transition-tranform ease-in-out duration-500 ${ !showMenu ? ' -translate-y-[150%] -z-10 md:translate-y-[unset]' : "translate-y-0"} -z-10 `}>
        {menuItems.map((menuItem) => (
          <li
            onClick={() => handleMenuItemClick(menuItem.id)}
            className={`cursor-pointer ${activeMenuItemId === menuItem.id ? 'md:text-white md:border-none border-background border-b' : null}`}
            key={menuItem.id}
          >
           <a href={menuItem.path}> {menuItem.name}</a>
          </li>
        ))}
        <button className='bg-white text-background px-8 py-2 font-bold rounded-[5px] ml-3 hover:bg-transparent border hover:border-white hover:text-white'>Enrol Now</button>
      </ul>
      <div className="z-0 block text-[35px] md:hidden text-white active:text-gray2">
        <MdMenu onClick={menuShow} />
      </div>
    </div>
  );
};

export default Header;


