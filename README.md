# Learning Portal Navigator

A React-based hierarchical course navigation system that allows users to browse through courses, modules, and sessions to access transcript URLs with ease.

## 🌟 Features

- **Hierarchical Navigation**: Course → Module/Topic → Session structure
- **Progressive Selection**: Each level only appears after the previous one is selected
- **Transcript URL Access**: Direct access to transcript URLs for each session
- **Copy Functionality**: One-click copy transcript URLs to clipboard with visual feedback
- **Responsive Design**: Modern, clean interface with smooth animations
- **Component-Based Architecture**: Modular, maintainable code structure

## 🚀 Demo

![Learning Portal Navigator Demo]

## 📋 Course Structure

The application includes the following courses:

### 1. **Build Your Own Static Website**

- Introduction to HTML
- Introduction to CSS
- CSS Box Model & Bootstrap
- Developing Layouts
- Website Integration

### 2. **Build Your Own Responsive Website**

- Responsive Web Design & Bootstrap Grid System
- CSS Selectors and Inheritance
- CSS Specificity and Cascade
- Advanced Layouts & Styling

### 3. **Build Your Own Dynamic Web Application**

- Introduction to Dynamic Web Applications
- JavaScript & Variables
- Arrays & Objects
- Fetch & Callbacks
- Forms

### 4. **Programming Foundations**

- Introduction to Python
- Data Types & Operations
- Control Structures & Loops
- Functions & Recursions
- Object-Oriented Programming
- Data Structures (Lists, Sets, Dictionaries)
- Error Handling

### 5. **Introduction to Databases**

- Database Fundamentals
- SQL Basics
- Querying & Aggregations
- Database Modeling
- Joins

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Language**: JavaScript (JSX)

## ⚡ Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/learning-portal-navigator.git
   cd learning-portal-navigator
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**

   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS**

   Update `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── main.jsx                     # Entry point
├── App.jsx                      # Root component
├── LearningPortalNavigator.jsx  # Main application component
├── courseData.js                # Course data structure
├── components/
│   ├── Header.jsx               # Header component
│   ├── CourseSelector.jsx       # Course selection dropdown
│   ├── ModuleSelector.jsx       # Module selection dropdown
│   ├── SessionSelector.jsx      # Session selection dropdown
│   ├── CopyButton.jsx           # Copy URL functionality
│   ├── TranscriptDisplay.jsx    # Transcript URL display
│   └── SelectionSummary.jsx     # Current selection summary
├── App.css                      # App-specific styles
└── index.css                    # Global styles + animations
```

## 🎯 How to Use

1. **Select a Course**: Choose from the available courses in the dropdown
2. **Choose a Module**: After selecting a course, available modules will appear
3. **Pick a Session**: Select a specific session from the chosen module
4. **Access Transcript**:
   - View the transcript URL
   - Click the **Copy** button to copy URL to clipboard
   - Click **Open Transcript** to view the transcript file

## 🔧 Customization

### Adding New Courses

Update the `courseData.js` file with your course structure:

```javascript
export const courseData = {
  "Your Course Name": {
    "Your Module Name": {
      "Your Session Title": "transcript-url.srt",
      // Add more sessions...
    },
    // Add more modules...
  },
  // Add more courses...
};
```

### Styling Customization

- Modify `tailwind.config.js` for theme changes
- Update component styles using Tailwind utility classes
- Add custom animations in `index.css`

## 🎨 Component Details

### Core Components

| Component           | Purpose                             | Props                                                                                |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| `Header`            | Application header                  | None                                                                                 |
| `CourseSelector`    | Course selection dropdown           | `selectedCourse`, `onCourseSelect`, `courses`                                        |
| `ModuleSelector`    | Module selection dropdown           | `selectedModule`, `onModuleSelect`, `modules`, `selectedCourse`                      |
| `SessionSelector`   | Session selection dropdown          | `selectedSession`, `onSessionSelect`, `sessions`, `selectedCourse`, `selectedModule` |
| `CopyButton`        | Copy URL functionality              | `textToCopy`                                                                         |
| `TranscriptDisplay` | Display transcript URL with actions | `transcriptUrl`, `onOpenTranscript`                                                  |
| `SelectionSummary`  | Show current selections             | `selectedCourse`, `selectedModule`, `selectedSession`                                |

### Features

- **Copy Functionality**: Uses `navigator.clipboard.writeText()` with visual feedback
- **Progressive Disclosure**: Components appear based on user selections
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Error Handling**: Graceful handling of missing transcript URLs

## 🐛 Troubleshooting

### Common Issues

1. **Vite Import Analysis Error**

   - Ensure all React components use `.jsx` extension
   - Remove any `styled-jsx` syntax

2. **Tailwind Styles Not Working**

   - Verify `tailwind.config.js` content paths
   - Check if Tailwind directives are in `index.css`

3. **Copy Function Not Working**
   - Ensure HTTPS or localhost environment
   - Modern browser with Clipboard API support required

## 📄 File Extensions

- **React Components**: `.jsx`
- **Data Files**: `.js`
- **Styles**: `.css`
- **Config Files**: `.js`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

---

⭐ **Star this repository if you found it helpful!**
