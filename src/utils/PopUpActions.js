const addPageToPopup = (page) => 
{
    const popUpPage = getCurrentPopupPage();
    
    popUpPage.appendChild(page);
}


const removePageFromPopup = () => 
{
    const popUpPage = getCurrentPopupPage();

    const {lastPage} = getLastPage(popUpPage);

    popUpPage.removeChild(lastPage);
}

const getLastPage = (popUpPage) => 
{   
    const lastPage = popUpPage.lastElementChild;
    
    return {lastPage}
}


const getCurrentPopupPage = () => 
{
    return document.querySelector(".pages");
}

const closePopup = (stepPage = document) => 
{
    const button = getButtonToClosePopup(stepPage);

    button.addEventListener("click", () => 
    {
        brazeBridge.closeMessage();
    })
}

const getButtonToClosePopup = (stepPage) =>
{
    return stepPage.querySelector("[aria-label='Close popup']");
}

export 
{
    addPageToPopup,
    removePageFromPopup,
    closePopup
}
