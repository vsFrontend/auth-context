import NavBar from "../../components/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="d-flex align-items-center justify-content-center">
        <img src="/newYear.svg" alt="New Year" style={{ maxHeight: "80vh" }} />
      </div>
    </div>
  );
}

export default Home;
