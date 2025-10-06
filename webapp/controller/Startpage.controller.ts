import Controller from "sap/ui/core/mvc/Controller";
import { IProcessFlowNode, IUserReview } from "./interface";
import NumberFormat from "sap/ui/core/format/NumberFormat";
import formatMessage from "sap/base/strings/formatMessage";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class Startpage extends Controller {
  public onInit(): void | undefined {
    let sDataPath =
      sap.ui.require.toUrl("sap/icecream/model/data") + "/News.json";
    var oModel = new JSONModel(sDataPath);
    console.log(oModel);
    this.getView()?.setModel(oModel, "news");
  }
  public getProgress(aNodes: IProcessFlowNode[]): string {
    if (!aNodes || aNodes.length === 0) {
      return "0";
    }
    var iSum = 0;
    for (var i = 0; i < aNodes.length; i++) {
      if (aNodes[i].state === "Positive") {
        iSum += 1;
      }
    }
    var fPercent = (iSum / aNodes.length) * 100;
    return fPercent.toFixed(0);
  }
  public getEntityCount(userReviews: IUserReview[]): string {
    if (!userReviews || userReviews.length === 0) {
      return "0";
    }
    return userReviews.length.toString();
  }
  public formatNumber(value: string | number): string {
    let oFloatNum = NumberFormat.getFloatInstance({
      style: "short",
      decimals: 1,
    });
    return oFloatNum.format(value);
  }
  public formatMessage = formatMessage;

  public formatJSONDate(date: string): string {
    let oDate = new Date(Date.parse(date));
    return oDate.toLocaleDateString();
  }
}
