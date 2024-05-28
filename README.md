# airbnb

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Создание таблиц

Пользователи
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    date_registered DATE,
    avatar_src VARCHAR(255)
);
```

Контент пользователей
```
CREATE TABLE user_content (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES users(id),
    id_post INT,
    date_add_post DATE,
    text TEXT,
    image_src VARCHAR(255),
    json_src VARCHAR(255),
    tag VARCHAR(255)
);
```

Отзывы
```
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES users(id),
    text TEXT,
    rating INT,
    rating_date DATE
);
```

Недвижимость основа
```
CREATE TABLE real_estate_base (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10, 2),
    country VARCHAR(255),
    city VARCHAR(255),
    address VARCHAR(255),
    coordinates VARCHAR(255),
    id_reviews INT REFERENCES reviews(id),
    json_src VARCHAR(255)
);
```

Описание недвижимости
```
CREATE TABLE real_estate_description (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    description TEXT
);
```

Особенности дома
```
CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
```

Недвижимость особенности дома
```
CREATE TABLE real_estate_house_features (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    id_feature INT REFERENCES features(id)
);
```

Недвижимость особенности на территории
```
CREATE TABLE real_estate_territory_features (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    id_feature INT REFERENCES features(id)
);
```

Недвижимость фильтры
```
CREATE TABLE real_estate_filters (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    name_house VARCHAR(255),
    type_house VARCHAR(255),
    number_beds_single INT,
    number_beds_double INT,
    number_bedrooms INT,
    area DECIMAL(10, 2),
    floor INT
);
```


Добавление данных
```
-- Добавление данных о пользователе
INSERT INTO users (full_name, username, password, date_registered, avatar_src)
VALUES 
    ('Иван Петров', 'ivan_petrov', 'securepass123', '2024-05-30', 'avatars/ivan_petrov.jpg'),
    ('Екатерина Сидорова', 'ekaterina_s', 'pass123', '2024-05-31', 'avatars/ekaterina_s.jpg'),
    ('Алексей Иванов', 'aleksey_i', 'password', '2024-06-01', 'avatars/aleksey_i.jpg'),
    ('Мария Новикова', 'maria_n', 'qwerty', '2024-06-02', 'avatars/maria_n.jpg'),
    ('Дмитрий Смирнов', 'dmitriy_s', '123456', '2024-06-03', 'avatars/dmitriy_s.jpg'),
    ('Анна Кузнецова', 'anna_k', 'password123', '2024-06-04', 'avatars/anna_k.jpg'),
    ('Сергей Попов', 'sergey_p', 'passpass', '2024-06-05', 'avatars/sergey_p.jpg'),
    ('Ольга Морозова', 'olga_m', 'password1234', '2024-06-06', 'avatars/olga_m.jpg'),
    ('Петр Федоров', 'petr_f', 'pass1234', '2024-06-07', 'avatars/petr_f.jpg'),
    ('Наталья Васильева', 'natalya_v', '123pass', '2024-06-08', 'avatars/natalya_v.jpg');

-- Добавление контента пользователя
INSERT INTO user_content (id_user, id_post, date_add_post, text, image_src, json_src, tag)
VALUES 
    (1, 1, '2024-05-30', 'Прекрасный коттедж в Москве', 'images/cottage.jpg', 'data/cottage.json', 'отдых'),
    (2, 2, '2024-05-31', 'Роскошный дом у моря', 'images/luxury_house.jpg', 'data/luxury_house.json', 'путешествие'),
    (3, 3, '2024-06-01', 'Уютная квартира в центре', 'images/apartment.jpg', 'data/apartment.json', 'путешествие'),
    (4, 4, '2024-06-02', 'Просторный дом с бассейном', 'images/pool_house.jpg', 'data/pool_house.json', 'отдых'),
    (5, 5, '2024-06-03', 'Модный лофт в историческом районе', 'images/loft.jpg', 'data/loft.json', 'путешествие'),
    (6, 6, '2024-06-04', 'Уединенный коттедж в лесу', 'images/forest_cottage.jpg', 'data/forest_cottage.json', 'отдых'),
    (7, 7, '2024-06-05', 'Современная квартира с видом на город', 'images/city_view_apartment.jpg', 'data/city_view_apartment.json', 'путешествие'),
    (8, 8, '2024-06-06', 'Домик на берегу реки', 'images/river_house.jpg', 'data/river_house.json', 'отдых'),
    (9, 9, '2024-06-07', 'Старинная усадьба с садом', 'images/manor.jpg', 'data/manor.json', 'путешествие'),
    (10, 10, '2024-06-08', 'Комфортабельная квартира с городским видом', 'images/city_apartment.jpg', 'data/city_apartment.json', 'путешествие');

