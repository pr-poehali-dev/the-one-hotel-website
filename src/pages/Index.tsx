import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  return (
    <div className="min-h-screen bg-pearl font-lato">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-charcoal/95 backdrop-blur-sm z-50 rounded-full px-8 py-3">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-playfair font-bold text-gold">THE ONE</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-pearl hover:text-gold transition-colors">Главная</a>
              <a href="#hotels" className="text-pearl hover:text-gold transition-colors">Отели</a>
              <a href="#rooms" className="text-pearl hover:text-gold transition-colors">Номера</a>
              <a href="#services" className="text-pearl hover:text-gold transition-colors">Услуги</a>
              <a href="#events" className="text-pearl hover:text-gold transition-colors">События</a>
              <a href="#contacts" className="text-pearl hover:text-gold transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
              Войти
            </Button>
          </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.4)), url('/img/e9db9b73-0d43-46b2-80a6-0fb43009fc69.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 animate-fade-in">
            THE ONE
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in">
            Роскошь, превосходящая ожидания
          </p>
          
          {/* Booking Form */}
          <Card className="bg-white/95 backdrop-blur-sm p-8 animate-scale-in">
            <CardContent className="p-0">
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6">
                Забронировать номер
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Заезд</label>
                  <Input 
                    type="date" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="border-gold/30 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Выезд</label>
                  <Input 
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border-gold/30 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Гости</label>
                  <Select>
                    <SelectTrigger className="border-gold/30 focus:border-gold">
                      <SelectValue placeholder="2 взрослых" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 взрослый</SelectItem>
                      <SelectItem value="2">2 взрослых</SelectItem>
                      <SelectItem value="3">3 взрослых</SelectItem>
                      <SelectItem value="4">4 взрослых</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                    Найти номера
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-charcoal mb-4">
              Эксклюзивные номера
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый номер — это произведение искусства, созданное для вашего комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/bb376027-5940-421b-a455-2af75951f983.jpg"
                  alt="Люкс Президентский"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  VIP
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-2">
                  Люкс Президентский
                </h3>
                <p className="text-gray-600 mb-4">
                  Роскошный номер площадью 120 м² с панорамным видом на город
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold">₽45,000</span>
                  <span className="text-gray-500">за ночь</span>
                </div>
                <Button className="w-full mt-4 bg-charcoal hover:bg-charcoal-light text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/67b04b7e-42f8-4940-aa00-9ceb656f8542.jpg"
                  alt="Делюкс Золотой"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-2">
                  Делюкс Золотой
                </h3>
                <p className="text-gray-600 mb-4">
                  Элегантный номер с золотыми акцентами и мраморной ванной
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold">₽25,000</span>
                  <span className="text-gray-500">за ночь</span>
                </div>
                <Button className="w-full mt-4 bg-charcoal hover:bg-charcoal-light text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/bb376027-5940-421b-a455-2af75951f983.jpg"
                  alt="Стандарт Премиум"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-2">
                  Стандарт Премиум
                </h3>
                <p className="text-gray-600 mb-4">
                  Стильный номер с современными удобствами и видом на сад
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold">₽15,000</span>
                  <span className="text-gray-500">за ночь</span>
                </div>
                <Button className="w-full mt-4 bg-charcoal hover:bg-charcoal-light text-white">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-pearl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-charcoal mb-4">
              Премиальные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создаем незабываемые моменты для наших гостей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Crown" size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Консьерж-сервис
              </h3>
              <p className="text-gray-600">
                Персональный помощник 24/7 для исполнения любых желаний
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Car" size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Трансфер
              </h3>
              <p className="text-gray-600">
                Роскошные автомобили и личные водители
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="UtensilsCrossed" size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                Ресторан
              </h3>
              <p className="text-gray-600">
                Авторская кухня от мишленовских шеф-поваров
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name="Waves" size={32} className="text-charcoal" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                СПА
              </h3>
              <p className="text-gray-600">
                Эксклюзивные процедуры и релаксация
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-charcoal mb-4">
              Эксклюзивные события
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Организуем незабываемые мероприятия на любой вкус
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-semibold text-charcoal mb-6">
                Свадьбы мечты
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Превратите ваш особенный день в сказку. Наша команда создаст идеальную свадьбу с вниманием к каждой детали.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-gold mr-3" />
                  Персональный свадебный планировщик
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-gold mr-3" />
                  Роскошные банкетные залы
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-gold mr-3" />
                  Изысканное меню и обслуживание
                </li>
              </ul>
              <Button className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-3">
                Узнать подробнее
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/67b04b7e-42f8-4940-aa00-9ceb656f8542.jpg"
                alt="Свадебный зал"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-playfair font-bold mb-8">
                Свяжитесь с нами
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-gold mr-4" />
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-gray-300">Красная площадь, 1, Москва</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-gold mr-4" />
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-gold mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-300">info@theone-hotels.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-gold/30">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold mb-6">
                    Оставить заявку
                  </h3>
                  <form className="space-y-4">
                    <Input 
                      placeholder="Ваше имя"
                      className="border-gold/30 focus:border-gold bg-white/10 text-white placeholder:text-gray-300"
                    />
                    <Input 
                      type="email"
                      placeholder="Email"
                      className="border-gold/30 focus:border-gold bg-white/10 text-white placeholder:text-gray-300"
                    />
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      className="border-gold/30 focus:border-gold bg-white/10 text-white placeholder:text-gray-300"
                    />
                    <Button className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-light text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">THE ONE</h3>
            <p className="text-gray-300 mb-4">
              © 2024 THE ONE Hotels. Все права защищены.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;