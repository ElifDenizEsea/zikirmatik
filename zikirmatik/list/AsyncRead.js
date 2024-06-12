
import * as FileSystem from "expo-file-system";


  export async function read(){
    let filename = FileSystem.documentDirectory+"myZikrList.json";
  
    var jsonArray = [];
    try{
    const existing=await FileSystem.readAsStringAsync(filename);
    jsonArray=JSON.parse(existing);

}catch(e){
      console.log(e);
  
    }
    return Array.from(jsonArray); ;
  }
