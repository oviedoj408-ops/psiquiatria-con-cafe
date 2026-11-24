
import { NavItem } from "@/interfaces/NavItem";

export const siteData = {
  name: "Psiquiatría con Café",

  doctor: {
    name: "Dra. Ruth Yubelka Aguilar Ramírez",
    specialty: "Médico especialista en Psiquiatría",
    subspecialty: "Alta especialidad en Psiquiatría de Enlace",
    license: "Cód. MINSA 80241",
    modality: "Atención exclusivamente virtual",
    photo: "/images/dra-ruth-aguilar-ramirez9.jpg",
  },

  contact: {
    whatsapp: "50558729020",
    phone: "+505 5872-9020",
    email: "yubel1996aguilarmed@gmail.com",
  },

  messages: {
    whatsapp:
      "Hola, doctora. Me gustaría obtener información sobre sus servicios y consultas virtuales.",
  },

  pricing: {
    individual: 40,
    packages: [
      { consultations: 2, price: 70, savings: 10 },
      { consultations: 3, price: 100, savings: 20 },
      { consultations: 4, price: 130, savings: 30 },
    ],
    followUp: 30,
    currency: "USD",
  },

  colors: {
    forest: "#344D3D",
    primary: "#526B50",
    sage: "#71876A",
    lightGreen: "#DCE6D9",
    cream: "#F7F5EF",
    white: "#FFFFFF",
    text: "#4B5149",
  },

  education: [
    {
      title: "Medicina General",
      institution: "Universidad Nacional Autónoma de Nicaragua",
    },
    {
      title: "Psiquiatría",
      institution:
        "Hospital Psicosocial Dr. José Dolores Fletes y Universidad Nacional Autónoma de Nicaragua",
    },
    {
      title: "Psiquiatría de Enlace",
      institution:
        "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán, con aval de la UNAM",
    },
  ],

  links: {
    appointment: "",
  },
};

export const navigationItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre la doctora", href: "#sobre-mi" },
  { label: "Formación", href: "#formacion" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tarifas", href: "#tarifas" },
  
  { label: "Contacto", href: "#contacto" },
];
