import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProsemirrorAdapterService } from "./ng-prosemirror-adapter.service";
import { NgProsemirrorEditor } from "./components/ng-prosemirror-editor.component";
import * as i0 from "@angular/core";
import * as i1 from "./ng-prosemirror-adapter.service";
export class NgProsemirrorAdapterProvider {
    set editor(value) {
        this._editorComp = value;
        if (value) {
            this._editorComp.provider = this;
            this.service.editor = this._editorComp;
        }
    }
    get editor() {
        return this._editorComp;
    }
    constructor(service) {
        this.service = service;
        this.createPluginView = this.service.createPluginView;
        this.createNodeView = this.service.createNodeView;
        this.createWidgetView = this.service.createWidgetView;
        this.service.provider = this;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterProvider, deps: [{ token: i1.NgProsemirrorAdapterService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorAdapterProvider, isStandalone: true, selector: "ng-prosemirror-adapter-provider", providers: [NgProsemirrorAdapterService], queries: [{ propertyName: "editor", first: true, predicate: NgProsemirrorEditor, descendants: true }], ngImport: i0, template: `<ng-content/>`, isInline: true, styles: [":host{display:block;width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterProvider, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-adapter-provider', standalone: true, imports: [CommonModule], template: `<ng-content/>`, providers: [NgProsemirrorAdapterService], styles: [":host{display:block;width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: i1.NgProsemirrorAdapterService }], propDecorators: { editor: [{
                type: ContentChild,
                args: [NgProsemirrorEditor, { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3ItYWRhcHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wcm9zZW1pcnJvci1hZGFwdGVyL3NyYy9saWIvbmctcHJvc2VtaXJyb3ItYWRhcHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7O0FBZ0JqRixNQUFNLE9BQU8sNEJBQTRCO0lBSXZDLElBQ1csTUFBTSxDQUFDLEtBQTBCO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUNTLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO1FBSXRDLHFCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsbUJBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBTHRELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDOzhHQXBCVSw0QkFBNEI7a0dBQTVCLDRCQUE0Qiw4RUFGNUIsQ0FBQywyQkFBMkIsQ0FBQyw4REFNMUIsbUJBQW1CLGdEQWR2QixlQUFlLHNIQURmLFlBQVk7OzJGQVdYLDRCQUE0QjtrQkFkeEMsU0FBUzsrQkFDRSxpQ0FBaUMsY0FDL0IsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLFlBQ2IsZUFBZSxhQVFkLENBQUMsMkJBQTJCLENBQUM7Z0dBTzdCLE1BQU07c0JBRGhCLFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdQcm9zZW1pcnJvckFkYXB0ZXJTZXJ2aWNlfSBmcm9tIFwiLi9uZy1wcm9zZW1pcnJvci1hZGFwdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7TmdQcm9zZW1pcnJvckVkaXRvcn0gZnJvbSBcIi4vY29tcG9uZW50cy9uZy1wcm9zZW1pcnJvci1lZGl0b3IuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXByb3NlbWlycm9yLWFkYXB0ZXItcHJvdmlkZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudC8+YCxcbiAgc3R5bGVzOiBgXG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIGAsXG4gIHByb3ZpZGVyczogW05nUHJvc2VtaXJyb3JBZGFwdGVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9zZW1pcnJvckFkYXB0ZXJQcm92aWRlciB7XG5cbiAgcHJpdmF0ZSBfZWRpdG9yQ29tcDogTmdQcm9zZW1pcnJvckVkaXRvcjtcblxuICBAQ29udGVudENoaWxkKE5nUHJvc2VtaXJyb3JFZGl0b3IsIHtzdGF0aWM6IGZhbHNlfSlcbiAgcHVibGljIHNldCBlZGl0b3IodmFsdWU6IE5nUHJvc2VtaXJyb3JFZGl0b3IpIHtcbiAgICB0aGlzLl9lZGl0b3JDb21wID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9lZGl0b3JDb21wLnByb3ZpZGVyID0gdGhpcztcbiAgICAgIHRoaXMuc2VydmljZS5lZGl0b3IgPSB0aGlzLl9lZGl0b3JDb21wO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZWRpdG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0b3JDb21wO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IE5nUHJvc2VtaXJyb3JBZGFwdGVyU2VydmljZSkge1xuICAgIHRoaXMuc2VydmljZS5wcm92aWRlciA9IHRoaXM7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUGx1Z2luVmlldyA9IHRoaXMuc2VydmljZS5jcmVhdGVQbHVnaW5WaWV3O1xuICBwdWJsaWMgY3JlYXRlTm9kZVZpZXcgPSB0aGlzLnNlcnZpY2UuY3JlYXRlTm9kZVZpZXc7XG4gIHB1YmxpYyBjcmVhdGVXaWRnZXRWaWV3ID0gdGhpcy5zZXJ2aWNlLmNyZWF0ZVdpZGdldFZpZXc7XG59XG4iXX0=