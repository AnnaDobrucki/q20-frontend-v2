# 20 Sided Queer

![Home Page View](/documentation/README_images/responsiveHomePage.png)

- You can find the link to the live site [here](https://q20-front-end-69f73c8caa66.herokuapp.com/)
- You can find the link to the Front-End GitHub Repo [here](https://github.com/AnnaDobrucki/q20-frontend-v2)
- You can find the link to the Back-End API [here](https://github.com/AnnaDobrucki/PP5-Q20-API)

20 Sided Queer has been created to allow like minded queer's who enjoy ttrpg games (mostly DnD), to come together and post content, create events and share their love of all things happening within the TTRPG world right now!


## CONTENTS

* [Introduction](#20-sided-queer)

* [Features](#features)

* [Sections and Pages](#sections-and-pages)
    *  [Header](#header)
    *  [Sign Up](#sign-up)
    *  [Make a Post](#make-a-post)
    *  [Profiles](#profiles)
    *  [DnD Time!](#dnd-time)
    *  [Replies](#replies)
    *  [Initiative](#initiative)

* [User Experience](#user-experience)
    *  [User Stories](#user-stories)
* [Design](#design)
    *  [Colour Palette](#colour-palette)
    *  [Typography](#typeography)
    *  [Wireframes](#wireframes)
* [Future Ideas](#future-ideas)
* [Technologies Used](#technologies-used)   
    *  [Languages Used](#languages-Used)
    *  [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## Features 

### Goals for My DND Project

1. **Build a Cool Community**: I wanted to create a space where nerds who love TTRPGs, especially DND, could hang out, chat, and share their adventures.

2. **Make Events/Tasks**: The plan was to let users organize game sessions or have tasks to prod events, meetups, and all sorts of TTRPG-related hangouts. 

3. **Share Epic Tales**: Users could post stories and hilarious moments from their gaming sessions. (On somewhere that isn't facebook!).

4. **Track Initiative Counter**: (Though this eveolved later) I figured every good Dungeon Master needs an initiative tracker, so I added one, to fufil the two forms needed in the project. And fufil the need in myself for a tracker...

### *User Experience Accomplished*

### Event Creation and Management
Easily create and manage D&D events with an intuitive event management system. Plan your adventures, set locations, dates, and invite othr users to come and play! With CRUD (Create, Read, Update, Delete) functionality, users have full control over events, and ensuring smooth organization and collaboration.

### Collaborative Posts
Users can share D&D experiences, tips, and stories through interactive posts.Signed up users  can engage with the community by sharing insights, asking questions, or recounting epic battles with the comments section.

### Initiative Counter
Keep track of initiative orders during your D&D sessions with our built-in initiative counter. Quickly add and update initiative values for players and non-player characters, ensuring smooth combat encounters and enhancing immersion during gameplay.

### User-Friendly Interface
Q20 features a user-friendly interface designed to provide a seamless browsing experience. Accessible navigation, intuitive icons, and responsive design ensure that users can easily explore and interact with the platform across devices.

### *Admin Experience*

In my API, I've included the option for admins to create superuser accounts, providing them with special privileges to manage the backend of the site. This gives admins the flexibility to moderate and oversee different aspects of the platform as needed. 

## Sections and Pages

To start the project I revisited the CI walkthrough for moments, as I was quite overwhelmed with a blank slate and decided to start there and progress outward. 
After laying the foundations of the site I made sure to re create a new Entity Relationship Diagram. I wanted to incorporate some of the key aspects I needed when building my API and what types of functionaility I wanted in my front end.

![Entity Diagram](/documentation/README_images/Entity%20Relationship%20Diagram.png)



### **Header** 
* There are two versions of headers within the site, one for signed in users, and one for signed out. This allows users to more functionality within the site.

<details>
<summary>Header Signed In </summary>

![Header](/documentation/README_images/SignInHeader.png)
</details>
<details>
<summary>Header Signed Out </summary>

![Header-Out](/documentation/README_images/SignOutHeader.png)
</details>

#### **Sign up**

<details>
<summary>Register </summary>

![Register](/documentation/README_images/SignUpPage.png)
</details>


### **Make A Post**
* Users are asked to fillout Titles and Content with an image attachment.
<details>
<summary>Make a Post </summary>

![Post Page](/documentation/README_images/MakeAPost.png)
</details>

### Delete Post / Edit Post 
*  As part of good CRUD functionality our users are able to both delete and edit posts, they are given a dropdown icon to select which option they prefer. In the edit section the page is prepopulated with the same values as originally placed. 

<details>
<summary>Edit/Delete Post </summary>

![ Deleted ](/documentation/README_images/Edit/DeletePost.png)
![ Edit](/documentation/README_images/Edit/EDitPage.png)

</details>

### DnD Time!
* Here users are able to see upcoming events based upon who recently made one, they can also click the replies button to show that they'd like to attend and hopefully drum up support around the event. They can also click to not attend the event. Within this page they are also invited to create there own should they fancy!
* For users who might have forgotten they made a crackin event, there's also the "You can't attend" functionality, so they dont accidently double book themselves.
<details>
<summary>DND TIME! </summary>

![ DND Time Home  ](/documentation/README_images/DnDTimeHome.png)
![ DND Time Attend  ](/documentation/README_images/Can'tAttendEvent.png)

</details>

#### Create Event 
* Here our users are asked for information to create there own event! However there are certain fields that have promt messeages to make sure users give the bare minimum of info to eager beaver players.eg Image/Game Name/Location...
<details>
<summary>Create Event </summary>

![ Event ](/documentation/README_images/CreateEvent.png)
![ EventPrompt  ](/documentation/README_images/CreatEventPromnt.png)

</details>

#### Replies

<details>

* I wanted to give some more user functionaility and interactivity within the page, so created the ability to reply to built events. 
<summary>Replies </summary>

![ Replies ](/documentation/README_images/Replies.png)
</details>

### Profiles
* Our users are able to keep track of who they're following, and being followed by. At the same time they can choose to edit there password/ username/ or there own Bio!
<details>
<summary>Profile </summary>

![ Profile ](/documentation/README_images/ProfilePage.png)
</details>

### Initiative
* As part of making two original forms for our users to be able to play with I wanted to make something quick and easy to use, especially something all DND Dungeon Masters long for. An initiative counter! A place to keep track of everyones characters and those pesky enemies, it can be a lot to navigate, so why not have it on this site, and ready to come back too later if you need it !
<details>
<summary>Initiative </summary>

![ Initiative ](/documentation/README_images/InitiativePage.png)
</details>
 
 
### *Admin Users*

- To allow super users the ability to have easy access to the admin side. Allowing for a responsive website that allows them to shape there website, blog and bookings as they see fit.

### *User Stories*

* In my CI course, I've embraced agile methods and tools to keep my project on track. Initially, I had a clear vision for tasks, but as development progressed, new ideas bubbled up.

* After tackling posts and followers, I realized the chaos of organizing DND sessions. Cue the task/event app! Inspired by my struggles to wrangle players, it became a game-changer. Then, fueled by a home game with friends, the initiative counter was born.

* User Stories are a great sounding board for ideas and can help you keep on track with ideas you have, and can come back too. However I believe I didn't use this resorce intialy as much as I could have, and would like to intergrate it more in future repos.


<details>

<summary>User Stories Git Hub</summary>

![Git Stories](/documentation/README_images/UserStories.png)

* Closing the issues before final deployment after last checks.

![Git Closing](/documentation/README_images/ClosingIssues.png)

* I created a milestone that the eslint would make sure to have no erros going through my code.
![Git Milestones](/documentation/README_images/MilestoneClosed.png)

</details>


## **Design**

### *Colour Palette*
  I used [My Colour Space](https://mycolor.space/?hex=%23EB7425&sub=1) to help find the best to match and compliment the scheme. 

![Color Palette](/documentation/README_images/colourpalette.png)

### *Typeography*

In my project, I've employed the "Varela Round" and a sans-serif font for a clean and modern aesthetic. These fonts, provided by [Google Fonts](https://fonts.google.com/), giving a rounded yet straightforward appearance. Something that plays well for all generations and feels warm and inviting when reading it. 


### *Wireframes*
I created some basic wireframes using [Balsamique](https://balsamiq.com/), to help me build a sleek yet intuative layout for my custom pages.
![Wireframe 1](/documentation/README_images/WireframeDNDEVENT.png)
![Wireframe 2](/documentation/README_images/WireframeInitiative.png)



[Back to top](#20-sided-queer)

## Future Ideas

After building the app, there were a couple of ideas that in the future I would like to implement. 
* The ability for other users to be able to co-create events, adding one of more people to edit and delete events. In acse it was a company making an event, rather than sharing a log in.
* In the Initiative page I would like to be able to add conditions to the row, to remind GM's any effects happening to certrain characters. Eg Bane. So i would like to have potentially a third column for "effects" that would be a drop down field.
* Potentially linking up to some ecommerce and selling tickets for the "event".
* Making it more into a DnD creation site like DnD Beyond see [here](https://www.dndbeyond.com/)

## Technologies used

* React:  JavaScript library for user interfaces
* Node: install dependencies
* Heroku: for hosting the application
* GitHub: repository to store docs and code
* Cloudinary: cloud-based media management platform
* Font Awesome: for icons
* Google Fonts: for font families

### Languages Used
- HTML5
- CSS3
- Javascript
- Python
- React
- JSX

### Frameworks, Libraries and Programs Used
- [GitHub](https://github.com) - For version control using Git. 
- [Gitpod](https://gitpod.io/workspaces) - For my workspace setting up my development environment.
- [Fontawesome](https://fontawesome.com/) For embedding icons within my project.
- [Chrome Dev Tools](https://www.google.com/intl/en_ie/chrome/) - Allowing me to debug and tinker with my site.
- [Favicon.io](https://favicon.io/) - Create browser icon.
- [Django](https://docs.djangoproject.com/) - Using a lot of there documentation through-out. - Used in the backend allowing for databse management.
- [Cloudinary](https://cloudinary.com/) - My image management cloud platform.
- [Bootstrap](https://getbootstrap.com/docs/) - Allowing for easy to use templates (creating forms predominatly).
- [Heroku](https://id.heroku.com/) - The place where I deploy and host my site.


## Testing

  ### All notes related to testing are found [here](documentation/testing.md).

[Back to top](#20-sided-queer)

## Deployment
* Go to the Heroku Dashboard. Create new apllication
* In the 'Settings' tab of your app select 'Reveal Config Vars'.
* Make sure Postgres Database is attached.
* Create/ Add 'SECRET_KEY' connecting to your django environment.
* Create/ Add 'DATABASE_URL' connecting to your postgreSQL database.
* Create/ Add 'ClOUDINARY_URL' connecting to cloudinary's cloud hosting service for media.
* *Remember to change DEBUG to False in settings.py when ready to deploy live versions.*
* Move to deployment tab above.
* Link repository from GitHub to Heroku.
* Go to deploy page, select auto deployment.
* Note: Deploy Main Branch, choosing either from "Automatic Deploys" or "Deploy Branch".
* Wait until launching is complete.
* Click Open App.

## Credits

Through-out this project I was inspired and helped by a number of sources, in order to make custom code:

1) The CI Walkthrough for moments was a big influence and starting point for myself, I used and changed multiple factions of this code to help create my custom forms. One website that helped me with this was [Diff Checker](https://www.diffchecker.com/text-compare/) for understanding the breakdown of different pages.

2) Using [VectorStock](https://www.vectorstock.com/royalty-free-vector/no-results-found-rgb-color-icon-vector-33390323) helped me find the error page icon I use through-out.

3) [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) spesifically here to help me re learn a try/ catch/ final block (for the try/catch state in my iniative useEffect block). However through-out the project I regularly used this site for a quick reminder/ inspiration for fixing code.

4) [medium](https://medium.com/@mariokandut/react-hooks-loading-indicator-and-error-handling-1a33f4e31db5), to assist with my isLoading setLoading state also in my iniative counter, as it continued to reload all my data in a loop before hand!

* I'd also like to credit thanks to all the tutors that helped guide me through-out at Code Institue.

[Back to top](#20-sided-queer)