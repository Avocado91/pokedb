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
            <div className="new-pokemon new-pokemon--prev">
                <div className="wrapper--modal">
                    <div className="new-pokemon__text-container">
                        <p className="new-pokemon__icon">
                            <i className="fas fa-chevron-circle-left" />
                        </p>
                        <p className="new-pokemon__id">
                            {props.state.previousPokemonId}
                        </p>
                        <p className="new-pokemon__name">
                            {props.state.previousPokemonName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="new-pokemon new-pokemon--next">
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
            </div>
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
        </div>
    </div>
)

export default Modal
