import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { OptionComponent } from './option/option.component';
import { PopoverModule } from '../popover/popover.module';
import { MenuModule } from '../menu/menu.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SelectComponent,
        OptionComponent
    ],
    exports: [
        SelectComponent,
        OptionComponent
    ],
    imports: [
        CommonModule,
        PopoverModule,
        MenuModule
    ]
})
export class SelectModule { }
