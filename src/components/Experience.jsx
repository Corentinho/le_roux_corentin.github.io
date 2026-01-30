import React from 'react';

function Experience() {
    return (
        <div className="container_experience">
            <div className="heading">
                <h1 id="titre_experiences">EXPERIENCES<br />PROFESSIONNELLES</h1>
            </div>
            <div className="experiences">
                <div className="experience-card">
                    <div className="date-badge">2019</div>
                    <h2 className="experience-title">Stage 3ème - Volkswagen</h2>
                    <p className="experience-description">Découverte des métiers de la mécanique automobile.</p>
                </div>
                <div className="experience-card">
                    <div className="date-badge">2024</div>
                    <h2 className="experience-title">Emploi saisonnier - Agent de courrier</h2>
                    <p className="experience-description">Tri et livraison de colis à La Poste. Travail de nuit et d'équipe.</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
