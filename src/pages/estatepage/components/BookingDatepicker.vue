<template>
  <div class="datepicker-overlay" v-if="isVisible">
    <div class="datepicker">
      <div class="months">
        <div class="month" v-for="(month, index) in [currentMonth, nextMonth]" :key="index">
          <div class="month-name">{{ month.format('MMMM YYYY') }}</div>
          <div class="days">
            <div class="day" v-for="day in month.daysInMonth()" :key="day" :class="{ selected: isSelected(day) }"
              @click="selectDate(month.date(day))">
              {{ day }}
            </div>
          </div>
        </div>
      </div>
      <button @click="close">Закрыть</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      currentMonth: moment().startOf('month'),
      nextMonth: moment().add(1, 'month').startOf('month'),
      selectedDates: {
        checkInDate: null,
        checkOutDate: null
      }
    };
  },
  methods: {
    selectDate(date) {
      const selectedDate = moment(date);
      if (!this.selectedDates.checkInDate && selectedDate.isSameOrAfter(moment(), 'day')) {
        this.selectedDates.checkInDate = selectedDate;
        this.$emit('select-check-in-date', selectedDate);
      } else if (!this.selectedDates.checkOutDate && selectedDate.isAfter(this.selectedDates.checkInDate, 'day')) {
        this.selectedDates.checkOutDate = selectedDate;
        this.$emit('select-check-out-date', selectedDate);
        this.$emit('close');
      } else if (this.selectedDates.checkOutDate) {
        // Если уже выбраны обе даты, обновляем только дату заезда
        this.selectedDates.checkInDate = selectedDate;
        this.selectedDates.checkOutDate = null;
        this.$emit('select-check-in-date', selectedDate);
      }
    },
    isSelected(day) {
      return (
        this.selectedDates.checkInDate && this.selectedDates.checkInDate.date() === day ||
        this.selectedDates.checkOutDate && this.selectedDates.checkOutDate.date() === day
      );
    },
    close() {
      this.$emit('close');
    },
    isDisabled(day) {
      const today = moment().startOf('day');
      const lastDayOfCurrentMonth = moment(this.currentMonth).endOf('month').startOf('day');
      const firstDayOfNextMonth = moment(this.nextMonth).startOf('month').startOf('day');
      const currentMonthDay = moment(this.currentMonth).date(day);
      const nextMonthDay = moment(this.nextMonth).date(day);
      return (currentMonthDay.isBefore(today) && currentMonthDay.month() === moment().month()) ||
        (currentMonthDay.isSameOrAfter(lastDayOfCurrentMonth) && currentMonthDay.month() === moment().month()) ||
        (nextMonthDay.isSameOrBefore(firstDayOfNextMonth) && nextMonthDay.month() === moment().add(1, 'month').month());
    },
  }
};
</script>



<style scoped>
.datepicker-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.datepicker {
  background: white;
  font-size: 16px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.months {
  display: flex;
}

.month {
  margin: 0 10px;
}

.month-name {
  text-align: center;
  font-weight: bold;
}

.days {
  display: flex;
  flex-wrap: wrap;
}

.day {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  cursor: pointer;
}

.day.selected {
  background-color: #007bff;
  color: white;
  border-radius: 50%;
}

.day.disabled {
  color: #ccc;
  cursor: not-allowed;
}
</style>