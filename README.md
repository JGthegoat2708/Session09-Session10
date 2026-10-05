# Session 09: Building Web Pages with AI

**Author:** Jainam Golechha (25BCON1659)
**Course:** Prompt Engineering for C and C++ (BCO610A)
**Institution:** JECRC University, Jaipur
**Module:** 3 (Creating Web Pages with AI)

## 📌 Overview
This repository contains my personal portfolio website, generated using AI and rigorously audited for structural integrity and absolute truthfulness. The core philosophy of this project is **"Zero Errors, Zero Lies"**[cite: 35]. While AI was used to generate the initial HTML structure and CSS boilerplate[cite: 45], every placeholder and hallucinated claim was manually replaced or deleted to ensure that every word on the page is a truthful claim about myself[cite: 43, 44]. 

## 🏗️ Architecture & Separation of Concerns
Following the principle that "looking right is not being right", the portfolio strictly separates structure and appearance.
*   **HTML (`index.html`):** Defines the semantic structure of the page (headings, sections, lists, and links). No inline style attributes are used[cite: 45]. If CSS is removed, the page remains completely understandable[cite: 41].
*   **CSS (`assets/style.css`):** Defines the appearance, spacing, typography, and interactive hover effects.

## 🎨 The Deliberate Colour System
Instead of hardcoding color hex values throughout the stylesheet, I implemented a deliberate three-color CSS scheme (Background, Main Text, and Accent) using `:root` variables[cite: 42, 46]. 
*   **One Source of Truth:** Editing the variables in the `:root` pseudo-class instantly changes the entire page's color scheme[cite: 42].
*   **Dark Mode (Homework Extension):** Utilizing these variables, I successfully inverted the entire theme to a Dark Mode palette without having to modify individual HTML elements or CSS classes[cite: 35, 42]. 
*   **Contrast:** Ensure readable contrast across all sections[cite: 42].

## ✅ Quality Validation (Zero Errors)
Few errors is not the target; **zero errors is the target**[cite: 40]. The HTML markup was validated using the W3C Nu HTML Checker[cite: 40].
*   **Current Status:** 0 Errors, 0 Warnings[cite: 40].

## 📱 Responsive Testing
The portfolio was tested using browser Developer Tools at a narrow width of roughly `375px`[cite: 38]. 
*   **Result:** The layout is fully responsive. Content is readable, clickable, and contained without any horizontal overflow or unreadable text[cite: 38].

## 🔍 Content Audit & Peer Review
Generated does not mean ready[cite: 44]. I conducted a thorough content audit (`AUDIT-page.md`) to verify every AI-generated claim[cite: 39]. 

| Section Analyzed | Truthful? | Action Taken / Evidence |
| :--- | :--- | :--- |
| **About Section** | Yes | Replaced AI generic text with my actual B.Tech CSE details at JECRC University. |
| **Skills List** | Yes | Deleted hallucinated advanced frameworks; inserted truthful skills (Python, C++, HTML/CSS, Testing)[cite: 46]. |
| **Projects** | Yes | Replaced fake blog links with my verified Session 07 and Session 08 GitHub repository URLs[cite: 46]. |
| **Added Sections (HW)** | Yes | Added truthful `Experience` and `Education` sections to expand the portfolio[cite: 35]. |

During peer review, my partner clicked every link, verified the narrow-width rendering, ran the validator, and successfully challenged my listed skills[cite: 37]. 

### 🤔 Reflection on AI Hallucinations
When the AI generated my initial profile, it confidently invented projects (e.g., "How AI is Transforming Education Blog") and skills I did not possess. This exercise demonstrated that while AI is incredibly fast at scaffolding layout and writing CSS variables, it fundamentally lacks context about my real-world identity. A polished page can still be completely wrong. Inspecting before praising and enforcing strict content audits is essential before deploying any AI-generated code to a public space[cite: 34, 44].

## Session 10: JavaScript Integration & State Management

**Module:** 3 (Creating Web Pages with AI - Behavior)

### 📌 Overview
Building upon the structural foundation of Session 09, Session 10 introduces interactive behavior to the portfolio using pure JavaScript. This session focused on strict state management, dynamic DOM manipulation, and rigorous behavior testing against predefined specifications.

### 🏗️ The Three-File Model
This project strictly enforces the separation of concerns using the three-file model[cite: 26]:
*   **Structure (`index.html` & `quiz.html`):** Determines *what exists* on the page[cite: 26].
*   **Appearance (`style.css`):** Determines *how the page looks*[cite: 26].
*   **Behavior (`theme.js` & `quiz.js`):** Determines *what happens when someone interacts* with the page[cite: 26].

### 🌗 Feature 1: Theme Toggle Specification
I implemented a Light/Dark mode toggle switch that successfully passes all six required T-specifications[cite: 29]:
*   **T1 & T2:** The switch is visible and works repeatedly in both directions[cite: 29].
*   **T3:** The button icon actively matches the current state (Sun for dark mode, Moon for light mode)[cite: 25, 29].
*   **T4:** Because the JS manipulates `:root` variables, text remains fully readable in both modes[cite: 29].
*   **T5:** The JavaScript switches exactly one attribute (`data-color-scheme`) on the document root, rather than manually overriding inline styles[cite: 29].
*   **T6:** The console shows zero errors after six consecutive clicks[cite: 29].

### 🧠 Feature 2: Interactive Quiz & State Management
I built a 5-question interactive quiz using pure JavaScript to test course knowledge[cite: 21]. The page dynamically injects HTML based on JavaScript arrays, preventing the need for hardcoded repetitive HTML.
*   **State Management:** Poor state handling creates one-click toggles, double-counted scores, and early results[cite: 25]. To prevent this, the script tracks the quiz state using a `userAnswers` array. The score changes only once per answered question, and the final score appears only at the very end[cite: 25].

#### Quiz Testing Matrix
To ensure reliable behavior, the quiz was tested against a strict behavior matrix rather than relying on casual clicking[cite: 30]:

| # | What you do | Expected result | Actual Result |
| :--- | :--- | :--- | :--- |
| **M1** | Answer all five correctly[cite: 22, 24] | 5 out of 5[cite: 22, 24] | Pass |
| **M2** | Answer all five incorrectly[cite: 22, 24] | 0 out of 5[cite: 22, 24] | Pass |
| **M3** | Answer 3 correctly and 2 incorrectly[cite: 22, 24] | 3 out of 5[cite: 22, 24] | Pass |
| **M4** | Double-click the same correct answer[cite: 22, 24] | Score increases once[cite: 22, 24] | Pass (Overwrites array index) |
| **M5** | Check after question four[cite: 22, 24] | Final score not shown[cite: 22, 24] | Pass (Submit hidden until Q5) |
| **M6** | Reload and restart[cite: 22, 24] | Score zero; first question shown[cite: 22, 24] | Pass |

### 🐛 Debugging & The Console Rule
A page can look perfect and still do nothing[cite: 30]. During development, I encountered silent failures where buttons failed to execute scripts due to browser CORS policies (treating local `file:///` URLs as unique security origins). 

By strictly following the **Console Rule**—opening DevTools before writing JavaScript, leaving it visible, and reading errors before fixing—I was able to track down these silent failures[cite: 28]. I resolved the CORS issue by utilizing a local Live Server, and resolved a 404 `favicon.ico` fetch error by providing a blank data URI in the HTML head, maintaining the strict "Zero Errors" requirement[cite: 28]. 
> *"If you did not open the console, you did not test it."*[cite: 28]
