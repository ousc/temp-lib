import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
export class NgProsemirrorPlugin {
    constructor(el) {
        this.el = el;
        this.onPluginReady = new EventEmitter();
    }
    get context() {
        return this.provider?.service?.pluginViewContext?.[this.key];
    }
    get view() {
        return this.provider?.service?.pluginViewContext?.[this.key]?.view;
    }
    get state() {
        return this.provider?.service?.pluginViewContext?.[this.key]?.view?.state;
    }
    get prevState() {
        return this.provider?.service?.pluginViewContext?.[this.key]?.prevState;
    }
    ngAfterViewInit() {
        this.onPluginReady.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorPlugin, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorPlugin, isStandalone: true, selector: "ng-prosemirror-plugin", inputs: { key: "key", provider: "provider" }, outputs: { onPluginReady: "onPluginReady" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorPlugin, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-plugin', template: ``, standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onPluginReady: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3ItcGx1Z2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXByb3NlbWlycm9yLWFkYXB0ZXIvc3JjL2xpYi9jb21wb25lbnRzL25nLXByb3NlbWlycm9yLXBsdWdpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBWWhHLE1BQU0sT0FBZ0IsbUJBQW1CO0lBTXZDLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRnZCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXlDLENBQUM7SUFHcEYsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7SUFDNUUsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs4R0EzQm1CLG1CQUFtQjtrR0FBbkIsbUJBQW1CLDRLQUo3QixFQUFFOzsyRkFJUSxtQkFBbUI7a0JBTnhDLFNBQVM7K0JBQ0UsdUJBQXVCLFlBQ3ZCLEVBQUUsY0FFQSxJQUFJOytFQUdBLEdBQUc7c0JBQWxCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFFSSxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmdQcm9zZW1pcnJvckFkYXB0ZXJQcm92aWRlcn0gZnJvbSBcIi4uL25nLXByb3NlbWlycm9yLWFkYXB0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvcmVQbHVnaW5WaWV3fSBmcm9tIFwiQHByb3NlbWlycm9yLWFkYXB0ZXIvY29yZVwiO1xuaW1wb3J0IHtOZ0VkaXRvclZpZXdDb21wb25lbnR9IGZyb20gXCIuLi9uZ1Byb3NlbWlycm9yQWRhcHRlci50eXBlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvc2VtaXJyb3ItcGx1Z2luJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZXM6IFtdLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nUHJvc2VtaXJyb3JQbHVnaW4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGtleTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcHJvdmlkZXI6IE5nUHJvc2VtaXJyb3JBZGFwdGVyUHJvdmlkZXI7XG5cbiAgQE91dHB1dCgpIG9uUGx1Z2luUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPENvcmVQbHVnaW5WaWV3PE5nRWRpdG9yVmlld0NvbXBvbmVudD4+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcj8uc2VydmljZT8ucGx1Z2luVmlld0NvbnRleHQ/Llt0aGlzLmtleV07XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcj8uc2VydmljZT8ucGx1Z2luVmlld0NvbnRleHQ/Llt0aGlzLmtleV0/LnZpZXc7XG4gIH1cblxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXI/LnNlcnZpY2U/LnBsdWdpblZpZXdDb250ZXh0Py5bdGhpcy5rZXldPy52aWV3Py5zdGF0ZTtcbiAgfVxuXG4gIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXI/LnNlcnZpY2U/LnBsdWdpblZpZXdDb250ZXh0Py5bdGhpcy5rZXldPy5wcmV2U3RhdGU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblBsdWdpblJlYWR5LmVtaXQobnVsbCk7XG4gIH1cbn1cbiJdfQ==