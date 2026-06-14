import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  DatabaseZap,
  Globe2,
  LayoutDashboard,
  MailCheck,
  MessageCircle,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export type Service = {
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
};

export type PackageItem = {
  name: string;
  fit: string;
  signal: string;
  items: string[];
};

export const site = {
  name: "EXPROSA",
  company: "PT Exprosa Global Nusantara",
  eyebrow: "Business Technology Partner",
  headline: "Teknologi yang bikin bisnis terlihat serius dan bekerja lebih rapi.",
  subheadline:
    "EXPROSA membantu UMKM dan perusahaan skala tumbuh membangun website, aplikasi, automation, dan sistem internal yang rapi, kredibel, dan siap dipakai untuk pertumbuhan.",
  whatsappLabel: "Diskusi WhatsApp",
  whatsappUrl:
    "https://wa.me/6285133331467?text=Halo%20EXPROSA%2C%20saya%20ingin%20diskusi%20tentang%20solusi%20digital%20untuk%20bisnis%20saya.",
  email: "official@exprosa.com",
  address: "TCI 3, Sukadami, Kab. Bekasi, Jawa Barat 17530",
  url: "https://exprosa.com",
};

export const navItems = [
  { label: "Masalah", href: "#problem" },
  { label: "Layanan", href: "#services" },
  { label: "Showcase", href: "#showcase" },
  { label: "Paket", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export const proofItems = [
  { label: "PT Resmi", icon: Building2 },
  { label: "Website", icon: Globe2 },
  { label: "Apps", icon: Smartphone },
  { label: "Automation", icon: Workflow },
  { label: "Workspace", icon: MailCheck },
  { label: "WhatsApp AI", icon: Bot },
  { label: "Internal System", icon: LayoutDashboard },
];

export const problems = [
  "Website ada, tapi belum cukup kuat untuk membangun kepercayaan calon pelanggan.",
  "Follow up pelanggan masih tercecer di chat, catatan manual, dan ingatan manusia yang kadang libur tanpa cuti.",
  "Data bisnis tersebar di banyak tempat, tetapi tidak ada pusat kendali yang rapi.",
  "Operasional mulai besar, tetapi alat kerjanya masih tambal sulam dan sulit diaudit.",
];

export const services: Service[] = [
  {
    title: "Landing Page High Conversion",
    tag: "Sales Asset",
    description:
      "Halaman jualan satu muka untuk campaign, produk digital, jasa lokal, dan penawaran yang butuh CTA jelas.",
    icon: Rocket,
  },
  {
    title: "Corporate Website Professional",
    tag: "Credibility",
    description:
      "Website perusahaan yang rapi, kredibel, cepat, dan siap menjadi wajah resmi bisnis di internet.",
    icon: Globe2,
  },
  {
    title: "WhatsApp AI Automation",
    tag: "Response Engine",
    description:
      "Automasi percakapan, follow up, dan alur pelanggan agar bisnis tidak bergantung penuh pada balasan manual.",
    icon: MessageCircle,
  },
  {
    title: "Mini ERP & Internal System",
    tag: "Operations",
    description:
      "Dashboard, data unit, laporan kerja, inventory, field service, dan sistem operasional custom berbasis kebutuhan nyata.",
    icon: DatabaseZap,
  },
  {
    title: "Mobile App Development",
    tag: "Product Build",
    description:
      "Aplikasi Android/iOS berbasis Flutter untuk bisnis yang sudah butuh pengalaman mobile lebih serius.",
    icon: Smartphone,
  },
  {
    title: "Google Workspace Setup",
    tag: "Business Stack",
    description:
      "Email domain resmi, drive bersama, struktur akses, dan kolaborasi tim yang lebih profesional.",
    icon: MailCheck,
  },
];

export const showcaseCards = [
  {
    title: "Website kredibel",
    text: "Company profile dan landing page yang terasa resmi, cepat, dan siap dipakai untuk closing.",
    icon: Globe2,
    stat: "01",
  },
  {
    title: "Automation engine",
    text: "Alur lead, WhatsApp, form, dan follow up dibuat lebih rapi agar tidak tercecer.",
    icon: Bot,
    stat: "02",
  },
  {
    title: "Operational dashboard",
    text: "Data kerja, laporan, dan aktivitas bisnis dibawa ke satu pusat kontrol.",
    icon: BarChart3,
    stat: "03",
  },
  {
    title: "Business database",
    text: "Data pelanggan, transaksi, aset, dan operasional disusun agar bisa tumbuh.",
    icon: DatabaseZap,
    stat: "04",
  },
];

export const processSteps = [
  {
    title: "Audit kebutuhan",
    text: "Kami bedah posisi bisnis, masalah utama, dan target penggunaan sebelum bicara fitur.",
    icon: SearchCheck,
  },
  {
    title: "Rancang solusi",
    text: "Struktur halaman, alur data, CTA, dan prioritas modul disusun agar tidak melebar liar.",
    icon: ClipboardCheck,
  },
  {
    title: "Build & motion",
    text: "Frontend dibuat rapi, responsive, dan diberi animasi seperlunya. Bukan semua benda harus joget.",
    icon: Code2,
  },
  {
    title: "Launch & improve",
    text: "Deploy, optimasi, lalu evaluasi berdasarkan kebutuhan nyata setelah dipakai.",
    icon: CheckCircle2,
  },
];

export const packages: PackageItem[] = [
  {
    name: "Starter Landing",
    fit: "Untuk campaign, produk, UMKM, dan jasa lokal.",
    signal: "Mulai dari kebutuhan cepat validasi penawaran.",
    items: ["1 landing page", "Copywriting dasar", "CTA WhatsApp", "Deploy Vercel"],
  },
  {
    name: "Business Website",
    fit: "Untuk perusahaan yang butuh wajah digital resmi.",
    signal: "Cocok untuk profil perusahaan, jasa, dan branding kredibel.",
    items: ["Multi section", "Profil perusahaan", "Layanan", "SEO dasar"],
  },
  {
    name: "Automation Setup",
    fit: "Untuk bisnis yang mulai kewalahan follow up manual.",
    signal: "Masuk ketika chat, form, dan data pelanggan mulai berantakan.",
    items: ["WhatsApp flow", "Form lead", "Database ringan", "Notifikasi"],
  },
];

export const diagnostics = [
  "Apakah website saat ini sudah membuat bisnis terlihat kredibel dalam 5 detik pertama?",
  "Apakah CTA utama sudah jelas, atau pengunjung disuruh menebak seperti ujian hidup?",
  "Apakah data lead, chat, dan follow up sudah tercatat rapi?",
  "Apakah proses kerja bisa dijelaskan tanpa membuka 12 file Excel dan 38 chat lama?",
];

export const faqs = [
  {
    question: "Apakah EXPROSA hanya membuat website?",
    answer:
      "Tidak. Website hanya salah satu pintu masuk. Fokus utamanya adalah membantu bisnis membangun aset digital: landing page, automation, aplikasi, dan sistem internal.",
  },
  {
    question: "Apakah bisa mulai dari landing page dulu?",
    answer:
      "Bisa. Untuk banyak UMKM, landing page yang rapi dan CTA yang jelas lebih masuk akal daripada langsung membangun sistem besar.",
  },
  {
    question: "Apakah desain ini harus sama seperti Givingli?",
    answer:
      "Tidak. Yang diambil adalah pola visual storytelling, card floating, dan motion premium. Identitas EXPROSA tetap lebih tegas, dark-clean, dan bisnis.",
  },
  {
    question: "Apakah nanti bisa dikembangkan menjadi dashboard atau sistem internal?",
    answer:
      "Bisa. Struktur brand dan teknologinya disiapkan agar landing page dapat menjadi pintu masuk ke layanan lebih besar seperti dashboard, automation, dan aplikasi custom.",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company,
  url: site.url,
  email: site.email,
  address: site.address,
  sameAs: [site.url],
  description:
    "Business Technology Partner untuk UMKM dan perusahaan skala tumbuh: website, aplikasi, automation, dan sistem internal.",
  knowsAbout: [
    "Landing Page",
    "Corporate Website",
    "WhatsApp AI Automation",
    "Mobile App Development",
    "Google Workspace",
    "Internal Business System",
  ],
};

export const heroHighlights = [
  { label: "Website", value: "Kredibel" },
  { label: "Automation", value: "Rapi" },
  { label: "System", value: "Terukur" },
];

export const visualBadges = [
  { label: "Brand trust", icon: ShieldCheck },
  { label: "Motion-ready", icon: Sparkles },
  { label: "Growth stack", icon: Workflow },
];
