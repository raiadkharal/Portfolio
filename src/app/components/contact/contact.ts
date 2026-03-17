import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  isSubmitting = false;
  isSubmitted = false;

  async onSubmit(event: Event, name: string, email: string, message: string) {
    event.preventDefault();
    if (!name || !email || !message) return;

    this.isSubmitting = true;

    // We will use Web3Forms API for sending emails without a backend.
    // Replace 'YOUR_ACCESS_KEY_HERE' with a free access key from https://web3forms.com
    const accessKey = 'ea370b27-d0c7-421e-894e-150ce2a315e5';

    try {
      // For demonstration, since we don't have an active key, we simulate the network request.
      // If you add your key, you can uncomment the fetch request below.
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay


      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message
        })
      });


      this.isSubmitting = false;
      this.isSubmitted = true;
    } catch (error) {
      console.error(error);
      this.isSubmitting = false;
      alert('There was an error sending your message. Please try again.');
    }
  }

  resetForm() {
    this.isSubmitted = false;
  }
}
