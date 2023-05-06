import{_ as n,M as a,p as u,q as o,R as D,N as l,V as t,t as e,a1 as i}from"./framework-5866ffd3.js";const r={},h=i('<h1 id="разработка-игр-с-помощью-ren-py" tabindex="-1"><a class="header-anchor" href="#разработка-игр-с-помощью-ren-py" aria-hidden="true">#</a> Разработка игр с помощью Ren’Py</h1><h2 id="вступление" tabindex="-1"><a class="header-anchor" href="#вступление" aria-hidden="true">#</a> Вступление</h2><p>Если думать о самых популярных видеоиграх, то вы не вспомните ни одной игры основанной на тексте. Большинство геймеров видят в этих играх что-то архаичное и скучное, делая предпочтение шутеру от первого лица. Однако в реальности все немного по-другому.</p><p>Старый жанр интерактивной художественной литературы и его современный брат визуальные новеллы, превращаются все больше в процветающий сегмент игровой индустрии. Например, игра <em>Clannad HD Edition</em> от разработчика Key превзошла по продажам некоторые популярные игры в сервисе Steam.</p><p>Хотя первоначально визуальные новеллы были чисто японским явлением, то сегодня они продаются и загружаются миллионами копий по всему миру. <em>Doki Doki Literature Club!</em> от Team Salvato - это бесплатная визуальная новелла со с балансированной монетизацией, которую в 2018 году загрузили два миллиона человек, и имеет огромное число поклонников по всему миру.</p><p>Для создания игр данного жанра мы рассмотрим в этой книге три инструмента: Ren’Py, Twine и TyranoBuilder. Данное программное обеспечение имеет все, что нужно для создания интерактивных художественных романов и визуальных новел для различных платформ. Первые два являются бесплатными. Изучая эти инструменты, вы ознакомитесь с базовыми навыками разработки игр, и откроете двери для более сложных систем разработки, если в этом возникнет необходимость.</p><h2 id="оглавление" tabindex="-1"><a class="header-anchor" href="#оглавление" aria-hidden="true">#</a> Оглавление</h2>',7),_=D("li",null,"Characters in TyranoBuilder",-1),d=D("li",null,"Adding Multimedia",-1),c=D("li",null,"TyranoBuilder and Media Files",-1),E=D("li",null,"A Few Words on Game Settings",-1),s=D("li",null,"Scripting in TyranoBuilder",-1),m=D("li",null,"Live2D",-1),p=D("li",null,"In Closing",-1),f=i("<li>Chapter 5: Deeper Down the Dungeon <ul><li>Ren’Py, Containers, and Codecs <ul><li>Using Video in Ren’Py</li><li>Advanced Audio Functionality in Ren’Py</li><li>Advanced Image Properties</li><li>Customizing the Ren’Py GUI</li></ul></li><li>Advanced TyranoBuilder Techniques <ul><li>Plugins</li><li>Of Variables and System Variables</li><li>Randomized Dialogue</li><li>iScript vs. JavaScript</li><li>Clickable Image Areas</li><li>Custom Fonts in TyranoBuilder</li></ul></li><li>Twine Magic <ul><li>Evoking JavaScript in Twine</li><li>Text Reveal Effect in CSS</li><li>Spicing Up the Text</li><li>An Introduction to Harlowe</li><li>Enter Snowman!</li></ul></li><li>In Closing</li></ul></li><li>Chapter 6: Deploying for Popular Platforms <ul><li>Ren’Py and the Desktops <ul><li>Minimum System Requirements</li><li>Icons for Desktops</li></ul></li><li>Ren’Py for Mobile Devices <ul><li>Deploying for Android</li><li>Icons and the Splash Screen</li><li>Keybindings in Android</li><li>Testing Your Android App in Ren’Py</li><li>Deploying for iOS</li><li>Xcode and the iOS Process</li><li>Updating Your iOS Projects</li><li>App Icons and Splash Screens for iOS</li></ul></li><li>Deploying for Chrome OS/Chrome Browser <ul><li>Legalese for Android and iOS in Ren’Py</li></ul></li><li>Ren’Py for the Quirky: Raspberry Pi <ul><li>Setting Up a Pi for Ren’Py</li></ul></li><li>TyranoBuilder for Desktops <ul><li>TyranoBuilding for iOS</li><li>TyranoBuilding for Android</li><li>Additional Android Advice</li></ul></li><li>Twine for the Desktops <ul><li>Twine for iOS and Android</li><li>The Wonders of PhoneGap Build</li><li>Splash Screens for Android</li><li>Icons for Android</li><li>Splash Screens for iOS</li><li>Icons for iOS</li><li>The Apple p12 Certificate and PhoneGap</li></ul></li><li>In Closing</li></ul></li><li>Chapter 7: Three Little Games <ul><li>Laying Out a Plan <ul><li>Cast of Characters</li><li>Locations</li></ul></li><li>Part I: The Beginnings of Taking Back August in Ren’Py <ul><li>Starting the Project</li><li>Setting Up the Characters</li><li>Custom Transitions</li><li>Assigning Images to Characters</li><li>Preparing Other Audiovisual Assets</li><li>Into the Fray!</li><li>Commenting Your Code</li><li>Your First Menu</li><li>Using Conditional Statements</li><li>Setting the Text Speed</li><li>Upgrading the Inventory System</li><li>Adding Functions (and Reusing Variables)</li><li>Particles with SnowBlossom</li><li>Randomizing Dialogue</li><li>Styles and Hyperlinks</li><li>Adding Videos</li><li>Text Speed on the Fly</li><li>More Fun with Text</li></ul></li><li>Part II: The Middle of Reginald’s Story with TyranoBuilder <ul><li>A Couple of Characters</li><li>On a Train</li><li>TyranoBuilder, Assets, and Directories</li><li>Sounds on a Train</li><li>First Glimpses of Interaction and Variables</li><li>Random Dialogue in TyranoBuilder</li><li>Adding Labels in TyranoScript</li><li>The Might of the 3D Camera</li><li>TyranoScript Macros</li><li>Mixing Graphics with Text</li><li>Graphical Buttons</li><li>The Grand Finale Featuring Nasuka</li><li>Various Tags and Tools</li></ul></li><li>Part III: Telling Tales with Twine <ul><li>Fonts and Colors</li><li>Fun with Harlowe and Variables</li><li>Custom Tags and Background Visuals</li><li>An Inventory in Harlowe</li><li>Refining Our Inventory and the Twine Footer</li><li>Resuming Our Story</li><li>Unlocking Locations with Items</li><li>Food, Dramatic Moments, and More Macros</li><li>Datamaps and Datasets</li><li>Extreme Fun with Arrays</li><li>More Visual Effects</li><li>Real-Time Twine</li><li>Our First Game Over</li><li>Hiding That Pesky Inventory</li><li>Adding Graphical Bars</li><li>Transitions and Rotation: More Visual Flair</li><li>Replacing Links with Passages</li><li>Prompting the User</li></ul></li><li>In Closing</li></ul></li><li>Chapter 8: Promotional Strategies <ul><li>Your Online Audience</li><li>Online Distribution for Budding Visual Novelists <ul><li>Releasing for Free</li><li>Selling Your Visual Novels</li></ul></li><li>Essential Marketing Practices <ul><li>Forum Decorum</li><li>Demo Games</li><li>Penetrating the Market with Free Stuff</li><li>Staying Serious About Platforms</li><li>The Power of Localization</li><li>Web Site</li><li>Trailer Video</li><li>Blog</li><li>Visual Novel Databases</li></ul></li><li>In Closing</li></ul></li>",4);function C(A,F){const B=a("RouterLink");return u(),o("div",null,[h,D("ul",null,[D("li",null,[l(B,{to:"/chapter_1.html#%D0%B3n%D0%B0%D0%B2%D0%B0-1-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D0%B8-%D0%BA%D0%B0%D0%BA-%D0%BE%D0%BD%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%8E%D1%82%D1%81%D1%8F"},{default:t(()=>[e("Глава 1. Истории и как они создаются")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_1.html#%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2n%D1%8F%D1%8E%D1%89%D1%83%D1%8E"},{default:t(()=>[e("Введение в драматическую составляющую")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0%D0%BD%D1%82%D0%B0%D0%B3%D0%BE%D0%BD%D0%B8%D1%81%D1%82"},{default:t(()=>[e("Антагонист")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BF%D1%80%D0%BE%D1%82%D0%B0%D0%B3%D0%BE%D0%BD%D0%B8%D1%81%D1%82"},{default:t(()=>[e("Протагонист")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0n%D1%8C%D1%82%D0%B5%D1%80-%D1%8D%D0%B3%D0%BE"},{default:t(()=>[e("Альтер эго")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BA%D0%B0%D1%82%D0%B0%D1%80%D1%81%D0%B8%D1%81"},{default:t(()=>[e("Катарсис")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BA%D0%BE%D0%BD%D1%84n%D0%B8%D0%BA%D1%82"},{default:t(()=>[e("Конфликт")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BAn%D0%B8%D1%88%D0%B5"},{default:t(()=>[e("Клише")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D1%80%D0%BE%D1%8Fn%D1%8C-%D0%B2-%D0%BA%D1%83%D1%81%D1%82%D0%B0%D1%85-deus-ex-machina"},{default:t(()=>[e("Рояль в кустах")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B4%D0%B2%D1%83%D1%81%D0%BC%D1%8B%D1%81n%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C"},{default:t(()=>[e("Двусмысленность")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D1%8D%D0%BA%D1%81%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F"},{default:t(()=>[e("Экспозиция")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BFn%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D1%80%D1%83%D0%B3n%D1%8B%D0%B9-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6"},{default:t(()=>[e("Плоский/круглый персонаж")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D1%87%D0%B5%D1%82%D0%B2%D1%91%D1%80%D1%82%D0%B0%D1%8F-%D1%81%D1%82%D0%B5%D0%BD%D0%B0"},{default:t(()=>[e("Четвёртая стена")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D1%82%D0%B5n%D1%8C"},{default:t(()=>[e("Повествование/Повествователь")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BF%D0%B5%D1%8F-%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%BF%D0%BE%D0%B4%D1%80%D0%B0%D0%B6%D0%B0%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Ономатопея (Звукоподражание)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F"},{default:t(()=>[e("Персонификация")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D1%8F-pov-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6"},{default:t(()=>[e("Точка зрения (POV-персонаж)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Сравнение")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BC%D0%BE%D0%BD%D0%BEn%D0%BE%D0%B3"},{default:t(()=>[e("Монолог")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B5n%D1%8C-%D0%BF%D0%BE%D1%8D%D1%82%D0%B8%D0%BA%D0%B0"},{default:t(()=>[e("Аристотель Поэтика")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BC%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%84-%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%B3%D0%B5%D1%80%D0%BE%D1%8F"},{default:t(()=>[e("Мономиф: Путешествие героя")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%E2%80%93-%D1%81%D0%B8%D0%BD%D0%BE%D0%BF%D1%81%D0%B8%D1%81-%D0%B0%D0%BA%D1%82-i-%D0%B8%D1%81%D1%85%D0%BE%D0%B4"},{default:t(()=>[e("Август возвращается – Синопсис. Акт I: Исход")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0%D0%BA%D1%82-ii-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D1%86%D0%B8%D1%8F"},{default:t(()=>[e("Акт II: Инициация")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0%D0%BA%D1%82-iii-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Акт III: Возвращение")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_1.html#_12-%D0%B0%D1%80%D1%85%D0%B5%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-n%D0%B8%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8"},{default:t(()=>[e("12 архетипов личности")]),_:1}),D("ol",null,[D("li",null,[l(B,{to:"/chapter_1.html#_1-%D0%B3%D0%B5%D1%80%D0%BE%D0%B9"},{default:t(()=>[e("Герой")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_2-%D0%B4%D0%B6%D0%BE%D0%BD-%D0%B4%D0%B6%D0%B5%D0%B9%D0%BD-%D0%B4%D0%BE%D1%83"},{default:t(()=>[e("Джон/Джейн Доу")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_3-%D0%B1%D1%83%D0%BD%D1%82%D0%B0%D1%80%D1%8C"},{default:t(()=>[e("Бунтарь")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_4-%D1%88%D1%83%D1%82"},{default:t(()=>[e("Шут")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5n%D1%8C"},{default:t(()=>[e("Правитель")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_6-%D0%BC%D1%83%D0%B4%D1%80%D0%B5%D1%86"},{default:t(()=>[e("Мудрец")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_7-%D0%BC%D0%B0%D0%B3"},{default:t(()=>[e("Маг")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_8-%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D1%86"},{default:t(()=>[e("Творец")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_9-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA"},{default:t(()=>[e("Любовник")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_10-%D0%BD%D0%B5%D0%B2%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9"},{default:t(()=>[e("Невинный")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_11-%D0%B8%D1%81%D0%BA%D0%B0%D1%82%D0%B5n%D1%8C"},{default:t(()=>[e("Искатель")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_12-%D1%86%D0%B5n%D0%B8%D1%82%D0%B5n%D1%8C"},{default:t(()=>[e("Целитель")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B4%D0%B5%D1%81%D1%8F%D1%82%D1%8C-%D0%BD%D0%B0%D0%B8n%D1%83%D1%87%D1%88%D0%B8%D1%85-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA"},{default:t(()=>[e("Десять наилучших практик")]),_:1}),D("ol",null,[D("li",null,[l(B,{to:"/chapter_1.html#_1-%D0%B7%D0%B0n%D0%BE%D0%B6%D0%B8-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%83-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8"},{default:t(()=>[e("Заложи основу истории")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_2-%D1%82%D1%89%D0%B0%D1%82%D0%B5n%D1%8C%D0%BD%D0%BE-%D0%B2%D1%8B%D0%B1%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B5-%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B4%D0%B2%D0%B8%D0%B6%D0%BE%D0%BA"},{default:t(()=>[e("Тщательно выбирайте игровой движок")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_3-%D0%BD%D0%B5-%D0%B7%D0%B0%D0%B1%D1%8B%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%BF%D1%80%D0%BE-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0n%D1%8C%D0%BD%D0%BE%D0%B5-%D0%B8-%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B5-%D0%BE%D1%84%D0%BE%D1%80%D0%BCn%D0%B5%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Не забывайте про музыкальное и звуковое оформление")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_4-%D0%B2%D0%B0%D1%88%D0%B8-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8-%D0%B4%D0%BEn%D0%B6%D0%BD%D1%8B-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F"},{default:t(()=>[e("Ваши персонажи должны развиваться")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_5-%D0%BF%D1%80%D0%B8%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%D1%81%D1%8C-%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B6%D0%B0%D0%BD%D1%80%D0%B0-%D0%B2-%D0%B2%D0%B0%D1%88%D0%B5%D0%B9-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D0%BE%D0%B9-%D0%BD%D0%BE%D0%B2%D0%B5nn%D0%B5"},{default:t(()=>[e("Придерживайтесь выбранного жанра в вашей визуальной новелле")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_6-%D0%B8%D1%81%D0%BF%D0%BEn%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-%D0%BAn%D0%B8%D1%88%D0%B5-%D1%81-%D1%83%D0%BC%D0%BE%D0%BC"},{default:t(()=>[e("Используйте клише с умом")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html##_7-%D1%83%D0%B1%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B5-%D0%BD%D0%B5%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%D0%B5"},{default:t(()=>[e("Убирайте ненужное")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_8-%D1%81%D0%B2%D1%8F%D0%B7%D1%8C-%D1%81-%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B5%D0%B9"},{default:t(()=>[e("Связь с аудиторией")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_9-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D1%83%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D0%BA%D0%B8"},{default:t(()=>[e("Создавайте уместные концовки")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#_10-%D0%BD%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%83%D0%B6%D0%B4%D0%B0%D0%B9%D1%82%D0%B5-%D0%B2%D1%81%D0%B5-%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D0%B4-%D1%80%D1%8F%D0%B4"},{default:t(()=>[e("Не принуждайте все читать под ряд")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B8%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn"},{default:t(()=>[e("Индустрия визуальных новелл")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_1.html#%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F"},{default:t(()=>[e("Визуализация и анимация")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B0%D1%83%D0%B4%D0%B8%D0%BE-%D1%81%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%BE%D0%B7%D0%B2%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Аудио сопровождение и озвучивание")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Программирование")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Тестирование")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%BB%D0%BE%D0%BA%D0%B0n%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F"},{default:t(()=>[e("Локализация")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B2-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85-%D0%B2%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D1%8F"},{default:t(()=>[e("В поисках вдохновения")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D0%B0-%D1%81-%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D0%BA%D1%80%D0%B8%D0%B7%D0%B8%D1%81%D0%BE%D0%BC"},{default:t(()=>[e("Борьба с творческим кризисом")]),_:1})]),D("li",null,[l(B,{to:"/chapter_1.html#%D0%B7%D0%B0%D0%BAn%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Заключение")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_2.html#%D0%B3n%D0%B0%D0%B2%D0%B0-2-%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D0%B5%D0%B5-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-n%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B"},{default:t(()=>[e("Глава 2. Древнее искусство интерактивной художественной литературы")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_2.html#%D0%BF%D1%80%D0%B0%D0%BF%D1%80%D0%B0%D0%B4%D0%B5%D0%B4-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn-eliza-1966"},{default:t(()=>[e("Прапрадед визуальных новелл: ELIZA (1966)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#%D0%B4%D0%B5%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B6%D0%B0%D0%BD%D1%80%D0%B0-colossal-cave-adventure-1975"},{default:t(()=>[e("Дедушка жанра: Colossal Cave Adventure (1975)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4%D1%86%D1%8B"},{default:t(()=>[e("Первопроходцы")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_2.html#infocom"},{default:t(()=>[e("Infocom")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#magnetic-scrolls"},{default:t(()=>[e("Magnetic Scrolls")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#level-9-computing"},{default:t(()=>[e("Level 9 Computing")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_2.html#%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5-%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%B8%D0%B3%D1%80%D1%8B-%D0%B2-%D1%8D%D1%82%D0%BE%D0%BC-%D0%B6%D0%B0%D0%BD%D1%80%D0%B5"},{default:t(()=>[e("Другие известные игры в этом жанре ")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_2.html#king%E2%80%99s-quest-quest-for-the-crown-%D0%BE%D1%82-sierra-on-line-1984"},{default:t(()=>[e("King’s Quest: Quest for the Crown от Sierra On-Line (1984)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#%D1%82%D1%80%D0%B8n%D0%BE%D0%B3%D0%B8%D1%8F-spellcasting-%D0%BE%D1%82-legend-entertainment-1990%E2%80%931992"},{default:t(()=>[e("Трилогия Spellcasting от Legend Entertainment (1990–1992)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#timequest-%D0%BE%D1%82-legend-entertainment-1991"},{default:t(()=>[e("Timequest от Legend Entertainment (1991)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#demoniak-%D0%BE%D1%82-palace-software-1991"},{default:t(()=>[e("Demoniak от Palace Software (1991)")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_2.html#%D0%BA%D0%B0%D0%BA-%D0%BE%D0%BD%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B4%D0%B5n%D0%B0n%D0%B8-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B4n%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-n%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B"},{default:t(()=>[e("Как они это делали? Инструменты для создания интерактивной художественной литературы")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_2.html#%D0%BD%D0%B5%D1%81%D0%BA%D0%BEn%D1%8C%D0%BA%D0%BE-%D1%81n%D0%BE%D0%B2-%D0%BE-%D0%BF%D0%B0%D1%80%D1%81%D0%B5%D1%80%D0%B0%D1%85"},{default:t(()=>[e("Несколько слов о парсерах")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#zork-interactive-language-%D0%B7%D0%BE%D1%80%D0%BA-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-zil-%D0%B8n%D0%B8-z-machine"},{default:t(()=>[e("Zork Interactive Language (ZIL) или Z-machine")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#quill-%D0%BE%D1%82-gilsoft-1983"},{default:t(()=>[e("Quill от Gilsoft (1983)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#professional-adventure-writer-%D0%BE%D1%82-gilsoft-1986"},{default:t(()=>[e("Professional Adventure Writer от Gilsoft (1986)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#adventure-game-toolkit-%D0%BE%D1%82-%D0%B4%D1%8D%D0%B2%D0%B8%D0%B4%D0%B0-%D0%BC%D0%B0n%D1%8C%D0%BC%D0%B1%D0%B5%D1%80%D0%B3%D0%B0-1987"},{default:t(()=>[e("Adventure Game Toolkit от Дэвида Мальмберга (1987)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_2.html#inform-%D0%BE%D1%82-%D0%B3%D1%80%D1%8D%D1%85%D0%B5%D0%BC%D0%B0-%D0%BD%D0%B5n%D1%8C%D1%81%D0%BE%D0%BD%D0%B0-1993%E2%80%93"},{default:t(()=>[e("Inform от Грэхема Нельсона (1993–)")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_2.html#%D0%B7%D0%B0%D0%BAn%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Заключение")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B3n%D0%B0%D0%B2%D0%B0-3-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B5nn%D1%8B"},{default:t(()=>[e("Глава 3. Современные визуальные новеллы")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_3.html#%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B5nn%D1%8B-%D0%BE%D0%B4%D0%BD%D0%BE%D0%B7%D0%BD%D0%B0%D1%87%D0%BD%D0%BE-%D0%BF%D0%BE%D0%BF%D1%83n%D1%8F%D1%80%D0%BD%D1%8B-%D0%B2-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"},{default:t(()=>[e("Визуальные новеллы - однозначно популярны в Японии")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%82%D1%80%D0%BE%D0%BF%D1%8B"},{default:t(()=>[e("Тропы")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_3.html#%D1%81%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC-%D0%B3%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%B0-%D1%84%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B1%D0%B5%D0%B7n%D0%B8%D0%BA%D0%B8%D0%B9-%D0%B3n%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B5%D1%80%D0%BE%D0%B9"},{default:t(()=>[e("Синдром Гордона Фримена")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%B4%D0%B8%D0%B0n%D0%BE%D0%B3%D0%BE%D0%B2"},{default:t(()=>[e("Дерево диалогов")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D0%BE%D0%BA"},{default:t(()=>[e("Дерево концовок")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0n%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%D0%B0-in-medias-res"},{default:t(()=>[e("С центрального эпизода/In Medias Res")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B3%D0%B8%D0%BA-%D0%B8%D0%B7-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9-%D1%88%D0%BA%D0%BEn%D1%8B"},{default:t(()=>[e("Гик из средней школы")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%80%D0%B5%D0%B7%D0%BA%D0%B0-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA"},{default:t(()=>[e("Резка веток")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BC%D0%B5%D1%87-%D0%B8-%D0%BA%D0%BEn%D0%B4%D0%BE%D0%B2%D1%81%D1%82%D0%B2%D0%BE"},{default:t(()=>[e("Меч и Колдовство")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D0%B8-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn-%D0%B8-%D0%B2n%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"},{default:t(()=>[e("Основные концепции визуальных новелл и влияние Японии")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_3.html#%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5"},{default:t(()=>[e("Аниме")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B1%D0%B8%D1%81%D1%91%D0%B4%D0%B7%D1%91-%D0%B8%D0%B3%D1%80%D1%8B-%D1%81%D0%B8%D0%BC%D1%83n%D1%8F%D1%82%D0%BE%D1%80%D1%8B-%D1%81%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9"},{default:t(()=>[e("Бисёдзё игры (Симуляторы свиданий)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%81%D0%B8%D0%BC%D1%83n%D1%8F%D1%82%D0%BE%D1%80-%D1%81%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9"},{default:t(()=>[e("Симулятор свиданий")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B4%D0%BE%D0%B4%D0%B7%D0%B8%D0%BD%D1%81%D0%B8-%D0%B8%D0%B3%D1%80%D1%8B"},{default:t(()=>[e("Додзинси игры")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%8D%D1%80%D0%BE%D0%B3%D0%B5"},{default:t(()=>[e("Эроге")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%85%D0%B5%D0%BD%D1%82%D0%B0%D0%B9"},{default:t(()=>[e("Хентай")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B8%D1%81%D0%B5%D0%BA%D0%B0%D0%B9"},{default:t(()=>[e("Исекай")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BA%D0%B0%D0%BC%D0%B8%D0%B3%D0%B5-%D0%BA%D1%83%D1%81%D0%BE%D0%B3%D0%B5"},{default:t(()=>[e("Камиге/Кусоге")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BA%D0%B0%D0%B2%D0%B0%D0%B8%D0%B9"},{default:t(()=>[e("Каваий")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BA%D0%B8%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%8B"},{default:t(()=>[e("Кинетические романы")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BE%D1%82%D0%B0%D0%BA%D1%83"},{default:t(()=>[e("Отаку")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BE%D1%82%D0%BE%D0%BC%D1%8D"},{default:t(()=>[e("Отомэ")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B2%D0%BEn%D1%88%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B4%D1%80%D1%83%D0%B3%D0%B0"},{default:t(()=>[e("Волшебная подруга")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BC%D0%B0%D1%85%D0%BE-%D1%81%D1%91%D0%B4%D0%B7%D1%91-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-%D0%B2%D0%BEn%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D1%86%D1%8B"},{default:t(()=>[e("Махо-сёдзё (Девушки волшебницы)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0"},{default:t(()=>[e("Манга")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BC%D0%B5%D1%85%D0%B0"},{default:t(()=>[e("Меха")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BC%D0%BE%D1%8D"},{default:t(()=>[e("Моэ")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BD%D0%B0%D0%BA%D0%B8%D0%B3%D0%B5-%D1%83%D1%86%D1%83%D0%B3%D0%B5"},{default:t(()=>[e("Накиге/Уцуге")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%86%D1%83%D0%BD%D0%B4%D1%8D%D1%80%D1%8D"},{default:t(()=>[e("Цундэрэ")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_3.html#%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D1%8D%D1%80%D0%B0-%D0%BA%D0%B0%D0%BC%D0%B8%D0%B3%D0%B5-%D0%B8n%D0%B8-%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BAn%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0"},{default:t(()=>[e("Современная эра Камиге или новая классика")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_3.html#kanon-%D0%BE%D1%82-key-1999"},{default:t(()=>[e("Kanon от Key (1999)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#air-%D0%BE%D1%82-key-2000"},{default:t(()=>[e("Air от Key (2000)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#phoenix-wright-ace-attorney-%D0%BE%D1%82-capcom-2001"},{default:t(()=>[e("Phoenix Wright: Ace Attorney от Capcom (2001)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#digital-a-love-story-%D0%BE%D1%82-%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D0%BB%D0%B0%D0%B2-2010"},{default:t(()=>[e("Digital: A Love Story от Кристина Лав (2010)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#katawa-shoujo-%D0%BE%D1%82-four-leaf-studios-2012"},{default:t(()=>[e("Katawa Shoujo от Four Leaf Studios (2012)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#clannad-%D0%BE%D1%82-key-2004-2015"},{default:t(()=>[e("Clannad от Key (2004, 2015)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#her-story-%D0%BE%D1%82-%D1%81%D1%8D%D0%BC%D0%BE%D0%BC%D0%B0-%D0%B1%D0%B0%D1%80n%D0%BE%D1%83-2015"},{default:t(()=>[e("Her Story от Сэмома Барлоу (2015)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#doki-doki-literature-club-%D0%BE%D1%82-%D0%B4%D1%8D%D0%BD%D0%B0-%D1%81%D0%B0n%D1%8C%D0%B2%D0%B0%D1%82%D0%BE-2017"},{default:t(()=>[e("Doki Doki Literature Club! от Дэна Сальвато (2017)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#open-sorcery-%D0%BE%D1%82-%D1%8D%D0%B1%D0%B8%D0%B3%D0%B5%D0%B9n-%D0%BA%D0%BE%D1%80%D1%84%D0%BC%D0%B0%D0%BD-2017"},{default:t(()=>[e("Open Sorcery от Эбигейл Корфман (2017)")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#simulacra-%D0%BE%D1%82-kaigan-games-2017"},{default:t(()=>[e("Simulacra от Kaigan Games")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#simulacra-pipe-dreams-2018"},{default:t(()=>[e("Simulacra: Pipe Dreams (2018)")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D0%B4%D0%B5n%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B4n%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn"},{default:t(()=>[e("Как это делается - современные инструменты для создания визуальных новелл")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_3.html#ren%E2%80%99py"},{default:t(()=>[e("Ren’Py")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#twine"},{default:t(()=>[e("Twine")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#adrift"},{default:t(()=>[e("Adrift")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#tyranobuilder-%D0%BE%D1%82-strikeworks"},{default:t(()=>[e("TyranoBuilder от STRIKEWORKS")]),_:1})]),D("li",null,[l(B,{to:"/chapter_3.html#vn-maker"},{default:t(()=>[e("VN Maker")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_3.html#%D0%B7%D0%B0%D0%BAn%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:t(()=>[e("Заключение")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%B3n%D0%B0%D0%B2%D0%B0-4-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D0%B8%D0%BC%D1%81%D1%8F-%D1%81-ren%E2%80%99py-twine-%D0%B8-tyranobuilder"},{default:t(()=>[e("Глава 4. Знакомимся с Ren’Py, Twine и TyranoBuilder")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_4.html#ren-py-%D0%B2-%D0%B4%D0%B5%D1%82%D0%B0n%D1%8F%D1%85"},{default:t(()=>[e("Ren'Py в деталях")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_4.html#%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-ren-py"},{default:t(()=>[e("Как работает Ren'Py")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0"},{default:t(()=>[e("Создание нового проекта")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB-ren-py"},{default:t(()=>[e("Функционал Ren'Py")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B2-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2-%D0%BD%D0%B0-ren-py"},{default:t(()=>[e("Основы в написания сценариев на Ren’Py")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B8%D1%81%D1%82%D0%B2%D1%83%D0%B5%D0%BC-%D1%81-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%BC-%D0%BC%D0%B5%D0%BD%D1%8E"},{default:t(()=>[e("Взаимодействуем с пользователем: Меню")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BE%D1%82%D1%81%D1%82%D1%83%D0%BF%D1%8B-%D0%B8-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8"},{default:t(()=>[e("Отступы и текстовые блоки")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-if-elif-else"},{default:t(()=>[e("Условные операторы: if, elif, else")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B8-%D0%BE%D0%B1-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B5-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F"},{default:t(()=>[e("Подробней о операторе управления")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_4.html#twine-%D0%B2-%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8F%D1%85"},{default:t(()=>[e("Twine в деталях")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_4.html#%D1%81%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC-%D0%BF%D0%B0%D1%80%D0%B0%D0%B3%D1%80%D0%B0%D1%84%D1%8B-%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8"},{default:t(()=>[e("Связываем параграфы переходами")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#twine-%D0%B8-%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D0%B2%D0%B8%D0%B7%D1%83%D0%B0%D0%BB"},{default:t(()=>[e("Twine и аудиовизуал")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%8B-twine"},{default:t(()=>[e("Форматы Twine")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BC%D0%B0%D0%BA%D1%80%D0%BE%D1%81%D1%8B-%D0%B2-twine"},{default:t(()=>[e("Макросы в Twine")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%D1%81-twine"},{default:t(()=>[e("Пользовательский интерфейс Twine")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D1%81%D0%BB%D0%BE%D0%B2-%D0%BE-ifid"},{default:t(()=>[e("Несколько слов о IFID")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D0%B8%D0%BC%D1%81%D1%8F-%D1%81-css"},{default:t(()=>[e("Знакомимся с CSS")]),_:1})])])]),D("li",null,[l(B,{to:"/chapter_4.html#tyranobuilder-%D0%B2-%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8F%D1%85"},{default:t(()=>[e("TyranoBuilder в деталях")]),_:1}),D("ul",null,[D("li",null,[l(B,{to:"/chapter_4.html#%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B8-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%B2-tyranobuilder"},{default:t(()=>[e("Рабочий процесс в TyranoBuilder")]),_:1})]),D("li",null,[l(B,{to:"/chapter_4.html#%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B4%D0%B2%D1%83%D1%85-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%85"},{default:t(()=>[e("Приключение в двух сценах")]),_:1})]),_,d,c,E,s,m])]),p])]),f,D("li",null,[l(B,{to:"/sources.html"},{default:t(()=>[e("Источники")]),_:1})])])])}const y=n(r,[["render",C],["__file","index.html.vue"]]);export{y as default};
