import React from "react";
import { Footer, Layout, Menu, Category } from "./components";
import ROUTES, { RenderRoutes } from "./routes";

function App() {
  return (
    <Layout>
      <Menu />
      <RenderRoutes routes={ROUTES} />
      <Footer/>
    </Layout>
  );
}

export default App;
