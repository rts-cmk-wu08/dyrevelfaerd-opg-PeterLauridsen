import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
                <h1>{dataAnimals.name}</h1>
                <p>{dataAnimals.description}</p>
                <img src={dataAnimals.asset.url} alt={dataAnimals.asset.altText} />
                <Link to="/"> Tilbage til forsiden</Link>;
            </main>
        );
    }

};

export default AnimalDetail;
