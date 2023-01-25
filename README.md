# SunData
## Running the site

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run format`

Iterates through relevant `.ts` and `.tsx` pages in the project and formats them according to the specifications in the `.prettierrc`. I don't feel particularly passionate about _what_ formatter is used or what formatting decisions are made (ex: single or double quotes). but I _do_ feel passionately about a consistent, clean format in my code. Provides better readability and just looks nice. :)

## Testing

While I did not write any unit tests for the behaviors on this app, it is best practice to include relevant tests for whatever functionality was added. For the sake of speed, I have ommitted their implementation. (Though doing this in production environemnts is not a good practice!)

## Typescript

I typically prefer working in Typescript, as good typing prevents unexpected errors, makes it easier for outside developers to come in and make changes, and generally creates cleaner code. While it may take a little extra time to get all the various types defined, the future benefits outweight the initial cons.

## Caching

Caching was not implemented for this site, but, any time there are service calls made, it is best to utilize caching to improve page performance. We don't want to waste time making the same call that we could have stored in the cache and given an instant response for.

## Accessibility

I personally always like to run a full page scan using [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) to ensure that I have not introduced additional accessibility violations.

## API Keys

When requiring an API key for use to call a service, it is best practice to never store it within the code itself. I would typically create a `.env.example` file that contributors could copy as a `.env` and fill out the relevant variables with their own keys. In this case, I have left my own API key for IP Base in the code for ease of testing.

## Providers / Contexts

My favorite way to deal with complex states is to use React's in-house providers/contexts. While the state management for this app was relatively minimal, I wanted to add it in to showcase its usage capabilities. A lot of older React projects utilize Redux, but I personally believe that Contexts are much cleaner and easier to read.

## Total Time

Overall, this app took me about 4-5 hours to build.
