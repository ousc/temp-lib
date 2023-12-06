import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { NgProsemirrorAdapterProvider } from "../ng-prosemirror-adapter.component";
import { CoreWidgetView } from "@prosemirror-adapter/core";
import { NgEditorViewComponent } from "../ngProsemirrorAdapter.type";
import * as i0 from "@angular/core";
export declare abstract class NgProsemirrorWidget implements AfterViewInit {
    el: ElementRef;
    key: string;
    provider: NgProsemirrorAdapterProvider;
    constructor(el: ElementRef);
    get context(): import("../ngProsemirrorAdapter.type").WidgetViewContext;
    get view(): import("prosemirror-view").EditorView;
    get getPos(): () => number;
    get spec(): {
        [key: string]: any;
        side?: number;
        marks?: readonly import("prosemirror-model").Mark[];
        stopEvent?: (event: Event) => boolean;
        ignoreSelection?: boolean;
        key?: string;
        destroy?: (node: Node) => void;
    };
    ngAfterViewInit(): void;
    onWidgetViewReady: EventEmitter<CoreWidgetView<NgEditorViewComponent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgProsemirrorWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgProsemirrorWidget, "ng-prosemirror-widget", never, { "key": { "alias": "key"; "required": false; }; "provider": { "alias": "provider"; "required": false; }; }, { "onWidgetViewReady": "onWidgetViewReady"; }, never, never, true, never>;
}
