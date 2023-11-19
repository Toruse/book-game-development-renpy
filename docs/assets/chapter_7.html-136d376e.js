import{_ as t,p as d,q as e,a1 as r}from"./framework-5866ffd3.js";const m={},o=r('<h1 id="глава-7-три-мини-игры" tabindex="-1"><a class="header-anchor" href="#глава-7-три-мини-игры" aria-hidden="true">#</a> Глава 7. Три мини игры</h1><p>На основе рассмотренной в первой главе повести мы создадим визуальную новеллу на Ren’Py, Twine и TyranoBuilder под названием <em>&quot;Август возвращается&quot;</em>. В процессе создания предпочтение будет предоставлено больше Ren’Py.</p><p>Хотя вы можете написать свою собственную историю, однако, чтобы это сделать правильно, лучше сперва познакомьтесь, как происходит процесс превращения повести в игру.</p><h2 id="составляем-план" tabindex="-1"><a class="header-anchor" href="#составляем-план" aria-hidden="true">#</a> Составляем план</h2><p>Перед программированием, желательно составить план для вашего приключения, то есть сделать каталогизацию персонажей, определить сцены. Может показаться это лишним, но без этого не обойтись при работе в больших командах.</p><p>Сначала разложим повесть <em>&quot;Август возвращается&quot;</em> на блоки в виде таблиц. Так же вы можете воспользоваться другим методом визуализации для этих целей. Главное – не пропускать данный этап, во избежание негативных последствий при создании игры.</p><h3 id="состав-персонажеи" tabindex="-1"><a class="header-anchor" href="#состав-персонажеи" aria-hidden="true">#</a> Состав персонажей</h3><p>Начнем с персонажей (см. Таблицу 7-1). Если забыли про них, то вернитесь к первой главе книги.</p><p>В это же главе повторите материал про 12 архетипов личности Джозефа Кэмпбелла, некоторые из них будут использованы в создаваемой игре.</p><p><strong>Таблица 7-1.</strong> Главные герои</p><table><thead><tr><th>Герой</th><th>Роль/Архетип</th><th>Пол и Возраст</th><th>Внешний вид</th></tr></thead><tbody><tr><td><em><strong>Рон Легион-Смерти</strong></em></td><td>Главный герой (т. е. игрок)</td><td>Мужчина, около 30 лет</td><td>Среднего телосложения и роста, на вид физически подтянутый</td></tr><tr><td><em><strong>Мервин Попплуэлл</strong></em></td><td>Искатель</td><td>Мужчина, лет за 30</td><td>Худой, среднего роста, небрежно одетый</td></tr><tr><td><em><strong>Ройстон Медовая-Бабочка</strong></em></td><td>Мудрец</td><td>Мужчина, 50 лет</td><td>Крепкое телосложение, имеет обычный вид</td></tr><tr><td><em><strong>Клэр</strong></em></td><td>Правитель</td><td>Женщина, около 20 лет</td><td>Спортивное телосложение, среднего роста, модно одетая</td></tr><tr><td><em><strong>Человек в комбинезоне</strong></em></td><td>Бунтарь</td><td>Мужчина, без возраста</td><td>Спортивное телосложение, высокий, лысый с причудливым видом</td></tr><tr><td><em><strong>Рейн</strong></em></td><td>Любовник</td><td>Женщина, около 30 лет</td><td>Среднее телосложение, низкий рост, изящный вид</td></tr></tbody></table><h3 id="локации" tabindex="-1"><a class="header-anchor" href="#локации" aria-hidden="true">#</a> Локации</h3><p>В визуальных новеллах главное не количество локаций, а количество слов в повествовании. В среднем это от 10000 до 50000 слов.</p><blockquote><p>Примечание:</p><p>Игра, создаваемая в этой книге, не соответствует вышеуказанному правилу.</p></blockquote><p>По сравнению с каталогизацией персонажей, определиться с локациями событий в игре сложнее. Слишком малое количество портят атмосферу, а слишком много сбивают с толку игрока. Лучше всего начать с малого, определить основные элементы игры, после чего разделить их на более мелкие единицы (например, комнаты) (см. Таблицу 7-2).</p><p>Для построения истории мы воспользуемся такими понятиями как:</p><ul><li><strong>Сеттинг</strong> – это среда, в которой происходит действие, где определяются базовые свойства реальности. В нашем случае это общая тема, атмосфера происходящего (например, стиль фона).</li><li><strong>Место</strong>, обстоятельство и время при которых развиваются события. Здесь могут быть применены разные звуковые дорожки, задний фон.</li><li><strong>Комнаты</strong> – наименьшая единица локации игры, которые часто имеют связь между собой.</li></ul><p><strong>Таблица 7-2.</strong> Основные сеттинги и места повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Пример описание комнаты</th></tr></thead><tbody><tr><td><em><strong>Офис</strong></em></td><td><em>Рабочее место Рона</em></td><td>Вы бездельничаете за рабочим столом, на котором среди стопок бумаг стоит персональный компьютер. Только наклейка с изображением женщины-киборга выделяет ваше рабочее место среди всех остальных.</td></tr><tr><td><em><strong>Офис</strong></em></td><td><em>Помещение, где храниться сотовый телефон</em></td><td>Поднявшись на верхний этаж, вы попадаете в заброшенную часть офиса со старой мебелью.</td></tr><tr><td><em><strong>Город</strong></em></td><td><em>Парк, Арка</em></td><td>Ночь, одинокая арка городского парка, статуи освещённые тусклым светом, только усиливают волнения и страх вызванный недавними событиями.</td></tr><tr><td><em><strong>Офис (Пожар)</strong></em></td><td><em>Рабочий стол Рона</em></td><td>Ад. Рабочее место Рона окутано огнём. Защищаясь портфелем, он ныряет в него.</td></tr><tr><td><em><strong>Город (Жилой район)</strong></em></td><td><em>Квартира Рона</em></td><td>Квартира главного героя становится не такой безопасной, когда из-за двери доносятся странные звуки.</td></tr><tr><td><em><strong>Город (Железнодорожный вокзал)</strong></em></td><td><em>Железнодорожный вокзал</em></td><td>Вы испуганный, лихорадочно просматриваете расписание движения поездов в поиске ближайшего, который готов к отправке.</td></tr><tr><td><em><strong>Поезд</strong></em></td><td><em>Поезд на север</em></td><td>Сидя в мягком сиденье поезда, женщина с черными волосами напротив вас сняла наушники, улыбнулась и представилась.</td></tr><tr><td><em><strong>Конечная станция</strong></em></td><td><em>Конечная станция</em></td><td>Пытаясь слиться с толпой, вас ловят за руку.</td></tr><tr><td><em><strong>Остров</strong></em></td><td><em>Остров</em></td><td>Вы высаживаетесь на острове, для вас это чужой мир. Холод проникает до дрожи костей. Корабль покидает причал, и вы остаетесь один на холодном северном ветре.</td></tr><tr><td><em><strong>Остров</strong></em></td><td><em>Бункер</em></td><td>Незаметное снаружи строение на удивление оказалось просторным, комфортным, с отличной мебелью. Это напоминало больше отель нежели бункер.</td></tr><tr><td><em><strong>Океан</strong></em></td><td><em>Судно</em></td><td>По правому борту без опознавательных знаков появляется второе судно. Вы начинаете паниковать.</td></tr><tr><td><em><strong>Север</strong></em></td><td><em>Аэропорт</em></td><td>Вы оказываетесь в международном аэропорту, заполненным огромным количеством людей. Возможность раствориться в толпе успокаивает вас.</td></tr><tr><td><em><strong>Город</strong></em></td><td><em>Аэропорт</em></td><td>Вас окружает беззаботная жизнь. Туристы, тянут свой багаж, но вы внутренне готовитесь к битве всей своей жизни.</td></tr><tr><td><em><strong>Город</strong></em></td><td><em>Резиденция президента</em></td><td>Нет времени любоваться городом. По вам открыли огонь, остается только бежать.</td></tr><tr><td><em><strong>Новый офис</strong></em></td><td><em>Новое рабочее место Рона</em></td><td>Прежде чем приступить к новым обязанностям, он с тяжестью в душе возвращает старый сотовый телефон в шкаф.</td></tr></tbody></table><p>Теперь разделим вышеупомянутые места на более мелкие эпизоды, а именно на комнаты. Давайте сперва это сделаем для сеттинга &quot;Офис&quot; (см. Таблицу 7-3).</p><p><strong>Таблица 7-3.</strong> Сеттинг &quot;Офис&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Офис</strong></em></td><td><em>Рабочее место Рона</em></td><td><em>Рабочий стол Рона</em></td><td><em>Зона с питьевым фонтанчиком, Рабочий стол Ройстона</em></td></tr><tr><td></td><td></td><td><em>Зона с питьевым фонтанчиком</em></td><td><em>Рабочий стол Рона, Соседний рабочий стол</em></td></tr><tr><td></td><td></td><td><em>Соседний рабочий стол</em></td><td><em>Зона с питьевым фонтанчиком</em></td></tr><tr><td></td><td><em>Верхний этаж (т. е. место хранение телефона)</em></td><td><em>Рабочий стол Ройстона</em></td><td><em>Рабочий стол Рона, Шкаф для документов</em></td></tr><tr><td></td><td></td><td><em>Шкаф для документов</em></td><td><em>Рабочий стол Ройстона</em></td></tr></tbody></table><h4 id="сеттинг-i-офис" tabindex="-1"><a class="header-anchor" href="#сеттинг-i-офис" aria-hidden="true">#</a> <em>Сеттинг I. Офис</em></h4><p>Как вы, помните, наше приключение начинается с того, что Рон получает загадочное письмо от умершего коллеги, некоего Мервина Попплуэлла.</p><p>Замечания по обстановки в <strong>Офисе</strong>:</p><ul><li>Тон написания должен быть мрачным и зловещим.</li><li>Звуковое сопровождение — это рабочий шум офиса, звуки работающей аппаратуры, ксерокса, приглушенные голоса сотрудников, телефонный звонки и разговоры.</li></ul><h4 id="сеттинг-ii-город" tabindex="-1"><a class="header-anchor" href="#сеттинг-ii-город" aria-hidden="true">#</a> <em>Сеттинг II. Город</em></h4><p>Выполняя инструкцию из загадочного письма, мы идем по улицам города в направлении арки парка (см. Таблицу 7-4).</p><p><strong>Таблица 7-4.</strong> Сеттинг &quot;Город&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Город</strong></em></td><td><em>Парк</em></td><td><em>Парк</em></td><td><em>Арка</em></td></tr><tr><td></td><td><em>Арка</em></td><td><em>Арка</em></td><td><em>Парк</em></td></tr><tr><td></td><td><em>Улица</em></td><td><em>Дорога мимо офиса</em></td><td><em>Арка</em></td></tr><tr><td></td><td></td><td><em>Увиденный пожар</em></td><td><em>Нет</em></td></tr></tbody></table><p>Замечание к дизайну <strong>Города</strong>:</p><ul><li>Тон письма по-прежнему должен быть зловещим.</li><li>Звук — это уличная суета: проезжающие мимо автомобили, шаги людей, разговоры по мобильным телефонам, и иногда сигнал работающего светофора.</li></ul><h4 id="сеттинг-iii-офис-пожар" tabindex="-1"><a class="header-anchor" href="#сеттинг-iii-офис-пожар" aria-hidden="true">#</a> <em>Сеттинг III. Офис (Пожар)</em></h4><p>Это один из опасных моментов в приключениях нашего главного героя. Рон решился вернуться в свой офис, но он оказался охвачен огнем (см. Таблицу 7-5). Не имея средств защиты, кроме портфеля, он бросается в жерло пожара.</p><p><strong>Таблица 7-5.</strong> Сеттинг &quot;Офис (Пожар)&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Город</strong></em></td><td><em>Вход в офис со двора</em></td><td><em>Переулок</em></td><td><em>Пожарная лестница</em></td></tr><tr><td><em><strong>Офис (Пожар)</strong></em></td><td></td><td><em>Пожарная лестница</em></td><td><em>Помещение офиса</em></td></tr><tr><td></td><td></td><td><em>Помещение офиса</em></td><td><em>Рабочий стол Рона</em></td></tr><tr><td></td><td></td><td><em>Рабочий стол Рона</em></td><td><em>Соседний стол А</em></td></tr><tr><td></td><td></td><td><em>Соседний стол А</em></td><td><em>Рабочий стол Рона, Соседний стол Б</em></td></tr><tr><td></td><td></td><td><em>Соседний стол Б</em></td><td><em>Соседний стол А</em></td></tr></tbody></table><p>Замечания по обстановке в сеттинге <strong>Офис (Пожар)</strong>:</p><ul><li>Тон повествования должен выражать огорчение и растерянность главного героя.</li><li>Аудио сопровождение в данном сеттинге — это звуки пожарных машин, пламени и обрушения внутри здания.</li></ul><h4 id="сеттинг-iv-город-жилои-раион" tabindex="-1"><a class="header-anchor" href="#сеттинг-iv-город-жилои-раион" aria-hidden="true">#</a> <em>Сеттинг IV. Город (Жилой район)</em></h4><p>В этой точке сюжета Рон направляется домой. Но и здесь что-то происходит непонятное. Он слышит, странные звуки из своей квартиры. Рон чувствует интуицией, что если туда войдет, то уже никогда из неё не выйдет (см. Таблицу 7-6).</p><p><strong>Таблица 7-6.</strong> Сеттинг &quot;Город (Жилой район)&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Город (Жилой район)</strong></em></td><td><em>Квартира Рона</em></td><td><em>Улица</em></td><td><em>Нет</em></td></tr><tr><td></td><td></td><td><em>Коридор</em></td><td><em>Улица</em></td></tr><tr><td></td><td></td><td><em>Дверь квартира Рона</em></td><td><em>Коридор, Квартира Рона</em></td></tr><tr><td></td><td></td><td><em>Квартира Рона</em></td><td><em>Нет</em></td></tr></tbody></table><p>Замечание к дизайну <strong>Город (Жилой район)</strong>:</p><ul><li>Написание в этой короткой, но напряженной сцене, должно передавать чувство обреченности.</li><li>Что касается аудио, то мы должны услышать эхо шагов и непривычные инопланетные звуки.</li></ul><h4 id="сеттинг-v-город-железнодорожныи-вокзал" tabindex="-1"><a class="header-anchor" href="#сеттинг-v-город-железнодорожныи-вокзал" aria-hidden="true">#</a> <em>Сеттинг V. Город (Железнодорожный вокзал)</em></h4><p>Теперь, находиться в городе стало опасно для жизни Рона, его нужно немедленно покинуть, из-за чего он как можно скорей пытается добраться до вокзала. Где Рон садится на первый поезд, идущий на север (см. Таблицу 7-7).</p><p><strong>Таблица 7-7.</strong> Сеттинг &quot;Город (Железнодорожный вокзал)&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Город (Железнодорожный вокзал)</strong></em></td><td><em>Железнодорожный вокзал</em></td><td><em>Статуя</em></td><td><em>Платформа А</em></td></tr><tr><td></td><td></td><td><em>Платформа А</em></td><td><em>Статуя, Платформа Б</em></td></tr><tr><td></td><td></td><td><em>Платформа Б</em></td><td><em>Поезд</em></td></tr><tr><td></td><td></td><td><em>Поезд</em></td><td><em>Нет</em></td></tr></tbody></table><p>Замечание к дизайну <strong>Город (Железнодорожный вокзал)</strong>:</p><ul><li>Тон написания остаётся прежним. Рона преследуют, и он в панике.</li><li>Звук в этом сеттинге такой же, как и в городе, только сообщает о присутствии большого количества людей.</li></ul><h4 id="сеттинг-vi-поезд" tabindex="-1"><a class="header-anchor" href="#сеттинг-vi-поезд" aria-hidden="true">#</a> <em>Сеттинг VI. Поезд</em></h4><p>Зайдя в поезд, Рон немного успокаивается. Однако это спокойствие длится недолго, его продолжают преследовать (см. Таблицу 7-8). В результате он запирается в туалете, прячась от преследователей. В этот момент ему позвонили на старый мобильный телефон, и сказали покинуть поезд на ближайшей станции.</p><p><strong>Таблица 7-8.</strong> Сеттинг &quot;Поезд&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Поезд</strong></em></td><td><em>Поезд на север</em></td><td><em>Двери поезда</em></td><td><em>Нет</em></td></tr><tr><td></td><td></td><td><em>Первый вагон</em></td><td><em>Второй вагон, Двери поезда</em></td></tr><tr><td></td><td></td><td><em>Второй вагон</em></td><td><em>Первый вагон</em></td></tr><tr><td></td><td></td><td><em>Туалет в поезде</em></td><td><em>Второй вагон, Третий вагон</em></td></tr><tr><td></td><td></td><td><em>Третий вагон</em></td><td><em>Нет</em></td></tr></tbody></table><p>Замечание к дизайну сеттинга <strong>Поезд</strong>:</p><ul><li>Обстановка в плане драматичности остаётся прежней и усиливается к завершению данного сеттинга.</li><li>Атмосфера – тихий шум движущегося поезда.</li></ul><h4 id="сеттинг-vii-конечная-станция" tabindex="-1"><a class="header-anchor" href="#сеттинг-vii-конечная-станция" aria-hidden="true">#</a> <em>Сеттинг VII. Конечная станция</em></h4><p>Рон, не зная, что делать, метается по платформе, пока его не хватает кто-то за руку. Рона начинает трясти, но это оказался коллега из отдела технической поддержки Ройстон Медовая-Бабочка. После встречи они оказываются в парке на скамейке возле станции, где Рону сообщают о деталях происходящего (см. Таблицу 7-9).</p><p><strong>Таблица 7-9.</strong> Сеттинг &quot;Конечная станция&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Конечная станция</strong></em></td><td><em>Конечная станция</em></td><td><em>Платформа А</em></td><td><em>Платформа Б</em></td></tr><tr><td></td><td></td><td><em>Платформа Б</em></td><td><em>Платформа А, Дорога в парк</em></td></tr><tr><td></td><td></td><td><em>Дорога в парк</em></td><td><em>Скамейке в парке</em></td></tr><tr><td></td><td></td><td><em>Скамейке в парке</em></td><td></td></tr></tbody></table><p>Замечание к дизайну сеттинга <strong>Конечная станция</strong>:</p><ul><li>Не считая ситуации на платформе, сеттинг имеет расслабленный тон повествования. В этой сцене благодаря встречи с союзником главный герой чувствует себя в безопасности.</li><li>Звуковое сопровождение должно быть как в сеттинге «Город», но более тихим и не таким насыщенным.</li></ul><h4 id="сеттинг-viii-остров" tabindex="-1"><a class="header-anchor" href="#сеттинг-viii-остров" aria-hidden="true">#</a> <em>Сеттинг VIII. Остров</em></h4><p>Когда Ройстон покинул Рона, ему снова позвонили на телефон. Рейн сообщает ему, что нужно избавиться от телефона, и используя поезд, паром, рыбацкую лодку, прибыть в течении трёх дней на самый дальний остров на севере (см. Таблицу 7-10).</p><p>На самом острове Рона встречает погибший Мервин Попплуэлл, и скрывшись в бункере из четырех комнат, за чашкой чая Рону рассказывают, что нужно закончить работу над системой безопасности «Август».</p><p>Поскольку команда не может защититься, на помощь, используя вертолет, прилетает Ройстон Медовая-Бабочка.</p><p><strong>Таблица 7-10.</strong> Сеттинг &quot;Остров&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Остров</strong></em></td><td><em>Остров</em></td><td><em>Берег</em></td><td><em>Путь к бункеру А</em></td></tr><tr><td></td><td></td><td><em>Путь к бункеру А</em></td><td><em>Путь к бункеру Б</em></td></tr><tr><td></td><td></td><td><em>Путь к бункеру Б</em></td><td><em>Вход в бункер</em></td></tr><tr><td></td><td></td><td><em>Вход в бункер</em></td><td><em>Первая комната в бункере</em></td></tr><tr><td></td><td><em>Бункер</em></td><td><em>Первая комната в бункере</em></td><td><em>Вторая комната в бункере, Третья комната в бункере, Четвертая комната в бункере</em></td></tr><tr><td></td><td></td><td><em>Вторая комната в бункере</em></td><td><em>Первая комната в бункере, Третья комната в бункере, Четвертая комната в бункере</em></td></tr><tr><td></td><td></td><td><em>Третья комната в бункере</em></td><td><em>Первая комната в бункере, Вторая комната в бункере, Четвертая комната в бункере</em></td></tr><tr><td></td><td></td><td><em>Четвертая комната в бункере</em></td><td><em>Первая комната в бункере, Вторая комната в бункере, Третья комната в бункере</em></td></tr></tbody></table><p>Замечание к дизайну сеттинга <strong>Остров</strong>:</p><ul><li>Остров — это место, где главный герой приходит в себя и собирается с силами, все это должен отобразиться в сценарий. После напряженного начала на этом этапе игры игрок чувствует себя непринужденно.</li><li>Так как события происходят на дальнем севере мы должны слышать звуки океана и сильного ветра.</li></ul><h4 id="сеттинг-ix-океан" tabindex="-1"><a class="header-anchor" href="#сеттинг-ix-океан" aria-hidden="true">#</a> <em>Сеттинг IX. Океан</em></h4><p>Спустя несколько дней к Рону прибывает Рейн и предлагает покинуть бункер, так как в резиденции президента произошло чрезвычайное происшествие. Рон принимает предложение. После чего они покидают остров, погрузившись на судно на воздушной подушке. Хоть это и короткая сцена, но из-за эпизода с нападением на корабль, очень напряженная (см. Таблицу 7-11).</p><p><strong>Таблица 7-11.</strong> Сеттинг &quot;Остров&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Океан</strong></em></td><td><em>Судно</em></td><td><em>Палуба</em></td><td><em>Рубка</em></td></tr><tr><td></td><td></td><td><em>Рубка</em></td><td><em>Палуба</em></td></tr><tr><td></td><td><em>Спасательный вертолёт</em></td><td><em>Рубка</em></td><td><em>Палуба</em></td></tr><tr><td></td><td></td><td><em>Палуба</em></td><td><em>Рубка</em></td></tr></tbody></table><p>Замечание к дизайну сеттинга <strong>Океан</strong>:</p><ul><li>Тон написание должен вызывать чувство динамики и опасности.</li><li>Звук соответствует тону письма. Мы слышим двигатель судна, тяжелые шаги, металлическое эхо, грохот дверей, шум волн океана, и в итоге нарастающий звук вертолета.</li></ul><h4 id="сеттинг-x-север" tabindex="-1"><a class="header-anchor" href="#сеттинг-x-север" aria-hidden="true">#</a> <em>Сеттинг X. Север</em></h4><p>Рон и его друзья покинули остров и высадились на побережье материка, где их уже ждала машина, чтобы отвезти в аэропорт. Используя частный самолёт, они вылетают в столицу. Во время полёта они узнают про ужасные события в резиденции президента (см. Таблицу 7-12).</p><p><strong>Таблица 7-12.</strong> Сеттинг &quot;Север&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Север</strong></em></td><td><em>Побережье</em></td><td><em>Побережье</em></td><td><em>Автомобиль в аэропорт</em></td></tr><tr><td></td><td><em>Аэропорт</em></td><td><em>Автомобиль в аэропорт</em></td><td><em>Зона аэропорта А</em></td></tr><tr><td></td><td></td><td><em>Зона аэропорта А</em></td><td><em>Зона аэропорта Б, Автомобиль в аэропорт</em></td></tr><tr><td></td><td></td><td><em>Зона аэропорта Б</em></td><td><em>Самолет в столицу</em></td></tr><tr><td></td><td></td><td><em>Самолет в столицу</em></td><td><em>Нет</em></td></tr></tbody></table><p>Замечания к дизайну сеттинга <strong>Север</strong>:</p><ul><li>Текст в этом сеттинге должен спокойно вести повествование, так как большую часть врагов погибло в предыдущем сеттинге. Однако, происшествие в резиденции может поставить крест на миссии.</li><li>Звуковой фон должен успокаивать игрока. Можно добавить звуки поездки с берега в аэропорт, звук двигателя самолёта.</li></ul><h4 id="сеттинг-xi-город" tabindex="-1"><a class="header-anchor" href="#сеттинг-xi-город" aria-hidden="true">#</a> <em>Сеттинг XI. Город</em></h4><p>Рон и его друзья, прибыв в столицу, немедленно направляются в резиденцию президента (см. Таблицу 7-13). Где Рон встречает Клер и человека в комбинезоне. Им сообщают, что премьер-министр похищен, и чтобы его освободить Рон должен передать исходный код системы безопасности «Августа».</p><p>Рон соглашается с выдвинутыми условиями, но ухитряется обмануть врагов, подсунув им исправную систему безопасности, а спецназ в свою очередь обезвреживает всех сотрудников «Фракции».</p><p>В конце концов Рон оказывается дома, а когда возвращается офис, узнает, что он получает должность, которую раньше занимал Ройстон. Конец!</p><p><strong>Таблица 7-13.</strong> Сеттинг &quot;Город&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Город</strong></em></td><td><em>Аэропорт</em></td><td><em>Прибытие</em></td><td><em>Машине в резиденцию президента</em></td></tr><tr><td></td><td></td><td><em>Машине в резиденцию президента</em></td><td><em>Лестница</em></td></tr><tr><td></td><td><em>Резиденция президента</em></td><td><em>Лестница</em></td><td><em>Парадный вход</em></td></tr><tr><td></td><td></td><td><em>Парадный вход</em></td><td><em>Зал, Лестница</em></td></tr><tr><td></td><td></td><td><em>Зал</em></td><td><em>Парадный вход</em></td></tr><tr><td></td><td><em>Дом Рона</em></td><td><em>Приемная</em></td><td><em>Спальня</em></td></tr><tr><td></td><td></td><td><em>Спальня</em></td><td><em>Приемная, Балкон</em></td></tr><tr><td></td><td></td><td><em>Балкон</em></td><td><em>Спальня</em></td></tr></tbody></table><p>Замечание к дизайну сеттинга <strong>Город</strong>:</p><ul><li>Тон письма должен быть сухим, холодным. Он должен показать в действиях главного героя твёрдость и расчетливость. Рон за нескольких недель своих приключений пережил многое, стал мудрее.</li><li>Что касается звука, находясь в столице — это шум города, а попав в резиденцию президента – это тихая атмосфера. Так же мы должны выделить динамические сцены и сцены, в которых нужно принимать судьбоносные решения.</li></ul><h4 id="сеттинг-xii-новыи-офис" tabindex="-1"><a class="header-anchor" href="#сеттинг-xii-новыи-офис" aria-hidden="true">#</a> <em>Сеттинг XII. Новый офис</em></h4><p>Рон возвращается на работу. Офис отремонтирован за время его отсутствия, стоят новые рабочие столы и компьютеры (см. Таблицу 7-14).</p><p>Появляется Ройстон и говорит, что уходит на пенсию. Он предлагает Рону занять его место в отделе технической поддержки. Рон не задумываясь соглашается, понимая, что в будущем его ожидают новые приключения.</p><p><strong>Таблица 7-14.</strong> Сеттинг &quot;Новый офис&quot; в повести &quot;Август возвращается&quot;</p><table><thead><tr><th>Сеттинг</th><th>Место</th><th>Комната</th><th>Связанные комнаты</th></tr></thead><tbody><tr><td><em><strong>Новый офис</strong></em></td><td><em>Новое рабочее место Рона</em></td><td><em>Рабочий стол Рона</em></td><td><em>Зона с питьевым фонтанчиком, Рабочий стол Ройстона</em></td></tr><tr><td></td><td></td><td><em>Соседний рабочий стол</em></td><td><em>Новое рабочее место Рона</em></td></tr><tr><td></td><td><em>Помещение, где храниться сотовый телефон</em></td><td><em>Рабочий стол Ройстона (Новое рабочее место Рона)</em></td><td><em>Новое рабочее место Рона, Хранилище документов</em></td></tr><tr><td></td><td></td><td><em>Хранилище документов</em></td><td><em>Рабочий стол Ройстона</em></td></tr></tbody></table><p>Замечание к дизайну сеттинга <strong>Новый офис</strong>:</p><ul><li>Текст должен вызывать чувство триумфа и оптимизма.</li><li>В этом сеттинге мы должны слышать, спокойную рабочую обстановку в офисе.</li></ul><h2 id="часть-i-начало-август-возвращается-в-ren-py" tabindex="-1"><a class="header-anchor" href="#часть-i-начало-август-возвращается-в-ren-py" aria-hidden="true">#</a> Часть I: Начало &quot;Август возвращается&quot; в Ren’Py</h2>',98),h=[o];function a(n,s){return d(),e("div",null,h)}const l=t(m,[["render",a],["__file","chapter_7.html.vue"]]);export{l as default};
