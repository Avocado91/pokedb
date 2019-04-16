import React from "react"

const Modal = (props) => (
    <div className="modal">
        <button
            className="button button--close-modal"
            onClick={props.handleCloseModal}
        >
            <i className="fas fa-times" />
        </button>
        <div className="new-pokemon__container">
            <button
                className="new-pokemon new-pokemon--prev"
                onClick={props.handleGetData}
                data-name={props.state.previousPokemonName}
            >
                <div className="wrapper--modal">
                    <div className="new-pokemon__text-container">
                        <p className="new-pokemon__icon">
                            <i className="fas fa-chevron-circle-left" />
                        </p>
                        <p className="new-pokemon__id">
                            {props.state.previousPokemonId}
                        </p>
                        <p className="new-pokemon__name" name="pokemon">
                            {props.state.previousPokemonName}
                        </p>
                    </div>
                </div>
            </button>

            <button
                className="new-pokemon new-pokemon--next"
                onClick={props.handleGetData}
                data-name={props.state.nextPokemonName}
            >
                <div className="wrapper--modal">
                    <div className="new-pokemon__text-container new-pokemon__text-container--flex-rtl">
                        <p className="new-pokemon__icon">
                            <i className="fas fa-chevron-circle-right" />
                        </p>
                        <p className="new-pokemon__id">
                            {props.state.nextPokemonId}
                        </p>
                        <p className="new-pokemon__name">
                            {props.state.nextPokemonName}
                        </p>
                    </div>
                </div>
            </button>
        </div>
        <div className="wrapper--modal">
            <div className="modal__header">
                <p className="modal__name">{props.state.pokemonName}</p>
                <p className="modal__id">{props.state.pokemonId}</p>
            </div>
            <div className="layout--two-column">
                <div className="modal__img-container">
                    <img
                        className="modal__img"
                        src={props.state.pokemonSprite}
                        alt={props.state.pokemonName}
                    />
                </div>

                <div className="modal__text-container">
                    <p className="modal__flavor-text">
                        {props.state.pokemonDescription}
                    </p>
                    <div className="stats">
                        <div className="wrapper--modal wrapper--stats">
                            <div className="stats__stat-container">
                                <p className="stats__stat-name">Height</p>
                                <p className="stats__stat-value">
                                    {props.state.pokemonStats.height}
                                </p>
                            </div>
                            <div className="stats__stat-container">
                                <p className="stats__stat-name">Weight</p>
                                <p className="stats__stat-value">
                                    {props.state.pokemonStats.weight}
                                </p>
                            </div>
                            <div className="stats__stat-container">
                                <p className="stats__stat-name">Habitat</p>
                                <p className="stats__stat-value">
                                    {props.state.pokemonStats.habitat}
                                </p>
                            </div>
                            <div className="stats__stat-container">
                                <p className="stats__stat-name">
                                    Strongest Stat
                                </p>
                                <p className="stats__stat-value">
                                    {props.state.pokemonStats.strongestStat}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout--two-column">
                <div className="type">
                    <h1>Type</h1>
                    <div className="type__container">
                        {props.state.pokemonTypes.map((i) => {
                            if (i.type.name === "bug") {
                                return (
                                    <div className="type__background type__background--bug">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "dark") {
                                return (
                                    <div className="type__background type__background--dark">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "dragon") {
                                return (
                                    <div className="type__background type__background--dragon">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "electric") {
                                return (
                                    <div className="type__background type__background--electric">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "fairy") {
                                return (
                                    <div className="type__background type__background--fairy">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "fighting") {
                                return (
                                    <div className="type__background type__background--fighting">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "fire") {
                                return (
                                    <div className="type__background type__background--fire">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "flying") {
                                return (
                                    <div className="type__background type__background--flying">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "ghost") {
                                return (
                                    <div className="type__background type__background--ghost">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "grass") {
                                return (
                                    <div className="type__background type__background--grass">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "ground") {
                                return (
                                    <div className="type__background type__background--ground">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "ice") {
                                return (
                                    <div className="type__background type__background--ice">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "normal") {
                                return (
                                    <div className="type__background type__background--normal">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "poison") {
                                return (
                                    <div className="type__background type__background--poison">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "psychic") {
                                return (
                                    <div className="type__background type__background--psychic">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "rock") {
                                return (
                                    <div className="type__background type__background--rock">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "steel") {
                                return (
                                    <div className="type__background type__background--steel">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            } else if (i.type.name === "water") {
                                return (
                                    <div className="type__background type__background--water">
                                        <p className="type__text" key={i.slot}>
                                            {i.type.name}
                                        </p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="type">
                    <h1>Weaknesses</h1>
                    <div className="type__container">
                        {props.state.weakTo.map((weakness) => {
                            if (weakness === "bug") {
                                return (
                                    <div className="type__background type__background--bug">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "dark") {
                                return (
                                    <div className="type__background type__background--dark">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "dragon") {
                                return (
                                    <div className="type__background type__background--dragon">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "electric") {
                                return (
                                    <div className="type__background type__background--electric">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "fairy") {
                                return (
                                    <div className="type__background type__background--fairy">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "fighting") {
                                return (
                                    <div className="type__background type__background--fighting">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "fire") {
                                return (
                                    <div className="type__background type__background--fire">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "flying") {
                                return (
                                    <div className="type__background type__background--flying">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "ghost") {
                                return (
                                    <div className="type__background type__background--ghost">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "grass") {
                                return (
                                    <div className="type__background type__background--grass">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "ground") {
                                return (
                                    <div className="type__background type__background--ground">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "ice") {
                                return (
                                    <div className="type__background type__background--ice">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "normal") {
                                return (
                                    <div className="type__background type__background--normal">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "poison") {
                                return (
                                    <div className="type__background type__background--poison">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "psychic") {
                                return (
                                    <div className="type__background type__background--psychic">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "rock") {
                                return (
                                    <div className="type__background type__background--rock">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "steel") {
                                return (
                                    <div className="type__background type__background--steel">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            } else if (weakness === "water") {
                                return (
                                    <div className="type__background type__background--water">
                                        <p className="type__text">{weakness}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Modal
