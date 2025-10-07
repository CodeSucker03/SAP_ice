import Controller from "sap/ui/core/mvc/Controller";
import formatMessage from "sap/base/strings/formatMessage";
import UIComponent from "sap/ui/core/UIComponent";
export default class ChartContainerController extends Controller {
  public onInit(): void | undefined {}
  public formatMessage = formatMessage;

  public onNavButtonPressed(): void {
    let oRouter = (this.getOwnerComponent() as UIComponent).getRouter();
    oRouter.navTo("home");
  }
}
