/**
 * Angular16 基础项目
 * 参考配置 https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];
// test
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
