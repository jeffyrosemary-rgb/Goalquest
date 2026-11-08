/**
 * GoalQuest Gamification System
 * Points, Levels, Challenges, and Rewards!
 */

const GAMIFICATION = {
  // Points system
  POINTS: {
    GOAL_CREATED: 50,
    GOAL_COMPLETED: 200,
    MILESTONE_COMPLETED: 30,
    HABIT_LOGGED: 10,
    HABIT_STREAK_7: 100,
    HABIT_STREAK_14: 200,
    HABIT_STREAK_30: 500,
    JOURNAL_ENTRY: 5,
    ACHIEVEMENT_UNLOCKED: 150,
    DAILY_LOGIN: 20,
    PERFECT_DAY: 100
  },

  // Level thresholds
  LEVELS: [
    { level: 1, xp: 0, title: "Dreamer", emoji: "✨" },
    { level: 2, xp: 500, title: "Starter", emoji: "🚀" },
    { level: 3, xp: 1500, title: "Achiever", emoji: "🎯" },
    { level: 4, xp: 3000, title: "Champion", emoji: "👑" },
    { level: 5, xp: 5000, title: "Master", emoji: "🏆" },
    { level: 6, xp: 8000, title: "Legend", emoji: "⭐" }
  ]
};

// Get user XP/Points
function getUserXP() {
  try {
    const xp = localStorage.getItem('goalQuest_xp');
    return xp ? parseInt(xp) : 0;
  } catch {
    return 0;
  }
}

// Add XP points
function addXP(points, reason = '') {
  const currentXP = getUserXP();
  const newXP = currentXP + points;
  localStorage.setItem('goalQuest_xp', newXP.toString());

  const level = getCurrentLevel();
  const newLevel = getCurrentLevel(newXP);

  // Level up!
  if (newLevel.level > level.level) {
    showLevelUpNotification(newLevel, newXP);
  }

  showXPNotification(points, reason);
  return newXP;
}

// Get current level
function getCurrentLevel(xp = null) {
  const totalXP = xp !== null ? xp : getUserXP();
  let currentLevel = GAMIFICATION.LEVELS[0];

  for (let level of GAMIFICATION.LEVELS) {
    if (totalXP >= level.xp) {
      currentLevel = level;
    }
  }

  return currentLevel;
}

// Get XP progress to next level
function getXPProgress() {
  const currentXP = getUserXP();
  const currentLevel = getCurrentLevel();
  const nextLevelIndex = Math.min(
    currentLevel.level,
    GAMIFICATION.LEVELS.length - 1
  );
  const nextLevel = GAMIFICATION.LEVELS[nextLevelIndex];
  const prevLevel = nextLevelIndex > 0
    ? GAMIFICATION.LEVELS[nextLevelIndex - 1]
    : GAMIFICATION.LEVELS[0];

  const xpInCurrentLevel = currentXP - prevLevel.xp;
  const xpNeededForNextLevel = nextLevel.xp - prevLevel.xp;
  const progress = Math.min(
    (xpInCurrentLevel / xpNeededForNextLevel) * 100,
    100
  );

  return {
    currentXP,
    nextLevelXP: nextLevel.xp,
    xpNeeded: Math.max(0, nextLevel.xp - currentXP),
    progress,
    currentLevel,
    nextLevel
  };
}

// Daily Challenges
function getDailyChallenges() {
  const today = new Date().toDateString();
  const stored = localStorage.getItem('goalQuest_challenges');

  if (stored) {
    const data = JSON.parse(stored);
    if (data.date === today) {
      return data.challenges;
    }
  }

  // Generate new daily challenges
  const challenges = [
    {
      id: 1,
      name: "Quick Start",
      description: "Log into the app",
      reward: 20,
      completed: false,
      icon: "⚡"
    },
    {
      id: 2,
      name: "Daily Dose",
      description: "Check off a habit",
      reward: 30,
      completed: false,
      icon: "🔥"
    },
    {
      id: 3,
      name: "Goal Getter",
      description: "Update a goal's progress",
      reward: 40,
      completed: false,
      icon: "🎯"
    },
    {
      id: 4,
      name: "Journaler",
      description: "Write a journal entry",
      reward: 25,
      completed: false,
      icon: "📝"
    },
    {
      id: 5,
      name: "Perfect Day",
      description: "Complete all daily habits",
      reward: 100,
      completed: false,
      icon: "✨"
    }
  ];

  localStorage.setItem('goalQuest_challenges', JSON.stringify({
    date: today,
    challenges
  }));

  return challenges;
}

// Complete challenge
function completeChallenge(challengeId) {
  const stored = JSON.parse(localStorage.getItem('goalQuest_challenges'));
  const challenge = stored.challenges.find(c => c.id === challengeId);

  if (challenge && !challenge.completed) {
    challenge.completed = true;
    localStorage.setItem('goalQuest_challenges', JSON.stringify(stored));

    addXP(challenge.reward, `Completed challenge: ${challenge.name}`);
    showChallengeCompleteNotification(challenge);

    return challenge;
  }
}

