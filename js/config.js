/* ====== DATOS EDITABLES ======
   Acá cambiás precios, códigos Downloader, links de celular y textos. */
window.SITE = {
  whatsapp: "5493765247994",   // tu número con código de país (sin + ni espacios)
  problems: [
    { title: "«NO SE HA PODIDO INSTALAR LA APLICACIÓN»",
      text: "Estimado usuario, es muy posible que necesite liberar espacio de almacenamiento. Vaya a Ajustes del televisor, busque el apartado de Aplicaciones y desinstale las aplicaciones que no use. Luego vuelva a intentar la instalación." },
    { title: "«DOWNLOADER NO TIENE PERMISOS PARA INSTALAR FUENTES DESCONOCIDAS»",
      text: "No se preocupe, es normal. Solo debe ir a Ajustes desde el mismo cartel que le aparece, habilitar a Downloader, salir y volver a intentar la instalación." }
  ],
  products: [
    { id: "flujo", name: "Flujo TV", price: "$10.000", logo: "img/flujo.jpg",
      downloader: "3627194", video: "videos/flujo_video.mp4", mobileLink: "https://da.gd/f1ViQ",
      features: [
        "Muchas series y películas",
        "Muchos canales de televisión nacionales de Argentina e internacionales",
        "Canales de adultos con código de seguridad",
        "Pack fútbol y deportes en general",
        "Delay de 2 minutos en la transmisión en vivo",
        "Calidad de canales ESTÁNDAR",
        "Mínimo de internet: 15 megas o más (si hay muchos dispositivos en su hogar se recomiendan más megas)" ] }
  ]
};
