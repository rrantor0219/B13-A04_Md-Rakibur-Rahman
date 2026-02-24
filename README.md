# Job Application Tracker

This is a simple Job Application Tracker web app where I can manage job applications and track their status.  
I built this project using HTML, CSS, and Vanilla JavaScript without using any libraries or frameworks.

The main goal of this project is to practice DOM manipulation, event handling, and dynamic data rendering using JavaScript.

---

## 🔗 Live Site
https://rrantor0219.github.io/B13-A04_Md-Rakibur-Rahman/

## 💻 GitHub Repository
https://github.com/rrantor0219/B13-A04_Md-Rakibur-Rahman

---

## 🚀 Features

- Dashboard showing:
  - Total jobs
  - Interview count
  - Rejected count

- Job section with tabs:
  - All
  - Interview
  - Rejected

- Each job card contains:
  - Company name
  - Position
  - Location
  - Job type
  - Salary
  - Description
  - Status badge

- Functional buttons:
  - Interview → moves job to Interview tab
  - Rejected → moves job to Rejected tab
  - Toggle between Interview and Rejected
  - Delete button removes the job completely

- Dynamic count update for:
  - Dashboard
  - Each tab

- Empty state UI when no jobs are available in a tab

- Responsive for mobile and desktop

---

## 🛠️ Technologies Used

- HTML
- CSS
- Vanilla JavaScript

---

## 📚 JavaScript Questions & Answers

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

`getElementById` selects a single element using its id.

`getElementsByClassName` selects multiple elements using a class name.

`querySelector` returns the first element that matches a CSS selector.

`querySelectorAll` returns all elements that match a CSS selector.

The main difference is how many elements they return and how we write the selector.

---

### 2. How do you create and insert a new element into the DOM?

First I create an element using `document.createElement()`.

Then I add content using `innerText` or `innerHTML`.

After that I insert it into the parent element using `appendChild()`.

In this project I used this process to generate job cards from JavaScript.

---

### 3. What is Event Bubbling? How does it work?

Event bubbling means when an event happens on a child element, it also moves to its parent element.

For example, clicking a button inside a div will trigger the button event first and then the div event.

---

### 4. What is Event Delegation and why is it useful?

Event delegation means adding a single event listener to a parent element instead of adding listeners to many child elements.

In this project, job cards are created dynamically. So I added the click event to the job list container and handled all button clicks from there.

This makes the code cleaner and more efficient.

---

### 5. Difference between preventDefault() and stopPropagation()

`preventDefault()` stops the default browser behavior.

`stopPropagation()` stops the event from moving to the parent element.

---

## 🎯 What I Learned

- How to render data dynamically using JavaScript
- How to update the UI based on user interaction
- How to use event delegation for dynamic elements
- How to manage application state using an array of objects
- How to deploy a project using GitHub Pages

---

## 📱 Responsive Design

The layout works on:

- Mobile devices
- Tablets
- Desktop screens

I used Flexbox and Grid to make the layout responsive.

---

## ✅ Project Status

Project is complete and all required functionalities are working.