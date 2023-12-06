import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
export class NgProsemirrorWidget {
    constructor(el) {
        this.el = el;
        this.onWidgetViewReady = new EventEmitter();
    }
    get context() {
        return this.provider?.service?.widgetViewContext?.[this.key];
    }
    get view() {
        return this.provider?.service?.widgetViewContext?.[this.key]?.view;
    }
    get getPos() {
        return this.provider.service.widgetViewContext?.[this.key]?.getPos;
    }
    get spec() {
        return this.provider.service.widgetViewContext?.[this.key]?.spec;
    }
    ngAfterViewInit() {
        this.onWidgetViewReady.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorWidget, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorWidget, isStandalone: true, selector: "ng-prosemirror-widget", inputs: { key: "key", provider: "provider" }, outputs: { onWidgetViewReady: "onWidgetViewReady" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorWidget, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-widget', template: ``, standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onWidgetViewReady: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXByb3NlbWlycm9yLWFkYXB0ZXIvc3JjL2xpYi9jb21wb25lbnRzL25nLXByb3NlbWlycm9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBWWhHLE1BQU0sT0FBZ0IsbUJBQW1CO0lBSXZDLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBdUJ2QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBeUMsQ0FBQztJQXRCeEYsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OEdBekJtQixtQkFBbUI7a0dBQW5CLG1CQUFtQixvTEFKN0IsRUFBRTs7MkZBSVEsbUJBQW1CO2tCQU54QyxTQUFTOytCQUNFLHVCQUF1QixZQUN2QixFQUFFLGNBRUEsSUFBSTsrRUFHQSxHQUFHO3NCQUFsQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBeUJJLGlCQUFpQjtzQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05nUHJvc2VtaXJyb3JBZGFwdGVyUHJvdmlkZXJ9IGZyb20gXCIuLi9uZy1wcm9zZW1pcnJvci1hZGFwdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb3JlTm9kZVZpZXcsIENvcmVXaWRnZXRWaWV3fSBmcm9tIFwiQHByb3NlbWlycm9yLWFkYXB0ZXIvY29yZVwiO1xuaW1wb3J0IHtOZ0VkaXRvclZpZXdDb21wb25lbnR9IGZyb20gXCIuLi9uZ1Byb3NlbWlycm9yQWRhcHRlci50eXBlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvc2VtaXJyb3Itd2lkZ2V0JyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdHlsZXM6IFtdLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nUHJvc2VtaXJyb3JXaWRnZXQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGtleTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcHJvdmlkZXI6IE5nUHJvc2VtaXJyb3JBZGFwdGVyUHJvdmlkZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcj8uc2VydmljZT8ud2lkZ2V0Vmlld0NvbnRleHQ/Llt0aGlzLmtleV07XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcj8uc2VydmljZT8ud2lkZ2V0Vmlld0NvbnRleHQ/Llt0aGlzLmtleV0/LnZpZXc7XG4gIH1cblxuICBnZXQgZ2V0UG9zKCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLnNlcnZpY2Uud2lkZ2V0Vmlld0NvbnRleHQ/Llt0aGlzLmtleV0/LmdldFBvcztcbiAgfVxuXG4gIGdldCBzcGVjKCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyLnNlcnZpY2Uud2lkZ2V0Vmlld0NvbnRleHQ/Llt0aGlzLmtleV0/LnNwZWM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbldpZGdldFZpZXdSZWFkeS5lbWl0KG51bGwpO1xuICB9XG5cbiAgQE91dHB1dCgpIG9uV2lkZ2V0Vmlld1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3JlV2lkZ2V0VmlldzxOZ0VkaXRvclZpZXdDb21wb25lbnQ+PigpO1xufVxuIl19