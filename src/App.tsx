import React,{useEffect,useState,useRef} from "react";
import "./App.css";
import Router from "./components/Router/";
// import AppConsts from "./library/Appconsts";
// import io, { Socket } from "socket.io-client";
import "@benovshe/sasslibrary/dist/index.css"
const App: React.FC = () => {
  // const [categories, setCategories] = useState([] as any[]);
  // const [newCategory, setNewCategory] = useState("");
  // const socket = useRef<Socket | null>(null);

  // useEffect(() => {
  //   socket.current = io(AppConsts.remoteSocketServiceBaseUrl as string);
  //   socket.current.on("categoryAdded", (category) => {
  //     setCategories((prevCategories) => [...prevCategories, category]);
  //   });

  //   return () => {
  //     socket.current!.disconnect();
  //   };
  // }, []);

  // const handleAddCategory = () => {
  //   if (socket.current) {
  //     socket.current.emit("addCategory", newCategory);
  //     setNewCategory("");
  //   }
  // };
  return <Router />;
};

export default App;
