# React Portfolio

My personal portfolio built using React and Bootstrap. I'm continually adding projects, modifying content, and updating the look and functionality. 

Please check out my work at www.alexastef.com!

## Table of Contents 

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [About Me](#about)

* [Credits](#credits)
​
* [Questions](#questions)

## Prerequisites

If you want to pull inspiration from my portfolio design, please email or credit me :) But if you're interested in how I built it, below are the tools used:

* [React.js](https://reactjs.org/)
* [React-scroll](https://www.npmjs.com/package/react-scroll)
* [Bootstrap](https://getbootstrap.com/)
* [Google Domain](https://developers.google.com/identity/sign-in/web/sign-in)
* [Unsplash](https://unsplash.com/)
* [Adobe PhotoShop](https://www.adobe.com/products/photoshop.html?promoid=PC1PQQ5T&mv=other)
* And some good old fashioned CSS!

## Installation

To build a similar, single page portfolio or website for yourself, you'll want first create a new React app:
```
npx create-react-app <projectname>
```

Then for the single page, smooth scrolling, install react-scroll. To deploy to Github Pages, install gh-pages:
```
npm install react-scroll gh-pages
```
You can also fork and clone this repo to use as a template and then just run npm install

## Usage

You'll be able to run the app locally by running npm start:
```
npm start
```
All your changes should update the local host in real time. If you want to deploy your app, you'll need to make a few changes to the package.json file. Directions below for deploying to Github Pages:

1. Add a homepage: <name-of-the-page-deploying-to> to your package.json in the root
  ```
  "homepage": "https://alexastef.github.io/react-portfolio/"
  ```
2. In the "scripts" property of your package.json, add two scripts:
  ![scripts](https://user-images.githubusercontent.com/62451633/93928045-931f8380-fcce-11ea-96a3-c1e1e8f9fef6.png)

3. Now, after you merge your changes and pull the most up-to-date master, open a new terminal and run npm run deploy:
```
npm run deploy
```
  
4. This creates a new branch, gh-pages. Open your deploy settings in Github and change the deploy branch to gh-pages
  ![deploysettings](https://user-images.githubusercontent.com/62451633/93927549-e04f2580-fccd-11ea-9afc-aa442020ecbe.png)

5. Every time you want your deployed site to update with the changes you've made, you need to run npm run deploy

## Pages

### Main
  * Basic about with main navbar links and link to the full bio


### Projects
  * Portfolio of selected projects with logo, description, technologies used, and links to the repo and live site

### About
  * Bio page with more about me, my background, and favorite technologies
  
### Resume
  * Link to standard resume

### Contact
  * Email, LinkedIn, and Github
  * Form coming soon!

## License

This project is licensed under the MIT license.

## About

### ![Alexa Stefankiewicz](https://avatars.githubusercontent.com/alexastef?size=200)
* ### [Alexa Stefankiewicz](https://github.com/alexastef)
* A lot of creative juices and time went into making this something I can continue building and using. I hope that it is a good representation of who I am as a person and engineer!

If you would like to use this template for your own portfolio, please just credit me. Thank you! :)

## Credits

Any stock photos used are from Unsplash

## Questions

Questions or feedback-- we welcome them all! Feel free to reach out for any questions about the repo, open an issue or contact me and I'll get back to you soon!
