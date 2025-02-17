import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellbarProductSwitcherComponent } from './shellbar-product-switcher.component';
import { PopoverModule } from '../../popover/popover.module';
import { ButtonModule } from '../../button/button.module';

describe('ShellbarProductSwitcherComponent', () => {
    let component: ShellbarProductSwitcherComponent;
    let fixture: ComponentFixture<ShellbarProductSwitcherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PopoverModule, ButtonModule],
            declarations: [ShellbarProductSwitcherComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShellbarProductSwitcherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
