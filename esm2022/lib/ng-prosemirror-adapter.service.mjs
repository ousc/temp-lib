import { Injectable } from '@angular/core';
import { Decoration } from "prosemirror-view";
import { CoreNodeView, CorePluginView, CoreWidgetView } from "@prosemirror-adapter/core";
import { nanoid } from "nanoid";
import * as i0 from "@angular/core";
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
export class NgProsemirrorAdapterService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcHJvc2VtaXJyb3ItYWRhcHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHJvc2VtaXJyb3ItYWRhcHRlci9zcmMvbGliL25nLXByb3NlbWlycm9yLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQWEsTUFBTSxrQkFBa0IsQ0FBQztBQVF4RCxPQUFPLEVBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDOztBQUs5Qjs7Ozs7O0dBTUc7QUFDSCxNQUFNLGlCQUFpQixHQUFHLENBQUMsRUFBZSxFQUFFLEVBQUU7SUFDNUMsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDeEIsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7S0FDN0I7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQTtBQUdELE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFDVSxTQUFtQixFQUNuQixJQUFzQjtRQUR0QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQWtCO1FBUWhDLGFBQVEsR0FBd0QsRUFBRSxDQUFDO1FBQ25FLG9CQUFlLEdBQW9DLEVBQUUsQ0FBQztRQTJCdEQsbUJBQWMsR0FBb0IsQ0FBQyxPQUE4QixFQUFFLEVBQUU7WUFDbkUsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFO2dCQUMzRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO2dCQUU5RixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO2dCQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2hELFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDakQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLFlBQVksQ0FBd0I7b0JBQzNELElBQUk7b0JBQ0osSUFBSTtvQkFDSixNQUFNO29CQUNOLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsR0FBRyxPQUFPO3dCQUNWLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixRQUFRLEVBQUUsR0FBRyxFQUFFOzRCQUNiLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDOzRCQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUMvRSxDQUFDO3dCQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7NEJBQ2YsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7NEJBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsQ0FBQzt3QkFDRCxZQUFZLEVBQUUsR0FBRyxFQUFFOzRCQUNqQixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQzs0QkFDekIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQyxDQUFDO3dCQUNELE9BQU8sRUFBRSxHQUFHLEVBQUU7NEJBQ1osT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsQ0FBQztxQkFDRjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBd0QsRUFBRSxDQUFDO1FBQ3JFLHNCQUFpQixHQUFzQyxFQUFFLENBQUM7UUFhMUQscUJBQWdCLEdBQXNCLENBQUMsT0FBZ0MsRUFBRSxFQUFFO1lBQ3pFLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7WUFDcEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUU5RixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hELFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNqRCxDQUFDLENBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVsQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzdCLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQStDLEVBQUUsRUFBRTtvQkFDaEcsT0FBTyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO3dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsSUFBSSxJQUFJLGNBQWMsQ0FBc0I7NEJBQzNFLElBQUk7NEJBQ0osT0FBTyxFQUFFO2dDQUNQLEdBQUcsT0FBTztnQ0FDVixTQUFTLEVBQUUsWUFBWSxDQUFDLFFBQVE7Z0NBQ2hDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRTtvQ0FDMUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztvQ0FDbEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNwQyxDQUFDO2dDQUNELE9BQU8sRUFBRSxHQUFHLEVBQUU7b0NBQ1osT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUE7b0NBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0NBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDOUIsQ0FBQzs2QkFDRjt5QkFDRixDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNsQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzFHLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBd0QsRUFBRSxDQUFDO1FBQ3JFLHNCQUFpQixHQUFzQyxFQUFFLENBQUM7UUFhMUQscUJBQWdCLEdBQXNCLENBQUMsT0FBNEIsRUFBRSxFQUFFO1lBQ3JFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFFOUYsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hELFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNqRCxDQUFDLENBQUMsQ0FBQztZQUVILFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVsQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksY0FBYyxDQUFzQjtvQkFDN0QsR0FBRztvQkFDSCxJQUFJO29CQUNKLE9BQU8sRUFBRTt3QkFDUCxHQUFHLE9BQU87d0JBQ1YsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRO3FCQUNqQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO29CQUN2QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzdGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUE7Z0JBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNWLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQTtJQTlLRCxDQUFDO0lBU0QscUJBQXFCLENBQUMsR0FBVztRQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDMUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN2RixNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07WUFDdkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ25CLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7WUFDakMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQjtZQUMzQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDdEIsSUFDRSxPQUFPO3VCQUNKLE9BQU8sWUFBWSxXQUFXO3VCQUM5QixRQUFRLENBQUMsVUFBVTt1QkFDbkIsT0FBTyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsVUFBVTtvQkFFN0MsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMvRCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFtREQsdUJBQXVCLENBQUMsR0FBVztRQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRztZQUM1QixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQztZQUMzRixTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVM7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUEyQ0QsdUJBQXVCLENBQUMsR0FBVztRQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRztZQUM1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7WUFDOUIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1NBQ3RCLENBQUM7SUFDSixDQUFDOzhHQXJKVSwyQkFBMkI7a0hBQTNCLDJCQUEyQjs7MkZBQTNCLDJCQUEyQjtrQkFEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlY29yYXRpb24sIEVkaXRvclZpZXd9IGZyb20gXCJwcm9zZW1pcnJvci12aWV3XCI7XG5pbXBvcnQge05nUHJvc2VtaXJyb3JBZGFwdGVyUHJvdmlkZXJ9IGZyb20gXCIuL25nLXByb3NlbWlycm9yLWFkYXB0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBOZ0VkaXRvclZpZXdDb21wb25lbnQsIE5nTm9kZVZpZXdVc2VyT3B0aW9ucyxcbiAgTmdQbHVnaW5WaWV3VXNlck9wdGlvbnMsIE5nV2lkZ2V0VXNlck9wdGlvbnMsIE5vZGVWaWV3Q29udGV4dCwgTm9kZVZpZXdGYWN0b3J5LFxuICBQbHVnaW5WaWV3Q29udGV4dCxcbiAgUGx1Z2luVmlld0ZhY3RvcnksIFdpZGdldFZpZXdDb250ZXh0LCBXaWRnZXRWaWV3RmFjdG9yeVxufSBmcm9tIFwiLi9uZ1Byb3NlbWlycm9yQWRhcHRlci50eXBlXCI7XG5pbXBvcnQge0NvcmVOb2RlVmlldywgQ29yZVBsdWdpblZpZXcsIENvcmVXaWRnZXRWaWV3fSBmcm9tIFwiQHByb3NlbWlycm9yLWFkYXB0ZXIvY29yZVwiO1xuaW1wb3J0IHtuYW5vaWR9IGZyb20gXCJuYW5vaWRcIjtcbmltcG9ydCB7TmdQcm9zZW1pcnJvckVkaXRvcn0gZnJvbSBcIi4vY29tcG9uZW50cy9uZy1wcm9zZW1pcnJvci1lZGl0b3IuY29tcG9uZW50XCI7XG5pbXBvcnQge05nUHJvc2VtaXJyb3JXaWRnZXR9IGZyb20gXCIuL2NvbXBvbmVudHMvbmctcHJvc2VtaXJyb3Itd2lkZ2V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOZ1Byb3NlbWlycm9yUGx1Z2lufSBmcm9tIFwiLi9jb21wb25lbnRzL25nLXByb3NlbWlycm9yLXBsdWdpbi5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBlbGVtZW50IG9mIHRoZSBnaXZlbiBIVE1MRWxlbWVudC5cbiAqIElmIHRoZSBIVE1MRWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgZmlyc3QgY2hpbGQgZWxlbWVudCwgaXQgcmV0dXJucyB0aGUgSFRNTEVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIEhUTUxFbGVtZW50IHRvIGdldCB0aGUgZmlyc3QgY2hpbGQgZWxlbWVudCBmcm9tLlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgZmlyc3QgY2hpbGQgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gSFRNTEVsZW1lbnQsIG9yIHRoZSBIVE1MRWxlbWVudCBpdHNlbGYgaWYgaXQgZG9lcyBub3QgaGF2ZSBhIGZpcnN0IGNoaWxkIGVsZW1lbnQuXG4gKi9cbmNvbnN0IGZpcnN0RWxlbWVudENoaWxkID0gKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xuICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICByZXR1cm4gZWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmdQcm9zZW1pcnJvckFkYXB0ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3ZjZjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gIH1cblxuICBlZGl0b3I6IE5nUHJvc2VtaXJyb3JFZGl0b3I7XG5cbiAgcHJvdmlkZXI6IE5nUHJvc2VtaXJyb3JBZGFwdGVyUHJvdmlkZXI7XG5cbiAgbm9kZVZpZXc6IFJlY29yZDxzdHJpbmcsIENvcmVOb2RlVmlldzxOZ0VkaXRvclZpZXdDb21wb25lbnQ+PiA9IHt9O1xuICBub2RlVmlld0NvbnRleHQ6IFJlY29yZDxzdHJpbmcsIE5vZGVWaWV3Q29udGV4dD4gPSB7fTtcblxuICB1cGRhdGVOb2RlVmlld0NvbnRleHQoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlVmlldyA9IHRoaXMubm9kZVZpZXdba2V5XTtcbiAgICBpZiAoIW5vZGVWaWV3LnZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ub2RlVmlld0NvbnRleHRba2V5XSA9IHtcbiAgICAgIC4uLnRoaXMubm9kZVZpZXdDb250ZXh0W2tleV0sXG4gICAgICB2aWV3OiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG5vZGVWaWV3LnZpZXcpKSwgbm9kZVZpZXcudmlldyksXG4gICAgICBnZXRQb3M6IG5vZGVWaWV3LmdldFBvcyxcbiAgICAgIG5vZGU6IG5vZGVWaWV3Lm5vZGUsXG4gICAgICBzZWxlY3RlZDogbm9kZVZpZXcuc2VsZWN0ZWQsXG4gICAgICBkZWNvcmF0aW9uczogbm9kZVZpZXcuZGVjb3JhdGlvbnMsXG4gICAgICBpbm5lckRlY29yYXRpb25zOiBub2RlVmlldy5pbm5lckRlY29yYXRpb25zLFxuICAgICAgY29udGVudFJlZjogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgICAmJiBub2RlVmlldy5jb250ZW50RE9NXG4gICAgICAgICAgJiYgZWxlbWVudC5maXJzdENoaWxkICE9PSBub2RlVmlldy5jb250ZW50RE9NXG4gICAgICAgIClcbiAgICAgICAgICBmaXJzdEVsZW1lbnRDaGlsZChlbGVtZW50KS5hcHBlbmRDaGlsZChub2RlVmlldy5jb250ZW50RE9NKVxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlTm9kZVZpZXc6IE5vZGVWaWV3RmFjdG9yeSA9IChvcHRpb25zOiBOZ05vZGVWaWV3VXNlck9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gKG5vZGUsIHZpZXcsIGdldFBvcywgZGVjb3JhdGlvbnMsIGlubmVyRGVjb3JhdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuX3ZjZi5jcmVhdGVDb21wb25lbnQob3B0aW9ucy5jb21wb25lbnQsIHtpbmplY3RvcjogdGhpcy5faW5qZWN0b3J9KTtcblxuICAgICAgY29uc3Qga2V5ID0gb3B0aW9ucy5rZXkgfHwgbmFub2lkKCk7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmlucHV0cyB8fCB7fSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbXBvbmVudFJlZi5zZXRJbnB1dChrZXksIG9wdGlvbnMuaW5wdXRzW2tleV0pXG4gICAgICB9KTtcblxuICAgICAgY29tcG9uZW50UmVmLnNldElucHV0KFwicHJvdmlkZXJcIiwgdGhpcy5wcm92aWRlcik7XG4gICAgICBjb21wb25lbnRSZWYuc2V0SW5wdXQoXCJrZXlcIiwga2V5KTtcbiAgICAgIHRoaXMubm9kZVZpZXdba2V5XSA9IG5ldyBDb3JlTm9kZVZpZXc8TmdFZGl0b3JWaWV3Q29tcG9uZW50Pih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIHZpZXcsXG4gICAgICAgIGdldFBvcyxcbiAgICAgICAgZGVjb3JhdGlvbnMsXG4gICAgICAgIGlubmVyRGVjb3JhdGlvbnMsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50UmVmLFxuICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLm9uVXBkYXRlPy4oKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTm9kZVZpZXdDb250ZXh0KGtleSk7XG4gICAgICAgICAgICB0aGlzLm5vZGVWaWV3Q29udGV4dFtrZXldLmNvbnRlbnRSZWYoY29tcG9uZW50UmVmLmluc3RhbmNlLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0Tm9kZTogKCkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy5zZWxlY3ROb2RlPy4oKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTm9kZVZpZXdDb250ZXh0KGtleSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNlbGVjdE5vZGU6ICgpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGVzZWxlY3ROb2RlPy4oKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTm9kZVZpZXdDb250ZXh0KGtleSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLmRlc3Ryb3k/LigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVOb2RlVmlld0NvbnRleHQoa2V5KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZpcnN0RWxlbWVudENoaWxkKHRoaXMubm9kZVZpZXdba2V5XS5kb20pLmFwcGVuZENoaWxkKGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMudXBkYXRlTm9kZVZpZXdDb250ZXh0KGtleSk7XG4gICAgICB0aGlzLm5vZGVWaWV3Q29udGV4dFtrZXldLmNvbnRlbnRSZWYoY29tcG9uZW50UmVmLmluc3RhbmNlLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHRoaXMubm9kZVZpZXdba2V5XTtcbiAgICB9O1xuICB9XG5cbiAgcGx1Z2luVmlldzogUmVjb3JkPHN0cmluZywgQ29yZVBsdWdpblZpZXc8TmdQcm9zZW1pcnJvclBsdWdpbj4+ID0ge307XG4gIHBsdWdpblZpZXdDb250ZXh0OiBSZWNvcmQ8c3RyaW5nLCBQbHVnaW5WaWV3Q29udGV4dD4gPSB7fTtcblxuICB1cGRhdGVQbHVnaW5WaWV3Q29udGV4dChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHBsdWdpblZpZXcgPSB0aGlzLnBsdWdpblZpZXdba2V5XTtcbiAgICBpZiAoIXBsdWdpblZpZXcudmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBsdWdpblZpZXdDb250ZXh0W2tleV0gPSB7XG4gICAgICB2aWV3OiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHBsdWdpblZpZXcudmlldykpLCBwbHVnaW5WaWV3LnZpZXcpLFxuICAgICAgcHJldlN0YXRlOiBwbHVnaW5WaWV3LnByZXZTdGF0ZSxcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlUGx1Z2luVmlldzogUGx1Z2luVmlld0ZhY3RvcnkgPSAob3B0aW9uczogTmdQbHVnaW5WaWV3VXNlck9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBrZXkgPSBvcHRpb25zLmtleSB8fCBuYW5vaWQoKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLl92Y2YuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMuY29tcG9uZW50LCB7aW5qZWN0b3I6IHRoaXMuX2luamVjdG9yfSk7XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLmlucHV0cyB8fCB7fSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuc2V0SW5wdXQoa2V5LCBvcHRpb25zLmlucHV0c1trZXldKVxuICAgIH0pO1xuXG4gICAgY29tcG9uZW50UmVmLnNldElucHV0KFwicHJvdmlkZXJcIiwgdGhpcy5wcm92aWRlcik7XG4gICAgY29tcG9uZW50UmVmLnNldElucHV0KCdrZXknLCBrZXkpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2Uub25QbHVnaW5SZWFkeS5zdWJzY3JpYmUoKHBsdWdpblZpZXc6IENvcmVQbHVnaW5WaWV3PE5nUHJvc2VtaXJyb3JQbHVnaW4+KSA9PiB7XG4gICAgICAgIHJlc29sdmUoKHZpZXc6IEVkaXRvclZpZXcpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpblZpZXdba2V5XSA9IHBsdWdpblZpZXcgfHwgbmV3IENvcmVQbHVnaW5WaWV3PE5nUHJvc2VtaXJyb3JQbHVnaW4+KHtcbiAgICAgICAgICAgIHZpZXcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50UmVmLmluc3RhbmNlLFxuICAgICAgICAgICAgICB1cGRhdGU6ICh2aWV3LCBwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVwZGF0ZT8uKHZpZXcsIHByZXZTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQbHVnaW5WaWV3Q29udGV4dChrZXkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kZXN0cm95Py4oKVxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luVmlld1trZXldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wbHVnaW5WaWV3W2tleV07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVQbHVnaW5WaWV3Q29udGV4dChrZXkpO1xuICAgICAgICAgIGZpcnN0RWxlbWVudENoaWxkKHRoaXMucHJvdmlkZXIuZWRpdG9yLmVsLm5hdGl2ZUVsZW1lbnQpLmFwcGVuZENoaWxkKGNvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wbHVnaW5WaWV3W2tleV07XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgd2lkZ2V0VmlldzogUmVjb3JkPHN0cmluZywgQ29yZVdpZGdldFZpZXc8TmdQcm9zZW1pcnJvcldpZGdldD4+ID0ge307XG4gIHdpZGdldFZpZXdDb250ZXh0OiBSZWNvcmQ8c3RyaW5nLCBXaWRnZXRWaWV3Q29udGV4dD4gPSB7fTtcblxuICB1cGRhdGVXaWRnZXRWaWV3Q29udGV4dChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHdpZGdldFZpZXcgPSB0aGlzLndpZGdldFZpZXdba2V5XTtcbiAgICBpZiAoIXdpZGdldFZpZXcuc3BlYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndpZGdldFZpZXdDb250ZXh0W2tleV0gPSB7XG4gICAgICAuLi50aGlzLndpZGdldFZpZXdDb250ZXh0W2tleV0sXG4gICAgICBzcGVjOiB3aWRnZXRWaWV3LnNwZWNcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlV2lkZ2V0VmlldzogV2lkZ2V0Vmlld0ZhY3RvcnkgPSAob3B0aW9uczogTmdXaWRnZXRVc2VyT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuX3ZjZi5jcmVhdGVDb21wb25lbnQob3B0aW9ucy5jb21wb25lbnQsIHtpbmplY3RvcjogdGhpcy5faW5qZWN0b3J9KTtcblxuICAgIGNvbnN0IGtleSA9IG9wdGlvbnMua2V5IHx8IG5hbm9pZCgpO1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuaW5wdXRzIHx8IHt9KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbXBvbmVudFJlZi5zZXRJbnB1dChrZXksIG9wdGlvbnMuaW5wdXRzW2tleV0pXG4gICAgfSk7XG5cbiAgICBjb21wb25lbnRSZWYuc2V0SW5wdXQoXCJwcm92aWRlclwiLCB0aGlzLnByb3ZpZGVyKTtcbiAgICBjb21wb25lbnRSZWYuc2V0SW5wdXQoXCJrZXlcIiwga2V5KTtcblxuICAgIHJldHVybiAocG9zLCBzcGVjKSA9PiB7XG4gICAgICB0aGlzLndpZGdldFZpZXdba2V5XSA9IG5ldyBDb3JlV2lkZ2V0VmlldzxOZ1Byb3NlbWlycm9yV2lkZ2V0Pih7XG4gICAgICAgIHBvcyxcbiAgICAgICAgc3BlYyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnRSZWYuaW5zdGFuY2VcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBEZWNvcmF0aW9uLndpZGdldChwb3MsICh2aWV3LCBnZXRQb3MpID0+IHtcbiAgICAgICAgdGhpcy53aWRnZXRWaWV3W2tleV0uYmluZCh2aWV3LCBnZXRQb3MpXG4gICAgICAgIHRoaXMudXBkYXRlV2lkZ2V0Vmlld0NvbnRleHQoa2V5KTtcbiAgICAgICAgZmlyc3RFbGVtZW50Q2hpbGQodGhpcy53aWRnZXRWaWV3W2tleV0uZG9tKS5hcHBlbmRDaGlsZChjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldFZpZXdba2V5XS5kb21cbiAgICAgIH0sIHNwZWMpXG4gICAgfVxuICB9XG59XG5cbiJdfQ==