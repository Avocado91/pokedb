import React from "react"
import ModalContainer from "react-modal"
import Modal from "../components/Modal"

import "normalize.css"
import "../css/components/Modal.css"

class App extends React.Component {
    state = {
        modalIsOpen: false,
        pokemonName: undefined,
        pokemonId: undefined,
        previousPokemonName: undefined,
        previousPokemonId: undefined,
        nextPokemonName: undefined,
        nextPokemonId: undefined,
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

    openModal = () => {
        this.setState({
            modalIsOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        })
    }

    //Pokemon Id's always contain at least 3 digits ex. 004
    minThreeDigits = (n) => {
        if (n < 10) {
            return "00" + n
        } else if (n < 100) {
            return "0" + n
        } else return n
    }

    getData = (e) => {
        e.preventDefault()

        this.getPokemon(e)
        this.getPokemonSpecies(e)
        this.openModal()
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
            pokemonId: this.minThreeDigits(response.id),
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
            const doubleDmgFromArr =
                typesResponse.damage_relations.double_damage_from

            for (let j = 0; j < doubleDmgFromArr.length; j++) {
                //check for duplicates
                if (!weaknesses.includes(doubleDmgFromArr[j].name)) {
                    weaknesses.push(doubleDmgFromArr[j].name)
                }
            }
        }

        //second set of loops to let 2nd array of types check against first for elimination of conflicting types
        //ex. charizard being fire type makes him take double damage from ground but also is flying type which
        //is immune to ground attacks
        for (let i = 0; i < response.types.length; i++) {
            const typesUrl = response.types[i].type.url //calling types url off pokemon api
            const typesApiCall = await fetch(typesUrl)
            const typesResponse = await typesApiCall.json()
            const halfDmgFromArr =
                typesResponse.damage_relations.half_damage_from
            const noDmgFromArr = typesResponse.damage_relations.no_damage_from

            for (let j = 0; j < halfDmgFromArr.length; j++) {
                if (weaknesses.includes(halfDmgFromArr[j].name)) {
                    const toBeRemoved = halfDmgFromArr[j].name
                    weaknesses = weaknesses.filter((i) => i !== toBeRemoved)
                }
            }
            for (let j = 0; j < noDmgFromArr.length; j++) {
                if (weaknesses.includes(noDmgFromArr[j].name)) {
                    const toBeRemoved = noDmgFromArr[j].name
                    weaknesses = weaknesses.filter((i) => i !== toBeRemoved)
                }
            }
        }

        this.setState({
            weakTo: weaknesses,
        })

        const previousPokeId = response.id - 1
        if (previousPokeId < 1) {
            this.setState({
                previousPokemonId: undefined,
                previousPokemonName: undefined,
            })
        } else {
            const PreviousApiCall = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${previousPokeId}`
            )
            const previousResponse = await PreviousApiCall.json()

            this.setState({
                previousPokemonId: this.minThreeDigits(previousResponse.id),
                previousPokemonName: previousResponse.name,
            })
        }

        const nextPokeId = response.id + 1
        const nextApiCall = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nextPokeId}`
        )
        const nextResponse = await nextApiCall.json()

        this.setState({
            nextPokemonId: this.minThreeDigits(nextResponse.id),
            nextPokemonName: nextResponse.name,
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
    }

    render() {
        return (
            <div>
                <h1>Pokemon</h1>
                <form onSubmit={this.getData}>
                    <input type="text" name="pokemonName" />
                    <button>Get Pokemon</button>
                </form>
                <ModalContainer
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                >
                    <Modal
                        state={this.state}
                        handleCloseModal={this.closeModal}
                    />
                </ModalContainer>
            </div>
        )
    }
}

export default App
