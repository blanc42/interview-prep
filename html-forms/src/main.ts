import './index.css';
import './style.css';
import { z } from 'zod';

// Define Zod schema for the form data
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(1, "Zip Code is required"),
  cardNumber: z.string().min(1, "Card Number is required"),
  expiryDate: z.string().min(1, "Expiry Date is required"),
  cvv: z.string().min(1, "CVV is required"),
});

function showStep(step: number) {
  const steps = document.querySelectorAll<HTMLElement>('.step');
  steps.forEach((stepElement, index) => {
    stepElement.style.display = (index + 1 === step) ? 'block' : 'none';
  });
}

function nextStep(step: number) {
  showStep(step);
}

function prevStep(step: number) {
  showStep(step);
}

document.addEventListener('DOMContentLoaded', () => {
  showStep(1); // Show the first step initially
});

function submitForm(e: SubmitEvent) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());

  console.log(data)
  // Validate form data using Zod schema
  // const result = formSchema.safeParse(data);
  // if (result.success) {
  //   console.log('Form submitted', result.data);
  // } else {
  //   console.error('Validation errors', result.error.errors);
  // }
}

let multistep_form = document.getElementById('multistep-form') as HTMLFormElement;
multistep_form.addEventListener('submit', submitForm);