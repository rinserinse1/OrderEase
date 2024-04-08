import ScrollToTop from './ScrollToTop';
import MenuCategories from './MenuRelated/MenuCategories';
import React from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import Error from "./notFound/NotFound";
import DashboardLayout from './layouts';
import MenuItems from './MenuRelated/MenuItems';
import YourOrder from './order/YourOrder';
import MenuSelect from './MenuRelated/MenuSelect';
import MenuSelectConfirm from './MenuRelated/MenuSelectConfirm';
import ItemDisplay from './MenuRelated/ItemDisplay';
import NutritionDisplay from './MenuRelated/NutritionDisplay';
import Assistance from './WaitingScreens/Assistance';
import PlacedOrder from './order/PlacedOrder';
import Paying from './WaitingScreens/Paying';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Navigate to="/menuselect" replace /> },
        { path: 'menuselect', element: <MenuSelect /> },
        { path: 'menuselectconfirm/:id', element: <MenuSelectConfirm /> },
        { path: 'menucategories/:id', element: <MenuCategories /> },
        { path: 'menuItems/:id/:category', element: <MenuItems /> },
        { path: 'itemDisplay/:id/:category/:food', element: <ItemDisplay /> },
        { path: 'NutritionDisplay/:id/:category/:food', element: <NutritionDisplay /> },
        { path: 'yourorder/:id', element: <YourOrder /> },
        { path: 'placedorder/:id', element: <PlacedOrder /> },
        { path: 'assistance/:id', element: <Assistance /> },
        { path: 'paying/:id', element: <Paying /> },
        { path: '*', element: <Error /> }
      ],
    }
  ]);

  return (
    <>
      <ScrollToTop />
      {routes}
    </>
  );
};

export default App;
