<template>
  <div>
    <div class="container-profile" style="padding-top: 65px">
      <div class="left-side">
        <div class="left-side-button" @click="leftSide = !leftSide">
          <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
            viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
        <LeftSideMenu @change-view="changeView" />
        <LeftSideFavorite />
      </div>
      <div class="main">
        <div class="main-container">
          <ProfileMain />
          <component :is="currentView" />
        </div>
      </div>
      <RightSidePeople />
    </div>
  </div>
</template>

<script>
import LeftSideMenu from './components/LeftSideMenu.vue'
import LeftSideFavorite from './components/LeftSideFavorite.vue'
import ProfileMain from './components/ProfileMain.vue'
import ProfileTimeline from './components/ProfileTimeline.vue'
import RightSidePeople from './components/RightSidePeople.vue'
import ProfileActiveRent from './components/ProfileActiveRent.vue'
import ProfileRentOut from './components/ProfileRentOut.vue'

export default {
  components: {
    LeftSideMenu,
    LeftSideFavorite,
    ProfileMain,
    ProfileTimeline,
    RightSidePeople,
    ProfileActiveRent,
    ProfileRentOut
  },
  data() {
    return {
      currentView: 'ProfileTimeline'
    };
  },
  methods: {
    changeView(view) {
      this.currentView = view;
    }
  }
};
</script>


<style scoped>
/* @import '@/assets/css/profile.css'; */

@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Source+Sans+Pro:300,400,600,700&display=swap");




.container-profile {
  background-color: #ffffff;
  display: flex;
  width: 95%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  
}

.left-side {
  width: 260px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  background-color: #ffffff;
  overflow: auto;
  flex-shrink: 0;
}

@media screen and (max-width: 930px) {
  .left-side.active {
    z-index: 4;
  }

  .left-side.active>*:not(.logo) {
    opacity: 1;
    transition: 0.3s 0.2s;
  }

  .left-side.active .left-side-button svg:first-child {
    opacity: 0;
  }

  .left-side.active .left-side-button svg:last-child {
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  .left-side:not(.active) {
    width: 56px;
    overflow: hidden;
  }

  .left-side:not(.active)>*:not(.logo):not(.left-side-button) {
    opacity: 0;
  }

  .left-side:not(.active) .logo {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    transform-origin: bottom;
    display: flex;
    align-items: center;
    margin-top: -10px;
  }
}

.right-side {
  width: 280px;
  flex-shrink: 0;
  margin-left: auto;
  overflow: auto;
  background-color: #151728;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1210px) {
  .right-side {
    position: fixed;
    right: 0;
    top: 0;
    transition: 0.3s;
    height: 100%;
    transform: translateX(280px);
    z-index: 4;
  }

  .right-side.active {
    transform: translatex(0);
  }
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #181d2f;
}

.logo {
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  height: 68px;
  line-height: 68px;
  letter-spacing: 4px;
  position: sticky;
  top: 0;
}

.main-container {
  padding: 20px;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.01);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.11);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
