# SQUARE ENIX - FrontEnd Developer Test

Given the following mockup:

![mockup][mockup]

The candidate will implement it using a React (with no 3rd party react components, and no CSS framework).
The resulting application bundle (the front end part) will be a single javascript file without external dependencies (except for possible assets) hostable on a CDN.

The application will be responsive with usual three sizes (desktop, tablet, mobile).

The mockup shows the desktop and landscape tablet version.
The portrait and landscape mobile version will display on top the left element of the first row. The right element of the first row will join the three elements of the second row and be displayed two per line (likewise for the third row). The forth row will be displayed three elements per line.
The mobile portrait will display all the elements (but for the fourth line) one per row (stacked) and the forth line two per line.

The page will need to be accessible as much as possible.

Upon clicking on an article a lightbox will show up displaying the full content as coming from the JSON.

The data to populate the list will come from a simple server side application (the candidate will choose the technology as the server side is outside the scope of this project) replying with a JSON object with the following schema:

```json
[
  {
    "id": 1,
    "title": "Lorem Ipsum",
    "artwork": "https://placehold.it/1920x1080",
    "content": "Lorem ipsum dolor sit amet, consectetur...",
    "alt-text": "Lorem ipsum"
  },
  {
    "id": 2,
    "title": "Lorem Ipsum",
    "artwork": "https://placehold.it/1920x1080",
    "content": "Lorem ipsum dolor sit amet, consectetur...",
    "alt-text": "Lorem ipsum"
  },
  ...
]
```

The array is flat and will be handled by the application as needed.

The server will be able to serve the built bundle (as well as a supporting HTML from a public folder exposed on `/`).

The candidate will provide tests for the components.


[mockup]: FE_Mockup.jpg
