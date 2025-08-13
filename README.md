# DataBridge

A static admin data importer for Supabase. Upload Excel files and batch-insert into Supabase tables using client-side `supabase-js` and `xlsx` via CDN.

## Deploy
- Connect this repo to Vercel as a static site. No build step required.
- Entry file: `index.html`.

## Local usage
Just open `index.html` in a browser.

## Security
- This tool uses your provided Supabase URL and anon/public key. For admin operations, use a service role key only in secure environments. In the browser, never expose service role keys.


