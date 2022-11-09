# NOTES

## On the ReadMe it says:

- 'This exercise requires building a simple REST-like API with two endpoints - one for returning a list of cards and another that returns a single instance of a card.'

However, there are then 4 endpoints listed. I have just decided to concentrate on the first 2 endpoints to get them done to a level I'm happy with as i was unsure whether I was meant to take on the following 2 after that or not.

## Regarding the 2nd Endpoint

- It says on the readme as an example the response should look like so:

"availableSizes": [
{
"id": "sm",
"title": "Small"
},
{
"id": "md",
"title": "Medium"
},
{
"id": "gt",
"title": "Giant"
}
],

- I was unsure on this part, because in all of the JSON files the size is just specified as 'sm', 'md', without the full word equivalent mentioned anywhere.

- I have assumed in the sizes.json file there should be some data to use for this task, but that file appears to be the same as cards.json. So I have just left the sizes data as it is when being extrated from cards.json. Just wanted to mention to let you know I considered it, and in a real work situation would have seeked clarification.

## Anything Else

Some additional things I would do if this project was to grow further or I had more time: refactor the code so that error handling could be separated out into another file. Also separate out a router file to direct to appropriate endpoints, rather than doing this all from the server file. These were not done both because of time available, but also for a project so small with 2 endpoints it wasn't very necessary, but of course good practice to arrange code well from the start.

Also it would be useful to run another test for when the database is empty for the first endpoint (i.e. cards.JSON has no data)
