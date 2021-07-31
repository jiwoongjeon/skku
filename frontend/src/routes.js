import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Members from "./views/Members";
import About from "./views/About";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  { path: "/k-nesse", key: "K-NESSE", component: () => <Members /> },
  { path: "/about", key: "ABOUT", component: () => <About /> },
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
