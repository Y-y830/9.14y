const fs = require('fs');
const path = require('path');
console.log("=====作业自检=====");
let ok = true;
if(fs.existsSync(path.join(__dirname,"../index.html"))){
    console.log("✅ index.html 存在");
}else{
    console.log("❌ 缺少index.html");ok=false;
}
if(fs.existsSync(path.join(__dirname,"../.github"))){
    console.log("✅ .github文件夹存在");
}else{
    console.log("❌ 缺少.github");ok=false;
}
if(ok) console.log("\n🎉全部检查通过！");
else console.log("\n⚠️有缺失文件");
