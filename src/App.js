import "./App.scss";
import { useAuth } from './hook/useAuth';
import { Private } from './Private';
import { Public } from './Public';

export function App() {
	const { token } = useAuth();
	if (token) {
		return <Private />;
	}
	return <Public />;
}


