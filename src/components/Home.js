import react from "react";
import { Component } from "react";
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div>
                <div className="top">
                    <h1>Que veut dire MOOC ou Massive Online Open Course ?</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="#About" className="abboutButton">À propos du MOOC</a>
                </div>
                <div id="About" className="About">
                    <div className="image">
                        <img src={require('../images/learn_img.jpg')}></img>
                    </div>
                    <div className="info">
                        <p>Le MOOC (Massive Open online Course) est un nouveau format pédagogique qui
                            consiste à mettre en libre accès des formations en ligne. Ces dernières sont la plupart du temps gratuites.</p>
                        <p>À l’instar d’une formation classique en e-learning, le MOOC est une technique d’apprentissage numérique qui
                            met en scène un ou plusieurs intervenants professionnels. Ces formations sont cependant ouvertes à tous,
                            contrairement à des formations à distance classiques qui sont limitées à un certain nombre d’apprenants.
                            Les apprenants ont alors accès à plusieurs cours en ligne,mais aussi à différents contenus pédagogiques
                            interactifs variés, à l’instar de vidéos ou de quizz.</p>
                        <p>
                            Soulignons également que l’obtention d’un diplôme ou d’une certification est souvent considérée comme un service
                            supplémentaire que l’apprenant devra payer.
                        </p>
                    </div>
                    <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kJSQ_5HPMrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;