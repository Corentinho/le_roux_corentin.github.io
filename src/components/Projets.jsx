import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

function Projets() {
    return (
        <>
            <div className="container-fluid" id="projets_experiences">
                <h1 id="titre_projets">MES RÉALISATIONS</h1>

                <div className="project-grid">
                    <a href="javascript:void(0)" className="project-card" id="card_projets_pokemon" data-bs-toggle="modal" data-bs-target="#modalPokemon">
                        <div className="project-overlay">
                            <div className="project-info">
                                <span className="project-category">DÉVELOPPEMENT WEB</span>
                                <h3>Site Web Pokemon</h3>
                            </div>
                            <i className="fa-solid fa-arrow-right project-icon"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)" className="project-card" id="card_projets_film" data-bs-toggle="modal" data-bs-target="#modalFilm">
                        <div className="project-overlay">
                            <div className="project-info">
                                <span className="project-category">AUDIOVISUEL</span>
                                <h3>Court Métrage</h3>
                            </div>
                            <i className="fa-solid fa-play project-icon"></i>
                        </div>
                    </a>
                    <a href="javascript:void(0)" className="project-card" id="card_projets_affiche" data-bs-toggle="modal" data-bs-target="#modalAffiche">
                        <div className="project-overlay">
                            <div className="project-info">
                                <span className="project-category">GRAPHISME</span>
                                <h3>Affiche de Film</h3>
                            </div>
                            <i className="fa-solid fa-eye project-icon"></i>
                        </div>
                    </a>
                </div>

                <div className="see-more-container">
                    <Link to="/projets" className="btn-see-more">
                        VOIR TOUTES MES RÉALISATIONS <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>

            </div>

            {createPortal(
                <>
                    {/* Modal Pokemon */}
                    <div className="modal fade" id="modalPokemon">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Site Web Pokemon</h4>
                                    <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h5>Le Concept</h5>
                                    <p>
                                        Création d'un Pokédex interactif complet. L'objectif était de consommer une API externe (PokeAPI)
                                        pour afficher dynamiquement les statistiques, les types et les images de chaque Pokémon.
                                    </p>

                                    <h5>Technologies utilisées</h5>
                                    <div className="d-flex flex-wrap">
                                        <span className="tech-tag">HTML5</span>
                                        <span className="tech-tag">CSS3</span>
                                        <span className="tech-tag">JavaScript (ES6)</span>
                                        <span className="tech-tag">API Rest</span>
                                    </div>

                                    <div className="text-center">
                                        <a href="#" className="btn-modal-action">
                                            Voir le site <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Film */}
                    <div className="modal fade" id="modalFilm">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Court Métrage</h4>
                                    <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h5>Le Pitch</h5>
                                    <p>
                                        Réalisation d'un court métrage de 2 minutes sous contrainte de temps.
                                        Le défi était de raconter une histoire cohérente sans dialogue, en misant tout sur l'ambiance sonore et le
                                        cadrage.
                                    </p>

                                    <h5>Compétences</h5>
                                    <div className="d-flex flex-wrap">
                                        <span className="tech-tag">Scénarisation</span>
                                        <span className="tech-tag">Tournage (Sony A7 III)</span>
                                        <span className="tech-tag">DaVinci Resolve</span>
                                        <span className="tech-tag">Sound Design</span>
                                    </div>

                                    <div className="text-center">
                                        <a href="#" className="btn-modal-action">
                                            Regarder la vidéo <i className="fa-solid fa-play ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Modal Affiche */}
                    <div className="modal fade" id="modalAffiche">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Affiche de Film</h4>
                                    <button type="button" className="btn-close-custom" data-bs-dismiss="modal">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <h5>Le Concept</h5>
                                    <p>
                                        Création d'une affiche de cinéma réaliste respectant les codes graphiques de l'industrie (typographie,
                                        "billing block", hiérarchie visuelle).
                                        L'objectif était de créer une composition impactante à partir de plusieurs images sources.
                                    </p>

                                    <h5>Compétences & Outils</h5>
                                    <div className="d-flex flex-wrap">
                                        <span className="tech-tag">Affinity Photo</span>
                                        <span className="tech-tag">Détourage complexe</span>
                                        <span className="tech-tag">Color Grading (Étalonnage)</span>
                                        <span className="tech-tag">Typographie</span>
                                    </div>

                                    <div className="text-center">
                                        <a href="/image/affiche-modified.png" target="_blank" className="btn-modal-action">
                                            Voir l'affiche en grand <i className="fa-solid fa-eye ms-2"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>, document.body
            )}
        </>
    );
}

export default Projets;
