# Stencil component in Angular 


This is a step by step guide, how we can use a stencil component in a Angular app. For more details you can also check the official [Framework integration guide](https://stenciljs.com/docs/angular).

This project is created with [Angular Cli](https://cli.angular.io/)

## Similar guides
I have created another framework integration guide to use stencil components

* [Stencil components in React](https://github.com/ranjeetsinghbnl/stenciljs-react)
* [Stencil components in VueJs](https://github.com/ranjeetsinghbnl/stenciljs-vue)
* [Stencil components in javascript](https://github.com/ranjeetsinghbnl/stenciljs-javascript)

Using a Stencil built web component collection within an Angular CLI project is a two-step process. 
We need to:

* Include the CUSTOM_ELEMENTS_SCHEMA in the modules that use the components.
* Call `defineCustomElements(window)` from `main.ts` (or some other appropriate place).

This example use the stencil component from the following project

* [Product & Cart showcase example](https://github.com/ranjeetsinghbnl/product-mgmt-stenciljs)

## Table of contents
* [Install Stencil component package](#install-stencil-component-package)
* [Adding the element schema](#adding-the-element-schema )
* [Import the component](#import-the-components)
* [Using component](#using-component)

## Install Stencil component package

```js
Install it `npm install @ranjeetsinghbnl/product-mgmt-stenciljs`
```

## Adding the element schema
Including the `CUSTOM_ELEMENTS_SCHEMA` in the module to use the web components in the HTML.
Here is an example of adding it to AppModule:


```js
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

## Import the component
import the component in the `main.js` file

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  applyPolyfills,
  defineCustomElements as defineProductMgmtExp
} from '@ranjeetsinghbnl/product-mgmt-stenciljs/loader'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineProductMgmtExp(window);
});
```

## Using component
Now The components should then be available in any of the angular components. 
**Don't forgot to add `CUSTOM_ELEMENTS_SCHEMA` in the module where you want to use stencil components**

You can use it

```html
<mf-product-view></mf-product-view>
```

```html
<mf-product-cart></mf-product-cart>
```

To know more about the components. Please check the [Product & Cart showcase example](https://github.com/ranjeetsinghbnl/product-mgmt-stenciljs)


**Note: I have include the bootstrap 4 css to give style to the stencil components. They are open to design changes. Their is no style added to components which i have used in the showcase**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
ng serve
```

### Compiles and minifies for production
```
ng build --prod --environment=production
```

### Run your tests
```
ng test
```

### Lints and fixes files
```
ng lint
```

### Customize configuration
See [Configuration Reference](https://angular.io/cli).
