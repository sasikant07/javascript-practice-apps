import {FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt} from "react-icons/fa";

export const menuItem = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: "/about",
        name: "About",
        icon: <FaUserAlt />
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <FaRegChartBar />
    },
    {
        path: "/comment",
        name: "Comment",
        icon: <FaCommentAlt />
    },
    {
        path: "/product",
        name: "Product",
        icon: <FaShoppingBag />
    },
    {
        path: "/productlist",
        name: "Productlist",
        icon: <FaThList />
    },
]