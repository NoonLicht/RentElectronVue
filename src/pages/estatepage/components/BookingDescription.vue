<template>
  <div>
    <main>
      <div class="container-prod" style="margin-top: 20px;">
        <div class="detail-panel panel">
          <div data-v-1fe942ae="" class="object-data--desk tmp-font--medium">
            <pre class="left-align" v-if="!isCollapsed">{{ text }}</pre>
            <pre class="left-align" v-else>{{ truncatedText }}</pre>
            <button class="collapsed-button" @click="toggleCollapse">{{ isCollapsed ? 'Развернуть' : 'Свернуть' }}</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true,
      text: `
Дом #3 Дубльдом с панорамными окнами и камином в посёлке бизнес-класса Greenwood!

Свободные даты и актуальные цены указаны в календаре бронирования.
Приветствую, меня зовут Юлия Cтирманoвa. Я xoзяйкa проекта les_ozero_dоm и Moscow_Aparts. Более 4 лет
получаю высокие статусы, положительные отзывы и высокие оценки на разных площадках бронирования. Буду рада
видеть вас у себя в гостях! Общаться будут мои менеджеры по работе с гостями.
Путешествия-это маленькая жизнь и новые положительные эмоции! Есть в этом что-то волшебное: уезжаешь одним
человеком, а возвращаешься совершенно другим.
Каждый уголок дома мы сделали максимально комфортным и стильным. Вы сможете перезагрузиться от городской
суеты в этом спокойном и красивом месте. Дом наполнен всем необходимым для идеального отдыха, также для
работы, если Вы хотите совместить эти 2 пункта. Из дoма и тeрраcы откpывaетcя чудесный вид.
У нас самостоятельное заселение, с помощью электронного замка/сейфа, не придется ждать и подстраивать свое
время для встречи с хозяином. Все фотографии проходят проверку и полностью соответствуют реальности.
Обязательно добавьте наше объявление в избранное, чтобы не потерять!

В доме: Спальня с кроватью 160*200 , кухня-гостиная с раскладным диваном, печь, санузел, терраса. Удобная
и стильная мебель, техника, вся необходимая посуда, чистое белье и полотенца, также мыльные
принадлежности. Колонка Алиса, ТВ, Wi-Fi
На улице: На участке 2 дома, у каждого дома своя территория, общая только парковка. Весь дом, терраса,
парковка и участок 5 соток в Вашем распоряжении.
- Можно позавтракать на просторной террасе, принять солнечные ванны.
- Приготовить вкусный обед/ужин на мангале.
-По окончанию дня, полюбоваться на звёзды в зоне кострище на удобных креслах релакс
Продукты:
В 10 минутах езды от дома есть магазины Дикси, Красное и Белое, овощные и фруктовые палатки, цветы, шары,
декор для праздника.

Доставки:
ВкусВилл, Озон, СберМаркет, Перекресток, Пятерочка, из ближайших ресторанов (суши, роллы, пицца, шашлыки).

Рядом:
— Прогулочная зона в лесу рядом с поселком
— На территории коттеджного поселка озеро с шикарным пляжем, песочным берегом, лежаками, беседками,
детские и спортивные площадки, скалодром, футбольное, волейбольное и баскетбольное поле, теннисный корт,
горка для ватрушек и санок, также каток.
— Банный SРА-комплекс Grееn Сlub Fаmily с бассейном, баней, рестораном и летним кафе.
— Конный клуб - "Грин хорс" и "Карамат"
— Питомник Хаски "Бореалис"
— Горнолыжный спуск и тюбинговые трассы Царьград в 40 минутах езды.
— В 38 минутах езды Приокско-Террасный заповедник, прогулка по лесу, музей природы.
— Древнерусский город Серпухов (40 минут) с впечатляющей коллекцией старинных монастырей и церквей, а
также богатой фабричной историей и местных аутентичных ресторанов.
— В 18 км находится монастырь Давидова Пустынь, существует уже более 500 лет. В обители собрано более 200
мощей божьих угодников, ежегодно монастырь посещает тысячи паломников.
— Святой источник в с. Талеж, тихое душевное место с часовней, купелями, беседками.

Условия:
Дом вмещает до 6 гостей, включая детей, цена указана за 2ух гостей в будний день с воскресенья по четверг.
Дополнительные гости больше 2 оплачиваются 1000₽/сутки за гостя.
Во время проживания в доме могут находится только те люди, которые внесены в бронь.
Можно с собачками, строго по согласованию с доплатой от 2000₽ за мелких собак(до 5кг) и 3500 за крупных.
Бронирование от 2х суток, в праздничные дни от 3х суток.
На одни 1 сутки, возможно, заселение по факту, если есть свободное «окно» - такие варианты отображаются в
календаре.
Ранее заселение и поздний выезд по возможности, за дополнительную плату,
Стандартные правила проживания будут направлены в день заселения
Запрещены шумные вечеринки, курение в доме
Залог 10000 рублей, возвращается в течении дня после уборки и проверки объекта
Для заказа пропуска необходимо прислать информацию об автомобиле.
Предоставляем скидки на длительный заезд, проводим акции: 3+1 в будний день, Горящие окошки и тд. следите
за нами в соцсетях
В случае отмены, предоплата не возвращается. Не позднее чем за 7 дней до даты проживания, мы можем
изменить даты.

Заезд с 17:00 (Заселение самостоятельное, по любым вопросам можно писать и звонить мне, я всегда на
связи).
выезд до 14:00
Приезжайте пожить


Теги: панорамные окна, дубльдом, хайтек, мангальная зона, спа, бассейн, баня, сауна, ресторан, каток,
озеро, пляж, река, конный клуб, барн, барнхаус, модульный дом, модом, чан, Глемпинг, в лесу, с видом на
лес, видовой, кострище, большой дом, двухэтажный дом, детская площадка, дом в аренду, дом посуточно, снять
дом, панорамные окна, домик в аренду, отдых в Подмосковье, подмосковные отели, дом в аренду Москва, аренда
дома, отдых с детьми, отдых на природе, аренда отеля, загородный отель с детьми, аренда коттеджа на
выходные, коттедж в аренду, выходные в Подмосковье, аренда дачи выходные, аренда домов отдыха, аренда
коттеджей, загородные дома аренда, аренда дачи, аренда домов области, отдых в лесу, коттедж в аренду в
лесу, аренда гостевой дом, аренда дома с баней, коттеджи аренда посуточно, аренда дома выходные, коттеджи
дома, аренда дома за городом, глэмпинг, загородный отдых, аренда дачи москва, кемпинг, дубльдом, барнхаус,
шале, дом у озера, дом в московской области, аренда дома новокаширское шоссе, дом в можайске, дом с
панорамными окнами, дом у водоема, коттедж в аренду у озера, домик у озера, дом у озера`
    };
  },
  computed: {
    truncatedText() {
      return this.text.slice(0, 1000) + '...'; // Отображаем только первые 500 символов
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style scoped>
main {
  margin-top: 20px;
  margin-bottom: 20px;
}

.indent-block {
  text-indent: -1em;
  padding-left: 1em;
  display: block;
}

.left-align {
  text-align: left;
}

pre {
  font-size: 14px;
  color: black;
}
.collapsed-button {
  border-radius: 1rem;
  border: 1px solid #709bea;
  background-color: #ffffff;
  width: 100px;
  color: #FFFFFF;
  font-size: 10px;
  text-align: center;
  justify-content: center;
  letter-spacing: 1px;
  color: black;
  padding: 10px 10px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
</style>
