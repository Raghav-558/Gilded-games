import token from '../assets/images/webp/token.webp'
import saleToken from '../assets/images/webp/sale-token.webp'
import holders from '../assets/images/webp/holders.webp'
import nft from '../assets/images/webp/nft.webp'
import engine from '../assets/images/webp/unreal-engine.webp'
import uniswap from '../assets/images/webp/uniswap.webp'
import gecko from '../assets/images/webp/coin-gecko.webp'
import polygon from '../assets/images/webp/polygon.webp'

export const HEADER_LIST = [
  {
    title: 'About',
    link: '#about'
  },
  {
    title: 'Presale $GILD',
    link: '#presale'
  },
  {
    title: 'Staking $GILD',
    link: '#staking'
  },
  {
    title: '$GILD Nodes',
    link: '#nodes'
  }
]

export const GILD_TOKEN_INFO_LIST = [
  {
    image: token,
    title: '3 Billion',
    description: 'GILD Token Info'
  },
  {
    image: saleToken,
    title: 'Pre Sale Token',
    description: ''
  },
  {
    image: holders,
    title: '100,000+',
    description: 'Holders'
  },
  {
    image: nft,
    title: '2,500+',
    description: 'NFT Sold'
  }
]

export const ROADMAP_LIST = [
  {
    step: 'Phase 1',
    question: 'Q1 2022',
    list: [
      'Whitelist/Presale Created',
      'Private Sale',
      'Public Sale',
      'Prime Eternal Owner Perks '
    ]
  },
  {
    step: 'Phase 2',
    question: 'Q2 2022',
    list: ['Token & Staking Release', 'Staking Gameplay']
  },
  {
    step: 'Phase 3',
    question: 'Q3 2022',
    list: [
      'MVP Gameplay Release ',
      'Battle Modes Release',
      'Land Gameplay Release',
      'Gear Forging Release'
    ]
  }
]

export const UNISWAP_LIST = [
  '100,000+ Airdrop',
  'NFT $GILD giveaway',
  'Announcement and Games'
]


export const POWERED_LIST = [
  {
    logo: engine,
    logoAlt: 'engine'
  },
  {
    logo: uniswap,
    logoAlt: 'uniswap'
  },
  {
    logo: gecko,
    logoAlt: 'coin-gecko'
  },
  {
    logo: polygon,
    logoAlt: 'polygon'
  }
]
