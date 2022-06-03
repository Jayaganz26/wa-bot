let handler = async(m, { conn }) => {
	conn.sendButton(m.chat, author, author, pickRandom(story), ['Get again', '/storyanime'], m)
}
handler.help = ['storyanime']
handler.tags = ['anime']

handler.command = /^storyanime$/i
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let story = [
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215076618_174699324675702_7993635661702209759_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=06aL94pfw8MAX_x8V4y&edm=AMKDjl4BAAAA&vs=17924452399680404_4125723641&_nc_vs=HBksFQAYJEdBclAwUXgybGpCYjQ1NEFBTl9ncHo5SUdlOXVia1lMQUFBRhUAAsgBABUAGCRHQVk1NVF3YjdEUC1fekVCQUFrdmpTcUlnSFFqYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaeyYTth%2BjIQBUCKAJDMywXQD3dsi0OVgQYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000d3767&ccb=7-4&oe=60E9389E&oh=f43f17bf326fd0f776bfc3c7a1d46ff9&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/216383482_944816149706316_3694553535283908589_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=J74p1TM9V6cAX_GR-EW&edm=AMKDjl4BAAAA&vs=17942212663493993_3133610103&_nc_vs=HBksFQAYJEdQcS01UXhNTnZzbVRsc0RBTzNQUXFMZHNFVXpia1lMQUFBRhUAAsgBABUAGCRHQlpOekF5M1g5TURqNW9BQVBsZE0wYjhHVzBVYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaclcGkzL7QPxUCKAJDMywXQETiDEm6XjUYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=2000022961&ccb=7-4&oe=60E962D0&oh=9df350fc3454596a0f211f268c8c8fe8&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214724818_1630748420454936_884626000900740297_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tUbblsI1_SAAX9Rw9C7&edm=AMKDjl4BAAAA&vs=17938415332515866_4123123988&_nc_vs=HBksFQAYJEdOSnd6QXdZdWxFMEtNc0ZBTWxVd3k2cDBrWU1ia1lMQUFBRhUAAsgBABUAGCRHSGc3MVF3aG1Ba3ExNm9BQUp5SEE5WmQyY3N3YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaO5N%2F4t5S6PxUCKAJDMywXQE2EOVgQYk4YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000c8408&ccb=7-4&oe=60E8F943&oh=446dc3e49886992d99f7aa4f8edbbcfe&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t66.30100-16/49916982_193675472707642_2816663400990147030_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmNvbnRyb2wtYi1iYXNlbGluZSJ9&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=A4PIStGDjIEAX_sC70C&edm=AMKDjl4BAAAA&vs=17875395413398200_2658793069&_nc_vs=HBksFQAYJEdEYXNfUUk2b01DVkpiQUFBTmFCM0p0d3pCWW5icFIxQUFBRhUAAsgBABUAGCRHSlQzdnd3Vk5FRF9ueDhEQUp2bkJPVG1IcWhTYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACa02MTlxYDmQBUCKAJDMywXQC%2BIMSbpeNUYHGRhc2hfY29udHJvbC1iLWJhc2VsaW5lXzFfdjERAHXqBwA%3D&_nc_rid=20000e4168&ccb=7-4&oe=60E8E809&oh=f3468be9cfc4eda180f8d5057449b35b&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214794385_770299243645213_3822111481849959933_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=RWMAW9GzP10AX-HXPR8&edm=AMKDjl4BAAAA&vs=17895877739074814_1474006511&_nc_vs=HBksFQAYJEdKR0F6UXdkeWNsRWxid0NBUDNWbTI4azNnbzFia1lMQUFBRhUAAsgBABUAGCRHT1EwdFF6b0pCWnZFLTRCQUVMY1RpcExmUzB1YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbEvqXXra6lQBUCKAJDMywXQDrVP3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=200005ca16&ccb=7-4&oe=60E8F5CB&oh=49bff17ab10d4b79c5064f88f42386d4&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213960474_499240394477973_327777883703879949_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=zGUTSJcKAtwAX-0RZ-K&edm=AMKDjl4BAAAA&vs=17884595015275433_1943265632&_nc_vs=HBksFQAYJEdCckh3QXlWMFY1MkRzWUJBQTBwWnFNLWdJd0Via1lMQUFBRhUAAsgBABUAGCRHSHRUcHd6SS1SaWVEN3NBQUFjdUtqQ05nQ1FuYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACb%2BlZ%2FIit7XPxUCKAJDMywXQEIAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=2000054f8b&ccb=7-4&oe=60E96733&oh=be49a3343da9623b44a55d418847b057&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214920040_557656298925344_3837768238341896540_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=HLmHDYpKXsAAX9hmID6&edm=AMKDjl4BAAAA&vs=17921656249696306_2409570241&_nc_vs=HBksFQAYJEdHaHJ6d3dnclpwNUwtc0JBRnc1cFNEaGZVSTFia1lMQUFBRhUAAsgBABUAGCRHSHhQMlF6R0hjLXlWc01CQUpKR0FNdXEzVTRZYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACb6vqOO687IPxUCKAJDMywXQDXVP3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000eb4f9&ccb=7-4&oe=60E958EB&oh=f4111e2c058f57799c616284d9b2a08a&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215090581_952866385275083_1688173862324730095_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=HM7KjxFGEpcAX8oCnEN&edm=AMKDjl4BAAAA&vs=18191280784128216_1869871251&_nc_vs=HBksFQAYJEdKVUYwZ3pMcUdsX29HSURBTy00OXZZdW1XMFhia1lMQUFBRhUAAsgBABUAGCRHRmNrekF6cXgxTXo4eHdCQUlmZUNlTF9SbVFoYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACauiorz9%2FHKQBUCKAJDMywXQEWRBiTdLxsYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000ca1f6&ccb=7-4&oe=60E8F6B8&oh=600b6fb0ed0483cce9317e6de6e229fb&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/216523902_467923324312609_5731152948767841607_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=4hjSbM8bH90AX8rktk3&edm=AMKDjl4BAAAA&vs=17960235910447123_1745802052&_nc_vs=HBksFQAYJEdIN2s1d3doSElmamtxa0JBRWRkdmZBOUpZbFBia1lMQUFBRhUAAsgBABUAGCRHRmRfQWd6bjRNdndmNnNJQU45V3RGZlR5Y3RuYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACb%2B49mAnvTZPxUCKAJDMywXQDLmZmZmZmYYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=200007f362&ccb=7-4&oe=60E98F70&oh=61e15339024df15163b77414e827bcf2&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t66.30100-16/47667526_2873365806248562_8057968997599352776_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmNvbnRyb2wtYi1iYXNlbGluZSJ9&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=hBSgyFixRZMAX-d9vvc&edm=AMKDjl4BAAAA&vs=18161259241080626_3992050025&_nc_vs=HBksFQAYJEdFWloxd0p5OGpDY1R6VUtBTWdYQlVFY3FOTnZicFIxQUFBRhUAAsgBABUAGCRHQjJVdHd5eW4zdGw2ZFlBQUlrSXh6cXBfMW9QYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACa2gavImtPXPxUCKAJDMywXQDYAAAAAAAAYHGRhc2hfY29udHJvbC1iLWJhc2VsaW5lXzFfdjERAHXqBwA%3D&_nc_rid=20000c7e2c&ccb=7-4&oe=60E8EDBF&oh=4196f9a6124da1a2c19b93122136ecd8&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215119240_892772684667467_757395925728517115_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=8k1XXM-t-E4AX_avpGb&edm=AMKDjl4BAAAA&vs=17905041985994694_1925835217&_nc_vs=HBksFQAYJEdJaDEwZ3hMR3J6V19Dc0RBUHRiWU9PVXo0SUtia1lMQUFBRhUAAsgBABUAGCRHRDZTMkF4NTVURlRuYUVBQU5TeFl0ZUVkY3ROYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACb6yYzBuPzHPxUCKAJDMywXQDYIcrAgxJwYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000f6783&ccb=7-4&oe=60E93FD7&oh=3e38a4237584ec80c9d485bc4f081183&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213786672_540711697070091_3652311475471697390_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=POXRnnoMhRwAX-fzH_Z&edm=AMKDjl4BAAAA&vs=17875448141399772_2398484967&_nc_vs=HBksFQAYJEdEQWd2Z3dMT0tGQXh1c0JBTzdGa3Fqdm5hOHlia1lMQUFBRhUAAsgBABUAGCRHRmRCeGd4X1FyMm9nV1FBQUhacFJGRWg5eWs5YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaMsrrX%2F4nQQBUCKAJDMywXQDqqfvnbItEYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=2000076a69&ccb=7-4&oe=60E8FA65&oh=181426afdd77e95ced203fd0cd57a20a&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214511319_539102807431274_1400855270345331760_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zUmG489idNIAX98QRX_&edm=AMKDjl4BAAAA&vs=17906717881950590_410348097&_nc_vs=HBksFQAYJEdOY3V5UXhxbUZXblRfb0JBRERVcWtKeTFuQVRia1lMQUFBRhUAAsgBABUAGCRHSFphdUF4NjRsWE5QYmtIQUxrczJ5X0tGNWMtYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbWgozwkcrNPxUCKAJDMywXQD2AAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=200004689f&ccb=7-4&oe=60E8FE9F&oh=045022539c5411d97a56b57afe18d9a5&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214177676_3989899641063531_6378185906815848175_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=SpoiDEnDU4wAX-T1b6F&edm=AMKDjl4BAAAA&vs=17856541214552046_2584401668&_nc_vs=HBksFQAYJEdJd1h4QXhyaU12bXlpd09BTzlPS1FkSzNvTllia1lMQUFBRhUAAsgBABUAGCRHSElFdlF3X0pXMFJ4QmtEQVA0MGZHdFJ5ZGdVYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaCy9rIysDkQBUCKAJDMywXQDrMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000cfd6d&ccb=7-4&oe=60E91ED3&oh=3f65c82c4b89d3112dc3bcb0de0c356f&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/216037749_4209337379123717_5150587893456707584_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=gedX9bsJqD8AX9qdHI-&edm=AMKDjl4BAAAA&vs=17969958061417456_630665247&_nc_vs=HBksFQAYJEdIVjU0QXdGOGppN1h2UU9BQUFnNm0xbWtIcEhia1lMQUFBRhUAAsgBABUAGCRHT1dSeFF4TEVSOW5FeTBEQUVaV2VyRkhUR1VrYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACa41oveyf3EPxUCKAJDMywXQDcQ5WBBiTcYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=20000b441d&ccb=7-4&oe=60E9032D&oh=b3cf6b1448e11298868f5f2c5b116fbe&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214715398_2641869949450647_8953267757771994544_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6egPZjkjRt0AX9XDOqW&edm=AMKDjl4BAAAA&vs=17856129212597252_2870778290&_nc_vs=HBksFQAYJEdBWk16QXlYT2VGSHhHSUpBTEExOWRpV1pVQjhia1lMQUFBRhUAAsgBABUAGCRHRGNqdlF3TTQ0RVNaVUFCQUdmRGw5N2Ztbkk1YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbSvYb3iK%2B8PxUCKAJDMywXQCuIMSbpeNUYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=200005585e&ccb=7-4&oe=60E9020D&oh=2f744071b83fa7d78a4e0505e2863fbf&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213577427_245484127097193_8681782483493648399_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU3Ni5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=bzKF6AZZ4fEAX8T2SA0&edm=AMKDjl4BAAAA&vs=17959221895447265_639493411&_nc_vs=HBksFQAYJEdOUHV1Z3hwa1RFNlJOOEFBQS00MkxFcjQzdDRia1lMQUFBRhUAAsgBABUAGCRHSXcyeEF5UXZwa2hYOFlCQUd6Q3ByaUlLbnR4YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbit4OU1OCvQBUCKAJDMywXQDQQ5WBBiTcYEmRhc2hfYmFzZWxpbmVfM192MREAdeoHAA%3D%3D&_nc_rid=20000911b8&ccb=7-4&oe=60E91D37&oh=4cfa95cd3a80d8bc85a4ce0e7478790e&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215105718_1205132553248626_4919611705339489392_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4kj9EEeBDogAX8ly7yv&edm=AMKDjl4BAAAA&vs=17939433499534850_1933758171&_nc_vs=HBksFQAYJEdMWkEwZ3h5WDc3SkQwZ0VBSEFzbmVISF9FVkVia1lMQUFBRhUAAsgBABUAGCRHTzM0eGd6Y29JLWhYMjBBQUdqNTFzc19xVllfYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaCsuK%2Frp%2FpPxUCKAJDMywXQCzdsi0OVgQYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dfb51d0&ccb=7-4&oe=60E93808&oh=c8dc860a71f8e226c8e83d0140706128&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213897838_186787793399574_811841681428866507_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjU0MC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=NOyKpo3P3QkAX_TtyhI&edm=AMKDjl4BAAAA&vs=17904633152002876_2736620232&_nc_vs=HBksFQAYJEdHN1N2d3dXN3hMczRha0FBTXRsYkR1MVBVUUxia1lMQUFBRhUAAsgBABUAGCRHQnI1c1F5R1RlZ0t6SEFFQURITkhJMnZ4NGxNYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACb21b2Hp9bcQBUCKAJDMywXQDPu2RaHKwIYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3df3794e&ccb=7-4&oe=60E916F8&oh=188c10a30f66b1110fb077fbf4ae067f&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215316356_969396800527230_6308921229941818212_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=eaupfrRYXl0AX-at_cj&edm=AMKDjl4BAAAA&vs=17901100562079854_1905813913&_nc_vs=HBksFQAYJEdJUjMxUXhfRy1GSHFYRURBR1JEbXJwdXlvMVhia1lMQUFBRhUAAsgBABUAGCRHS1Ffend3OXNLRTVtVUVKQUdhQ1FkanNNT01EYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaGgpyUosK6PxUCKAJDMywXQDlMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dfa857d&ccb=7-4&oe=60E914D5&oh=dfb9f6f04ae238be78a014365c6cdcd1&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215238894_986859948804217_5078373161961511529_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0ShOjtbzLN8AX-wBT9Z&edm=AMKDjl4BAAAA&vs=17892777062111976_1929275542&_nc_vs=HBksFQAYJEdPNUkxQXg1Q0xFOGk0RURBR25hbHdOOEFYcEdia1lMQUFBRhUAAsgBABUAGCRHSURpMlF6T1B5M0NfSjRFQU9PYmNNbVRQRHhzYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaC5qWElMfDPxUCKAJDMywXQEZMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dfe87c3&ccb=7-4&oe=60E93EF4&oh=fcd5af5af367e271913320a6e498353b&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213842541_124137746539910_5519580350545416467_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t2U6FMQD8F8AX9aT1pH&edm=AMKDjl4BAAAA&vs=17902682825027496_1988642764&_nc_vs=HBksFQAYJEdHMzZ2Z3lHSlVrUzUzQUFBQk5SZkxjVmZabE1ia1lMQUFBRhUAAsgBABUAGCRHUEY2eFF5WExLckV6RzBBQUJoRlRDbk1kbFlRYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbu1M2H6N%2FEPxUCKAJDMywXQDDmZmZmZmYYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dffc6d7&ccb=7-4&oe=60E9480E&oh=781c902d8ff21147a8017da7f1882b73&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/201915692_172046424840384_5533829660829950128_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=B3ZM6zbgQBkAX-x2Bjy&edm=AMKDjl4BAAAA&vs=17913202237875182_1244089469&_nc_vs=HBksFQAYJEdDejlDQXpBbUFtdWVad0FBTEFnU3MzQkhNeE1ia1lMQUFBRhUAAsgBABUAGCRHRDV1MVF4SngyTFVTSjRBQUJ1X2FKbnNCYkEtYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACacycqAnIXSPxUCKAJDMywXQECRBiTdLxsYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3df5952c&ccb=7-4&oe=60E92B9D&oh=ba7f3baee39d737eaf2d020e79525769&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/212979457_785372525463314_1547047491330826606_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zyDSoQwkQQ4AX9hSz72&edm=AMKDjl4BAAAA&vs=18160606726086761_1526179649&_nc_vs=HBksFQAYJEdBSFBzUXdTaDJYS1Nzb0NBRzdoYml0LU4zZ1Zia1lMQUFBRhUAAsgBABUAGCRHR0VycVF5MTR1LTdZTklBQUVKNlJBSXNEODVoYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaUvZij7IfDPxUCKAJDMywXQERVP3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dff683a&ccb=7-4&oe=60E93F6C&oh=b5b200016b2d1b740cf6dff330c907d3&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215215540_179138440771667_1710421833462368226_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=XnQeFtcaudwAX8xqsKP&edm=AMKDjl4BAAAA&vs=18181111537140334_3436238019&_nc_vs=HBksFQAYJEdMVHQwd3hUdUNEcjdLSUFBT0xIbUdlWW83d1hia1lMQUFBRhUAAsgBABUAGCRHTndieWd6MkJ0WWxpY1FEQUVYSHdxQ1hVSVZqYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaKl%2BXz3OrDPxUCKAJDMywXQDXu2RaHKwIYEmRhc2hfYmFzZWxpbmVfMl92MREAdeoHAA%3D%3D&_nc_rid=9d3dfcb42d&ccb=7-4&oe=60E93A01&oh=9a227c618241c8521e2bc39360486737&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213885512_4295785770481165_8049116664431712051_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=4mYQdi86NKEAX9uAudO&edm=AMKDjl4BAAAA&vs=18070056406303778_4105687777&_nc_vs=HBksFQAYJEdFaWl2d3dOZHVHUS1rSVBBRE1YSWRQMU5MUnZia1lMQUFBRhUAAsgBABUAGCRHTjFyNHd3c1FFWWhuelVCQUtEZTJTOUR3SGhiYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACao8ajC8NC4PxUCKAJDMywXQDGzMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dfe1ca2&ccb=7-4&oe=60E9592C&oh=3525574c563732173a228287d6f67c6d&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213558487_885503392311750_8268765843214391596_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=QN0GMymCmtQAX8XPn-t&edm=AMKDjl4BAAAA&vs=18124564963212434_365548853&_nc_vs=HBksFQAYJEdOZWt1Z3pHYVNWVFhDVURBQ3haclhfNWpzQnlia1lMQUFBRhUAAsgBABUAGCRHSEhyckF5MkZ5WlJ1cFFEQUIzQ2tQdU1yUUp3YmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACa%2BnL%2BJz6fgQBUCKAJDMywXQDlMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dfeb2d4&ccb=7-4&oe=60E94F84&oh=f51ea0e2d42d6e16935b34391d2515a9&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/216152370_230554502223996_3787800617730838367_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=FTbCMjhds8oAX_W4Au_&edm=AMKDjl4BAAAA&vs=17904490384898936_2283939989&_nc_vs=HBksFQAYJEdESTU0Z3g4MkRRbnNORUFBRjhQMnR1WF9KQTBia1lMQUFBRhUAAsgBABUAGCRHTFBIM0F4OWZidjdMY2tCQUp3Ry1lVWRKWVlQYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACaAhMSFv9i2PxUCKAJDMywXQC13S8an754YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3df21e3b&ccb=7-4&oe=60E9142C&oh=444b25b096c63f125b91765c0212bede&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214457485_2040891822734503_9045544214726055400_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=oPn07V_i60wAX-yUqbp&edm=AMKDjl4BAAAA&vs=17889859637323134_3888826215&_nc_vs=HBksFQAYJEdJMWN5QXluZkI0b0xrQUhBT2dWMXJhSk9vaDlia1lMQUFBRhUAAsgBABUAGCRHTnNGemd3Rkp4dEVrSmdBQUg3OEUwMjVaS1IzYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbwysGj%2FoPcPxUCKAJDMywXQD53S8an754YEmRhc2hfYmFzZWxpbmVfMl92MREAdeoHAA%3D%3D&_nc_rid=9d3df77488&ccb=7-4&oe=60E8F2EA&oh=7416172b6657ea0c2659dd5d2c14834f&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215398335_147707297432157_8775761555202002812_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=t1BJ9xu9sVQAX8EFdgN&edm=AMKDjl4BAAAA&vs=17913687769845930_1265897714&_nc_vs=HBksFQAYJEdMXzMxZ3hkZ3Y3SVZvWUFBSHhQV0hPanhNbDVia1lMQUFBRhUAAsgBABUAGCRHTVlBend5bGZlMlBqVk1GQUJ0M2pVUFoxVzhGYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbEx7DljsDdPxUCKAJDMywXQDUIcrAgxJwYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3df2a403&ccb=7-4&oe=60E95C20&oh=88f76269a8343ee3d4ff7b46ca9b5bd1&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/213878130_772678436741865_6507466383013852399_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=hr1MGqscErkAX90EwiV&edm=AMKDjl4BAAAA&vs=17920240645742955_1583106341&_nc_vs=HBksFQAYJEdIS0Z2d3pwWXI4M3Y3NENBTzgwVm9NeUtrOWFia1lMQUFBRhUAAsgBABUAGCRHSWt2c2d6UDlyMGlMc1FBQUdrdXNicjg4THhaYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbE5eXc7czoPxUCKAJDMywXQCy7ZFocrAgYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3df660d3&ccb=7-4&oe=60E967FB&oh=c9fba4a976747b09b90ee6e65ec0b83b&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215021543_1202602766923278_1257522837067377474_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7MIe46zAw2YAX96HONy&edm=AMKDjl4BAAAA&vs=18179519866185918_2948618401&_nc_vs=HBksFQAYJEdPZjMwQXdPZHJyR3drVUVBRUtyVjVCYm5uTVJia1lMQUFBRhUAAsgBABUAGCRHQ2k5dkF4cXQ2ZVpHZEVBQU5xblFTc3VmWnBrYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbY%2FPrN6JvFPxUCKAJDMywXQDP3S8an754YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dfaf2d9&ccb=7-4&oe=60E97CB1&oh=1fa83b7f95d0c85606947dad125bd3c5&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/214203415_1178940019287501_3448402289804417525_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=CxUby2F3eM0AX88l6xW&edm=AMKDjl4BAAAA&vs=17912865151882953_1397224449&_nc_vs=HBksFQAYJEdCZDh4QXpOcFE5ZFBUQUVBUFdaYjdhY0w5c3Zia1lMQUFBRhUAAsgBABUAGCRHSFFmdWd6YXZfSXM0VE1GQU9iVXpnV29nR0JuYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbCq%2B22hbPhPxUCKAJDMywXQDOAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=9d3dff3a50&ccb=7-4&oe=60E9175F&oh=f682fbc7e6da8b43104fdc04045de3d7&_nc_sid=1fe099.mp4",
"https://instagram.fcgk2-1.fna.fbcdn.net/v/t50.2886-16/215360501_2645978039031987_2922429111954374424_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQifQ&_nc_ht=instagram.fcgk2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=gsgTjtO4pHIAX-Cq4tN&edm=AMKDjl4BAAAA&vs=17871160457518160_1106255024&_nc_vs=HBksFQAYJEdQVWoxZ3l6bUJuRmdHWUpBQmotVEN2TGpZNG9ia1lMQUFBRhUAAsgBABUAGCRHT0R6dXd5U2tVR1RGUjRCQUsybk4wbmZCd2xoYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMBUAACbknpah79fNPxUCKAJDMywXQCQAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMl92MREAdeoHAA%3D%3D&_nc_rid=19b485e8b9&ccb=7-4&oe=60E9312C&oh=6aa419e2e330a3eb10af38f384277a01&_nc_sid=1fe099.mp4"
]