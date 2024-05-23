import React,{useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Add, Padding } from "@mui/icons-material";
import axios from "axios";
import { BASE_URL } from "../../config";
import ProdModal from "../../modals/ProdModal";







export default function ProdList() {
    const [Data,setData] = React.useState([])
    const getData = async ()=>{
        try {
            const res = await axios.get(`${BASE_URL}/getprod`)
            if(res.data.status){
                setData(res.data.data)
                return
            }
            console.log(res.data.message)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const [open, setOpen] = React.useState(false);
    
  return (
    <TableContainer component={Paper} sx={{p:2}}>
      <div className="flex justify-end py-3" onClick={()=>setOpen(true)}>
        <button className="bg-slate-700 p-2 rounded-lg">
          <Add sx={{color:"wheat"}}/>
        </button>
      </div>
      <ProdModal open={open} settings={setOpen} data={getData}/>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{fontSize:"2rem" ,fontWeight:"800"}}>img</TableCell>
            <TableCell sx={{fontSize:"2rem" ,fontWeight:"800"}}>Name</TableCell>
            <TableCell sx={{fontSize:"2rem" ,fontWeight:"800"}}>Price</TableCell>
            <TableCell sx={{fontSize:"2rem" ,fontWeight:"800"}}>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((obj,index) => (
            <TableRow
            
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 },textAlign:"center" }}
            >
              <TableCell component="th" scope="row">
                <img src={obj.img} width={80} />
              </TableCell>
              <TableCell >{obj.name}</TableCell>
              <TableCell >{obj.price+"$"}</TableCell>
              <TableCell >{obj.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
