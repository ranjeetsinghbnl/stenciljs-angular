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