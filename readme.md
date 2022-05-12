# Stencil App Starter

## ☎️ Call for Mainainers ☎️

In the past, we’ve created packages under the Stencil name to keep them out of the core compiler. Looking to this year and beyond, we’re going to focus on Stencil as a compiler for web components and begin to move away from creating full-blown web applications using packages maintained by Ionic.

We're excited to share that soon we are going to have a [Stencil community org on GitHub](https://github.com/stencil-community). This will be a central place for projects driven by our community of Stencil developers.

We recognize and appreciate that folks may want to continue building applications with Stencil. With this Stencil community organization, we’re going to be moving the following packages to the community org so that folks who want to continue to develop applications in Stencil can do so and take a more active role in its development

We’re looking for community members to take ownership of these projects. **If you are interested in becoming a maintainer, feel free to send Anthony Giuliano a direct message in the [Stencil Slack](https://stencil-worldwide.slack.com/archives/D03EU2YMN0P)**. Even if you are unsure about becoming a maintainer, please feel free to reach out. We’re more than happy to discuss what this would look like. We’re really excited about giving the Stencil community greater ownership and all the amazing projects that we know will come from it.


## Description

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
