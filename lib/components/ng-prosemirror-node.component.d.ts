import { AfterViewInit, ElementRef, EventEmitter } from "@angular/core";
import { NgProsemirrorAdapterProvider } from "../ng-prosemirror-adapter.component";
import { CoreNodeView } from "@prosemirror-adapter/core";
import { NgEditorViewComponent } from "../ngProsemirrorAdapter.type";
import * as i0 from "@angular/core";
export declare abstract class NgProsemirrorNode implements AfterViewInit {
    el: ElementRef;
    key: string;
    provider: NgProsemirrorAdapterProvider;
    constructor(el: ElementRef);
    get context(): import("../ngProsemirrorAdapter.type").NodeViewContext;
    get view(): import("prosemirror-view").EditorView;
    get contentRef(): import("../ngProsemirrorAdapter.type").NodeViewContentRef;
    get getPos(): () => number;
    get setAttrs(): (attrs: import("prosemirror-model").Attrs) => void;
    get node(): import("prosemirror-model").Node;
    get selected(): boolean;
    get decorations(): readonly import("prosemirror-view").Decoration[];
    get innerDecorations(): import("prosemirror-view").DecorationSource;
    ngAfterViewInit(): void;
    onNodeViewReady: EventEmitter<CoreNodeView<NgEditorViewComponent>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgProsemirrorNode, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgProsemirrorNode, "ng-prosemirror-node", never, { "key": { "alias": "key"; "required": false; }; "provider": { "alias": "provider"; "required": false; }; }, { "onNodeViewReady": "onNodeViewReady"; }, never, never, true, never>;
}
