import { Directive, EventEmitter, Input, Output } from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorWidget, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorWidget, isStandalone: true, selector: "ng-prosemirror-widget", inputs: { key: "key", provider: "provider" }, outputs: { onWidgetViewReady: "onWidgetViewReady" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorWidget, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-prosemirror-widget',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onWidgetViewReady: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3Itd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXByb3NlbWlycm9yLWFkYXB0ZXIvc3JjL2xpYi9jb21wb25lbnRzL25nLXByb3NlbWlycm9yLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBU2hHLE1BQU0sT0FBZ0IsbUJBQW1CO0lBSXZDLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBdUJ2QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBeUMsQ0FBQztJQXRCeEYsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OEdBekJtQixtQkFBbUI7a0dBQW5CLG1CQUFtQjs7MkZBQW5CLG1CQUFtQjtrQkFKeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7K0VBRWlCLEdBQUc7c0JBQWxCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkF5QkksaUJBQWlCO3NCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmdQcm9zZW1pcnJvckFkYXB0ZXJQcm92aWRlcn0gZnJvbSBcIi4uL25nLXByb3NlbWlycm9yLWFkYXB0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvcmVXaWRnZXRWaWV3fSBmcm9tIFwiQHByb3NlbWlycm9yLWFkYXB0ZXIvY29yZVwiO1xuaW1wb3J0IHtOZ0VkaXRvclZpZXdDb21wb25lbnR9IGZyb20gXCIuLi9uZ1Byb3NlbWlycm9yQWRhcHRlci50eXBlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXByb3NlbWlycm9yLXdpZGdldCcsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdQcm9zZW1pcnJvcldpZGdldCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwdWJsaWMga2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcm92aWRlcjogTmdQcm9zZW1pcnJvckFkYXB0ZXJQcm92aWRlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyPy5zZXJ2aWNlPy53aWRnZXRWaWV3Q29udGV4dD8uW3RoaXMua2V5XTtcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyPy5zZXJ2aWNlPy53aWRnZXRWaWV3Q29udGV4dD8uW3RoaXMua2V5XT8udmlldztcbiAgfVxuXG4gIGdldCBnZXRQb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuc2VydmljZS53aWRnZXRWaWV3Q29udGV4dD8uW3RoaXMua2V5XT8uZ2V0UG9zO1xuICB9XG5cbiAgZ2V0IHNwZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuc2VydmljZS53aWRnZXRWaWV3Q29udGV4dD8uW3RoaXMua2V5XT8uc3BlYztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uV2lkZ2V0Vmlld1JlYWR5LmVtaXQobnVsbCk7XG4gIH1cblxuICBAT3V0cHV0KCkgb25XaWRnZXRWaWV3UmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPENvcmVXaWRnZXRWaWV3PE5nRWRpdG9yVmlld0NvbXBvbmVudD4+KCk7XG59XG4iXX0=