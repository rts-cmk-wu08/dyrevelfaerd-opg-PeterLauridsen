import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./AnimalDetail.css";

const AnimalDetail = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataAnimals, setDataAnimals] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/animals/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataAnimals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Oops! Something went wrong!</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!error && !loading) {
    return (
      <main>
        <div className="containerAnimal">
          <h1>{dataAnimals.name}</h1>
          <p className="animalDescriptionDetail">{dataAnimals.description}</p>
          <img
            src={dataAnimals.asset.url}
            alt={dataAnimals.asset.altText}
            style={{
              width: "30rem",
              height: "auto",
              borderRadius: "0.2rem",
            }}
          />
          <Link to="/"> Tilbage til forsiden</Link>
        </div>
      </main>
    );
  }
};

export default AnimalDetail;
