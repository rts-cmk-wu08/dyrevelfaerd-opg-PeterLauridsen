import { useEffect, useState } from "react";
import "./Home.css";
import { Navigate } from "react-router-dom";

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
        <header
          className="bannerPicture"
          style={{ backgroundImage: `url(${dataAdoptsections[0].asset.url})` }}
        >
          <article className="whiteTextMod">
            <h1 className="whiteText whiteText-size-h1">
              {dataAdoptsections[0].title}
            </h1>
            <p className="whiteText whiteText-size-p">
              {dataAdoptsections[0].content}
            </p>
          </article>
        </header>
        {/* {Header} */}

        {/* {About} */}
        <section className="card-grid aboutSize">
          {dataAbout.map((about) => {
            return (
              <article className="aboutArticle" key={about.id}>
                <h2 className="blueText aboutTextSize"> {about.title}</h2>
                <p>{about.content}</p>
              </article>
            );
          })}
        </section>
        {/* {About} */}

        {/* {Frivilig} */}
        <section className="card-grid bg-softBlue">
          {dataVolunteers.map((volunteer) => {
            return (
              <article key={volunteer.id} className="volunteerSection">
                <div className="cardPicTextHeader">
                  <h2>{volunteer.title}</h2>
                </div>
                <div
                  className="picTextCard {"
                >
                  <img
                    className="cardPic"
                    src={volunteer.asset.url}
                    alt={volunteer.title}
                  />
                  <p className="cardPicText">{volunteer.content}</p>
                </div>
                <div className="textBottomCard">
                  <p>{volunteer.extra}</p>
                </div>
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
          <h1 className="whiteText whiteText-size-h1">
            {dataAdoptsections[1].title}
          </h1>
          <p className="whiteText whiteText-size-p">
            {dataAdoptsections[1].content}
          </p>
        </section>
        {/* {Dyr i nød} */}

        {/* {Newsletter} */}
        <section className="bg-softBlue newsletterFlex">
          <h1 className="blueText">Tilmeld vores nyhedsbrev</h1>
          <p>
            Få inspiration og nyheder om dyrevelfærd og vores arbejde. direkte i
            din inbakke.
          </p>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Navn" />
            <button>Tilmeld</button>
          </form>
        </section>
        {/* {Newsletter} */}

        {/* {Adopter et dyr} */}
        <section
          className="bannerPicture"
          style={{ backgroundImage: `url(${dataAdoptsections[2].asset.url})` }}
        >
          <h1 className="whiteText whiteText-size-h1">
            {dataAdoptsections[2].title}
          </h1>
          <p className="whiteText whiteText-size-p">
            {dataAdoptsections[2].content}
          </p>
        </section>
        {/* {Adopter et dyr} */}

        {/* {Dyr hos os} */}
        <section>
          <div className="dyrHosOsText">
            <h1 className="blueText">Dyr hos os</h1>
            <p>{dataAnimals.length} dyr</p>
          </div>
          <div className="gridContainer">
            {dataAnimals.map((animal) => {
              return (
                <article className="card-dyr" key={animal.id}>
                  <div>
                    <img
                      className="card-dyr-pic"
                      style={{ borderRadius: "0.2rem", objectFit: "cover" }}
                      src={animal.asset.url}
                      alt={animal.title}
                    />
                  </div>
                  <span className="centerAnimalText">
                    <h2 className="animalName">{animal.name}</h2>
                    <p className="animalDescription">{animal.description}</p>
                  </span>
                </article>
              );
            })}
          </div>
        </section>
        {/* {Dyr hos os} */}
      </main>
    );
  }
};

export default Home;
