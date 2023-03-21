import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { fetchQuote, IQuote } from "../Services/FetchQuote";
import { useAppStore } from "../store/appStore";

function QuoteBox() {
  const appStore = useAppStore();

  const [randomQuote, setRandomQuote] = useState<IQuote>();

  const quoteElement = useRef<HTMLDivElement>(null);

  const fetchRandomQuote = async () => {
    await fetchQuote().then((data) => {
      setRandomQuote(data);
    });

    appStore.newRandomColor();
  };

  const GenerateRandomQuote = () => {
    quoteElement.current?.classList.remove("animate__fadeIn");
    quoteElement.current?.classList.add("animate__fadeOut");

    setTimeout(() => {
      fetchRandomQuote();
      quoteElement.current?.classList.remove("animate__fadeOut");
      quoteElement.current?.classList.add("animate__fadeIn");
    }, 500);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="container is-is-align-content-center">
      <div
        className="box column container is-7 is-mobile is-flex is-flex-direction-column"
        id="quote-box"
      >
        <div ref={quoteElement} className="animate__animated animate__fadeIn">
          <div className="py-4 px-4">
            <div
              className="is-size-4 has-text-centered"
              style={{
                color: appStore.color,
              }}
              id="text"
            >
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2xl"
                style={{
                  color: appStore.color,
                  marginRight: 5,
                  marginBottom: 5,
                }}
              />
              {randomQuote?.content}
            </div>
            <br />
            <div
              className="has-text-right"
              style={{
                color: appStore.color,
              }}
              id="author"
            >
              - {randomQuote?.author}
            </div>
          </div>
        </div>
        <div className="columns mt-5 is-mobile">
          <div className="column is-narrow">
            <a
              title="Tweet this quote!"
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=YesnielDev&text=${randomQuote?.content}`}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size={"3x"}
                color={appStore.color}
              />
            </a>
          </div>
          <div className="column"></div>
          <div className="column is-narrow is-align-self-center">
            <button
              className="button"
              style={{
                color: "white",
                backgroundColor: appStore.color,
              }}
              id="new-quote"
              onClick={GenerateRandomQuote}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
