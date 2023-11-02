# Разработка игр с помощью Ren’Py

## Вступление

Если думать о самых популярных видеоиграх, то вы не вспомните ни одной игры основанной на тексте. Большинство геймеров 
видят в этих играх что-то архаичное и скучное, делая предпочтение шутеру от первого лица. Однако в реальности все 
немного по-другому.

Старый жанр интерактивной художественной литературы и его современный брат визуальные новеллы, превращаются все больше 
в процветающий сегмент игровой индустрии. Например, игра _Clannad HD Edition_ от разработчика Key превзошла по продажам 
некоторые популярные игры в сервисе Steam.

Хотя первоначально визуальные новеллы были чисто японским явлением, то сегодня они продаются и загружаются миллионами 
копий по всему миру. _Doki Doki Literature Club!_ от Team Salvato - это бесплатная визуальная новелла со с 
балансированной монетизацией, которую в 2018 году загрузили два миллиона человек, и имеет огромное число поклонников 
по всему миру.

Для создания игр данного жанра мы рассмотрим в этой книге три инструмента: Ren’Py, Twine и TyranoBuilder. Данное 
программное обеспечение имеет все, что нужно для создания интерактивных художественных романов и визуальных новел 
для различных платформ. Первые два являются бесплатными. Изучая эти инструменты, вы ознакомитесь с базовыми навыками 
разработки игр, и откроете двери для более сложных систем разработки, если в этом возникнет необходимость.

## Оглавление

