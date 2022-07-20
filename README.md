# Learning to Deploy an App using Microsoft Azure Cloud Computing Services

This is a redeployment of my unit 2 project,  Bird Collector App,  using Microsoft Azure! For this Azure Cloud module, I only had a few days to quickly learn azure from scratch using the azure tutorials. I was able to set up an Ubuntu Virtual Machine, deploy my app using the Azure app service and cosmosDB. I also implemented Azure Key Vault to hide my database connection as a secret, and create a blob storage service to store photos.

Technologies used:  EJS, JavaScript, CSS, HTML, Mongoose, MongoDB, Heroku, Azure


Screenshots:
![Screen Shot 2022-06-02 at 7 06 07 PM](https://user-images.githubusercontent.com/103963101/171768453-d42739fd-decf-4b6b-8505-ad1d550f8a0a.png)
![Screen Shot 2022-06-02 at 7 06 53 PM](https://user-images.githubusercontent.com/103963101/171768469-6d75fea1-e639-4016-a90d-34e1f8008d45.png)

How to use the app:

- The main page contains a database of birds, with their names and blurred out photos.
- The user may click on the photo to reach the show page, which will contain an enlarged photo, as well as more details about the bird. (descriptions of     birds were taken from Wikipedia)
- In the show page is an edit button.  Clicking on the edit button takes you to a screen with a checkbox that will allow you to add the bird to your         collection, as well as add some notes about the bird.  
- Once a bird is added to a collection, the displayed on the main page changes so that the bird photo is no longer blurry, as well as the word 'spotted!'     appears below the bird name
- The My Collection page can be accessed from the main page, as well as the show page.  The My Collection page contains all the birds that the user has       already spotted.

You can check out the deployed app here:  https://bird-collector-app.herokuapp.com/

Future Enhancements:
1. the ability to upload more photos of a bird
2. either a link or an embedded sound player for the bird calls
