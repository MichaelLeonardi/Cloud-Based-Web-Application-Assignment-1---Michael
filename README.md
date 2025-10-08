\# Tabs Generator Project  
**Author:** Michael Leonardi  
**Student ID:** 22586733  

## 📘 Project Overview
This project was developed for the Web Development Assignment.  
It demonstrates the use of **React (Next.js)** to create a fully functional web application with multiple features, including a tab generator, light/dark mode, and persistent local storage.

The application allows users to:
- Create up to **15 tabs**
- **Rename**, **delete**, and **edit content** inside each tab
- Automatically **save all tabs and content** in localStorage
- **Generate standalone HTML code** with inline CSS that recreates the tabs website
- Switch between **light and dark modes**
- Navigate using a **header, footer, and hamburger menu**
- View an **About Page** with student details and embedded project video

### 🧩 User Interface (4 Marks)
- Navigation Bar with tab links  
- Header and Footer across all pages  
- About Page including name, student ID, and project video  

### 🎨 Themes (3 Marks)
- Fully functional **Light Mode** and **Dark Mode**  
- Theme choice is saved in **localStorage**  
- Automatically restores the selected theme when reloaded  

### 🍔 Hamburger Menu (3 Marks)
- Includes a hamburger icon on smaller screens  
- Uses **CSS Transform animations** when opened/closed  
- Provides links to Home (Tabs page), About, and other pages  

### 🗂 Tabs Page Operations (6 Marks)
- Add, rename, and delete tabs  
- Each tab has its own editable content area  
- Maximum of **15 tabs** allowed  
- Tabs and content saved automatically in **localStorage**

### ⚙️ Output Button (6 Marks)
- Generates complete **HTML code** that works when pasted into a blank `.html` file  
- All styles are **inline CSS** (no external files or classes)  
- Includes simple **JavaScript tab switching** logic  
- Video demonstration shows **1 tab**, **3 tabs**, and **5 tabs** generated successfully  

### 🌿 GitHub (3 Marks)
- Several commits made during development  
- **Three feature branches** created:
  - `feature/tabs` – Tabs generator  
  - `feature/about` – About page  
  - `feature/theme` – Dark/light mode and navigation  
- **Main branch** contains the final merged version  
- `node_modules` folder is **excluded** using `.gitignore`  
- README file is up to date and includes project summary  

### Tabs Creation & Management
```tsx
const [tabs, setTabs] = useState([]);
const addTab = () => {
  if (tabs.length >= 15) return alert("Maximum 15 tabs allowed.");
  const newTab = { name: tabName, content: "" };
  setTabs([...tabs, newTab]);
};
