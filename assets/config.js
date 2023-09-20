export default {
  brand: {
    name: 'FishTrackingChallenge2024',
    nameShort: 'FTC2024',
    footer: {
      links: [
        { icon: 'mdi-github', link: 'https://github.com/FTC-2024' },
        { icon: 'mdi-twitter', link: '' },
        {
          icon: 'mdi-account-multiple',
          link: '',
        },
        {
          icon: 'mdi-youtube',
          link: '',
        },
        {
          icon: 'mdi-school',
          link: '',
        },
      ],
    },
    copyrightInfo: {
      year: 2024,
      owner: 'FishTrackingChallenge2024 Team',
    },
  },
  challenge: {
    codalab: '',
  },
  members: {
    core: [
      {
        name: 'Keisuke Fujii',
        role: 'Nagoya Univ.',
        imgSrc: require('@/assets/img/member/keisukefujii.jpg'),
        link: 'http://www-mmde.ist.osaka-u.ac.jp/~maekawa/index-e.html',
      },
      {
        name: 'Makoto Itoh',
        role: 'Nagoya Univ.',
        imgSrc: require('@/assets/img/member/makotoitoh.jpg'),
        link: 'https://www.linkedin.com/in/naoya-yoshimura-3b783a177/',
      },
      {
        name: 'Qingrui Hu',
        role: 'Nagoya Univ.',
        imgSrc: require('@/assets/img/member/qingruihu.jpg'),
      },
    ],
    support: [
      {
        name: 'Alex Hoi-Hang Chan',
        role: 'University of Konstanz',
        imgSrc: null,
      },
    ],

    adviser: [
      {
        name: 'Hiroaki Kawashima',
        role: 'University of Hyogo',
        imgSrc: require('@/assets/img/member/kawashima.jpg'),
      },
      {
        name: 'Naoya Yoshimura',
        role: 'Osaka University',
        imgSrc: require('@/assets/img/member/yoshimura.jpg'),
      },
      {
        name: 'Atom Scott',
        role: 'Nagoya University',
        imgSrc: require('@/assets/img/member/scott.png'),
      },
    ],
    provider: [
      {
        name: 'Takayuki Niizato',
        role: 'University of Tsukuba',
        imgSrc: require('@/assets/img/member/niizato.jpg'),
      },
    ],
  },
}
