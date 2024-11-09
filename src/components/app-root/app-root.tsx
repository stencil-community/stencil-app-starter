import { Component, h } from '@stencil/core';
import { Router } from "../../";
import { Route, match } from "stencil-router-v2";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
            <h1 onClick={() => Router.push("/")}>
              Stencil App Starter
            </h1>
        </header>

        <main>
          <Router.Switch>
            <Route path="/">
              <app-home />
            </Route>
            <Route
              path={match("/profile/:name")}
              render={({ name }) => <app-profile name={name} />}
            />
          </Router.Switch>
        </main>
      </div>
    );
  }
}
