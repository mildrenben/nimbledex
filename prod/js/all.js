(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78609663-1', 'auto');
ga('send', 'pageview');

!function(){function a(a){a=Array.isArray(a)?{label:a[0],value:a[1]}:"object"==typeof a&&"label"in a&&"value"in a?a:{label:a,value:a},this.label=a.label||a.value,this.value="P_"===a.value.substring(0,2)?a.value.substring(2,a.value.length):"ability/"+a.value.substring(2,a.value.length).replace(" ","-")}function b(a,b,c){for(var d in b){var e=b[d],f=a.input.getAttribute("data-"+d.toLowerCase());a[d]="number"==typeof e?parseInt(f):!1===e?null!==f:e instanceof Function?null:f,a[d]||0===a[d]||(a[d]=d in c?c[d]:e)}}function c(a,b){return"string"==typeof a?(b||document).querySelector(a):a||null}function d(a,b){return h.call((b||document).querySelectorAll(a))}function e(){d("input.awesomplete").forEach(function(a){new g(a)})}var f=document.getElementsByClassName("Search_Btn")[0],g=function(a,d){var e=this;this.input=c(a),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),d=d||{},b(this,{minChars:2,maxItems:10,autoFirst:!1,data:g.DATA,filter:g.FILTER_CONTAINS,sort:g.SORT_BYLENGTH,item:g.ITEM,replace:g.REPLACE},d),this.index=-1,this.container=c.create("div",{className:"awesomplete",around:a}),this.ul=c.create("ul",{hidden:"hidden",inside:this.container}),this.status=c.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),c.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(a){var b=a.keyCode;e.opened&&(13===b&&e.selected?(a.preventDefault(),e.select()):27===b?e.close():38!==b&&40!==b||(a.preventDefault(),e[38===b?"previous":"next"]()))}}),c.bind(this.input.form,{submit:this.close.bind(this)}),c.bind(this.ul,{mousedown:function(a){var b=a.target;if(b!==this){for(;b&&!/li/i.test(b.nodeName);)b=b.parentNode;b&&0===a.button&&(a.preventDefault(),e.select(b,a.target))}}}),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||d.list||[],g.all.push(this)};g.prototype={set list(a){if(Array.isArray(a))this._list=a;else if("string"==typeof a&&-1<a.indexOf(","))this._list=a.split(/\s*,\s*/);else if((a=c(a))&&a.children){var b=[];h.apply(a.children).forEach(function(a){if(!a.disabled){var c=a.textContent.trim(),d=a.value||c;a=a.label||c,""!==d&&b.push({label:a,value:d})}}),this._list=b}document.activeElement===this.input&&this.evaluate()},get selected(){return-1<this.index},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden",""),this.index=-1,c.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden"),this.autoFirst&&-1===this.index&&this.goto(0),c.fire(this.input,"awesomplete-open")},next:function(){this.goto(this.index<this.ul.children.length-1?this.index+1:-1)},previous:function(){var a=this.ul.children.length;this.goto(this.selected?this.index-1:a-1)},goto:function(a){var b=this.ul.children;this.selected&&b[this.index].setAttribute("aria-selected","false"),this.index=a,-1<a&&0<b.length&&(b[a].setAttribute("aria-selected","true"),this.status.textContent=b[a].textContent,c.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(a,b){if(a?this.index=c.siblingIndex(a):a=this.ul.children[this.index],a){var d=this.suggestions[this.index];c.fire(this.input,"awesomplete-select",{text:d,origin:b||a})&&(this.replace(d),this.close(),c.fire(this.input,"awesomplete-selectcomplete",{text:d}))}},evaluate:function(){var b=this,c=this.input.value;c.length>=this.minChars&&0<this._list.length?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(d){return new a(b.data(d,c))}).filter(function(a){return b.filter(a,c)}).sort(this.sort).slice(0,this.maxItems),this.suggestions.forEach(function(a){b.ul.appendChild(b.item(a,c))}),0===this.ul.children.length?this.close():this.open()):this.close()}},g.all=[],g.FILTER_CONTAINS=function(a,b){return RegExp(c.regExpEscape(b.trim()),"i").test(a)},g.FILTER_STARTSWITH=function(a,b){return RegExp("^"+c.regExpEscape(b.trim()),"i").test(a)},g.SORT_BYLENGTH=function(a,b){return a.length!==b.length?a.length-b.length:a<b?-1:1},g.ITEM=function(a,b){var d=""===b?a:a.replace(RegExp(c.regExpEscape(b.trim()),"gi"),"<mark>$&</mark>"),e="P_"===d.substring(0,2)?"Pokemon":"Ability",f=d.substring(2,d.length);return c.create("li",{innerHTML:f,"aria-selected":"false",class:"Awesomplete_"+e})},g.REPLACE=function(a){this.input.value=a.value,f.click()},g.DATA=function(a){return a},Object.defineProperty(a.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),a.prototype.toString=a.prototype.valueOf=function(){return""+this.label};var h=Array.prototype.slice;return c.create=function(a,b){var d,e=document.createElement(a);for(d in b){var f=b[d];"inside"===d?c(f).appendChild(e):"around"===d?(f=c(f),f.parentNode.insertBefore(e,f),e.appendChild(f)):d in e?e[d]=f:e.setAttribute(d,f)}return e},c.bind=function(a,b){if(a)for(var c in b){var d=b[c];c.split(/\s+/).forEach(function(b){a.addEventListener(b,d)})}},c.fire=function(a,b,c){var d=document.createEvent("HTMLEvents");d.initEvent(b,!0,!0);for(var e in c)d[e]=c[e];return a.dispatchEvent(d)},c.regExpEscape=function(a){return a.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},c.siblingIndex=function(a){for(var b=0;a=a.previousElementSibling;b++);return b},"undefined"!=typeof Document&&("loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)),g.$=c,g.$$=d,"undefined"!=typeof self&&(self.Awesomplete=g),"object"==typeof module&&module.exports&&(module.exports=g),g}();

// Search
var searchBtn   = document.getElementsByClassName('Search_Btn')[0];
var searchInput = document.getElementsByClassName('Search_Input')[0];

function checkEnter (event) {
    if (event.which == 13 || event.keyCode == 13) {
        return true;
    }
    return false;
};

function changeUrl () {
  document.location.href = document.location.origin + '/' + searchInput.value;
}

searchBtn.addEventListener('click',function(){
  changeUrl();
});

searchInput.addEventListener('keyup',function(e){
  if(checkEnter(e)){
    changeUrl();
  }
});

// Back to top button
var BackToTopBtn = document.getElementsByClassName('BackToTop')[0];

if (BackToTopBtn) {
  function isScrolled() {
    return window.scrollY > 300 ? true : false;
  }

  window.addEventListener('scroll', function() {
    if (isScrolled(BackToTopBtn)) {
      BackToTopBtn.classList.add('visible');
    } else if (BackToTopBtn.classList.contains('visible')) {
      BackToTopBtn.classList.remove('visible');
    }
  });

  BackToTopBtn.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

var searchOffset = searchInput.getClientRects()[0].top < 16 ? 16 : searchInput.getClientRects()[0].top;
var monListHeader = document.getElementsByClassName('MonListHeader')[0];
if (monListHeader) {
  var monListHeaderOffset = monListHeader.getClientRects()[0].top < 64 ? 64 : monListHeader.getClientRects()[0].top;
}

// Sticky headers
window.addEventListener('scroll', function(){
  if (window.scrollY > searchOffset) {
    document.body.classList.add('fixed-header');
  } else if (document.body.classList.contains('fixed-header')) {
    document.body.classList.remove('fixed-header');
  }
  if (monListHeader) {
    if (window.scrollY > monListHeaderOffset) {
      document.body.classList.add('fixed-monHeader');
    } else if (document.body.classList.contains('fixed-monHeader')) {
      document.body.classList.remove('fixed-monHeader');
    }
  }
});

// Anchor ID links for Mon List
if (window.location.pathname === '/all' || window.location.pathname.includes('ability')) {
  var sideNavLinks = document.querySelectorAll('.SideNav_Link');
  for (var i = 0; i < sideNavLinks.length; i++) {
    sideNavLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      var linkTarget = document.getElementById(this.textContent.slice(1));
      var linkTargetOffset = linkTarget.offsetTop - 80;
      document.documentElement.scrollTop = linkTargetOffset;
      document.body.scrollTop = linkTargetOffset;
    });
  }
}

