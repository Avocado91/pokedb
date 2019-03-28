import React from "react"

class App extends React.Component {
    state = {
        pokemonName: undefined,
        pokemonId: undefined,
        pokemonSpriteUrl: undefined,
        pokemonTypes: [],
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
            pokemonId: response.id,
            pokemonSpriteUrl: response.sprites.front_default,
            pokemonTypes: response.types,
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
                <p>{this.state.pokemonId}</p>
                <img
                    src={this.state.pokemonSpriteUrl}
                    alt={this.state.pokemonName}
                />
                {this.state.pokemonTypes.map((i) => {
                    return <p key={i.slot}>{i.type.name}</p>
                })}
            </div>
        )
    }
}

export default App

//test
