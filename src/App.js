import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}
