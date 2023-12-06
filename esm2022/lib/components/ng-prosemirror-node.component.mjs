import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
export class NgProsemirrorNode {
    constructor(el) {
        this.el = el;
        this.onNodeViewReady = new EventEmitter();
    }
    get context() {
        return this.provider?.service?.nodeViewContext?.[this.key];
    }
    get view() {
        return this.context?.view;
    }
    get contentRef() {
        return this.context?.contentRef;
    }
    get getPos() {
        return this.context?.getPos;
    }
    get setAttrs() {
        return this.context?.setAttrs;
    }
    get node() {
        return this.context?.node;
    }
    get selected() {
        return this.context?.selected;
    }
    get decorations() {
        return this.context?.decorations;
    }
    get innerDecorations() {
        return this.context?.innerDecorations;
    }
    ngAfterViewInit() {
        this.onNodeViewReady.emit(null);
        this.context?.contentRef(this.el.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorNode, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorNode, isStandalone: true, selector: "ng-prosemirror-node", inputs: { key: "key", provider: "provider" }, outputs: { onNodeViewReady: "onNodeViewReady" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorNode, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-node', template: ``, standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onNodeViewReady: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3Itbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wcm9zZW1pcnJvci1hZGFwdGVyL3NyYy9saWIvY29tcG9uZW50cy9uZy1wcm9zZW1pcnJvci1ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFZaEcsTUFBTSxPQUFnQixpQkFBaUI7SUFJckMsWUFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUEyQ3ZCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7SUExQ3BGLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzhHQTdDbUIsaUJBQWlCO2tHQUFqQixpQkFBaUIsOEtBSjNCLEVBQUU7OzJGQUlRLGlCQUFpQjtrQkFOdEMsU0FBUzsrQkFDRSxxQkFBcUIsWUFDckIsRUFBRSxjQUVBLElBQUk7K0VBR0EsR0FBRztzQkFBbEIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLO2dCQTZDSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmdQcm9zZW1pcnJvckFkYXB0ZXJQcm92aWRlcn0gZnJvbSBcIi4uL25nLXByb3NlbWlycm9yLWFkYXB0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvcmVOb2RlVmlld30gZnJvbSBcIkBwcm9zZW1pcnJvci1hZGFwdGVyL2NvcmVcIjtcbmltcG9ydCB7TmdFZGl0b3JWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi4vbmdQcm9zZW1pcnJvckFkYXB0ZXIudHlwZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXByb3NlbWlycm9yLW5vZGUnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHN0eWxlczogW10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdQcm9zZW1pcnJvck5vZGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGtleTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcHJvdmlkZXI6IE5nUHJvc2VtaXJyb3JBZGFwdGVyUHJvdmlkZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBnZXQgY29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlcj8uc2VydmljZT8ubm9kZVZpZXdDb250ZXh0Py5bdGhpcy5rZXldO1xuICB9XG5cbiAgZ2V0IHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dD8udmlldztcbiAgfVxuXG4gIGdldCBjb250ZW50UmVmKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ/LmNvbnRlbnRSZWY7XG4gIH1cblxuICBnZXQgZ2V0UG9zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ/LmdldFBvcztcbiAgfVxuXG4gIGdldCBzZXRBdHRycygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Py5zZXRBdHRycztcbiAgfVxuXG4gIGdldCBub2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ/Lm5vZGU7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dD8uc2VsZWN0ZWQ7XG4gIH1cblxuICBnZXQgZGVjb3JhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dD8uZGVjb3JhdGlvbnM7XG4gIH1cbiAgZ2V0IGlubmVyRGVjb3JhdGlvbnMoKXtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Py5pbm5lckRlY29yYXRpb25zO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub25Ob2RlVmlld1JlYWR5LmVtaXQobnVsbCk7XG4gICAgdGhpcy5jb250ZXh0Py5jb250ZW50UmVmKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBAT3V0cHV0KCkgb25Ob2RlVmlld1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3JlTm9kZVZpZXc8TmdFZGl0b3JWaWV3Q29tcG9uZW50Pj4oKTtcbn1cbiJdfQ==