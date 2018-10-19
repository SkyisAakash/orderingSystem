# README

This is a full stack app for Order processing of coffee.

## Run on your machine

Please follow steps mentioned below to run the app on your local mac machine.
1) Clone the github repo.
2) Navigate to project directory and run ```npm install```
3) Run webpack by running script using ```npm start```. This will create file bundle.js and webpack will watch for changes if you want to play wround with it. If you do not want webpack to continue watching changes, press cmd+C to stop it.
4) Run ```rails s -b localhost```. This will start rails server on your terminal.
5) Go to web browser and type ```http://localhost:3000/#/``` in the url field.

## Tefhnologies used

The Backend is built using Ruby on Rails framework.
The frontend is built using React and redux.
Data is managed using PostgreSQL database.
Api calls from frontend to backend are managed by making AJAX calls.
BAckend uses JSON Jbuilder to organize json objects before sending them to frontend.
Webpack was used to bundle JavaScript files and serve static pages using rails assets pipeline.

## Functionalities

User can view order index and navigate through pages to view more.

![IndexPage](https://i.postimg.cc/2jvy44f8/Screen-Shot-2018-10-19-at-12-13-28-PM.png)

User can create new orders using create order button at the top.
![Modal](https://i.postimg.cc/nrtHdPtV/Screen-Shot-2018-10-19-at-12-13-47-PM.png)

## Deploy to production

* Make sure to remove gems like byebug, pry-rails that are only meant for development purpose
* Make sure to remove logger from ```frontend/store/store.js``` as we do not want to show states in console in production
* Make sure there are no ```console.log``` or ```debugger``` statements in the code
* Update ```webpack.config.js``` file for production

Update our webpack.config.js file to include the UglifyJsPlugin and use DefinePlugin to set process.env.NODE_ENV to 'production' for use in our webpacked files.

Lets say if we are hosting on heroku, by default, Heroku will run Node with process.env.NODE_ENV == 'production'. This allows us to include our plugins only under certain conditions.
```
// webpack.config.js
var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)
```

