# Microfrontend React App

This app is a host application wrapped in a ContextProvider and renders a remote component consuming the ContextProvider value.

- `mainapp` is the host application and is wrapped with `AuthProvider` with value of {isLogged: true}.
- `reactapp1` standalone application which exposes `Logged` component. `Logged` renders `"isLogged: <value>`, where value is the value of isLogged property of object provided from `AuthProvider.
- `shared-library` is a library that would be shared between `mainapp` and `reactapp1`. This library contains `AuthProvider` component.

# Running App

Run `yarn start`. This will build and serve both `mainapp` and `reactapp1` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)
