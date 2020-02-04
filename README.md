# How to unsubscribe in Angular 8
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Up and running

```bash
npm i
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Freezer, the destroyer of components

Once you load the app in your browser you should see something like this:

<img src="src/assets/auto-unsubscribe-ng8-01.png">

There is a service implemented that checks whether DevTools is open or not. You need it open in order to test the destruction and consequent unsubscription of components that were previously subscribed to observables.

Click on OK and open DevTools console. Now you should see the emission of a counter every second:

<img src="src/assets/auto-unsubscribe-ng8-02.png">

If you click on PUSH TO DESTROY Freezer will take care of destroying the current component by navigating to a `DestroyedComponent`.

<img src="src/assets/auto-unsubscribe-ng8-03.png">
