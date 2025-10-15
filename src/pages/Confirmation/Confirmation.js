import { 
    closePopup
} from "@/utils/PopUpActions.js";

export const Confirmation = () => 
{
    const ConfirmationPage = document.createElement('div');

    ConfirmationPage.innerHTML = `
        <header>
            <h1 class="Inter-Font text-2xl mt-3 md:text-center">Thank you!</h1>
        </header>

        <section>
            <p class="Inter-Font mt-5 mb-7 text-base md:text-center">
                Your response has been received.
            </p>

            <button 
                type="button"
                data-button-id="Close"
                aria-label="Close popup" 
                class="form__close-button Inter-Font">
                Close
            </button>
        </section>
    `;

    closePopup(ConfirmationPage);

    return {
        ConfirmationPage
    };
}