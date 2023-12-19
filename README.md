<h1>Title: MetroHelp</h1>

<b>Link to Web Deployment:<b>https://inst-377-wmata.vercel.app

<b>Group Members:</b> Emily Isaacson, Kenneth Hill, Jake Palmer

<b>Description:</b> Our project aims to equip users with information regarding rail lines and station information for the Washington Metropolitan Area Transit Authority  (WMATA). This includes information regarding locations, fares, times, and parking.

<b>Target Browser:</b> We anticipate users to use Google Chrome due to its ease of use. It is also the most used browser among all other browsers like Safari and Microsoft Edge.

<h2>User Manual:</h2>

To get information about a specific station, users can click on the dropdown menu on the Home page and select a station. Once they click Submit, the station's name, address, weekday opening time, and weekend opening time will appear in the Station Information box below. If there are any elevator or escalator closures at the selected station, an alert will appear in the Station Alert Information box. 
<br>
<br>
If there are any system-wide alerts such as station closures or delays, information about the alert will appear in the System Alert Information box on the right side of the Home page. 
<br>
<br>
The About page contains information about the team, a list of MetroHelp functionality, and a brief overview of plans for future development. On the bottom right of the About page, there is a comment box for users to leave comments, complaints, or ideas for future development.

<h2>Developer Manual:</h2>


<b>Architecture:</b> Full-Stack Web Application built on NodeJs, Express, jQuery, and Supabase 
- Backend: Node.js/Express/Supabase
    - Node.js - An open source server environment used for generating dynamic page content, file control (create, open, read, write, delete, close), collecting form data, and database control (add/delete/modify data). 
        - Express: Node.js framework used to implement easy RESTful APIs.
        - Body-Parser - JSON parsing, serving static HTML files from '/public'
        - NPM - Node.js Package Manager - used to manage dependencies of Node.js packages
    - Supabase: Open source Postgres database (alternative to Firebase). Offers APIs and authentication, and used as the primary database to store comment data. 
- Frontend: jQuery
    - jQuery - A JavaScript library designed for easy HTML DOM tree traversal and manipulation, as well as event handling, animations, and Ajax capabilities, among other things. 
- Other: Nodemon
    - Nodemon - Node.js Utility script used for restarting server upon source file changes
 
<b>API Endpoints</b>
- /:
-     serves index.html
- /about:
-     serve about.html
- /comments 
-     retrieves comments from the Supabase database. Supabase client queries the "comments" table and sends the JSON data as a response.
- /comment:
-     handles "Add New Comment" POST requests. Expects a JSON payload with "name" and "comment" fields, inserts data into the database, and sends the inserted data as a JSON response.

<b>Running MetroHelp Locally:</b>

To run MetroHelp on your machine, first download the files from this GitHub repository and open them in your IDE. Then, run the commands 'npm install' and 'npm start' to install the necessary packages. Once the installation has completed, navigate to your browser and enter 'localhost:3000' into your search bar. This will take you to MetroHelp's Home page. 

<b>Future Development:</b> 

In the future, the team would like to implement functionality that shows bus route information, rail station parking information, and station-to-station route planning. These should all be relatively simple to implement, as the WMATA API has authored endpoints that provide this information. 

<b>Known Bugs:</b>

If a station exists on more than one line (for example, Metro Center exists on the Red, Orange, Blue, and Silver lines), then it may appear multiple times in the dropdown menu. The team was unable to resolve this issue, but hope to in future development. 
