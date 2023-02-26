[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10196239&assignment_repo_type=AssignmentRepo)
# FED Javascript 1 - Course Assignment

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Design](_LINK_TO_FIGMA_)
- [Production deploy](_LINK_TO_WEBSITE_)
- [Deployment CI](_LINK_TO_NETLIFY_VERCEL_DASHBOARD_)
- [API Docs](https://rickandmortyapi.com/documentation)

## Report

In this API project. I will be going through what decision I made on building the site.

at first, I started looking for at least three different APIs, to work with, and after that chose the APIs of my choice... in this case, it was the Rick and Morty API.

I immediately started making a low prototype on Figma, finding colors and just breaking down what the site should look like, just to make sure I have a design to follow while building the site.

after Figma, I started working with the index.html, reorganizing the HTML after my designs from figma and renaming classes for the CSS.

After reorganizing the HTML, I started on my js file... I first started with my add event listener for my navigation, because I wanted to make sure that the drop-down navigation I was going for, works(this is for the mobile version).

when that was done and working, I started writing my consts to work with and afterward started fetching API from the documentation.  

This was by far the easiest part of the javascript in my opinion, as it did not take a long time to do it. Once I made sure the fetch is working, I started on the filter by search and got it working.

I wanted to add a style by filtering whether the character is alive, dead, or unknown, but I couldn't get it working with the filter function and it was consuming much of my time. I had to prioritize my time, I got a workaround it though in the details page without using the filter function...

Instead, I used the if() method to check whether the characters are alive, dead, or unknown and added the small circle with a blink animation(from open-props) ("Alive = Green, Red = dead, and Gray = unknown). 

after the home page is done. I went ahead and built the details page. on my details page, every character that you view includes query params by id and name. all of the pages make a get request to an API to fetch results.


I included both location and episode page, which also makes a get request to an API call to get a list of results, although I made a dropdown animation to view the rest of the details on the items on API request because there was not much of information to make a new detail page for the location and episode page, so I did not see much purpose of doing it.


after all of the fetch requests were done, I made sure that everything is functioning properly and then I started with the CSS.


The styling is very simple and neat. 

On my header, I chose to add an angle-down font with a float animation (from open props) as this makes it easier to spot that this is for opening the navigation.
 I could have used a hamburger button as well but I prefer this for the aesthetic purpose of the page. 


my navbar is included on every page, as the location, episode, and contact page does not have a back button, so the user can navigate back through pages.

I wanted to add an image slider for my banner where u can drag the images, but I couldn't get it to work, so I instead made automatic looping images, every 4 seconds(with the setTimeout)


I consider my typography as good, as fonts, font-sizing, line height, positioning, etc...

the colors of my choice were nothing too crazy, as I wanted to keep them simple, but they have a purpose, for example, a color when you hover over the items inside of my card holder.

Validating a form went ok. The input field reacts after the required string or symbols. Input turns red for invalid. Else it is green when valid. Anf has a span under the input fields on which errors are made. For example, if the email is incorrect, then the error message shows "Please use a valid email."


References: 

Monde Sineke https://github.com/S3ak

https://www.google.com/

https://www.w3schools.com/

https://rickandmortyapi.com/documentation





## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://127.0.0.1:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] End-user can see a list of items of the home page.
- [x] When the End-user clicks on an item in the list they are navigated to the details page.
- [x] End-user can view atleast three properties of an item in a list.
- [x] End-user can view atleast three properties of an item on the details page.
- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] End-user can view the title of the item on the browser tab for a details page.
- [x] End-user can view validation message when they input an incorrect name.
- [x] End-user can view validation message when they input an incorrect subject that is less than 10 characters.
- [x] End-user can view validation message when they input an incorrect Email address.
- [x] End-user can view a validation message when they input an incorrect physical address that is less than 25 characters long.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [ ] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [x] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [x] End-user can experience pleasant animations.
  - [x] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [x] Code is dry - There are no repeating functions, variables.
- [x] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [x] Is user-friendly
  - [X] Effective use of the pillars of design
    - [x] Typography
    - [x] COlour
    - [x] Composition
    - [x] Art Direction
    - [x] Motion
  - [x] Adhered to principles of design
    - [x] Contrast
    - [x] Balance and alignment
    - [x] Emphasis
    - [x] Proportion
    - [x] Hiearchy
    - [x] Repetition
    - [x] Ryhthem
    - [x] Pattern
    - [x] Negative space
    - [x] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [x] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Krystian Cruz (@KrystianGH2)
- Monde Sineke (@S3ak)
