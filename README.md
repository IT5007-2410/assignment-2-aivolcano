# IT5007 Tutorial Setup and Submission

* Attach shell to the container on VSCode and work on your tutorial from /home/it5007/
```
cd /home/it5007/
```
* $```git clone <your github classroom repository url>```
* Once you are done with the changes to the code base, add node_modules to .gitignore, but ensure package.json reflects all packages you installed additionally.
* Make sure you commit your changes to the repository using the command:
  - $```git commit -am "answer to T3"```

## IT5007 Tutorial Submission
 * When pushing a change to remote repository, you will be asked for your github username and password. Recently, github has replaced passwords with personal access tokens. To generate a personal access token, follow the instructions in this link: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token.
 * ```$git push```
 * If you are coding in a branch use the following command instead: ```$git push -u origin <mybranchname>```


# The requirements are implemented.
- [x] (1) Code the variable for storing traveller data.
- [x] (2) Homepage with Navigation Bar and Free Seats Display
* - [x] Navigation bar to switch between different components (Add Traveller, Display Traveller, etc.).
* - [x] Display free seats as a sub-component, with occupied seats in grey and free seats in green.
* - [x] Components should be hidden or shown based on user selection.
- [x] (3) Display the details of travellers in a table, using data stored in the local variable.
- [x] (4) Provide a form to add a new traveller, and upon form submission, update the local data structure.
- [x] (5) Provide a form to delete a traveller by ID, updating the local data structure.
- [x] (6) Display a visual representation of reserved (grey) and unreserved (green) seats, similar to an air/movie theatre seat arrangement.
- [x] (7)  Ensure that adding and removing travellers correctly updates the table and free seat display, and handle edge cases like no seats or train being full.







Run the files
compile the App.jsx into the App.js file.
```shell
npm install 
npm run compile
npm start 

```

``` shell
git status -s
git commit -am "answer to Q1"
git push origin main 

```


