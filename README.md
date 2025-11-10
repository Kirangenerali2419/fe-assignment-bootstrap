# User Directory Application

A Vue 3 application that displays a list of users fetched from the Random User API with search, sort, and detailed view functionality.

## Features

- **User List**: Display users in a clean card-based layout
- **Search**: Filter users by name or email
- **Sort**: Sort users by name, email, or age (ascending/descending)
- **User Details**: Click on any user to view detailed information in a modal
- **Refresh**: Refresh the user list to get new random users
- **Responsive Design**: Works on desktop and mobile devices

## Technology Stack

- Vue 3 with Composition API
- TypeScript
- Pinia for state management
- Tailwind CSS for styling
- Axios for API calls
- Vite for build tooling

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://bitbucket.org/kiratechnologies/fe-assignment-bootstrap.git
   cd fe-assignment-bootstrap
   ```

2. **Switch to the feature branch**
   ```bash
   git checkout feature/userProfile
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## Project Structure

```
src/
├── components/
│   ├── UserCard.vue      # Individual user card component
│   ├── UserModal.vue     # User details modal
│   └── SearchBar.vue     # Search and sort controls
├── stores/
│   └── users.ts          # Pinia store for user management
├── types/
│   └── User.ts           # TypeScript interfaces
├── views/
│   ├── HomeView.vue      # Landing page
│   └── UsersView.vue     # Main users page
└── App.vue               # Root component
```

## API Integration

The application fetches data from the Random User API:
- Endpoint: `https://randomuser.me/api/?results=20`
- Returns 20 random users per request
- Supports pagination (though not implemented in this version)

## Features Implemented

### ✅ Required Features
- [x] Display list of users
- [x] User details modal/popup
- [x] Refresh functionality
- [x] Search functionality (filter by name/email)
- [x] Sort functionality (by name, email, age)

### ✅ Technical Requirements
- [x] Vue 3 with TypeScript
- [x] Responsive design
- [x] Clean, maintainable code structure
- [x] State management with Pinia

## Usage

1. **View Users**: Navigate to the Users page to see the list of users
2. **Search**: Use the search bar to filter users by name or email
3. **Sort**: Use the dropdown to sort by name, email, or age. Click the arrow button to toggle between ascending/descending order
4. **View Details**: Click on any user card to open a detailed view modal
5. **Refresh**: Click the refresh button to load new random users

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Testing

```bash
# Unit tests
npm run test:unit

# E2E tests
npm run test:e2e
```

## Development Notes

- The application uses the Composition API for better TypeScript integration
- State management is handled by Pinia for reactive data flow
- Tailwind CSS provides utility-first styling
- The design follows modern UI/UX principles with clean layouts and smooth interactions