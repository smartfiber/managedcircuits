# Managed Circuits Website

A static, Cloudflare Pages-ready website. The website files live at the repository root so the project can be uploaded directly to GitHub without navigating into a `public` folder.

## Before publishing

1. Open `assets/js/site.js`.
2. Replace `REPLACE-WITH-YOUR-EMAIL@example.com` with the correct sales or contact email.
3. Confirm the production domain. This starter currently uses `https://www.managedcircuits.com` in canonical tags, `robots.txt`, and `sitemap.xml`.
4. Replace or refine the logo files in `assets/images/` if you have official brand assets.
5. Have counsel review `privacy.html` before enabling analytics or tracking.

## Upload through GitHub.com

1. Extract the ZIP.
2. Open the extracted `managed-circuits-github` folder.
3. Select **all files and folders inside it**.
4. On the empty GitHub repository page, click **uploading an existing file**.
5. Drag the selected contents onto GitHub and commit the changes.

The top level should show:

- `index.html`
- `404.html`
- `_headers`
- `_redirects`
- `assets/`
- `industries/`
- `services/`
- `resources/`
- `README.md`

## Cloudflare Pages

Connect the GitHub repository in **Workers & Pages → Create → Pages → Connect to Git**.

Use these settings:

- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`

If Cloudflare does not accept `/`, leave the output directory blank. The static files are already in the repository root.

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```text
.
├── index.html
├── about.html
├── contact.html
├── privacy.html
├── 404.html
├── _headers
├── _redirects
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/styles.css
│   ├── js/site.js
│   └── images/
├── services/index.html
├── industries/
└── resources/
```
