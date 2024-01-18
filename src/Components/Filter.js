import React from 'react'
import FilterBtn from './FilterBtn'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Filter = ({categories,selected,setSelected}) => {
    // const [selected,setSelected] = useState(0);

    const hamburgerHandler = () => {
        document.getElementById('hamburger-menu').classList.remove('-left-[100%]');
        document.getElementById('hamburger-menu').classList.add('left-0');
        document.getElementById('hamburger-bg').classList.remove('hidden');
        document.getElementById('close-btn').classList.add('animate-spin');
        document.body.classList.add('overflow-hidden');
        setTimeout(()=>{
            document.getElementById('close-btn').classList.remove('animate-spin');
        },1000)
    }
    
    const closeHamburger = () => {
        document.getElementById('hamburger-menu').classList.add('-left-[100%]');
        document.getElementById('hamburger-bg').classList.add('hidden');
        document.getElementById('close-btn').classList.add('animate-spin');
        document.body.classList.remove('overflow-hidden');
    }

    return (
        <div>
        <div className='hidden md:flex justify-center'>
        {
            categories.map((cat, index)=>{
                return <FilterBtn key={index.toString()} id={index} cat={cat} selected={selected} setSelected={setSelected}></FilterBtn>
            })
        }
        </div>
        <div className='md:hidden block'>
            <div onClick={hamburgerHandler} className='absolute top-[35px] text-4xl left-5'>
                <RxHamburgerMenu />
            </div>
            <div className=''>

                <div id='hamburger-bg' className='hidden h-[100vh] w-full fixed bg-gray-500 top-0 opacity-50 z-10'>
                </div>
                <div id='hamburger-menu' className='h-[100vh] w-[300px] fixed top-0 -left-[100%] bg-white opacity-100 z-20 transition-all duration-1000 '>
                    <div className='text-3xl mx-4 my-10 flex  justify-between'>
                        <div>Category:-</div>
                        <div id='close-btn' onClick={closeHamburger} className='font-thin m-1'><RxCross1 /></div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        {
                            categories.map((cat, index)=>{
                                return <FilterBtn key={index.toString()} id={index} cat={cat} selected={selected} setSelected={setSelected}></FilterBtn>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Filter
