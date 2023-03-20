import './Presentation.css';

function Presentation() {
    return (
        <div className="presentation">
            <div className="presentation__center">
                <h1><img /* src={process.env.PUBLIC_URL + '/logo192.png'} */ src='https://portfolio.accesdenied.net/assets/ico/logo-perso.png' alt="" /> Bienvenu sur mon portfolio <img /* src={process.env.PUBLIC_URL + '/logo192.png'} */ src='https://portfolio.accesdenied.net/assets/ico/logo-perso.png' alt="" className='endImg'/></h1>
                <p>Ceci est un client web connecter à l'API du portfolio initial. Vous pouvez consulter le portfolio d'origine via le lien ci dessous:</p>
                <a className='presentation__buttonLink' href='https://portfolio.accesdenied.net' target="_blank" rel='noreferrer'>
                    <div className="backLayer"></div>
                    <div className="content">lien vers le portfolio initial</div>
                </a>
                <p>Vous pouvez me contacter via le formulaire de contact:</p>
                <a className='presentation__buttonLink' href='https://portfolio.accesdenied.net/pages/apropos.php' target="_blank" rel='noreferrer'>
                    <div className="backLayer"></div>
                    <div className="content">Contact</div>
                </a>
                <div className="presentation__center__layer"></div>
            </div>
        </div>
    );
}

export default Presentation;