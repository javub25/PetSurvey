export const Form = () => 
{
    const formComponent = document.createElement('div');

    formComponent.innerHTML = `<header>
            <h1 class="Inter-Font text-2xl mt-3">For Our Valued Pet Parents!</h1>
        </header>
    
        <section>
            <p class="Inter-Font mt-4 mb-6">
                We're enhancing our platform with a free profile. What personalised experiences would you most appreciate? 
                (Select all that apply)
            </p>
                
            <form method="POST">
                <div class="form__option">
                    <input type="checkbox" name="personalized_experiences" value="PET_DASHBOARD" id="PET_DASHBOARD" 
                        class="form__checkbox"/>
                        <label for="PET_DASHBOARD" class="Inter-Font">
                            A dashboard to save and manage my pet's info
                        </label>
                    </div>

                    <div class="form__option">
                        <input type="checkbox" name="personalized_experiences" value="AI_SCANNING" id="AI_SCANNING" 
                        class="form__checkbox"/>
                        <label for="AI_SCANNING" class="Inter-Font">
                            AI scanning
                        </label>
                    </div>

                    <div class="form__option">
                        <input type="checkbox" name="personalized_experiences" value="RECOMMENDED_ARTICLES" id="RECOMMENDED_ARTICLES" 
                        class="form__checkbox"/>
                        <label for="RECOMMENDED_ARTICLES" class="Inter-Font">
                            Recommended articles based on my pet's breed/age
                        </label>
                    </div>

                    <div class="form__option">
                        <input type="checkbox" name="personalized_experiences" value="VET_REMINDERS" id="VET_REMINDERS" 
                        class="form__checkbox"/>
                        <label for="VET_REMINDERS" class="Inter-Font">
                            Reminders for vet visits/vaccionations
                        </label>
                    </div>

                    <div class="form__option">
                        <input type="checkbox" name="personalized_experiences" value="SAMPLES_AND_PROMOTIONS" id="SAMPLES_AND_PROMOTIONS" 
                        class="form__checkbox"/>
                        <label for="SAMPLES_AND_PROMOTIONS" class="Inter-Font">
                            Samples and discounts
                        </label>
                    </div>

                    <div class="form__option">
                        <input type="checkbox" name="personalized_experiences" value="OFFERS_AND_PROMOTIONS" id="OFFERS_AND_PROMOTIONS" 
                        class="form__checkbox"/>
                        <label for="OFFERS_AND_PROMOTIONS" class="Inter-Font">
                            Tailored pet services and events
                        </label>
                    </div>

                    <button 
                        type="submit"
                        data-button-id="SurveySubmitted" 
                        disabled 
                            class="cursor-default form-button bg-[#7C7C7C] rounded-md text-white py-2 w-[130px] ml-0 mt-8 block mx-auto Inter-Font text-center">
                        Submit
                    </button>
                </form>
            </section>`

    return {formComponent};
}