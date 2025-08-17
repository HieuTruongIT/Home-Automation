import {
  Home,
  AccountCircle ,
  Light ,
} from "@mui/icons-material";
import { Dashboard, Devices, Rooms } from "@/pages";
import {AddDeviceForm } from "@/views/devices";
const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <Home {...icon} />,
        name: "Dashboard",
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        icon: <Light  {...icon} />,
        name: "Devices",
        path: "/devices",
        element: <Devices />,
      },
      {
        icon: <AccountCircle  {...icon} />,
        name: "Room",
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/addDevice",
        element: <AddDeviceForm />,
        hidden: true,
      },
      
    ],
    
  },
  

];

export default routes;
