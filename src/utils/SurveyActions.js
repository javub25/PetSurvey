import {
    enableSubmitButton, 
    disableSubmitButton 
} from "@/utils/SubmitButton.js";

import { 
    navigateToNextPage
} from "@/utils/Navigation.js";

import { 
    Confirmation 
} from "@/pages/Confirmation/Confirmation.js";


const getCheckBoxList = () => 
{
    return Array.from(document.querySelectorAll('.form__checkbox'));
}

const getCheckBoxState = (checkboxList) => 
{
    const isCheckBoxSelected = checkboxList.some(checkbox => 
    {
        if(checkbox.checked) 
        {
            return true;
        }
    })

    return {
        isCheckBoxSelected
    };
}

const toggleSubmitOnCheckbox = () => 
{
    const checkboxList = getCheckBoxList();
    
    checkboxList.forEach(checkbox => 
    {
        checkbox.addEventListener("change", () => 
        {
            updateSubmitBasedOnCheckboxes(checkboxList);
        })
    });
}

const updateSubmitBasedOnCheckboxes = (checkboxList) => 
{
    const {isCheckBoxSelected} = getCheckBoxState(checkboxList);

    if (isCheckBoxSelected) 
    {
        enableSubmitButton();
    }

    else 
    {
        disableSubmitButton();
    }
}


const handleSurveySubmit = () => 
{   
    const survey = getSurvey();

    survey.addEventListener("submit", (submitEvent) => 
    {
        submitEvent.preventDefault();

        const {ConfirmationPage} = Confirmation();

        navigateToNextPage(ConfirmationPage)
    });
}

const getSurvey = () => 
{
    return document.querySelector("form");
}


export 
{
    toggleSubmitOnCheckbox,
    handleSurveySubmit,
    getSurvey
};