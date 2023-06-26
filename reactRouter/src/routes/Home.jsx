import React, { useEffect, useState } from "react";
import Formu from "./Formulario/Formu";
import Select from "./Formulario/Select";
import Submit from "./Formulario/submit";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cardhome">
      <form>
        <div>
          <div className="homeform">
            <Formu type="text" text="nome" name="name" placeholder="" />

            <Formu type="text" text="salario" name="name" placeholder="" />
          </div>
        </div>

        <div>
          <Select name="category_id" text="categoria" options={categories} />
        </div>
        <div>
          <Submit text="criar" />
        </div>
      </form>
    </div>
  );
}

export default Home;
