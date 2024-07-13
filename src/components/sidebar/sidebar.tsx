import React from 'react'
import SidebarMenu from './menu'

const Sidebar = () => {
  return (
    <div className="min-h-screen hidden lg:block  w-[18%] bg-[#051632] fixed">
      <SidebarMenu />
    </div>
  );
}

export default Sidebar