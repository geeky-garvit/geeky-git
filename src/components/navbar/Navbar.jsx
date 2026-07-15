import { useState } from "react";
import "./Navbar.css";
function Navbar({ onSearch }) {
    const [move,setMove]=useState(false);
    const [search,setSearch]=useState("");
    const [compare,setCompare]=useState("");
    const [comparebtn,setcomparebtn]=useState(false);

   
    return (
        <>
        <nav className={move ? "navbar moved" : "navbar"}>
        <logo className="Logo"> &</logo>
        <div className="search" >
        <input type="text"  placeholder="Search..." value={search} className={comparebtn ?"searchinput compare" : "searchinput"} onChange={(e) => setSearch(e.target.value)} />
        
        </div>
        <button onClick={() => {setMove(!move);  onSearch(search) }}>Search</button>

        <input className={comparebtn ? "compareuser show" : "compareuser"} type="text" placeholder="compare user" value={compare} onChange={(e) => setCompare(e.target.value)}/>
        <button className="compare" onClick={() => compare=="" ? setcomparebtn(!comparebtn) : onCompare(compare)}>Compare</button>
        </nav>
    </>
)
}
export default Navbar;