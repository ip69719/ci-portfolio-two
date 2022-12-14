# Car Logo Quiz

[Link to the live project](https://ip69719.github.io/ci-portfolio-two/)

## Project Overview

![](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/responsive_image.png)


## UX

### Project Goals

The primary Project Goal is to create a car logo quiz that is suitable for all ages.
The target audience are people who are interested to learn car brand logos.

### User Stories

As a User, I want:
* The ability to view a short introduction, so I can understand what the quiz is about.
* The ability to easily navigate throughout the site.
* Feedback when I select an answer letting me know if I selected the correct answer.
* Feedback at the end of the quiz so that I know what my overall score is.

### Design choices

#### Colour Scheme

* Colors were selected with accessibility in mind ensuring that high color contrast is maintained.

#### Typography

* Arvo font was selected for strong characters and high readability.

#### Images

* Logo images with transparent background work well on both dark and light backgrounds. 

### Wireframes

* [Wireframes ](https://github.com/ip69719/ci-portfolio-two/tree/main/assets/docs/wireframes)

## Features

### Existing Features

Single HTML page with three section and interactive elements:
* Home section contains a brief introduction about the quiz and invites the User to choose between the dark and light theme. The background and the color scheme change once the SWITCH THEME button in clicked. The second botton hides the home section of the page and takes the User to the Quiz area.
* Quiz section of the page displays quiz question with a car logo image. The User is expected to select an answer by clicking on one of the three buttons which contain names of car companies as answer options.
* The User's answer is then checked against the correct answer. A modal popup provides feedback to the User for every answer. The color of the modal header and the message content are different depending on whether the User's answer is correct or wrong.
* Once modal is closed (by clicking on X or anywhere outside of the modal), the next question is displayed.
* The user is presented with an overall result as soon as the last question is answered. The results section of the page contains two buttons. The REPLAY button invites the User to retake the quiz. The QUIT button returns the User to home section of the page.

### Features Left to Implement

* A good feature would be to display questions in a random order every time user takes the quiz. This will improve the presentation of the quiz by providing a fresh look to returning users.
* The theme switcher button is located in home section of the page. Home section is hidden when user is taken to the quiz area. The user has no option to change the theme unless the quiz has ended. In the next release i would like to make the theme switcher visible in every section, so that the selection can be made at any stage.
* Currently the game questions are hardcoded. This is not ideal and other solutions will be considered in future releases.

## Technologies used

### Languages used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

* [Google fonts](https://fonts.google.com/) were used to import the 'Arvo' font into the style.css file which is used on all pages throughout the project.
* [Google Developer Tools](https://developer.chrome.com/docs/devtools/) was used for testing responsiveness of the website and review JavaScript errors.
* [TinyPNG](https://tinypng.com/) was used to optimise images for the web.
* [WebAIM](https://webaim.org/resources/contrastchecker/) was used for checking the colour contrast.
* [Git](https://git-scm.com/) was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/) is used to store the project code after being pushed from Git and track issues.

## Testing

### Validation Testing

* The W3C Markup Validator, W3C CSS Validator Services and JShint were used to validate the project to ensure there were no syntax errors.
    * W3C Markup Validator - [Results](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/testing/validation/w3c_markup_validation.pdf):
        * Empty heading warning was ignored because modal header is inserted by JavaScript code.
    * W3C CSS Validator - [Results](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/testing/validation/w3c_css_validation.pdf)
    * JShint - [Results](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/testing/validation/jshint_js_validation.pdf):
        * Undefined variables warning was ignored because the questions are stored in a separate JavaScript file.
        * Unused variables warning was ignored because functions are called through onClick in HTML element.

### Manual Testing

* Validated that when SWITCH THEME is clicked the background and colors change to defined alternatives for dark and light themes. One issue was identified and is documented [here](https://github.com/ip69719/ci-portfolio-two/issues/12).
* All Foreground and background color combinations were tested using [WebAIM](https://webaim.org/resources/contrastchecker/) online contrast checker tool.
* Validated that the User is taken to quiz area when START button is clicked.
* Validated that the correct answer is presented in the answer choices only once.
* Validated that every question contains answer option with the correct answer.
* Validated that modal with the expected message is displayed if user clicks on the correct answer botton.
* Validated that modal with the expected message is displayed if user clicks on the wrong answer botton.
* Validated that the modal closes when the user clicks on span (x) element.
* Validated that the modal closes when the user clicks anywhere outside of the modal.
* Validated that the results section is displayed showing an overall score as soon as the last question is answered.
* Validated that the correct answers are accurately tracked and displayed at the end of the quiz.
* Validated that the quiz restarts/quiz question is displayed when REPLAY button is clicked.
* Validated that the User is taken back to home section when QUIT button is clicked.

### User Story testing

* As a User, I want the ability to view a short introduction, so I can understand what the quiz is about.
    * As soon as the page is loaded the User is presented with a brief introduction to the quiz.

* As a User, I want the ability to easily navigate throughout the site.
    * Home section and the results section have only two large buttons allowing the User to navigate easily between the sections of the page.

* As a User, I want feedback when I select an answer letting me know if I selected correct answer.
    * The User is presented with a pop up modal as soon as an answer is selected providing the User with an instant feedback.

* As a User, I want feedback at the end of the quiz so that I know what my overall score is.
    * Overall feedback is shown to the user as soon as the last question is answered.

### Defect Tracking

* Issues are documented and tracked on [GitHub](https://github.com/ip69719/ci-portfolio-two/issues).
* The remaining open issues were not prioritised because these a visual defects only that do not impact functionality.

## Deployment

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the repository you want to deploy [GitHub Repository](https://github.com/ip69719/ci-portfolio-two).

1. In the menu located at the top of this section, click on the 'Settings' icon.

    ![](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/deployment/deployment_step_two.png)

1. Click on the Pages link on the left menu bar.

    ![](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/deployment/deployment_step_three.png)

1. Locate the Build and deployment section on the right. Under "Branch", click the dropdown and select "main" Branch and "/root" folder and then save.

    ![](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/deployment/deployment_step_four.png)

1. Return to your repository's main page, locate Environments and click on github-pages pages next to the green Active button.

    ![](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/deployment/deployment_step_five.png)

1. Click on View Deployment on the right hand side.

    ![](https://github.com/ip69719/ci-portfolio-two/blob/main/assets/docs/deployment/deployment_step_six.png)

1. The resulting page that comes up is your [website](https://ip69719.github.io/ci-portfolio-two/)

## Credits

* Content of READ.md was written with reference to [this](https://github.com/maliahavlicek/ci_mentor_insights/blob/main/PORTFOLIO_2_JAVASCRIPT_ESSENTIALS.md) template compiled by [Malia Havlicek](https://github.com/maliahavlicek). 

### Content

### Media

* Images of cars were sourced from [Shutterstock](https://www.shutterstock.com/home).
* Images of car logos were sourced from [CarLogos.org](https://www.carlogos.org/car-brands/) and were used in this project for educational purposes only.

### Code

* Used [Code Explained](https://www.youtube.com/watch?v=49pYIMygIcU&t=1744s) tutorial as a reference to implement the project idea.
* Learned how to loop through objects keys and values in Javascript from [this](https://flexiple.com/javascript/loop-through-object-javascript/) Flexiple tutorial.
* Learned how to create a Modal Box with CSS and JavaScript and adopted code from this [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) tutorial.
* The CSS code used to animate buttons was taken from [Federico Dossena's](https://fdossena.com/?p=html5cool/buttons/i.frag) site (9IDLE AMINATION: BOUNCY BOUNCY section).
* The CSS and JavaScript code for dark and light theme switcher was taken from [this](https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2) article written by Musthaq Ahamad.

### Acknowledgements

* Special thanks to my Mentor [Malia Havlicek](https://github.com/maliahavlicek) for support and guidance during this project.