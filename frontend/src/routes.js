import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import R_Research from "./views/R_Research";
import R_About from "./views/R_About";
import EDUComponent from "./views/EDUUPDATE";
import KNSSEUPDATE from "./views/KNSSEUPDATE";
import UICAUPDATE from "./views/UICAUPDATE";
import B_Files from "./views/B_Files";
import B_Announcement from "./views/B_Announcement";

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
  { path: "/research/about", key: "RESEARCH", component: () => <R_About /> },
  { path: "/research", key: "RESEARCH", component: () => <R_Research /> },
  { path: "/board/files", key: "FILES", component: () => <B_Files /> },
  { path: "/board", key: "BOARD", component: () => <B_Announcement /> },
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
