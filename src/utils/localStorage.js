
const getDataFromLocalStorage=()=>{
  const getData=localStorage.getItem("read");
  if(getData){
    return JSON.parse(getData)
  }
  return []
}


const setDataToLocalStorage=data=>{
  const saveData=getDataFromLocalStorage();
  const isExists=saveData.find(item=>item.id===data.id);
  if(!isExists){
    saveData.push(data);
    localStorage.setItem("read", JSON.stringify(saveData))
  }
}



export {getDataFromLocalStorage, setDataToLocalStorage}