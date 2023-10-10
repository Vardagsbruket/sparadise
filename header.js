
const template = document.createElement('template');
template.innerHTML = `
    <header>
        <h1>Sparadise</h1>
        <h3>Relax at Sparadise spa</h3>
        <div >
            <nav >
                <ul class="container-nav">
                    <li class="home"><button class="button"><a href="./pages/index.html">Home</a></button></li> 
                    <li><button class="button about"><a href="./pages/about.html">About</a></button></li>
                    <li><button class="button gallery"><a href="./pages/gallery.html">Gallery</a></button></li>
                    <li><button class="button contact"><a href="./pages/contac.html">Contact</a></button></li>
                </ul>
            </nav>
        </div>
    </header>
`
document.body.appendChild(template.content);