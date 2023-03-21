import QuoteBox from "../components/QuoteBox";

function Home() {
  return (
    <div
      className="hero is-fullheight"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="hero-body">
        <QuoteBox />
      </div>
    </div>
  );
}

export default Home;
