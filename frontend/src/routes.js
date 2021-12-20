import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./views/About";
import Board from "./views/Board";
import Education from "./views/Education";
import Home from "./views/Home";
import Research from "./views/Research";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  {
    path: "/about/organization",
    key: "ABOUT",
    component: () => <About section={"Organization"} />,
  },
  {
    path: "/about/leader",
    key: "ABOUT",
    component: () => <About section={"Leader"} />,
  },
  {
    path: "/about/members",
    key: "ABOUT",
    component: () => <About section={"Members"} />,
  },
  {
    path: "/research/about",
    key: "RESEARCH",
    component: () => <Research section={"About"} />,
  },
  {
    path: "/research/publications",
    key: "RESEARCH",
    component: () => <Research section={"Publications"} />,
  },
  {
    path: "/research/conference",
    key: "RESEARCH",
    component: () => <Research section={"Conference"} />,
  },
  {
    path: "/research/annualreport",
    key: "RESEARCH",
    component: () => <Research section={"Annual Report"} />,
  },
  {
    path: "/research/project",
    key: "RESEARCH",
    component: () => <Research section={"Project"} />,
  },
  {
    path: "/education/about",
    key: "EDUCATION",
    component: () => <Education section={"About"} />,
  },
  {
    path: "/education/k-nsse",
    key: "EDUCATION",
    component: () => <Education section={"K-NSSE"} />,
  },
  {
    path: "/education/csse",
    key: "CSSE",
    component: () => <Education section={"CSSE"} />,
  },
  {
    path: "/education/uica",
    key: "EDUCATION",
    component: () => <Education section={"UICA"} />,
  },
  {
    path: "/education/researchteam",
    key: "EDUCATION",
    component: () => <Education section={"연구진"} />,
  },
  {
    path: "/board/notice",
    key: "BOARD",
    component: () => <Board section={"Notice"} />,
  },
  {
    path: "/board/files",
    key: "BOARD",
    component: () => <Board section={"Files"} />,
  },
  {
    path: "/board/bodo",
    key: "BOARD",
    component: () => <Board section={"Bodo"} />,
  },
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
