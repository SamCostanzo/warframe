const data = [
    // Vanilla Warframes
    {
        id: 1,
        name: "Ash",
        desc: "",
        url: "./img/ash.png",
        abilities: ["Shuriken", "Smoke Screen", "Teleport", "Blade Storm"]
    },
    {
        id: 2,
        name: "Atlas",
        desc: "",
        url: "./img/atlas.png",
        abilities: ["Landslide", "Techtonics", "Petrify", "Rumblers"]
    },
    {
        id: 3,
        name: "Banshee",
        desc: "",
        url: "./img/banshee.png",
        abilities: ["Sonic Boom", "Sonar", "Silence", "Sound Quake"]
    },
    {
        id: 4,
        name: "Baruuk",
        desc: "",
        url: "./img/baruuk.png",
        abilities: ["Elude", "Lull", "Desolate Hands", "Serene Storm"]
    },
    {
        id: 5,
        name: "Chroma",
        desc: "",
        url: "./img/chroma.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 6,
        name: "Ember",
        desc: "",
        url: "./img/ember.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 7,
        name: "Equinox",
        desc: "",
        url: "./img/equinox.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 8,
        name: "Excalibur",
        desc: "A perfect balance of mobility and offense, Excalibur is the ideal warframe for new players.",
        url: "./img/excalibur.png",
        abilities: ["Slash Dash", "Radial Blind", "Radial Javelin", "Exalted Blade"]
    },
    {
        id: 9,
        name: "Frost",
        desc: "",
        url: "./img/frost.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 10,
        name: "Gara",
        desc: "",
        url: "./img/gara.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 11,
        name: "Garuda",
        desc: "",
        url: "./img/garuda.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 12,
        name: "Harrow",
        desc: "",
        url: "./img/harrow.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 13,
        name: "Hildryn",
        desc: "",
        url: "./img/hildryn.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 14,
        name: "Hydroid",
        desc: "",
        url: "./img/hydroid.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 15,
        name: "Inaros",
        desc: "",
        url: "./img/inaros.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 16,
        name: "Ivara",
        desc: "",
        url: "./img/ivara.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 17,
        name: "Khora",
        desc: "",
        url: "./img/khora.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 18,
        name: "Limbo",
        desc: "",
        url: "./img/limbo.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 19,
        name: "Loki",
        desc: "",
        url: "./img/loki.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 20,
        name: "Mag",
        desc: "This is Mag",
        url: "./img/mag.png",
        abilities: ["bla", "bla", "bla", "bla"]
    },
    {
        id: 21,
        name: "Mesa",
        desc: "",
        url: "./img/mesa.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 22,
        name: "Mirage",
        desc: "",
        url: "./img/mirage.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 23,
        name: "Nekros",
        desc: "",
        url: "./img/nekros.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 24,
        name: "Nezha",
        desc: "",
        url: "./img/nezha.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 25,
        name: "Nidus",
        desc: "",
        url: "./img/nidus.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 26,
        name: "Nova",
        desc: "",
        url: "./img/nova.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 27,
        name: "Nyx",
        desc: "",
        url: "./img/nyx.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 28,
        name: "Oberon",
        desc: "",
        url: "./img/oberon.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 29,
        name: "Octavia",
        desc: "",
        url: "./img/octavia.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 30,
        name: "Revenant",
        desc: "",
        url: "./img/revenant.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 31,
        name: "Rhino",
        desc: "",
        url: "./img/rhino.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 32,
        name: "Saryn",
        desc: "",
        url: "./img/saryn.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 33,
        name: "Titania",
        desc: "",
        url: "./img/titania.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 34,
        name: "Trinity",
        desc: "",
        url: "./img/trinity.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 35,
        name: "Valkyr",
        desc: "",
        url: "./img/valkyr.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 36,
        name: "Vauban",
        desc: "",
        url: "./img/vauban.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 37,
        name: "Volt",
        desc: "This is Volt",
        url: "./img/volt.png",
        abilities: ["bla", "bla", "bla", "bla"]
    },
    {
        id: 38,
        name: "Wisp",
        desc: "",
        url: "./img/wisp.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 39,
        name: "Wukong",
        desc: "",
        url: "./img/wukong.png",
        abilities: ["", "", "", ""]
    },
    {
        id: 40,
        name: "Zephyr",
        desc: "",
        url: "./img/zephyr.png",
        abilities: ["", "", "", ""]
    },


    // Prime Warframes


];


export default data;


 







