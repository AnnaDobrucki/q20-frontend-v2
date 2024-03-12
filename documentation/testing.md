# Testing

## Index

 * [Error resolution and Debugging](#error-resolution-and-debugging)
 * [Validation](#validation)
 * [Manual testing](#manual-testing)
 * [Automatic testing](#automatic-testing)
 * [Lighthouse Testing](#lighthouse-testing)
 * [Responsiveness](#responsiveness-testing)

You can find the link to the live site [here](https://q20-front-end-69f73c8caa66.herokuapp.com/)

## Error resolution and Debugging
* I noticed a hiccup with the deletion process on the event page. While everything went smoothly when removing events from the main page, it hit a snag on the separate event ID page. Instead of taking users back to the expected "DnDTime" URL, it veered them towards the "dndevnt/dndevent/" page. After a bit (a lot) of digging, I sorted out the History Push function, making sure both the main event page and the specific event ID page smoothly navigate back to the DNDEvent Page.

* I found an issue on the initiative page where the table data kept reloading, causing the data entries to repeat themselves multiple times. To resolve this, I implemented a setLoading state to manage isLoading. This managed to patch over the continuous reloading of data in a loop on my initiative counter. Allowing the table data to be fixed after it's reload.

* In my create posts, I encountered an error that if a file was too large *and* potentially corrupted Cloudinary throws an error that I unfortunatley didn't have time to debug / fix.

* I have also commented out all console.logs, however desired to leave them in for future ease when developing this in future.

## Validation
Below are all verifications of code validations. 

## CSS Validation
* My CSS files successfully passed validation without any errors, allowing the styling of my web pages to be consistent and error-free. I used [W3C](https://jigsaw.w3.org/css-validator/validator) for validating.

![ CSS Validation](/documentation/README_images/CSSHomeValidation.png)


## Linter PEP8 testing
See API site for testing [there](https://github.com/AnnaDobrucki/PP5-Q20-API)

## Eslint testing

* After an error with installing a different Eslint package and rectifying it, I found out a good way to check for errors or warnings is to use code - npx eslint ./src. I found there were a couple of warning that I've since rectified. 

![ Eslint Validation](/documentation/README_images/EslintTest.png)

* I also have no "Problems" to resolve in the terminal.

![ Problem Validation](/documentation/README_images/problemsTerminal.png)


### Front End Validation 

## Manual Testing 

### Landing Page

| Test Description (Home Page)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| Start Load Page   | All current posts should load  | Pass
| Ability to see most followed | Should be able to visually see the profiles | Pass
| On 'click' to any Icon/ 20SidedQueer | Should redirect to Home Page| Pass
| On 'click' to any post | Should redirect to full post on creators page | Pass
| On 'click' to Sign Up | Should redirect to Registration Page| Pass
| On 'click' to Sign In | Should redirect to Sign In| Pass
| On 'click' to Profile ID| Should redirect spesific profile| Pass
| Within post Clicked| See all comments made| Pass
| Within post Clicked| See all likes given| Pass
| If logged out - On 'click' to like any post | Message "to like a post log in" | Pass
| ----------- | ----------- | ----- |
| Test Description (Home Page - Logged In)   | Expected Outcome | Actual Outcome |
| Click to add like | Like added| Pass
| Click to remove like | Like removed| Pass
| Click to edit post |  pre populated fields| Pass
| Logged in user can type/ reply to comments | See comments box| Pass

### Sign Up Page 

| Test Description (Sign Up Page Frontend)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| Allows new user create username and password  | Username and Password fields MUST be filled | Pass
| Already a user? Links to Sign in | redirects to Sign In Page | Pass

### Sign In Page 
| Test Description (Sign In Frontend)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| On 'click' user is redireted to Sign In page| Sign in page is shown | Pass
| On correct username and password user is logged in| Username and Profile are loaded| Pass
| Once logged in user has access to DnDTime/ Make Posts/ Initiative and profile sections| Nav Bar extends with new icons| Pass
| On 'click' to Sign Up| Redirect to sign up| Pass


### Sign Out Page 
| Test Description (Sign Out Frontend)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
| On 'click' user is redireted to log out page | Log out page is shown | Pass
| On 'click' user is logged out sucessfully | No longer shows icons/ profile for past user | Pass

### DnDTime 

| Test Description (Dnd Time Front End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Click' loads up current events made  | List vertical view of events by most recent created at top | Pass
|  User on 'Click' to Create Event | Redirected to event making page | Pass
|  Can "follow"/"unfollow" profiles at anytime  | Widget changes colour and text| Pass
|  Can "Reply/Unreply" to DnD Events at anytime  | Widget changes colour and counter increase/decrease| Pass
|  User on 'Click' of Event Title redirected to relevant event page | Redirected to event page | Pass
|  User can 'scroll' infinatley through all posts | Scroll bar at the side/ no pagination| Pass
|  User can't attend there own event | Warning message 'Can't attend' shown/ unable to change counter| Pass
|  User can search relevant Title Event/Profile Name and see corresponding event| A refined list of relevant events is shown| Pass

### Create Event Page
| Test Description (Dnd Time Create Event Front End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  User MUST fill out most* input data fields  | Throws error messsages for any fields missing info* | Pass
|  *Time errors do not throw errors | None shown, event made without passing info | Pass
|  On 'Submit' AKA 'Create Adventure' | User is taken to and shown event page | Pass
|  If owner/ creator, elipsis is shown | Elipsis with drop down icons for delete or edit | Pass
|  If owner/ creator, delete button | cascades a delete functionality so event is deleted from API  | Pass

## Id Relevant Event Page
| Test Description (Dnd Time Id Page Front End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  Singular Event is shown | url reflects the ID of the event made | Pass
|  If owner/ creator, elipsis is shown | Elipsis with drop down icons for delete or edit | Pass
|  If owner/ creator, delete button | cascades a delete functionality so event is deleted from API  | Pass
|  If owner/ creator, edit button | redirects to edit page| Pass

## Edit Event Page
| Test Description (Dnd Time Edit Front End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Click' edit Event is shown | inputs are pre-populated with saved responses | Pass
|  All input fields can be changed | reflects the edit of the event made | Pass
|  On 'Save Adventure' user redirected to Events Page | User is redircted | Pass
|  Once redircted Uer can see relevant changes  | Changes have been saved| Pass


## Initiative Page
| Test Description (Initiative Front End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Click'  Initiative Page is shown | Counter input fields and any made iniatives show in tble below | Pass
|  On 'Click'  Initiative Name field | Input Name / Character Name| Pass
|  On 'Click'  Initiative Value field | Input Number only| Pass
|  On 'Click'  Create Initiative button | Values are cleared and added to table below| Pass
|  On 'Hover'  Vales in table are highlighted | Values are highlighted in red| Pass
|  On 'Elipsis'  drop down Delete and Edit options appear| Both icons appear to relevant key| Pass
|  On 'Bin'  drop down Delete | Removes key and value from table | Pass


## Initiative Edit Page
| Test Description (Initiative Front Edit End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Edit'  drop down edit | Prepopulates value fields| Pass
|  On 'Edit'  page Users can change values| Input fields allow removal and addition | Pass
|  On 'Save Changes'| User is redirected to iniatives page | Pass
|  Table reflects changes with no new additions| Character and Inative have been saved and re added to table | Pass

## Profiles Page
| Test Description (Profiles Front Edit End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Click' to Profile Nav linked to Logged in User Profile | Redirects to user profile page| Pass
|  Users Profile Pic/ Followers/Followed-By/Posts Counter is shown is Loaded | Counters reflect the | Pass
|  On 'Click' to ellipsis, edit/Profile| Redirects to user to edit profile with bio | Pass
|  On 'save' edit/Profile| Redirects and shows change | Pass
|  On 'Click' to ellipsis, edit/username| Redirects to user to edit username | Pass
|  On 'save' edit/username| Redirects and shows change | Pass
|  On 'Click' to ellipsis, edit/password| Redirects to user to edit password | Pass
|  On 'save' edit/password| Redirects and doesn't reveal change | Pass


## Liked Page
| Test Description (Liked Front Edit End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Click' to Liked Nav linked to Logged in User Profile | Redirects to user Liked page| Pass
|  Users pre 'Liked' posts are scoured and listed is Loaded | Posts are loaded | Pass
|  Search Bar functionaility redefines list based on key word search | Redefined list is shown | Pass


## Add Post Page
| Test Description (Add Post Front Edit End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  On 'Click' to Add post Nav linked to Logged in User Profile | Redirects to user Add Page page| Pass
|  Users have options to add to input post fields | All fields are editable | Pass
|  Users have options to add to pictures post fields | Pulls up relevant picture search form device | Pass
|  Users have  | Pulls up relevant picture search form device | Pass





## Automatic testing
* Within my API and Front End I managed to create a couple of automated tests.
![Automated Test Front End](/documentation/README_images/automatedDNDEVENTTEST.png)


## Lighthouse Testing 

### Home Page 

[Home Page Lighthouse Pic](/documentation/README_images/lighthouse_testing/HomeLoggedInLighthouse.png)

### Sign Up Page

[Sign Up Lighthouse Pic](/documentation/README_images/lighthouse_testing/SignUpLighthouse.png)

### Sign In Page 

[Sign Page Lighthouse Pic](/documentation/README_images/lighthouse_testing/SignInLoightouse.png)

### DnD Time Page 

[DnD Time Page Lighthouse Pic](/documentation/README_images/lighthouse_testing/DnDTimeLighthouse.png)

### Dnd Event Form DnD Page 

[Dnd Event Form Lighthouse Pic](/documentation/README_images/lighthouse_testing/DNDEVENTCreateLighthouse.png)

### Edit Dnd Event Form DnD Page 

[Edit Form Lighthouse Pic](/documentation/README_images/lighthouse_testing/DNDEditPageLighthouse.png)

### Initiative Page 

[Initiative](/documentation/README_images/lighthouse_testing/InitiativeLighthouse.png)

### Feed

[Feed](/documentation/README_images/lighthouse_testing/FeedLighthouse.png)

### Liked

[Liked](/documentation/README_images/lighthouse_testing/likedLighthouse.png)

### Profile

[Profile](/documentation/README_images/lighthouse_testing/ProfileLIghthouse.png)

## Responsiveness Testing

Thanks to bootstrap I didn't need to use many media quieres for the responsiveness was in built or easily managable in the styles.module.css files.  

Dev tools was my go to for understanding my sites responisveness. My site is responsive for the below:

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Duo
- Samsung Galaxy A51
- Nest Max

[Back to README](/README.md)