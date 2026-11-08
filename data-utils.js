/**
 * GoalQuest Data Utilities
 * Handles localStorage persistence across all pages
 */

// Default storage keys
const STORAGE_KEYS = {
  GOALS: 'goalQuest_goals',
  HABITS: 'goalQuest_habits',
  SETTINGS: 'goalQuest_settings',
  ACHIEVEMENTS: 'goalQuest_achievements',
  USER: 'goalQuest_user'
};

// Initialize default data
function initializeStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.GOALS)) {
    localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify([
      {
        id: 1,
        title: "Complete Project Demo",
        emoji: "💼",
        description: "Finish and present the project demo to stakeholders",
        category: "career",
        priority: "high",
        status: "active",
        progress: 65,
        deadline: "Dec 15, 2024"
      },
      {
        id: 2,
        title: "Fitness Challenge",
        emoji: "💪",
        description: "Exercise 5 times a week for 3 months",
        category: "fitness",
        priority: "high",
        status: "active",
        progress: 40,
        deadline: "Mar 31, 2025"
      }
    ]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS)) {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify([
      { id: 1, earned: true, earnedDate: new Date().toISOString() },
      { id: 2, earned: true, earnedDate: new Date(Date.now() - 86400000).toISOString() },
      { id: 3, earned: true, earnedDate: new Date(Date.now() - 172800000).toISOString() }
    ]));
  }

  if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify({
      theme: 'light',
      accentColor: '#FF6B6B',
      language: 'en',
      notifications: true,
      dailyReminders: true,
      achievementAlerts: true,
      weeklyReminders: false,
      reminderTime: '09:00'
    }));
  }
}

// Goal Management
function getGoals() {
  try {
    const goals = localStorage.getItem(STORAGE_KEYS.GOALS);
    return goals ? JSON.parse(goals) : [];
  } catch (e) {
    console.error('Error loading goals:', e);
    return [];
  }
}

function saveGoals(goals) {
  try {
    localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goals));
    return true;
  } catch (e) {
    console.error('Error saving goals:', e);
    return false;
  }
}

function addGoal(goal) {
  const goals = getGoals();
  goal.id = Math.max(...goals.map(g => g.id || 0), 0) + 1;
  goal.createdAt = new Date().toISOString();
  goals.push(goal);
  saveGoals(goals);
  return goal;
}

function updateGoal(id, updates) {
  const goals = getGoals();
  const index = goals.findIndex(g => g.id === id);
  if (index !== -1) {
    goals[index] = { ...goals[index], ...updates };
    saveGoals(goals);
    return goals[index];
  }
  return null;
}

function deleteGoal(id) {
  const goals = getGoals().filter(g => g.id !== id);
  saveGoals(goals);
}

function getGoal(id) {
  return getGoals().find(g => g.id === id);
}

// Habit Management
function getHabits() {
  try {
    const habits = localStorage.getItem(STORAGE_KEYS.HABITS);
    return habits ? JSON.parse(habits) : [];
  } catch (e) {
    console.error('Error loading habits:', e);
    return [];
  }
}

function saveHabits(habits) {
  try {
    localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(habits));
    return true;
  } catch (e) {
    console.error('Error saving habits:', e);
    return false;
  }
}

function addHabit(habit) {
  const habits = getHabits();
  habit.id = Math.max(...habits.map(h => h.id || 0), 0) + 1;
  habit.createdAt = new Date().toISOString();
  habit.streak = 0;
  habit.bestStreak = 0;
  habits.push(habit);
  saveHabits(habits);
  return habit;
}

function updateHabit(id, updates) {
  const habits = getHabits();
  const index = habits.findIndex(h => h.id === id);
  if (index !== -1) {
    habits[index] = { ...habits[index], ...updates };
    saveHabits(habits);
    return habits[index];
  }
  return null;
}

function deleteHabit(id) {
  const habits = getHabits().filter(h => h.id !== id);
  saveHabits(habits);
}

// Settings Management
function getSettings() {
  try {
    const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return settings ? JSON.parse(settings) : {};
  } catch (e) {
    console.error('Error loading settings:', e);
    return {};
  }
}

function updateSettings(updates) {
  const settings = getSettings();
  const updated = { ...settings, ...updates };
  localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
  return updated;
}

// Achievement Management
function getAchievements() {
  try {
    const achievements = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return achievements ? JSON.parse(achievements) : [];
  } catch (e) {
    console.error('Error loading achievements:', e);
    return [];
  }
}

function unlockAchievement(achievementId) {
  const achievements = getAchievements();
  const achievement = achievements.find(a => a.id === achievementId);

  if (achievement && !achievement.earned) {
    achievement.earned = true;
    achievement.earnedDate = new Date().toISOString();
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
    return achievement;
  }

  return achievement;
}

function isAchievementEarned(achievementId) {
  const achievements = getAchievements();
  const achievement = achievements.find(a => a.id === achievementId);
  return achievement ? achievement.earned : false;
}

// Statistics
function getGoalStats() {
  const goals = getGoals();
  return {
    total: goals.length,
    active: goals.filter(g => g.status === 'active').length,
    completed: goals.filter(g => g.status === 'completed').length,
    avgProgress: Math.round(
      goals.reduce((sum, g) => sum + (g.progress || 0), 0) / (goals.length || 1)
    )
  };
}

function getHabitStats() {
  const habits = getHabits();
  const totalStreak = habits.reduce((sum, h) => sum + (h.streak || 0), 0);
  const bestStreak = Math.max(...habits.map(h => h.bestStreak || 0), 0);

  return {
    total: habits.length,
    totalStreak,
    bestStreak,
    completionRate: habits.length > 0 ? 100 : 0
  };
}

// Search & Filter
function searchGoals(query) {
  const goals = getGoals();
  const q = query.toLowerCase();

  return goals.filter(goal =>
    goal.title.toLowerCase().includes(q) ||
    goal.description.toLowerCase().includes(q) ||
    goal.category.toLowerCase().includes(q)
  );
}

function filterGoals(filters = {}) {
  let goals = getGoals();

  if (filters.status) {
    goals = goals.filter(g => g.status === filters.status);
  }

  if (filters.priority) {
    goals = goals.filter(g => g.priority === filters.priority);
  }

  if (filters.category) {
    goals = goals.filter(g => g.category === filters.category);
  }

  if (filters.search) {
    goals = goals.filter(g =>
      g.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      g.description.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  return goals;
}

// Export data
function exportData() {
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    goals: getGoals(),
    habits: getHabits(),
    settings: getSettings(),
    achievements: getAchievements()
  };

  return JSON.stringify(data, null, 2);
}

// Import data
function importData(jsonData) {
  try {
    const data = JSON.parse(jsonData);

    if (data.goals) {
      localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(data.goals));
    }
    if (data.habits) {
      localStorage.setItem(STORAGE_KEYS.HABITS, JSON.stringify(data.habits));
    }
    if (data.settings) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.settings));
    }
    if (data.achievements) {
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(data.achievements));
    }

    return true;
  } catch (e) {
    console.error('Error importing data:', e);
    return false;
  }
}

// Clear all data
function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeStorage);
