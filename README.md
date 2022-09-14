## Prerequisites

- npm

## Getting Started

Copy the contents of the `.env.example` into a new `.env` file. \
Run `npm install` to install dependencies. \
Run `npm run start` to start the server and host the frontend at `http://localhost:5173`.

## Testing

Run tests with `npm run test` or `npm run test:watch`

#### Reasoning behind your technical choices

- I chose React for its maturity and stability as well as its popularity among the general dev community.
- I chose Vite only because I've been looking for a good excuse to try it out.
  - I don't have much of an opinion about it yet. It does seem quite fast and convenient, but I'd like \
    to test it out on a larger project.
- I planned on testing out linaria (zero runtime css in js) for styling, but couldn't get it to play nicely so I opted for styled-components instead.
- testing-library for tests because it caters to the idea of 'Test the behavior not the implementation'.

#### Describe how you would deploy this as a true production app on the platform of your choice:

- I'd have a CI pipeline (I've most recently been using Circle CI) in place to ensure tests/linting steps pass before any deployment.
- I'd deploy the frontend to a CDN using AWS cloudfront.
  - I'd use Cloudfront/API gateway as a reverse proxy to prevent CORS issues and prevent the need for preflight requests.
  - I'd consider other security features (I haven't used them TBH) that supposedly play nicely together, AWS Shield, Web application firewall.

#### Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project

- Lack of test coverage

  - Ideally, I'd have unit tests for each individual component.
  - Some "integration" style tests for validating behavor between multiple components.
  - E2E tests

- Observability

  - I'd consider open telemetry for metrics, logging, and tracing.
    - Vendor agnostic

- Routing

  - Ideally, the user would be able to use their browser's back button to navigate questions.
  - Components could be better organized.

- Storybook

  - Would allow for developing "generic" components in isolation of their implementation.

- State management

  - This project didn't seem complex enough to introduce any kind of state management but could possibly reduce cognative load \
    by managing state at a higher level and better organizing/breaking down components.

- Better fetch/api handling

  - I used a `useFetch` hook stolen from the internet and didn't think it really served this project well.
  - I'd consider a simpler custom api client instead.
  - I'd also consider something like react query which is gaining steam in the react world.

- Better UX

  - Completing a screener is awkward, should go back to the 'Select a screener' view.
  - I'd personally prefer the ability to see my selected answer and click a "Next" button to move on to the next question.

- Package analysis

  - Because it's always a good idea to keep an eye on bundle size

- Mono repo?

#### Link to other code you're particularly proud of

- Feel free to look at any of my repos at github.com/ktwhitehead though they are mostly half baked projects and not something I'm necessarily proud of. \
- I'm semi proud of a project I still maintain, but I won't share repo because it was created years ago and it's embarrasing how bad the code is:
  - pullpokes.com
- I've worked on/maintain other projects with a friend:
  - https://chrome.google.com/webstore/detail/smrzr/ebichgemfmpphjcdiebfmpbfflocnjoa?hl=en-US
  - smrzr.io

#### Link to your resume or public profile

- I'm still working on updating this, will email it here shortly.
