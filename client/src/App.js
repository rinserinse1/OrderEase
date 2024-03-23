


import MenuCategories from './MenuRelated/MenuCategories';
import React, { useState, useEffect, useMemo } from 'react';
import {BrowserRouter as Router, Route, Navigate,  Routes, useLocation, useRoutes} from "react-router-dom";

import Error from "./notFound/NotFound"
import DashboardLayout from './layouts';
import MenuItems from './MenuRelated/MenuItems';
import YourOrder from './order/YourOrder';
import MenuSelect from './MenuRelated/MenuSelect';
import MenuSelectConfirm from './MenuRelated/MenuSelectConfirm';
import ItemDisplay from './MenuRelated/ItemDisplay';
import NutritionDisplay from './MenuRelated/NutritionDisplay';

const App  = () =>  { 
    
  var props = window.location.pathname
  function AddLogging({children}) {
  
    useEffect(() => {
  
    }, []);
  
    return <MenuCategories {...children} {...props} hey = {window.location.pathname} />;
  }





  const routes = useRoutes([

    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="/menuselect" replace />,
        },

        {
          path: 'menuselect' ,
          element:  <MenuSelect/>
        },
        {
          path: 'menuselectconfirm' ,
          element:  <MenuSelectConfirm/>,
          children: [
            {
              path: ':id' ,
              element:  <AddLogging></AddLogging>
            },

          ],
        },
        
        {
          path: 'menucategories',
          element: <MenuCategories/>,
          children: [
            {
              path: ':id' ,
              element:  <AddLogging></AddLogging>
            },

          ],
        },

        {
          path: 'menuItems' ,
          element:  <MenuItems/>,
          children: [
            {
              path: ':id/:category' ,
              element:  <AddLogging></AddLogging>
            },

          ],
        },
        {
          path: 'itemDisplay' ,
          element:  <ItemDisplay/>,
          children: [
            {
              path: ':id/:category/:food' ,
              element:  <AddLogging></AddLogging>
            },

          ],
        },

        {
          path: 'NutritionDisplay' ,
          element:  <NutritionDisplay/>,
          children: [
            {
              path: ':id/:category/:food' ,
              element:  <AddLogging></AddLogging>
            },

          ],
        },

        {
          path: 'yourorder' ,
          element:  <YourOrder/>
        },


        {
          path: '404' ,
          element:  <Error/>
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />,
        },
      ],
    },



  ]);



    return (
        <div>

            {routes}

        </div>
    );
}

export default App;



