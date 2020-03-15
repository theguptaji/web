## Process to setup MERN app from sratch 

### Database
* Make an account on MongoDB atlas.
* Create a cluster and get an endpoint.

### Starting template for frontend (React pipeline)
```javascript
npx create-react-app frontend   //  To create a react project template  
npn start    // To start a react server
```
### Starting template for backend (Nodejs pipeline)
* Create a directory `backend` somewhere in your project. then `cd` into it.  
```javascript
npn init -y  //initialize package.json for node app
npn install express // lightweight web framework/server for nodejs
npn install cors  // to easily access something outside of server from server
npn install mongoose  // It interact with mongoDB through nodeJS simpler
npn install dotenv  // To access local environment variable
npn install -g nodemon // Helpful tool for development, automatically restarts node app when change is detected
```

### Mongoose (express --> mongoose --> MongoDB)
* Mongoose quickstart [here](https://mongoosejs.com/docs/index.html)
* Creating Database schema with Mongoose example:  
    ```javascript
    const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    }, {
    timestamps: true,
    });
    ```
* For best practice, define all schemas in their `particular js file` inside a `models` directory:  
    ```
    backend/models/user.model.js
    ```
* For the API calls to perform `CRUD` (create, read, update, delete) operations, we define `routes`. For best practice, define all routes in a common dir:
    ```
    backend/routes/users.js
    ```
* These routes are defined using `express router` API calls, check [here](https://expressjs.com/en/api.html) for examples.

### React app
* React components are also called `JSX` which are similar to `Jinja` template in Django/flask.
* In dir `public/index.html`, the place <div id="root"> is where the react is loaded.
* Inside `src/index.js`, the `import App from './App';` is what our main react app is defined.

### Running frontend

```javascript
npm install
npm start
```
