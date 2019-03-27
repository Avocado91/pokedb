import React from "react"

class App extends React.Component {
    state = {
        pokemonName: undefined,
    }

    getPokemon = async (e) => {
        e.preventDefault()
        e.persist()

        const pokemon = e.target.elements.pokemonName.value

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
                <form onSubmit={this.getPokemon}>
                    <input type="text" name="pokemonName" />
                    <button>Get Pokemon</button>
                </form>
                <p>{this.state.pokemonName}</p>
            </div>
        )
    }
}

export default App

//test
