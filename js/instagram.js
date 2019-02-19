var userFeed = new Instafeed({
get: 'user',
userId: '59bca28fbab64b7d9ab01dfeb516994b',
accessToken: '70678944fc704be999509638907188ed',
template: '<li><div><a href="{{link}}"><img src="{{image}}" /></a><h3>{{caption}}</h3></div></li>',
resolution: 'standard_resolution'
});
userFeed.run();
