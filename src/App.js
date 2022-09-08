import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import {  AnimatePresence } from "framer-motion";
import { Createcontainer,Header,Maincontainer } from "./components";
import { useStatevalue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";



const App = () => {
  const [{ foodItems }, dispatch] = useStatevalue();

  const fetchFoodItems = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);



  return (
      <AnimatePresence exitBeforeEnter>  
    <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header/>
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Routes>
                <Route path='/*' element={<Maincontainer />}/>
                <Route path='/createItem' element={<Createcontainer />}/>
            </Routes>
        </main>
        </div>
        </AnimatePresence>
  )
}

export default App