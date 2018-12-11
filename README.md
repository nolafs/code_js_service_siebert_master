![Cardano](https://cardano.github.io/assets/images/cardano-logo.svg)
# JavaScript Coding Challenge

## Goal
* Create a web API to retrieve data from a mock database and structure it in a hierarchy before returning to the caller.

## Time
* You can spend as long or short as you desire though under an hour would should be fine for seniors or several hours for more junior.  It does not have to be complete but show you know the main ideas of modern development.  Its up to you.

## Tasks
* In the data positions belong to portfolios.  There are many positions for each portfolio.  Take a look at /src/database/data.
* Create an endpoint, /portfolios or similar, with the ability to retrieve a JSON list of all portfolios and positions from the mock database module in the starter template.  The data returned should be correctly structured so each portfolio has a property with the collection of positions related to each.
* Add the ability to retrieve only those portfolios which have the currency specified in the query.  The data should be structured as above with positions as a property on each portfolio.
* Add whatever features you think necessary to make this a production ready application but you don't need a complete implementation as long as samples of each of the key ideas that should be implemented are included.
* Fork this project to your repo, work on a branch with your full name in the name and create a pull request with the same name when you are ready for us to look at it.   If you have not done this before take a look at [this guide](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project).
  
## Notes
* Once installed and started the service is located at [http://localhost:8085](http://localhost:8085).
* You do not need to access a real database.  There is a mock database implementation in the "database" directory.  Like any database, you first use the client to ```connect```.  This returns a connection which you can use to ```load``` data.
* There is no right or wrong solution to this problem, it is designed to see how you approach the task along with your understanding and explanation of your code and decisions made.
* It is complete open book so google and stackoverflow until your hearts content.  After all that is how everyone codes today.
* Feel free to ask us questions at any time.  You will not be punished for this and in fact may get rewarded for it.  Do whatever you would do when designing and building a real world system.
* You can add any libraries or configuration you choose.
* Your favourite editor is probably the best choice so you are comfortable.
* There are no "intentional" bugs, we are not trying to catch you out, it probably really is a bug so please let us know and give us the fix.
