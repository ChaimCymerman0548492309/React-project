import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to="/Trips">
                <button>מעבר לכל הטיולים
                </button>
            </Link>
            <Link to="/UserRegistration">
            <button>מעבר לרישום
            </button>
            </Link>
            <Link to="/UserLogin">
            <button>מעבר להתחברות
            </button>
            </Link>

        </div>
    )
}

export default Home
