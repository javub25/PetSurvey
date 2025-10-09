import { 
    addPageToPopup,
    removePageFromPopup
    
} from "@/utils/PopUpActions.js"

export const navigateToNextPage = (ConfirmationPage) => 
{
    removePageFromPopup();

    addPageToPopup(ConfirmationPage);
}