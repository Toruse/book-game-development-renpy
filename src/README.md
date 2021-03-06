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
* [Chapter 3: The Modern Visual Novel](chapter_3.md#гnава-3-современные-визуаnьные-новеnnы)
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
    * Kanon by Key (1999)  
    * Air by Key (2000)  
    * Phoenix Wright: Ace Attorney by Capcom (2001)  
    * Digital: A Love Story by Christine Love (2010)  
    * Katawa Shoujo by Four Leaf Studios (2012)  
    * Clannad by Key (2004, 2015)  
    * Her Story by Sam Barlow (2015)  
    * Doki Doki Literature Club! by Team Salvato (2017)  
    * Open Sorcery by Abigail Corfman (2017)  
    * Simulacra by Kaigan Games (2017)  
    * Simulacra: Pipe Dreams (2018)  
  * [Как это делается - современные инструменты для создания визуальных новелл](chapter_3.md#как-это-деnается-современные-инструменты-дnя-создания-визуаnьных-новеnn) 
    * [Ren’Py](chapter_3.md#ren’py)
    * [Twine](chapter_3.md#twine)
    * Adrift 
    * TyranoBuilder by STRIKEWORKS (2015) 
    * VN Maker 
  * In Closing 
* Chapter 4: Working in Ren’Py, Twine, and TyranoBuilder 
  * Ren’Py in Detail 
    * How Ren’Py Works 
    * Starting a New Project 
    * The Ren’Py Workflow 
    * The Basics of Ren’Py Scripting 
    * Creating User Interaction: Menus 
    * Indentation and Text Blocks 
    * Conditional Statements: if, elif, else 
    * More on Control Statements 
  * Twine in Detail 
    * Linking Passages Together 
    * Twine and Audiovisuals 
    * The Three Varieties of Twine 
    * Twine’s Many Macros 
    * Twine’s User Interface Functions 
    * A Few Words on the IFID
    * Some Useful CSS Selectors 
  * TyranoBuilder in Detail 
    * The TyranoBuilder Workflow 
    * A Two-Scene Adventure 
    * Characters in TyranoBuilder 
    * Adding Multimedia 
    * TyranoBuilder and Media Files 
    * A Few Words on Game Settings 
    * Scripting in TyranoBuilder 
    * Live2D 
  * In Closing 
* Chapter 5: Deeper Down the Dungeon 
  * Ren’Py, Containers, and Codecs 
    * Using Video in Ren’Py 
    * Advanced Audio Functionality in Ren’Py 
    * Advanced Image Properties 
    * Customizing the Ren’Py GUI 
  * Advanced TyranoBuilder Techniques 
    * Plugins 
    * Of Variables and System Variables 
    * Randomized Dialogue 
    * iScript vs. JavaScript 
    * Clickable Image Areas 
    * Custom Fonts in TyranoBuilder 
  * Twine Magic 
    * Evoking JavaScript in Twine 
    * Text Reveal Effect in CSS 
    * Spicing Up the Text 
    * An Introduction to Harlowe 
    * Enter Snowman! 
  * In Closing 
* Chapter 6: Deploying for Popular Platforms 
  * Ren’Py and the Desktops 
    * Minimum System Requirements 
    * Icons for Desktops 
  * Ren’Py for Mobile Devices 
    * Deploying for Android 
    * Icons and the Splash Screen 
    * Keybindings in Android 
    * Testing Your Android App in Ren’Py 
    * Deploying for iOS 
    * Xcode and the iOS Process 
    * Updating Your iOS Projects 
    * App Icons and Splash Screens for iOS 
  * Deploying for Chrome OS/Chrome Browser 
    * Legalese for Android and iOS in Ren’Py 
  * Ren’Py for the Quirky: Raspberry Pi 
    * Setting Up a Pi for Ren’Py 
  * TyranoBuilder for Desktops 
    * TyranoBuilding for iOS 
    * TyranoBuilding for Android 
    * Additional Android Advice 
  * Twine for the Desktops 
    * Twine for iOS and Android 
    * The Wonders of PhoneGap Build 
    * Splash Screens for Android 
    * Icons for Android 
    * Splash Screens for iOS 
    * Icons for iOS 
    * The Apple p12 Certificate and PhoneGap 
  * In Closing 
* Chapter 7: Three Little Games 
  * Laying Out a Plan 
    * Cast of Characters 
    * Locations 
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
* Chapter 8: Promotional Strategies 
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