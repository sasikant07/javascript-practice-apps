import { SidebarItem } from "../../models/SidebarItem";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineHistory, AiOutlineHome, AiOutlineMoneyCollect, AiOutlineUser } from "react-icons/ai";
import { FaCog, FaOpencart } from "react-icons/fa";

export const SidebarData: SidebarItem[] = [
    {
        title: "Overview",
        path: "/overview",
        icon: <AiOutlineHome />,
        iconOpened: <AiFillCaretDown />,
        iconClosed: <AiFillCaretUp />,
        subnav: [
            {
                title: "Users",
                path: "/overview/users",
                icon: <AiOutlineUser />
            },
            {
                title: "Revenue",
                path: "/overview/revenue",
                icon: <AiOutlineMoneyCollect />
            },
        ]
    },
    {
        title: "Order",
        path: "/order",
        icon: <FaOpencart />
    },
    {
        title: "History",
        path: "/history",
        icon: <AiOutlineHistory />
    },
    {
        title: "Configuration",
        path: "/configuration",
        icon: <FaCog />
    }
]