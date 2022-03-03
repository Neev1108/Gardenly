import * as React from "react";

const GardenTable = (props) => {
  // Some fake data

  const headers = ["Plant Type", "Plant Name", "Plant Age"];
  const data = [{Type: "Flower", Name: "Rose", Age: "10"}]

  return (
    <div className="flex flex-col">
      <h1 className="justify-center m-auto text-grape font-semibold mt-3 text-[24px] underline">
        {" "}
        Portfolio{" "}
      </h1>

      <div
        id="gardenTable"
        className="m-auto overflow-y-scroll overflow-x-scroll h-80 mt-9"
      >
        <table>
          <tr>
            {headers.map((header) => (
              <th> {header} </th>
            ))}
          </tr>
          <tr>
            {data.map((plant) => {
              <>
              <td> {plant.Type} </td>
              <td> {plant.Name} </td>
              <td> {plant.Age} </td>
              </>
            })}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default GardenTable;
