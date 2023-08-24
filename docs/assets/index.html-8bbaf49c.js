import{_ as a,M as n,p as u,q as r,R as D,N as t,V as e,t as B,a1 as i}from"./framework-5866ffd3.js";const o={},h=i('<h1 id="разработка-игр-с-помощью-ren-py" tabindex="-1"><a class="header-anchor" href="#разработка-игр-с-помощью-ren-py" aria-hidden="true">#</a> Разработка игр с помощью Ren’Py</h1><h2 id="вступление" tabindex="-1"><a class="header-anchor" href="#вступление" aria-hidden="true">#</a> Вступление</h2><p>Если думать о самых популярных видеоиграх, то вы не вспомните ни одной игры основанной на тексте. Большинство геймеров видят в этих играх что-то архаичное и скучное, делая предпочтение шутеру от первого лица. Однако в реальности все немного по-другому.</p><p>Старый жанр интерактивной художественной литературы и его современный брат визуальные новеллы, превращаются все больше в процветающий сегмент игровой индустрии. Например, игра <em>Clannad HD Edition</em> от разработчика Key превзошла по продажам некоторые популярные игры в сервисе Steam.</p><p>Хотя первоначально визуальные новеллы были чисто японским явлением, то сегодня они продаются и загружаются миллионами копий по всему миру. <em>Doki Doki Literature Club!</em> от Team Salvato - это бесплатная визуальная новелла со с балансированной монетизацией, которую в 2018 году загрузили два миллиона человек, и имеет огромное число поклонников по всему миру.</p><p>Для создания игр данного жанра мы рассмотрим в этой книге три инструмента: Ren’Py, Twine и TyranoBuilder. Данное программное обеспечение имеет все, что нужно для создания интерактивных художественных романов и визуальных новел для различных платформ. Первые два являются бесплатными. Изучая эти инструменты, вы ознакомитесь с базовыми навыками разработки игр, и откроете двери для более сложных систем разработки, если в этом возникнет необходимость.</p><h2 id="оглавление" tabindex="-1"><a class="header-anchor" href="#оглавление" aria-hidden="true">#</a> Оглавление</h2>',7),_=D("li",null,"iScript vs. JavaScript",-1),d=D("li",null,"Clickable Image Areas",-1),c=D("li",null,"Custom Fonts in TyranoBuilder",-1),E=D("li",null,[B("Twine Magic "),D("ul",null,[D("li",null,"Evoking JavaScript in Twine"),D("li",null,"Text Reveal Effect in CSS"),D("li",null,"Spicing Up the Text"),D("li",null,"An Introduction to Harlowe"),D("li",null,"Enter Snowman!")])],-1),p=D("li",null,"In Closing",-1),m=i("<li>Chapter 6: Deploying for Popular Platforms <ul><li>Ren’Py and the Desktops <ul><li>Minimum System Requirements</li><li>Icons for Desktops</li></ul></li><li>Ren’Py for Mobile Devices <ul><li>Deploying for Android</li><li>Icons and the Splash Screen</li><li>Keybindings in Android</li><li>Testing Your Android App in Ren’Py</li><li>Deploying for iOS</li><li>Xcode and the iOS Process</li><li>Updating Your iOS Projects</li><li>App Icons and Splash Screens for iOS</li></ul></li><li>Deploying for Chrome OS/Chrome Browser <ul><li>Legalese for Android and iOS in Ren’Py</li></ul></li><li>Ren’Py for the Quirky: Raspberry Pi <ul><li>Setting Up a Pi for Ren’Py</li></ul></li><li>TyranoBuilder for Desktops <ul><li>TyranoBuilding for iOS</li><li>TyranoBuilding for Android</li><li>Additional Android Advice</li></ul></li><li>Twine for the Desktops <ul><li>Twine for iOS and Android</li><li>The Wonders of PhoneGap Build</li><li>Splash Screens for Android</li><li>Icons for Android</li><li>Splash Screens for iOS</li><li>Icons for iOS</li><li>The Apple p12 Certificate and PhoneGap</li></ul></li><li>In Closing</li></ul></li><li>Chapter 7: Three Little Games <ul><li>Laying Out a Plan <ul><li>Cast of Characters</li><li>Locations</li></ul></li><li>Part I: The Beginnings of Taking Back August in Ren’Py <ul><li>Starting the Project</li><li>Setting Up the Characters</li><li>Custom Transitions</li><li>Assigning Images to Characters</li><li>Preparing Other Audiovisual Assets</li><li>Into the Fray!</li><li>Commenting Your Code</li><li>Your First Menu</li><li>Using Conditional Statements</li><li>Setting the Text Speed</li><li>Upgrading the Inventory System</li><li>Adding Functions (and Reusing Variables)</li><li>Particles with SnowBlossom</li><li>Randomizing Dialogue</li><li>Styles and Hyperlinks</li><li>Adding Videos</li><li>Text Speed on the Fly</li><li>More Fun with Text</li></ul></li><li>Part II: The Middle of Reginald’s Story with TyranoBuilder <ul><li>A Couple of Characters</li><li>On a Train</li><li>TyranoBuilder, Assets, and Directories</li><li>Sounds on a Train</li><li>First Glimpses of Interaction and Variables</li><li>Random Dialogue in TyranoBuilder</li><li>Adding Labels in TyranoScript</li><li>The Might of the 3D Camera</li><li>TyranoScript Macros</li><li>Mixing Graphics with Text</li><li>Graphical Buttons</li><li>The Grand Finale Featuring Nasuka</li><li>Various Tags and Tools</li></ul></li><li>Part III: Telling Tales with Twine <ul><li>Fonts and Colors</li><li>Fun with Harlowe and Variables</li><li>Custom Tags and Background Visuals</li><li>An Inventory in Harlowe</li><li>Refining Our Inventory and the Twine Footer</li><li>Resuming Our Story</li><li>Unlocking Locations with Items</li><li>Food, Dramatic Moments, and More Macros</li><li>Datamaps and Datasets</li><li>Extreme Fun with Arrays</li><li>More Visual Effects</li><li>Real-Time Twine</li><li>Our First Game Over</li><li>Hiding That Pesky Inventory</li><li>Adding Graphical Bars</li><li>Transitions and Rotation: More Visual Flair</li><li>Replacing Links with Passages</li><li>Prompting the User</li></ul></li><li>In Closing</li></ul></li><li>Chapter 8: Promotional Strategies <ul><li>Your Online Audience</li><li>Online Distribution for Budding Visual Novelists <ul><li>Releasing for Free</li><li>Selling Your Visual Novels</li></ul></li><li>Essential Marketing Practices <ul><li>Forum Decorum</li><li>Demo Games</li><li>Penetrating the Market with Free Stuff</li><li>Staying Serious About Platforms</li><li>The Power of Localization</li><li>Web Site</li><li>Trailer Video</li><li>Blog</li><li>Visual Novel Databases</li></ul></li><li>In Closing</li></ul></li>",3);function f(s,A){const l=n("RouterLink");return u(),r("div",null,[h,D("ul",null,[D("li",null,[t(l,{to:"/chapter_1.html#%D0%B3n%D0%B0%D0%B2%D0%B0-1-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D0%B8-%D0%BA%D0%B0%D0%BA-%D0%BE%D0%BD%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%8E%D1%82%D1%81%D1%8F"},{default:e(()=>[B("Глава 1. Истории и как они создаются")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_1.html#%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B4%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D1%83%D1%8E-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2n%D1%8F%D1%8E%D1%89%D1%83%D1%8E"},{default:e(()=>[B("Введение в драматическую составляющую")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0%D0%BD%D1%82%D0%B0%D0%B3%D0%BE%D0%BD%D0%B8%D1%81%D1%82"},{default:e(()=>[B("Антагонист")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BF%D1%80%D0%BE%D1%82%D0%B0%D0%B3%D0%BE%D0%BD%D0%B8%D1%81%D1%82"},{default:e(()=>[B("Протагонист")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0n%D1%8C%D1%82%D0%B5%D1%80-%D1%8D%D0%B3%D0%BE"},{default:e(()=>[B("Альтер эго")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BA%D0%B0%D1%82%D0%B0%D1%80%D1%81%D0%B8%D1%81"},{default:e(()=>[B("Катарсис")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BA%D0%BE%D0%BD%D1%84n%D0%B8%D0%BA%D1%82"},{default:e(()=>[B("Конфликт")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BAn%D0%B8%D1%88%D0%B5"},{default:e(()=>[B("Клише")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D1%80%D0%BE%D1%8Fn%D1%8C-%D0%B2-%D0%BA%D1%83%D1%81%D1%82%D0%B0%D1%85-deus-ex-machina"},{default:e(()=>[B("Рояль в кустах")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B4%D0%B2%D1%83%D1%81%D0%BC%D1%8B%D1%81n%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C"},{default:e(()=>[B("Двусмысленность")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D1%8D%D0%BA%D1%81%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F"},{default:e(()=>[B("Экспозиция")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BFn%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D1%80%D1%83%D0%B3n%D1%8B%D0%B9-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6"},{default:e(()=>[B("Плоский/круглый персонаж")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D1%87%D0%B5%D1%82%D0%B2%D1%91%D1%80%D1%82%D0%B0%D1%8F-%D1%81%D1%82%D0%B5%D0%BD%D0%B0"},{default:e(()=>[B("Четвёртая стена")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D1%82%D0%B5n%D1%8C"},{default:e(()=>[B("Повествование/Повествователь")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BF%D0%B5%D1%8F-%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%BF%D0%BE%D0%B4%D1%80%D0%B0%D0%B6%D0%B0%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Ономатопея (Звукоподражание)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F"},{default:e(()=>[B("Персонификация")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B7%D1%80%D0%B5%D0%BD%D0%B8%D1%8F-pov-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6"},{default:e(()=>[B("Точка зрения (POV-персонаж)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D1%81%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Сравнение")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BC%D0%BE%D0%BD%D0%BEn%D0%BE%D0%B3"},{default:e(()=>[B("Монолог")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0%D1%80%D0%B8%D1%81%D1%82%D0%BE%D1%82%D0%B5n%D1%8C-%D0%BF%D0%BE%D1%8D%D1%82%D0%B8%D0%BA%D0%B0"},{default:e(()=>[B("Аристотель Поэтика")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BC%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%84-%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%B3%D0%B5%D1%80%D0%BE%D1%8F"},{default:e(()=>[B("Мономиф: Путешествие героя")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%E2%80%93-%D1%81%D0%B8%D0%BD%D0%BE%D0%BF%D1%81%D0%B8%D1%81-%D0%B0%D0%BA%D1%82-i-%D0%B8%D1%81%D1%85%D0%BE%D0%B4"},{default:e(()=>[B("Август возвращается – Синопсис. Акт I: Исход")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0%D0%BA%D1%82-ii-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D1%86%D0%B8%D1%8F"},{default:e(()=>[B("Акт II: Инициация")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0%D0%BA%D1%82-iii-%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Акт III: Возвращение")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_1.html#_12-%D0%B0%D1%80%D1%85%D0%B5%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-n%D0%B8%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8"},{default:e(()=>[B("12 архетипов личности")]),_:1}),D("ol",null,[D("li",null,[t(l,{to:"/chapter_1.html#_1-%D0%B3%D0%B5%D1%80%D0%BE%D0%B9"},{default:e(()=>[B("Герой")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_2-%D0%B4%D0%B6%D0%BE%D0%BD-%D0%B4%D0%B6%D0%B5%D0%B9%D0%BD-%D0%B4%D0%BE%D1%83"},{default:e(()=>[B("Джон/Джейн Доу")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_3-%D0%B1%D1%83%D0%BD%D1%82%D0%B0%D1%80%D1%8C"},{default:e(()=>[B("Бунтарь")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_4-%D1%88%D1%83%D1%82"},{default:e(()=>[B("Шут")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D1%82%D0%B5n%D1%8C"},{default:e(()=>[B("Правитель")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_6-%D0%BC%D1%83%D0%B4%D1%80%D0%B5%D1%86"},{default:e(()=>[B("Мудрец")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_7-%D0%BC%D0%B0%D0%B3"},{default:e(()=>[B("Маг")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_8-%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D1%86"},{default:e(()=>[B("Творец")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_9-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA"},{default:e(()=>[B("Любовник")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_10-%D0%BD%D0%B5%D0%B2%D0%B8%D0%BD%D0%BD%D1%8B%D0%B9"},{default:e(()=>[B("Невинный")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_11-%D0%B8%D1%81%D0%BA%D0%B0%D1%82%D0%B5n%D1%8C"},{default:e(()=>[B("Искатель")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_12-%D1%86%D0%B5n%D0%B8%D1%82%D0%B5n%D1%8C"},{default:e(()=>[B("Целитель")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B4%D0%B5%D1%81%D1%8F%D1%82%D1%8C-%D0%BD%D0%B0%D0%B8n%D1%83%D1%87%D1%88%D0%B8%D1%85-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA"},{default:e(()=>[B("Десять наилучших практик")]),_:1}),D("ol",null,[D("li",null,[t(l,{to:"/chapter_1.html#_1-%D0%B7%D0%B0n%D0%BE%D0%B6%D0%B8-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%83-%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8"},{default:e(()=>[B("Заложи основу истории")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_2-%D1%82%D1%89%D0%B0%D1%82%D0%B5n%D1%8C%D0%BD%D0%BE-%D0%B2%D1%8B%D0%B1%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B5-%D0%B8%D0%B3%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B4%D0%B2%D0%B8%D0%B6%D0%BE%D0%BA"},{default:e(()=>[B("Тщательно выбирайте игровой движок")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_3-%D0%BD%D0%B5-%D0%B7%D0%B0%D0%B1%D1%8B%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D0%BF%D1%80%D0%BE-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0n%D1%8C%D0%BD%D0%BE%D0%B5-%D0%B8-%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B5-%D0%BE%D1%84%D0%BE%D1%80%D0%BCn%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Не забывайте про музыкальное и звуковое оформление")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_4-%D0%B2%D0%B0%D1%88%D0%B8-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8-%D0%B4%D0%BEn%D0%B6%D0%BD%D1%8B-%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F"},{default:e(()=>[B("Ваши персонажи должны развиваться")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_5-%D0%BF%D1%80%D0%B8%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%D1%81%D1%8C-%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B6%D0%B0%D0%BD%D1%80%D0%B0-%D0%B2-%D0%B2%D0%B0%D1%88%D0%B5%D0%B9-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D0%BE%D0%B9-%D0%BD%D0%BE%D0%B2%D0%B5nn%D0%B5"},{default:e(()=>[B("Придерживайтесь выбранного жанра в вашей визуальной новелле")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_6-%D0%B8%D1%81%D0%BF%D0%BEn%D1%8C%D0%B7%D1%83%D0%B9%D1%82%D0%B5-%D0%BAn%D0%B8%D1%88%D0%B5-%D1%81-%D1%83%D0%BC%D0%BE%D0%BC"},{default:e(()=>[B("Используйте клише с умом")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html##_7-%D1%83%D0%B1%D0%B8%D1%80%D0%B0%D0%B9%D1%82%D0%B5-%D0%BD%D0%B5%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%D0%B5"},{default:e(()=>[B("Убирайте ненужное")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_8-%D1%81%D0%B2%D1%8F%D0%B7%D1%8C-%D1%81-%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B5%D0%B9"},{default:e(()=>[B("Связь с аудиторией")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_9-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9%D1%82%D0%B5-%D1%83%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D0%BA%D0%B8"},{default:e(()=>[B("Создавайте уместные концовки")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#_10-%D0%BD%D0%B5-%D0%BF%D1%80%D0%B8%D0%BD%D1%83%D0%B6%D0%B4%D0%B0%D0%B9%D1%82%D0%B5-%D0%B2%D1%81%D0%B5-%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D0%B4-%D1%80%D1%8F%D0%B4"},{default:e(()=>[B("Не принуждайте все читать под ряд")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B8%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn"},{default:e(()=>[B("Индустрия визуальных новелл")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_1.html#%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D1%8F"},{default:e(()=>[B("Визуализация и анимация")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B0%D1%83%D0%B4%D0%B8%D0%BE-%D1%81%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%BE%D0%B7%D0%B2%D1%83%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Аудио сопровождение и озвучивание")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Программирование")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Тестирование")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%BB%D0%BE%D0%BA%D0%B0n%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F"},{default:e(()=>[B("Локализация")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B2-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%D1%85-%D0%B2%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D1%8F"},{default:e(()=>[B("В поисках вдохновения")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B1%D0%BE%D1%80%D1%8C%D0%B1%D0%B0-%D1%81-%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC-%D0%BA%D1%80%D0%B8%D0%B7%D0%B8%D1%81%D0%BE%D0%BC"},{default:e(()=>[B("Борьба с творческим кризисом")]),_:1})]),D("li",null,[t(l,{to:"/chapter_1.html#%D0%B7%D0%B0%D0%BAn%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Заключение")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_2.html#%D0%B3n%D0%B0%D0%B2%D0%B0-2-%D0%B4%D1%80%D0%B5%D0%B2%D0%BD%D0%B5%D0%B5-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-n%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B"},{default:e(()=>[B("Глава 2. Древнее искусство интерактивной художественной литературы")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_2.html#%D0%BF%D1%80%D0%B0%D0%BF%D1%80%D0%B0%D0%B4%D0%B5%D0%B4-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn-eliza-1966"},{default:e(()=>[B("Прапрадед визуальных новелл: ELIZA (1966)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#%D0%B4%D0%B5%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B6%D0%B0%D0%BD%D1%80%D0%B0-colossal-cave-adventure-1975"},{default:e(()=>[B("Дедушка жанра: Colossal Cave Adventure (1975)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4%D1%86%D1%8B"},{default:e(()=>[B("Первопроходцы")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_2.html#infocom"},{default:e(()=>[B("Infocom")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#magnetic-scrolls"},{default:e(()=>[B("Magnetic Scrolls")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#level-9-computing"},{default:e(()=>[B("Level 9 Computing")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_2.html#%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5-%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%B8%D0%B3%D1%80%D1%8B-%D0%B2-%D1%8D%D1%82%D0%BE%D0%BC-%D0%B6%D0%B0%D0%BD%D1%80%D0%B5"},{default:e(()=>[B("Другие известные игры в этом жанре ")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_2.html#king%E2%80%99s-quest-quest-for-the-crown-%D0%BE%D1%82-sierra-on-line-1984"},{default:e(()=>[B("King’s Quest: Quest for the Crown от Sierra On-Line (1984)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#%D1%82%D1%80%D0%B8n%D0%BE%D0%B3%D0%B8%D1%8F-spellcasting-%D0%BE%D1%82-legend-entertainment-1990%E2%80%931992"},{default:e(()=>[B("Трилогия Spellcasting от Legend Entertainment (1990–1992)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#timequest-%D0%BE%D1%82-legend-entertainment-1991"},{default:e(()=>[B("Timequest от Legend Entertainment (1991)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#demoniak-%D0%BE%D1%82-palace-software-1991"},{default:e(()=>[B("Demoniak от Palace Software (1991)")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_2.html#%D0%BA%D0%B0%D0%BA-%D0%BE%D0%BD%D0%B8-%D1%8D%D1%82%D0%BE-%D0%B4%D0%B5n%D0%B0n%D0%B8-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B4n%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-n%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B"},{default:e(()=>[B("Как они это делали? Инструменты для создания интерактивной художественной литературы")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_2.html#%D0%BD%D0%B5%D1%81%D0%BA%D0%BEn%D1%8C%D0%BA%D0%BE-%D1%81n%D0%BE%D0%B2-%D0%BE-%D0%BF%D0%B0%D1%80%D1%81%D0%B5%D1%80%D0%B0%D1%85"},{default:e(()=>[B("Несколько слов о парсерах")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#zork-interactive-language-%D0%B7%D0%BE%D1%80%D0%BA-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-zil-%D0%B8n%D0%B8-z-machine"},{default:e(()=>[B("Zork Interactive Language (ZIL) или Z-machine")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#quill-%D0%BE%D1%82-gilsoft-1983"},{default:e(()=>[B("Quill от Gilsoft (1983)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#professional-adventure-writer-%D0%BE%D1%82-gilsoft-1986"},{default:e(()=>[B("Professional Adventure Writer от Gilsoft (1986)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#adventure-game-toolkit-%D0%BE%D1%82-%D0%B4%D1%8D%D0%B2%D0%B8%D0%B4%D0%B0-%D0%BC%D0%B0n%D1%8C%D0%BC%D0%B1%D0%B5%D1%80%D0%B3%D0%B0-1987"},{default:e(()=>[B("Adventure Game Toolkit от Дэвида Мальмберга (1987)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_2.html#inform-%D0%BE%D1%82-%D0%B3%D1%80%D1%8D%D1%85%D0%B5%D0%BC%D0%B0-%D0%BD%D0%B5n%D1%8C%D1%81%D0%BE%D0%BD%D0%B0-1993%E2%80%93"},{default:e(()=>[B("Inform от Грэхема Нельсона (1993–)")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_2.html#%D0%B7%D0%B0%D0%BAn%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Заключение")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B3n%D0%B0%D0%B2%D0%B0-3-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B5nn%D1%8B"},{default:e(()=>[B("Глава 3. Современные визуальные новеллы")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_3.html#%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BD%D0%BE%D0%B2%D0%B5nn%D1%8B-%D0%BE%D0%B4%D0%BD%D0%BE%D0%B7%D0%BD%D0%B0%D1%87%D0%BD%D0%BE-%D0%BF%D0%BE%D0%BF%D1%83n%D1%8F%D1%80%D0%BD%D1%8B-%D0%B2-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"},{default:e(()=>[B("Визуальные новеллы - однозначно популярны в Японии")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%82%D1%80%D0%BE%D0%BF%D1%8B"},{default:e(()=>[B("Тропы")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_3.html#%D1%81%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC-%D0%B3%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%B0-%D1%84%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B1%D0%B5%D0%B7n%D0%B8%D0%BA%D0%B8%D0%B9-%D0%B3n%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B3%D0%B5%D1%80%D0%BE%D0%B9"},{default:e(()=>[B("Синдром Гордона Фримена")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%B4%D0%B8%D0%B0n%D0%BE%D0%B3%D0%BE%D0%B2"},{default:e(()=>[B("Дерево диалогов")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BA%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D0%BE%D0%BA"},{default:e(()=>[B("Дерево концовок")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0n%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D1%8D%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4%D0%B0-in-medias-res"},{default:e(()=>[B("С центрального эпизода/In Medias Res")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B3%D0%B8%D0%BA-%D0%B8%D0%B7-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9-%D1%88%D0%BA%D0%BEn%D1%8B"},{default:e(()=>[B("Гик из средней школы")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%80%D0%B5%D0%B7%D0%BA%D0%B0-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA"},{default:e(()=>[B("Резка веток")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BC%D0%B5%D1%87-%D0%B8-%D0%BA%D0%BEn%D0%B4%D0%BE%D0%B2%D1%81%D1%82%D0%B2%D0%BE"},{default:e(()=>[B("Меч и Колдовство")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D0%B8-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn-%D0%B8-%D0%B2n%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"},{default:e(()=>[B("Основные концепции визуальных новелл и влияние Японии")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_3.html#%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5"},{default:e(()=>[B("Аниме")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B1%D0%B8%D1%81%D1%91%D0%B4%D0%B7%D1%91-%D0%B8%D0%B3%D1%80%D1%8B-%D1%81%D0%B8%D0%BC%D1%83n%D1%8F%D1%82%D0%BE%D1%80%D1%8B-%D1%81%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9"},{default:e(()=>[B("Бисёдзё игры (Симуляторы свиданий)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%81%D0%B8%D0%BC%D1%83n%D1%8F%D1%82%D0%BE%D1%80-%D1%81%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9"},{default:e(()=>[B("Симулятор свиданий")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B4%D0%BE%D0%B4%D0%B7%D0%B8%D0%BD%D1%81%D0%B8-%D0%B8%D0%B3%D1%80%D1%8B"},{default:e(()=>[B("Додзинси игры")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%8D%D1%80%D0%BE%D0%B3%D0%B5"},{default:e(()=>[B("Эроге")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%85%D0%B5%D0%BD%D1%82%D0%B0%D0%B9"},{default:e(()=>[B("Хентай")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B8%D1%81%D0%B5%D0%BA%D0%B0%D0%B9"},{default:e(()=>[B("Исекай")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BA%D0%B0%D0%BC%D0%B8%D0%B3%D0%B5-%D0%BA%D1%83%D1%81%D0%BE%D0%B3%D0%B5"},{default:e(()=>[B("Камиге/Кусоге")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BA%D0%B0%D0%B2%D0%B0%D0%B8%D0%B9"},{default:e(()=>[B("Каваий")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BA%D0%B8%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%8B"},{default:e(()=>[B("Кинетические романы")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BE%D1%82%D0%B0%D0%BA%D1%83"},{default:e(()=>[B("Отаку")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BE%D1%82%D0%BE%D0%BC%D1%8D"},{default:e(()=>[B("Отомэ")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B2%D0%BEn%D1%88%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B4%D1%80%D1%83%D0%B3%D0%B0"},{default:e(()=>[B("Волшебная подруга")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BC%D0%B0%D1%85%D0%BE-%D1%81%D1%91%D0%B4%D0%B7%D1%91-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-%D0%B2%D0%BEn%D1%88%D0%B5%D0%B1%D0%BD%D0%B8%D1%86%D1%8B"},{default:e(()=>[B("Махо-сёдзё (Девушки волшебницы)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0"},{default:e(()=>[B("Манга")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BC%D0%B5%D1%85%D0%B0"},{default:e(()=>[B("Меха")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BC%D0%BE%D1%8D"},{default:e(()=>[B("Моэ")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BD%D0%B0%D0%BA%D0%B8%D0%B3%D0%B5-%D1%83%D1%86%D1%83%D0%B3%D0%B5"},{default:e(()=>[B("Накиге/Уцуге")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%86%D1%83%D0%BD%D0%B4%D1%8D%D1%80%D1%8D"},{default:e(()=>[B("Цундэрэ")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_3.html#%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D1%8D%D1%80%D0%B0-%D0%BA%D0%B0%D0%BC%D0%B8%D0%B3%D0%B5-%D0%B8n%D0%B8-%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BAn%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0"},{default:e(()=>[B("Современная эра Камиге или новая классика")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_3.html#kanon-%D0%BE%D1%82-key-1999"},{default:e(()=>[B("Kanon от Key (1999)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#air-%D0%BE%D1%82-key-2000"},{default:e(()=>[B("Air от Key (2000)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#phoenix-wright-ace-attorney-%D0%BE%D1%82-capcom-2001"},{default:e(()=>[B("Phoenix Wright: Ace Attorney от Capcom (2001)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#digital-a-love-story-%D0%BE%D1%82-%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BD%D0%B0-%D0%BB%D0%B0%D0%B2-2010"},{default:e(()=>[B("Digital: A Love Story от Кристина Лав (2010)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#katawa-shoujo-%D0%BE%D1%82-four-leaf-studios-2012"},{default:e(()=>[B("Katawa Shoujo от Four Leaf Studios (2012)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#clannad-%D0%BE%D1%82-key-2004-2015"},{default:e(()=>[B("Clannad от Key (2004, 2015)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#her-story-%D0%BE%D1%82-%D1%81%D1%8D%D0%BC%D0%BE%D0%BC%D0%B0-%D0%B1%D0%B0%D1%80n%D0%BE%D1%83-2015"},{default:e(()=>[B("Her Story от Сэмома Барлоу (2015)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#doki-doki-literature-club-%D0%BE%D1%82-%D0%B4%D1%8D%D0%BD%D0%B0-%D1%81%D0%B0n%D1%8C%D0%B2%D0%B0%D1%82%D0%BE-2017"},{default:e(()=>[B("Doki Doki Literature Club! от Дэна Сальвато (2017)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#open-sorcery-%D0%BE%D1%82-%D1%8D%D0%B1%D0%B8%D0%B3%D0%B5%D0%B9n-%D0%BA%D0%BE%D1%80%D1%84%D0%BC%D0%B0%D0%BD-2017"},{default:e(()=>[B("Open Sorcery от Эбигейл Корфман (2017)")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#simulacra-%D0%BE%D1%82-kaigan-games-2017"},{default:e(()=>[B("Simulacra от Kaigan Games")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#simulacra-pipe-dreams-2018"},{default:e(()=>[B("Simulacra: Pipe Dreams (2018)")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D0%B4%D0%B5n%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-%D0%B4n%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0n%D1%8C%D0%BD%D1%8B%D1%85-%D0%BD%D0%BE%D0%B2%D0%B5nn"},{default:e(()=>[B("Как это делается - современные инструменты для создания визуальных новелл")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_3.html#ren%E2%80%99py"},{default:e(()=>[B("Ren’Py")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#twine"},{default:e(()=>[B("Twine")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#adrift"},{default:e(()=>[B("Adrift")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#tyranobuilder-%D0%BE%D1%82-strikeworks"},{default:e(()=>[B("TyranoBuilder от STRIKEWORKS")]),_:1})]),D("li",null,[t(l,{to:"/chapter_3.html#vn-maker"},{default:e(()=>[B("VN Maker")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_3.html#%D0%B7%D0%B0%D0%BAn%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Заключение")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%B3n%D0%B0%D0%B2%D0%B0-4-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D0%B8%D0%BC%D1%81%D1%8F-%D1%81-ren%E2%80%99py-twine-%D0%B8-tyranobuilder"},{default:e(()=>[B("Глава 4. Знакомимся с Ren’Py, Twine и TyranoBuilder")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_4.html#ren-py-%D0%B2-%D0%B4%D0%B5%D1%82%D0%B0n%D1%8F%D1%85"},{default:e(()=>[B("Ren'Py в деталях")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_4.html#%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-ren-py"},{default:e(()=>[B("Как работает Ren'Py")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0"},{default:e(()=>[B("Создание нового проекта")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB-ren-py"},{default:e(()=>[B("Функционал Ren'Py")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B2-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2-%D0%BD%D0%B0-ren-py"},{default:e(()=>[B("Основы в написания сценариев на Ren’Py")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B8%D1%81%D1%82%D0%B2%D1%83%D0%B5%D0%BC-%D1%81-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%BC-%D0%BC%D0%B5%D0%BD%D1%8E"},{default:e(()=>[B("Взаимодействуем с пользователем: Меню")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BE%D1%82%D1%81%D1%82%D1%83%D0%BF%D1%8B-%D0%B8-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8"},{default:e(()=>[B("Отступы и текстовые блоки")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-if-elif-else"},{default:e(()=>[B("Условные операторы: if, elif, else")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B8-%D0%BE%D0%B1-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B5-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F"},{default:e(()=>[B("Подробней об операторе управления")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_4.html#twine-%D0%B2-%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8F%D1%85"},{default:e(()=>[B("Twine в деталях")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_4.html#%D1%81%D0%B2%D1%8F%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%BC-%D0%BF%D0%B0%D1%80%D0%B0%D0%B3%D1%80%D0%B0%D1%84%D1%8B-%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8"},{default:e(()=>[B("Связываем параграфы переходами")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#twine-%D0%B8-%D0%B0%D1%83%D0%B4%D0%B8%D0%BE%D0%B2%D0%B8%D0%B7%D1%83%D0%B0%D0%BB"},{default:e(()=>[B("Twine и аудиовизуал")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D1%8B-twine"},{default:e(()=>[B("Форматы Twine")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BC%D0%B0%D0%BA%D1%80%D0%BE%D1%81%D1%8B-%D0%B2-twine"},{default:e(()=>[B("Макросы в Twine")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%D1%81-twine"},{default:e(()=>[B("Пользовательский интерфейс Twine")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D1%81%D0%BB%D0%BE%D0%B2-%D0%BE-ifid"},{default:e(()=>[B("Несколько слов о IFID")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D0%B8%D0%BC%D1%81%D1%8F-%D1%81-css"},{default:e(()=>[B("Знакомимся с CSS")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_4.html#tyranobuilder-%D0%B2-%D0%B4%D0%B5%D1%82%D0%B0%D0%BB%D1%8F%D1%85"},{default:e(()=>[B("TyranoBuilder в деталях")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_4.html#%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B8-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%B2-tyranobuilder"},{default:e(()=>[B("Рабочий процесс в TyranoBuilder")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B4%D0%B2%D1%83%D1%85-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%85"},{default:e(()=>[B("Приключение в двух сценах")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8-%D0%B2-tyranobuilder"},{default:e(()=>[B("Персонажи в TyranoBuilder")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0"},{default:e(()=>[B("Добавление мультимедиа")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#tyranobuilder-%D0%B8-%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0%D1%84%D0%B0%D0%B8%D0%BB%D1%8B"},{default:e(()=>[B("TyranoBuilder и медиафайлы")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D1%81%D0%BB%D0%BE%D0%B2-%D0%BE-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D0%BA%D0%B0%D1%85-%D0%B8%D0%B3%D1%80%D1%8B"},{default:e(()=>[B("Несколько слов о Настройках игры")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B-%D0%B2-tyranobuilder"},{default:e(()=>[B("Скрипты в TyranoBuilder")]),_:1})]),D("li",null,[t(l,{to:"/chapter_4.html#live2d"},{default:e(()=>[B("Live2D")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_4.html#%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"},{default:e(()=>[B("Заключение")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_5.html#%D0%B3%D0%BB%D0%B0%D0%B2%D0%B0-5-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B6%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D0%B3%D0%BB%D1%83%D0%B1%D0%B6%D0%B5"},{default:e(()=>[B("Глава 5: Погружаемся глубже")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_5.html#ren-py-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B8%D0%BD%D0%B5%D1%80%D1%8B-%D0%B8-%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D0%B8"},{default:e(()=>[B("Ren’Py, контейнеры и кодеки")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_5.html#%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D0%B2-ren-py"},{default:e(()=>[B("Видео в Ren’Py")]),_:1})]),D("li",null,[t(l,{to:"/chapter_5.html#%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D0%B0%D1%83%D0%B4%D0%B8%D0%BE-%D0%B2-ren-py"},{default:e(()=>[B("Расширенные функции аудио в Ren’Py")]),_:1})]),D("li",null,[t(l,{to:"/chapter_5.html#%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B8-%D0%BE-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B5"},{default:e(()=>[B("Подробней о графике")]),_:1})]),D("li",null,[t(l,{to:"/chapter_5.html#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D0%BA%D0%B0-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%D1%81%D0%B0-%D0%B2-ren-py"},{default:e(()=>[B("Настройка графического интерфейса в Ren’Py")]),_:1})])])]),D("li",null,[t(l,{to:"/chapter_5.html#%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-tyranobuilder"},{default:e(()=>[B("Продвинутые функции TyranoBuilder")]),_:1}),D("ul",null,[D("li",null,[t(l,{to:"/chapter_5.html#%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B"},{default:e(()=>[B("Плагины")]),_:1})]),D("li",null,[t(l,{to:"/chapter_5.html#%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5"},{default:e(()=>[B("Переменные")]),_:1})]),D("li",null,[t(l,{to:"/chapter_5.html#%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B8%D0%BD%D1%8B%D0%B8-%D0%B4%D0%B8%D0%B0%D0%BB%D0%BE%D0%B3"},{default:e(()=>[B("Случайный диалог")]),_:1})]),_,d,c])]),E,p])]),m,D("li",null,[t(l,{to:"/sources.html"},{default:e(()=>[B("Источники")]),_:1})])])])}const F=a(o,[["render",f],["__file","index.html.vue"]]);export{F as default};