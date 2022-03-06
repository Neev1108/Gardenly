
import {useState} from 'react'


const AddForm = () => {
  var plant_types = ["Fruit", "Vegetable", "Flower", "Tree", "Succulents"];
  var plant_names = ["Rose", "Tulip", "Evergreen", "Aloe Vera"];


  const styles = {
    labels: "text-grape font-semibold ml-5 mr-2",
    button: "text-white bg-grape text-mint border-2 border-mint p-2 font-bold justify-center hover:-translate-y-1 hover:scale-30 ml-10 rounded-[24px]"
  }

  return (
    <div className="flex justify-between">
      <form>


        <label className={styles.labels} htmlFor="plant_type"> Plant Type: </label>
        <select id="plant_type" name="plant_type">
          {plant_types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label className={styles.labels} htmlFor="plant_name"> Plant Name: </label>
        <select id="plant_name" name="plant_name">
          {plant_names.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>

        <label className={styles.labels} htmlFor="plant_age"> Plant Age: </label>
        <input className="w-16" type="text" id="plant_age" name="plant_age"/> 

        <button className={styles.button} type="submit"> Add Item </button>





      </form>
    </div>
  );
};

export default AddForm;
