#CSE 5335 Project 1

## Display web content using Ruby and JavaScript


Aim: To display data from JSON file on web page without refressing the web page.
---

a. What server framework did you choose and why?

I chose ruby on rails for the server framework. This framework serves as a great scaffolding to build a website and automates redundant tasks.
Ruby is one of the best metaprogramming and it eliminates the need to generate the code from scratch. I wanted to learn	this framework which is much faster than other frameworks.

b. What client framework did you choose and why?

I used jQuery for the client side framework. JQuery is a javascript library and I am familiar with JavaScript. Also, JQuery offers a wide variety of inbuilt funcitons to use. 
JQuery helps in handlig of DOM and each and every element of the page such as <p> and the events such as OnClick, OnHover etc.
      
c. What aspect of the implementation did you find easy, if any, and why?

Client side scripting using JavaScript, CSS, HTML etc. was quite easy because I am well-versed with that and have done such tasks in previous projects.
      
d. What aspect of the implementation did you find hard, if any, and why?

Server side scripting was hard as I had to familiarize myself to JSON format. I am used to using XML. Making the call to the server was tricky as well. I was getting errors in mapping the JSON data received to the data table on the web-page.

      
e. What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose for your    solution?

            Heroku Toolbelt- This provides you access to the Heroku Command Line Interface (CLI), which can be used for                             managing and scaling your applications and add-ons.
            PostgreSQl- It is recommended by Heroku to run same database locally during development.
      
f. What Ubuntu commands are required to deploy and run your server?

      To run app locally:
          1. heroku local  
             This command allows app to run locally and also sets the config vars.
                        
      To deploy the app on web:
          1. git add .
             This command adds the modified files to local git repositary.
          2. git commit -m "Demo"
             This command commits the changes to the repositary.
          3. git push heroku master
             Deploy the app on the Heroku web server.
          4. Heroku open
             We can see that everthing is working perfectly.
          
          
