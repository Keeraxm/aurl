# aurl
aurl is a basic url-abriviation service hosted on [**aurl.keeraxm.com**](https://aurl.keeraxm.com) deployed using [**vercel**](https://vercel.com/)

# Usage
The api lets you abbreviate urls with a *POST* request that returns a abbreviation-key <br>
Appending the abbreviation-key to [**aurl.keeraxm.com/\<abbreviation-key here>**](https://aurl.keeraxm.com/:id) automatically redirects you to the destination url.

## api
The api lets you post and get redirect urls.

## [aurl.keeraxm.com/api/upload](https://aurl.keeraxm.com/api/upload)
Is a **POST method** that expects a JSON object in the body with "url" as the key and a url-string as the value. <br>
The return value is the string used to reference the url. <br>
**Example using google scripts:** <br>
```js
const data = {
    url: "https://google.com",
}

const options = {
    method: "post",
    contentType: 'application/json',
    payload: JSON.stringify(data),
}
const response = UrlFetchApp.fetch("https://aurl.keeraxm.com/api/upload", options);
```
**response** contains the abbreviation-key, in this case: `xtzKIGfGLaoazgfbDPnJ` <br>
Note that the url has to contain **https://** for the redirect to work properly.


## [aurl.keeraxm.com/:id](https://aurl.keeraxm.com/:id)
Simply append any valid abbreviation-key and the get request will redirect you to the corresponding url. <br>
**Example**<br>
`https://aurl.keeraxm.com/xtzKIGfGLaoazgfbDPnJ` redirects to `https://google.com`

# Cloning
To use this repo for your own projects you need to: 
- Clone this repo
- Set up a firebase/firestorage web app.
- Make a `.env` file with **"dotenv"** following this format: <br>
```js
FIREBASE_API_KEY=<<your firebase api key>>
FIREBASE_AUTH_DOMAIN=<<your auth domain>>
FIREBASE_PROJECT_ID=<<your project id>>
FIREBASE_STORAGE_BUCKET=<<your storage bucket>>
FIREBASE_MESSAGE_SENDER_ID=<<your message sender id>>
FIREBASE_APP_ID=<<your app id>>
FIREBASE_MEASUREMENT_ID=<<your measurement id>>
```
- Edit the root app.get to your website/github page.
- Deploy on any hosting service. (I used [vercel](https://vercel.com/), if you didn't then delete the `vercel.json` file)
- glhf

