import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2023, 6, 20),
      description: "Курси React Pro",
      amount: 11.33,
    },
    {
      date: new Date(2023, 5, 20),
      description: "Курточка Ricardo",
      amount: 49.99,
    },
    {
      date: new Date(2023, 4, 20),
      description: "Кросівки TommyJeans",
      amount: 90.99,
    },
  ];
  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
