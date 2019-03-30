import React from "react"

class App extends React.Component {
    state = {
        pokemonName: undefined,
        pokemonId: undefined,
        pokemonDescription: undefined,
        pokemonSprite: undefined,
        pokemonTypes: [],
        pokemonStats: {
            height: undefined,
            weight: undefined,
        },
    }

    getData = (e) => {
        e.preventDefault()

        this.getPokemonSpecies(e)
        this.getPokemon(e)
    }

    getPokemonSpecies = async (e) => {
        const pokemon = e.target.elements.pokemonName.value

        const apiCall = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
        )
        const response = await apiCall.json()

        let englishEntry = ""
        for (let i = 0; i < response.flavor_text_entries.length; i++) {
            if (response.flavor_text_entries[i].language.name === "en") {
                englishEntry = response.flavor_text_entries[i].flavor_text
                break
            }
        }

        this.setState({
            pokemonDescription: englishEntry,
        })
        console.log(response)
    }

    getPokemon = async (e) => {
        const pokemon = e.target.elements.pokemonName.value

        const apiCall = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )
        const response = await apiCall.json()

        this.setState({
            pokemonName: response.name,
            pokemonId: response.id,
            pokemonSprite: response.sprites.front_default,
            pokemonTypes: response.types,
            pokemonStats: {
                height: response.height / 10 + "m",
                weight: Math.round(response.weight / 4.536) + "lbs.",
            },
        })

        console.log(response)
    }

    render() {
        return (
            <div>
                <h1>Pokemon</h1>
                <form onSubmit={this.getData}>
                    <input type="text" name="pokemonName" />
                    <button>Get Pokemon</button>
                </form>
                <p>{this.state.pokemonName}</p>
                <p>{this.state.pokemonId}</p>
                <img
                    src={this.state.pokemonSprite}
                    alt={this.state.pokemonName}
                />
                <p>{this.state.pokemonDescription}</p>
                {this.state.pokemonTypes.map((i) => {
                    return <p key={i.slot}>{i.type.name}</p>
                })}
                <p>Pokemon Stats</p>
                <p>Height: {this.state.pokemonStats.height}</p>
                <p>Weight: {this.state.pokemonStats.weight}</p>
            </div>
        )
    }
}

export default App

//test
