npm install --save eko-js-sdk

let ekoPlayer = new EkoPlayer('#myContainer', '1.0');
ekoPlayer.load('AWLLK1', {
    params: {
        autoplay: false,
        clearcheckpoints: true,
        debug: true
    },
    events: ['nodestart', 'nodeend', 'playing', 'pause'],
    cover: '#myCoverId',
    iframeAttributes: { title: 'My Eko Player' }
});
