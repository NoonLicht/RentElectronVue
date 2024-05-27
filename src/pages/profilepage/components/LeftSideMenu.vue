<!-- src/components/LeftSideMenu.vue -->
<template>
  <div class="side-wrapper-main">
    <div class="side-title">МЕНЮ</div>
    <div class="side-menu">
      <a href="#" @click.prevent="$emit('change-view', 'ProfileTimeline')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
        Профиль
      </a>
      <a href="#">
        <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
          viewBox="0 0 24 24">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        Блог
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Поиск
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        Галерея
      </a>
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        События
      </a>
      <a href="#" @click.prevent="$emit('change-view', 'ProfileActiveRent')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        Активная аренда
      </a>
      <a href="#" @click.prevent="$emit('change-view', 'ProfileRentOut')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        Сдать в аренду
      </a>
    </div>
  </div>
</template>


<style >
.side-title {
  font-family: "DM Sans", sans-serif;
  border: 1px solid #272a3a;
  color: #5c5e6e;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
}

.side-wrapper-main {
    box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    padding: 30px;
    margin: 20px;
}

.side-menu {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  white-space: nowrap;
}

.side-menu svg {
  margin-right: 16px;
  width: 16px;
}

.side-menu a {
  text-decoration: none;
  color: #9c9cab;
  display: flex;
  align-items: center;
}

.side-menu a:hover {
  color: #000000;
}

.side-menu a:not(:last-child) {
  margin-bottom: 20px;
}
</style>