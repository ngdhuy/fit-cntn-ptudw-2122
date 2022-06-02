import Item from "./Item";

export default function Products() {
  const lst = [
    {
      name: 'iPhone', 
      price: 1000
    },
    {
      name: 'iPad', 
      price: 2000
    },
    {
      name: 'macBook', 
      price: 3000
    },
    {
      name: 'AirPod', 
      price: 500
    }
  ];

  return(
    <div>
      {
        lst.map((item, index) =>
        <Item key={index} name={item.name} />
      )}
    </div>
  );
}