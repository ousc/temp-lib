import { Injector, ViewContainerRef } from '@angular/core';
import { NgProsemirrorAdapterProvider } from "./ng-prosemirror-adapter.component";
import { NgEditorViewComponent, NodeViewContext, NodeViewFactory, PluginViewContext, PluginViewFactory, WidgetViewContext, WidgetViewFactory } from "./ngProsemirrorAdapter.type";
import { CoreNodeView, CorePluginView, CoreWidgetView } from "@prosemirror-adapter/core";
import { NgProsemirrorEditor } from "./components/ng-prosemirror-editor.component";
import { NgProsemirrorWidget } from "./components/ng-prosemirror-widget.component";
import { NgProsemirrorPlugin } from "./components/ng-prosemirror-plugin.component";
import * as i0 from "@angular/core";
export declare class NgProsemirrorAdapterService {
    private _injector;
    private _vcf;
    constructor(_injector: Injector, _vcf: ViewContainerRef);
    editor: NgProsemirrorEditor;
    provider: NgProsemirrorAdapterProvider;
    nodeView: Record<string, CoreNodeView<NgEditorViewComponent>>;
    nodeViewContext: Record<string, NodeViewContext>;
    updateNodeViewContext(key: string): void;
    createNodeView: NodeViewFactory;
    pluginView: Record<string, CorePluginView<NgProsemirrorPlugin>>;
    pluginViewContext: Record<string, PluginViewContext>;
    updatePluginViewContext(key: string): void;
    createPluginView: PluginViewFactory;
    widgetView: Record<string, CoreWidgetView<NgProsemirrorWidget>>;
    widgetViewContext: Record<string, WidgetViewContext>;
    updateWidgetViewContext(key: string): void;
    createWidgetView: WidgetViewFactory;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgProsemirrorAdapterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgProsemirrorAdapterService>;
}
