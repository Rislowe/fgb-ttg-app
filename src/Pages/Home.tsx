
import "./Styles/Home.css"

const Home = ()=>
{
    const gameName: string = "Shipwreck Arcana";
    const playerCount: string = "2-5";
    const gameDescription: string = "Trapped in a drowned world, you and your allies are doomed -- or are you? Using a mystical deck and a healthy dose of logic, you can predict each others' fates and escape unscathed.";
    return(
        <>
            <div className="banner-box">
                <div className="container">
                    <div className="title">
                        <h2>{String.fromCharCode(9824)} Featured Games {String.fromCharCode(9824)}</h2>
                    </div>
                    <div className="banner">
                        <button className="left">{String.fromCharCode(9664)}</button>
                        <img
                            src="https://cf.geekdo-images.com/E55TC79XS_cf3Gx47IuLlg__imagepage/img/5ks4207AWb4ILQRWSXDx_W2i6jc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3438448.png"
                            alt="Game of the Month: Shipwreck Arcana"
                        />
                        <button className="right">{String.fromCharCode(9654)}</button>
                    </div>
                    <div className="game-info">
                        <div className="game-info-bg"></div>
                        <h2 className="game-title">{gameName}</h2>
                        <div className="game-info-text">
                            <p className="info-title">Players Content:</p>
                            <p className="info-content">{playerCount}</p>
                            <p className="info-title">Description:</p>
                            <p className="info-content">{gameDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;