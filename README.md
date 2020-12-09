# Web Dev Carolina's Website

This website aims to take advantage of the MEAN stack to showcase our organization's projects and community engagement. For styling, we are using bootstrap and our own custom CSS to create a personalized and interactive website.

## Initial setup
Use npm to install dependencies (make sure you do so in the public directory and the functions directory). 
```bash
npm install
```
In the off chance that does not work, you may also try...
```bash
npm update
```
You may also need the Angular CLI. You can install this by typing this command in the public directory.
```bash
npm install -g @angular/cli
```
## Components
The website has been broken down into several major components that different group members have been assigned to develop. The app-root calls all of the following components at the moment:  
	- app-top-bar  
	- app-home  
	- app-upcoming-announcement  
	- app-about-us  
	- app-testimonial  
	- app-project  
	- app-contact-us  
## Development Mode
To run the app make sure you're in the club-site directory then enter the following command in the terminal.
```bash
nodemon server
```
This will run your code on localhost:3000.
Nodemon will automatically make the updates (to the backend) live when you save, so you don't have to restart your backend everytime you make a change.

If nodemon is giving you a command not found error... Run this command in the club-site directory.
```bash
sudo npm install -g --force nodemon
```

To get the frontend running, type the following command in the my-app directory.
```bash
ng build --watch
```
This will build what you have currently in the angular code and watch for changes and display them if you refresh.  

## Production Mode
Run this command in the public directory to deploy the hosting.
```bash
firebase deploy
```
Run this command in the root directory to deploy the functions.
```bash
firebase deploy --only functions
```
Backend is deployed at the following url...
```bash
https://us-central1-home-c6ab1.cloudfunctions.net/app
```
Frontend is deploy at the following url...
```bash
https://webdevcarolina.com/
```
# Contributors

- Christian Nell (Project Lead)
- Addison West (Frontend Lead)  
- Rushil Shah
- Tatiana Kelliher 
- Advaith Deo
