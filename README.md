# The productivity planner
#### Video Demo:  <https://youtu.be/NRUkxbNaKU0>
#### Description:
This chrome extension was designed as a to-do list that helps the user plan their day to get things done. Every day the chrome extension randomly selects a motivational quote to inspire the user and resets itself if the user completed all their daily tasks. The user can (optionally) enter a time associated with each task/appointment, if they do, they will receive a notification on their computer 5 minutes before their appointment, reminding them that it's coming up. This chrome extension was inpired by a book called "the six minute success journal". It's a journal that I use and that's increased my productivity and helped me live by my values substantially, i highly recommend checking in out, I belive that journalling and planning your day is of utmost importance when it comes to getting the most out of your days.
    The images directory contains all the icons for the chrome extension
    all the styling for the website is done accross 3 different css files, bakcground.css, input.css and button.css
    There are 3 pages in this application, the login.html page is the page a user will see the first time they ever load up the chrome extension, where it prompts the user for their name and welcomes them to the app. login.html automatically redirects the user to popup1.html if the users name is already stored, and also redirects them the first time they enter their name. The login.html page has all it's functions run in the login.js file.
    The popup1.html file is the page that the user will see at the start of their day every day. It prompts the user for their daily tasks and the priority that they are trying to get done for the day, and optionally provides an input for time alongside each appointment and then redirecting the user to the popup.html page.
    the popup1.js file accompanies the popup1.html file and makes sure the users input is passed onto the next page, popup.html
    the sw.js file is the service worker that makes sure the appointment, priority, and time variables are cleared whenever the user completes all their daily tasks, and also sends the user reminder notifications 5 minutes before their appointment, if they had chosen to enter a time accompanying their appointment
    The manifest.json file is the manifest for the chrome extension, it contains the permissions and general details about the application
    

The application also works offline. simplistic yet effective.
