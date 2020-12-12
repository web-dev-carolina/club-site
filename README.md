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
```bash
├── landing
│   ├── landing.component.html
│   ├── landing.component.ts
│   ├── landing.module.ts
│   ├── login
│   │   ├── login.component.css
│   │   ├── login.component.html
│   │   ├── login.component.ts
│   │   └── login.module.ts
│   ├── single-page
│   │   ├── about-us
│   │   │   ├── about-us.component.css
│   │   │   ├── about-us.component.html
│   │   │   ├── about-us.component.ts
│   │   │   └── about-us.module.ts
│   │   ├── contact-us
│   │   │   ├── contact-us.component.css
│   │   │   ├── contact-us.component.html
│   │   │   ├── contact-us.component.ts
│   │   │   └── contact-us.module.ts
│   │   ├── footer
│   │   │   ├── footer.component.css
│   │   │   ├── footer.component.html
│   │   │   ├── footer.component.ts
│   │   │   └── footer.module.ts
│   │   ├── home
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
│   │   ├── project
│   │   │   ├── images
│   │   │   │   ├── proj1.png
│   │   │   │   ├── proj2.png
│   │   │   │   ├── proj3.png
│   │   │   │   ├── proj4.png
│   │   │   │   ├── proj5.png
│   │   │   │   └── proj6.png
│   │   │   ├── project.component.css
│   │   │   ├── project.component.html
│   │   │   ├── project.component.ts
│   │   │   └── project.module.ts
│   │   ├── single-p.component.html
│   │   ├── single-p.component.ts
│   │   ├── single-p.module.ts
│   │   ├── testimonial
│   │   │   ├── testimonial.component.css
│   │   │   ├── testimonial.component.html
│   │   │   ├── testimonial.component.ts
│   │   │   └── testimonial.module.ts
│   │   └── upcoming-announcement
│   │       ├── announcement
│   │       │   ├── announcement.component.css
│   │       │   ├── announcement.component.html
│   │       │   ├── announcement.component.ts
│   │       │   └── announcement.module.ts
│   │       ├── upcoming-announcement.component.css
│   │       ├── upcoming-announcement.component.html
│   │       ├── upcoming-announcement.component.spec.ts
│   │       ├── upcoming-announcement.component.ts
│   │       └── upcoming-event
│   │           ├── upcoming-event.component.css
│   │           ├── upcoming-event.component.html
│   │           ├── upcoming-event.component.ts
│   │           └── upcoming-event.module.ts
│   └── top-bar
│       ├── top-bar.component.css
│       ├── top-bar.component.html
│       ├── top-bar.component.ts
│       └── top-bar.module.ts
└── logged-in
    ├── admin
    │   ├── admin.component.css
    │   ├── admin.component.html
    │   ├── admin.component.ts
    │   ├── admin.module.ts
    │   ├── create
    │   │   ├── create.component.css
    │   │   ├── create.component.html
    │   │   ├── create.component.ts
    │   │   └── create.module.ts
    │   ├── home-logged
    │   │   ├── home-logged.component.css
    │   │   ├── home-logged.component.html
    │   │   ├── home-logged.component.ts
    │   │   └── home-logged.module.ts
    │   ├── inquiries
    │   │   ├── inquiries.component.css
    │   │   ├── inquiries.component.html
    │   │   ├── inquiries.component.ts
    │   │   └── inquiries.module.ts
    │   ├── members
    │   │   ├── members.component.css
    │   │   ├── members.component.html
    │   │   ├── members.component.ts
    │   │   └── members.module.ts
    │   ├── projects-logged
    │   │   ├── projects-logged.component.css
    │   │   ├── projects-logged.component.html
    │   │   ├── projects-logged.component.ts
    │   │   └── projects-logged.module.ts
    │   └── top-bar-logged-in
    │       ├── top-bar-logged-in.component.css
    │       ├── top-bar-logged-in.component.html
    │       ├── top-bar-logged-in.component.ts
    │       └── top-bar-logged-in.module.ts
    ├── logged-in-module.ts
    ├── logged-in.component.html
    └── logged-in.component.ts
```
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

The deployed version is contained on the 'Firebase' branch to ensure we always have a stable version of the code.
# Contributors

- Christian Nell (Project Lead)
- Addison West (Frontend Lead)  
- Rushil Shah (Treasurer)
- Tatiana Kelliher 
- Advaith Deo
