import type { Category, Chapter, Content } from '../components/types';

export const categories: Category[] = [
  { id: 'basics', label: 'Основи гри' },
  { id: 'champions', label: 'Чемпіони' },
  { id: 'strategy', label: 'Стратегія' },
];

export const chapters: Chapter[] = [
  { id: 'intro', title: 'Введення' },
  { id: 'gameplay', title: 'Ігровий процес' },
  { id: 'objectives', title: 'Цілі гри' },
  { id: 'tips', title: 'Поради' },
];

export const tutorialContent: Content[] = [
  {
    categoryId: 'basics',
    chapterId: 'intro',
    title: 'Що таке League of Legends?',
    content:
      'League of Legends – це стратегічна кооперативна гра, в якій дві команди з п\'яти могутніх чемпіонів борються одна з одною, намагаючись знищити ворожу базу. Вибирайте персонажа з більш ніж 140 чемпіонів, створюйте епічні моменти, заробляйте вбивства та зносіть вежі на шляху до перемоги.',
    image: '/illustration_001.png',
  },
  {
    categoryId: 'basics',
    chapterId: 'gameplay',
    title: 'Ігровий процес',
    content:
      'Гра проходить на карті Summoner\'s Rift, де дві команди змагаються за контроль над територією. Ваша мета - знищити Нексус ворога, проходячи через три лінії захисту.',
    image: '/illustration_002.png',
  },
  {
    categoryId: 'basics',
    chapterId: 'objectives',
    title: 'Цілі гри',
    content:
      'Основні цілі включають знищення ворожих веж, здобуття золота та досвіду, перемогу над нейтральними монстрами та координацію з командою для досягнення перемоги.',
    image: '/illustration_001.png',
  },
  {
    categoryId: 'basics',
    chapterId: 'tips',
    title: 'Поради для новачків',
    content:
      'Почніть з простих чемпіонів, вивчайте карту, спілкуйтесь з командою та не забувайте про фарм. Практика та терпіння - ключ до успіху!',
    image: '/illustration_002.png',
  },
];
