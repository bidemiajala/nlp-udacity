<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="182" height="20" role="img" aria-label="Coverage:statements: 51.35%"><title>Coverage:statements: 51.35%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="182" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="129" height="20" fill="#555"/><rect x="129" width="53" height="20" fill="#e05d44"/><rect width="182" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="655" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1190">Coverage:statements</text><text x="655" y="140" transform="scale(.1)" fill="#fff" textLength="1190">Coverage:statements</text><text aria-hidden="true" x="1545" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">51.35%</text><text x="1545" y="140" transform="scale(.1)" fill="#fff" textLength="430">51.35%</text></g></svg>

# Udacity: Evaluate a news article with Natural Language Processing

## Description

This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands. 

## Setup and running the app

### Development Mode
`npm i`

`npm run build-dev`

`npm start` (Server)

### Production Mode
`npm i`

`npm run build-prod`

`npm start` (Server)

## Testing
Run `npm run test` it runs the jest tests and prints the test coverage report after.

## Offline Capabilities
This project has installed service workers. To test, stop the servers and refresh the page - the page should remain as is. 

## Note
Create a `.env` and add the following env variables given after registering on Aylien
- `API_ID=*********`
- `API_KEY=**********`