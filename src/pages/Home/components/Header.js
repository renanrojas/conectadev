import React from 'react';

// eslint-disable-next-line
function Header(){
    return(
        <header className='header'>
                <div className='toolbar'>
                    <div>
                        <a href='/'>Conecta Dev</a>
                    </div>
                    <div>
                        <button> Novo post</button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </div>
            </header>
    )
}

export default Header;
