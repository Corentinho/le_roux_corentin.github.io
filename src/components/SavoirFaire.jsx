import React from 'react';

function SavoirFaire() {
    return (
        <div className="container-fluid" id="savoir_faire">
            <h1 id="titre_savoir_faire">SAVOIR FAIRE</h1>
            <div className="bento-grid">
                <div className="bento-card" id="card_affinity_grid">
                    <div className="icon-wrapper"><img src="/image/affinity designer logo.png" alt="Affinity Designer" /></div>
                    <div className="text-wrapper">
                        <h3>Affinity Designer</h3>
                        <p>Création graphique</p>
                    </div>
                </div>
                <div className="bento-card" id="card_vscode_grid">
                    <div className="icon-wrapper"><img src="/image/visual_studio_code.png" alt="VS Code" /></div>
                    <div className="text-wrapper">
                        <h3>VS Code</h3>
                        <p>Développement Web</p>
                    </div>
                </div>
                <div className="bento-card" id="card_davinci_grid">
                    <div className="icon-wrapper"><img src="/image/DaVinci_Resolve_Studio.png" alt="DaVinci" /></div>
                    <div className="text-wrapper">
                        <h3>DaVinci Resolve</h3>
                        <p>Montage Vidéo</p>
                    </div>
                </div>
                <div className="bento-card" id="card_photo_grid">
                    <div className="icon-wrapper"><img src="/image/logo_affinity_photo.png" alt="Affinity Photo" /></div>
                    <div className="text-wrapper">
                        <h3>Affinity Photo</h3>
                        <p>Retouche photo</p>
                    </div>
                </div>
                <div className="bento-card wide" id="card_camera_grid">
                    <div className="icon-wrapper"><img src="/image/appareil_photo.png" alt="Photo" /></div>
                    <div className="text-wrapper">
                        <h3>Photographie</h3>
                        <p>Prise de vues</p>
                    </div>
                </div>
                <div className="bento-card wide" id="card_video_grid">
                    <div className="icon-wrapper"><i className="fa-solid fa-video fa-3x" style={{ color: 'white' }}></i></div>
                    <div className="text-wrapper">
                        <h3>Vidéo</h3>
                        <p>Prise de plans vidéo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavoirFaire;