* [Глава 1. Истории и как они создаются](chapter_1.md#гnава-1-истории-и-как-они-создаются) 
  * [Введение в драматическую составляющую](chapter_1.md#введение-в-драматическую-составnяющую) 
    * [Антагонист](chapter_1.md#антагонист) 
    * [Протагонист](chapter_1.md#протагонист) 
    * [Альтер эго](chapter_1.md#аnьтер-эго) 
    * [Катарсис](chapter_1.md#катарсис)
    * [Конфликт](chapter_1.md#конфnикт)
    * [Клише](chapter_1.md#кnише)
    * [Рояль в кустах](chapter_1.md#рояnь-в-кустах-deus-ex-machina) 
    * [Двусмысленность](chapter_1.md#двусмысnенность)
    * [Экспозиция](chapter_1.md#экспозиция)
    * [Плоский/круглый персонаж](chapter_1.md#пnоский-кругnый-персонаж) 
    * [Четвёртая стена](chapter_1.md#четвёртая-стена) 
    * [Повествование/Повествователь](chapter_1.md#повествование-повествоватеnь)
    * [Ономатопея (Звукоподражание)](chapter_1.md#ономатопея-звукоподражание)
    * [Персонификация](chapter_1.md#персонификация) 
    * [Точка зрения (POV-персонаж)](chapter_1.md#точка-зрения-pov-персонаж)
    * [Сравнение](chapter_1.md#сравнение)
    * [Монолог](chapter_1.md#моноnог)
  * [Аристотель Поэтика](chapter_1.md#аристотеnь-поэтика) 
  * [Мономиф: Путешествие героя](chapter_1.md#мономиф-путешествие-героя) 
    * [Август возвращается – Синопсис. Акт I: Исход](chapter_1.md#август-возвращается-–-синопсис-акт-i-исход)  
    * [Акт II: Инициация](chapter_1.md#акт-ii-инициация)
    * [Акт III: Возвращение](chapter_1.md#акт-iii-возвращение)
  * [12 архетипов личности](chapter_1.md#_12-архетипов-nичности)
    1. [Герой](chapter_1.md#_1-герой)
    2. [Джон/Джейн Доу](chapter_1.md#_2-джон-джейн-доу)
    3. [Бунтарь](chapter_1.md#_3-бунтарь)
    4. [Шут](chapter_1.md#_4-шут)
    5. [Правитель](chapter_1.md#_5-правитеnь)
    6. [Мудрец](chapter_1.md#_6-мудрец)
    7. [Маг](chapter_1.md#_7-маг)
    8. [Творец](chapter_1.md#_8-творец)
    9. [Любовник](chapter_1.md#_9-любовник)
    10. [Невинный](chapter_1.md#_10-невинный)
    11. [Искатель](chapter_1.md#_11-искатеnь)
    12. [Целитель](chapter_1.md#_12-цеnитеnь)
  * [Десять наилучших практик](chapter_1.md#десять-наиnучших-практик)
    1. [Заложи основу истории](chapter_1.md#_1-заnожи-основу-истории)
    2. [Тщательно выбирайте игровой движок](chapter_1.md#_2-тщатеnьно-выбирайте-игровой-движок)
    3. [Не забывайте про музыкальное и звуковое оформление](chapter_1.md#_3-не-забывайте-про-музыкаnьное-и-звуковое-оформnение)
    4. [Ваши персонажи должны развиваться](chapter_1.md#_4-ваши-персонажи-доnжны-развиваться)
    5. [Придерживайтесь выбранного жанра в вашей визуальной новелле](chapter_1.md#_5-придерживайтесь-выбранного-жанра-в-вашей-визуаnьной-новеnnе)
    6. [Используйте клише с умом](chapter_1.md#_6-испоnьзуйте-кnише-с-умом)
    7. [Убирайте ненужное](chapter_1.md##_7-убирайте-ненужное) 
    8. [Связь с аудиторией](chapter_1.md#_8-связь-с-аудиторией)
    9. [Создавайте уместные концовки](chapter_1.md#_9-создавайте-уместные-концовки)
    10. [Не принуждайте все читать под ряд](chapter_1.md#_10-не-принуждайте-все-читать-под-ряд)
  * [Индустрия визуальных новелл](chapter_1.md#индустрия-визуаnьных-новеnn)
    * [Визуализация и анимация](chapter_1.md#визуаnизация-и-анимация)
    * [Аудио сопровождение и озвучивание](chapter_1.md#аудио-сопровождение-и-озвучивание)
    * [Программирование](chapter_1.md#программирование)
    * [Тестирование](chapter_1.md#тестирование)
    * [Локализация](chapter_1.md#локаnизация)
  * [В поисках вдохновения](chapter_1.md#в-поисках-вдохновения)
  * [Борьба с творческим кризисом](chapter_1.md#борьба-с-творческим-кризисом)
  * [Заключение](chapter_1.md#закnючение)
* [Глава 2. Древнее искусство интерактивной художественной литературы](chapter_2.md#гnава-2-древнее-искусство-интерактивной-художественной-nитературы) 
  * [Прапрадед визуальных новелл: ELIZA (1966)](chapter_2.md#прапрадед-визуаnьных-новеnn-eliza-1966)
  * [Дедушка жанра: Colossal Cave Adventure (1975)](chapter_2.md#дедушка-жанра-colossal-cave-adventure-1975)  
  * [Первопроходцы](chapter_2.md#первопроходцы)
    * [Infocom](chapter_2.md#infocom)
    * [Magnetic Scrolls](chapter_2.md#magnetic-scrolls)
    * [Level 9 Computing](chapter_2.md#level-9-computing)
  * [Другие известные игры в этом жанре ](chapter_2.md#другие-известные-игры-в-этом-жанре) 
    * [King’s Quest: Quest for the Crown от Sierra On-Line (1984)](chapter_2.md#king’s-quest-quest-for-the-crown-от-sierra-on-line-1984)
    * [Трилогия Spellcasting от Legend Entertainment (1990–1992)](chapter_2.md#триnогия-spellcasting-от-legend-entertainment-1990–1992)
    * [Timequest от Legend Entertainment (1991)](chapter_2.md#timequest-от-legend-entertainment-1991)
    * [Demoniak от Palace Software (1991)](chapter_2.md#demoniak-от-palace-software-1991)
  * [Как они это делали? Инструменты для создания интерактивной художественной литературы](chapter_2.md#как-они-это-деnаnи-инструменты-дnя-создания-интерактивной-художественной-nитературы) 
    * [Несколько слов о парсерах](chapter_2.md#нескоnько-сnов-о-парсерах)
    * [Zork Interactive Language (ZIL) или Z-machine](chapter_2.md#zork-interactive-language-зорк-интерактивный-язык-zil-иnи-z-machine)
    * [Quill от Gilsoft (1983)](chapter_2.md#quill-от-gilsoft-1983)
    * [Professional Adventure Writer от Gilsoft (1986)](chapter_2.md#professional-adventure-writer-от-gilsoft-1986)
    * [Adventure Game Toolkit от Дэвида Мальмберга (1987)](chapter_2.md#adventure-game-toolkit-от-дэвида-маnьмберга-1987) 
    * [Inform от Грэхема Нельсона (1993–)](chapter_2.md#inform-от-грэхема-неnьсона-1993–) 
  * [Заключение](chapter_2.md#закnючение)
* [Глава 3. Современные визуальные новеллы](chapter_3.md#гnава-3-современные-визуаnьные-новеnnы)
  * [Визуальные новеллы - однозначно популярны в Японии](chapter_3.md#визуаnьные-новеnnы-однозначно-попуnярны-в-японии)
  * [Тропы](chapter_3.md#тропы)
    * [Синдром Гордона Фримена](chapter_3.md#синдром-гордона-фримена-безnикий-гnавный-герой) 
    * [Дерево диалогов](chapter_3.md#дерево-диаnогов)
    * [Дерево концовок](chapter_3.md#дерево-концовок)
    * [С центрального эпизода/In Medias Res](chapter_3.md#с-центраnьного-эпизода-in-medias-res)
    * [Гик из средней школы](chapter_3.md#гик-из-средней-шкоnы)
    * [Резка веток](chapter_3.md#резка-веток)
    * [Меч и Колдовство](chapter_3.md#меч-и-коnдовство)
  * [Основные концепции визуальных новелл и влияние Японии](chapter_3.md#основные-концепции-визуаnьных-новеnn-и-вnияние-японии) 
    * [Аниме](chapter_3.md#аниме)
    * [Бисёдзё игры (Симуляторы свиданий)](chapter_3.md#бисёдзё-игры-симуnяторы-свиданий) 
    * [Симулятор свиданий](chapter_3.md#симуnятор-свиданий)
    * [Додзинси игры](chapter_3.md#додзинси-игры)
    * [Эроге](chapter_3.md#эроге)
    * [Хентай](chapter_3.md#хентай)
    * [Исекай](chapter_3.md#исекай)
    * [Камиге/Кусоге](chapter_3.md#камиге-кусоге)
    * [Каваий](chapter_3.md#каваий)
    * [Кинетические романы](chapter_3.md#кинетические-романы)
    * [Отаку](chapter_3.md#отаку)
    * [Отомэ](chapter_3.md#отомэ)
    * [Волшебная подруга](chapter_3.md#воnшебная-подруга)
    * [Махо-сёдзё (Девушки волшебницы)](chapter_3.md#махо-сёдзё-девушки-воnшебницы)
    * [Манга](chapter_3.md#манга)
    * [Меха](chapter_3.md#меха)
    * [Моэ](chapter_3.md#моэ)
    * [Накиге/Уцуге](chapter_3.md#накиге-уцуге)
    * [Цундэрэ](chapter_3.md#цундэрэ)
  * [Современная эра Камиге или новая классика](chapter_3.md#современная-эра-камиге-иnи-новая-кnассика)
    * [Kanon от Key (1999)](chapter_3.md#kanon-от-key-1999)
    * [Air от Key (2000)](chapter_3.md#air-от-key-2000)
    * [Phoenix Wright: Ace Attorney от Capcom (2001)](chapter_3.md#phoenix-wright-ace-attorney-от-capcom-2001)  
    * [Digital: A Love Story от Кристина Лав (2010)](chapter_3.md#digital-a-love-story-от-кристина-лав-2010)
    * [Katawa Shoujo от Four Leaf Studios (2012)](chapter_3.md#katawa-shoujo-от-four-leaf-studios-2012)
    * [Clannad от Key (2004, 2015)](chapter_3.md#clannad-от-key-2004-2015)
    * [Her Story от Сэмома Барлоу (2015)](chapter_3.md#her-story-от-сэмома-барnоу-2015)
    * [Doki Doki Literature Club! от Дэна Сальвато (2017)](chapter_3.md#doki-doki-literature-club-от-дэна-саnьвато-2017)  
    * [Open Sorcery от Эбигейл Корфман (2017)](chapter_3.md#open-sorcery-от-эбигейn-корфман-2017)  
    * [Simulacra от Kaigan Games](chapter_3.md#simulacra-от-kaigan-games-2017)
    * [Simulacra: Pipe Dreams (2018)](chapter_3.md#simulacra-pipe-dreams-2018)
  * [Как это делается - современные инструменты для создания визуальных новелл](chapter_3.md#как-это-деnается-современные-инструменты-дnя-создания-визуаnьных-новеnn) 
    * [Ren’Py](chapter_3.md#ren’py)
    * [Twine](chapter_3.md#twine)
    * [Adrift](chapter_3.md#adrift) 
    * [TyranoBuilder от STRIKEWORKS](chapter_3.md#tyranobuilder-от-strikeworks) 
    * [VN Maker](chapter_3.md#vn-maker)
  * [Заключение](chapter_3.md#закnючение)
* [Глава 4. Знакомимся с Ren’Py, Twine и TyranoBuilder](chapter_4.md#гnава-4-знакомимся-с-ren’py-twine-и-tyranobuilder) 
  * [Ren'Py в деталях](chapter_4.md#ren-py-в-детаnях)
    * [Как работает Ren'Py](chapter_4.md#как-работает-ren-py)
    * [Создание нового проекта](chapter_4.md#создание-нового-проекта)
    * [Функционал Ren'Py](chapter_4.md#функционал-ren-py)
    * [Основы в написания сценариев на Ren’Py](chapter_4.md#основы-в-написания-сценариев-на-ren-py)
    * [Взаимодействуем с пользователем: Меню](chapter_4.md#взаимодеиствуем-с-пользователем-меню) 
    * [Отступы и текстовые блоки](chapter_4.md#отступы-и-текстовые-блоки)
    * [Условные операторы: if, elif, else](chapter_4.md#условные-операторы-if-elif-else)
    * [Подробней об операторе управления](chapter_4.md#подробнеи-об-операторе-управления) 
  * [Twine в деталях](chapter_4.md#twine-в-деталях)
    * [Связываем параграфы переходами](chapter_4.md#связываем-параграфы-переходами) 
    * [Twine и аудиовизуал](chapter_4.md#twine-и-аудиовизуал)
    * [Форматы Twine](chapter_4.md#форматы-twine)
    * [Макросы в Twine](chapter_4.md#макросы-в-twine)
    * [Пользовательский интерфейс Twine](chapter_4.md#пользовательскии-интерфеис-twine) 
    * [Несколько слов о IFID](chapter_4.md#несколько-слов-о-ifid)
    * [Знакомимся с CSS](chapter_4.md#знакомимся-с-css) 
  * [TyranoBuilder в деталях](chapter_4.md#tyranobuilder-в-деталях) 
    * [Рабочий процесс в TyranoBuilder](chapter_4.md#рабочии-процесс-в-tyranobuilder)
    * [Приключение в двух сценах](chapter_4.md#приключение-в-двух-сценах)
    * [Персонажи в TyranoBuilder](chapter_4.md#персонажи-в-tyranobuilder)
    * [Добавление мультимедиа](chapter_4.md#добавление-мультимедиа)
    * [TyranoBuilder и медиафайлы](chapter_4.md#tyranobuilder-и-медиафаилы)
    * [Несколько слов о Настройках игры](chapter_4.md#несколько-слов-о-настроиках-игры) 
    * [Скрипты в TyranoBuilder](chapter_4.md#скрипты-в-tyranobuilder)
    * [Live2D](chapter_4.md#live2d)
  * [Заключение](chapter_4.md#заключение)
* [Глава 5: Погружаемся глубже](chapter_5.md#глава-5-погружаемся-глубже) 
  * [Ren’Py, контейнеры и кодеки](chapter_5.md#ren-py-контеинеры-и-кодеки)
    * [Видео в Ren’Py](chapter_5.md#видео-в-ren-py)
    * [Расширенные функции аудио в Ren’Py](chapter_5.md#расширенные-функции-аудио-в-ren-py) 
    * [Подробней о графике](chapter_5.md#подробнеи-о-графике)
    * [Настройка графического интерфейса в Ren’Py](chapter_5.md#настроика-графического-интерфеиса-в-ren-py) 
  * [Продвинутые функции TyranoBuilder](chapter_5.md#продвинутые-функции-tyranobuilder)
    * [Плагины](chapter_5.md#плагины)
    * [Переменные](chapter_5.md#переменные)
    * [Случайный диалог](chapter_5.md#случаиныи-диалог)
    * [iScript в сравнении с JavaScript](chapter_5.md#iscript-в-сравнении-с-javascript)
    * [Кликабельные области изображения](chapter_5.md#кликабельные-области-изображения)
    * [Пользовательские шрифты](chapter_5.md#пользовательские-шрифты)
  * [Магия Twine](chapter_5.md#магия-twine) 
    * [Вызов JavaScript в Twine](chapter_5.md#вызов-javascript-в-twine)
    * [Анимация раскрытия текста в CSS](chapter_5.md#анимация-раскрытия-текста-в-css)
    * [Оживляем текст](chapter_5.md#оживляем-текст)
    * [Знакомимся с форматом истории Harlowe](chapter_5.md#знакомимся-с-форматом-истории-harlowe) 
    * [Знакомимся с Snowman](chapter_5.md#знакомимся-с-snowman)
  * [Заключение](chapter_5.md#заключение)
* [Глава 6. Запускаем на популярных платформах](chapter_6.md#глава-6-запускаем-на-популярных-платформах) 
  * [Ren’Py и персональные компьютеры](chapter_6.md#ren-py-и-персональные-компьютеры)
    * [Минимальные системные требования](chapter_6.md#минимальные-системные-требования)
    * [Иконки для персонального компьютера](chapter_6.md#иконки-для-персонального-компьютера)
  * [Ren’Py для мобильных устройств](chapter_6.md#ren-py-для-мобильных-устроиств)
    * [Развертываем на Android-е](chapter_6.md#развертываем-на-android-е)
    * [Иконки и экран-заставка](chapter_6.md#иконки-и-экран-заставка)
    * [Сочетания клавиш в Android](chapter_6.md#иконки-и-экран-заставка)
    * [Тестирование Android-приложения](chapter_6.md#тестирование-android-приложения)
    * [Развертываем на iOS](chapter_6.md#развертываем-на-ios)
    * [Xcode и iOS](chapter_6.md#xcode-и-ios)
    * [Обновляем ваши iOS-проекты](chapter_6.md#обновляем-ваши-ios-проекты)
    * [Иконки и экран-заставка для iOS](chapter_6.md#иконки-и-экран-заставка-для-ios) 
  * [Запускаем на Chrome OS и в браузере](chapter_6.md#запускаем-на-chrome-os-и-в-браузере)
  * [Лицензия на Android и iOS в Ren’Py](chapter_6.md#лицензия-на-android-и-ios-в-ren-py) 
  * [Ren’Py и Raspberry Pi](chapter_6.md#ren-py-и-raspberry-pi)
    * [Настройка Pi для Ren’Py](chapter_6.md#настроика-pi-для-ren-py)
  * [TyranoBuilder и персональные компьютеры](chapter_6.md#tyranobuilder-и-персональные-компьютеры)
    * [TyranoBuilding и iOS](chapter_6.md#tyranobuilding-и-ios)
    * [TyranoBuilding и Android](chapter_6.md#tyranobuilding-и-android)
    * [Дополнительные советы по Android](chapter_6.md#дополнительные-советы-по-android)
  * [Twine и персональные компьютеры](chapter_6.md#twine-и-персональные-компьютеры) 
    * [Twine на iOS и Android](chapter_6.md#twine-на-ios-и-android)
    * [Чудеса сборки проекта на Apache Cordova](chapter_6.md#чудеса-сборки-проекта-на-apache-cordova)
    * [Экран заставки для Android](chapter_6.md#экран-заставки-для-android)
    * [Иконки для Android](chapter_6.md#иконки-для-android)
    * [Экран заставки для iOS](chapter_6.md#экран-заставки-для-ios)
    * [Иконки для iOS](chapter_6.md#иконки-для-ios)
  * [Заключение](chapter_6.md#заключение)
* [Глава 7. Три мини игры](chapter_7.md#глава-7-три-мини-игры)
  * [Составляем план](chapter_7.md#составляем-план)
    * [Состав персонажей](chapter_7.md#состав-персонажеи)
    * [Локации](chapter_7.md#локации)
  * Part I: The Beginnings of Taking Back August in Ren’Py 
    * Starting the Project 
    * Setting Up the Characters 
    * Custom Transitions 
    * Assigning Images to Characters 
    * Preparing Other Audiovisual Assets 
    * Into the Fray! 
    * Commenting Your Code 
    * Your First Menu 
    * Using Conditional Statements 
    * Setting the Text Speed 
    * Upgrading the Inventory System 
    * Adding Functions (and Reusing Variables) 
    * Particles with SnowBlossom 
    * Randomizing Dialogue 
    * Styles and Hyperlinks 
    * Adding Videos 
    * Text Speed on the Fly 
    * More Fun with Text 
  * Part II: The Middle of Reginald’s Story with TyranoBuilder 
    * A Couple of Characters 
    * On a Train 
    * TyranoBuilder, Assets, and Directories 
    * Sounds on a Train 
    * First Glimpses of Interaction and Variables 
    * Random Dialogue in TyranoBuilder 
    * Adding Labels in TyranoScript 
    * The Might of the 3D Camera 
    * TyranoScript Macros 
    * Mixing Graphics with Text 
    * Graphical Buttons 
    * The Grand Finale Featuring Nasuka 
    * Various Tags and Tools 
  * Part III: Telling Tales with Twine 
    * Fonts and Colors 
    * Fun with Harlowe and Variables 
    * Custom Tags and Background Visuals 
    * An Inventory in Harlowe 
    * Refining Our Inventory and the Twine Footer 
    * Resuming Our Story 
    * Unlocking Locations with Items 
    * Food, Dramatic Moments, and More Macros 
    * Datamaps and Datasets 
    * Extreme Fun with Arrays 
    * More Visual Effects 
    * Real-Time Twine 
    * Our First Game Over 
    * Hiding That Pesky Inventory 
    * Adding Graphical Bars 
    * Transitions and Rotation: More Visual Flair 
    * Replacing Links with Passages 
    * Prompting the User 
  * In Closing 
* [Глава 8. Рекламная стратегия](chapter_8.md#глава-8-рекламная-стратегия)
  * Your Online Audience 
  * Online Distribution for Budding Visual Novelists 
    * Releasing for Free 
    * Selling Your Visual Novels 
  * Essential Marketing Practices 
    * Forum Decorum 
    * Demo Games 
    * Penetrating the Market with Free Stuff 
    * Staying Serious About Platforms 
    * The Power of Localization 
    * Web Site 
    * Trailer Video 
    * Blog 
    * Visual Novel Databases 
  * In Closing
* [Источники](sources.md)