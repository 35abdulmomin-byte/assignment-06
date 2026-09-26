# assignment-06

**assignment-06** is a modern, responsive workout library and fitness planning web application built with Next.js, React, and Tailwind CSS. It enables users to explore exercises, filter by muscle groups, create custom daily routines with a built-in 5-lift cap, and track performance metrics in real time.

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API & `localStorage`
- **Navigation:** Next.js `useSearchParams` & `usePathname`

## ✨ 5 Key Features

1. **🏋️ Workout Library with Smart Filtering & Search**
   - Search exercises by name or equipment with dynamic category filtering by target muscle groups.

2. **📋 Daily Plan Builder with 5-Lift Safety Cap**
   - Add exercises to "Today's Plan" with a strict limit of maximum 5 lifts per day ("Cap of five lifts for today") to avoid overtraining and prevent duplicate entries.

3. **📊 Dynamic Metrics Dashboard**
   - Live summary row displaying total exercises, cumulative duration (minutes), and total estimated calorie burn, updating dynamically based on the active tab (Today's Plan vs. Saved Workouts).

4. **🔀 Multi-Attribute List Re-Sorting**
   - Re-sort active workout lists dynamically by **Duration**, **Calories**, or **Rating** using an intuitive dropdown control.

5. **💾 Persistent State & Deep-Linked Tab Navigation**
   - All plan items, completed statuses, and saved workouts persist using `localStorage`, with direct tab routing via URL query parameters (`?tab=plan` and `?tab=saved`).