// Get completed challenges today
function getChallengesCompletedToday() {
  const challenges = getDailyChallenges();
  return challenges.filter(c => c.completed);
}

// Get total daily reward
function getDailyReward() {
  const challenges = getChallengesCompletedToday();
  return challenges.reduce((sum, c) => sum + c.reward, 0);
}

// Show XP notification
function showXPNotification(points, reason = '') {
  const notif = document.createElement('div');
  notif.className = 'xp-notification';
  notif.innerHTML = `
    <div style="font-size: 24px; margin-bottom: 4px;">+${points} XP</div>
    ${reason ? `<div style="font-size: 12px; opacity: 0.9;">${reason}</div>` : ''}
  `;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

// Show level up notification
function showLevelUpNotification(level, xp) {
  const notif = document.createElement('div');
  notif.className = 'level-up-notification';
  notif.innerHTML = `
    <div style="font-size: 48px; margin-bottom: 8px;">🎉</div>
    <div style="font-size: 24px; font-weight: 900; margin-bottom: 4px;">LEVEL UP!</div>
    <div style="font-size: 18px; margin-bottom: 8px;">${level.emoji} ${level.title}</div>
    <div style="font-size: 14px; opacity: 0.9;">${xp.toLocaleString()} XP</div>
  `;
  document.body.appendChild(notif);

  // Sound effect
  playSound('levelup');

  setTimeout(() => notif.remove(), 5000);
}

// Show challenge complete notification
function showChallengeCompleteNotification(challenge) {
  const notif = document.createElement('div');
  notif.className = 'challenge-complete-notification';
  notif.innerHTML = `
    <div style="font-size: 32px; margin-bottom: 4px;">${challenge.icon}</div>
    <div style="font-weight: 700; margin-bottom: 4px;">${challenge.name}</div>
    <div style="font-size: 14px;">+${challenge.reward} XP</div>
  `;
  document.body.appendChild(notif);

  // Sound effect
  playSound('challenge');

  setTimeout(() => notif.remove(), 3000);
}

// Sound effects (simple beep)
function playSound(type) {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'levelup') {
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } else if (type === 'challenge') {
      oscillator.frequency.value = 600;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    }
  } catch (e) {
    console.log('Sound not available');
  }
}

// Add styles for notifications
function initGamificationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .xp-notification {
      position: fixed;
      top: 120px;
      right: 20px;
      background: linear-gradient(135deg, var(--red), #FF4757);
      color: white;
      padding: 20px 28px;
      border-radius: 50px;
      font-weight: 700;
      z-index: 9999;
      animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s forwards;
      box-shadow: 0 8px 24px rgba(220, 47, 2, 0.4);
      text-align: center;
    }

    .level-up-notification {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, var(--red), #FF4757);
      color: white;
      padding: 40px 50px;
      border-radius: 30px;
      z-index: 10000;
      animation: levelUpPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow: 0 20px 60px rgba(220, 47, 2, 0.5);
      text-align: center;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }

    .challenge-complete-notification {
      position: fixed;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #4ECDC4, #00D4AA);
      color: white;
      padding: 16px 24px;
      border-radius: 50px;
      font-weight: 600;
      z-index: 9999;
      animation: slideInUp 0.4s ease, slideOutDown 0.4s ease 2.6s forwards;
      box-shadow: 0 8px 24px rgba(78, 205, 196, 0.4);
      text-align: center;
    }

    @keyframes levelUpPop {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.1);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }

    @keyframes slideInUp {
      from {
        transform: translateY(100px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideOutDown {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(100px);
        opacity: 0;
      }
    }

    .gamification-card {
      background: linear-gradient(135deg, rgba(220, 47, 2, 0.05), rgba(255, 71, 87, 0.05));
      border: 2px solid rgba(220, 47, 2, 0.1);
      border-radius: 16px;
      padding: 20px;
    }

    .xp-bar {
      height: 8px;
      background: #E5E7EB;
      border-radius: 4px;
      overflow: hidden;
      margin: 8px 0;
    }

    .xp-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--red), #FF4757);
      border-radius: 4px;
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .challenge-badge {
      background: white;
      border: 2px solid rgba(220, 47, 2, 0.2);
      border-radius: 14px;
      padding: 12px 16px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .challenge-badge:hover {
      border-color: var(--red);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(220, 47, 2, 0.2);
    }

    .challenge-badge.completed {
      background: linear-gradient(135deg, rgba(168, 224, 99, 0.1), rgba(76, 224, 176, 0.1));
      border-color: #4A7C1F;
    }

    .streak-fire {
      animation: fireFlame 1.5s ease-in-out infinite;
      display: inline-block;
    }

    @keyframes fireFlame {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
  `;
  document.head.appendChild(style);
}

// Initialize gamification on page load
document.addEventListener('DOMContentLoaded', () => {
  initGamificationStyles();

  // Daily login XP
  const lastLogin = localStorage.getItem('goalQuest_lastLogin');
  const today = new Date().toDateString();

  if (lastLogin !== today) {
    addXP(20, 'Daily Login Bonus');
    localStorage.setItem('goalQuest_lastLogin', today);
  }
});