// Info
var infoToggle = document.getElementsByClassName('Info_Toggle')[0];
var infoPopup = document.getElementsByClassName('Info_Popup')[0];

infoToggle.addEventListener('click', function() {
  infoPopup.classList.toggle('visible');
});

// Form Tabs
var formTabs = document.getElementsByClassName('FormTabs_Tab');

if (formTabs) {
  for (var i = 0; i < formTabs.length; i++) {
    formTabs[i].addEventListener('click', function() {
      document.body.className = '';
      document.body.className = this.id;
    });
  }
}

var input = document.getElementsByClassName("Search_Input")[0];

new Awesomplete(input, {
  list: [
    "A_Adaptability",
    "A_Aerilate",
    "A_Aftermath",
    "A_Air Lock",
    "A_Analytic",
    "A_Anger Point",
    "A_Anticipation",
    "A_Arena Trap",
    "A_Aroma Veil",
    "A_Aura Break",
    "A_Bad Dreams",
    "A_Battle Armor",
    "A_Big Pecks",
    "A_Blaze",
    "A_Bulletproof",
    "A_Cacophony",
    "A_Cheek Pouch",
    "A_Chlorophyll",
    "A_Clear Body",
    "A_Cloud Nine",
    "A_Color Change",
    "A_Competitive",
    "A_Compound Eyes",
    "A_Contrary",
    "A_Cursed Body",
    "A_Cute Charm",
    "A_Damp",
    "A_Dark Aura",
    "A_Defeatist",
    "A_Defiant",
    "A_Delta Stream",
    "A_Desolate Land",
    "A_Download",
    "A_Drizzle",
    "A_Drought",
    "A_Dry Skin",
    "A_Early Bird",
    "A_Effect Spore",
    "A_Fairy Aura",
    "A_Filter",
    "A_Flame Body",
    "A_Flare Boost",
    "A_Flash Fire",
    "A_Flower Gift",
    "A_Flower Veil",
    "A_Forecast",
    "A_Forewarn",
    "A_Friend Guard",
    "A_Frisk",
    "A_Fur Coat",
    "A_Gale Wings",
    "A_Gluttony",
    "A_Gooey",
    "A_Grass Pelt",
    "A_Guts",
    "A_Harvest",
    "A_Healer",
    "A_Heatproof",
    "A_Heavy Metal",
    "A_Honey Gather",
    "A_Huge Power",
    "A_Hustle",
    "A_Hydration",
    "A_Hyper Cutter",
    "A_Ice Body",
    "A_Illuminate",
    "A_Illusion",
    "A_Immunity",
    "A_Imposter",
    "A_Infiltrator",
    "A_Inner Focus",
    "A_Insomnia",
    "A_Intimidate",
    "A_Iron Barbs",
    "A_Iron Fist",
    "A_Justified",
    "A_Keen Eye",
    "A_Klutz",
    "A_Leaf Guard",
    "A_Levitate",
    "A_Light Metal",
    "A_Lightning Rod",
    "A_Limber",
    "A_Liquid Ooze",
    "A_Magic Bounce",
    "A_Magic Guard",
    "A_Magician",
    "A_Magma Armor",
    "A_Magnet Pull",
    "A_Marvel Scale",
    "A_Mega Launcher",
    "A_Minus",
    "A_Mold Breaker",
    "A_Moody",
    "A_Motor Drive",
    "A_Moxie",
    "A_Multiscale",
    "A_Multitype",
    "A_Mummy",
    "A_Natural Cure",
    "A_No Guard",
    "A_Normalize",
    "A_Oblivious",
    "A_Overcoat",
    "A_Overgrow",
    "A_Own Tempo",
    "A_Parental Bond",
    "A_Pickpocket",
    "A_Pickup",
    "A_Pixilate",
    "A_Plus",
    "A_Poison Heal",
    "A_Poison Point",
    "A_Poison Touch",
    "A_Prankster",
    "A_Pressure",
    "A_Primordial Sea",
    "A_Protean",
    "A_Pure Power",
    "A_Quick Feet",
    "A_Rain Dish",
    "A_Rattled",
    "A_Reckless",
    "A_Refrigerate",
    "A_Regenerator",
    "A_Rivalry",
    "A_Rock Head",
    "A_Rough Skin",
    "A_Run Away",
    "A_Sand Force",
    "A_Sand Rush",
    "A_Sand Stream",
    "A_Sand Veil",
    "A_Sap Sipper",
    "A_Scrappy",
    "A_Serene Grace",
    "A_Shadow Tag",
    "A_Shed Skin",
    "A_Sheer Force",
    "A_Shell Armor",
    "A_Shield Dust",
    "A_Simple",
    "A_Skill Link",
    "A_Slow Start",
    "A_Sniper",
    "A_Snow Cloak",
    "A_Snow Warning",
    "A_Solar Power",
    "A_Solid Rock",
    "A_Soundproof",
    "A_Speed Boost",
    "A_Stall",
    "A_Stance Change",
    "A_Static",
    "A_Steadfast",
    "A_Stench",
    "A_Sticky Hold",
    "A_Storm Drain",
    "A_Strong Jaw",
    "A_Sturdy",
    "A_Suction Cups",
    "A_Super Luck",
    "A_Swarm",
    "A_Sweet Veil",
    "A_Swift Swim",
    "A_Symbiosis",
    "A_Synchronize",
    "A_Tangled Feet",
    "A_Technician",
    "A_Telepathy",
    "A_Teravolt",
    "A_Thick Fat",
    "A_Tinted Lens",
    "A_Torrent",
    "A_Tough Claws",
    "A_Toxic Boost",
    "A_Trace",
    "A_Truant",
    "A_Turboblaze",
    "A_Unaware",
    "A_Unburden",
    "A_Unnerve",
    "A_Victory Star",
    "A_Vital Spirit",
    "A_Volt Absorb",
    "A_Water Absorb",
    "A_Water Veil",
    "A_Weak Armor",
    "A_White Smoke",
    "A_Wonder Guard",
    "A_Wonder Skin",
    "A_Zen Mode",
    "P_Bulbasaur",
    "P_Ivysaur",
    "P_Venusaur",
    "P_Charmander",
    "P_Charmeleon",
    "P_Charizard",
    "P_Squirtle",
    "P_Wartortle",
    "P_Blastoise",
    "P_Caterpie",
    "P_Metapod",
    "P_Butterfree",
    "P_Weedle",
    "P_Kakuna",
    "P_Beedrill",
    "P_Pidgey",
    "P_Pidgeotto",
    "P_Pidgeot",
    "P_Rattata",
    "P_Raticate",
    "P_Spearow",
    "P_Fearow",
    "P_Ekans",
    "P_Arbok",
    "P_Pikachu",
    "P_Raichu",
    "P_Sandshrew",
    "P_Sandslash",
    "P_Nidoran-f",
    "P_Nidorina",
    "P_Nidoqueen",
    "P_Nidoran-m",
    "P_Nidorino",
    "P_Nidoking",
    "P_Clefairy",
    "P_Clefable",
    "P_Vulpix",
    "P_Ninetales",
    "P_Jigglypuff",
    "P_Wigglytuff",
    "P_Zubat",
    "P_Golbat",
    "P_Oddish",
    "P_Gloom",
    "P_Vileplume",
    "P_Paras",
    "P_Parasect",
    "P_Venonat",
    "P_Venomoth",
    "P_Diglett",
    "P_Dugtrio",
    "P_Meowth",
    "P_Persian",
    "P_Psyduck",
    "P_Golduck",
    "P_Mankey",
    "P_Primeape",
    "P_Growlithe",
    "P_Arcanine",
    "P_Poliwag",
    "P_Poliwhirl",
    "P_Poliwrath",
    "P_Abra",
    "P_Kadabra",
    "P_Alakazam",
    "P_Machop",
    "P_Machoke",
    "P_Machamp",
    "P_Bellsprout",
    "P_Weepinbell",
    "P_Victreebel",
    "P_Tentacool",
    "P_Tentacruel",
    "P_Geodude",
    "P_Graveler",
    "P_Golem",
    "P_Ponyta",
    "P_Rapidash",
    "P_Slowpoke",
    "P_Slowbro",
    "P_Magnemite",
    "P_Magneton",
    "P_Farfetch'd",
    "P_Doduo",
    "P_Dodrio",
    "P_Seel",
    "P_Dewgong",
    "P_Grimer",
    "P_Muk",
    "P_Shellder",
    "P_Cloyster",
    "P_Gastly",
    "P_Haunter",
    "P_Gengar",
    "P_Onix",
    "P_Drowzee",
    "P_Hypno",
    "P_Krabby",
    "P_Kingler",
    "P_Voltorb",
    "P_Electrode",
    "P_Exeggcute",
    "P_Exeggutor",
    "P_Cubone",
    "P_Marowak",
    "P_Hitmonlee",
    "P_Hitmonchan",
    "P_Lickitung",
    "P_Koffing",
    "P_Weezing",
    "P_Rhyhorn",
    "P_Rhydon",
    "P_Chansey",
    "P_Tangela",
    "P_Kangaskhan",
    "P_Horsea",
    "P_Seadra",
    "P_Goldeen",
    "P_Seaking",
    "P_Staryu",
    "P_Starmie",
    "P_Mr.mime",
    "P_Scyther",
    "P_Jynx",
    "P_Electabuzz",
    "P_Magmar",
    "P_Pinsir",
    "P_Tauros",
    "P_Magikarp",
    "P_Gyarados",
    "P_Lapras",
    "P_Ditto",
    "P_Eevee",
    "P_Vaporeon",
    "P_Jolteon",
    "P_Flareon",
    "P_Porygon",
    "P_Omanyte",
    "P_Omastar",
    "P_Kabuto",
    "P_Kabutops",
    "P_Aerodactyl",
    "P_Snorlax",
    "P_Articuno",
    "P_Zapdos",
    "P_Moltres",
    "P_Dratini",
    "P_Dragonair",
    "P_Dragonite",
    "P_Mewtwo",
    "P_Mew",
    "P_Chikorita",
    "P_Bayleef",
    "P_Meganium",
    "P_Cyndaquil",
    "P_Quilava",
    "P_Typhlosion",
    "P_Totodile",
    "P_Croconaw",
    "P_Feraligatr",
    "P_Sentret",
    "P_Furret",
    "P_Hoothoot",
    "P_Noctowl",
    "P_Ledyba",
    "P_Ledian",
    "P_Spinarak",
    "P_Ariados",
    "P_Crobat",
    "P_Chinchou",
    "P_Lanturn",
    "P_Pichu",
    "P_Cleffa",
    "P_Igglybuff",
    "P_Togepi",
    "P_Togetic",
    "P_Natu",
    "P_Xatu",
    "P_Mareep",
    "P_Flaaffy",
    "P_Ampharos",
    "P_Bellossom",
    "P_Marill",
    "P_Azumarill",
    "P_Sudowoodo",
    "P_Politoed",
    "P_Hoppip",
    "P_Skiploom",
    "P_Jumpluff",
    "P_Aipom",
    "P_Sunkern",
    "P_Sunflora",
    "P_Yanma",
    "P_Wooper",
    "P_Quagsire",
    "P_Espeon",
    "P_Umbreon",
    "P_Murkrow",
    "P_Slowking",
    "P_Misdreavus",
    "P_Unown",
    "P_Wobbuffet",
    "P_Girafarig",
    "P_Pineco",
    "P_Forretress",
    "P_Dunsparce",
    "P_Gligar",
    "P_Steelix",
    "P_Snubbull",
    "P_Granbull",
    "P_Qwilfish",
    "P_Scizor",
    "P_Shuckle",
    "P_Heracross",
    "P_Sneasel",
    "P_Teddiursa",
    "P_Ursaring",
    "P_Slugma",
    "P_Magcargo",
    "P_Swinub",
    "P_Piloswine",
    "P_Corsola",
    "P_Remoraid",
    "P_Octillery",
    "P_Delibird",
    "P_Mantine",
    "P_Skarmory",
    "P_Houndour",
    "P_Houndoom",
    "P_Kingdra",
    "P_Phanpy",
    "P_Donphan",
    "P_Porygon2",
    "P_Stantler",
    "P_Smeargle",
    "P_Tyrogue",
    "P_Hitmontop",
    "P_Smoochum",
    "P_Elekid",
    "P_Magby",
    "P_Miltank",
    "P_Blissey",
    "P_Raikou",
    "P_Entei",
    "P_Suicune",
    "P_Larvitar",
    "P_Pupitar",
    "P_Tyranitar",
    "P_Lugia",
    "P_Ho-oh",
    "P_Celebi",
    "P_Treecko",
    "P_Grovyle",
    "P_Sceptile",
    "P_Torchic",
    "P_Combusken",
    "P_Blaziken",
    "P_Mudkip",
    "P_Marshtomp",
    "P_Swampert",
    "P_Poochyena",
    "P_Mightyena",
    "P_Zigzagoon",
    "P_Linoone",
    "P_Wurmple",
    "P_Silcoon",
    "P_Beautifly",
    "P_Cascoon",
    "P_Dustox",
    "P_Lotad",
    "P_Lombre",
    "P_Ludicolo",
    "P_Seedot",
    "P_Nuzleaf",
    "P_Shiftry",
    "P_Taillow",
    "P_Swellow",
    "P_Wingull",
    "P_Pelipper",
    "P_Ralts",
    "P_Kirlia",
    "P_Gardevoir",
    "P_Surskit",
    "P_Masquerain",
    "P_Shroomish",
    "P_Breloom",
    "P_Slakoth",
    "P_Vigoroth",
    "P_Slaking",
    "P_Nincada",
    "P_Ninjask",
    "P_Shedinja",
    "P_Whismur",
    "P_Loudred",
    "P_Exploud",
    "P_Makuhita",
    "P_Hariyama",
    "P_Azurill",
    "P_Nosepass",
    "P_Skitty",
    "P_Delcatty",
    "P_Sableye",
    "P_Mawile",
    "P_Aron",
    "P_Lairon",
    "P_Aggron",
    "P_Meditite",
    "P_Medicham",
    "P_Electrike",
    "P_Manectric",
    "P_Plusle",
    "P_Minun",
    "P_Volbeat",
    "P_Illumise",
    "P_Roselia",
    "P_Gulpin",
    "P_Swalot",
    "P_Carvanha",
    "P_Sharpedo",
    "P_Wailmer",
    "P_Wailord",
    "P_Numel",
    "P_Camerupt",
    "P_Torkoal",
    "P_Spoink",
    "P_Grumpig",
    "P_Spinda",
    "P_Trapinch",
    "P_Vibrava",
    "P_Flygon",
    "P_Cacnea",
    "P_Cacturne",
    "P_Swablu",
    "P_Altaria",
    "P_Zangoose",
    "P_Seviper",
    "P_Lunatone",
    "P_Solrock",
    "P_Barboach",
    "P_Whiscash",
    "P_Corphish",
    "P_Crawdaunt",
    "P_Baltoy",
    "P_Claydol",
    "P_Lileep",
    "P_Cradily",
    "P_Anorith",
    "P_Armaldo",
    "P_Feebas",
    "P_Milotic",
    "P_Castform",
    "P_Kecleon",
    "P_Shuppet",
    "P_Banette",
    "P_Duskull",
    "P_Dusclops",
    "P_Tropius",
    "P_Chimecho",
    "P_Absol",
    "P_Wynaut",
    "P_Snorunt",
    "P_Glalie",
    "P_Spheal",
    "P_Sealeo",
    "P_Walrein",
    "P_Clamperl",
    "P_Huntail",
    "P_Gorebyss",
    "P_Relicanth",
    "P_Luvdisc",
    "P_Bagon",
    "P_Shelgon",
    "P_Salamence",
    "P_Beldum",
    "P_Metang",
    "P_Metagross",
    "P_Regirock",
    "P_Regice",
    "P_Registeel",
    "P_Latias",
    "P_Latios",
    "P_Kyogre",
    "P_Groudon",
    "P_Rayquaza",
    "P_Jirachi",
    "P_Deoxys",
    "P_Turtwig",
    "P_Grotle",
    "P_Torterra",
    "P_Chimchar",
    "P_Monferno",
    "P_Infernape",
    "P_Piplup",
    "P_Prinplup",
    "P_Empoleon",
    "P_Starly",
    "P_Staravia",
    "P_Staraptor",
    "P_Bidoof",
    "P_Bibarel",
    "P_Kricketot",
    "P_Kricketune",
    "P_Shinx",
    "P_Luxio",
    "P_Luxray",
    "P_Budew",
    "P_Roserade",
    "P_Cranidos",
    "P_Rampardos",
    "P_Shieldon",
    "P_Bastiodon",
    "P_Burmy",
    "P_Wormadam",
    "P_Mothim",
    "P_Combee",
    "P_Vespiquen",
    "P_Pachirisu",
    "P_Buizel",
    "P_Floatzel",
    "P_Cherubi",
    "P_Cherrim",
    "P_Shellos",
    "P_Gastrodon",
    "P_Ambipom",
    "P_Drifloon",
    "P_Drifblim",
    "P_Buneary",
    "P_Lopunny",
    "P_Mismagius",
    "P_Honchkrow",
    "P_Glameow",
    "P_Purugly",
    "P_Chingling",
    "P_Stunky",
    "P_Skuntank",
    "P_Bronzor",
    "P_Bronzong",
    "P_Bonsly",
    "P_Mime jr.",
    "P_Happiny",
    "P_Chatot",
    "P_Spiritomb",
    "P_Gible",
    "P_Gabite",
    "P_Garchomp",
    "P_Munchlax",
    "P_Riolu",
    "P_Lucario",
    "P_Hippopotas",
    "P_Hippowdon",
    "P_Skorupi",
    "P_Drapion",
    "P_Croagunk",
    "P_Toxicroak",
    "P_Carnivine",
    "P_Finneon",
    "P_Lumineon",
    "P_Mantyke",
    "P_Snover",
    "P_Abomasnow",
    "P_Weavile",
    "P_Magnezone",
    "P_Lickilicky",
    "P_Rhyperior",
    "P_Tangrowth",
    "P_Electivire",
    "P_Magmortar",
    "P_Togekiss",
    "P_Yanmega",
    "P_Leafeon",
    "P_Glaceon",
    "P_Gliscor",
    "P_Mamoswine",
    "P_Porygon-z",
    "P_Gallade",
    "P_Probopass",
    "P_Dusknoir",
    "P_Froslass",
    "P_Rotom",
    "P_Uxie",
    "P_Mesprit",
    "P_Azelf",
    "P_Dialga",
    "P_Palkia",
    "P_Heatran",
    "P_Regigigas",
    "P_Giratina",
    "P_Cresselia",
    "P_Phione",
    "P_Manaphy",
    "P_Darkrai",
    "P_Shaymin",
    "P_Arceus",
    "P_Victini",
    "P_Snivy",
    "P_Servine",
    "P_Serperior",
    "P_Tepig",
    "P_Pignite",
    "P_Emboar",
    "P_Oshawott",
    "P_Dewott",
    "P_Samurott",
    "P_Patrat",
    "P_Watchog",
    "P_Lillipup",
    "P_Herdier",
    "P_Stoutland",
    "P_Purrloin",
    "P_Liepard",
    "P_Pansage",
    "P_Simisage",
    "P_Pansear",
    "P_Simisear",
    "P_Panpour",
    "P_Simipour",
    "P_Munna",
    "P_Musharna",
    "P_Pidove",
    "P_Tranquill",
    "P_Unfezant",
    "P_Blitzle",
    "P_Zebstrika",
    "P_Roggenrola",
    "P_Boldore",
    "P_Gigalith",
    "P_Woobat",
    "P_Swoobat",
    "P_Drilbur",
    "P_Excadrill",
    "P_Audino",
    "P_Timburr",
    "P_Gurdurr",
    "P_Conkeldurr",
    "P_Tympole",
    "P_Palpitoad",
    "P_Seismitoad",
    "P_Throh",
    "P_Sawk",
    "P_Sewaddle",
    "P_Swadloon",
    "P_Leavanny",
    "P_Venipede",
    "P_Whirlipede",
    "P_Scolipede",
    "P_Cottonee",
    "P_Whimsicott",
    "P_Petilil",
    "P_Lilligant",
    "P_Basculin",
    "P_Sandile",
    "P_Krokorok",
    "P_Krookodile",
    "P_Darumaka",
    "P_Darmanitan",
    "P_Maractus",
    "P_Dwebble",
    "P_Crustle",
    "P_Scraggy",
    "P_Scrafty",
    "P_Sigilyph",
    "P_Yamask",
    "P_Cofagrigus",
    "P_Tirtouga",
    "P_Carracosta",
    "P_Archen",
    "P_Archeops",
    "P_Trubbish",
    "P_Garbodor",
    "P_Zorua",
    "P_Zoroark",
    "P_Minccino",
    "P_Ciccino",
    "P_Gothita",
    "P_Gothorita",
    "P_Gothitelle",
    "P_Solosis",
    "P_Duosion",
    "P_Reuniclus",
    "P_Ducklett",
    "P_Swanna",
    "P_Vanillite",
    "P_Vanillish",
    "P_Vanilluxe",
    "P_Deerling",
    "P_Sawsbuck",
    "P_Emolga",
    "P_Karrablast",
    "P_Escavalier",
    "P_Foongus",
    "P_Amoonguss",
    "P_Frillish",
    "P_Jellicent",
    "P_Alomomola",
    "P_Joltik",
    "P_Galvantula",
    "P_Ferroseed",
    "P_Ferrothorn",
    "P_Klink",
    "P_Klang",
    "P_Klinklang",
    "P_Tynamo",
    "P_Eelektrik",
    "P_Eelektross",
    "P_Elgyem",
    "P_Beheeyem",
    "P_Litwick",
    "P_Lampent",
    "P_Chandelure",
    "P_Axew",
    "P_Fraxure",
    "P_Haxorus",
    "P_Cubchoo",
    "P_Beartic",
    "P_Cryogonal",
    "P_Shelmet",
    "P_Accelgor",
    "P_Stunfisk",
    "P_Mienfoo",
    "P_Mienshao",
    "P_Druddigon",
    "P_Golett",
    "P_Golurk",
    "P_Pawniard",
    "P_Bisharp",
    "P_Bouffalant",
    "P_Rufflet",
    "P_Braviary",
    "P_Vullaby",
    "P_Mandibuzz",
    "P_Heatmor",
    "P_Durant",
    "P_Deino",
    "P_Zweilous",
    "P_Hydreigon",
    "P_Larvesta",
    "P_Volcarona",
    "P_Cobalion",
    "P_Terrakion",
    "P_Virizion",
    "P_Tornadus",
    "P_Thundurus",
    "P_Reshiram",
    "P_Zekrom",
    "P_Landorus",
    "P_Kyurem",
    "P_Keldeo",
    "P_Meloetta",
    "P_Genesect",
    "P_Chespin",
    "P_Quiladin",
    "P_Chesnaught",
    "P_Fennekin",
    "P_Braizen",
    "P_Delphox",
    "P_Froakie",
    "P_Frogadier",
    "P_Greninja",
    "P_Bunnelby",
    "P_Diggersby",
    "P_Fletchling",
    "P_Fletchinder",
    "P_Talonflame",
    "P_Scatterbug",
    "P_Spewpa",
    "P_Vivillon",
    "P_Litleo",
    "P_Pyroar",
    "P_Flabebe",
    "P_Floette",
    "P_Florges",
    "P_Skiddo",
    "P_Gogoat",
    "P_Pancham",
    "P_Pangoro",
    "P_Furfrou",
    "P_Espurr",
    "P_Meowstic",
    "P_Honedge",
    "P_Doublade",
    "P_Aegislash",
    "P_Spritzee",
    "P_Aromatisse",
    "P_Swirlix",
    "P_Slurpuff",
    "P_Inkay",
    "P_Malamar",
    "P_Binacle",
    "P_Barbaracle",
    "P_Skrelp",
    "P_Dragalge",
    "P_Clauncher",
    "P_Clawitzer",
    "P_Helioptile",
    "P_Heliolisk",
    "P_Tyrunt",
    "P_Tyrantrum",
    "P_Amaura",
    "P_Aurorus",
    "P_Sylveon",
    "P_Hawlucha",
    "P_Dedenne",
    "P_Carbink",
    "P_Goomy",
    "P_Sliggoo",
    "P_Goodra",
    "P_Klefki",
    "P_Phantump",
    "P_Trevenant",
    "P_Pumpkaboo",
    "P_Gourgeist",
    "P_Bergmite",
    "P_Avalugg",
    "P_Noibat",
    "P_Noivern",
    "P_Xerneas",
    "P_Yveltal",
    "P_Zygarde",
    "P_Diancie",
    "P_Hoopa",
    "P_Volcanion",
  ]
});
