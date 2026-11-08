# 🎯 GoalQuest - Quick Reference Guide

## 🗺️ Navigation Map

```
HOME (index.html)
├── 🎯 Goals (goals.html)
│   ├── Create Goal → Goal Wizard (goal-wizard.html)
│   └── View Goal → Goal Detail (goal-detail.html)
├── 🔥 Habits (habits.html)
├── 📈 Progress (analytics.html)
├── ⚙️ Settings (settings.html)
└── ➕ FAB Button → Goal Wizard (goal-wizard.html)
```

---

## 🎮 Interactive Features

### Home Page
| Feature | How to Use |
|---------|-----------|
| **Goal Progress Circle** | Click or drag across to see popup |
| **Swipe Circle** | Touch and drag left/right on mobile |
| **View Popup** | Shows "X out of Y" goals achieved |
| **Expand Tabs** | Click tab header to expand/collapse |

### Goals Page
| Feature | How to Use |
|---------|-----------|
| **Search Goals** | Type in search box, results update instantly |
| **Filter by Status** | Select from "All, Active, Completed, On Hold" |
| **Filter by Priority** | Select from "All, High, Medium, Low" |
| **Filter by Category** | Select from various categories |
| **View Goal** | Click "View" button on card |
| **Combine Filters** | Use multiple filters together |

### Goal Detail Page
| Feature | How to Use |
|---------|-----------|
| **Toggle Milestone** | Click checkbox next to milestone |
| **Add Journal Entry** | Type in input field, click "Add" |
| **Back Button** | Click ← to go back to goals list |
| **Log Progress** | Click "Log Progress" button |
| **Edit Goal** | Click "Edit" button |

### Habits Page
| Feature | How to Use |
|---------|-----------|
| **Check Off Habit** | Click "Check Off Today" button |
| **View Daily History** | See last 14 days as colored circles |
| **Toggle Individual Day** | Click circle to mark done/undone |
| **View Heatmap** | Scroll through 14-week activity view |
| **See Streak** | Check badge at top of habit card |
| **Leaderboard** | Scroll down to compare with others |

### Analytics Page
| Feature | How to Use |
|---------|-----------|
| **View Statistics** | See 4 key metrics at top |
| **Weekly Chart** | Hover over bars to see daily count |
| **Achievement Badges** | Scroll down to see badge status |
| **Read Insights** | Check purple section for tips |

### Settings Page
| Feature | How to Use |
|---------|-----------|
| **Change Theme** | Use dropdown to select Light/Dark |
| **Pick Color** | Click color circle to select |
| **Toggle Notifications** | Click toggle switch on/off |
| **Save Settings** | Click "Save Settings" button |
| **Clear Data** | Click "Clear All Data" (with confirmation) |

---

## 📝 Goal Creation Wizard Steps

### Step 1: Template & Emoji
- Select a template (Fitness, Learning, Career, Travel, Finance, Custom)
- Or pick from 8 emoji options
- **Next** to continue

### Step 2: Goal Details
- Enter goal title (required)
- Add description (why is this important?)
- Select category
- **Next** to continue

### Step 3: Priority & Deadline
- Choose priority level (High/Medium/Low)
- Set deadline date (required)
- Optional: Enter target number
- **Next** to continue

### Step 4: Milestones
- Add up to 5+ milestones
- Remove milestones with × button
- Click "+ Add Milestone" for more
- **Next** to continue

### Step 5: Review & Create
- Review all goal details
- Summary shows all info
- Click "Create Goal 🎉" to finish
- Goal saved automatically!

---

## 🔄 Data Flow

```
User Action
    ↓
JavaScript Event Handler
    ↓
Data Update (data-utils.js)
    ↓
Save to localStorage
    ↓
UI Update
    ↓
Show Result to User
```

---

## 💾 Storage Keys

**localStorage Variable Names:**
```javascript
// Goals data
localStorage.goalQuest_goals

// Habits data
localStorage.goalQuest_habits

// User settings
localStorage.goalQuest_settings

// Achievements
localStorage.goalQuest_achievements

// User profile
localStorage.goalQuest_user
```

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Coral** | #FF6B6B | Primary brand, buttons |
| **Purple** | #A855F7 | Gradients, accents |
| **Teal** | #4ECDC4 | Secondary, habits |
| **Amber** | #FFC107 | Badges, warnings |
| **Lime** | #A8E063 | Success, achievements |
| **Sky** | #4ECDC4 | Information, links |
| **Slate** | #64748B | Text, secondary |
| **White** | #FFFFFF | Cards, backgrounds |

---

## 🔐 Privacy & Data

### What's Stored Locally
- ✅ Goals and progress
- ✅ Habits and streaks
- ✅ Your settings
- ✅ Achievements
- ✅ Profile info

