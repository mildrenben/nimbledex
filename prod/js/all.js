(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78609663-1', 'auto');
ga('send', 'pageview');

// Awesomplete - Lea Verou - MIT license
(function(){var searchBtn = document.getElementsByClassName('Search_Btn')[0];function h(a){a=Array.isArray(a)?{label:a[0],value:a[1]}:"object"===typeof a&&"label"in a&&"value"in a?a:{label:a,value:a};this.label=a.label||a.value;this.value=a.value}function n(a,b,d){for(var g in b){var f=b[g],c=a.input.getAttribute("data-"+g.toLowerCase());a[g]="number"===typeof f?parseInt(c):!1===f?null!==c:f instanceof Function?null:c;a[g]||0===a[g]||(a[g]=g in d?d[g]:f)}}function c(a,b){return"string"===typeof a?(b||document).querySelector(a):a||null}function k(a,b){return l.call((b||
document).querySelectorAll(a))}function m(){k("input.awesomplete").forEach(function(a){new e(a)})}var e=function(a,b){var d=this;this.input=c(a);this.input.setAttribute("autocomplete","off");this.input.setAttribute("aria-autocomplete","list");b=b||{};n(this,{minChars:2,maxItems:10,autoFirst:!1,data:e.DATA,filter:e.FILTER_CONTAINS,sort:e.SORT_BYLENGTH,item:e.ITEM,replace:e.REPLACE},b);this.index=-1;this.container=c.create("div",{className:"awesomplete",around:a});this.ul=c.create("ul",{hidden:"hidden",
inside:this.container});this.status=c.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container});c.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(a){var b=a.keyCode;if(d.opened)if(13===b&&d.selected)a.preventDefault(),d.select();else if(27===b)d.close();else if(38===b||40===b)a.preventDefault(),d[38===b?"previous":"next"]()}});c.bind(this.input.form,{submit:this.close.bind(this)});
c.bind(this.ul,{mousedown:function(a){var b=a.target;if(b!==this){for(;b&&!/li/i.test(b.nodeName);)b=b.parentNode;b&&0===a.button&&(a.preventDefault(),d.select(b,a.target))}}});this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||b.list||[];e.all.push(this)};e.prototype={set list(a){if(Array.isArray(a))this._list=a;else if("string"===typeof a&&-1<a.indexOf(","))this._list=a.split(/\s*,\s*/);
else if((a=c(a))&&a.children){var b=[];l.apply(a.children).forEach(function(a){if(!a.disabled){var c=a.textContent.trim(),f=a.value||c;a=a.label||c;""!==f&&b.push({label:a,value:f})}});this._list=b}document.activeElement===this.input&&this.evaluate()},get selected(){return-1<this.index},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden","");this.index=-1;c.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden");this.autoFirst&&
-1===this.index&&this["goto"](0);c.fire(this.input,"awesomplete-open")},next:function(){this["goto"](this.index<this.ul.children.length-1?this.index+1:-1)},previous:function(){var a=this.ul.children.length;this["goto"](this.selected?this.index-1:a-1)},"goto":function(a){var b=this.ul.children;this.selected&&b[this.index].setAttribute("aria-selected","false");this.index=a;-1<a&&0<b.length&&(b[a].setAttribute("aria-selected","true"),this.status.textContent=b[a].textContent,c.fire(this.input,"awesomplete-highlight",
{text:this.suggestions[this.index]}))},select:function(a,b){a?this.index=c.siblingIndex(a):a=this.ul.children[this.index];if(a){var d=this.suggestions[this.index];c.fire(this.input,"awesomplete-select",{text:d,origin:b||a})&&(this.replace(d),this.close(),c.fire(this.input,"awesomplete-selectcomplete",{text:d}))}},evaluate:function(){var a=this,b=this.input.value;b.length>=this.minChars&&0<this._list.length?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(d){return new h(a.data(d,
b))}).filter(function(d){return a.filter(d,b)}).sort(this.sort).slice(0,this.maxItems),this.suggestions.forEach(function(d){a.ul.appendChild(a.item(d,b))}),0===this.ul.children.length?this.close():this.open()):this.close()}};e.all=[];e.FILTER_CONTAINS=function(a,b){return RegExp(c.regExpEscape(b.trim()),"i").test(a)};e.FILTER_STARTSWITH=function(a,b){return RegExp("^"+c.regExpEscape(b.trim()),"i").test(a)};e.SORT_BYLENGTH=function(a,b){return a.length!==b.length?a.length-b.length:a<b?-1:1};e.ITEM=
function(a,b){var d=""===b?a:a.replace(RegExp(c.regExpEscape(b.trim()),"gi"),"<mark>$&</mark>");return c.create("li",{innerHTML:d,"aria-selected":"false"})};e.REPLACE=function(a){this.input.value=a.value;searchBtn.click()};e.DATA=function(a){return a};Object.defineProperty(h.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}});h.prototype.toString=h.prototype.valueOf=function(){return""+this.label};var l=Array.prototype.slice;c.create=function(a,b){var d=document.createElement(a),
g;for(g in b){var f=b[g];"inside"===g?c(f).appendChild(d):"around"===g?(f=c(f),f.parentNode.insertBefore(d,f),d.appendChild(f)):g in d?d[g]=f:d.setAttribute(g,f)}return d};c.bind=function(a,b){if(a)for(var d in b){var c=b[d];d.split(/\s+/).forEach(function(b){a.addEventListener(b,c)})}};c.fire=function(a,b,c){var e=document.createEvent("HTMLEvents");e.initEvent(b,!0,!0);for(var f in c)e[f]=c[f];return a.dispatchEvent(e)};c.regExpEscape=function(a){return a.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")};
c.siblingIndex=function(a){for(var b=0;a=a.previousElementSibling;b++);return b};"undefined"!==typeof Document&&("loading"!==document.readyState?m():document.addEventListener("DOMContentLoaded",m));e.$=c;e.$$=k;"undefined"!==typeof self&&(self.Awesomplete=e);"object"===typeof module&&module.exports&&(module.exports=e);return e})();

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
var allHeader = document.getElementsByClassName('AllListHeader')[0];
if (allHeader) {
  var allHeaderOffset = allHeader.getClientRects()[0].top < 64 ? 64 : allHeader.getClientRects()[0].top;
}

