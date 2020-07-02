import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StateComponent } from './component-state.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        StateComponent,
    ],
    imports     : [
        CommonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports     : [
        StateComponent,
    ],
})
export class ComponentStateModule {
}
