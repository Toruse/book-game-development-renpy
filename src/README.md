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
для различных платформ. Первые два являются бесплатными. Изучая эти инструменты, вы ознакомиться с базовыми навыками 
разработки игр, и открывает двери для более сложных систем разработки, если в этом возникнет необходимость.

## Оглавление

* [Глава 1. Истории и как они создаются](chapter_1.md#гnава-1-истории-и-как-они-создаются) 
  * [Введение в драматическую составляющую](chapter_1.md#введение-в-драматическую-составnяющую) 
    * Antagonist 
    * Protagonist 
    * Alter Ego 
    * Catharsis 
    * Conflict 
    * Cliché 
    * Deus Ex Machina 
    * Double Entendre 
    * Exposition 
    * Flat/Round Character 
    * Fourth Wall 
    * Narration/Narrator 
    * Onomatopoeia 
    * Personification 
    * Point of View (POV) 
    * Simile 
    * Soliloquy 
  * Aristotelian Poetics 
  * The Monomyth: A Hero’s Journey 
    * Taking Back August – A Synopsis Act I: Departure  
    * Act II: Initiation 
    * Act III: Return 
  * The 12 Character Archetypes 
    1. The Hero 
    2. John/Jane Doe 
    3. The Rebel 
    4. The Joker 
    5. The Ruler 
    6. The Sage 
    7. The Magician 
    8. The Creator 
    9. The Lover 
    10. The Innocent One 
    11. The Explorer 
    12. The Healer 
  * Ten Visual Novel Good Practices 
    1. Put the Story First 
    2. Choose the Engine Carefully 
    3. Don’t Overlook the Audiovisuals 
    4. Make Your Characters Grow 
    5. Honor the Sub-genre of Your Visual Novel 
    6. Use Clichés Wisely 
    7. Trim Unnecessary Elements 
    8. Bond with Your Audience 
    9. Only Provide the Endings Your Story Needs 
    10. Indulge in Forced Reading Sparingly 
  * Working for the Visual Novel Industry 
    * Visuals and Animation 
    * Audio Production and Voice Acting 
    * Programming 
    * Testing 
    * Localization 
  * Musings on Inspiration 
  * Fighting the Writer’s Block 
  * In Closing 
* Chapter 2: The (Ancient) Art of Interactive Fiction 
  * The Great Grandfather of the Visual Novel: ELIZA (1966) 
  * The Grandfather of the Genre: Colossal Cave Adventure (1975)  
  * The Early Trailblazers 
    * Infocom 
    * Magnetic Scrolls 
    * Level 9 Computing 
  * Other Notable Games in the Genre 
    * King’s Quest: Quest for the Crown by Sierra On-Line (1984)  
    * The Spellcasting Trilogy by Legend Entertainment (1990–1992)  
    * Timequest by Legend Entertainment (1991)  
    * Demoniak by Palace Software (1991)  
  * How They Did It – Early Tools for Interactive Fiction 
    * A Few Words on Parsers 
    * Zork Interactive Language (ZIL) and the Z-machine 
    * The Quill by Gilsoft (1983) 
    * Professional Adventure Writer by Gilsoft (1986) 
    * Adventure Game Toolkit by David Malmberg (1987) 
    * Inform by Graham Nelson (1993–) 
  * In Closing 
* Chapter 3: The Modern Visual Novel 
  * The Visual Novel: Definitely Big in Japan 
  * Tropes 
    * The Faceless Protagonist 
    * Dialogue Tree 
    * The Endings Tree 
    * Into the Middle of Things/In Medias Res 
    * High School Geek 
    * Branch Cutting 
    * Sword and Sorcery 
  * Core Concepts of Japanese-Influenced Visual Novels 
    * Anime 
    * Bishoujo (also Galge) Games 
    * Dating Sim 
    * Doujinshi Games 
    * Eroge 
    * Hentai 
    * Isekai 
    * Kamige/Kusoge 
    * Kawaii 
    * Kinetic Novel 
    * Otaku 
    * Otome 
    * Magical Girlfriend 
    * Mahou Shoujo (The Magical Girl) 
    * Manga 
    * Mecha 
    * Moe(ge) 
    * Nakige/Utsuge 
    * Tsundere
  * Modern-Era Kamige, or the New Classics 
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
  * How We Do It – Modern Tools for Visual Novels 
    * Ren’Py 
    * Twine 
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