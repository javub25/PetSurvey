const addPageToPopup = (page) => 
{
    const popUpPage = getCurrentPopupPage();

    popUpPage.appendChild(page);
}

const getCurrentPopupPage = () => 
{
    return document.querySelector(".pages");
}

export 
{
    addPageToPopup    
}
