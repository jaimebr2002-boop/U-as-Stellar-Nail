import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Star, Sparkles, Heart, ChevronLeft, ChevronRight, Menu, X, Instagram, Facebook } from 'lucide-react';

const servicesData = [
  {
    category: "Uñas",
    items: [
      { name: "Uñas de gel", price: "Desde 34,00 €", duration: "1h" },
      { name: "Relleno de gel", price: "29,00 €", duration: "1h" },
      { name: "Uña de porcelana", price: "32,00 €", duration: "1h" },
      { name: "Relleno de porcelana", price: "27,00 €", duration: "1h" },
      { name: "Quitar uñas de gel o porcelana + limar + base", price: "13,00 €", duration: "20min" },
      { name: "Una uña de gel o porcelana", price: "3,00 €", duration: "10min" },
      { name: "Decoración", price: "1,00 €", duration: "5min" },
    ]
  },
  {
    category: "Manos",
    items: [
      { name: "Manicura normal (sin pintar)", price: "10,00 €", duration: "30min" },
      { name: "Manicura normal (con pintar)", price: "12,00 €", duration: "30min" },
      { name: "Manicura permanente", price: "18,00 €", duration: "45min" },
      { name: "Manicura permanente con refuerzo", price: "20,00 €", duration: "45min" },
      { name: "Limar + pintar permanente", price: "14,00 €", duration: "30min" },
      { name: "Limar y pintar permanente con refuerzo", price: "16,00 €", duration: "30min" },
      { name: "Pintar francesa o color", price: "6,00 €", duration: "10min" },
      { name: "Limar + base + pintar", price: "8,00 €", duration: "15min" },
      { name: "Parafina", price: "8,00 €", duration: "15min" },
      { name: "Cortar uñas", price: "5,00 €", duration: "10min" },
      { name: "Manicura permanente + parafina", price: "24,00 €", duration: "1h" },
      { name: "Quitar permanente + limar", price: "6,00 €", duration: "15min" },
    ]
  },
  {
    category: "Pies",
    items: [
      { name: "Pedicura normal (sin pintar)", price: "20,00 €", duration: "30min" },
      { name: "Pedicura normal (con pintar)", price: "22,00 €", duration: "30min" },
      { name: "Pedicura normal sin pintar con masaje (10min)", price: "28,00 €", duration: "40min" },
      { name: "Pedicura normal con pintar + masaje (10min)", price: "30,00 €", duration: "45min" },
      { name: "Pedicura permanente", price: "32,00 €", duration: "1h" },
      { name: "Pedicura permanente con masaje (10min)", price: "40,00 €", duration: "1h 10min" },
      { name: "Limar + pintar normal (pies)", price: "9,00 €", duration: "15min" },
      { name: "Limar + pintar permanente (pies)", price: "16,00 €", duration: "30min" },
      { name: "Cortar uñas", price: "7,00 €", duration: "10min" },
      { name: "Quitar permanente + limar + base", price: "10,00 €", duration: "15min" },
      { name: "Arregla uña de gel o porcelana", price: "4,00 €", duration: "10min" },
      { name: "Uñas de los pies gel o porcelana (sin pintar)", price: "25,00 €", duration: "30min" },
    ]
  },
  {
    category: "Depilación",
    items: [
      { name: "Ingles normal", price: "6,00 €", duration: "10min" },
      { name: "Ingles brasileña", price: "9,00 €", duration: "15min" },
      { name: "Ingles integral", price: "16,00 €", duration: "20min" },
      { name: "Piernas enteras mujer", price: "17,00 €", duration: "30min" },
      { name: "Piernas enteras hombre", price: "23,00 €", duration: "30min" },
      { name: "Medias piernas mujer", price: "9,00 €", duration: "15min" },
      { name: "Medias piernas hombre", price: "13,00 €", duration: "15min" },
      { name: "Brazos enteros mujer", price: "13,00 €", duration: "20min" },
      { name: "Brazos enteros hombre", price: "17,00 €", duration: "30min" },
      { name: "Medios brazos mujer", price: "7,00 €", duration: "15min" },
      { name: "Medios brazos hombre", price: "9,00 €", duration: "15min" },
      { name: "Axilas mujer", price: "5,00 €", duration: "10min" },
      { name: "Axilas hombre", price: "8,00 €", duration: "10min" },
      { name: "Espalda mujer", price: "10,00 €", duration: "10min" },
      { name: "Espalda hombre", price: "13,00 €", duration: "10min" },
      { name: "Pecho", price: "13,00 €", duration: "10min" },
      { name: "Depilación de cejas", price: "6,00 €", duration: "10min" },
      { name: "Depilación de labio", price: "4,00 €", duration: "5min" },
      { name: "Depilación de mentón", price: "4,00 €", duration: "5min" },
      { name: "Depilación de glúteo", price: "8,00 €", duration: "+10min" },
    ]
  },
  {
    category: "Estética",
    items: [
      { name: "Limpieza facial + masaje", price: "30,00 €", duration: "1h" },
      { name: "Extensión de pestañas", price: "40,00 €", duration: "+1h" },
      { name: "Relleno de pestañas", price: "20,00 €", duration: "+20min" },
      { name: "Rizado de pestañas", price: "25,00 €", duration: "45min" },
      { name: "Rizado de pestañas + tinte", price: "32,00 €", duration: "1h 15min" },
      { name: "Tinte de cejas o pestañas", price: "10,00 €", duration: "15min" },
      { name: "Quitar extensión de pestañas", price: "10,00 €", duration: "15min" },
    ]
  }
];

