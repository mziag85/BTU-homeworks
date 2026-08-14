# Homework 1 — Rebuild the page

You are given a screenshot of a simple web page. Write the HTML that produces it.

**Deliverable:** one file, `index.html`
**Deadline:** _(fill in)_

---

## Rules

1. **No CSS.** Everything in the screenshot is default browser styling. If your page looks
   different, your tags are wrong — not your styling.
2. Only tags from lecture 1. No images, tables or forms.
3. The text must match the screenshot exactly.
4. Indent your code so the nesting is easy to read.

---

## What you must include

**The skeleton**

- `<!DOCTYPE html>`
- `<html lang="en">`, `<head>`, `<body>`
- `<meta charset="UTF-8">` and a `<title>`. The title is: `My First Page`

**Semantic elements — use these instead of `<div>`**

- `<header>` for the name and the line under it
- `<nav>` for the menu
- `<main>` for the whole middle part of the page
- `<article>` for the "About me" block
- `<section>` for "What I am learning" and for "My plan for this month"
- `<aside>` for "Books I am reading"
- `<footer>` for the bottom block

**Lists**

- A `<ul>` for the menu links
- A `<ul>` with another `<ul>` **inside one of its items** (look at the HTML item carefully)
- An `<ol>` for the numbered plan
- A `<ul>` for the books

**Everything else**

- Headings: one `<h1>`, several `<h2>`, one `<h3>`. Do not skip levels.
- `<p>` for every paragraph
- `<hr>` twice
- `<br>` once — find the place where two lines sit inside one paragraph
- `<strong>` for the words that are important, `<em>` for the word that is emphasised
- Menu links jump to sections on the same page, so those sections need `id` attributes.
  The link and the target always come in a pair:

  ```html
  <h2 id="plan">My plan for this month</h2>
  <a href="#plan">go straight to my plan</a>
  ```

  There are **three** places where this pattern is used:
  1. the menu at the top,
  2. a link inside a paragraph in "About me",
  3. the "Back to top" link in the footer — its target is the `<header>`
- The footer link opens the email program: `mailto:`

---


## Hints

- Write the structure first (header, nav, main, footer), then fill in the text.
- Refresh the browser after every few lines instead of writing the whole file blind.
- Check your work at <https://validator.w3.org/#validate_by_input> — it finds unclosed tags
  for you.
