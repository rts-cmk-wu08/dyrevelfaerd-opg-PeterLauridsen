import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const allDataArray = [
    "http://localhost:4000/api/v1/adoptsections",
    "http://localhost:4000/api/v1/abouts",
    "http://localhost:4000/api/v1/animals",
    "http://localhost:4000/api/v1/assets",
    "http://localhost:4000/api/v1/volunteers",
  ];

  useEffect(() => {
    Promise.all(allDataArray.map((url) => fetch(url)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        console.log(data);
        setDataAdoptsections(data[0]);
        setDataAbout(data[1]);
        setDataAnimals(data[2]);
        setDataAssets(data[3]);
        setDataVolunteers(data[4]);
        setLoading(false);
      });
  }, []);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [dataAdoptsections, setDataAdoptsections] = useState();
  const [dataAbout, setDataAbout] = useState();
  const [dataAnimals, setDataAnimals] = useState();
  const [dataAssets, setDataAssets] = useState();
  const [dataVolunteers, setDataVolunteers] = useState();

  if (error) {
    return <div>Oops! Something went wrong!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!error && !loading) {
    return (
      <main>
        {/* {Header} */}
        <section
          className="bannerPicture"
          style={{ backgroundImage: `url(${dataAdoptsections[0].asset.url})` }}
        >
          <article className="whiteTextMod">
            <h1 className="whiteText whiteText-size-h1">{dataAdoptsections[0].title}</h1>
            <p className="whiteText whiteText-size-p">{dataAdoptsections[0].content}</p>
          </article>
        </section>
        {/* {Header} */}

        {/* {About} */}
        <section className="card-grid">
          {dataAbout.map((about) => {
            return (
              <article key={about.id}>
                <h2> {about.title}</h2>
                <p>{about.content}</p>
              </article>
            );
          })}
        </section>
        {/* {About} */}

        {/* {Frivilig} */}
        <section className="card-grid">
          {dataVolunteers.map((volunteer) => {
            return (
              <article key={volunteer.id} className="volunteerSection">
                <h2 className="cardPicTextHeader" >{volunteer.title}</h2>
                <img className="cardPic" src={volunteer.asset.url} alt={volunteer.title} />
                <p className="cardPicText" >{volunteer.content}</p>
              </article>
            );
          })}
        </section>
        {/* {Frivilig} */}

        {/* {Dyr i nød} */}
        <section
          className="bannerPicture"
          style={{ backgroundImage: `url(${dataAdoptsections[1].asset.url})` }}
        >
          <h1 className="whiteText">{dataAdoptsections[1].title}</h1>
          <p className="whiteText">{dataAdoptsections[1].content}</p>
        </section>
        {/* {Dyr i nød} */}

        {/* {Newsletter} */}
        <section>
          <form>
            <h2>asdasdd</h2>
            <p>asdasdasdasd</p>
            <input type="text" />
            <input type="text" />
            <button>asdasdsd</button>
          </form>
        </section>
        {/* {Newsletter} */}

        <section
          className="bannerPicture"
          style={{ backgroundImage: `url(${dataAdoptsections[2].asset.url})` }}
        >
          <h1 className="whiteText">{dataAdoptsections[2].title}</h1>
          <p className="whiteText">{dataAdoptsections[2].content}</p>
        </section>

        <section>
          <h1>Dyr hos os</h1>
          <p>{dataAnimals.length} Dyr</p>
          <div className="card-dyr">
            {dataAnimals.map((animal) => {
              return (
                <article key={animal.id}>
                  <h2>{animal.name}</h2>
                  <img src={animal.asset.url} alt={animal.title} />
                  <p>{animal.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <footer>
          <h1>Footer</h1>
        </footer>
      </main>
    );
  }
};

export default Home;
