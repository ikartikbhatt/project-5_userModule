# Frontend User Management System

A modern, responsive user management frontend application built with vanilla HTML, CSS, and JavaScript. This application provides a complete user authentication and management system with a sleek dark-themed interface.

## 🚀 Features

- **User Authentication**
  - Secure login system
  - User registration with validation
  - Password visibility toggle
  - Responsive design for all devices

- **User Management**
  - Dashboard for authenticated users
  - Update user profile information
  - Delete user account functionality
  - Logout functionality

- **Modern UI/UX**
  - Dark theme with animated backgrounds
  - Smooth animations and transitions
  - Responsive design for mobile and desktop
  - Loading states and user feedback

## 📁 Project Structure

```
frontend/
├── index.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # User dashboard
├── update.html         # Update user details
├── delete.html         # Delete account page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── login.js        # Login functionality
│   ├── register.js     # Registration functionality
│   ├── dashboard.js    # Dashboard functionality
│   ├── update.js       # Update user functionality
│   └── delete.js       # Delete user functionality
└── readme.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Dark theme (#121212)
- **Container Background**: Dark gray (#1e1e1e)
- **Accent Color**: Teal (#03dac6)
- **Text Color**: Light gray (#f0f0f0)
- **Error Color**: Coral (#ff6f61)

### Animations
- Background pattern animation
- Fade-in effects for containers
- Hover effects on buttons
- Loading spinner animations

### Responsive Design
- Mobile-first approach
- Flexible layouts for all screen sizes
- Touch-friendly interface elements

## 🔧 Pages Overview

### 1. Login Page (`index.html`)
- Email and password input fields
- Password visibility toggle
- Link to registration page
- Form validation and error handling

### 2. Registration Page (`register.html`)
- Username, email, and password fields
- Password strength validation
- Link back to login page
- Real-time form validation

### 3. Dashboard (`dashboard.html`)
- Welcome message for logged-in users
- Navigation to update/delete features
- Logout functionality
- Clean, organized layout

### 4. Update Page (`update.html`)
- Edit user profile information
- Pre-filled form with current data
- Save changes functionality
- Validation and error handling

### 5. Delete Page (`delete.html`)
- Account deletion confirmation
- Security verification
- Final logout and cleanup

## 🛠️ JavaScript Features

### Form Handling
- Real-time validation
- Error message display
- Loading states during API calls
- Success/error feedback

### User Experience
- Smooth page transitions
- Responsive button states
- Password visibility toggle
- Form submission handling

### API Integration
- Fetch API for backend communication
- Error handling for network requests
- Token management for authentication
- Response parsing and display

## 🎯 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Backend API server running (see backend documentation)
- Local development server (optional)

### Installation
1. Clone the repository
2. Ensure the backend API is running
3. Open `index.html` in your browser
4. Or serve the frontend folder using a local server

### Local Development Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npm install -g http-server
http-server frontend -p 8000

# Using PHP
php -S localhost:8000
```

## 🔗 API Endpoints

The frontend connects to the following backend endpoints:
- `POST /api/users/login` - User authentication
- `POST /api/users/signup` - User registration
- `PUT /api/users/update` - Update user details
- `DELETE /api/users/delete` - Delete user account

## 🧪 Testing

### Manual Testing
1. Test user registration flow
2. Test login with valid/invalid credentials
3. Test password visibility toggle
4. Test responsive design on different devices
5. Test update/delete functionality

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 Customization

### Styling
- Modify colors in `css/style.css`
- Update animations and transitions
- Adjust responsive breakpoints

### Functionality
- Add new form fields in HTML files
- Update validation rules in JavaScript
- Modify API endpoints in JS files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the User Management System and follows the same license as the main project.

## 🐛 Troubleshooting

### Common Issues
- **CORS errors**: Ensure backend is running and CORS is enabled
- **404 errors**: Check API endpoints and server configuration
- **Styling issues**: Clear browser cache and refresh

### Debug Mode
- Open browser developer tools (F12)
- Check Console for JavaScript errors
- Check Network tab for API requests
- Use responsive design mode for mobile testing

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review browser console for errors
- Ensure backend API is accessible
- Test with different browsers
