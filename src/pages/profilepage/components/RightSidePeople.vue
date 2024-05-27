<template>
  <div class="right-side" :class="{ 'active': rightSide }">

    <div class="side-wrapper contacts">
      <div class="side-title">Контакты</div>
      <div class="user">
        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          class="user-img">
        <div class="username">Бла-бла-бла
          <div class="user-status"></div>
        </div>
      </div>
      <div class="user">
        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          class="user-img">
        <div class="username">Бла-бла-бла
          <div class="user-status offline"></div>
        </div>
      </div>
      <div class="user">
        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          class="user-img">
        <div class="username">Бла-бла-бла
          <div class="user-status offline"></div>
        </div>
      </div>
      <div class="user">
        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          class="user-img">
        <div class="username">Бла-бла-бла
          <div class="user-status"></div>
        </div>
      </div>
      <div class="user">
        <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"
          class="user-img">
        <div class="username">Бла-бла-бла
          <div class="user-status"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.right-side {
  width: 280px;
  flex-shrink: 0;
  margin-left: auto;
  overflow: auto;
  background-color: #ffffff !important;
  display: flex;
  flex-direction: column;
}

.side-wrapper {
    box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
    padding: 30px;
    margin: 10px;
    margin-top: 20px;
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

.user-status {
  background-color: #7fd222;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: auto;
}

.contacts .username {
  display: flex;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
}

.right-side-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border: 0;
  width: 52px;
  background-color: #ffffff;
  border-left: 1px solid #272a3a;
  color: #fff;
  display: none;
  cursor: pointer;
}

.right-side-button:before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: #1b86f8;
  border: 2px solid #1e2031;
  top: 13px;
  right: 12px;
}

.right-side-button svg {
  width: 22px;
}

@media screen and (max-width: 1210px) {
  .right-side-button {
    display: block;
  }
}

.left-side-button {
  display: none;
}

@media screen and (max-width: 930px) {
  .left-side-button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    height: 60px;
    background-color: rgba(39, 42, 58, 0.5);
    border: 0;
    padding: 0;
    line-height: 0;
    color: #fff;
    border-bottom: 1px solid #272a3a;
  }

  .left-side-button svg {
    transition: 0.2s;
    width: 24px;
  }

  .left-side-button svg:last-child {
    position: absolute;
    left: 50%;
    transform: translate(100%, -50%);
    top: 50%;
    opacity: 0;
  }
}

@media screen and (max-width: 700px) {
  .profile-avatar {
    top: -25px;
    left: 50%;
    transform: translatex(-50%);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .profile-img {
    height: 100px;
    width: 100px;
  }

  .profile-name {
    margin: 5px 0;
  }

  .profile-menu {
    padding-left: 0;
    width: 100%;
    overflow: auto;
    justify-content: center;
  }

  .profile-menu-link {
    padding: 16px;
    font-size: 15px;
  }
}

@media screen and (max-width: 480px) {

  .profile-menu-link:nth-last-child(1),
  .profile-menu-link:nth-last-child(2) {
    display: none;
  }
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