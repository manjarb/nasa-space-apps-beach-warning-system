import faker from 'faker'

const beach01 = "http://www.bloggang.com/data/s/sdayoo/picture/1362190438.jpg"
const beach02 = "http://cdn.airportthai.co.th/uploads/profiles/0000000006/filemanager/images/1047scene130911_103834.jpg"
const beach03 = "https://travelblog.expedia.co.th/wp-content/uploads/2015/06/6-25-2015-5-01-06-PM-e1452164079444.jpg"
const beach04 = "http://3.bp.blogspot.com/-6eqAm9RstnU/VCDwWiOLC5I/AAAAAAAADjU/uHP-2AVntXo/s1600/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%8A%E0%B8%B1%E0%B8%A2.jpg"
const beach05 = "http://travel.mthai.com/app/uploads/2014/09/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9.jpg"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const expose_effect = "Ultraviolet (UV) irradiation present in sunlight is an environmental human carcinogen. The toxic effects of UV from natural sunlight and therapeutic artificial lamps are a major concern for human health. The major acute effects of UV irradiation on normal human skin comprise sunburn inflammation erythema, tanning, and local or systemic immunosuppression.[25] The most deadly form, malignant melanoma, is mostly caused by indirect DNA damage from UVA radiation."
export const hbs_definition = "Harmful algal blooms, or HABs, occur when colonies of algae—simple plants that live in the sea and freshwater—grow out of control while producing toxic or harmful effects on people, fish, shellfish, marine mammals, and birds. The human illnesses caused by HABs, though rare, can be debilitating or even fatal. HABs have been reported in every U.S. coastal state, and their occurrence may be on the rise. HABs are a national concern because they affect not only the health of people and marine ecosystems, but also the 'health' of local and regional economies."

const one_beach = {
    name: faker.address.city,
    address: faker.address.streetAddress,
    country: faker.address.country,
    date: new Date(),
    lat: faker.address.latitude,
    lng: faker.address.longitude
}

export const beach_details = {
    image_url: [beach01,beach02,beach03,beach04,beach05][getRandomInt(0,4)],
    sun_level: getRandomInt(1,4),
    suggestion_time: `${getRandomInt(4,6)}:00`,
    hab_level: getRandomInt(1,3),
    nearest_beachs: [
        one_beach,
        one_beach,
        one_beach
    ]
}