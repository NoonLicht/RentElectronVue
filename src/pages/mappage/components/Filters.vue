<!-- src/components/PropertyFilters.vue -->
<template>
  <div class="filters">
    <div class="filter-block">
      <h3>Стоимость</h3>
      <div class="range-inputs">
        <input v-model.number="price.min" type="number" placeholder="от" min="0" data-tag="price-min" />
        <input v-model.number="price.max" type="number" placeholder="до" min="0" data-tag="price-max" />
      </div>
    </div>

    <div class="filter-block">
      <h3>Тип объекта</h3>
      <div class="inline-options" v-for="type in objectTypes" :key="type.value">
        <input type="checkbox" :id="type.value" :value="type.value" v-model="selectedObjectTypes"
          :data-tag="type.tag" />
        <label :for="type.value">{{ type.label }}</label>
      </div>
    </div>

    <div class="filter-block">
      <h3>Время до метро</h3>
      <div class="inline-options" v-for="time in metroTimes" :key="time.value">
        <input type="radio" name="metroTime" :id="time.value" :value="time.value" v-model="selectedMetroTime"
          :data-tag="time.tag" />
        <label :for="time.value">{{ time.label }}</label>
      </div>
    </div>

    <div class="filter-block">
      <h3>Отдельные спальни</h3>
      <div class="inline-options" v-for="bedroom in bedroomOptions" :key="bedroom.value">
        <input type="radio" name="bedrooms" :id="bedroom.value" :value="bedroom.value" v-model="selectedBedrooms"
          :data-tag="bedroom.tag" />
        <label :for="bedroom.value">{{ bedroom.label }}</label>
      </div>
    </div>

    <div class="filter-block">
      <h3>Спальные места</h3>
      <h4>Кровати</h4>
      <div class="inline-options" v-for="bed in bedOptions" :key="bed.value">
        <input type="radio" name="beds" :id="bed.value" :value="bed.value" v-model="selectedBeds" :data-tag="bed.tag" />
        <label :for="bed.value">{{ bed.label }}</label>
      </div>
      <h4>Двуспальные</h4>
      <div class="inline-options" v-for="doubleBed in doubleBedOptions" :key="doubleBed.value">
        <input type="radio" name="doubleBeds" :id="doubleBed.value" :value="doubleBed.value"
          v-model="selectedDoubleBeds" :data-tag="doubleBed.tag" />
        <label :for="doubleBed.value">{{ doubleBed.label }}</label>
      </div>
    </div>

    <div class="filter-block">
      <h3>Площадь</h3>
      <div class="range-inputs">
        <input v-model.number="area.min" type="number" placeholder="от" min="0" data-tag="area-min" />
        <input v-model.number="area.max" type="number" placeholder="до" min="0" data-tag="area-max" />
      </div>
    </div>

    <div class="filter-block">
      <h3>Этаж</h3>
      <div class="range-inputs">
        <input v-model.number="floor.min" type="number" placeholder="с" min="0" data-tag="floor-min" />
        <input v-model.number="floor.max" type="number" placeholder="по" min="0" data-tag="floor-max" />
      </div>
    </div>

    <div class="filter-block">
      <h3>В помещении</h3>
      <div class="inline-options" v-for="feature in displayedIndoorFeatures" :key="feature.value">
        <input type="checkbox" :id="feature.value" :value="feature.value" v-model="selectedIndoorFeatures"
          :data-tag="feature.tag" />
        <label :for="feature.value">{{ feature.label }}</label>
      </div>
      <button class="hidebutton" @click="toggleShowAllIndoor">{{ showAllIndoor ? 'Скрыть' : 'Раскрыть' }}</button>
    </div>

    <div class="filter-block">
      <h3>На территории</h3>
      <div class="inline-options" v-for="feature in outdoorFeatures" :key="feature.value">
        <input type="checkbox" :id="feature.value" :value="feature.value" v-model="selectedOutdoorFeatures"
          :data-tag="feature.tag" />
        <label :for="feature.value">{{ feature.label }}</label>
      </div>
    </div>

    <div class="filter-block">
      <h3>Доступность</h3>
      <div class="inline-options" v-for="feature in accessibilityFeatures" :key="feature.value">
        <input type="checkbox" :id="feature.value" :value="feature.value" v-model="selectedAccessibilityFeatures"
          :data-tag="feature.tag" />
        <label :for="feature.value">{{ feature.label }}</label>
      </div>
    </div>

    <div class="filter-block">
      <h3>Особенности</h3>
      <div class="inline-options" v-for="feature in specialFeatures" :key="feature.value">
        <input type="checkbox" :id="feature.value" :value="feature.value" v-model="selectedSpecialFeatures"
          :data-tag="feature.tag" />
        <label :for="feature.value">{{ feature.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyFilters',
  data() {
    return {
      price: {
        min: null,
        max: null
      },
      objectTypes: [
        { value: 'apartments', label: 'Квартиры, апартаменты', tag: 'object-type-apartments' },
        { value: 'houses', label: 'Дома, коттеджи', tag: 'object-type-houses' },
        { value: 'hotels', label: 'Отели, гостиницы', tag: 'object-type-hotels' },
        { value: 'guestHouses', label: 'Гостевые дома', tag: 'object-type-guestHouses' },
        { value: 'resorts', label: 'Базы отдыха', tag: 'object-type-resorts' },
        { value: 'hostels', label: 'Хостелы', tag: 'object-type-hostels' },
        { value: 'studios', label: 'Студии', tag: 'object-type-studios' }
      ],
      selectedObjectTypes: [],
      metroTimes: [
        { value: 'any', label: 'Неважно', tag: 'metro-time-any' },
        { value: '5', label: '5 минут', tag: 'metro-time-5' },
        { value: '10', label: '10 минут', tag: 'metro-time-10' },
        { value: '15', label: '15 минут', tag: 'metro-time-15' },
        { value: '20', label: '20 минут', tag: 'metro-time-20' },
        { value: '25', label: '25 минут', tag: 'metro-time-25' },
        { value: '30', label: '30 минут', tag: 'metro-time-30' }
      ],
      selectedMetroTime: 'any',
      bedroomOptions: [
        { value: 'bedroom-any', label: 'Неважно', tag: 'bedrooms-any' },
        { value: 'bedroom-1+', label: '1 и более', tag: 'bedrooms-1+' },
        { value: 'bedroom-2+', label: '2 и более', tag: 'bedrooms-2+' },
        { value: 'bedroom-3+', label: '3 и более', tag: 'bedrooms-3+' },
        { value: 'bedroom-4+', label: '4 и более', tag: 'bedrooms-4+' }
      ],
      selectedBedrooms: 'bedroom-any',
      bedOptions: [
        { value: 'beds-any', label: 'Неважно', tag: 'beds-any' },
        { value: 'beds-1+', label: '1 и более', tag: 'beds-1+' },
        { value: 'beds-2+', label: '2 и более', tag: 'beds-2+' },
        { value: 'beds-3+', label: '3 и более', tag: 'beds-3+' },
        { value: 'beds-4+', label: '4 и более', tag: 'beds-4+' }
      ],
      selectedBeds: 'beds-any',
      doubleBedOptions: [
        { value: 'dbeds-any', label: 'Неважно', tag: 'double-beds-any' },
        { value: 'dbeds-1+', label: '1 и более', tag: 'double-beds-1+' },
        { value: 'dbeds-2+', label: '2 и более', tag: 'double-beds-2+' },
        { value: 'dbeds-3+', label: '3 и более', tag: 'double-beds-3+' },
        { value: 'dbeds-4+', label: '4 и более', tag: 'double-beds-4+' }
      ],
      selectedDoubleBeds: 'dbeds-any',
      area: {
        min: null,
        max: null
      },
      floor: {
        min: null,
        max: null
      },
      indoorFeatures: [
        { value: 'wifi', label: 'Wi-fi', tag: 'indoor-wifi' },
        { value: 'airConditioner', label: 'Кондиционер', tag: 'indoor-airConditioner' },
        { value: 'balcony', label: 'Балкон', tag: 'indoor-balcony' },
        { value: 'washingMachine', label: 'Стиральная машина', tag: 'indoor-washingMachine' },
        { value: 'tv', label: 'Телевизор', tag: 'indoor-tv' },
        { value: 'dishes', label: 'Посуда', tag: 'indoor-dishes' },
        { value: 'microwave', label: 'Микроволновка', tag: 'indoor-microwave' },
        { value: 'hairDryer', label: 'Фен', tag: 'indoor-hairDryer' },
        { value: 'jacuzzi', label: 'Джакузи', tag: 'indoor-jacuzzi' },
        { value: 'sauna', label: 'Сауна', tag: 'indoor-sauna' },
        { value: 'fireplace', label: 'Камин', tag: 'indoor-fireplace' },
        { value: 'terrace', label: 'Терраса', tag: 'indoor-terrace' }
      ],
      showAllIndoor: false,
      selectedIndoorFeatures: [],
      outdoorFeatures: [
        { value: 'parking', label: 'Парковка', tag: 'outdoor-parking' },
        { value: 'gazebo', label: 'Беседка', tag: 'outdoor-gazebo' },
        { value: 'pool', label: 'Бассейн', tag: 'outdoor-pool' },
        { value: 'playground', label: 'Детская площадка', tag: 'outdoor-playground' },
        { value: 'sportsGround', label: 'Спортивная площадка', tag: 'outdoor-sportsGround' }
      ],
      selectedOutdoorFeatures: [],
      accessibilityFeatures: [
        { value: 'elevator', label: 'Лифт', tag: 'accessibility-elevator' },
        { value: 'disabledAccess', label: 'Доступ для инвалидов', tag: 'accessibility-disabledAccess' }
      ],
      selectedAccessibilityFeatures: [],
      specialFeatures: [
        { value: 'garden', label: 'Сад', tag: 'special-garden' },
        { value: 'seaView', label: 'Вид на море', tag: 'special-seaView' },
        { value: 'gym', label: 'Фитнес-зал', tag: 'special-gym' },
        { value: 'spa', label: 'Спа-процедуры', tag: 'special-spa' },
        { value: 'security', label: 'Охрана территории', tag: 'special-security' },
        { value: 'petsAllowed', label: 'Можно с животными', tag: 'special-petsAllowed' },
        { value: 'kitchen', label: 'Кухня', tag: 'special-kitchen' }
      ],
      selectedSpecialFeatures: []
    };
  },
  computed: {
    displayedIndoorFeatures() {
      return this.showAllIndoor ? this.indoorFeatures : this.indoorFeatures.slice(0, 6);
    }
  },
  methods: {
    toggleShowAllIndoor() {
      this.showAllIndoor = !this.showAllIndoor;
    }
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 65px;
  padding: 10px;
}

.filter-block {
  background-color: white;
  width: 100%;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 1px;
}

.filter-block h3 {
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
}

.filter-block label {
  font-size: 16px;
  display: flex;
}

.filter-block h4 {
  display: flex;
  font-size: 16px;
}

.range-inputs,
.inline-options {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.range-inputs input,
.inline-options input[type="checkbox"],
.inline-options input[type="radio"] {
  margin-right: 10px;
  width: 20px;
}

.inline-options label {
  flex-basis: 60%;
}

.range-inputs input[type="number"] {
  margin-right: 10px;
  border: 1px solid black;
  width: 50%;
}

.hidebutton {
  border-radius: 10px;
  border: 1px solid #709bea;
  background-color: #ffffff;
  width: 85px;
  color: #FFFFFF;
  font-size: 10px;
  text-align: center;
  justify-content: center;
  margin-top: 15px;
  letter-spacing: 1px;
  color: black;
  padding: 10px 10px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
</style>
