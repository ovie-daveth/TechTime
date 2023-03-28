# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

In building this project I made use of tailwind css as my css framework to save time
Other depencies includes 

1. React icons
2. Swiper Js

## The Docker setUp

This is a simple React app that can be built and run using Docker.

### Prerequisites
Before you get started, you'll need to make sure you have the following installed on your machine:
Docker

### Building the App
To build the app, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory in your terminal.

3. Run the following command to build the Docker image:

        docker build -t tecttime .

This will build the Docker image and tag it as "techtime".

### Running the App

To run the app, follow these steps:

1. Run the following command to start a Docker container:

        docker run --name techtime_c -p 3000:3000 -d techtime
        
This will start a Docker container running the app and map port 3000 in the container to port 3000 on your local machine.

2. Open your web browser and navigate to http://localhost:3000. You should see the app running!

Stopping the App
To stop the app, simply press CTRL+C in your terminal to stop the Docker container.

### Conclusion
That's it! You've successfully built and run a React app using Docker. Feel free to modify the app and experiment with different Docker configurations to see how it affects the app's behavior.






## External Links

This is the link to the deployed site on netlify
https://dynamic-meerkat-610c40.netlify.app/

