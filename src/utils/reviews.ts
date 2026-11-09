/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReviewItem } from './supabase.ts';

const REVIEWS_STORAGE_KEY = 'payradise_reviews_v4';
export const TOTAL_EXPECTED_REVIEWS = 1160;
export const BASE_REVIEWS_COUNT = 1160;

function hasLocalStorage(): boolean {
  return typeof window !== 'undefined' && !!window.localStorage;
}

/**
 * Formats the amount badge on review cards so that both virtual currency
 * and exact rubles are displayed cleanly without redundant suffixes.
 */
export function formatReviewAmountDisplay(amount: string | number): string {
  if (!amount) return 'Сделка завершена';
  const str = String(amount).trim();
  if (str.includes('₽') || str.includes('руб') || str.includes('кк') || str.includes('G') || str.includes('·')) {
    return str;
  }
  const num = Number(str.replace(/\s+/g, ''));
  if (!isNaN(num) && num > 0) {
    return `${num.toLocaleString('ru-RU')} ₽`;
  }
  return str;
}

// Handcrafted flagship authentic reviews
const FLAGSHIP_REVIEWS: ReviewItem[] = [
  {
    id: 'rev_1',
    nickname: 'Danya_Smirnov',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '5 кк · 300 ₽',
    review_text: 'Брал 5кк на MOSCOW через банк. Перевели буквально минут за 5, счет пополнился сразу. Всё четко, буду обращаться еще!',
    created_at: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
  },
  {
    id: 'rev_2',
    nickname: 'xX_HeadHunter_Xx',
    rating: 5,
    game_name: 'STANDOFF 2',
    amount: '500 G · 275 ₽',
    review_text: 'Выставил скин за 625G с комиссией 20%, выкупили за полторы минуты. 500 голды чистыми на аккаунте. Спасибо за скорость!',
    created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 'rev_3',
    nickname: 'Vadim_Gromov',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '10 кк · 500 ₽',
    review_text: 'Купил 10кк на SPB, получил трейдом у автосалона Арзамаса. Продавец адекватный, без лишней суеты всё передал. От души!',
    created_at: new Date(Date.now() - 1000 * 60 * 95).toISOString(),
  },
  {
    id: 'rev_4',
    nickname: 'Thomas_Shelby',
    rating: 5,
    game_name: 'GTA 5 RP',
    amount: '5 кк · 4 750 ₽',
    review_text: 'Сервер Strawberry. Трейд прошел в тихом месте, все безопасно. 5кк получил в полном объеме, лучший курс.',
    created_at: new Date(Date.now() - 1000 * 60 * 160).toISOString(),
  },
  {
    id: 'rev_5',
    nickname: 'Pelmen_228',
    rating: 5,
    game_name: 'MATRESHKA RP',
    amount: '10 кк · 800 ₽',
    review_text: 'Матрёшка сервер #12. Закинули 10кк через банковское отделение за 3 минуты. Промокод START5 дал скидку, вышло вообще огонь.',
    created_at: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
  {
    id: 'rev_6',
    nickname: 'zxc_ShadowFiend',
    rating: 5,
    game_name: 'STANDOFF 2',
    amount: '1 000 G · 550 ₽',
    review_text: 'Брал 1000G на бабочку легаси, не хватало чутка. Скин забрали прямо посреди катки ахах. Беру здесь не первый раз, рекомендую 🗡️',
    created_at: new Date(Date.now() - 1000 * 60 * 360).toISOString(),
  },
  {
    id: 'rev_7',
    nickname: 'Artem_Rostovsky',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '15 кк · 750 ₽',
    review_text: 'Заказывал 15кк на ROSTOV. Сначала переживал за бан, но схема чистая — перевели частями. Деньги на руках, бана нет.',
    created_at: new Date(Date.now() - 1000 * 60 * 500).toISOString(),
  },
  {
    id: 'rev_8',
    nickname: 'TurboDrifter_99',
    rating: 5,
    game_name: 'GTA 5 RP',
    amount: '2 кк · 2 000 ₽',
    review_text: 'Брал 2кк на Downtown чисто на тюнинг и одежду. Оператор в ТГ ответил моментально, передали за 5 минут.',
    created_at: new Date(Date.now() - 1000 * 60 * 650).toISOString(),
  },
  {
    id: 'rev_9',
    nickname: 'deniska_fast',
    rating: 5,
    game_name: 'STANDOFF 2',
    amount: '2 000 G · 1 100 ₽',
    review_text: '2000 голды пришли без задержек. Курс 0.55 рубля за голду самый адекватный на данный момент.',
    created_at: new Date(Date.now() - 1000 * 60 * 820).toISOString(),
  },
  {
    id: 'rev_10',
    nickname: 'Maksim_Grozny',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '20 кк · 1 000 ₽',
    review_text: 'Купил 20кк на сервере GROZNY на бизнес. Оператор вежливый, всё объяснил пошагово. Пришло ровно 20кк.',
    created_at: new Date(Date.now() - 1000 * 60 * 1050).toISOString(),
  },
  {
    id: 'rev_11',
    nickname: 'Matvey_Kovalev',
    rating: 5,
    game_name: 'MATRESHKA RP',
    amount: '5 кк · 500 ₽',
    review_text: 'Матрёшка сервер #05. 5кк перевели через банк, без комиссии. Топовый сервис, теперь только к вам.',
    created_at: new Date(Date.now() - 1000 * 60 * 1300).toISOString(),
  },
  {
    id: 'rev_12',
    nickname: 'ClutchGod_SO2',
    rating: 5,
    game_name: 'STANDOFF 2',
    amount: '3 000 G · 1 650 ₽',
    review_text: '3к голды залетели на ура. Выставил два редких скина, их забрали по очереди за пару минут. Топ!',
    created_at: new Date(Date.now() - 1000 * 60 * 1600).toISOString(),
  },
  {
    id: 'rev_13',
    nickname: 'Tvoy_Strakh',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '3 кк · 180 ₽',
    review_text: 'Брал 3кк на KAZAN на конты в порту. Окупился в 3 раза! Оформили быстро, уважение 👍',
    created_at: new Date(Date.now() - 1000 * 60 * 1950).toISOString(),
  },
  {
    id: 'rev_14',
    nickname: 'Sergey_Eclipse',
    rating: 5,
    game_name: 'GTA 5 RP',
    amount: '10 кк · 9 000 ₽',
    review_text: '10кк на Eclipse. Передача прошла гладко, курс при опте вообще отличный. Всё безопасно.',
    created_at: new Date(Date.now() - 1000 * 60 * 2300).toISOString(),
  },
  {
    id: 'rev_15',
    nickname: 'Batya_V_Zadanii',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '25 кк · 1 250 ₽',
    review_text: '25кк на VOLGOGRAD на создание семьи. Деньги поступили в полном объеме, продавец красавчик.',
    created_at: new Date(Date.now() - 1000 * 60 * 2800).toISOString(),
  },
  {
    id: 'rev_16',
    nickname: 'san4o_vip',
    rating: 5,
    game_name: 'STANDOFF 2',
    amount: '100 G · 55 ₽',
    review_text: 'Проверил на сотке голды. Работает как часы, скин выкупили сразу же.',
    created_at: new Date(Date.now() - 1000 * 60 * 3400).toISOString(),
  },
  {
    id: 'rev_17',
    nickname: 'Mikhail_Samara',
    rating: 5,
    game_name: 'BLACK RUSSIA',
    amount: '7 кк · 420 ₽',
    review_text: 'На SAMARA перевели за 4 минуты. Спасибо за быструю работу, обязательно обращусь снова.',
    created_at: new Date(Date.now() - 1000 * 60 * 4100).toISOString(),
  },
  {
    id: 'rev_18',
    nickname: 'Belyash_V_Masle',
    rating: 5,
    game_name: 'MATRESHKA RP',
    amount: '15 кк · 1 200 ₽',
    review_text: '15кк на 22 сервере. Доставили банком, никаких вопросов со стороны администрации. Советую!',
    created_at: new Date(Date.now() - 1000 * 60 * 4900).toISOString(),
  },
];

// Rich datasets for procedural generation of authentic, natural gamer nicknames
const RP_FIRST_NAMES = [
  'Dmitry', 'Artem', 'Sasha', 'Mikhail', 'Maksim', 'Nikita', 'Vlad', 'Ilya', 'Egor', 'Roman',
  'Yaroslav', 'Kirill', 'Danil', 'Sergey', 'Denis', 'Pavel', 'Timur', 'Andrey', 'Bogdan', 'Gleb',
  'Artur', 'Vadim', 'Kostya', 'Mark', 'Timofey', 'Stepan', 'Fedor', 'Lev', 'Anton', 'Ruslan',
  'Evgeny', 'Yury', 'Vyacheslav', 'Grigory', 'Miron', 'David', 'Alexey', 'Matvey', 'Oleg', 'Stanislav',
  'Vitaly', 'Georgy', 'Leonid', 'Svyatoslav', 'Valentin', 'Rinat', 'Damir', 'Albert', 'Marat', 'Ildar'
];

const RP_LAST_NAMES = [
  'Volkov', 'Morozov', 'Gromov', 'Petrov', 'Kuznetsov', 'Smirnov', 'Orlov', 'Sokolov', 'Kozlov', 'Popov',
  'Belov', 'Vorobyov', 'Kolesnikov', 'Novikov', 'Fedorov', 'Vasiliev', 'Mikhailov', 'Zaytsev', 'Pavlov', 'Semyonov',
  'Golubev', 'Vinogradov', 'Bogdanov', 'Voronin', 'Chernov', 'Medvedev', 'Lebedev', 'Frolov', 'Zhukov', 'Karpov',
  'Titov', 'Belyaev', 'Tarasov', 'Komarov', 'Belyakov', 'Gusev', 'Dmitriev', 'Ilyin', 'Kiselev', 'Davydov',
  'Kudryavtsev', 'Baranov', 'Kulikov', 'Alekseev', 'Stepanov', 'Yakovlev', 'Sorokin', 'Sergeev', 'Romanov', 'Zakharov'
];

const GAMER_ALIASES = [
  'DarkKnight', 'HeadHunter', 'NightCrawler', 'GhostRider', 'BloodSeeker', 'CyberDemon', 'NeonDrifter',
  'ShadowStep', 'FrostBite', 'TurboClutch', 'AimBotPro', 'DeadlyShot', 'SilentKiller', 'Rampage', 'ColdHeart',
  'Immortal', 'ApexPredator', 'DragonBorn', 'StormBringer', 'HyperBeast', 'Vortex', 'SkyWalker', 'VenomStrike',
  'BulletProof', 'WildFire', 'ThunderGod', 'IronClad', 'Phantom', 'SoulEater', 'DeathBringer', 'ToxicBoy',
  'Reaper', 'Destroyer', 'Specter', 'Vanguard', 'Nemesis', 'Overlord', 'Abyss', 'Eclipse', 'Dominator'
];

const CASUAL_HANDLES = [
  'vova', 'maxik', 'deniska', 'san4o', 'timoha', 'artemka', 'romchik', 'mishanya', 'danchik', 'glebas',
  'stason', 'kolyan', 'andruha', 'valerka', 'pashka', 'sergo', 'temych', 'danyok', 'egorka', 'kirya',
  'aleks', 'dimon', 'yarik', 'ilyukha', 'stepan4ik', 'fedyun', 'bogdashka', 'arturchik', 'vadya', 'marik',
  'nikitos', 'kostyan', 'levchik', 'antoha', 'rusik', 'zhenyok', 'slavik', 'grishanya', 'olezha', 'vladik'
];

const GAMER_SUFFIXES = [
  '777', '1337', '99', 'PRO', 'VIP', 'OFFICIAL', 'TOP', 'RICH', 'FAST', 'PRIME',
  'LEGEND', 'MASTER', 'KING', 'SHADOW', 'SO2', 'BR', 'GTA', 'MTR', 'OASIS', 'CASH'
];

const FUNNY_COMMUNITY_NICKS = [
  'Belyash_V_Masle', 'Pelmen_228', 'Pupsik_PRO', 'Kot_Boris', 'Shakal_007', 'Cheburek_Boy', 'Keksik_1337',
  'Barabashka', 'Mamkin_Gamer', 'Batya_V_Zadanii', 'Tvoy_Strakh', 'Sigma_Male', 'Skibidi_Boss', 'Tsar_Gorox',
  'Krutoy_Perekup', 'Glavny_Baryga', 'Dengi_Ne_Problema', 'Kazik_Top', 'Vityaz_RP', 'Gromozeka_77',
  'Salo_S_Chesnokom', 'Svyatoy_Pelmen', 'Dobby_Is_Free', 'Sherlock_Hulms', 'Gospodin_Mayor', 'Ded_Inside'
];

const BR_SERVERS_SAMPLE = [
  'MOSCOW', 'SPB', 'KAZAN', 'SAMARA', 'ROSTOV', 'ANAPA', 'EKB', 'KRASNODAR', 'ARZAMAS',
  'NOVOSIB', 'GROZNY', 'SARATOV', 'OMSK', 'VOLGOGRAD', 'VORONEZH', 'BELGOROD', 'SOCHI',
  'UFA', 'CHILLI', 'CHOCO', 'ICE', 'LIME', 'MAGENTA', 'CRIMSON', 'GOLD', 'AZURE',
  'PLATINUM', 'AQUA', 'GRAY', 'WHITE', 'BLACK', 'RED', 'GREEN', 'BLUE', 'YELLOW',
  'ORANGE', 'PURPLE', 'PINK', 'CHERRY', 'INDIGO', 'TULA', 'RYAZAN', 'MURMANSK', 'NALCHIK', 'DERBENT'
];

const GTA_SERVERS_SAMPLE = [
  'Downtown', 'Strawberry', 'Vinewood', 'Blackberry', 'Insquad', 'Sunrise', 'Rainbow',
  'Richman', 'Eclipse', 'La Mesa', 'Burton', 'Rockford', 'Del Perro', 'Harmony', 'Redwood',
  'Hawick', 'Grapeseed', 'Murrieta', 'Vespucci', 'Milton', 'La Puerta', 'Senora'
];

/**
 * Generates a realistic, varied gamer nickname across multiple distinct styles.
 */
function generateRealisticNickname(seed: number): string {
  const style = seed % 6;

  switch (style) {
    case 0: {
      // RP format: Name_Surname (e.g. Maksim_Gromov, Dmitry_Volkov)
      const fn = RP_FIRST_NAMES[(seed * 7) % RP_FIRST_NAMES.length];
      const ln = RP_LAST_NAMES[(seed * 13) % RP_LAST_NAMES.length];
      return `${fn}_${ln}`;
    }
    case 1: {
      // Cybersport / Gamer alias with brackets or tags (e.g. xX_DarkKnight_Xx, [PRO]FrostBite)
      const alias = GAMER_ALIASES[(seed * 11) % GAMER_ALIASES.length];
      const mod = (seed * 3) % 4;
      if (mod === 0) return `xX_${alias}_Xx`;
      if (mod === 1) return `${alias}_${(seed % 899) + 100}`;
      if (mod === 2) return `zxc_${alias.toLowerCase()}`;
      return `${alias}`;
    }
    case 2: {
      // Casual TG / gaming handle with suffix (e.g. deniska_77, san4o_top)
      const handle = CASUAL_HANDLES[(seed * 17) % CASUAL_HANDLES.length];
      const suffix = GAMER_SUFFIXES[(seed * 5) % GAMER_SUFFIXES.length];
      const delim = (seed % 2 === 0) ? '_' : '';
      return `${handle}${delim}${suffix}`;
    }
    case 3: {
      // Funny / Meme community nick (e.g. Pelmen_228, Belyash_V_Masle)
      const funny = FUNNY_COMMUNITY_NICKS[(seed * 19) % FUNNY_COMMUNITY_NICKS.length];
      const num = (seed % 3 === 0) ? `_${(seed % 90) + 10}` : '';
      return `${funny}${num}`;
    }
    case 4: {
      // City/Server-affiliated gamer nick (e.g. Artem_Kzn, Danya_Msk, Vova_Spb)
      const fn = CASUAL_HANDLES[(seed * 23) % CASUAL_HANDLES.length];
      const cities = ['msk', 'spb', 'kzn', 'ekb', 'samara', 'rostov', 'sochi', 'grozny', 'ufa', '777', 'br', 'so2'];
      const city = cities[(seed * 7) % cities.length];
      return `${fn}_${city}`;
    }
    case 5:
    default: {
      // English-style compound nickname (e.g. ShadowHunter, TurboBlade_01)
      const p1 = ['Shadow', 'Turbo', 'Night', 'Neon', 'Cyber', 'Iron', 'Golden', 'Apex', 'Storm', 'Hyper', 'Toxic', 'Ghost', 'Lucky', 'Fast'];
      const p2 = ['Hunter', 'Blade', 'Rider', 'Drifter', 'Master', 'Shooter', 'Warrior', 'Player', 'Sniper', 'Runner', 'Gamer', 'Striker'];
      const part1 = p1[(seed * 9) % p1.length];
      const part2 = p2[(seed * 15) % p2.length];
      const num = (seed % 2 === 0) ? `_${(seed % 99) + 1}` : '';
      return `${part1}${part2}${num}`;
    }
  }
}

interface ReviewScenario {
  game: string;
  amount: string;
  texts: string[];
}

const REVIEW_SCENARIOS: ReviewScenario[] = [
  // --- BLACK RUSSIA SCENARIOS ---
  {
    game: 'BLACK RUSSIA',
    amount: '1 кк · 60 ₽',
    texts: [
      'Взял 1кк на пробу на {server}. Перевели на банк за 3 минуты, всё чётко 👍',
      'Купил 1кк на {server}. Быстро и без комиссии, спасибо PayRadise!',
      'Проверил сервис на 1кк ({server}). Перевод чистый, аккаунт в порядке.',
      'Все четко, 5 минут и вирты на счету 🤝',
      'Сначала переживал за скам, взял 1кк на тест. Деньги капнули мгновенно, теперь смело беру крупнее!',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '2 кк · 120 ₽',
    texts: [
      'Брал 2кк на {server}. Продавец встретил у автосалона Арзамаса, всё передал за пару минут.',
      '2кк на {server} закинули на банковский счёт моментально, админы даже не чухнули.',
      'Заказал 2кк на {server}. Отличный курс и быстрая выдача.',
      'Брал на мелкие расходы и форму для организации. Всё ровно 🔥',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '3 кк · 180 ₽',
    texts: [
      '3кк на {server} залетели без задержек. Буду брать ещё!',
      'Взял 3кк на {server} на новую тачку среднего класса. Перевели через банк, супер.',
      'Оформил 3кк на {server}. Выдача за 4 минуты, оператор лучший.',
      'Помогли добить денег на марк 2 в фулл тюнинге. Доставили махом 🏎️',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '5 кк · 300 ₽',
    texts: [
      'Брал 5кк на {server}. Перевели на банковский счет частями, абсолютно безопасно.',
      'Купил 5кк на {server}. Самый адекватный курс на рынке, всё пришло ровно.',
      'Заказывал 5кк на сервере {server}. Деньги на руках через 3 минуты после оплаты.',
      '5кк на {server} пришли без проблем. Оператор помог с инструкцией в ТГ, респект 🌴',
      'Закупился на открытие контейнеров в порту. Окупился с головой, спасибо за скорость!',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '10 кк · 500 ₽',
    texts: [
      '10кк на {server} по оптовому курсу 50 руб за лям — просто сказка. Спасибо!',
      'Взял 10кк на {server} на бизнес в Батырево. Перевели трейдом быстро и тихо.',
      'Покупаю уже не в первый раз 10кк на {server}. Всегда чистые вирты, без банов.',
      '10кк на {server} залетели за 5 минут. Лучший шоп по Блек Раше 👑',
      'Промокод START5 реально сэкономил бабки. Перевод получили в полном объёме!',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '15 кк · 750 ₽',
    texts: [
      'Заказывал 15кк на {server}. Перевели на банк, никаких вопросов от админов.',
      '15кк на {server} на покупку дома в Егоровке и гаража. Выдали без задержек.',
      'Брал 15кк на {server}. Оптовая цена огонь, доставка моментальная.',
      'Брал вирты на Бэху М5 Ф90 с лаунчем. Доставили пока я ехал в автосалон, кайф 😎',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '20 кк · 1 000 ₽',
    texts: [
      'Купил 20кк на {server}. Сумма крупная, но передали аккуратно и без палева.',
      '20кк на {server} на развитие семьи. Всё честно, ровная сумма до копейки.',
      'Брал 20кк на {server}. Отличная техподдержка, на связи 24/7.',
      'Огромное спасибо продавцу за выдержку и безопасность. 20кк получены на руки!',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '25 кк · 1 250 ₽',
    texts: [
      '25кк на сервере {server}. Пришло в полном объёме, лучший сервис.',
      'Оформил 25кк на {server}. Всё на высшем уровне, буду советовать друзьям по фаме.',
      'Передавали аккуратно в несколько траншей, чтобы не привлекать внимание кураторов. Всё чисто!',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '30 кк · 1 500 ₽',
    texts: [
      '30кк на {server} залетели как родные. Огромное спасибо за честность.',
      'Заказывал 30кк на {server}. Выдача через банк за 6 минут.',
      'Брал 30кк под слет автосалона. Успел забрать нужную тачку, спасибо за скорость ⚡',
    ],
  },
  {
    game: 'BLACK RUSSIA',
    amount: '50 кк · 2 500 ₽',
    texts: [
      'Крупный заказ на 50кк ({server}). Передали несколькими траншами, всё идеально!',
      '50кк на {server}. Самый надежный поставщик, покупаю только в PayRadise.',
      'Покупал на крупную недвижимость на Рублёвке. Сделка века прошла гладко как по маслу 💎',
    ],
  },

  // --- STANDOFF 2 SCENARIOS ---
  {
    game: 'STANDOFF 2',
    amount: '100 G · 55 ₽',
    texts: [
      'Взял 100G на пробу. Скин выкупили буквально за минуту, комиссию рынка 20% честно покрыли.',
      '100 голды залетели моментально. Курс 0.55 топ 🔥',
      'Чисто проверить сервис взял соточку. Продавец выкупил лот за 40 секунд, респект!',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '300 G · 165 ₽',
    texts: [
      '300 голды на балансе. Выставил скин, через пару минут уже купили.',
      'Брал 300G на открытие кейсов в лобби. Всё быстро и чётко 📦',
      'Выставил коммонку за сумму с учетом комиссии, продавец выкупил махом. Голда уже в игре!',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '500 G · 275 ₽',
    texts: [
      'Выставил скин за 625G с учетом комиссии, на аккаунте ровно 500G чистыми. Топ!',
      '500 голды пришли за 2 минуты. Самая быстрая доставка среди всех ботов.',
      'Брал 500G, отличный курс и моментальный выкуп скина на рынке.',
      'Не хватало на красивый калаш, взял 500G — сделка прошла за минуту 👍',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '1 000 G · 550 ₽',
    texts: [
      'Купил 1000G на нож. Выкупили скин очень оперативно, спасибо!',
      '1000 голды на аккаунте. Комиссию 20% честно берут на себя, пришло копейка в копейку.',
      'Заказывал 1000G, передали без косяков. Рекомендую всем со2шникам 🗡️',
      'В игре голда в 2 раза дороже, тут взял 1000G всего за 550 рублей. Экономия космическая!',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '1 500 G · 825 ₽',
    texts: [
      '1500G залетели на ура. Выставил два скина, забрали оба сразу.',
      'Брал 1500G, выкупили мгновенно, баланс пополнен.',
      'Выставил скин прямо перед началом раунда, после катки уже всё на балансе ахах 🚀',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '2 000 G · 1 100 ₽',
    texts: [
      '2000 голды на базу! Выставил скин с комиссией, пришло ровно 2000G.',
      'Брал 2000G на перчатки. Всё прошло гладко, продавцу респект.',
      'От души за оперативность! Скин на рынке забрали мгновенно, перчи уже на руках 🥊',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '3 000 G · 1 650 ₽',
    texts: [
      '3000 голды пришли за 3 минуты. Самый надежный сервис по СО2.',
      'Заказал 3к голды, выкупили без задержек. Всё супер.',
      'Взял 3к голды на бабочку легаси. Выкупили по красоте, лучший шоп!',
    ],
  },
  {
    game: 'STANDOFF 2',
    amount: '5 000 G · 2 750 ₽',
    texts: [
      '5000G на аккаунте! Выкупили 3 скина по очереди, комиссия 20% полностью покрыта.',
      'Крупный заказ на 5000G закрыли за 5 минут. Лучшие!',
      'Собрал фулл инвентарь мечты на 5к голды. Сервису процветания, вы лучшие 💎',
    ],
  },

  // --- GTA 5 RP SCENARIOS ---
  {
    game: 'GTA 5 RP',
    amount: '1 кк · 1 000 ₽',
    texts: [
      'Брал 1кк на {gtaserver}. Встретились в тихом месте, передали быстро.',
      '1кк на {gtaserver} на карманные расходы. Всё без палева 👍',
      'Закинул 1кк на тест. Продавец подъехал за 4 минуты, передал через багажник.',
    ],
  },
  {
    game: 'GTA 5 RP',
    amount: '2 кк · 2 000 ₽',
    texts: [
      'Купил 2кк на {gtaserver} на тюнинг тачки. Доставили за 5 минут.',
      '2кк на сервере {gtaserver}. Всё чётко, оператор вежливый.',
      'Взял 2кк на одежду и оружие в банде. Передали в Палето-Бэй тихо и спокойно.',
    ],
  },
  {
    game: 'GTA 5 RP',
    amount: '5 кк · 4 750 ₽',
    texts: [
      'Сервер {gtaserver}. Трейд в Палето-Бэй, 5кк получил в полном объёме по курсу 950₽.',
      'Брал 5кк на {gtaserver}. Оптовая скидка сработала, передали безопасно.',
      'Кураторы не запалили, методы передачи реально проверенные, играю спокойно 🛡️',
    ],
  },
  {
    game: 'GTA 5 RP',
    amount: '10 кк · 9 000 ₽',
    texts: [
      '10кк на {gtaserver} по лучшему курсу 900₽ за лям. Деньги на руках!',
      'Заказывал 10кк на {gtaserver} на особняк на Ричмане. Всё прошло идеально.',
      'Крупная сделка на 10кк прошла без единого косяка. Менеджеру в ТГ отдельный респект!',
    ],
  },

  // --- MATRESHKA RP SCENARIOS ---
  {
    game: 'MATRESHKA RP',
    amount: '2 кк · 200 ₽',
    texts: [
      'Матрёшка сервер #{mtrserver}. Перевели 2кк через банк за пару минут.',
      'Брал 2кк на {mtrserver} сервере Матрёшки. Быстро и честно.',
      'Закинули 2кк на банковский счет без проблем, комиссию не сняло.',
    ],
  },
  {
    game: 'MATRESHKA RP',
    amount: '5 кк · 500 ₽',
    texts: [
      'Матрёшка сервер #{mtrserver}. 5кк на банковском счёте, всё пришло ровно.',
      'Купил 5кк на {mtrserver} сервере. Деньги пришли сразу, советую!',
      'Взял 5кк на развитие бизнеса на Матрёшке. Выдача за 3 минуты 🔥',
    ],
  },
  {
    game: 'MATRESHKA RP',
    amount: '10 кк · 800 ₽',
    texts: [
      '10кк на Матрёшке #{mtrserver} по курсу 80₽ за лям. Лучшие условия!',
      'Заказывал 10кк на {mtrserver} сервер. Доставили быстро через банк.',
      'Поехал сразу в автосалон высокого класса за новым аппаратом. Спасибо PayRadise 🏎️',
    ],
  },
  {
    game: 'MATRESHKA RP',
    amount: '15 кк · 1 200 ₽',
    texts: [
      '15кк на #{mtrserver} сервере Матрёшки. Деньги уже на руках, всё чисто.',
      'Купил 15кк на {mtrserver} сервер на фаму. Сервис на высоте.',
      'Крупный заказ на Матрёшке закрыли моментально. Лучший шоп без вариантов!',
    ],
  },
];

/**
 * Builds deterministic 1 160 authentic, diverse gamer reviews with randomized,
 * realistic gaming nicknames and diverse scenarios across all games and servers.
 */
export function generateFull1160Reviews(): ReviewItem[] {
  const result: ReviewItem[] = [...FLAGSHIP_REVIEWS];
  const targetCount = TOTAL_EXPECTED_REVIEWS;

  let idCounter = FLAGSHIP_REVIEWS.length + 1;
  const startTime = Date.now() - 1000 * 60 * 60 * 24 * 28; // within this month

  while (result.length < targetCount) {
    const idx = result.length;
    const scenario = REVIEW_SCENARIOS[idx % REVIEW_SCENARIOS.length];

    // Generate unique, natural nickname with varied patterns
    const nickname = generateRealisticNickname(idx * 37 + 13);

    const brServer = BR_SERVERS_SAMPLE[(idx * 7 + 3) % BR_SERVERS_SAMPLE.length];
    const gtaServer = GTA_SERVERS_SAMPLE[(idx * 11 + 5) % GTA_SERVERS_SAMPLE.length];
    const mtrServer = String(((idx * 13) % 34) + 1).padStart(2, '0');

    const textTemplate = scenario.texts[(idx * 3) % scenario.texts.length];
    const review_text = textTemplate
      .replace('{server}', brServer)
      .replace('{gtaserver}', gtaServer)
      .replace('{mtrserver}', mtrServer);

    // Realistic ratings: 96% are 5 stars, 4% are 4 stars (maintains realistic 4.9+ score)
    const rating = idx % 29 === 0 ? 4 : 5;

    // Distribute timestamps smoothly across "this month"
    const timeOffset = Math.floor((idx / targetCount) * (Date.now() - startTime));
    const created_at = new Date(Date.now() - timeOffset).toISOString();

    result.push({
      id: `rev_${idCounter++}`,
      nickname,
      rating,
      game_name: scenario.game,
      amount: scenario.amount,
      review_text,
      created_at,
    });
  }

  return result;
}

export const DEFAULT_DEMO_REVIEWS: ReviewItem[] = generateFull1160Reviews();

/**
 * Reads user-submitted reviews from localStorage, guaranteeing at least the full 1160 pool.
 */
export function loadLocalReviews(): ReviewItem[] {
  if (!hasLocalStorage()) return DEFAULT_DEMO_REVIEWS;
  try {
    const raw = window.localStorage.getItem(REVIEWS_STORAGE_KEY);
    if (!raw) {
      saveLocalReviews(DEFAULT_DEMO_REVIEWS);
      return DEFAULT_DEMO_REVIEWS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length >= TOTAL_EXPECTED_REVIEWS) {
      return parsed as ReviewItem[];
    }
    // If an older cache had fewer than 1160 items, upgrade to the full 1160 pool
    const merged = mergeReviews(parsed, DEFAULT_DEMO_REVIEWS);
    saveLocalReviews(merged);
    return merged;
  } catch (err) {
    console.error('Failed to read local reviews', err);
    return DEFAULT_DEMO_REVIEWS;
  }
}

/**
 * Persists the full list of local reviews to localStorage.
 */
export function saveLocalReviews(reviews: ReviewItem[]): void {
  if (!hasLocalStorage()) return;
  try {
    window.localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  } catch (err) {
    console.error('Failed to save local reviews', err);
  }
}

export interface LocalReviewInput {
  nickname: string;
  rating: number;
  game_name: string;
  amount: number | string;
  review_text: string;
}

/**
 * Appends a new review to localStorage and returns the complete, saved review.
 */
export function addLocalReview(input: LocalReviewInput): ReviewItem {
  const review: ReviewItem = {
    id: `local_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    nickname: input.nickname,
    rating: input.rating,
    game_name: input.game_name,
    amount: input.amount,
    review_text: input.review_text,
    created_at: new Date().toISOString(),
  };

  const existing = loadLocalReviews();
  saveLocalReviews([review, ...existing]);
  return review;
}

/**
 * Removes a review from localStorage and returns the remaining list.
 */
export function removeLocalReview(id: string | number): ReviewItem[] {
  const existing = loadLocalReviews();
  const remaining = existing.filter((review) => review.id !== id);
  saveLocalReviews(remaining);
  return remaining;
}

/**
 * Sorts reviews by created_at descending (newest first).
 */
export function sortReviews(list: ReviewItem[]): ReviewItem[] {
  return list.slice().sort((a, b) => {
    const ta = new Date(a.created_at || 0).getTime() || 0;
    const tb = new Date(b.created_at || 0).getTime() || 0;
    return tb - ta;
  });
}

/**
 * Merges cloud (Supabase) reviews with local reviews.
 */
export function mergeReviews(local: ReviewItem[], remote: ReviewItem[]): ReviewItem[] {
  const seen = new Set<string | number>();
  const merged: ReviewItem[] = [];

  const pushUnique = (review: ReviewItem) => {
    if (review.id !== undefined && review.id !== null) {
      if (seen.has(review.id)) return;
      seen.add(review.id);
    }
    merged.push(review);
  };

  for (const review of remote) pushUnique(review);
  for (const review of local) pushUnique(review);

  return sortReviews(merged);
}
