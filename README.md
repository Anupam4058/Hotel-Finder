# Hotel Sorting Web App

This is a hotel sorting web app built with React and Tailwind CSS, featuring Google Maps integration.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Set up your Google Maps API key:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Enable the Google Maps JavaScript API for your project.
   - Create an API key in the Credentials section.
   - Copy your API key.
   - Create a `.env` file in the project root if it doesn't exist.
   - Add the following line to your `.env` file, replacing `YOUR_ACTUAL_API_KEY` with your copied API key:
     ```
     VITE_GOOGLE_MAPS_API_KEY=YOUR_ACTUAL_API_KEY
     ```
4. Enable billing for your Google Cloud project:
   - In the Google Cloud Console, go to the "Billing" section.
   - Link a billing account to your project.
   - This step is crucial for the Google Maps JavaScript API to work correctly.
5. Run `npm run dev` to start the development server.

**Important:** Never commit your `.env` file to version control to keep your API key secure.

## Features

- Location selection with autocomplete
- Hotel filtering based on various criteria
- Responsive grid layout for hotel display
- Map view for hotel locations
- Integration with Google Maps API

## Technologies Used

- React
- Tailwind CSS
- Vite
- Google Maps JavaScript API
- React Google Maps
- React Select

## Troubleshooting

If you encounter a "BillingNotEnabledMapError", make sure you've completed step 4 in the setup instructions to enable billing for your Google Cloud project.