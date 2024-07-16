'use client';
import { Flex,  Link, Box, Text } from "@radix-ui/themes";
import { FaCalendarAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { HiOutlineSupport } from "react-icons/hi";
import { AppConstants } from "@/utils/contants";
import { Colors } from "@/utils/Colors";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React from "react";
import { useRouter } from 'next/navigation'



const menuItems = [
    {
        name: "Dashboard",
        link:"/",
        icon: (color:string)=> <MdSpaceDashboard style={{color: color || Colors.menuDark}} />,
        active: true,
    },

    {
        name:"Events",
        icon: (color:string)=> <FaCalendarAlt style={{color: color || Colors.menuDark}} />,
        link:"/events",
        menus:[
            {
                name: "All Events",
                active: false,
                link:"/events",
            },
            {
                name: "Add Event",
                active: false,
                link:"/create-event",
            },
        ],
        active: false,
    },
    {
        name:"Settings",
        link:"/settings",
        icon: (color:string)=> <FaGear style={{color: color || Colors.menuDark}} />,
        menus:[
            {
                name: "General",
                active: false,
                link:"/settings/general",
            },
            {
                name: "Profile",
                active: false,
                link:"/settings/profile",
            },
            {
                name: "Language",
                active: false,
                link:"/settings/language",
            },
        ],
        active: false,
    },
    {
        name:"",
        type:"spacer",
        icon:(color:string)=> <></>,
    },
    {
        name: "Logout",
        icon: (color:string)=> <IoMdLogOut style={{color: color || Colors.menuDark}} />,
        active: false,
        link:"/logout",
    },
    {
        name: "Support",
        icon: (color:string)=> <HiOutlineSupport style={{color: color || Colors.menuDark}} />,
        active: false,
        link:"/support",
    },
    
]

export default function Menu() {
    const [menus, setMenus] = React.useState(menuItems);
    const router = useRouter()

    const handleParentClick = (item:any,index:number) => {

        const newMenus = menus.map((menu) => {
            if(menu.name === item.name){
                menu.active = !menu.active;
            }else{
                menu.active = false;
            }
            return menu;
        });
        setMenus(newMenus);
        if(item?.link)
            router.push(item.link)
    }

    const handleChildClick = (item:any,index:number,parentIndex:number) => {

        const newMenus = menus.map((menu, i) => {
            if(i === parentIndex){
                menu.active = true;
                if(menu.menus){
                    menu.menus.map((subMenu, j) => {
                        if(j === index){
                            subMenu.active = true;
                        }else{
                            subMenu.active = false;
                        }
                        return subMenu;
                    });
                }
            }else{
                menu.active = false;
                if(menu.menus){
                    menu.menus.map((subMenu) => {
                        subMenu.active = false;
                        return subMenu;
                    });
                }
            }
            return menu;
        });
        setMenus(newMenus);
        if(item?.link)
            router.push(item.link)
    }
    return (
        <Flex direction="column" gap="10px" style={{marginTop: "20px"}}>
            {menus.map((item, index) => {
                if(item.type === "spacer"){
                    return <Box key={`menu-space-${index}`} style={{height: "20px"}}></Box>
                }
                return (
                    <Flex direction="column" gap="10px" key={`menu-item-${index}`}>
                        <Box onClick={()=>{
                            handleParentClick(item,index);
                        }}>
                            <Flex direction="row" align="center" justify={"between"}>
                                <Flex direction={"row" } align={"center"} gap="10px" >
                                    <Box>{item.icon(item.active ? Colors.dark : Colors.menuDark)}</Box>
                                    <Text style={{color: item.active ? Colors.dark : Colors.menuDark}}>{item.name}</Text>
                                </Flex>
                                {item.menus && item.menus.length > 0 && (
                                    <Box>{item.active ? <IoIosArrowUp style={{color: Colors.menuDark}} /> : <IoIosArrowDown style={{color: Colors.menuDark}} />}</Box>
                                )}
                            </Flex>
                        </Box>
                        {item.menus && item.active && item.menus.map((menu, index) => {
                            return (
                                <Box onClick={()=>{
                                    handleChildClick(item,index,index);
                                }}>
                                    <Flex 
                                    key={`sub-menu-item-${index}`}
                                    direction="row" align="center" gap="10px" style={{paddingLeft: "20px"}}>
                                        <Link href="/" style={{color: menu.active ? Colors.dark : Colors.menuDark}}>{menu.name}</Link>
                                    </Flex>
                                </Box>
                            )
                        })}
                    </Flex>
                )
            })}
        </Flex>

    );
}
