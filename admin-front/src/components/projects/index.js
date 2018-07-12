const config = {
	'currentProject': 'template',
	//'page': require('./pro_page/.config.js'),
	'template': require('./template/.config.js')
}
//console.log(config[config.currentProject])

module.exports = config[config.currentProject];
