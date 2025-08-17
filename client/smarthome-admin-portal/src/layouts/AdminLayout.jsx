import { Routes, Route } from "react-router-dom";
import { Settings } from "@mui/icons-material";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  AdminNavbar,
  Configurator,
  Footer,
} from "@/layouts/widgets";
import routes from "@/routes/AppRoutes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/store";

export function AdminLayout() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes.map(route => ({
          ...route,
          pages: route.pages.filter(page => !page.hidden), 
        }))}
        brandImg={sidenavType === "dark"}
      />
      <div className="p-4 xl:ml-80">
        <AdminNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Settings className="h-5 w-5" />
        </IconButton>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "admin" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

AdminLayout.displayName = "/src/layout/AdminLayout.jsx";

export default AdminLayout;