// Sticky headers
window.addEventListener('scroll', function(){
  if (window.scrollY > searchOffset) {
    document.body.classList.add('fixed-header');
  } else if (document.body.classList.contains('fixed-header')) {
    document.body.classList.remove('fixed-header');
  }
  if (allHeader) {
    if (window.scrollY > allHeaderOffset) {
      document.body.classList.add('fixed-allHeader');
    } else if (document.body.classList.contains('fixed-allHeader')) {
      document.body.classList.remove('fixed-allHeader');
    }
  }
});

// Anchor ID links on All page
if (window.location.pathname === '/all') {
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

var input = document.getElementsByClassName("Search_Input")[0];

new Awesomplete(input, {
  list: [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran-f",
    "Nidorina",
    "Nidoqueen",
    "Nidoran-m",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch'd",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr.mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew",
    "Chikorita",
    "Bayleef",
    "Meganium",
    "Cyndaquil",
    "Quilava",
    "Typhlosion",
    "Totodile",
    "Croconaw",
    "Feraligatr",
    "Sentret",
    "Furret",
    "Hoothoot",
    "Noctowl",
    "Ledyba",
    "Ledian",
    "Spinarak",
    "Ariados",
    "Crobat",
    "Chinchou",
    "Lanturn",
    "Pichu",
    "Cleffa",
    "Igglybuff",
    "Togepi",
    "Togetic",
    "Natu",
    "Xatu",
    "Mareep",
    "Flaaffy",
    "Ampharos",
    "Bellossom",
    "Marill",
    "Azumarill",
    "Sudowoodo",
    "Politoed",
    "Hoppip",
    "Skiploom",
    "Jumpluff",
    "Aipom",
    "Sunkern",
    "Sunflora",
    "Yanma",
    "Wooper",
    "Quagsire",
    "Espeon",
    "Umbreon",
    "Murkrow",
    "Slowking",
    "Misdreavus",
    "Unown",
    "Wobbuffet",
    "Girafarig",
    "Pineco",
    "Forretress",
    "Dunsparce",
    "Gligar",
    "Steelix",
    "Snubbull",
    "Granbull",
    "Qwilfish",
    "Scizor",
    "Shuckle",
    "Heracross",
    "Sneasel",
    "Teddiursa",
    "Ursaring",
    "Slugma",
    "Magcargo",
    "Swinub",
    "Piloswine",
    "Corsola",
    "Remoraid",
    "Octillery",
    "Delibird",
    "Mantine",
    "Skarmory",
    "Houndour",
    "Houndoom",
    "Kingdra",
    "Phanpy",
    "Donphan",
    "Porygon2",
    "Stantler",
    "Smeargle",
    "Tyrogue",
    "Hitmontop",
    "Smoochum",
    "Elekid",
    "Magby",
    "Miltank",
    "Blissey",
    "Raikou",
    "Entei",
    "Suicune",
    "Larvitar",
    "Pupitar",
    "Tyranitar",
    "Lugia",
    "Ho-oh",
    "Celebi",
    "Treecko",
    "Grovyle",
    "Sceptile",
    "Torchic",
    "Combusken",
    "Blaziken",
    "Mudkip",
    "Marshtomp",
    "Swampert",
    "Poochyena",
    "Mightyena",
    "Zigzagoon",
    "Linoone",
    "Wurmple",
    "Silcoon",
    "Beautifly",
    "Cascoon",
    "Dustox",
    "Lotad",
    "Lombre",
    "Ludicolo",
    "Seedot",
    "Nuzleaf",
    "Shiftry",
    "Taillow",
    "Swellow",
    "Wingull",
    "Pelipper",
    "Ralts",
    "Kirlia",
    "Gardevoir",
    "Surskit",
    "Masquerain",
    "Shroomish",
    "Breloom",
    "Slakoth",
    "Vigoroth",
    "Slaking",
    "Nincada",
    "Ninjask",
    "Shedinja",
    "Whismur",
    "Loudred",
    "Exploud",
    "Makuhita",
    "Hariyama",
    "Azurill",
    "Nosepass",
    "Skitty",
    "Delcatty",
    "Sableye",
    "Mawile",
    "Aron",
    "Lairon",
    "Aggron",
    "Meditite",
    "Medicham",
    "Electrike",
    "Manectric",
    "Plusle",
    "Minun",
    "Volbeat",
    "Illumise",
    "Roselia",
    "Gulpin",
    "Swalot",
    "Carvanha",
    "Sharpedo",
    "Wailmer",
    "Wailord",
    "Numel",
    "Camerupt",
    "Torkoal",
    "Spoink",
    "Grumpig",
    "Spinda",
    "Trapinch",
    "Vibrava",
    "Flygon",
    "Cacnea",
    "Cacturne",
    "Swablu",
    "Altaria",
    "Zangoose",
    "Seviper",
    "Lunatone",
    "Solrock",
    "Barboach",
    "Whiscash",
    "Corphish",
    "Crawdaunt",
    "Baltoy",
    "Claydol",
    "Lileep",
    "Cradily",
    "Anorith",
    "Armaldo",
    "Feebas",
    "Milotic",
    "Castform",
    "Kecleon",
    "Shuppet",
    "Banette",
    "Duskull",
    "Dusclops",
    "Tropius",
    "Chimecho",
    "Absol",
    "Wynaut",
    "Snorunt",
    "Glalie",
    "Spheal",
    "Sealeo",
    "Walrein",
    "Clamperl",
    "Huntail",
    "Gorebyss",
    "Relicanth",
    "Luvdisc",
    "Bagon",
    "Shelgon",
    "Salamence",
    "Beldum",
    "Metang",
    "Metagross",
    "Regirock",
    "Regice",
    "Registeel",
    "Latias",
    "Latios",
    "Kyogre",
    "Groudon",
    "Rayquaza",
    "Jirachi",
    "Deoxys",
    "Turtwig",
    "Grotle",
    "Torterra",
    "Chimchar",
    "Monferno",
    "Infernape",
    "Piplup",
    "Prinplup",
    "Empoleon",
    "Starly",
    "Staravia",
    "Staraptor",
    "Bidoof",
    "Bibarel",
    "Kricketot",
    "Kricketune",
    "Shinx",
    "Luxio",
    "Luxray",
    "Budew",
    "Roserade",
    "Cranidos",
    "Rampardos",
    "Shieldon",
    "Bastiodon",
    "Burmy",
    "Wormadam",
    "Mothim",
    "Combee",
    "Vespiquen",
    "Pachirisu",
    "Buizel",
    "Floatzel",
    "Cherubi",
    "Cherrim",
    "Shellos",
    "Gastrodon",
    "Ambipom",
    "Drifloon",
    "Drifblim",
    "Buneary",
    "Lopunny",
    "Mismagius",
    "Honchkrow",
    "Glameow",
    "Purugly",
    "Chingling",
    "Stunky",
    "Skuntank",
    "Bronzor",
    "Bronzong",
    "Bonsly",
    "Mime jr.",
    "Happiny",
    "Chatot",
    "Spiritomb",
    "Gible",
    "Gabite",
    "Garchomp",
    "Munchlax",
    "Riolu",
    "Lucario",
    "Hippopotas",
    "Hippowdon",
    "Skorupi",
    "Drapion",
    "Croagunk",
    "Toxicroak",
    "Carnivine",
    "Finneon",
    "Lumineon",
    "Mantyke",
    "Snover",
    "Abomasnow",
    "Weavile",
    "Magnezone",
    "Lickilicky",
    "Rhyperior",
    "Tangrowth",
    "Electivire",
    "Magmortar",
    "Togekiss",
    "Yanmega",
    "Leafeon",
    "Glaceon",
    "Gliscor",
    "Mamoswine",
    "Porygon-z",
    "Gallade",
    "Probopass",
    "Dusknoir",
    "Froslass",
    "Rotom",
    "Uxie",
    "Mesprit",
    "Azelf",
    "Dialga",
    "Palkia",
    "Heatran",
    "Regigigas",
    "Giratina",
    "Cresselia",
    "Phione",
    "Manaphy",
    "Darkrai",
    "Shaymin",
    "Arceus",
    "Victini",
    "Snivy",
    "Servine",
    "Serperior",
    "Tepig",
    "Pignite",
    "Emboar",
    "Oshawott",
    "Dewott",
    "Samurott",
    "Patrat",
    "Watchog",
    "Lillipup",
    "Herdier",
    "Stoutland",
    "Purrloin",
    "Liepard",
    "Pansage",
    "Simisage",
    "Pansear",
    "Simisear",
    "Panpour",
    "Simipour",
    "Munna",
    "Musharna",
    "Pidove",
    "Tranquill",
    "Unfezant",
    "Blitzle",
    "Zebstrika",
    "Roggenrola",
    "Boldore",
    "Gigalith",
    "Woobat",
    "Swoobat",
    "Drilbur",
    "Excadrill",
    "Audino",
    "Timburr",
    "Gurdurr",
    "Conkeldurr",
    "Tympole",
    "Palpitoad",
    "Seismitoad",
    "Throh",
    "Sawk",
    "Sewaddle",
    "Swadloon",
    "Leavanny",
    "Venipede",
    "Whirlipede",
    "Scolipede",
    "Cottonee",
    "Whimsicott",
    "Petilil",
    "Lilligant",
    "Basculin",
    "Sandile",
    "Krokorok",
    "Krookodile",
    "Darumaka",
    "Darmanitan",
    "Maractus",
    "Dwebble",
    "Crustle",
    "Scraggy",
    "Scrafty",
    "Sigilyph",
    "Yamask",
    "Cofagrigus",
    "Tirtouga",
    "Carracosta",
    "Archen",
    "Archeops",
    "Trubbish",
    "Garbodor",
    "Zorua",
    "Zoroark",
    "Minccino",
    "Ciccino",
    "Gothita",
    "Gothorita",
    "Gothitelle",
    "Solosis",
    "Duosion",
    "Reuniclus",
    "Ducklett",
    "Swanna",
    "Vanillite",
    "Vanillish",
    "Vanilluxe",
    "Deerling",
    "Sawsbuck",
    "Emolga",
    "Karrablast",
    "Escavalier",
    "Foongus",
    "Amoonguss",
    "Frillish",
    "Jellicent",
    "Alomomola",
    "Joltik",
    "Galvantula",
    "Ferroseed",
    "Ferrothorn",
    "Klink",
    "Klang",
    "Klinklang",
    "Tynamo",
    "Eelektrik",
    "Eelektross",
    "Elgyem",
    "Beheeyem",
    "Litwick",
    "Lampent",
    "Chandelure",
    "Axew",
    "Fraxure",
    "Haxorus",
    "Cubchoo",
    "Beartic",
    "Cryogonal",
    "Shelmet",
    "Accelgor",
    "Stunfisk",
    "Mienfoo",
    "Mienshao",
    "Druddigon",
    "Golett",
    "Golurk",
    "Pawniard",
    "Bisharp",
    "Bouffalant",
    "Rufflet",
    "Braviary",
    "Vullaby",
    "Mandibuzz",
    "Heatmor",
    "Durant",
    "Deino",
    "Zweilous",
    "Hydreigon",
    "Larvesta",
    "Volcarona",
    "Cobalion",
    "Terrakion",
    "Virizion",
    "Tornadus",
    "Thundurus",
    "Reshiram",
    "Zekrom",
    "Landorus",
    "Kyurem",
    "Keldeo",
    "Meloetta",
    "Genesect",
    "Chespin",
    "Quiladin",
    "Chesnaught",
    "Fennekin",
    "Braizen",
    "Delphox",
    "Froakie",
    "Frogadier",
    "Greninja",
    "Bunnelby",
    "Diggersby",
    "Fletchling",
    "Fletchinder",
    "Talonflame",
    "Scatterbug",
    "Spewpa",
    "Vivillon",
    "Litleo",
    "Pyroar",
    "Flabebe",
    "Floette",
    "Florges",
    "Skiddo",
    "Gogoat",
    "Pancham",
    "Pangoro",
    "Furfrou",
    "Espurr",
    "Meowstic",
    "Honedge",
    "Doublade",
    "Aegislash",
    "Spritzee",
    "Aromatisse",
    "Swirlix",
    "Slurpuff",
    "Inkay",
    "Malamar",
    "Binacle",
    "Barbaracle",
    "Skrelp",
    "Dragalge",
    "Clauncher",
    "Clawitzer",
    "Helioptile",
    "Heliolisk",
    "Tyrunt",
    "Tyrantrum",
    "Amaura",
    "Aurorus",
    "Sylveon",
    "Hawlucha",
    "Dedenne",
    "Carbink",
    "Goomy",
    "Sliggoo",
    "Goodra",
    "Klefki",
    "Phantump",
    "Trevenant",
    "Pumpkaboo",
    "Gourgeist",
    "Bergmite",
    "Avalugg",
    "Noibat",
    "Noivern",
    "Xerneas",
    "Yveltal",
    "Zygarde",
    "Diancie",
    "Hoopa",
    "Volcanion",
  ]
});
