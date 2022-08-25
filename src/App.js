import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="main">
			<Header />
			<Hero />
			<div id='projects'></div>
			<Projects />
			<div id='contact'></div>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
