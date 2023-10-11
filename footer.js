const footer = document.createElement('template');
footer.innerHTML = `
    <footer>
        <div class="container-footer">
            <h3>Contact Sparadise</h3>
                <div class="adress">
                    <p>Naverlursgatan 10</p>
                    <p>Gothenburg 42144</p>
                </div>
                <div class="phone-email">
                    <p>Phone: (+46)707353566</p>
                    <p>Email: info@sparadise.com</p>
                </div>
        </div>
    </footer>
`
document.body.appendChild(footer.content);