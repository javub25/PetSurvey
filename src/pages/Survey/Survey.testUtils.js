import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

const mockPopupPageWithForm = () => 
{
    const form = getFormMockFromHTML();

    document.body.innerHTML = `<div class="pages">${form}</div>`;
}

const getFormMockFromHTML = () => 
{
    return `
        <form>
            <input type="checkbox" value="AI_SCANNING" id="AI_SCANNING" class="form__checkbox" /> 
            <label for="AI_SCANNING" class="Inter-Font">AI scanning</label>
            <button type="submit" disabled class="cursor-default form-button bg-[#7C7C7C]">
                Submit
            </button>
        </form>
    `
}

const getSubmitButton = () => 
{
    const submitButton = screen.getByRole("button", { name: "Submit" });

    return {submitButton};
}

const getFirstCheckboxItem = () => 
{
    return screen.getByRole("checkbox", { name: "AI scanning" });
}

const simulateOneClick = (checkBox) => 
{
    checkBox.click();
}

const simulateTwoClicks = (checkBox) => 
{
    userEvent.dblClick(checkBox);
}

export 
{ 
    getFormMockFromHTML,
    mockPopupPageWithForm, 
    getSubmitButton,
    getFirstCheckboxItem,
    simulateOneClick,
    simulateTwoClicks 
};