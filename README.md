# 🎯 GoalQuest - Your Personal Goal & Habit Tracker

A modern, beautiful, and interactive goal tracking and habit management app built with HTML, CSS, and JavaScript. GoalQuest helps you set ambitious goals, track your progress, and build daily habits to achieve your dreams.

## ✨ Features

### 📱 **Home Page**
- Interactive circular goal progress indicator (solid pie chart)
- Drag/swipe interaction showing goals achieved statistics
- Enhanced "Just One Thing" motivational card
- Collapsible tabs for active goals, recent activity, and motivation
- Beautiful animations and smooth transitions

### 📋 **Goals Management**
- **Create Goals**: Multi-step wizard to set up new goals
- **Search**: Real-time search across all goals
- **Advanced Filtering**: Filter by status, priority, and category
- **Goal Details**: 
  - Full progress tracking with visual ring
  - Milestone checklist
  - Journal entries for reflections
  - Progress statistics
- **Progress Visualization**: Progress bars and completion percentages

### 🔥 **Habits Tracker**
- Daily habit tracking with streak counter
- Activity heatmap showing 14-week history
- Habit cards with daily check-off buttons
- Leaderboard to compare with friends
- Streak statistics with personal bests
- Animated flame counter 🔥

### 📈 **Analytics & Progress**
- Comprehensive statistics dashboard
- Weekly progress bar chart
- Goals overview table
- Achievement system with 6+ badges
- Personal insights and recommendations
- Completion rate tracking

### ⚙️ **Settings**
- Profile management
- Theme customization (Light/Dark modes)
- Accent color selection
- Notification preferences
- Privacy & security settings
- Goal defaults and options
- Data backup options

### 🏆 **Additional Features**
- **Data Persistence**: All data saved to browser localStorage
- **Mobile Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Achievements System**: Unlock badges and celebrate milestones
- **Notifications**: Toast notifications for milestones
- **Dark Mode Support**: Easy on the eyes
- **Export/Import**: Backup and restore your data

## 🚀 Getting Started

### Installation
No installation needed! Just clone or download the project and open `index.html` in your browser.

```bash
git clone <repository-url>
cd Pathnest
open index.html
```

Or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 File Structure

```
Pathnest/
├── index.html           # Home page
├── goals.html           # Goals list with search/filter
├── goal-detail.html     # Individual goal details
├── goal-wizard.html     # Goal creation wizard
├── habits.html          # Daily habits tracker
├── analytics.html       # Progress & analytics dashboard
├── settings.html        # User settings
├── style.css            # Shared styling (design system)
├── data-utils.js        # Data persistence utilities
└── README.md            # This file
```

## 🎨 Design System

The app uses a modern, colorful design system with:
- **Primary Colors**: Coral (#FF6B6B), Purple (#A855F7), Teal (#4ECDC4)
- **Secondary Colors**: Amber (#FFC107), Lime (#A8E063), Sky (#4ECDC4)
- **Typography**: Outfit font family
- **Spacing**: Consistent 8px-based grid
- **Animations**: Smooth transitions and entrance effects

## 💾 Data Storage

All data is stored locally in browser's localStorage with the following keys:
- `goalQuest_goals` - All goals and their details
- `goalQuest_habits` - Habit tracking data
- `goalQuest_settings` - User preferences
- `goalQuest_achievements` - Achievement status
- `goalQuest_user` - User profile information

### Using Data Utilities

The `data-utils.js` file provides helper functions:

```javascript
// Goals
getGoals()                    // Get all goals
addGoal(goal)                 // Create new goal
updateGoal(id, updates)       // Update goal
deleteGoal(id)                // Delete goal
getGoal(id)                   // Get specific goal
searchGoals(query)            // Search goals
filterGoals(filters)          // Advanced filtering

// Habits
getHabits()                   // Get all habits
addHabit(habit)               // Create new habit
updateHabit(id, updates)      // Update habit
deleteHabit(id)               // Delete habit

// Settings
getSettings()                 // Get user settings
updateSettings(updates)       // Update settings

// Achievements
getAchievements()             // Get achievements
unlockAchievement(id)         // Unlock achievement
isAchievementEarned(id)       // Check if earned

// Statistics
getGoalStats()                // Goal statistics
getHabitStats()               // Habit statistics

// Import/Export
exportData()                  // Export all data as JSON
importData(jsonData)          // Import data
clearAllData()                // Clear all data
```

## 🎯 How to Use

### Creating a Goal
1. Click the **➕** floating action button on any page
2. Follow the 5-step wizard:
   - Choose template and emoji
   - Set title and description
   - Set priority and deadline
   - Add milestones
   - Review and create

### Tracking Daily Habits
1. Go to **Habits** page
2. Click "Check Off Today" for completed habits
3. Watch your streak grow 🔥
4. See your heatmap activity

### Viewing Progress
1. Go to **Progress** page to see:
   - Overall statistics
   - Weekly progress chart
   - Achievement badges
   - Personal insights

### Managing Settings
1. Click **Settings** in sidebar
2. Update profile, theme, notifications
3. Configure privacy and security
4. Click **Save Settings**

## 🎬 Animations & Interactions

- **Entrance Animations**: Fade-in, slide-up effects
- **Hover Effects**: Cards lift, buttons scale
- **Interactive Elements**: Click progress circle to see stats
- **Smooth Transitions**: 0.3s smooth animations throughout
- **Real-time Feedback**: Toast notifications and visual feedback

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop** (1200px+): Full multi-column layouts
- **Tablet** (768px-1199px): 2-column layouts
- **Mobile** (< 768px): Single column, optimized touch targets

## 🌓 Dark Mode Support

Dark mode can be enabled in Settings → Preferences → Theme

## 🔐 Privacy & Security

- All data stored locally in browser (no server required)
- No data transmission to external services
- Privacy controls in Settings
- Data backup options
- Clear data feature for privacy

## 🏆 Achievement Badges

Unlock achievements by:
- **First Goal** 🚀 - Create your first goal
- **Speed Runner** ⚡ - Complete 3 tasks in a day
- **Week Warrior** 🔥 - Maintain 7-day streak
- **Perfect Week** 💯 - 100% completion rate
- **Goal Master** 🏆 - Complete 10 goals
- **Superstar** ⭐ - 30-day streak

## 📊 Analytics Features

Track:
- Total goals and completion rate
- Weekly productivity trends
- Habit consistency
- Achievement progress
- Personal productivity insights

## 🚀 Future Enhancements

Potential features to add:
- User authentication & cloud sync
- Social features (share goals, friend leaderboard)
- AI-powered recommendations
- Mobile app (React Native)
- Calendar integration
- Goal templates library
- Habit prescriptions
- Video tutorials and guides

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License - Feel free to use for personal or commercial projects

## 💬 Support

For issues or questions:
- Check the Help page in the app
- Review the README and inline code comments
- Submit an issue on GitHub

## 🎉 Celebrate Your Success!

Remember: Every goal achieved starts with a single step. GoalQuest is here to help you break down your dreams into achievable goals and celebrate every milestone along the way!

**Happy goal crushing! 🚀**

---

**GoalQuest** - Turn Your Dreams Into Reality
