# DinerExpress 🚀

##  Overview
is a food delivery platform that connects customers with a wide range of local restaurants, allowing them to order food for delivery to their desired location.

![Screenshot](https://github.com/Adedeji-Taiwo/Diner-Express/blob/main/assets/DinerExpress1.png)
![Screenshot](https://github.com/Adedeji-Taiwo/Diner-Express/blob/main/assets/DinerExpress2.png)

- Live link: https://expo.dev/@dhegyaino/React_Native_Jobs?serviceType=classic&distributioon=expo-go

**Note**: Expo app is required to open this app. You can download and install the Expo app from the App Store (iOS) or the Google Play Store (Android).


## Third Party Libraries used.

Below are the third party libraries used in this project:

| Feature  | Package | Benefits |
| ------------- | ------------- | ------------- |
| React Native  |  `react-native` | A Framework for building native mobile apps in React.  
| Typescript |  `typescript` | A superset of JavaScript that adds static type definitions. |
| Sanity |  `@sanity/client` | A content management system (CMS) for structured content. |
| Redux Toolkit |  `@reduxjs/toolkit` | A library that simplifies the management of state in Redux. |
| React Redux |  `react-redux` | A library that integrates Redux with React for state management. |
| NativeWind |  `native-wind` |A utility library for styling React Native components using Tailwind CSS. |
| React Currency Formatter |  `react-currency-formatter` |  A library for formatting currency values in React applications. |
| React Native Animatable |  `react-native-animatable` | A library for creating animations in React Native. |
| React Native Hero Icons |  `react-native-heroicons` | A collection of customizable icons for React Native apps. |
| React Native Progress |  `react-native-progress` | A library for displaying progress bars and spinners in React Native. |
| React Native Maps |  `react-native-maps` | A library for integrating maps into React Native applications. |

## Installing dependencies and running the app

- Click on the `Code` button on the right side of the page and copy the HTTPS link of the repository.
- Open your terminal and navigate to the directory where you want to clone the repository.
- Type git clone `<paste the copied HTTPS link here>` and press enter. This will clone the forked repository to your local machine.
- Open your terminal and navigate to the directory where you have cloned the repository.
- Type `npm install` and press `enter`. This will install all the dependencies required to run the app.
- Type `npm start` and press `enter`. This will start the Expo development server and open the app in your default browser.
- Once the server is running, a QR code will appear in the terminal and in the Expo Dev Tools page on your browser.
- Open the camera app on your mobile device and point it at the QR code. The app should now be running on your mobile device.


**Note on Sanity**: 
## Installation
- Install the Sanity CLI globally by running the following command: `npm install -g @sanity/cli`
- Create a new Sanity project by running the following command in your project directory: `sanity init`
- Follow the prompts to set up your project and choose a dataset provider.
- Install the @sanity/client package by running the following command: `npm install @sanity/client`
  
## Usage
- Open the Sanity Studio by running the following command in your project directory: `sanity start`
- Access the Sanity Studio in your browser at the provided URL.
- Define your content schema using the Sanity Studio. This will allow you to manage your content.
- In your app code, import the Sanity client and create an instance:
- import sanityClient from '@sanity/client';

        - const client = sanityClient({
          projectId: 'your-project-id',
          dataset: 'your-dataset',
          // other options if needed
        });

- Use the client instance to interact with your Sanity backend, such as fetching and mutating data. Refer to the Sanity documentation for more details.
- Import the urlFor function from @sanity/image-url to generate URLs for your media assets.
- Configure your Sanity project's access settings to allow requests from your app's domain.


  
 