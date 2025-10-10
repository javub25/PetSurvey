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

        submitSurvey();

        const {ConfirmationPage} = Confirmation();

        navigateToNextPage(ConfirmationPage);

    });
}

const getSurvey = () => 
{
    return document.querySelector("form");
}

const submitSurvey = () => 
{
    const {surveyValues} = getValuesFromSurvey();

    sendSurveyToBraze(surveyValues);
}

const sendSurveyToBraze = (surveyValues) => 
{
    const {personalized_experiences} = surveyValues;

    const eventName = "Purina_UnitedKingdom_SurveyHomepage_UK";

    try
    {
        brazeBridge.logCustomEvent(eventName, 
            {    
                personalized_experiences_homepage: personalized_experiences 
            }
        );
    }

    catch(error)
    {
        console.error("Error sending survey data", error);
    }
}

const getValuesFromSurvey = () => 
{
    const survey = getSurvey();

    const fields = new FormData(survey);

    const surveyValues = 
    {
        personalized_experiences: getAllPersonalizedExperiences(fields)
    }

    return {
        surveyValues
    }
}

const getAllPersonalizedExperiences = (surveyValues) =>
{
    return surveyValues.getAll('personalized_experiences');
}

export 
{
    toggleSubmitOnCheckbox,
    handleSurveySubmit,
    getSurvey
};