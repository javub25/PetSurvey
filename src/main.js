import './style.css'
import { Survey } from '@/pages/Survey/Survey.js'
import { closePopup } from '@/utils/PopUpActions.js';

document.addEventListener("DOMContentLoaded", () => 
{
    Survey();
    closePopup();
})