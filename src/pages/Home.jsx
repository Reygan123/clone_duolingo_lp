import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import CustomSectionButton from "../components/section/CustomSectionButton";
import CustomSectionText from "../components/section/CustomSectionText";
import CustomSectionTextButton from "../components/section/CustomSectionTextButton";
import CustomSectionWithBackground from "../components/section/CustomSectionWithBackground";

import FirstImageSection from '../assets/img-section/section1.webp'
import SecondImageSection from '../assets/img-section/section2.webp'
import ThirdImageSection from '../assets/img-section/section3.webp'
import FourthImageSection from '../assets/img-section/section4.webp'
import FifthImageSection from '../assets/img-section/section5.webp'
import SixthImageSection from '../assets/img-section/section6.webp'
import SeventhImageSection from '../assets/img-section/section7.webp'
import EightImageSection from '../assets/img-section/section8.webp'
import NineImageSection from '../assets/img-section/section9.webp'
import TenImageSection from '../assets/img-section/section10.webp'
import AppleStore from '../assets/apple.svg'
import PlayStore from '../assets/play.svg'
import ButtonIconSection from "../components/section/ButtonIconSection";
import ButtonSection from "../components/section/ButtonSection";
import CustomFooter from "../components/footer/CustomFooter";
import CustomFooterLanguage from "../components/footer/CustomFooterLanguage";

