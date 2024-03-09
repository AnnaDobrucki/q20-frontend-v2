# Testing

## Index

 * [Error resolution and Debugging](#error-resolution-and-debugging)
 * [Validation](#validation)
 * [Manual testing](#manual-testing)
 * [Lighthouse Testing](#lighthouse-testing)
 * [Responsiveness](#responsiveness-testing)

You can find the link to the live site [here]()

## Error resolution and Debugging


## Validation
Below are all verifications of code validations. 

## HTML Validation

For HTML validation I was instricted by tutors to do the following:
1) Open page in browser.
2) View page sorce code.
3) Copy and paste into relevant Validator.

### Home Page Validation

<details>

<summary>Home Page Validation ></summary>

![ Home Page]()
</details>

### Sign In Validation 

<details>

<summary>Sign In Validation ></summary>

![ Sign In](/)
</details>

### Register


### Posts

<details>

<summary>Posts ></summary>

![posts ](/)
</details>

### Post Edit Page 

<details>

<summary> Post Edit Page ></summary>

![Posts admin]()
</details>

## CSS Validation

<details>

<summary>CSS Validation ></summary>

![css validation](/)
</details>

## Linter PEP8 testing

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
| Within post Clicked| See all comments made| Pass
| Within post Clicked| See all likes given| Pass
| If logged out - On 'click' to like any post | Message "to like a post log in" | Pass
| ----------- | ----------- | ----- |
| Test Description (Home Page - Logged In)   | Expected Outcome | Actual Outcome |
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
| Once logged in user has access to DnDTime and Make Posts| Nav Bar extends with new icons| Pass

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

### Create Event Page
| Test Description (Dnd Time Create Event Front End)   | Expected Outcome | Actual Outcome |
| ----------- | ----------- | ----- |
|  User MUST fill out most* input data fields  | Throws error messsages for any fields missing info* | Pass
|  *Time errors do not throw errors | None shown, event made without passing info | Pass
|  On 'Submit' AKA 'Create Adventure' | User is taken to and shown event page | Pass

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

## Lighthouse Testing 

### Home Page 

[Home Page Lighthouse Pic](/)

### Sign Up Page

[Sign Up Lighthouse Pic](/)

### Sign In Page 

[Sign Page Lighthouse Pic](/)

### DnD Time Page 

[DnD Time Page Lighthouse Pic](/)

### Dnd Event Form DnD Page 

[Dnd Event Form Lighthouse Pic](/)

### Edit Dnd Event Form DnD Page 

[Edit Form Lighthouse Pic](/)

### Initiative Page 

[Initiative](/)

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
- Surface Pro 7
- Surface Duo
- Samsung Galaxy A51
- Nest Hub Max

[Back to README](/README.md)