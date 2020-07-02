import {Component, Input} from '@angular/core';
import { ComponentState } from './component-state.enum';

@Component({
    selector   : 'app-component-state',
    templateUrl: './component-state.component.html',
    styleUrls  : [ './component-state.component.sass' ],
})
export class StateComponent {
    @Input() state: ComponentState;
    @Input() loaderDiameter = 100;
    @Input() getData: () => void;
    @Input() styles = {};

    readonly componentStateEnum = ComponentState;
}
