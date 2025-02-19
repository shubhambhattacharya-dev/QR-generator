import inquirer from 'inquirer';
import qr from "qr-image"
import fs, { writeFile } from 'fs';



inquirer.prompt([{
    message:"Enter your URL/LINK:",
    name:"url",
}
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_imge.png'));

    fs.writeFile("URL.txt",url, (err)=>{
        if(err) throw err;
        console.log("File created");
    })
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });