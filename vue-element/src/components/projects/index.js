const config = {
	'currentProject': 'pro_page',
	'pro_page': require('./pro_page/'),
	//'pro_page1': require('./pro_page1/')
}
//console.log(config[config.currentProject])

module.exports = config[config.currentProject];
