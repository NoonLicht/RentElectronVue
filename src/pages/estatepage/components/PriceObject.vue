<template>
  <div class="price-object">
    <div class="main-up">
      <div class="check-date">
        <input type="text" readonly :value="checkInDate ? formatDate(checkInDate) : 'Выберите дату заезда'"
          @click="toggleCalendar" />
        <input type="text" readonly :value="checkOutDate ? formatDate(checkOutDate) : 'Выберите дату выезда'"
          @click="toggleCalendar" />

        <BookingDatepicker v-if="showCalendar" :isVisible="showCalendar" @select-check-in-date="selectCheckInDate"
          @select-check-out-date="selectCheckOutDate" @close="showCalendar = false" />
      </div>
      <div class="guests">
        <!-- Ваш код для гостей -->
      </div>
    </div>
    <div class="main-middle">
      <div class="price-sum">
        <span v-if="checkInDate && checkOutDate">
          Вы выбрали {{ calculateNights() }} дней, сумма: {{ calculateTotalPrice() }} руб.
        </span>
      </div>
    </div>
    <div class="main-down">
      <div class="number-rent">
        <div class="booking__phone">
          <span style="font-size: 16px;">Введите Ваш телефон для бронирования</span>
          <!-- <button class="country-button" @click="toggleCountryList">{{ selectedCountry }}</button> -->
          <div class="phone__input">
            <div class="flag-wrap">
              <div class="flag-country flag-country_select flag-country-RU"></div>
            </div>
            <input type="tel" autocomplete="new-password" class="input-phone__textbox" v-model="phoneNumber"
              :placeholder="phonePlaceholder" />
          </div>
        </div>
        <div v-if="showCountryList" class="country-list">
          <div v-for="(country, index) in countries" :key="index" @click="selectCountry(country)">
            {{ country }}
          </div>
        </div>
      </div>
      <div data-v-1e76d239="" class="booking__button"><button data-v-1e76d239=""
          class="button button_green button_w-100 button_size_md"><span data-v-1e76d239=""
            class="icon-app-lightning"></span> Забронировать</button></div>
    </div>
  </div>
</template>


<script>
import BookingDatepicker from './BookingDatepicker'; // Импорт вашего компонента календаря
import moment from 'moment';

export default {
  components: {
    BookingDatepicker
  },
  data() {
    return {
      showCalendar: false,
      showCountryList: false,
      phoneNumber: '',
      phonePlaceholder: 'Введите номер сотового телефона',
      countries: ['Россия', 'США', 'Канада'], // Список стран
      checkInDate: null,
      checkOutDate: null
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('ru-RU', options);
    },
    toggleCalendar() {
      this.showCalendar = !this.showCalendar;
    },
    toggleCountryList() {
      this.showCountryList = !this.showCountryList;
    },
    selectCountry(country) {
      switch (country) {
        case 'Россия':
          this.phonePlaceholder = '+7 (___) ___-__-__';
          break;
        case 'США':
          this.phonePlaceholder = '+1 (___) ___-____';
          break;
        // Добавьте другие страны и соответствующие маски
        default:
          this.phonePlaceholder = 'Введите номер сотового телефона';
      }
      this.showCountryList = false; // Закрыть список стран после выбора
    }
    ,
    selectCheckInDate(date) {
      this.checkInDate = date;
    },
    selectCheckOutDate(date) {
      this.checkOutDate = date;
    },
    calculateNights() {
      if (!this.checkInDate || !this.checkOutDate) {
        return 0;
      }
      const checkInDate = moment(this.checkInDate);
      const checkOutDate = moment(this.checkOutDate);
      return checkOutDate.diff(checkInDate, 'days');
    },
    calculateTotalPrice() {
      const rentalPricePerDay = 7800;
      return this.calculateNights() * rentalPricePerDay;
    }
  }
};
</script>


<style scoped>
/* Ваш стиль */
.check-date {
  display: flex;
}

.main-down {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.price-object {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.price-sum {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.price-sum span {
  font-size: 16px;
}

.check-date input {
  width: 100%;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}

.booking__phone {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100% !important;
  align-items: center;
}

.phone__input {
  display: flex;
  align-items: center;
  width: 100% !important;
}

.flag-wrap {
  margin-right: 10px;
}

.input-phone__textbox {
  width: 100%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100% !important;
  font-size: 16px;
}

.price-object button {
  margin-right: 10px;
  padding: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.country-list {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.datepicker {
  position: absolute;
  z-index: 1000;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
}

.datepicker-overlay {
  position: absolute;
  width: 500px;
  height: 250px;
  /* расстояние от кнопок до календаря */
  left: 0;
}

.tmp-font--medium {
  font-size: 16px !important;
}

.datepicker {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
