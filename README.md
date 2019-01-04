# Code-test

1. insure the Node.js npm and webpack are installed on your laptop. 
2. run "vue init webpack project-name" on the command line to create a initial vue project by webpack. After created, you can see the catalog of the project.
3. run "npm install" to add project dependencies and "npm run dev" to start the project. The website will shows on http://localhost:8080
4. we need to change the src files because the src catalog is the develop catalog of vue project.
5. we first edit the main.js file, this is the entry of pre-compile project
   we need to import two useful resources: "Vuelidate" and "VueMaterial" in main.js. "Vuelidate" is used for define email validation and we will use some components from VueMaterial. run "npm install vue-material --save" and "npm install vuelidate --save" to install these two package on our project.
6. then we edit the App.vue file and add the router of our views folder (contains login/register/profile pages)
7. add views folder and create login, register, profile.vue files.
8. write three main pages. use html and css write the structure and style, import the compononets from vue-material such as md-button, write methods and data in <script></script>
9. run "npm run dev" on commandline
