"use client";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Search, ShoppingCart, User, Star, Clock, Truck, Phone, Mail, MapPin, HelpCircle, FileText, Shield, Navigation } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');
  const pathName = usePathname();
  const locale = useLocale();
  const router = useRouter();

  // Правильное переключение языка
  const switchLocale = () => {
    const newLocale = locale === 'ru' ? 'tj' : 'ru';

    router.push(pathName, { locale: newLocale });
  };
  const categories = [
    { name: "Еда", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" },
    { name: "Продукты", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop" },
    { name: "Мебель", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop" },
    { name: "Книги", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop" },
    { name: "Одежда", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop" },
    { name: "Техника", img: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=200&h=200&fit=crop" },
  ];

  const restaurants = [
    {
      name: "Азиатская кухня",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=250&fit=crop",
      rating: 4.8,
      time: "25–35 мин",
      delivery: "Бесплатно",
      tags: ["Азиатская", "Суши", "Лапша"],
    },
    {
      name: "Burger House",
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop",
      rating: 4.6,
      time: "20–30 мин",
      delivery: "50 сомони",
      tags: ["Бургеры", "Фастфуд", "Американская"],
    },
    {
      name: "Итальянская пиццерия",
      img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=250&fit=crop",
      rating: 4.9,
      time: "30–40 мин",
      delivery: "Бесплатно",
      tags: ["Пицца", "Итальянская", "Паста"],
    },
    {
      name: "Кофейня Aroma",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=250&fit=crop",
      rating: 4.7,
      time: "15–25 мин",
      delivery: "30 сомони",
      tags: ["Кофе", "Десерты", "Завтраки"],
    },
  ];

  const quickActions = [
    {
      title: "Экспресс заказ",
      description: "Быстрая доставка в течение часа",
      icon: "🚀"
    },
    {
      title: "Отследить заказ",
      description: "Проверить статус вашего заказа",
      icon: "📱"
    },
    {
      title: "Грузовая доставка",
      description: "Для крупных товаров и мебели",
      icon: "🚚"
    },
    {
      title: "Запланировать",
      description: "Выберите удобное время доставки",
      icon: "📅"
    }
  ];

  const services = [
    "Доставка еды",
    "Продукты",
    "Мебель",
    "Одежда",
    "Техника"
  ];

  const supportLinks = [
    { name: "Центр помощи", icon: HelpCircle },
    { name: "Условия использования", icon: FileText },
    { name: "Политика конфиденциальности", icon: Shield },
    { name: "Отследить заказ", icon: Navigation }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-blue-600 flex items-center justify-center rounded-full text-lg font-bold">
            DarDast
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="text-gray-500 text-lg font-semibold whitespace-nowrap flex items-center gap-1">
              <MapPin size={14} /> Душанбе
            </span>
            <h1 className="text-lg font-semibold whitespace-nowrap">{t('deliveryT')}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative w-48 sm:w-64 lg:w-72">
            <input
              type="text"
              placeholder={t('searchP')}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <ShoppingCart size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <User size={20} />
            </button>
            <button
              onClick={switchLocale}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
            >
              {locale === "ru" ? "TJ 🇹🇯" : "RU 🇷🇺"}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="mx-4 sm:mx-6 lg:mx-8 mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
          <div className="bg-blue-500 w-max px-3 py-1 rounded-full text-sm font-medium">{t('actsiya')}</div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {t('freeDelivery')}
          </h2>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            {t('order100')}
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium w-max hover:bg-gray-100 transition text-sm sm:text-base">
            {t('btnOrder')}
          </button>
        </section>

        <section className="mx-4 sm:mx-6 lg:mx-8 mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Быстрые действия</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickActions.map((action, i) => (
              <div
                key={i}
                className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 sm:p-6 transition cursor-pointer border border-gray-200 hover:border-gray-300"
              >
                <div className="text-2xl mb-3">{action.icon}</div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">{action.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{action.description}</p>
                <button className="text-blue-600 font-medium text-xs sm:text-sm hover:text-blue-700 transition">
                  Открыть →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-4 sm:mx-6 lg:mx-8 mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Категории</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition cursor-pointer group"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2 sm:mb-3">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition"
                  />
                </div>
                <p className="font-medium text-sm sm:text-base text-center">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-4 sm:mx-6 lg:mx-8 mt-8 sm:mt-12 lg:mt-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold">Популярные рестораны</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition">
              Все рестораны →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {restaurants.map((rest, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition bg-white group"
              >
                <div className="relative h-32 sm:h-40">
                  <img
                    src={rest.img}
                    alt={rest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center text-sm font-medium shadow">
                    <Star className="text-yellow-400 mr-1" size={14} /> {rest.rating}
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">{rest.name}</h4>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                    <Clock size={14} className="mr-1 sm:mr-2" /> {rest.time}
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <Truck size={14} className="mr-1 sm:mr-2" /> {rest.delivery}
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {rest.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 flex items-center justify-center rounded-full text-xl font-bold">
                  DarDast
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Доставка Душанбе</h2>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-4 max-w-md">
                Быстрая и надежная доставка всего что нужно прямо к вашей двери в Душанбе.
              </p>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={16} />
                <span>Душанбе, Таджикистан</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-3 sm:mb-4">Услуги</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 hover:text-white transition text-sm sm:text-base">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-3 sm:mb-4">Поддержка</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index} className="flex items-center gap-2 text-gray-300 hover:text-white transition group cursor-pointer">
                      <IconComponent size={16} className="group-hover:text-blue-400 transition" />
                      <span className="text-sm sm:text-base">{link.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Contacts and Copyright */}
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+992 123 456 789</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@delivery.tj</span>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <p className="text-gray-300 text-sm mb-1">
                  © 2024 Доставка Душанбе. Все права защищены.
                </p>
                <p className="text-gray-400 text-xs">
                  Работаем 24/7 для вашего удобства
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}