import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { NestFactory } from '@nestjs/core';
import { NGB_DATEPICKER_PARSER_FORMATTER_FACTORY } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-parser-formatter';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// async function bootstrap(){
//   const app=await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
