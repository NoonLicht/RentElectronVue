<template>
  <div>

    <div class="container-login" :class="{ 'right-panel-active': isRightPanelActive }" id="container">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Создать аккаунт</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>или зарегестрируйте аккаунт с помощью почты</span>
          <input type="text" placeholder="Логин" />
          <input type="email" placeholder="Почта" />
          <input type="password" placeholder="Пароль" />
          <button class="loginbutton">Регистрация</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>Войти</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>или используйте логин и пароль</span>
          <input type="email" placeholder="Почта" />
          <input type="password" placeholder="Пароль" />
          <a href="#">Забыли пароль?</a>
          <button class="loginbutton">Войти</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay-login">
          <div class="overlay-panel overlay-left">
            <h1>С возвращением!</h1>
            <p>Чтобы пользоваться нашим сайтом, пожалуйста, войдите в систему, указав свои личные данные</p>
            <button class="ghost" @click="signIn">Войти</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Здравствуй, друг!</h1>
            <p>Введите свои личные данные и отправляйтесь в путешествие вместе с нами</p>
            <button class="ghost" @click="signUp">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRightPanelActive: false
    };
  },
  methods: {
    signUp() {
      this.isRightPanelActive = true;
    },
    signIn() {
      this.isRightPanelActive = false;
    }
  }
};
</script>


<style scoped>
@import '@/assets/css/login.css';
</style>
