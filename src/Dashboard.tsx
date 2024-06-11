import { useEffect, useState } from "react";
import './Dashboard.css'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Input } from "@mui/material";
import axios from "axios";
import { useMsal } from "@azure/msal-react";


export default function App() {
  const {instance,accounts}=useMsal();
  const [attachments,setAttachments]=useState<any[]>([]);
 
const UploadFiles=()=>{
  console.log(attachments[0])
  const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result;
      instance.acquireTokenSilent({
        scopes: ["Files.ReadWrite.All"],
        account: accounts[0],
      }).then((res) => {
        console.log(res.accessToken);
        console.log(content)
        axios.put(`
        https://graph.microsoft.com/v1.0/me/drive/root:/FolderA/${attachments[0].name}:/content`,content, {
          headers: {
            "Authorization": "Bearer " + res.accessToken,
            "Content-Type": "text/plain"
          }
        }).catch((err)=>console.log(err))
      })
    };

    reader.readAsArrayBuffer(attachments[0]);
 
} 
const handleLogout=()=>{
  instance.logout().then(()=>{})
}

  return (
<>
    <input type="file" onChange={(e)=>setAttachments([e.target.files?e.target.files[0]:{}])}/>
    <Button onClick={()=>UploadFiles()}>Submit</Button>
    <Button onClick={()=>handleLogout()}>Log Out</Button>
  </>
   
  );
}
