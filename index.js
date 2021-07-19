const readline = require('readline-sync')

function start() {
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia seatch term: ')
	}
	
	function askAndReturnPrefix(){
		const prefixes = ['Who is', 'What is', 'THe History of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Which prefix: ')
		const selectedPrefixTerm = prefixes[selectedPrefixIndex]

		return selectedPrefixTerm
	}
	console.log(content)
}

start()