### What's NOT Stored
- ❌ No cloud sync (local only)
- ❌ No accounts (no login)
- ❌ No tracking
- ❌ No ads

### Clearing Data
- **Settings** → Danger Zone → "Clear All Data"
- Or manually clear browser localStorage
- Confirmation required

---

## 🎯 Common Tasks

### Add a New Goal
1. Click ➕ button
2. Complete 5-step wizard
3. Click "Create Goal"
4. View on Goals page

### Track Daily Habits
1. Go to Habits page
2. Click "Check Off Today"
3. Watch streak grow
4. Check back daily!

### Check Your Progress
1. Go to Progress page
2. See overall statistics
3. View weekly chart
4. Check achievement status

### Search for a Goal
1. Go to Goals page
2. Type in search box
3. Results filter in real-time
4. Click "View" to see details

### Customize Settings
1. Go to Settings page
2. Update profile, theme, colors
3. Configure notifications
4. Click "Save Settings"

---

## 🐛 Troubleshooting

### Data Not Saving?
- Check if localStorage is enabled in browser
- Clear browser cache and reload
- Try in private/incognito mode
- Check browser console for errors

### Animations Not Smooth?
- Close other browser tabs
- Update your browser
- Disable browser extensions
- Check system performance

### Search Not Working?
- Make sure you typed goal title
- Check if goal status is "active"
- Try clearing search field
- Refresh the page

### Features Not Appearing?
- Refresh browser (Ctrl+R or Cmd+R)
- Clear browser cache
- Check browser console for errors
- Try different browser

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl/Cmd + S** | Save settings (if on settings page) |
| **Enter** | Submit forms or add journal entries |
| **Escape** | Close popups or dialogs |
| **Tab** | Navigate between form fields |
| **↑/↓** | Navigate through lists |

---

## 📱 Mobile Tips

- Use **landscape mode** for better views
- **Tap and hold** to interact with habit dots
- **Swipe** on goal circle for interaction
- **Pull to refresh** if using in PWA mode
- Sidebar collapses automatically on mobile

---

## 🔄 Data Export/Import

### Export Your Data
```javascript
// In browser console:
const data = exportData();
console.log(data);
// Copy and save to file
```

### Import Data
```javascript
// In browser console:
importData(jsonString);
// Data restored from JSON
```

---

## 🎯 Achievement Unlock Criteria

| Badge | Requirement | Status |
|-------|-------------|--------|
| 🚀 First Goal | Create 1 goal | Unlocked on first goal |
| ⚡ Speed Runner | Complete 3 tasks in 1 day | Check daily totals |
| 🔥 Week Warrior | 7-day streak | Check habits page |
| 💯 Perfect Week | 100% completion rate | Check analytics |
| 🏆 Goal Master | Complete 10 goals | Track completions |
| ⭐ Superstar | 30-day streak | Long-term consistency |

---

## 📊 Sample Data Reference

### Built-in Goals
- Complete Project Demo (65%)
- Fitness Challenge (40%)
- Read 12 Books (25%)
- Learn Design (55%)
- Career Growth (35%)
- Travel Plans (15%)
- Save Money (70%)
- Morning Runs (100% - Completed)

### Built-in Habits
- Morning Run (7-day streak)
- Read 30 mins (3-day streak)
- Meditation (14-day streak)
- Code Daily (5-day streak)

### Built-in Achievements
- Unlocked: 🚀 ⚡ 🔥
- Locked: 💯 🏆 ⭐

---

## 🚀 Pro Tips

1. **Set Milestones** - Break goals into smaller chunks
2. **Daily Check-in** - Check habits every day for momentum
3. **Review Weekly** - Check Progress page for insights
4. **Update Goals** - Edit progress regularly
5. **Write Journal** - Reflect on your journey
6. **Celebrate Wins** - Acknowledge achievements
7. **Adjust Deadlines** - Realistic timelines matter
8. **Create Streaks** - Build habits systematically

---

## 🎓 Learning Resources

- **README.md** - Full documentation
- **BUILD_SUMMARY.md** - Complete project overview
- **Inline Comments** - Check HTML/JS files for detailed notes
- **data-utils.js** - API reference for developers

---

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 📞 Getting Help

1. **Check README.md** - Most questions answered there
2. **Read QUICK_REFERENCE.md** - This guide!
3. **Review Sample Data** - See how features work
4. **Check Browser Console** - Look for error messages
5. **Try Clearing Cache** - Fixes many issues

---

## 🎉 You're All Set!

You now have a complete understanding of GoalQuest!

**Ready to start tracking goals? Open `index.html` now!** 🚀

---

**Happy goal crushing! 💪**
