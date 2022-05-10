import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Rules({ closeRules }) {
  const dots = true;
  return (
    <div className="absolute inset-0 z-20 w-screen h-screen bg-gray-900/75 flex justify-center items-center">
      {/* rulesContainer */}
      <div className="relative h-96 w-96 flex flex-col justify-between bg-slate-50 rounded-lg p-8">
        <div className="absolute top-2.5 right-0 flex justify-self-start self-end">
          <button
            onClick={() => closeRules(false)}
            type="button"
            className="text-orange-400 text-4xl font-bold py-2 px-4 drop-shadow-md"
          >
            &times;
          </button>
        </div>
        {/* rulesHeader */}
        <div className="text-cyan-700 text-center text-2xl font-bold drop-shadow-md">
          <h3>COMMENT JOUER</h3>
        </div>
        <div className="drop-shadow-md">
          <Slider
            speed={200}
            slidesToShow={1}
            slidesToScroll={1}
            dots={dots}
            arrows={dots}
          >
            <div>
              <h3 className="text-orange-400 text-center text-2xl font-bold mb-3">
                But du jeu
              </h3>
              <p className="text-center mb-7">
                Vous avez un film de départ et un film d&apos;arrivée. Le but du
                jeu est de retrouver le film d&apos;arrivée en passant par les
                acteurs qui jouent dans ces films.
              </p>
            </div>
            <div>
              <h3 className="text-orange-400 text-center text-2xl font-bold mb-3">
                Vous n&apos;avez rien compris ?
              </h3>
              <p className="text-center mb-7">
                C&apos;est très simple ! Quelques précisions : nous partons
                d&apos;un film, et en cliquant sur un acteur qui a joué dans ce
                film, nous verrons les films dans lesquels il a joué.
              </p>
            </div>
            <div>
              <h3 className="text-orange-400 text-center text-2xl font-bold mb-3">
                Exemple :
              </h3>
              <p className="text-center">
                Nous voulons aller du film &quot;Fight Club&quot; au film
                &quot;Le Masque de Zorro&quot;.
                <br /> &quot;Fight Club&quot; &#x27a1;&#xfe0f; Brad Pitt
                &#x27a1;&#xfe0f; &quot;Entretien avec un vampire&quot;
                &#x27a1;&#xfe0f; Antonio Banderas &#x27a1;&#xfe0f; &quot;Le
                Masque de Zorro&quot;
              </p>
            </div>
            <div>
              {" "}
              <h3 className="text-orange-400 text-center text-2xl font-bold mb-3">
                Toujours rien compris ?
              </h3>
              <p className="text-center mt-3">
                Il suffit de jouer, vous verrez, tout devient clair une fois que
                vous cliquez sur un premier acteur.
              </p>
            </div>
            <h3 className="text-orange-400 text-center text-2xl font-bold mt-9">
              Bon Movie Wars !
            </h3>
          </Slider>
        </div>
        {/* rulesFooter */}
        <div className="flex justify-center">
          <button
            onClick={() => closeRules(false)}
            type="button"
            className="bg-orange-400 shadow-lg text-white font-bold py-2 px-4 mb-2 rounded-full hover:bg-orange-700"
          >
            Compris !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
