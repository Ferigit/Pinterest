# Next.js(v.14) + Jest + TypeScript + Storybook + react-hook-form + husky + prettier

DEMO:
1. navigate to the home page (route /)
2. if the user is not logged in there is a login button at the top right to login.
3. the user can log in by passing a username and password(mock creds. i.e. username: testuser, pass: pass123 with at least 5 chars), then auth creds save to cookie and navigate to the home page for published posts
4. On home page you see the sorted posts by publish date from new to oldest date and logout button on top right
5. if you hover over each post, you can delete it
6. On the home page you have a filter search input at the top header to filter the list of posts and update url query param and header that contains home page and create nav links.
7. On the home page if you have not published any post you can click on publish your first post button or the create nav link to navigate to /create-post-tool page
8. at the create post tool page you can attach the image and fill in the form
9. you have the list of draft posts in the left sidebar you can remove before publishing
10. then you can publish the post and have it in Homp page posts list
11. finally, you can logout of the platform and clear the cookie creds and data and stores(you can customize which data to be removed).


Approach:
1. created the project in stack Next.js(v.14), TypeScript, Jest, Storybook, prettier, husky
2. Created public api's by Next.js API routes and connected to the app
    1. /api/login (login api )
    2. /api/posts/get (get posts list)
    3. /api/posts/post (create new post)
    4. /api/posts/delete (delete the post)
3. Authentication is implemented by cookies-next(client & server) and AuthContext
4. Add apiInstance to handle all https requests(GET, POST, PUT, DELETE) (path:src/utils/api.ts)
5. src folder structure
    1. components 
        1. business (business specific i.e. LoginForm, NewPostForm, PostList, ...)
        2. common components (Unit components i.e. TextInput, Image, Modal, ... )
        3. shared components (Header, Layout)
6. full dynamic form using react-hook-form and yup validation is implemented and able to connect in controlled and un-controlled modes to unit components
7. Zustand in-memory state management
    1. persist store to keep posts in the cookie  
    2. non-persist to keep tool draft posts
8. Constant folder to keep constant variables
9. contexts folder(Auth context)
10. hooks folder keeps the extracted and created custom hooks
11. Icons folder keeps custom svg icons
12. pages folder contains the API routes and home page and create-post-tool page 
13. store folder contain persist postStore and non-persist draftToolPostStore
14. styles folder keeps the global styles
15. for accessibility I have used semantic HTML5 tags, meta head tags and tabIndex
16. types folder contains the static types 
17. utils folder keeps the utility functions


## How to Use
> **Note:** Since Next.js version is v.14, so running platform should have Node.js version 18.17 or later.

[Node.js 18.17](https://nodejs.org/en) or later.


## Clone repo
```bash
git clone https://github.com/Ferigit/Pinterest.git
```

## Setup and Run Locally
```bash

1. cd root dir
2. pull main branch
3. yarn (or npm install)
4. yarn dev (or npm run dev)

```
## Run the Storybook
```bash

1. cd root dir
2. pull main branch
3. yarn (or npm install)
4. yarn storybook (or npm run storybook)

```
## Run tests
```bash

1. cd root dir
2. pull main branch
3. yarn (or npm install)
4. yarn test (or npm run test)

```
## Build

```bash
1. cd root dir
3. yarn (or npm install)
3. yarn build (or npm run build)
```