const Home = () => {
    const [scrolled, setScrolled] = useState(false)

    const aboutUs = {
        title: "Tentang Kami",
        menu: [
            "Kursus",
            "Misi",
            "Pendekatan",
            "Efikasi",
            "Tim",
            "Riset",
            "Karier",
            "Pedoman brand",
            "Toko",
            "Pers",
            "Investor",
            "Hubungi kami"
        ]
    };

    const products = {
        title: "Produk",
        menu: [
            "Duolingo",
        "Duolingo for Schools",
        "Duolingo English Test",
        "Podcast",
        "Duolingo for Business",
        "Super Duolingo",
        "Hadiahkan Super Duolingo"
        ]
    };

    const apps = {
        title: 'Aplikasi',
        menu: ["Duolingo untuk Android", "Duolingo untuk iOS"]
    };

    const support = {
        title: 'Bantuan dan Dukungan',
        menu: ["T&J Duolingo", "T&J Sekolah", "T&J Duolingo English Test", "Status"]
    };

    const privacyAndTerms = {
        title: 'Privasi dan Ketentuan',
        menu: ["Panduan komunitas", "Ketentuan", "Privasi"]
    };

    const socialMedia = {
        title: 'Media Sosial',
        menu: ["Blog", "Instagram", "Facebook", "Twitter", "YouTube"]
    };

    const siteLanguages = {
        title: 'Bahasa Situs: ',
        menu: [
          "العربية", "বাংলা", "Čeština", "Deutsch", "Ελληνικά", "English", "Español",
          "Français", "हिंदी", "Magyar", "Bahasa Indonesia", "Italiano", "日本語",
          "한국어", "Nederlands", "Polski", "Português", "Română", "Русский", "తెలుగు",
          "ภาษาไทย", "Tagalog", "Türkçe", "Українською", "Tiếng Việt", "中文"
        ]
      };      

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full">
            <Navbar scrolledStatus={scrolled} />
            <CustomSectionButton src={FirstImageSection} alt={'An illustration of characters in duolingo'} title={'Cara gratis, seru, dan efektif untuk belajar bahasa!'} />
            <CustomSectionText responsiveDirection={'md:flex-row-reverse'} src={SecondImageSection} alt={'A character show the number 1'} title={'gratis. seru. efektif.'} text={`Belajar bersama Duolingo itu seru dan terbukti efektif berdasarkan penelitian! Dengan pelajaran kecil dan cepat, kamu akan mendapat poin dan membuka level-level baru sekaligus memperoleh keahlian komunikasi sehari-hari.`} />
            <CustomSectionText responsiveDirection={'md:flex-row'} src={ThirdImageSection} alt={'A woman character with big telescope'} title={'didukung ilmu pengetahuan'} text={`Kami memadukan metode pengajaran yang didukung oleh penelitian dengan konten yang menarik untuk menciptakan kursus-kursus yang mengajarkan keahlian membaca, menulis, mendengar, dan berbicara secara efektif!`} />
            <CustomSectionText responsiveDirection={'md:flex-row-reverse'} src={FourthImageSection} alt={'A woman character with big telescope'} title={'tetap termotivasi'} text={`Kami mempermudah pembentukan kebiasaan belajar bahasa dengan fitur-fitur mirip game, tantangan seru, dan pengingat dari maskot ramah kami, Duo si burung hantu.`} />
            <CustomSectionText responsiveDirection={'md:flex-row'} src={FirstImageSection} alt={'A woman character with big telescope'} title={'pembelajaran yang dipersonalisasi'} text={`Dengan memadukan yang terbaik dari AI dan ilmu bahasa, pelajaran disesuaikan untuk membantumu belajar di level dan kecepatan yang tepat.`} />
            <CustomSectionWithBackground id={'study-section'} textColor={'text-blue-800'} title={'belajar kapan pun, di mana pun'} button={
                <div className="flex justify-center items-center gap-4">
                    <ButtonIconSection src={AppleStore} alt={'App Store Icon'} text={'Unduh di'} nameStore={'App Store'} />
                    <ButtonIconSection src={PlayStore} alt={'Play Store Icon'} text={'Dapatkan di'} nameStore={'Google Play'} />
                </div>
            } />
            <CustomSectionTextButton responsiveDirection={'md:flex-row-reverse'} src={SeventhImageSection} alt={'idk'} title={'duolingo english test'} text={'Tes bahasa Inggris kami yang praktis, cepat, dan terjangkau mengintegrasikan AI dan ilmu evaluasi terbaru. Jadi, semua orang dapat menguji kecakapan bahasa Inggris mereka secara akurat di mana pun dan kapan pun mereka siap.'} textButton={'sertifikasi bahasa inggrismu'} />
            <CustomSectionTextButton responsiveDirection={'md:flex-row'} src={EightImageSection} alt={'idk'} title={'duolingo for schools'} text={'Bapak dan Ibu Guru, kami di sini untuk membantu Anda! Sarana gratis kami hadir untuk membantu siswa belajar bahasa melalui aplikasi Duolingo di dalam dan di luar kelas.'} textButton={'mulai kelas anda'} />
            <CustomSectionTextButton responsiveDirection={'md:flex-row-reverse'} src={NineImageSection} alt={'idk'} title={'duolingo abc'} text={'Dari bahasa ke literasi! Dengan pelajaran fonik dan cerita-cerita yang menyenangkan, Duolingo ABC membantu anak usia 3-8 tahun untuk belajar membaca dan menulis — 100% gratis.'} textButton={'pelajari lebih lanjut tentang abc'} />
            <CustomSectionTextButton responsiveDirection={'md:flex-row'} src={NineImageSection} alt={'idk'} title={'duolingo math'} text={'Pendekatan kami yang praktis dan gratis — tapi untuk matematika! Pelajaran yang seru akan membantu meningkatkan prestasi siswa di kelas matematika, serta melatih keahlian berhitung cepat orang dewasa.'} textButton={'jadi jago matematika'} />
            <CustomSectionWithBackground id={'study-footer-section'} textColor={'text-limeGreen'} title={'belajar bahasa dengan duolingo'} button={
                <div className="w-3/4 md:w-2/3">
                    <ButtonSection bgColor={'bg-limeGreen'} borderBottomColor={'border-b-green-700'} text={'mulai'} textColor={'text-white'} />
                </div>
            } />
            <CustomFooter listText1={aboutUs} listText2={products} listText3={apps} listText4={support} listText5={privacyAndTerms} listText6={socialMedia} />
            <CustomFooterLanguage listText={siteLanguages}/>
        </div>
    )
}

export default Home