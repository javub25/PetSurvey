import { SUBMIT_BUTTON_STATES } from "@/data/SubmitButtonStates.js";

const enableSubmitButton = () => 
{
    const button = getSubmitButton();

    setButtonDisabled(button, false);
    applyButtonStyles(button, true);
}


const disableSubmitButton = () =>
{
     const button = getSubmitButton();

    setButtonDisabled(button, true);
    applyButtonStyles(button, false);
}

const setButtonDisabled = (button, isDisabled) => 
{
    button.disabled = isDisabled;
}


const applyButtonStyles = (button, isEnabled) => 
{
    const {oldState, newState} = getButtonStates(isEnabled);

    button.classList.replace(oldState.BG_COLOR, newState.BG_COLOR);
    button.classList.replace(oldState.CURSOR, newState.CURSOR);
}

const getButtonStates = (isEnabled) => 
{
    const {ENABLED, DISABLED} = SUBMIT_BUTTON_STATES;

    const oldState = isEnabled ? DISABLED : ENABLED;

    const newState = isEnabled ? ENABLED : DISABLED;

    return { 
        
        oldState,
        newState
    }
}

const getSubmitButton = () => 
{
    return document.querySelector('.form-button');
}


export 
{
    enableSubmitButton,
    disableSubmitButton
};