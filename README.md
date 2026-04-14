# PersistUsers

PersistUsers is a React + TypeScript application that demonstrates efficient client-side data persistence using IndexedDB (Dexie.js). The app fetches user data from an external API and maintains state locally without unnecessary API calls.

---

## 🚀 Overview

PersistUsers showcases how to:
- Fetch and store API data locally
- Maintain application state across browser refreshes
- Perform CRUD operations without backend dependency
- Build responsive UI using Material UI

---

## 🧠 Project Specification

This project is built to simulate real-world frontend behavior where:
- API calls are minimized
- Data is cached locally
- UI stays consistent even after reload

---

## ⚙️ Tech Stack

- **Frontend:** React (Vite) + TypeScript  
- **UI Library:** Material UI  
- **State Management:** React Hooks  
- **Storage:** IndexedDB (Dexie.js)  
- **API:** https://randomuser.me  

---

## ✨ Features

- 🔄 Fetch 50 users from API
- 💾 Store users in IndexedDB (Dexie)
- 🔁 Persistent state after browser refresh
- ❌ Delete users without API calls
- 🔃 Refresh button to re-fetch users
- ⏳ Loading spinner while fetching data
- 📊 Dynamic count of users

---

## 📦 Project Structure
```
.
├── app
│   ├── App.css
│   └── App.tsx
├── features
│   └── users
│       ├── components
│       │   ├── MaterialUIComponents
│       │   │   ├── LoadingSpinner.tsx
│       │   │   └── MultiActionAreaCard.tsx
│       │   ├── UserCard.tsx
│       │   └── UserList.tsx
│       ├── hooks
│       │   └── useUsers.ts
│       ├── index.ts
│       ├── repository
│       │   └── user.repository.ts
│       ├── services
│       │   └── user.service.ts
│       └── types
│           └── user.types.ts
├── index.css
├── main.tsx
└── shared
    ├── api
    │   └── axios.ts
    ├── components
    │   ├── Header.tsx
    │   └── Loader.tsx
    ├── db
    │   └── dexie.ts
    ├── styles
    │   └── theme.ts
    └── utils
        └── formatUser.ts
```


---

## 🔄 Application Flow

1. On initial load:
   - Check IndexedDB
   - If data exists → load from DB
   - Else → fetch from API

2. Delete user:
   - Remove from IndexedDB
   - Update UI instantly

3. Browser refresh:
   - Load from IndexedDB (no API call)

4. Refresh button:
   - Clear DB
   - Fetch fresh 50 users

---

## 🛠️ Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/persist-users.git
cd persist-users


```
---
### 2.Install Dependencies

npm install

### 3.Run Development Server
npm run dev

---

### 🧪 Key Learning Outcomes

IndexedDB usage with Dexie.js
Managing persistent frontend state
Optimizing API usage
Clean architecture in React apps

---