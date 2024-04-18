import "./Styles/Header.css"

let Header = ()=>
{
    return(
        <>
            <div className="header-box">
                <div className="title">
                    <h1>FGB Game Picker</h1>
                </div>
                <div className="nav">
                    <button>About</button><button>Full List</button><button>Best Match</button>
                </div>
            </div>
        </>
    )
}

export default Header;