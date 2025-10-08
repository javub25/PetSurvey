import {
    enableSubmitButton, 
    disableSubmitButton 
} from "@/utils/SubmitButton.js";

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

const handleSubmitOnCheckboxSelect = () => 
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

export 
{
    handleSubmitOnCheckboxSelect
};