/**
 * Angular16 基础项目
 * 参考配置 https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
