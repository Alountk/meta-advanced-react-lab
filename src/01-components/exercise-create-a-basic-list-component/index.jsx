import "./index.css";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function DessertsList({ data }) {
  if (!data) return null;
  const dessertsList = data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);
  return (
    <ul>
      {dessertsList.map((dessert) => (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}

export default App;
