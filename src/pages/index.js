import React from "react"

class App extends React.Component {
    state = {
        pokemonName: "squirtle",
    }

    getPokemon = async (e) => {
        e.preventDefault()
        e.persist()

        const pokemon = "charmander"

        const apiCall = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )
        const response = await apiCall.json()

        this.setState({
            pokemonName: response.name,
        })

        console.log(response)
    }

    render() {
        return (
            <div>
                <h1>Pokemon</h1>
                <button onClick={this.getPokemon}>Get Pokemon</button>
                <p>{this.state.pokemonName}</p>
            </div>
        )
    }
}

export default App

//test
