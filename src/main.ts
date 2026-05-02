import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './cms/cms.config';
import { App } from './cms/cms';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
