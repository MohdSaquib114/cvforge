import { Box } from "@chakra-ui/react";
import SettingsPanel from "../src/components/SettingsPanel";

function App() {
	return (
		<Box>
			<Box
				minHeight='100dvh'
				display='flex'
				justifyContent='space-between'
				as='div'>
				<Box padding='1em' width='40dvw' bg='white'>
					<SettingsPanel style={{ margin: "0 auto" }} />
				</Box>
				<Box bg='#003366' padding='2em' width='60dvw' overflow='hidden'>
					<h1>Column two</h1>
				</Box>
			</Box>
		</Box>
	);
}

export default App;