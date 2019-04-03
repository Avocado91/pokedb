import React from "react"

const Modal = (props) => (
    <div className="modal">
        <button onClick={props.handleCloseModal}>X</button>
        <div>
            <p>Previous Name: {props.state.previousPokemonName}</p>
            <p>Previous Id: {props.state.previousPokemonId}</p>
            <p>Next Name: {props.state.nextPokemonName}</p>
            <p>Next Id: {props.state.nextPokemonId}</p>
        </div>
        <p>{props.state.pokemonName}</p>
        <p>{props.state.pokemonId}</p>
        <img src={props.state.pokemonSprite} alt={props.state.pokemonName} />
        <p>{props.state.pokemonDescription}</p>
        <div>
            <h1>Types</h1>
            {props.state.pokemonTypes.map((i) => {
                return <p key={i.slot}>{i.type.name}</p>
            })}
            <h1>Weak To</h1>
            {props.state.weakTo.map((weakness) => {
                return <p>{weakness}</p>
            })}
        </div>
        <h1>Pokemon Stats</h1>
        <p>Height: {props.state.pokemonStats.height}</p>
        <p>Weight: {props.state.pokemonStats.weight}</p>
        <p>Habitat: {props.state.pokemonStats.habitat}</p>
        <p>Strongest Stat: {props.state.pokemonStats.strongestStat}</p>
    </div>
)

export default Modal
