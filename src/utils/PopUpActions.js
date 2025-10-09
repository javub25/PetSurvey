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


export 
{
    addPageToPopup,
    removePageFromPopup
}
