export default {
    caverNetwork: 'https://api.baobab.klaytn.net:8651/',
    voteAddress: 'fill vote contract address',
    voteTopic: '0x658e56310a29f91fa24cc519e3c098389725a7d6a4c4c8798ebcd31b3bb7178e',
    voteReturn: ['uint32', 'address'],
    term: 3600, //per 1 hour
    prize: [3000, 2000, 1000,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100,
        100, 100, 100, 100, 100],
    prizeUnit: 'mKLAY',
    watchInterval: 10,
    difficulty: 1,
}