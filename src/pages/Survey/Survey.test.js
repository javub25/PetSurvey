import '@testing-library/jest-dom'
import { screen } from '@testing-library/dom';

import 
{ 
    toggleSubmitOnCheckbox,
    handleSurveySubmit

} from '@/utils/SurveyActions.js';

import { 
    getFormMockFromHTML,
    mockPopupPageWithForm,
    getSubmitButton, 
    getFirstCheckboxItem,
    simulateOneClick,
    simulateTwoClicks

} from '@/pages/Survey/Survey.testUtils.js';

beforeEach(() => 
{
    document.body.innerHTML = getFormMockFromHTML();
})


describe("Submit Button test suite", () => 
{
    test("it should be disabled by default", () => 
    {
        const {submitButton} = getSubmitButton();

        expect(submitButton).toBeDisabled();
    });

    test("it should be enabled once checkbox is selected", () => 
    {
         toggleSubmitOnCheckbox();

        const checkboxItem = getFirstCheckboxItem();

        simulateOneClick(checkboxItem);

        const {submitButton} = getSubmitButton();

        expect(submitButton).toBeEnabled();
    });

    test("it should be disabled once checkbox is unselected", () => 
    {
        toggleSubmitOnCheckbox();

        const checkboxItem = getFirstCheckboxItem();

        simulateTwoClicks(checkboxItem);

        const {submitButton} = getSubmitButton();

        expect(submitButton).toBeDisabled();

    });
})

describe("Submit data test suite", () => 
{
    test("it should display confirmation message after submission", () => 
    {   
        mockPopupPageWithForm();

        toggleSubmitOnCheckbox();

        handleSurveySubmit();

        const checkboxItem = getFirstCheckboxItem();
        simulateOneClick(checkboxItem);

        const {submitButton} = getSubmitButton();
        simulateOneClick(submitButton);

        const confirmationMessage = screen.getByText("Your response has been received.");

        expect(confirmationMessage).toBeInTheDocument();
    });
})