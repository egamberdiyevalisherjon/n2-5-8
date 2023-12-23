import Disco from "../Components/Disco";

function Home() {
  return (
    <div className="container py-3">
      <h1>Welcome! We are happy to see you!</h1>
      <Disco age={16.9} />
    </div>
  );
}

export default Home;
