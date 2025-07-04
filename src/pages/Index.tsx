import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const movies = [
    {
      id: 1,
      title: "Дюна: Часть вторая",
      genre: "Фантастика",
      duration: "166 мин",
      rating: "16+",
      price: 150,
      times: ["10:00", "13:30", "17:00", "20:30"],
      image: "/img/a7fe8e86-f3cf-498d-a919-5c4e0ed583bb.jpg",
    },
    {
      id: 2,
      title: "Оппенгеймер",
      genre: "Драма",
      duration: "180 мин",
      rating: "16+",
      price: 180,
      times: ["11:00", "14:30", "18:00", "21:30"],
      image: "/img/a7fe8e86-f3cf-498d-a919-5c4e0ed583bb.jpg",
    },
    {
      id: 3,
      title: "Человек-паук",
      genre: "Боевик",
      duration: "148 мин",
      rating: "12+",
      price: 200,
      times: ["12:00", "15:30", "19:00", "22:00"],
      image: "/img/a7fe8e86-f3cf-498d-a919-5c4e0ed583bb.jpg",
    },
  ];

  const cafeMenu = [
    { name: "Попкорн большой", price: 80, category: "Снеки" },
    { name: "Попкорн средний", price: 50, category: "Снеки" },
    { name: "Кола 0.5л", price: 40, category: "Напитки" },
    { name: "Начос с сыром", price: 90, category: "Снеки" },
    { name: "Хот-дог", price: 60, category: "Еда" },
    { name: "Чай/Кофе", price: 30, category: "Напитки" },
  ];

  const generateSeats = () => {
    const seats = [];
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

    for (let row of rows) {
      for (let i = 1; i <= 12; i++) {
        const seatId = `${row}${i}`;
        const isOccupied = Math.random() < 0.2; // 20% занятых мест
        seats.push({
          id: seatId,
          row,
          number: i,
          isOccupied,
          isSelected: selectedSeats.includes(seatId),
        });
      }
    }
    return seats;
  };

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalPrice = selectedSeats.length * (selectedMovie?.price || 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Film" size={32} className="text-red-500" />
              <h1 className="text-2xl font-bold text-white">КиноМакс</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#movies"
                className="hover:text-red-500 transition-colors"
              >
                Фильмы
              </a>
              <a href="#halls" className="hover:text-red-500 transition-colors">
                Залы
              </a>
              <a href="#cafe" className="hover:text-red-500 transition-colors">
                Кафе
              </a>
              <a
                href="#contacts"
                className="hover:text-red-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-900 to-black flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold mb-4">
            Кино по самым низким ценам
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Билеты от 150 рублей • Попкорн от 50 рублей • Два зала
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Посмотреть расписание
          </Button>
        </div>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Сейчас в кино</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-gradient-to-br from-red-900 to-black rounded-t-lg flex items-center justify-center">
                    <Icon name="Film" size={48} className="text-red-500" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-white mb-2">
                    {movie.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className="border-red-500 text-red-500"
                    >
                      {movie.genre}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-gray-500 text-gray-300"
                    >
                      {movie.rating}
                    </Badge>
                  </div>
                  <p className="text-gray-400 mb-4">{movie.duration}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-500">
                      {movie.price}₽
                    </span>
                    <span className="text-sm text-gray-400">за билет</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {movie.times.map((time, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-500"
                        onClick={() => setSelectedMovie(movie)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => setSelectedMovie(movie)}
                      >
                        Выбрать места
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-gray-900 border-gray-700">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Выбор мест - {movie.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        {/* Screen */}
                        <div className="text-center">
                          <div className="w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full mb-2"></div>
                          <p className="text-sm text-gray-400">ЭКРАН</p>
                        </div>

                        {/* Seats */}
                        <div className="space-y-2">
                          {["A", "B", "C", "D", "E", "F", "G", "H"].map(
                            (row) => (
                              <div
                                key={row}
                                className="flex items-center justify-center gap-1"
                              >
                                <span className="w-8 text-center text-gray-400">
                                  {row}
                                </span>
                                {[...Array(12)].map((_, i) => {
                                  const seatId = `${row}${i + 1}`;
                                  const isOccupied = Math.random() < 0.2;
                                  const isSelected =
                                    selectedSeats.includes(seatId);

                                  return (
                                    <button
                                      key={seatId}
                                      disabled={isOccupied}
                                      className={`w-8 h-8 rounded-t-lg border-2 text-xs font-bold transition-all duration-200 ${
                                        isOccupied
                                          ? "bg-gray-700 border-gray-600 cursor-not-allowed"
                                          : isSelected
                                            ? "bg-red-600 border-red-500 text-white"
                                            : "bg-gray-800 border-gray-600 hover:border-red-500 hover:bg-red-900"
                                      }`}
                                      onClick={() =>
                                        !isOccupied && handleSeatClick(seatId)
                                      }
                                    >
                                      {i + 1}
                                    </button>
                                  );
                                })}
                              </div>
                            ),
                          )}
                        </div>

                        {/* Legend */}
                        <div className="flex justify-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-800 border-2 border-gray-600 rounded-t"></div>
                            <span>Свободно</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-red-600 border-2 border-red-500 rounded-t"></div>
                            <span>Выбрано</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-700 border-2 border-gray-600 rounded-t"></div>
                            <span>Занято</span>
                          </div>
                        </div>

                        {/* Total */}
                        {selectedSeats.length > 0 && (
                          <div className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span>Выбранные места:</span>
                              <span className="font-bold">
                                {selectedSeats.join(", ")}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-lg font-bold">
                              <span>Итого:</span>
                              <span className="text-red-500">
                                {totalPrice}₽
                              </span>
                            </div>
                            <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                              Забронировать
                            </Button>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section id="cafe" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Кафе</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="snacks" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                <TabsTrigger value="snacks">Снеки</TabsTrigger>
                <TabsTrigger value="drinks">Напитки</TabsTrigger>
                <TabsTrigger value="food">Еда</TabsTrigger>
              </TabsList>
              <TabsContent value="snacks" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cafeMenu
                    .filter((item) => item.category === "Снеки")
                    .map((item, idx) => (
                      <Card key={idx} className="bg-gray-700 border-gray-600">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-white">
                              {item.name}
                            </h3>
                            <span className="text-red-500 font-bold">
                              {item.price}₽
                            </span>
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-2 bg-red-600 hover:bg-red-700"
                          >
                            Добавить
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="drinks" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cafeMenu
                    .filter((item) => item.category === "Напитки")
                    .map((item, idx) => (
                      <Card key={idx} className="bg-gray-700 border-gray-600">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-white">
                              {item.name}
                            </h3>
                            <span className="text-red-500 font-bold">
                              {item.price}₽
                            </span>
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-2 bg-red-600 hover:bg-red-700"
                          >
                            Добавить
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="food" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cafeMenu
                    .filter((item) => item.category === "Еда")
                    .map((item, idx) => (
                      <Card key={idx} className="bg-gray-700 border-gray-600">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-white">
                              {item.name}
                            </h3>
                            <span className="text-red-500 font-bold">
                              {item.price}₽
                            </span>
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-2 bg-red-600 hover:bg-red-700"
                          >
                            Добавить
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Контакты</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Icon
                  name="MapPin"
                  size={32}
                  className="text-red-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-400">
                  ул. Кинематографистов, 15
                  <br />
                  Москва, 123456
                </p>
              </div>
              <div>
                <Icon
                  name="Phone"
                  size={32}
                  className="text-red-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-400">
                  +7 (495) 123-45-67
                  <br />
                  Ежедневно 10:00-23:00
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Почему выбирают нас?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Icon
                    name="DollarSign"
                    size={20}
                    className="text-red-500 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Низкие цены</h4>
                    <p className="text-sm text-gray-400">
                      Билеты от 150₽, попкорн от 50₽
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Armchair"
                    size={20}
                    className="text-red-500 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Комфорт</h4>
                    <p className="text-sm text-gray-400">
                      Удобные кресла, качественный звук
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Coffee" size={20} className="text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Кафе</h4>
                    <p className="text-sm text-gray-400">
                      Свежий попкорн и напитки
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Удобное время</h4>
                    <p className="text-sm text-gray-400">
                      Сеансы каждые 3.5 часа
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <Icon name="Film" size={24} className="text-red-500 mr-2" />
            <span className="text-lg font-semibold">КиноМакс</span>
          </div>
          <p className="text-center text-gray-400 mt-2">
            © 2024 КиноМакс. Кино по доступным ценам.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
