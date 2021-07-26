import React from "react";
import { Footer, Layout, Menu, Category } from "./components";
import ROUTES, { RenderRoutes } from "./routes";

function App() {
  return (
    <Layout>
      <Menu />
      <RenderRoutes routes={ROUTES} />
      <Footer>
        Copyright (c) G-cubed All Rights Re-served. Design by DSSO.KR
      </Footer>
    </Layout>
  );
}

export default App;
