import { 
    closePopup
} from "@/utils/PopUpActions.js";

export const Confirmation = () => 
{
    const ConfirmationPage = document.createElement('div');

    ConfirmationPage.innerHTML = `
        <header>
            <h1 class="Inter-Font text-2xl">Thank you!</h1>
        </header>

        <section>
            <p class="Inter-Font mt-4 mb-6">
                Your response has been received.
            </p>

            <button 
                type="button"
                data-button-id="Close"
                aria-label="Close popup" 
                class="form-button bg-[#E91C24] 
                rounded-md text-white py-2 w-[130px] ml-0 mt-8 block mx-auto Inter-Font cursor-pointer text-center">
                Close
            </button>
        </section>
    `;

    closePopup(ConfirmationPage);

    return {
        ConfirmationPage
    };
}