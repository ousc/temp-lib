import { Directive, EventEmitter, Input, Output } from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorPlugin, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorPlugin, isStandalone: true, selector: "ng-prosemirror-plugin", inputs: { key: "key", provider: "provider" }, outputs: { onPluginReady: "onPluginReady" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorPlugin, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-prosemirror-plugin',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onPluginReady: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3ItcGx1Z2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXByb3NlbWlycm9yLWFkYXB0ZXIvc3JjL2xpYi9jb21wb25lbnRzL25nLXByb3NlbWlycm9yLXBsdWdpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBU2hHLE1BQU0sT0FBZ0IsbUJBQW1CO0lBTXZDLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRnZCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXlDLENBQUM7SUFHcEYsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7SUFDNUUsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs4R0EzQm1CLG1CQUFtQjtrR0FBbkIsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUp4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjsrRUFFaUIsR0FBRztzQkFBbEIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLO2dCQUVJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOZ1Byb3NlbWlycm9yQWRhcHRlclByb3ZpZGVyfSBmcm9tIFwiLi4vbmctcHJvc2VtaXJyb3ItYWRhcHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29yZVBsdWdpblZpZXd9IGZyb20gXCJAcHJvc2VtaXJyb3ItYWRhcHRlci9jb3JlXCI7XG5pbXBvcnQge05nRWRpdG9yVmlld0NvbXBvbmVudH0gZnJvbSBcIi4uL25nUHJvc2VtaXJyb3JBZGFwdGVyLnR5cGVcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctcHJvc2VtaXJyb3ItcGx1Z2luJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ1Byb3NlbWlycm9yUGx1Z2luIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHByb3ZpZGVyOiBOZ1Byb3NlbWlycm9yQWRhcHRlclByb3ZpZGVyO1xuXG4gIEBPdXRwdXQoKSBvblBsdWdpblJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3JlUGx1Z2luVmlldzxOZ0VkaXRvclZpZXdDb21wb25lbnQ+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXI/LnNlcnZpY2U/LnBsdWdpblZpZXdDb250ZXh0Py5bdGhpcy5rZXldO1xuICB9XG5cbiAgZ2V0IHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXI/LnNlcnZpY2U/LnBsdWdpblZpZXdDb250ZXh0Py5bdGhpcy5rZXldPy52aWV3O1xuICB9XG5cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyPy5zZXJ2aWNlPy5wbHVnaW5WaWV3Q29udGV4dD8uW3RoaXMua2V5XT8udmlldz8uc3RhdGU7XG4gIH1cblxuICBnZXQgcHJldlN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyPy5zZXJ2aWNlPy5wbHVnaW5WaWV3Q29udGV4dD8uW3RoaXMua2V5XT8ucHJldlN0YXRlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25QbHVnaW5SZWFkeS5lbWl0KG51bGwpO1xuICB9XG59XG4iXX0=