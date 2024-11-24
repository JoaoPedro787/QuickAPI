import React from "react";
import { headerData } from "../../data/dashboard/dashboardData";

const Header = () => {
    return (
        <nav className='flex w-full justify-between items-center p-4 bg-[#485c7c] text-white'>
            <span className='text-2xl font-bold'>
                Manage Users
            </span>

            <ul className='flex gap-10 items-center'>
                {headerData.map((item) => (
                    <li key={item.id}>
                        <div
                            className={`flex items-center justify-cente p-2 font-bold rounded-md text-xl cursor-pointer gap-2 
                            transition-all hover:scale-110 hover:opacity-80 active:opacity-100 active:-translate-y-1 ${item.style}`}>
                            {item.icon} {item.value}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export { Header };