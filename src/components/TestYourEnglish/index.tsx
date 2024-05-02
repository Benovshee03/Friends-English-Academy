import React,{useState,useEffect} from 'react'
import hand from "../../images/Hands Pinches.png"
const Index = () => {
  const [responsive, setResponsive] = useState(window.innerWidth > 480);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='container-fluid d-f fd-column align-items-center' style={{height:"70vh"}}>
      <div style={{height:"52px"}} className={responsive? 'w-100 bg-primary text-light d-f align-items-center justify-content-center fs-lg fw-600 ': 'w-100 bg-primary text-light d-f align-items-center justify-content-center fs-20 fw-600 '}>Level Choosing</div>
      <div><img src={hand} alt="hand" /></div>
      <div className={responsive ? "fs-40 fw-700 mt-2 mb-2" : "fs-lg fw-600 mt-1 mb-1"}>Choose your age</div>
      <div className={responsive ? 'w-30 d-f justify-content-sb' : 'w-60 d-f fd-column align-items-center g-3'}>
        <button  className={responsive ? ' ageButton fs-lg' : 'ageButtonRes fs-md'}>3-7</button>
        <button className={responsive ? ' ageButton fs-lg' : 'ageButtonRes fs-md'}>7-14</button>
        <button className={responsive ? ' ageButton fs-lg' : 'ageButtonRes fs-md'}>14+</button>
      </div>
    </div>
  )
}

export default Index