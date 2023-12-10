import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

   const links=[
    "Home",
    "Products",
    "About Us",
    "Contact Us"
   ]
  //js + xml  
  return (
    <div className="App">
     <Header logo="Brand"  links={links}/>
     <Footer links={links}/>
    </div>
 
  );

}

export default App;


// function sum(x,y) {
//   return x+y
// }



// sum (10, 30)