# Next.js(v.14) + Jest + TypeScript + Storybook + react-hook-form + husky + prettier

Approach:
1. created the project in stack Next.js(v.14), TypeScript, Jest, Storybook, prettier, husky
2. Created public api's by Next.js API routes and connected to the app
    1. /api/login (login api )
    2. /api/posts/get (get posts list)
    3. /api/posts/post (create new post)
    4. /api/posts/delete (delete the post)
3. Authentication is implemented by cookies-next(client & server) and AuthContext 
4. src folder structure
    1. components 
        1. business (business specific i.e. LoginForm, NewPostForm, PostList, ...)
        2. common components (Unit components i.e. TextInput, Image, Modal, ... )
        3. shared components (Header, Layout)
5. full dynamic form using react-hook-form and yup validation is implemented and able to connect in controlled and un-controlled modes to unit components
6. Zustand in-memory state management
    1. persist store to keep posts in the cookie  
    2. non-persist to keep tool draft posts
7. Constant folder to keep constant variables
8. contexts folder(Auth context)
9. hooks folder keeps the extracted and created custom hooks
10. Icons folder keeps custom svg icons
11. pages folder contains the API routes and home page and create-post-tool page 
12. store folder contain persist postStore and non-persist draftToolPostStore
13. styles folder keeps the global styles
14. for accessibility I have used semantic HTML5 tags, meta head tags and tabIndex
15. types folder contains the static types 
16. utils folder keeps the utility functions


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


