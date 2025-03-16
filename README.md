# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [Add solution URL here](https://github.com/acheco/article-card-component)
- Live Site URL: [Add live site URL here](https://acheco.github.io/article-card-component/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to make a triangle with css using clip-path, also I learn how to validate the screen resolution using
javascript.

```css
.share-popup::after {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 16px;
  background: var(--Very-Dark-Grayish-Blue);
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}
```
```js
const isDesktop = window.matchMedia("(min-width: 769px)").matches;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
```