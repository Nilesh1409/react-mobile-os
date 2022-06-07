import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading.js"
import Cart from './components/Cart';




function App() {
  let data = [
    {id : 1,
      heading : "Mobile Operating System",
    list : [
      {id : 101, title : "Android" },
      {id : 102, title : "Blackberry" },
      {id : 103, title : "iPhone" },
      {id : 104, title : "Windows Phone" }
      ]
  },
    {id : 2,
      heading : "Mobile Mannufactures",
      list : [
        {id : 201, title : "Apple" },
        {id : 202, title : "Sumsung" },
        {id : 203, title : "HTC" },
        {id : 204, title : "Micromax" }
        ]
      }
  ]

  return (
    <div>
      {
        data.map((item) => (
          <Cart {...item}/>
        ))
      }
    </div>
  );
}

export default App;