-- Добавление отзывов
INSERT INTO reviews (id_user, text, rating, rating_date)
VALUES 
    (1, 'Отличное место для отдыха!', 5, '2024-05-30'),
    (2, 'Невероятно красивый дом с шикарным видом на море!', 5, '2024-05-31'),
    (3, 'Уютная и комфортная квартира, отличное местоположение!', 4, '2024-06-01'),
    (4, 'Отличное место для семейного отдыха!', 5, '2024-06-02'),
    (5, 'Интересный и стильный лофт, удобное расположение.', 4, '2024-06-03'),
    (6, 'Прекрасное место для уединенного отдыха в природе!', 5, '2024-06-04'),
    (7, 'Современная квартира с прекрасным видом на город, рекомендую!', 4, '2024-06-05'),
    (8, 'Отличное место для отдыха на берегу реки!', 5, '2024-06-06'),
    (9, 'Историческая усадьба с прекрасным садом - настоящая находка!', 5, '2024-06-07'),
    (10, 'Удобная квартира с отличным видом, всем довольны!', 4, '2024-06-08');

-- Добавление остальных данных
INSERT INTO real_estate_base (price, country, city, address, coordinates, id_reviews, json_src)
VALUES 
    (700000, 'Россия', 'Москва', 'пр. Проспектов, 20', '55.7558° N, 37.6173° E', 1, 'data/cottage.json'),
    (850000, 'Россия', 'Москва', 'ул. Центральная, 5', '55.7558° N, 37.6173° E', 2, 'data/luxury_house.json'),
    (550000, 'Россия', 'Москва', 'пер. Уютный, 8', '55.7558° N, 37.6173° E', 3, 'data/apartment.json'),
    (900000, 'Россия', 'Москва', 'ш. Просторное, 15', '55.7558° N, 37.6173° E', 4, 'data/pool_house.json'),
    (600000, 'Россия', 'Москва', 'пр-т. Живописный, 30', '55.7558° N, 37.6173° E', 5, 'data/loft.json'),
    (800000, 'Россия', 'Москва', 'ул. Лесная, 12', '55.7558° N, 37.6173° E', 6, 'data/forest_cottage.json'),
    (750000, 'Россия', 'Москва', 'пер. Зеленый, 25', '55.7558° N, 37.6173° E', 7, 'data/city_view_apartment.json'),
    (950000, 'Россия', 'Москва', 'пр. Речной, 18', '55.7558° N, 37.6173° E', 8, 'data/river_house.json'),
    (850000, 'Россия', 'Москва', 'ул. Парковая, 3', '55.7558° N, 37.6173° E', 9, 'data/manor.json'),
    (700000, 'Россия', 'Москва', 'ш. Главный, 40', '55.7558° N, 37.6173° E', 10, 'data/city_apartment.json');

-- Добавление описания недвижимости
INSERT INTO real_estate_description (id_real_estate_base, description)
VALUES 
    (11, 'Комфортабельный коттедж в экологически чистом районе Москвы'),
    (12, 'Элитный дом в центре Москвы с роскошным интерьером и видом на парк'),
    (13, 'Уютная квартира с современным дизайном в Москве'),
    (14, 'Просторный дом с бассейном и садом в историческом районе Москвы'),
    (15, 'Стильный лофт в центре Москвы с панорамными окнами'),
    (16, 'Уединенный коттедж в лесном массиве Москвы для спокойного отдыха'),
    (17, 'Светлая квартира с панорамным видом на город в Москве'),
    (18, 'Домик на берегу реки Москвы с прекрасным видом на природу'),
    (19, 'Историческая усадьба с большим садом в центре Москвы'),
    (20, 'Комфортабельная квартира в центре Москвы с видом на город');

-- Добавление особенностей дома
INSERT INTO real_estate_house_features (id_real_estate_base, id_feature)
SELECT id, id FROM features WHERE name IN ('Сад', 'Вид на море', 'Балкон');

-- Добавление особенностей на территории
INSERT INTO real_estate_territory_features (id_real_estate_base, id_feature)
SELECT id, id FROM features WHERE name IN ('Парковка', 'Бассейн');

-- Добавление фильтров для недвижимости
INSERT INTO real_estate_filters (id_real_estate_base, name_house, type_house, number_beds_single, number_beds_double, number_bedrooms, area, floor)
VALUES 
    (11, 'Коттедж в экологически чистом районе', 'Коттедж', 3, 2, 4, 500, 2),
    (12, 'Элитный дом в центре с видом на парк', 'Дом', 5, 3, 6, 800, 3),
    (13, 'Уютная квартира с современным дизайном', 'Квартира', 1, 1, 2, 100, 5),
    (14, 'Просторный дом в историческом районе с бассейном', 'Дом', 4, 3, 5, 700, 2),
    (15, 'Стильный лофт с панорамными окнами', 'Лофт', 1, 0, 1, 80, 6),
    (16, 'Уединенный коттедж в лесном массиве', 'Коттедж', 2, 1, 3, 300, 1),
    (17, 'Светлая квартира с панорамным видом на город', 'Квартира', 2, 1, 3, 120, 9),
    (18, 'Домик на берегу реки с прекрасным видом на природу', 'Дом', 3, 2, 4, 600, 1),
    (19, 'Историческая усадьба с большим садом', 'Усадьба', 6, 4, 8, 1000, 2),
    (20, 'Комфортабельная квартира в центре с видом на город', 'Квартира', 2, 2, 3, 150, 8);

```

