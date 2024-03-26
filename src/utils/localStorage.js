import { toast } from "react-toastify";

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
    localStorage.setItem("read", JSON.stringify(saveData));
    toast.success('Added Successfully to read')
  }
  else{
    toast.warning('You have already added to read')
  }
}

const getWishlistFromLocalStorage=()=>{
  const getData=localStorage.getItem("wishlist");
  if(getData){
    return JSON.parse(getData);
    
  }
  return []
}

const setWishlistToLocalStorage=data=>{
  const saveData=getDataFromLocalStorage();
  const saveWishData=getWishlistFromLocalStorage()
  const isExists=saveData?.find(item=>item.id===data.id);
  const isWished=saveWishData?.find(item=>item.id===data.id);
  if(isExists){
   toast.warning('You have already added to read')
  }
  else if(!isExists && !isWished){
    saveWishData.push(data);
    localStorage.setItem("wishlist", JSON.stringify(saveWishData))
    toast.success('Added Successfully to wishlist')
  }
  else if(isWished){
    toast.warning('You have already added to Wishlist')
  }
}

export {getDataFromLocalStorage, setDataToLocalStorage, setWishlistToLocalStorage, getWishlistFromLocalStorage}