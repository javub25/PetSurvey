import '@testing-library/jest-dom'
import { handleSubmitOnCheckboxSelect } from '@/utils/SurveyActions.js';

import { 
    mockForm, 
    getSubmitButton, 
    getFirstCheckboxItem,
    simulateOneClick,
    simulateTwoClicks

} from '@/pages/Survey/Survey.testUtils.js';


beforeEach(() => 
{
    mockForm();
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
         handleSubmitOnCheckboxSelect();

        const checkboxItem = getFirstCheckboxItem();

        simulateOneClick(checkboxItem);

        const {submitButton} = getSubmitButton();

        expect(submitButton).toBeEnabled();
    });

    test("it should be disabled once checkbox is unselected", () => 
    {
        handleSubmitOnCheckboxSelect();

        const checkboxItem = getFirstCheckboxItem();

        simulateTwoClicks(checkboxItem);

        const {submitButton} = getSubmitButton();

        expect(submitButton).toBeDisabled();

    });
})