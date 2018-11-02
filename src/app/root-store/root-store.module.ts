import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {UserStoreModule} from './user-store';

@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {
}