const reviewsData = [
  { name: "Clara Rodriguez Allende", text: "Unas uñas increíbles! Siempre me paso cada vez que vengo a Oviedo, y hacen el mejor trabajo y a un precio inigualable! Y esta vez me regalaron un aceite de cutículas, muy atentas!" },
  { name: "Teresa P R", text: "Me fui a hacer uñas de gel con extensión con diseño y estoy muy satisfecha. Tienen mucha variedad, con una alta calidad, higiene y mucha atención al detalle, además, el ambiente es agradable." },
  { name: "Meli V", text: "Muy bien trabajo, rápidas, profesionales, en hora, escuchando lo que quería y ejecutándolo muy bien. Me he ido muy contenta, repetiré porque me ha gustado mucho." },
  { name: "Aramar Lopez López", text: "Segunda vez que voy y segunda vez que salgo encantada. Buen trato y precios muy asequibles." },
  { name: "Paulitah zx", text: "Llevo dos años haciéndome las uñas con Elena y nunca salgo decepcionada, hace un trabajo excelente." },
  { name: "Covavaco", text: "Fui hoy por primera vez. Absolutamente genial. Carla entendió perfectamente lo que le pedí. Puntuales, rápidas y de precio bien." },
  { name: "Lorena Colloto", text: "100% Recomendable. Son muy profesionales y amables, yo llevo más de 2 años haciéndome las uñas allí y estoy encantada." },
  { name: "Merche Aguilera", text: "Hace casi un año que estoy yendo a este local, estoy encantada con ella, me encanta su trabajo." },
  { name: "Ana Antolin Valdes", text: "Me hice la pedicura con Chema, salí encantada. Todos majísimos, volveré sin duda." },
  { name: "inesss", text: "Elena es muy maja y amable, la manicura la hace muy bien, siempre salgo contenta de la tienda ya sea por su resultado final o por su trato, la recomiendo y los precios son justos y en comparación con muchos sitios hasta baratos." },
  { name: "Nereka", text: "Profesionalidad 100% y muy puntuales. Me encanta como me dejan siempre las uñas." },
  { name: "Angela Del Pozo", text: "Amabilidad y profesionalidad en estado puro. Recomendable 100%." },
  { name: "Angeles Fernández", text: "Son una maravilla." },
  { name: "Roll your English", text: "Elena is super buena y maja!! Lo hace bien!!!!" },
  { name: "Enrique Zqh", text: "Profesional muy maja la chica." },
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg-main/80 backdrop-blur-md py-4 border-b border-text-warm/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="font-display text-2xl text-text-main">
            Stellar Nail
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#nosotros" className="font-label uppercase tracking-widest text-xs text-text-warm/80 hover:text-accent-pink transition-colors">Historia</a>
            <a href="#servicios" className="font-label uppercase tracking-widest text-xs text-text-warm/80 hover:text-accent-pink transition-colors">Servicios</a>
            <a href="#galeria" className="font-label uppercase tracking-widest text-xs text-text-warm/80 hover:text-accent-pink transition-colors">Trabajo</a>
            <a href="#contacto" className="font-label uppercase tracking-widest text-xs text-text-warm/80 hover:text-accent-pink transition-colors">Contacto</a>
            <a 
              href="https://booksy.com/es-es/80885_stellar-nail_salon-de-unas_79758_oviedo#ba_s=seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent-pink/10 border border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-bg-main px-6 py-2.5 rounded-full font-label uppercase tracking-widest text-xs transition-all duration-300"
            >
              Reservar
            </a>
          </div>

          <button className="md:hidden text-text-main" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-bg-main flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-2xl text-text-main">Stellar Nail</span>
              <button className="text-text-main" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 items-center justify-center flex-1">
              <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-text-main hover:text-accent-pink transition-colors">Inicio</a>
              <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-text-main hover:text-accent-pink transition-colors">Historia</a>
              <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-text-main hover:text-accent-pink transition-colors">Servicios</a>
              <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-text-main hover:text-accent-pink transition-colors">Trabajo</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-text-main hover:text-accent-pink transition-colors">Contacto</a>
              <a 
                href="https://booksy.com/es-es/80885_stellar-nail_salon-de-unas_79758_oviedo#ba_s=seo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 bg-accent-pink text-bg-main px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm"
              >
                Reservar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-bg-main">
        <img 
          src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/526693215_18368641543177148_2061838869213343863_n._tabofh.jpg" 
          alt="Stellar Nail Salon" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/40 via-bg-main/60 to-bg-main"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,160,176,0.15)_0%,transparent_60%)]"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-text-main leading-tight mb-6">
            Uñas que cuentan <br/>
            <span className="italic text-accent-pink">historias</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <p className="text-lg md:text-xl text-text-warm/80 font-body mb-8 max-w-2xl">
            Salón de uñas y estética premium en Oviedo
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mb-12"></div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://booksy.com/es-es/80885_stellar-nail_salon-de-unas_79758_oviedo#ba_s=seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent-pink text-bg-main hover:bg-white px-8 py-4 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(232,160,176,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Reserva tu cita
            </a>
            <a 
              href="#servicios" 
              className="border border-text-warm/20 hover:border-text-warm text-text-warm px-8 py-4 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 hover:bg-text-warm/5"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875755/2024-04-18_z6rtk8.webp" alt="Interior del salón" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 to-transparent"></div>
            </div>
            <div className="absolute -inset-4 border border-accent-gold/30 rounded-2xl z-0 translate-x-4 translate-y-4"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent-pink/10 rounded-full blur-2xl z-0"></div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-display mb-8 text-text-main">
            Nuestra <span className="italic text-accent-pink">historia</span>
          </h2>
          <div className="space-y-6 text-lg font-body text-text-warm/80 leading-relaxed">
            <p>
              En Stellar Nail, creemos que cada detalle cuenta. Llevamos más de dos años dedicándonos a realzar la belleza natural de nuestras clientas en el corazón de Oviedo, creando un espacio donde la elegancia y la cercanía se encuentran.
            </p>
            <p>
              Nuestro equipo, formado por profesionales apasionadas como Elena, Carla y Chema, se esfuerza cada día por ofrecer un trato excepcional. Nos enorgullece conocer a nuestras clientas, escuchar sus deseos y superar sus expectativas con puntualidad y dedicación.
            </p>
            <p>
              Ofrecemos una amplia variedad de servicios de alta calidad, manteniendo siempre precios justos. Porque el lujo verdadero no está reñido con la accesibilidad, sino que reside en la experiencia, la higiene impecable y el amor por el trabajo bien hecho.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-pink/10 flex items-center justify-center text-accent-pink">
                <Heart size={24} strokeWidth={1.5} />
              </div>
              <span className="font-display text-xl text-text-main">Más de 2 años de confianza</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <span className="font-display text-xl text-text-main">Atención al detalle</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-text-warm/10 flex items-center justify-center text-text-warm">
                <Star size={24} strokeWidth={1.5} />
              </div>
              <span className="font-display text-xl text-text-main">Precios justos, calidad premium</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicios" className="py-24 px-6 md:px-12 bg-bg-soft relative">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-text-main">
            Nuestros <span className="italic text-accent-pink">servicios</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {servicesData.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full font-label uppercase tracking-wider text-xs md:text-sm transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-accent-pink text-bg-main shadow-[0_0_15px_rgba(232,160,176,0.3)]' 
                    : 'border border-text-warm/10 text-text-warm/60 hover:text-text-warm hover:border-text-warm/30'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {servicesData[activeTab].items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end border-b border-text-warm/10 pb-4 group hover:border-accent-pink/50 transition-colors duration-300">
                  <div className="flex-1 pr-4">
                    <h4 className="font-body text-lg text-text-main group-hover:text-accent-pink transition-colors duration-300">{item.name}</h4>
                    <span className="font-label text-xs text-text-warm/50 uppercase tracking-wider">{item.duration}</span>
                  </div>
                  <div className="font-label text-accent-gold whitespace-nowrap">
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <FadeIn delay={0.3} className="mt-20 flex justify-center">
          <a 
            href="https://booksy.com/es-es/80885_stellar-nail_salon-de-unas_79758_oviedo#ba_s=seo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-bg-main px-10 py-4 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300"
          >
            Reserva ahora
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875013/628879311_18456833059100607_5865337387865708202_n._vkiipv.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/642085482_18583957204032513_4681010910899208219_n._wsiuwj.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/541539984_18372802693177148_8430003167215201725_n._dg9xos.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/618641859_17886709722305566_1690054973846096965_n._ckmlpw.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/535576270_18370975354177148_3332526792328826604_n._g72g1g.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/529689428_18369417190177148_3901763933166519607_n._gw6sy7.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/535060585_18370975225177148_1612524831837005618_n._lvhaa9.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/526693215_18368641543177148_2061838869213343863_n._tabofh.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/532260613_18370341817177148_985899650263096434_n._aivcen.jpg",
    "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774875012/532264295_18370341763177148_7656664578791438515_n._g16sdr.jpg"
  ];

  return (
    <section id="galeria" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-text-main">
          Nuestro <span className="italic text-accent-pink">trabajo</span>
        </h2>
      </FadeIn>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <a 
              href="https://www.instagram.com/stellar_nail_oviedo/?hl=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg"
            >
              <img src={src} alt="Trabajo de uñas" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-bg-main/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-text-main font-label tracking-widest uppercase text-sm border border-accent-pink/50 px-6 py-3 rounded-full bg-bg-main/40">
                  Ver más en Instagram
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.4} className="mt-16 flex justify-center">
        <a 
          href="https://www.instagram.com/stellar_nail_oviedo/?hl=es" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-accent-pink/30 hover:border-accent-pink text-text-main px-8 py-4 rounded-full transition-all duration-300 hover:bg-accent-pink/10 font-label uppercase tracking-wider text-sm"
        >
          <Instagram size={18} />
          Síguenos en Instagram
        </a>
      </FadeIn>
    </section>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

  return (
    <section id="resenas" className="py-24 px-6 md:px-12 bg-bg-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-text-main">
            Lo que dicen <br className="md:hidden"/> <span className="italic text-accent-pink">nuestras clientas</span>
          </h2>
        </FadeIn>

        <div 
          className="relative bg-bg-main border border-text-warm/5 rounded-2xl p-8 md:p-12 shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center mb-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent-gold text-accent-gold" />
              ))}
            </div>
          </div>

          <div className="min-h-[160px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg md:text-2xl font-body text-text-warm/90 italic leading-relaxed mb-8">
                  "{reviewsData[currentIndex].text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-soft border border-accent-pink/30 flex items-center justify-center overflow-hidden">
                    <span className="font-display text-accent-pink text-xl">{reviewsData[currentIndex].name.charAt(0)}</span>
                  </div>
                  <span className="font-label uppercase tracking-wider text-sm text-text-main">
                    {reviewsData[currentIndex].name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-6">
            <button onClick={prevReview} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-main border border-text-warm/10 flex items-center justify-center text-text-warm hover:text-accent-pink hover:border-accent-pink/50 transition-all shadow-lg">
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-6">
            <button onClick={nextReview} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg-main border border-text-warm/10 flex items-center justify-center text-text-warm hover:text-accent-pink hover:border-accent-pink/50 transition-all shadow-lg">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <FadeIn delay={0.3} className="mt-12 flex justify-center">
          <a 
            href="https://www.google.com/maps/place/U%C3%B1as+Stellar+Nail/@43.3625407,-5.8653894,17z/data=!4m8!3m7!1s0xd368d5b976bc2c9:0xf0a6d38264c016e8!8m2!3d43.3625368!4d-5.8628145!9m1!1b1!16s%2Fg%2F11twccbk0s?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-bg-main px-8 py-4 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300"
          >
            Deja tu reseña
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="contacto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-display text-center mb-16 text-text-main">
          <span className="italic text-accent-pink">Encuéntranos</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-bg-soft rounded-3xl overflow-hidden border border-text-warm/5">
        <FadeIn delay={0.2} className="p-8 md:p-16 flex flex-col justify-center">
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="mt-1 text-accent-pink">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-label uppercase tracking-widest text-sm text-text-warm/50 mb-2">Dirección</h4>
                <p className="font-body text-lg text-text-main">Av. Valentín Masip, 30, local 2<br/>33013 Oviedo, Asturias</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-1 text-accent-pink">
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-label uppercase tracking-widest text-sm text-text-warm/50 mb-2">Teléfono</h4>
                <div className="flex flex-col gap-1">
                  <a href="tel:685236999" className="font-body text-lg text-text-main hover:text-accent-pink transition-colors">685 236 999</a>
                  <a href="tel:985737733" className="font-body text-lg text-text-main hover:text-accent-pink transition-colors">985 737 733</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-1 text-accent-pink">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-label uppercase tracking-widest text-sm text-text-warm/50 mb-2">Horario</h4>
                <ul className="font-body text-lg text-text-main space-y-2">
                  <li className="flex justify-between gap-8"><span>Lunes a Viernes:</span> <span>10:00 – 20:30</span></li>
                  <li className="flex justify-between gap-8"><span>Sábado:</span> <span>10:00 – 14:00</span></li>
                  <li className="flex justify-between gap-8 text-text-warm/50"><span>Domingo:</span> <span>Cerrado</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-text-warm/10">
            <a 
              href="https://www.google.com/maps/place/U%C3%B1as+Stellar+Nail/@43.3625407,-5.8653894,17z/data=!3m1!4b1!4m6!3m5!1s0xd368d5b976bc2c9:0xf0a6d38264c016e8!8m2!3d43.3625368!4d-5.8628145!16s%2Fg%2F11twccbk0s?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-bg-main border border-accent-pink/30 hover:border-accent-pink text-text-main px-8 py-4 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 hover:bg-accent-pink/10"
            >
              Cómo llegar
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="h-[400px] lg:h-auto relative">
          <iframe 
            src="https://maps.google.com/maps?q=43.3625368,-5.8628145&z=17&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
          ></iframe>
        </FadeIn>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-[#1a1013] to-bg-main"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display text-text-main mb-6">
            Tu cita perfecta <br/>
            <span className="italic text-accent-pink">te espera</span>
          </h2>
          <p className="text-xl font-body text-text-warm/80 mb-12 max-w-2xl mx-auto">
            Reserva en minutos a través de Booksy, elige tu servicio, tu estilista y el horario que mejor te venga.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://booksy.com/es-es/80885_stellar-nail_salon-de-unas_79758_oviedo#ba_s=seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent-pink text-bg-main hover:bg-white px-10 py-5 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(232,160,176,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Reservar ahora en Booksy
            </a>
            <a 
              href="tel:685236999" 
              className="w-full sm:w-auto border border-text-warm/20 hover:border-text-warm text-text-warm px-10 py-5 rounded-full font-label uppercase tracking-widest text-sm transition-all duration-300 hover:bg-text-warm/5"
            >
              Llamar ahora
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-accent-pink/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-display text-3xl text-text-main mb-2">Stellar Nail</h3>
            <p className="font-label uppercase tracking-widest text-xs text-accent-pink mb-6">Oviedo · Asturias</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/stellar_nail_oviedo/?hl=es" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-text-warm/20 flex items-center justify-center text-text-warm hover:text-accent-pink hover:border-accent-pink transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007889533973" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-text-warm/20 flex items-center justify-center text-text-warm hover:text-accent-pink hover:border-accent-pink transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-label uppercase tracking-widest text-sm text-text-main mb-6">Navegación</h4>
            <ul className="space-y-3 font-body text-text-warm/60">
              <li><a href="#inicio" className="hover:text-accent-pink transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-accent-pink transition-colors">Nuestra historia</a></li>
              <li><a href="#servicios" className="hover:text-accent-pink transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-accent-pink transition-colors">Nuestro trabajo</a></li>
              <li><a href="#resenas" className="hover:text-accent-pink transition-colors">Reseñas</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-label uppercase tracking-widest text-sm text-text-main mb-6">Contacto</h4>
            <ul className="space-y-3 font-body text-text-warm/60">
              <li><a href="tel:685236999" className="hover:text-accent-pink transition-colors">685 236 999</a></li>
              <li><a href="tel:985737733" className="hover:text-accent-pink transition-colors">985 737 733</a></li>
              <li>Av. Valentín Masip, 30, local 2</li>
              <li>Oviedo, Asturias</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-text-warm/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-text-warm/40">
            © 2025 Stellar Nail · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/34685236999" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-main font-body selection:bg-accent-pink/30 selection:text-text-main">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Location />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
