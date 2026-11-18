# Fitrah Portfolio

Company profile and blog for SOP and operations consulting, built with Next.js 16 App Router, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Run the production checks with:

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

## Project structure

- `app/` owns route entrypoints, route metadata, global styles, and generated SEO routes.
- `components/home/` contains the homepage sections; `components/` contains UI shared across routes.
- `lib/` contains server-side content access and small site utilities. Keep route rendering in `app/` and reusable presentation in components.
- `content/blog/` is the Markdown source of truth for articles. Validate content behavior with `npm test`.
- `proxy.ts` returns a real HTTP 404 for unknown blog slugs; it is needed because streamed not-found pages can otherwise return HTTP 200.
- `public/admin/` contains the static Decap CMS entrypoint and configuration; `public/` contains files served as-is.
- `next.config.ts` owns legacy URL redirects and response security headers.

When adding homepage content, put the section in `components/home/` and pass the selected language as a prop. Keep both language dictionaries in `lib/dictionary.ts` aligned by key.

## Language and navigation

The local dictionary in `lib/dictionary.ts` supports Indonesian and English. The active language is selected with `?lang=id` or `?lang=en` (Indonesian is the default). Keep the query parameter on internal links; homepage section links use `/?lang=<language>#<section>`.

Pages that read `searchParams` await the Next.js 16 Promise and opt out of instant navigation where required. Client Components using `useSearchParams()` must remain inside a `Suspense` boundary.

## Blog content

Add Markdown files to `content/blog/`. Each post should include `title` and `date` in its YAML frontmatter; `excerpt` and `category` are optional. `lib/blog.ts` normalizes frontmatter and dates before passing summaries to the UI. Use `lib/date.ts` to render dates consistently in either language.

Article bodies are rendered with `react-markdown`; the parser does not enable raw HTML. Images and code blocks have dedicated UI components in `components/`.

Set `NEXT_PUBLIC_SITE_URL` to the canonical site origin when deploying to a custom domain. It is used for canonical metadata, the sitemap, and the robots file; the default is the production Netlify URL.

## CMS and contact form

The Decap CMS entrypoint is `public/admin/index.html` and its Git Gateway configuration is `public/admin/config.yml`. Netlify Identity and Git Gateway must be enabled in the Netlify site before CMS login works. The CMS writes blog posts to `content/blog/` and uploaded media to `public/images/uploads/`. The Decap bundle is pinned with Subresource Integrity; update its integrity hash when upgrading it. The Identity widget is loaded from the official Netlify host because that endpoint does not support the cross-origin request required for SRI. The active CMS uses Netlify Identity/Git Gateway, not local GitHub OAuth variables.

The contact form uses Netlify Forms. `public/contact.html` provides the static form definition used during Netlify's build-time form detection.

## Security

The app and CMS have separate Content Security Policies, along with clickjacking, MIME-sniffing, referrer, transport, and permissions headers. Next's static/partial-prerendered output uses inline bootstrap scripts, so the app policy permits inline scripts while restricting external scripts to the same origin; the admin policy separately permits `unsafe-eval`, which Decap needs for schema validation. Next's experimental Subresource Integrity protects generated app bundles and the pinned Decap bundle. Verify the CMS login and form delivery on the deployed Netlify site because those integrations cannot be validated by the local development server.

## Deployment

Netlify builds the site with `npm run build` and the `@netlify/plugin-nextjs` adapter configured in `netlify.toml`.
