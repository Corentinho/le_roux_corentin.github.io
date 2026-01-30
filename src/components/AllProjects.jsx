import React, { useState } from 'react';
import Navigation from './Navigation';
import Contact from './Contact';

const allProjects = [
    {
        id: 1,
        title: "Site Web Pokemon",
        category: "DÉVELOPPEMENT WEB",
        type: "dev",
        image: "/image/site_pokemon_accueil-modified.png",
        description: "Création d'un Pokédex interactif complet avec l'API PokeAPI.",
        tags: ["HTML5", "CSS3", "JS", "API"]
    },
    {
        id: 2,
        title: "Court Métrage",
        category: "AUDIOVISUEL",
        type: "av",
        image: "/image/film2-modified.png",
        description: "Réalisation d'un court métrage de 2 minutes sous contrainte de temps.",
        tags: ["Scénario", "Tournage", "Montage", "Sound Design"]
    },
    {
        id: 3,
        title: "Affiche de Film",
        category: "GRAPHISME",
        type: "graphisme",
        image: "/image/affiche-modified.png",
        description: "Création d'une affiche de cinéma réaliste.",
        tags: ["Affinity Photo", "Retouche", "Composition"]
    },
    // Mocking more projects for demonstration
    {
        id: 4,
        title: "Logo Entreprise",
        category: "GRAPHISME",
        type: "graphisme",
        image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Logo+Design", // Placeholder if no image
        description: "Design d'identité visuelle pour une start-up locale.",
        tags: ["Illustrator", "Branding"]
    },
    {
        id: 5,
        title: "Application React",
        category: "DÉVELOPPEMENT WEB",
        type: "dev",
        image: "https://via.placeholder.com/400x300/143068/ffffff?text=React+App",
        description: "Dashboard administratif développé en React.",
        tags: ["React", "Node.js", "Tailwind"]
    },
    {
        id: 6,
        title: "Interview Vidéo",
        category: "AUDIOVISUEL",
        type: "av",
        image: "https://via.placeholder.com/400x300/5a75a0/ffffff?text=Interview",
        description: "Captation et montage d'une interview institutionnelle.",
        tags: ["Premiere Pro", "Interview", "Éclairage"]
    }
];

function AllProjects() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? allProjects
        : allProjects.filter(p => p.type === filter);

    return (
        <>
            <Navigation />

            <div className="container-fluid" style={{ marginTop: '120px', minHeight: '100vh', paddingBottom: '60px' }}>
                <div className="text-center mb-5">
                    <h1 id="titre_projets">TOUTES MES RÉALISATIONS</h1>
                    <p className="text-muted fs-4">Une collection complète de mes travaux</p>
                </div>

                {/* Filters */}
                <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                    <button
                        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('all')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Tout
                    </button>
                    <button
                        className={`btn ${filter === 'dev' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('dev')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Développement Web
                    </button>
                    <button
                        className={`btn ${filter === 'av' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('av')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Audiovisuel
                    </button>
                    <button
                        className={`btn ${filter === 'graphisme' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('graphisme')}
                        style={{ borderRadius: '50px', padding: '10px 30px' }}
                    >
                        Graphisme
                    </button>
                </div>

                {/* Grid */}
                <div className="project-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-overlay" style={{ backgroundImage: project.image.startsWith('http') ? `url(${project.image})` : 'none', zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                            {/* Fix: background image needs to be on the card or a div behind overlay */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0
                            }}></div>

                            <div className="project-overlay" style={{ zIndex: 1 }}>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p className="text-white small mt-2">{project.description}</p>
                                    <div className="mt-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="badge bg-white text-dark me-1 opacity-75">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Contact />
        </>
    );
}

export default AllProjects;
