import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { NgProsemirrorAdapterProvider } from "../ng-prosemirror-adapter.component";
import { CorePluginView } from "@prosemirror-adapter/core";
import { NgEditorViewComponent } from "../ngProsemirrorAdapter.type";
import * as i0 from "@angular/core";
export declare abstract class NgProsemirrorPlugin implements AfterViewInit {
    el: ElementRef;
    key: string;
    provider: NgProsemirrorAdapterProvider;
    onPluginReady: EventEmitter<CorePluginView<NgEditorViewComponent>>;
    constructor(el: ElementRef);
    get context(): import("../ngProsemirrorAdapter.type").PluginViewContext;
    get view(): import("prosemirror-view").EditorView;
    get state(): import("prosemirror-state").EditorState;
    get prevState(): import("prosemirror-state").EditorState;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgProsemirrorPlugin, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgProsemirrorPlugin, "ng-prosemirror-plugin", never, { "key": { "alias": "key"; "required": false; }; "provider": { "alias": "provider"; "required": false; }; }, { "onPluginReady": "onPluginReady"; }, never, never, true, never>;
}
