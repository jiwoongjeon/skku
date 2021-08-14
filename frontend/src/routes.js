import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import EDUComponent from "./views/EDUUPDATE";
import Board from "./views/Board";
import KNSSEUPDATE from "./views/KNSSEUPDATE";
import UICAUPDATE from "./views/UICAUPDATE";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  {
    path: "/education/knsse",
    key: "EDUCATION",
    component: () => <KNSSEUPDATE />,
  }, //exact
  {
    path: "/education/uica",
    key: "EDUCATION",
    component: () => <UICAUPDATE />,
  },
  { path: "/education", key: "EDUCATION", component: () => <EDUComponent /> },
  { path: "/about", key: "ABOUT", component: () => <About /> },
  { path: "/board", key: "BOARD", component: () => <Board /> },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
