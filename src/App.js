export default function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<Parkinglist />
			<Stats />
		</div>
	)
}

function Logo() {
	return <h1>🌴Far Away</h1>
}

function Form() {
	return (
		<div className="add-form">
			<h3>What do you need for your 😊 trips</h3>
		</div>
	)
}

function Parkinglist() {
	return <div className="list">LISTS</div>
}

function Stats() {
	return (
		<footer className="stats">
			<em>😎You have X items on your list, and you already packed X (X%) </em>
		</footer>
	)
}
