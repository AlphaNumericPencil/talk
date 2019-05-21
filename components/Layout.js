import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import stylesheet from '../assets/sass/main.scss';

class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      };
      
    }
  

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading}`}>
                <Head>
                    <title>Talk With Us</title>
                    <meta name="description" content="Scream into the existential void. Drown in political terror. Two people who disagree about everything from Israel to healthcare find common ground." />
                    <link href="/static/css/skel.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    
                    <Footer />
                </div>
                {/* <Menu onToggleMenu={this.handleToggleMenu} /> */}

            </div>
        );
  }
}
        
  export default Layout