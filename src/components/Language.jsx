import React, { Suspense } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationAz = {
    about: "Haqqında",
    skills: "Bacarıqlar",
    project: "Layihələr",
    contact: "Əlaqə Saxla",
    hello: "Salam, Bu mənəm",
    name: "Kərimli Ağabala",
    i: "Və mən",
    dev: "Veb Proqramçıyam...",
    fre: "Sərbəst çalışıram",
    info1: "03.03.1993 – cü ildə Zərdab rayonu Pərvanlı kəndində anadan olmuşam . 2011 – ci ildə 439 bal toplayaraq ADPU – nun Coğrafiya müəllimliyi ixtisasına qəbul olmuşam ",
}
const translationEn = {
    about: "About",
    skills: "Skills",
    project: "Projects",
    contact: "Contact Me",
    hello: "Hello, It's me ",
    name: "Karimli Aghabala",
    i: "And I'am",
    dev: "a Web Developer...",
    fre: "a Freelancer",
    info1: "I was born on 03.03.1993 in the village of Parvanli, Zardab region. In 2011, having scored 439 points, I was admitted to the Geography teaching specialty of the Azerbaijan State Pedagogical University...",

}
const translationRu = {
    about: "Обо мне",
    skills: "Навыки",
    project: "Проекты",
    contact: "Поддерживать связь",
    hello: "Привет, это я",
    name: "Керимли Агабала",
    i: "И я",
    dev: "Веб-программист...",
    fre: "Фрилансер",
    info1: "Я родился 03.03.1993 года в селе Пырванлы Зардабского района. В 2011 году, набрав 439 баллов, я был принят на факультет географии Азербайджанского государственного педагогического университета...",

}
i18n
    .use(initReactI18next)
    .init({
        resources: {
            az: { translation: translationAz },
            en: { translation: translationEn },
            ru: { translation: translationRu },
        },
        lng: 'az',
        fallbackLng: 'az',
        interpolation: {
            escapeValue: { escapeValue: false },
        }
    });

const Language = () => {
    const onClick = (e) => {
        e.preventDefault()
        i18n.changeLanguage(e.target.value)
      }
    return (
        <Suspense fallback="Loading...">
            <form className="flex items-center justify-center gap-5 rounded-lg backdrop-blur-md border border-[rgba(255,255,255,0.3)] p-2  " >
                <button onClick={onClick} className=" text-white group hover:text-primary" type="submit" value="az">AZE</button>
                <button onClick={onClick} className=" text-white group hover:text-primary" type="submit" value="en">ENG</button>
                <button onClick={onClick} className=" text-white group hover:text-primary" type="submit" value="ru">RUS</button>
            </form>
        </Suspense>
    )
}

export default Language
