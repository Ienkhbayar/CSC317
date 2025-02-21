
# CSC 317 Assignment 2 Submission

**Name:** Enkhbayar Idertsog  
**Student ID:** 923715244
**GitHub Username:** Ienkhbayar  
**Assignment Number:** 2  

## HTML Personal Portfolio Website Assignment

### Description:
The purpose of this assignment was to create a personal portfolio website using HTML. The goal was to demonstrate 
HTML5 fundamentals, proper document structure, and the use of multimedia elements, while creating a well-organized 
and accessible personal website.

Key tasks included building different sections such as the bio, education, experience, and projects, implementing 
working internal links, embedding multimedia elements (YouTube videos, GitHub projects, Google Maps), and ensuring proper file organization.

### Approach / What I Did:
I approached the assignment by first setting up the basic HTML structure with a `<header>`, `<nav>`, and `<footer>`. 
I divided my content into semantic sections like `About Me`, `Education`, `Experience`, and `Projects`, and 
used HTML5 semantic elements such as `<section>` and `<article>` for structure.

I added multimedia elements like a YouTube video and Google Maps embed, as well as iframes for GitHub previews. 
To enhance responsiveness, I used the viewport meta tag and applied percentage-based widths for images and tables.

For styling, I included inline styles for formatting, alignment, background colors, and hover effects on navigation links.

I also ensured that the site was accessible, clean, and valid by testing it with the W3C validator.

### Code Explanation:
Key parts of my HTML code include:

1. **Navigation with Hover Effect:**
   ```html
    <nav>
        <ul>
           <li><a href="#bio">About Me</a></li>
           <li><a href="#education">Education</a></li>
           <li><a href="#courses">Courses</a></li>
           <li><a href="#experience">Experience</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#video">Videos</a></li>
           <li><a href="#contacts">Contact me </a></li>
           <li><a href="#contact-form">Contact form</a></li>
        </ul>      
    </nav>
   ```
   This section provides internal links to different sections of my portfolio. 
2. I used CSS to add hover effects and make the navigation more visually engaging.

2. **Multimedia Embeds (YouTube and Google Maps):**
   ```html
   <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JPzREbuXkCM?si=y2A5EuOTzBlyCndZ"
          title="YouTube video player" style="border:none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
   </iframe>
   
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171219.5838242378!2d106.73706493509631!3d47.89176241573279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925be2b18aab%3A0xe606927864a1847f!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2sus!4v1740105072181!5m2!1sen!2sus"
          width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
   </iframe>
   ```
   These iframes embed a YouTube video and Google Maps location, adding multimedia to my portfolio.

3. **Projects Section Using Semantic `<article>`:**
   ```html
      <article>
         <h3>Personal Portfolio Website</h3>
         <p>This is the website you are currently viewing! It showcases my skills in HTML, CSS, and JavaScript. I designed it to present my personal achievements, projects, and contact details. This project helped me learn about responsive design and web accessibility.</p>
      </article>
   ```
   Each project in my portfolio is wrapped in an `<article>` element to create a clear structure, improving readability and organization.

4. **Contact Form with Formspree Integration:**
   ```html
   <form action="https://formspree.io/f/xqaenqlw" method="POST">
       <label for="name">Name:</label>
       <input type="text" id="name" name="name" required>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" required>
       <label for="subject">Subject:</label>
       <input type="text" id="subject" name="subject" required>
       <label for="message">Message:</label>
       <textarea id="message" name="message" rows="4" required></textarea>
       <button type="submit">Send Message</button>
   </form>
   ```
   This form allows users to send me messages via Formspree. It includes required fields and form validation for name, email, subject, and message inputs.
