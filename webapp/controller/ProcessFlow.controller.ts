import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import formatMessage from "sap/base/strings/formatMessage";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import MessageToast from "sap/m/MessageToast";
import { ProcessFlow$LabelPressEvent, ProcessFlow$NodePressEvent } from "sap/suite/ui/commons/ProcessFlow";
import ProcessFlowNode from "sap/suite/ui/commons/ProcessFlowNode";

export default class ProcessFlowController extends Controller {
  public onInit(): void | undefined {}
  public onNavButtonPressed(): void {
    (this.getOwnerComponent() as UIComponent).getRouter().navTo("home");
  }
  public getValuesDelta(fFirstValue: number, fSecondValue: number): number {
    return fSecondValue - fFirstValue;
  }
  public onNodePressed(oEvent : ProcessFlow$NodePressEvent ): void {
    console.log(oEvent.getParameters());
    let sItemTitle = (oEvent.getParameters() as ProcessFlowNode).getTitle();
    MessageToast.show(
      this.getResourceBundle().getText("processFlowNodeClickedMessage", [
        sItemTitle,
      ]) as string
    );
  }

  public getResourceBundle(): ResourceBundle {
    return (
      this.getOwnerComponent()?.getModel("i18n") as ResourceModel
    ).getResourceBundle() as ResourceBundle;
  }
  public formatMessage = formatMessage;
}
