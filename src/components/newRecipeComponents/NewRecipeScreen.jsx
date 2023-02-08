import React, { useState } from "react";
import styles from "./newRecipeScreen.module.css";
import { Formik, useFormik, Field } from "formik";
import axios from "axios";
const NewRecipeScreen = () => {
  const [recipeName, setRecipeName] = useState("");
  const [meal, setMeal] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [sevres, setServes] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const addIngredients = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const Formik = useFormik({
    initialValues: {
      type: "",
      recipeName: "",
      imgUrl: "",
      prepTime: "",
      cookTime: "",
      serves: "",
      ingredients: [],
      instructions: "",
    },

    onSubmit: (values) => {
      values.ingredients = ingredients;

      axios
        .post(`https://recipes.devmountain.com/recipes`, values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally("request was sent");

      console.log(values);
    },
  });
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Tell us about your Recipe!</h1>
      <form action="submit" onSubmit={Formik.handleSubmit}>
        <div className={styles.subs}>
          <input
            name="recipeName"
            type="text"
            placeholder="  Name"
            className={styles.in}
            value={Formik.values.recipeName}
            onChange={Formik.handleChange}
          />
          <input
            name="imgUrl"
            type="text"
            placeholder="  Image URL"
            className={styles.in}
            value={Formik.values.imgUrl}
            onChange={Formik.handleChange}
          />
        </div>
        <div className={styles.buttons}>
          <p>
            <input
              type="radio"
              name="type"
              className={styles.rButtons}
              value="Cook"
              onChange={Formik.handleChange}
            />
            Cook
            <input
              type="radio"
              name="type"
              className={styles.rButtons}
              value="Bake"
              onChange={Formik.handleChange}
            />
            Bake
            <input
              type="radio"
              name="type"
              className={styles.rButtons}
              value="Drink"
              onChange={Formik.handleChange}
            />
            Drink
          </p>
        </div>
        <div className={styles.subs}>
          <input
            type="text"
            placeholder="  Prep Time"
            className={styles.in}
            name="prepTime"
            value={Formik.values.prepTime}
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            placeholder=" Cook Time"
            className={styles.in}
            name="cookTime"
            value={Formik.values.cookTime}
            onChange={Formik.handleChange}
          />
          <input
            type="text"
            placeholder="  Serves"
            className={styles.in}
            name="serves"
            value={Formik.values.serves}
            onChange={Formik.handleChange}
          />
        </div>
        <div className={styles.subs2}>
          <input
            type="text"
            placeholder="  Ingredients"
            className={styles.in}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="  Quantity"
            className={styles.in}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className={styles.alignButton}>
          <button
            onClick={addIngredients}
            type="button"
            className={styles.addButton}
          >
            Add Another
          </button>
        </div>

        <div>
          <textarea
            name="instructions"
            value={Formik.values.instructions}
            onChange={Formik.handleChange}
            id=""
            cols="30"
            rows="10"
            placeholder=" What are the Instructions?"
          ></textarea>
          <div>
            <div className={styles.alignButton}>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default NewRecipeScreen;
