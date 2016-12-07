/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './message.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './message.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
var renderType_MessageComponent_Host:import0.RenderComponentType = (null as any);
class _View_MessageComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MessageComponent_0_4:import3.MessageComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageComponent_Host0,renderType_MessageComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-message',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MessageComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MessageComponent_0_4 = new import3.MessageComponent(this.parentInjector.get(import8.MessageService));
    this._appEl_0.initComponent(this._MessageComponent_0_4,[],compView_0);
    compView_0.create(this._MessageComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MessageComponent) && (0 === requestNodeIndex))) { return this._MessageComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_MessageComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MessageComponent_Host === (null as any))) { (renderType_MessageComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_MessageComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MessageComponentNgFactory:import10.ComponentFactory<import3.MessageComponent> = new import10.ComponentFactory<import3.MessageComponent>('app-message',viewFactory_MessageComponent_Host0,import3.MessageComponent);
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%] {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n\n        .config[_ngcontent-%COMP%] {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%;\n        }'];
var renderType_MessageComponent:import0.RenderComponentType = (null as any);
class _View_MessageComponent0 extends import1.AppView<import3.MessageComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MessageComponent0,renderType_MessageComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'article',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','panel panel-default');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','panel-body');
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'footer',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','panel-footer');
    this._text_6 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','author');
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','config');
    this._text_11 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'a',(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Edit',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_10,'a',(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'Delete',(null as any));
    this._text_17 = this.renderer.createText(this._el_10,'\n        ',(null as any));
    this._text_18 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_15,'click',this.eventHandler(this._handle_click_15_0.bind(this)));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'\n        ',this.context.message.content,'\n    ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'\n            ',this.context.message.username,'\n        ');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_8,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onEdit()) !== false);
    return (true && pd_0);
  }
  private _handle_click_15_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onDelete()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MessageComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MessageComponent> {
  if ((renderType_MessageComponent === (null as any))) { (renderType_MessageComponent = viewUtils.createRenderComponentType('D:/MyPc/Users/Bill/Documents/Personal_Projects/Udemy/Udemy_MeanStack/01 Seed/assets/app/messages/message.component.html',0,import9.ViewEncapsulation.Emulated,styles_MessageComponent,{})); }
  return new _View_MessageComponent0(viewUtils,parentInjector,declarationEl);
}