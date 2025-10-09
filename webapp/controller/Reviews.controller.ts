import { Switch$ChangeEvent } from "sap/m/Switch";
import Timeline from "sap/suite/ui/commons/Timeline";
import DateFormat from "sap/ui/core/format/DateFormat";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

interface IUserReview {
  user: string;
  userPic: string;
  rating: number;
  quote: string;
  date: string;
  template: boolean;
}
interface UserReviews {
  UserReviews: IUserReview[];
}
export default class ReviewsController extends Controller {
  private oTimeline: Timeline;
  onInit(): void | undefined {
    this.oTimeline = this.getView()?.byId("timeline") as Timeline;
  }
  public addReview(): void {
    let oModel = this.getView()?.getModel("reviews") as JSONModel;
    let oData = oModel.getData() as UserReviews;
    let oTemplateEntry = oData.UserReviews[0];

    oTemplateEntry.template = false;
    oTemplateEntry.date = new Date().toJSON().slice(0, 10).toString();
    oModel.setData(oData);
  }
  public formatDateTime(date: string): string {
    let oDateInstace = DateFormat.getDateInstance();
    return oDateInstace.format(oDateInstace.parse(date));
  }
  public onNavButtonPressed(): void {
    let oRouter = (this.getOwnerComponent() as UIComponent).getRouter();
    oRouter.navTo("home");
  }
  public onHorizontalSwitchChange(event : Switch$ChangeEvent): void {
    if(event.getParameter("state")){
        this.oTimeline.setAxisOrientation("Horizontal");
    }else{
        this.oTimeline.setAxisOrientation("Vertical");
    }
  }
}
