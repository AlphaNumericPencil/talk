import Layout from '../components/Layout'
import Banner from '../components/Banner';

const Index = () => (
  <Layout>
    <Banner />
    <section className="main style1">
						<header className="small">
							<h2>Two American undergrads<br />
							battle it out in a winner-take-all format</h2>
							<p>We discuss all things political, from current events to political theory to culture. We frame our discussions with our intersecting conservative and leftist perspectives. </p>
						</header>
						<div className="image filtered" data-position="center">
							<img src="../static/images/favela.jpg" alt="" />
						</div>
						<div className="features">
							<section>
								<span className="icon fa-camera-retro major accent2"></span>
								<h3>Current Events</h3>
								<p>Stay up to date with analysis of breaking news across the globe.</p>
							</section>
							<section>
								<span className="icon fa-diamond major accent3"></span>
								<h3>Economic Theory</h3>
								<p>How will the global economy unfold as we venture into a new human era?</p>
							</section>
							<section>
								<span className="icon fa-tree major accent4"></span>
								<h3>The Enviornment</h3>
								<p>America remains one of the most dispassionate countries in the world in terms of enviornmental policy.</p>
							</section>
							<section>
								<span className="icon fa-rss major accent1"></span>
								<h3>Technology</h3>
								<p>We stand on the precipice of a technological revolution, and we both do computers!</p>
							</section>
							<section>
								<span className="icon fa-commenting-o major accent2"></span>
								<h3>Society</h3>
								<p>Why are we becoming more and more polarized?</p>
							</section>
							<section>
								<span className="icon fa-gavel major accent3"></span>
								<h3>Civics</h3>
								<p>What does it mean to be a citizen in the good year of 12019?</p>
							</section>
						</div>

					</section>
          {/* <Contact /> */}
  </Layout>
)

export default Index