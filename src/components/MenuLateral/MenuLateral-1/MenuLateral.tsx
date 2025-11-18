import React from "react";
import "./style.scss";

// 1. Definir uma interface para o estado do componente
interface MenuLateralState {
	menu: "open" | "closed";
}

// 2. Definir uma interface para as props do componente (mesmo que vazia por enquanto)
interface MenuLateralProps {
	// Se o componente fosse receber props, elas seriam definidas aqui
	title?: string;
}

// 3. Usar as interfaces na declaração da classe
class MenuLateral1 extends React.Component<
	MenuLateralProps,
	MenuLateralState
> {
	// 4. O construtor recebe props e deve passá-las para super(props)
	constructor(props: MenuLateralProps) {
		super(props);
		this.state = {
			menu: "open",
		};
	}

	toggleMenu = () => {
		// É uma boa prática usar a forma funcional do setState quando o novo estado depende do anterior
		this.setState((prevState) => ({
			menu: prevState.menu === "closed" ? "open" : "closed",
		}));
	};

	render() {
		return (
			<>
				{/* A classe do menu será 'menu open' ou 'menu closed' */}
				<aside className={this.state.menu} id="menu">
					<button
						className="burguer"
						onClick={this.toggleMenu}
					>
						{" "}
						x
					</button>
					<nav>
						<a href="">about</a>
						<a href="">portifolio</a>
						<a href="">projects</a>
						<a href="">xp</a>
						<a href="">skills</a>
					</nav>
				</aside>
			</>
		);
	}
}

export default MenuLateral1;
