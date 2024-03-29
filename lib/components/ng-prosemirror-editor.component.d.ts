import { ElementRef } from "@angular/core";
import { NgProsemirrorAdapterProvider } from "../ng-prosemirror-adapter.component";
import * as i0 from "@angular/core";
export declare abstract class NgProsemirrorEditor {
    el: ElementRef;
    constructor(el: ElementRef);
    provider: NgProsemirrorAdapterProvider;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgProsemirrorEditor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgProsemirrorEditor, "ng-prosemirror-editor", never, {}, {}, never, never, true, never>;
}
