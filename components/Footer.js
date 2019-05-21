const Footer = props =>(
    <section className="main style2">
    <header className="small">
        <h2>Got a Topic?</h2>
        <p>Get in touch with us to submit a suggestion. Make sure to provide a video or article link if you have a specific icon or take that you want us to discuss.</p>
    </header>
    <div className="inner special medium">
        <form action="#" method="post">
            <div className="fields">
                <div className="field half">
                    <input name="name" id="name" placeholder="Name" type="text" />
                </div>
                <div className="field half">
                    <input name="email" id="email" placeholder="Email" type="email" />
                </div>
                <div class="field">
                    <textarea name="message" id="message" rows="8" placeholder="Message"></textarea>
                </div>
            </div>
            <ul className="actions special">
                <li><input value="Send Message" class="button next" type="submit" /></li>
            </ul>
        </form>

    </div>
    <footer>
        <ul className="icons">
            <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon alt fa-phone"><span class="label">Phone</span></a></li>
            <li><a href="#" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
        </ul>
    </footer>
</section>




)

export default Footer