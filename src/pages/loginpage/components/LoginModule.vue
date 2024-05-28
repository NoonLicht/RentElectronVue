<template>
  <div>
    <div class="container-login" :class="{ 'right-panel-active': isRightPanelActive }" id="container">
      <div class="form-container sign-up-container">
        <form @submit.prevent="register">
          <h1>Создать аккаунт</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>или зарегистрируйте аккаунт с помощью почты</span>
          <input type="text" v-model="registerData.username" placeholder="Логин" />
          <input type="email" v-model="registerData.email" placeholder="Почта" />
          <input type="password" v-model="registerData.password" placeholder="Пароль" />
          <button class="loginbutton">Регистрация</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="login">
          <h1>Войти</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>или используйте логин и пароль</span>
          <input type="email" v-model="loginData.email" placeholder="Почта" />
          <input type="password" v-model="loginData.password" placeholder="Пароль" />
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
import axios from 'axios';

export default {
  data() {
    return {
      isRightPanelActive: false,
      loginData: {
        email: '',
        password: ''
      },
      registerData: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    signUp() {
      this.isRightPanelActive = true;
    },
    signIn() {
      this.isRightPanelActive = false;
    },
    async login() {
      try {
        const response = await axios.post('/api/login', this.loginData);
        // Проверяем успешность входа, возможно нужно другое свойство в ответе
        if (response.data.success) {
          // Перенаправляем пользователя на страницу профиля
          this.$router.push('/profile');
        } else {
          alert('Ошибка входа. Пожалуйста, проверьте правильность введенных данных.');
        }
      } catch (error) {
        console.error('Ошибка входа:', error);
        alert('Ошибка входа. Пожалуйста, проверьте правильность введенных данных.');
      }
    },
    async register() {
      try {
        const response = await axios.post('/api/register', this.registerData);
        // Проверяем успешность регистрации
        if (response.data.success) {
          this.$router.push('/profile');
        } else {
          alert('Ошибка регистрации. Пожалуйста, попробуйте еще раз.');
        }
      } catch (error) {
        console.error('Ошибка регистрации:', error);
        alert('Ошибка регистрации. Пожалуйста, попробуйте еще раз.');
      }
    }
  }
};
</script>

<style scoped>
@import '@/assets/css/login.css';
</style>
