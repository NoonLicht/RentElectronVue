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
'''
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    date_registered DATE,
    avatar_src VARCHAR(255)
);
'''

Контент пользователей
'''
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
'''

Отзывы
'''
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    id_user INT REFERENCES users(id),
    text TEXT,
    rating INT,
    rating_date DATE
);
'''

Недвижимость основа
'''
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
'''

Описание недвижимости
'''
CREATE TABLE real_estate_description (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    description TEXT
);
'''

Особенности дома
'''
CREATE TABLE house_features (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    feature TEXT
);
'''

Особенности территоррии
'''
CREATE TABLE territory_features (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    feature TEXT
);
'''

Недвижимость для фильтров
'''
CREATE TABLE real_estate_filters (
    id SERIAL PRIMARY KEY,
    id_real_estate_base INT REFERENCES real_estate_base(id),
    name_house VARCHAR(255),
    type_house VARCHAR(255),
    number_beds_single INT,
    number_beds_double INT,
    number_bedrooms INT,
    area DECIMAL(10, 2),
    floor INT,
    on_the_house TEXT,
    on_the_territory TEXT,
    features TEXT
);
'''

