import { TranslationDictionary } from './types';

export const CONTENT: Record<string, TranslationDictionary> = {
  en: {
    nav: {
      features: "How it Works",
      documents: "Documents",
      privacy: "Privacy",
      stories: "Stories",
      cta: "Download App"
    },
    hero: {
      headline: "Never Hear \"Kal Aana\" Again.",
      subheadline: "The digital 'Munshi' in your pocket. We tell you exactly what documents to bring, so you never get rejected at NADRA, the Passport Office, or Excise.",
      ctaPrimary: "Download Kaghaz",
      ctaSecondary: "Works Offline",
      statusTag: "Verifying DGI&P Server Status..."
    },
    agitation: {
      header: "The System Isn't Broken. It’s Just Complicated.",
      scenarios: [
        "\"Your father’s CNIC is expired. Bring a renewal slip.\"",
        "\"You are wearing white; we can't take a passport photo.\"",
        "\"This affidavit is on Rs. 50 stamp paper; we need Rs. 100.\""
      ],
      pivot: "It’s not your fault. The rules are unwritten. Kaghaz writes them down for you."
    },
    pillars: {
      header: "The Three Pillars",
      items: [
        { id: '1', title: "The Preparation Engine", description: "We don't just Google requirements. We interview you to find edge cases (Rentals, Govt Jobs, etc.).", icon: "Brain" },
        { id: '2', title: "The Identity Vault", description: "Securely store family documents. We track expiry dates and nag you 30 days before fines kick in.", icon: "Vault" },
        { id: '3', title: "The Pre-Flight Check", description: "Simulate the counter experience. Original CNIC? Check. Challan Paid? Check. Attested? Check.", icon: "CheckCircle" },
      ]
    },
    docs: {
      header: "What do you need today?",
      hoverText: "Avg. Rejection: 40% vs Kaghaz: 0%",
      items: [
        { id: 'cnic', title: "CNIC Services", description: "New, Renewal, Modification", icon: "IdCard" },
        { id: 'passport', title: "Passport", description: "Urgent, Normal, Lost", icon: "Plane" },
        { id: 'license', title: "Driving License", description: "Learner, Regular, Int'l", icon: "Car" },
        { id: 'domicile', title: "Domicile", description: "Prepare File & Affidavits", icon: "Home" },
        { id: 'education', title: "Equivalence", description: "IBCC & HEC Attestation", icon: "GraduationCap" },
        { id: 'family', title: "FRC & MRC", description: "Family & Marriage Certs", icon: "Users" },
      ]
    },
    privacy: {
      header: "Your Data Stays on Your Phone",
      body: "We are not a government agency. We are not a data broker.",
      points: [
        "Documents encrypted locally.",
        "No data selling.",
        "Works without internet."
      ]
    },
    social: {
      header: "Meet Saad",
      scenario: {
        without: "Without Kaghaz: Went to Passport office, forgot Govt Employee NOC. Missed flight.",
        with: "With Kaghaz: App warned 'You marked yourself as a Teacher'. He brought the NOC. Done in 45 mins."
      }
    },
    footer: {
      cta: "Be the person who skips the line.",
      sub: "Join 50,000+ Pakistanis who have their paperwork sorted.",
      links: ["Privacy Policy", "Official Sources", "Support"]
    }
  },
  ur: {
    nav: {
      features: "طریقہ کار",
      documents: "دستاویزات",
      privacy: "پرائیویسی",
      stories: "کامیاب کہانیاں",
      cta: "ایپ ڈاؤن لوڈ"
    },
    hero: {
      headline: "\"کل آنا\" کا جملہ دوبارہ کبھی نہ سنیں۔",
      subheadline: "آپ کا ڈیجیٹل منشی۔ ہم آپ کو بتاتے ہیں کہ کون سے دستاویزات ساتھ لے کر جانے ہیں تاکہ نادرا یا پاسپورٹ آفس میں چکر نہ لگیں۔",
      ctaPrimary: "کاغذ ایپ ڈاؤن لوڈ کریں",
      ctaSecondary: "انٹرنیٹ کے بغیر چلتا ہے",
      statusTag: "سرور کا اسٹیٹس چیک ہو رہا ہے..."
    },
    agitation: {
      header: "نظام خراب نہیں، بس پیچیدہ ہے۔",
      scenarios: [
        "\"والد کا شناختی کارڈ ایکسپائر ہے، تجدید کی پرچی لائیں۔\"",
        "\"آپ نے سفید کپڑے پہنے ہیں، تصویر نہیں بن سکتی۔\"",
        "\"یہ بیان حلفی 50 روپے والا ہے، ہمیں 100 والا چاہئے۔\""
      ],
      pivot: "یہ آپ کی غلطی نہیں ہے۔ اصول کہیں لکھے نہیں ہوتے۔ کاغذ ایپ آپ کے لیے یہ اصول آسان بناتی ہے۔"
    },
    pillars: {
      header: "تین اہم خصوصیات",
      items: [
        { id: '1', title: "تیاری کا انجن", description: "ہم صرف گوگل نہیں کرتے۔ ہم آپ سے سوال پوچھتے ہیں تاکہ کوئی کمی نہ رہ جائے۔", icon: "Brain" },
        { id: '2', title: "دستاویزات کی حفاظت", description: "اپنے خاندان کے کاغذات محفوظ رکھیں۔ ہم آپ کو ایکسپائری سے 30 دن پہلے یاد دہانی کراتے ہیں۔", icon: "Vault" },
        { id: '3', title: "کاؤنٹر چیک", description: "گھر سے نکلنے سے پہلے چیک کریں: اصل شناختی کارڈ؟ چیک۔ فیس ادا ہو گئی؟ چیک۔", icon: "CheckCircle" },
      ]
    },
    docs: {
      header: "آج آپ کو کیا چاہیے؟",
      hoverText: "عام مسترد ہونے کی شرح: 40٪ بمقابلہ کاغذ: 0٪",
      items: [
        { id: 'cnic', title: "شناختی کارڈ", description: "نیا، تجدید، ترمیم", icon: "IdCard" },
        { id: 'passport', title: "پاسپورٹ", description: "ارجنٹ، نارمل، گمشدہ", icon: "Plane" },
        { id: 'license', title: "ڈرائیونگ لائسنس", description: "لرنر، ریگولر", icon: "Car" },
        { id: 'domicile', title: "ڈومیسائل", description: "فائل کی تیاری", icon: "Home" },
        { id: 'education', title: "تعلیمی اسناد", description: "IBCC اور HEC تصدیق", icon: "GraduationCap" },
        { id: 'family', title: "فیملی سرٹیفکیٹ", description: "FRC اور MRC", icon: "Users" },
      ]
    },
    privacy: {
      header: "آپ کا ڈیٹا، آپ کے فون میں",
      body: "ہم کوئی سرکاری ادارہ نہیں ہیں۔ ہم آپ کا ڈیٹا نہیں بیچتے۔",
      points: [
        "مقامی طور پر انکرپٹڈ",
        "کوئی ڈیٹا فروخت نہیں",
        "انٹرنیٹ کے بغیر کام کرتا ہے"
      ]
    },
    social: {
      header: "سعد کی کہانی",
      scenario: {
        without: "کاغذ کے بغیر: پاسپورٹ آفس گئے، این او سی نہیں تھا۔ فلائٹ چھوٹ گئی۔",
        with: "کاغذ کے ساتھ: ایپ نے خبردار کیا 'آپ استاد ہیں، این او سی لے لیں'۔ 45 منٹ میں کام مکمل۔"
      }
    },
    footer: {
      cta: "لائن میں لگنے سے بچیں۔",
      sub: "50,000+ پاکستانیوں میں شامل ہوں جن کے کاغذات مکمل ہیں۔",
      links: ["پرائیویسی پالیسی", "سرکاری ذرائع", "مدد"]
    }
  }
};