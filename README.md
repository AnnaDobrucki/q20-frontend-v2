# 20 Sided Queer

![Home Page View](/documentation/README_images/responsiveHomePage.png)

- You can find the link to the live site [here](/)
- You can find the link to the Front-End GitHub Repo [here](https://github.com/AnnaDobrucki/q20-frontend-v2)
- You can find the link to the Back-End API [here](https://github.com/AnnaDobrucki/PP5-Q20-API)

20 Sided Queer has been created to allow like minded queer's who enjoy ttrpg games (mostly DnD), to come together and post content, create events and share their love of all things happening within the TTRPG world right now!


## CONTENTS

* [Introduction](#20-sided-queer)


* [Sections and Pages](#sections-and-pages)
    *  [Header](#header)
    *  [Sign Up](#sign-up)
    *  [Login Page](#login-in)
    *  [Make a Post](#make-a-post)
    *  [Profiles](#profiles)
    *  [DnD Time!](#dnd-time)
    *  [Reply](#reply)
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


## Sections and Pages

To start the project I revisited the CI walkthrough for moments, as I was quite overwhelmed with a blank slate and decided to start there and progress outward. 
After laying the foundations of the site I made sure to re create a new Entity Relationship Diagram. I wanted to incorporate some of the key aspects I needed when building my API and what types of functionaility I wanted in my front end.

![Entity Diagram](/documentation/README_images/Entity%20Relationship%20Diagram.png)




### **Header** 
There are two versions of headers within the site, one for signed in users, and one for signed out. 

<details>
<summary>Header Signed In ></summary>

![Header](/)
</details>
<details>
<summary>Header Signed Out ></summary>

![Header-Out]()
</details>

### **Sign up**

<details>
<summary>Register ></summary>

![Register](/)
</details>


### **Login In**

Here our pre registered users can sign into thre accounts:
<details>
<summary>Sign In ></summary>

![Login](/)
</details>


### **Make A Post**
*
<details>
<summary>Make a Post ></summary>

![](/)
</details>

#### Delete Post
*  

<details>
<summary>DnD Time! ></summary>

![ Deleted ]()
</details>
<details>
<summary>Replies ></summary>

![ Deleted ]()
</details>
<details>
<summary>Initiative ></summary>

![ Deleted ]()
</details>

### **Edit Post**
* As part of good CRUD functionality, our user can edit a post. Editing any and all original choices, with the original  values kept for the user to see and confirm.

## **User Experience**

* Content 
 
### *Admin Users*

- To allow super users the ability to have easy access to the admin side. Allowing for a responsive website that allows them to shape there website, blog and bookings as they see fit.

### *User Stories*

Using the GitHub I used the agile methods and tools to allow myself to create and keep track of the User Stories I set out for myself in the beginning. 
<details>

<summary>User Stories Git Hub ></summary>

</details>


## **Design**

### *Colour Palette*
  I used [My Colour Space](https://mycolor.space/?hex=%23EB7425&sub=1) to help find the best to match and compliment the scheme.

![Color Palette](/)

### *Typeography*

### *Wireframes*


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
- [GitHub](https://github.com)
- [Gitpod](https://gitpod.io/workspaces)
- [Fontawesome](https://fontawesome.com/)
- [Chrome Dev Tools](https://www.google.com/intl/en_ie/chrome/)
- [Favicon.io](https://favicon.io/)
- [Django](https://docs.djangoproject.com/) - Using a lot of there documentation through-out.
- [Cloudinary](https://cloudinary.com/)
- [Bootstrap](https://getbootstrap.com/docs/)
- [Heroku](https://id.heroku.com/)


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


* I'd also like to credit thanks to all the tutors that helped guide me through-out at Code Institue.

[Back to top](#20-sided-queer)