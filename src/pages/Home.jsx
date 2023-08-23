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

  const [dataAdoptsections, setDataAdoptsections] = useState([]);
  const [dataAbout, setDataAbout] = useState([]);
  const [dataAnimals, setDataAnimals] = useState([]);
  const [dataAssets, setDataAssets] = useState([]);
  const [dataVolunteers, setDataVolunteers] = useState([]);

  if (error) {
    return <div>Oops! Something went wrong!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!error && !loading) {
    return (
      <main>
        <section
          className="heroPicture"
          style={{ backgroundImage: `url(${dataAdoptsections[0].asset.url})` }}
        >
          <h1>{dataAdoptsections[0].title}</h1>
          <p>{dataAdoptsections[0].content}</p>
        </section>

        <section>
          {dataAbout.map((about) => {
            return (
            
                <article key={about.id} className="aboutSection">
                  <h2> {about.title}</h2>
                  <p>{about.content}</p>
                </article>
              
            );
          })}
        </section>

        <section>
          {dataVolunteers.map((volunteer) => {
            return (
              <article key={volunteer.id} className="volunteerSection">
                <h2>{volunteer.title}</h2>
                <img src={volunteer.asset.url} alt={volunteer.title} />
                <p>{volunteer.content}</p>
              </article>
            );
          })}
        </section>
      </main>
    );
  }
};

export default Home;
