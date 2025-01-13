// Get the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Check for saved theme preference in localStorage
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    themeToggleButton.textContent = "🌙";  // Change to moon icon for dark theme
} else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeToggleButton.textContent = "🌞";  // Change to sun icon for light theme
}

// Function to cycle through course names for typing animation
const courseNames = ["Software Testing", "Software Development", "Python", "Java", "MERN Stack", "DevOps"];
let currentCourseIndex = 0;
const typingElement = document.getElementById("typing-text");

function changeCourseText() {
    typingElement.textContent = "Learn ";  // Clear current text
    const courseText = courseNames[currentCourseIndex];
    
    let i = 0;
    let typingInterval = setInterval(() => {
        typingElement.textContent +=  courseText[i];
        i++;
        if (i === courseText.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                // Change to next course after typing completes
                currentCourseIndex = (currentCourseIndex + 1) % courseNames.length;
                changeCourseText();  // Start typing next course
            }, 1000);  // Wait before starting next course
        }
    }, 100);
}

// Start typing animation when the page loads
changeCourseText();

// Toggle the theme when the button is clicked
themeToggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        themeToggleButton.textContent = "🌙";  // Show moon icon for dark theme
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        themeToggleButton.textContent = "🌞";  // Show sun icon for light theme
    }
});
