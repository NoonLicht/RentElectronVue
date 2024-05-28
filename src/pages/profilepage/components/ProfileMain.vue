<template>
  <div class="profile">
    <div class="profile-avatar">
      <img
        src="https://wdorogu.ru/images/wp-content/uploads/2020/10/1493123379_myau-krasivye-foto-malenkih-kotov-10.jpg"
        alt="" class="profile-img">
      <div class="profile-name">David Grechka</div>
    </div>
    <img src="https://gas-kvas.com/grafic/uploads/posts/2023-10/1696609395_gas-kvas-com-p-kartinki-kota-malenkaya-1.jpg"
      alt="" class="profile-cover">
    <div class="profile-menu">
      <a class="profile-menu-link active">Профиль</a>
      <a class="profile-menu-link">Фото</a>
      <a class="profile-menu-link">Видео</a>
    </div>
  </div>
</template>

<style >

a {
  font-size: 14px;
}

.profile {
  position: relative;
  height: 40vh;
  min-height: 250px;
  max-height: 350px;
  z-index: 1;
  
}

.profile-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  box-shadow: 0px 0px 11px 0px rgba(34, 60, 80, 0.2);
}

.profile:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(50px);
  opacity: 0.7;
}

.profile-menu {
  position: absolute;
  bottom: 0;
  padding-left: 200px;
  background: #ffffff;
  width: 100%;
  display: flex;
  border-radius: 0 0 4px 4px;
}

.profile-menu-link {
  padding: 20px 16px;
  color: #5c5e6e;
  transition: 0.3s;
  cursor: pointer;
}

.profile-menu-link.active,
.profile-menu-link:hover {
  color: #000000;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2) inset;
  border-bottom: 3px solid #1488fa;
}

.profile-avatar {
  position: absolute;
  align-items: center;
  display: flex;
  z-index: 1;
  bottom: 16px;
  left: 24px;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #151728;
}

.profile-name {
  margin-left: 24px;
  margin-bottom: 24px;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  font-family: "DM Sans", sans-serif;
}
</style>