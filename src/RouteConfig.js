import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ViewerComponent } from "./viewer";
import { DesingerComponent } from "./designer";


const routes = [
    {
      path: "/viewer",
      component: ViewerComponent
    },
    {
      path: "/designer",
      component: DesingerComponent
    }
  ];

  export default function RouteConfigExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/viewer">viewer</Link>
            </li>
            <li>
              <Link to="/designer">designer</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }