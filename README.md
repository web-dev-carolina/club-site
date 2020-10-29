# Web Dev Carolina's Website

This website aims to take advantage of the MEAN stack to showcase our organization's projects and community engagement. For styling, we are using bootstrap and our own custom CSS to create a personalized and interactive website.

## Installation
Use npm to install dependencies (make sure you do so in the club-site directory and the my-app directory). 
```bash
npm install
```
In the off chance that does not work, you may also try...
```bash
npm update
```
## Components
The website has been broken down into several major components that different group members have been assigned to develop. The app-root calls all of the following components at the moment:
	app-top-bar,
	app-home,
	app-announcement,
	app-about-us,
	app-testimonial,
	app-project, and
	app-contact-us
	
To run the app make sure you're in the club-site directory then enter the following command in the terminal.
```bash
nodemon server
```
Nodemon will automatically make the updates live when you save, so you don't have to restart your backend everytime you make a change.

Unlike the backend, if you make changes to the angular code you will have to re-build before your changes will be seen. To do so run this command in the my-app directory.
```bash
ng build
```
