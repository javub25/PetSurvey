
import 
{ 
    handleSubmitOnCheckboxSelect
} from "@/utils/SurveyActions.js";

import 
{
    addPageToPopup
      
} from "@/utils/PopUpActions.js";

import {Form} from "@/components/Form.js"


export const Survey = () => 
{
    const {formComponent} = Form();
    
    addPageToPopup(formComponent);

    handleSubmitOnCheckboxSelect();
}