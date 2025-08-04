# TO-DO-List
I'm open to suggestions 
Uploaded This Small project on vercel check it out on: https://to-do-list-seven-mocha-31.vercel.app/

📝 Simple To-Do List App with Live Clock & Animated Background
📌 Overview
A lightweight To-Do List web app built using plain JavaScript (no frameworks), featuring:

✍️ Add, edit, and delete tasks

🔁 Data persistence via localStorage

⏰ Live digital clock

🌅 Animated day/night background using Lottie animations

🧠 No database, no backend — everything runs in the browser

🚀 Features
✅ To-Do List
Add tasks with a single input

Edit existing tasks via prompt

Delete tasks instantly

Tasks are stored in localStorage, so they persist across page refreshes

⏳ Clock
Real-time clock updated every second

24-hour format (HH:MM:SS)

🎨 Day/Night Animation
Automatically changes background based on current hour:

6 AM to 6 PM: Day animation

6 PM to 6 AM: Night animation

Powered by Lottie + JSON animation files

🛠️ How It Works
Data Persistence: All tasks are stored in localStorage using JSON.stringify() and reloaded on page load using JSON.parse().

Dynamic Rendering: The task list is built entirely with JavaScript DOM manipulation.

Animations: Uses lottie-web to load and render .json animations.

⚠️ Notes
Works offline — no network required after first load.

Avoid storing sensitive data — everything is stored in the user's browser.

✨ Future Ideas (Optional)
Add due dates and reminders

Drag-and-drop task sorting

Light/Dark mode toggle

Mark task as completed (with strike-through)
