import React, {FC} from 'react';
import {Text} from 'ink';

// importing components
import Help from './components/help';

const App: FC<{input: Array<string>, flags: any}> = ({input, flags }) => {
	if(input.length !== 0){
		if(flags.h || flags.help){
			return <Help command={input[0]} />
		}
	}
	return <Text>
		Hello
	</Text>
};

module.exports = App;
export default App;
