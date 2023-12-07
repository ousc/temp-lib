import { Directive, EventEmitter, Input, Output } from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorNode, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorNode, isStandalone: true, selector: "ng-prosemirror-node", inputs: { key: "key", provider: "provider" }, outputs: { onNodeViewReady: "onNodeViewReady" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorNode, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-prosemirror-node',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onNodeViewReady: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3Itbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wcm9zZW1pcnJvci1hZGFwdGVyL3NyYy9saWIvY29tcG9uZW50cy9uZy1wcm9zZW1pcnJvci1ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFTaEcsTUFBTSxPQUFnQixpQkFBaUI7SUFJckMsWUFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUEyQ3ZCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7SUExQ3BGLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzhHQTdDbUIsaUJBQWlCO2tHQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBSnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOytFQUVpQixHQUFHO3NCQUFsQixLQUFLO2dCQUNVLFFBQVE7c0JBQXZCLEtBQUs7Z0JBNkNJLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOZ1Byb3NlbWlycm9yQWRhcHRlclByb3ZpZGVyfSBmcm9tIFwiLi4vbmctcHJvc2VtaXJyb3ItYWRhcHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29yZU5vZGVWaWV3fSBmcm9tIFwiQHByb3NlbWlycm9yLWFkYXB0ZXIvY29yZVwiO1xuaW1wb3J0IHtOZ0VkaXRvclZpZXdDb21wb25lbnR9IGZyb20gXCIuLi9uZ1Byb3NlbWlycm9yQWRhcHRlci50eXBlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXByb3NlbWlycm9yLW5vZGUnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nUHJvc2VtaXJyb3JOb2RlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHByb3ZpZGVyOiBOZ1Byb3NlbWlycm9yQWRhcHRlclByb3ZpZGVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgZ2V0IGNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXI/LnNlcnZpY2U/Lm5vZGVWaWV3Q29udGV4dD8uW3RoaXMua2V5XTtcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ/LnZpZXc7XG4gIH1cblxuICBnZXQgY29udGVudFJlZigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Py5jb250ZW50UmVmO1xuICB9XG5cbiAgZ2V0IGdldFBvcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Py5nZXRQb3M7XG4gIH1cblxuICBnZXQgc2V0QXR0cnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dD8uc2V0QXR0cnM7XG4gIH1cblxuICBnZXQgbm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0Py5ub2RlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ/LnNlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGRlY29yYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ/LmRlY29yYXRpb25zO1xuICB9XG4gIGdldCBpbm5lckRlY29yYXRpb25zKCl7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dD8uaW5uZXJEZWNvcmF0aW9ucztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uTm9kZVZpZXdSZWFkeS5lbWl0KG51bGwpO1xuICAgIHRoaXMuY29udGV4dD8uY29udGVudFJlZih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgQE91dHB1dCgpIG9uTm9kZVZpZXdSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29yZU5vZGVWaWV3PE5nRWRpdG9yVmlld0NvbXBvbmVudD4+KCk7XG59XG4iXX0=