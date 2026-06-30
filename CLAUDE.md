# DROS Site — Project Rules

## Content Style

- **No em dashes.** Never use `—` anywhere in page content, headings, labels, strings, or any user-visible text. Use a regular hyphen with spaces (` - `) instead.

## Shared Layout Components

- **Header and footer must be identical across every page.** Always use the shared `Navbar` component from `src/pages/Navbar.tsx` for the header, and the shared `Footer` component from `src/pages/Footer.tsx` for the footer.
- **Never inline a nav or footer.** Any new page must import and render `<Navbar />` and `<Footer />` - no exceptions.
- **To change nav or footer links/content**, edit only the shared component files (`Navbar.tsx` / `Footer.tsx`). Never edit them page-by-page.

## Adding a New Blog Post - Mandatory Checklist

Every time a new blog post is created, ALL of the following steps must be completed in the same task. Missing any step is a bug.

1. **Create the page file** - `src/pages/BlogPostXxx.tsx` using `BlogLayout` with `<Navbar />` and `<Footer />`.
2. **Register the route** - in `src/pages/main.tsx`, add an import and a `<Route path="..." element={<BlogPostXxx />} />`.
3. **Add to BlogsPage listing** - in `src/pages/BlogsPage.tsx`, add an entry to the `blogPosts` array with correct `title`, `category`, `tags`, `summary`, `slug`, `readTime`, and `badge` fields. The `category` value must exactly match one of the values in the `categories` array at the top of that file.
4. **Verify the slug matches** - the `slug` in `BlogsPage.tsx` must exactly match the `path` in `main.tsx`.
5. **Build passes** - run `npm run build` and confirm no errors.
