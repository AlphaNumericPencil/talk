const Contact = props =>(
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
                <div className="field">
                    <textarea name="message" id="message" rows="8" placeholder="Message"></textarea>
                </div>
            </div>
            <ul className="actions special">
                <li><input value="Send Message" class="button next" type="submit" /></li>
            </ul>
        </form>

    </div>
    </section>
    )

    export default Contact