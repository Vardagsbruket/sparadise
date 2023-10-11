
const template = document.createElement('template');
template.innerHTML = `
    <header>
        <h1>Sparadise</h1>
        <h3>Relax at Sparadise spa</h3>
        <div >
            <nav >
                <ul class="container-nav">
                    <li><a href="./index.html"><button class="button home">Home</button></a></li> 
                    <li><a href="./about.html"><button class="button about">About</button></a></li>
                    <li><a href="./gallery.html"><button class="button gallery">Gallery</button></a></li>
                    <li><a href="./contact.html"><button class="button contact">Contact</button></a></li>
                </ul>
            </nav>
        </div>
    </header>
`
document.body.appendChild(template.content);