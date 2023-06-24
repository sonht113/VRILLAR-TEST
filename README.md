# How to run the application?

### 👉 Step-1: Crawl data race result from [formula1.com](https://www.formula1.com/) :

<p><i>1/ Go to folder Crawl-Data and open terminal </i></p>
<p><i>2/ Then, run "node crawl.js" at terminal</i></p>
<p><i>3/ Finally, run "node write-all-data.js" at terminal</i></p>
## After running all, you have two file data: 
<p><i><strong>/Crawl-Data/data-result-of-race/all-data-race.json</strong></i></p>
<p><i><strong>/Crawl-Data/data-result-of-driver/all-data-driver.json</strong></i></p>

### 👉 Step-2: Import data to mongodb
- For window:
  <p><i>1/ Download MongoDB Command Line Database Tools Download at <a>https://www.mongodb.com/try/download/database-tools</a>. Then setup the environment in "Edit the system environment variables"</i></p>
  <p><i>2/ Open cmd and run: mongoimport --jsonArray --uri mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.otcckm4.mongodb.net/[DATABASE-NAME] --collection [COLLECTION-NAME] --type [FILETYPE] --file [PATH-YOUR-FILE-DATA-JSON]</i></p> 
  

### 👉 Step-3: Run Server:

<p><i>1/ Go to folder Server and open terminal </i></p>
<p><i>2/ Run "npm install" </i></p>
<p><i>3/ Run "npm run start:dev"</i></p>

### 👉 Step-4: Run Client:

<p><i>1/ Go to folder client and open terminal </i></p>
<p><i>2/ Run "npm install" </i></p>
<p><i>3/ Run "npm start"</i></p>

### Note:
- Link database public, so no need to import data to mongodb
- Project use: Node version: v20.3.0 and Npm version: 9.7.1
- If npm "run install" in Server and Client Error, you can try running "npm install --force"
