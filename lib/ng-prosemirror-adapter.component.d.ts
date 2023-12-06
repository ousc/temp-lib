import { NgProsemirrorAdapterService } from "./ng-prosemirror-adapter.service";
import { NgProsemirrorEditor } from "./components/ng-prosemirror-editor.component";
import * as i0 from "@angular/core";
export declare class NgProsemirrorAdapterProvider {
    service: NgProsemirrorAdapterService;
    private _editorComp;
    set editor(value: NgProsemirrorEditor);
    get editor(): NgProsemirrorEditor;
    constructor(service: NgProsemirrorAdapterService);
    createPluginView: import("ng-prosemirror-adapter").PluginViewFactory;
    createNodeView: import("ng-prosemirror-adapter").NodeViewFactory;
    createWidgetView: import("ng-prosemirror-adapter").WidgetViewFactory;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgProsemirrorAdapterProvider, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgProsemirrorAdapterProvider, "ng-prosemirror-adapter-provider", never, {}, {}, ["editor"], ["*"], true, never>;
}
