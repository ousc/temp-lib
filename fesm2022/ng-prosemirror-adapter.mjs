import * as i0 from '@angular/core';
import { Injectable, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { Decoration } from 'prosemirror-view';
import { CoreNodeView, CorePluginView, CoreWidgetView } from '@prosemirror-adapter/core';
import { nanoid } from 'nanoid';
import { CommonModule } from '@angular/common';

/**
 * Returns the first child element of the given HTMLElement.
 * If the HTMLElement does not have a first child element, it returns the HTMLElement itself.
 *
 * @param {HTMLElement} el - The HTMLElement to get the first child element from.
 * @returns {HTMLElement} The first child element of the given HTMLElement, or the HTMLElement itself if it does not have a first child element.
 */
const firstElementChild = (el) => {
    if (el.firstElementChild) {
        return el.firstElementChild;
    }
    return el;
};
class NgProsemirrorAdapterService {
    constructor(_injector, _vcf) {
        this._injector = _injector;
        this._vcf = _vcf;
        this.nodeView = {};
        this.nodeViewContext = {};
        this.createNodeView = (options) => {
            return (node, view, getPos, decorations, innerDecorations) => {
                const componentRef = this._vcf.createComponent(options.component, { injector: this._injector });
                const key = options.key || nanoid();
                Object.keys(options.inputs || {}).forEach((key) => {
                    componentRef.setInput(key, options.inputs[key]);
                });
                componentRef.setInput("provider", this.provider);
                componentRef.setInput("key", key);
                this.nodeView[key] = new CoreNodeView({
                    node,
                    view,
                    getPos,
                    decorations,
                    innerDecorations,
                    options: {
                        ...options,
                        component: componentRef,
                        onUpdate: () => {
                            options.onUpdate?.();
                            this.updateNodeViewContext(key);
                            this.nodeViewContext[key].contentRef(componentRef.instance.el.nativeElement);
                        },
                        selectNode: () => {
                            options.selectNode?.();
                            this.updateNodeViewContext(key);
                        },
                        deselectNode: () => {
                            options.deselectNode?.();
                            this.updateNodeViewContext(key);
                        },
                        destroy: () => {
                            options.destroy?.();
                            this.updateNodeViewContext(key);
                        },
                    }
                });
                firstElementChild(this.nodeView[key].dom).appendChild(componentRef.location.nativeElement);
                this.updateNodeViewContext(key);
                this.nodeViewContext[key].contentRef(componentRef.instance.el.nativeElement);
                return this.nodeView[key];
            };
        };
        this.pluginView = {};
        this.pluginViewContext = {};
        this.createPluginView = (options) => {
            const key = options.key || nanoid();
            const componentRef = this._vcf.createComponent(options.component, { injector: this._injector });
            Object.keys(options.inputs || {}).forEach((key) => {
                componentRef.setInput(key, options.inputs[key]);
            });
            componentRef.setInput("provider", this.provider);
            componentRef.setInput('key', key);
            return new Promise((resolve) => {
                componentRef.instance.onPluginReady.subscribe((pluginView) => {
                    resolve((view) => {
                        this.pluginView[key] = pluginView || new CorePluginView({
                            view,
                            options: {
                                ...options,
                                component: componentRef.instance,
                                update: (view, prevState) => {
                                    options.update?.(view, prevState);
                                    this.updatePluginViewContext(key);
                                },
                                destroy: () => {
                                    options.destroy?.();
                                    this.pluginView[key].destroy();
                                    delete this.pluginView[key];
                                },
                            }
                        });
                        this.updatePluginViewContext(key);
                        firstElementChild(this.provider.editor.el.nativeElement).appendChild(componentRef.location.nativeElement);
                        return this.pluginView[key];
                    });
                });
            });
        };
        this.widgetView = {};
        this.widgetViewContext = {};
        this.createWidgetView = (options) => {
            const componentRef = this._vcf.createComponent(options.component, { injector: this._injector });
            const key = options.key || nanoid();
            Object.keys(options.inputs || {}).forEach((key) => {
                componentRef.setInput(key, options.inputs[key]);
            });
            componentRef.setInput("provider", this.provider);
            componentRef.setInput("key", key);
            return (pos, spec) => {
                this.widgetView[key] = new CoreWidgetView({
                    pos,
                    spec,
                    options: {
                        ...options,
                        component: componentRef.instance
                    }
                });
                return Decoration.widget(pos, (view, getPos) => {
                    this.widgetView[key].bind(view, getPos);
                    this.updateWidgetViewContext(key);
                    firstElementChild(this.widgetView[key].dom).appendChild(componentRef.location.nativeElement);
                    return this.widgetView[key].dom;
                }, spec);
            };
        };
    }
    updateNodeViewContext(key) {
        const nodeView = this.nodeView[key];
        if (!nodeView.view) {
            return;
        }
        this.nodeViewContext[key] = {
            ...this.nodeViewContext[key],
            view: Object.assign(Object.create(Object.getPrototypeOf(nodeView.view)), nodeView.view),
            getPos: nodeView.getPos,
            node: nodeView.node,
            selected: nodeView.selected,
            decorations: nodeView.decorations,
            innerDecorations: nodeView.innerDecorations,
            contentRef: (element) => {
                if (element
                    && element instanceof HTMLElement
                    && nodeView.contentDOM
                    && element.firstChild !== nodeView.contentDOM)
                    firstElementChild(element).appendChild(nodeView.contentDOM);
            },
        };
    }
    updatePluginViewContext(key) {
        const pluginView = this.pluginView[key];
        if (!pluginView.view) {
            return;
        }
        this.pluginViewContext[key] = {
            view: Object.assign(Object.create(Object.getPrototypeOf(pluginView.view)), pluginView.view),
            prevState: pluginView.prevState,
        };
    }
    updateWidgetViewContext(key) {
        const widgetView = this.widgetView[key];
        if (!widgetView.spec) {
            return;
        }
        this.widgetViewContext[key] = {
            ...this.widgetViewContext[key],
            spec: widgetView.spec
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterService, deps: [{ token: i0.Injector }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ViewContainerRef }] });

class NgProsemirrorEditor {
    constructor(el) {
        this.el = el;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorEditor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorEditor, isStandalone: true, selector: "ng-prosemirror-editor", ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorEditor, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-editor', template: ``, standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });

class NgProsemirrorAdapterProvider {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterProvider, deps: [{ token: NgProsemirrorAdapterService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorAdapterProvider, isStandalone: true, selector: "ng-prosemirror-adapter-provider", providers: [NgProsemirrorAdapterService], queries: [{ propertyName: "editor", first: true, predicate: NgProsemirrorEditor, descendants: true }], ngImport: i0, template: `<ng-content/>`, isInline: true, styles: [":host{display:block;width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorAdapterProvider, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-adapter-provider', standalone: true, imports: [CommonModule], template: `<ng-content/>`, providers: [NgProsemirrorAdapterService], styles: [":host{display:block;width:100%;height:100%}\n"] }]
        }], ctorParameters: () => [{ type: NgProsemirrorAdapterService }], propDecorators: { editor: [{
                type: ContentChild,
                args: [NgProsemirrorEditor, { static: false }]
            }] } });

class NgProsemirrorNode {
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

class NgProsemirrorPlugin {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorPlugin, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorPlugin, isStandalone: true, selector: "ng-prosemirror-plugin", inputs: { key: "key", provider: "provider" }, outputs: { onPluginReady: "onPluginReady" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorPlugin, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-plugin', template: ``, standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onPluginReady: [{
                type: Output
            }] } });

class NgProsemirrorWidget {
    constructor(el) {
        this.el = el;
        this.onWidgetViewReady = new EventEmitter();
    }
    get context() {
        return this.provider?.service?.widgetViewContext?.[this.key];
    }
    get view() {
        return this.provider?.service?.widgetViewContext?.[this.key]?.view;
    }
    get getPos() {
        return this.provider.service.widgetViewContext?.[this.key]?.getPos;
    }
    get spec() {
        return this.provider.service.widgetViewContext?.[this.key]?.spec;
    }
    ngAfterViewInit() {
        this.onWidgetViewReady.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorWidget, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.5", type: NgProsemirrorWidget, isStandalone: true, selector: "ng-prosemirror-widget", inputs: { key: "key", provider: "provider" }, outputs: { onWidgetViewReady: "onWidgetViewReady" }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.5", ngImport: i0, type: NgProsemirrorWidget, decorators: [{
            type: Component,
            args: [{ selector: 'ng-prosemirror-widget', template: ``, standalone: true }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { key: [{
                type: Input
            }], provider: [{
                type: Input
            }], onWidgetViewReady: [{
                type: Output
            }] } });

/*
 * Public API Surface of ng-prosemirror-adapter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgProsemirrorAdapterProvider, NgProsemirrorAdapterService, NgProsemirrorEditor, NgProsemirrorNode, NgProsemirrorPlugin, NgProsemirrorWidget };
//# sourceMappingURL=ng-prosemirror-adapter.mjs.map
