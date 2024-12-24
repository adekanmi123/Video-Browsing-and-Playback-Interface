Video Browsing and Playback Interface


├── styles/
├── App.tsx
└── index.tsx



- Ensure you have Node.js and npm installed.
- TailwindCSS is used for consistent and modern styling.



 Features
- **Video Grid Layout**: Displays thumbnails, titles, and durations.
- **Search Functionality**: Filters videos by title or genre.
- **Video Details Page**: Includes a video player, title, and description.
- **Like Functionality**: Users can like a video; the state is stored locally.
- **Responsive Design**: Works seamlessly on mobile and desktop devices.

 Bonus Features
- **Load More Button**: Pagination for additional video data.
- **Accessibility**: ARIA roles and keyboard navigation.

 Technologies
- React.js with TypeScript
- TailwindCSS for styling
- LocalStorage for state management
- Mock API for video data

 Running the Project
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

 Folder Structure
The project follows a modular structure with components, contexts, hooks, and styles organized for maintainability.

```
src/
├── components/
├── contexts/
├── hooks/