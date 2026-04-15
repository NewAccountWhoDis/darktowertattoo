# Dark Tower Tattoo Next.js Setup

This project has been restructured from static HTML into a Next.js App Router layout.

## Local setup

1. Run `npm install`
2. Run `npm run dev`
3. Open `http://localhost:3000`

## Suggested GitHub repo flow

1. Create a new empty GitHub repository.
2. Initialize Git locally with `git init`
3. Add files with `git add .`
4. Commit with `git commit -m "Convert site to Next.js"`
5. Connect the remote with `git remote add origin <your-repo-url>`
6. Push with `git branch -M main` and `git push -u origin main`

## Netlify setup

1. In Netlify, choose **Add new site** -> **Import an existing project**
2. Connect your GitHub repo
3. Keep the build command as `npm run build`
4. Leave the publish directory blank for Next.js
5. Deploy

Netlify should detect the project as Next.js automatically from `package.json`.

## Main structure

- `app/page.js` is the homepage
- `app/artists/page.js` is the artists listing
- `app/artists/[slug]/page.js` is the shared artist profile route
- `lib/site-data.js` holds artist content and image paths
- `public/` now serves the copied media assets
