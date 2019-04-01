import React from "react"

class App extends React.Component {
    state = {
        pokemonName: undefined,
        pokemonId: undefined,
        pokemonDescription: undefined,
        pokemonSprite: undefined,
        pokemonTypes: [],
        weakTo: [],
        pokemonStats: {
            height: undefined,
            weight: undefined,
            habitat: undefined,
        },
        evolutionChain: {
            firstPoke: undefined,
            secondPoke: undefined,
            thirdPoke: undefined,
        },
    }

    getData = (e) => {
        e.preventDefault()

        this.getPokemon(e)
        this.getPokemonSpecies(e)
    }

    getPokemon = async (e) => {
        const pokemon = e.target.elements.pokemonName.value

        const apiCall = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )
        const response = await apiCall.json()

        let highest = 0
        let strongestStatName = ""
        const stats = response.stats

        for (let i = 0; i < stats.length; i++) {
            if (stats[i].base_stat > highest) {
                highest = stats[i].base_stat
                strongestStatName = stats[i].stat.name
            }
        }

        this.setState((prevState) => ({
            pokemonName: response.name,
            pokemonId: response.id,
            pokemonSprite: response.sprites.front_default,
            pokemonTypes: response.types,
            pokemonStats: {
                height: response.height / 10 + "m", //converting decimeters to meters
                weight: Math.round(response.weight / 4.536) + "lbs.", //converting hexagrams to pounds
                habitat: prevState.pokemonStats.habitat,
                strongestStat: strongestStatName,
            },
        }))

        let weaknesses = []
        for (let i = 0; i < response.types.length; i++) {
            const typesUrl = response.types[i].type.url
            const typesApiCall = await fetch(typesUrl)
            const typesResponse = await typesApiCall.json()
            const weakToData = typesResponse.damage_relations.double_damage_from

            for (let j = 0; j < weakToData.length; j++) {
                //check for duplicates
                if (!weaknesses.includes(weakToData[j].name)) {
                    weaknesses.push(weakToData[j].name)
                }
            }
        }
        this.setState({
            weakTo: weaknesses,
        })
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

        this.setState((prevState) => ({
            pokemonDescription: englishEntry,
            pokemonStats: {
                height: prevState.pokemonStats.height,
                weight: prevState.pokemonStats.weight,
                habitat: response.habitat.name,
                strongestStat: prevState.pokemonStats.strongestStat,
            },
        }))

        const evolutionChainUrl = response.evolution_chain.url
        const evolutionApiCall = await fetch(evolutionChainUrl)
        const evolutionResponse = await evolutionApiCall.json()

        if (evolutionResponse.chain.evolves_to.length < 1) {
            this.setState({
                evolutionChain: {
                    firstPoke: evolutionResponse.chain.species.name,
                    secondPoke: undefined,
                    thirdPoke: undefined,
                },
            })
        } else if (
            evolutionResponse.chain.evolves_to[0].evolves_to.length < 1
        ) {
            this.setState({
                evolutionChain: {
                    firstPoke: evolutionResponse.chain.species.name,
                    secondPoke:
                        evolutionResponse.chain.evolves_to[0].species.name,
                    thirdPoke: undefined,
                },
            })
        } else {
            this.setState({
                evolutionChain: {
                    firstPoke: evolutionResponse.chain.species.name,
                    secondPoke:
                        evolutionResponse.chain.evolves_to[0].species.name,
                    thirdPoke:
                        evolutionResponse.chain.evolves_to[0].evolves_to[0]
                            .species.name,
                },
            })
        }
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
                <div>
                    <h1>Types</h1>
                    {this.state.pokemonTypes.map((i) => {
                        return <p key={i.slot}>{i.type.name}</p>
                    })}
                    <h1>Weak To</h1>
                    {this.state.weakTo.map((weakness) => {
                        return <p>{weakness}</p>
                    })}
                </div>
                <h1>Pokemon Stats</h1>
                <p>Height: {this.state.pokemonStats.height}</p>
                <p>Weight: {this.state.pokemonStats.weight}</p>
                <p>Habitat: {this.state.pokemonStats.habitat}</p>
                <p>Strongest Stat: {this.state.pokemonStats.strongestStat}</p>
                <div>
                    <h1>Evolutions</h1>
                    {this.state.evolutionChain.firstPoke && (
                        <p>first: {this.state.evolutionChain.firstPoke}</p>
                    )}
                    {this.state.evolutionChain.secondPoke && (
                        <p>second: {this.state.evolutionChain.secondPoke}</p>
                    )}
                    {this.state.evolutionChain.thirdPoke && (
                        <p>third: {this.state.evolutionChain.thirdPoke}</p>
                    )}
                </div>
            </div>
        )
    }
}

export default App

//test
