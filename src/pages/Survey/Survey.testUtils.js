import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

const mockForm = () => 
{
    document.body.innerHTML =
    `<form>
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
    mockForm, 
    getSubmitButton,
    getFirstCheckboxItem,
    simulateOneClick,
    simulateTwoClicks 
};