const fs=require('fs')//module =--fs
const path=require('path')   //Module path


const dir_path =path.join(__dirname,"/AllFiles");
const file_path=dir_path+"/Info.txt"

// const file_path=dir_path+"/CybageInfo.txt"
console.log("Current Location:",__dirname);
console.log("Current Location after join:",dir_path);
console.log("File Path:",file_path);




// fs.writeFileSync
// (file_path,"Company Name:Cybage Software Pvt Ltd:")



// fs.readFile(file_path,'utf8',(err,data)=>{

//      if(!err) console.log(data);
//      else console.log("Error",err); //Buffer  ----add'utf8 as second argument to readFile


// })


//Append

// fs.appendFile(file_path,"Address: 25 West Avenue, Kalyani Nagar-411014",
// (err)=>{
//     if(!err) console.log("Appended");
// }

// )

//Rename

// fs.rename(file_path,
//     dir_path+"/CompanyDetails.txt",
//     function(err){
//       if (!err) console.log(file_path+"this file is renamed as :"+dir_path+"/CompanyDetails.txt");
//     } )

//Delete

// fs.unlink(dir_path+"/CybageInfo.txt",(err)=>{
//     if(!err) console.log("Deleted");
// })

//Create Dynamic File in directory

for(let i=0;i<5;i++)
{
    fs.writeFileSync(dir_path+"/Book_"+i+".txt","File System");
    fs.writeFileSync(dir_path+"Book_${i}.txt","File System");
}

fs.readdir(dir_path,(err, files)=>
{
    //console.log(files);  //array
    console.log("File Name:");
    files.forEach((fileName)=>
    {
        console.log(fileName);
    
    })
})