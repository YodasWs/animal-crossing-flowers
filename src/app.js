/* app.json */
yodasws.page('home').setRoute({
	template: 'pages/home.html',
	route: '/',
}).on('load', () => {
	yodasws.component('y-table');
});
