

import UIComponent from "sap/ui/core/UIComponent";
import VersionInfo from "sap/ui/VersionInfo";

/**
 * @namespace sap.icecream
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json" 
    };
    init(): void {
        // call the init function of the parent
        super.init();
		console.log("Component init called");
          // create the views based on the url/hash
        this.getRouter().initialize();
    };

};
