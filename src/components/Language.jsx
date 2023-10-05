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
    infoAbout1: "03.03.1993 – cü ildə Zərdab rayonu Pərvanlı kəndində anadan olmuşam . 2011 – ci ildə 439 bal toplayaraq ADPU – nun Coğrafiya müəllimliyi ixtisasına qəbul olmuşam(ödənişsiz) . 2015 – ci ildə Akademik məzuniyyət götürərək Hərbi Xidmətə getmişəm.2017 – ci ildə universiteti bitirib MİQ imtahanında 44 bal toplayaraq hazırda işlədiyim İmişli rayonu S.Məmmədov adına Axıcanlı kənd tam orta məktəbinə qəbul olmuşam. Hazırda əmək müqaviləmə əsasən həmin müəssisənin işçisiyəm.",
    bt: "Bacarıqlarım və təcrübəm",
    infoSkills1: "3 kursda iştirak etmişəm .1 – i əyani 2 – si isə online.1. Təhsil Nazirliyinin təşkil etdiyi «SQL proqramçı» kursunu bitirib sertfikat imtahani vermişəm(92/100 bal).2. Gənclər və idman Nazirliyinin təşkil etdiyi «WEB proqramlaşdırma» (HTML, CSS, JAVA SCRİPT) üzrə online təlimlərdə iştirak etdim . Sertfikat imtahanı verdim.",
    infoSkills2: "3. Təhsil Nazirliy, İqtisadiyyat Nazirliyi və İT-Academy təşkil etdiyi Web developer kursunuda bitirmişəm.Hazırda Dövlət Məşğulluq agentliyinin təşkil etdiyi kursda 2 gün təhsilalıram, 3 gün təcrübə keçirik. Tədris və təcrübə Jed Academy - də keçirilir",
    fName:"Ad",
    lName:"Soyad",
    eMail:"E-Poçt",
    mesagge:"Mesajınız burada...",
    send: "Göndər",
    warningMesagge:"Tələb olunan sahələr boş ola bilməz",
    grMesagge:"Mənimlə əlaqə saxladığınız üçün təşəkkür edirəm",
    hapS:"Xoşbəxt tələbələr",
    hapC:"Xoşbəxt müştərilər",
    fsProject:"Tam layihələr",
    pProject:"Ümumi layihələr",

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
    infoAbout1:"I was born on 03.03.1993 in the village of Parvanli, Zardab region. In 2011, having scored 439 points, I was admitted to the Geography teaching specialty of the Azerbaijan State Pedagogical University (free of charge). In 2015, I took an academic leave and went to the Military Service. In 2017, I graduated from the university and scored 44 points in the MIG exam. Currently, I am an employee of that enterprise according to my employment contract.",
    infoAbout2: "In addition, I worked at the Karalar village secondary school named after A. Allahverdiyev of the same region with a 3-year contract. Also, UTIS, STUDENT-GRADUATE, e-gov etc. of both schools. I am a systems coordinator. I have already changed my field of work to IT. In 2011, I completed a 6-month course on Office programs and Adobe Photoshop programs at the TB Bilgi educational center. Certificate issued. I have attended many online courses in the field of education. STEAM, UTIS, etc",
    bt: "My skills and experience",
    infoSkills1: "I participated in 3 courses. 1 is face-to-face and 2 is online. 1. I finished the SQL programmer course organized by the Ministry of Education and passed the certification exam (92/100 points). 2. I participated in online trainings on WEB programming (HTML, CSS, JAVA SCRIPT) organized by the Ministry of Youth and Sports. I passed the certification exam.",
    infoSkills2: "3. I graduated from the Web developer course organized by the Ministry of Education, Ministry of Economy and IT-Academy. Currently, I am studying for 2 days in the course organized by the State Employment Agency, and we are doing 3 days of practice. Training and practice takes place at Jed Academy",
    fName:"First Name",
    lName:"Last Name",
    eMail:"E-Post",
    mesagge:"Mesagge here...",
    send: "Send",
    warningMesagge:"Required fields cannot be empyt",
    grMesagge:"Thanks for contacting me",
    hapS:"Happy Students",
    hapC:"Happy Customers",
    fsProject:"Full-Stack Projects",
    pProject:"Public Projects",


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
    infoAbout1: "Я родился 03.03.1993 года в селе Пырванлы Зардабского района. В 2011 году, набрав 439 баллов, я был принят на факультет географии Азербайджанского государственного педагогического университета (бесплатно). В 2015 году я взял академический отпуск и пошел на военную службу, в 2017 году окончил университет и набрал 44 балла на экзамене МИГ. В настоящее время я являюсь работником этого предприятия по трудовому договору.",
    infoAbout2: "Кроме того, я работал в средней школе села Каралар имени А. Аллахвердиева того же района по 3-летнему контракту. А также ЕТИ, СТУДЕНТ-ВЫПУСКНИК, электронное правительство и т. д. обеих школ. Я системный координатор, уже сменила сферу работы на IT, в 2011 году прошла 6-месячный курс по программам Office и программам Adobe Photoshop в образовательном центре ТБ Билги. Выдан сертификат.Прошла множество онлайн-курсов в сфере образования. ПАР, UTIS и т. д.",
    bt: "Мои навыки и опыт",
    infoSkills1: "Я участвовал в 3 курсах: 1 очный и 2 онлайн. 1. Я закончил курс «Программист SQL», организованный Министерством образования, и сдал сертификационный экзамен (92/100 баллов). Принимал участие в онлайн-тренингах по «ВЕБ-программированию» (HTML, CSS, JAVA SCRIPT), организованных Министерством молодежи и спорта. Я сдал сертификационный экзамен.",
    infoSkills2: "3. Я окончил курсы веб-разработчиков, организованные Министерством образования, Министерством экономики и IT-Академией. В настоящее время я учусь 2 дня на курсах, организованных Государственным агентством занятости, и мы проходим 3 дня практики. Обучение и практика проходят в Jed Academy.",
    fName:"Имя",
    lName:"Фамилия",
    eMail:"Электронная почта",
    mesagge:"Ваше сообщение здесь...",
    send: "Отправлять",
    warningMesagge:"Обязательные поля не могут быть пустыми",
    grMesagge:"Спасибо, что связались со мной",
    hapS:"Счастливые студенты",
    hapC:"Счастливые клиенты",
    fsProject:"Полнофункциональные проекты",
    pProject:"Общественные проекты",

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
