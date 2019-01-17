// Import mongoose module
const mongoose = require('mongoose');

// Connect to MongoDB database 'mongo-exercises'
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error: Unable to connect to MongoDB", err));

// Create Course Schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Create a model from the Schema (Course is a model (Class))
const Course = mongoose.model('Course', courseSchema);

async function getCourseCount() {
    const count = await Course.find().count();
    console.log("No: of course: " + count);
}

async function getAllCourses() {
    
    const courses = await Course
        .find()
        .select('name author price -_id')
    
    console.log(courses);
}

// getAllCourses();


async function Query2(){
    const courses =await Course
    .find()
    .count()
   
    console.log(courses);
}
// Query2();

async function Query3(){
    const courses =await Course
    .find({isPublished:true})
     .count()
    console.log(courses);
}
//Query3();

async function Query4(){
    const courses =await Course
    
    .find({price: {$lte: 20}})
    .sort({price:1})   
    .select('name price -_id')
   
    console.log(courses);
}
// Query4();
async function Query5(){
    const courses =await Course
    
    .find({price: {$gte:10,$lte: 20}})
    .sort({price:-1})   
    .select('name price -_id')
   
    console.log(courses);
}
// Query5();
async function Query6(){
    const courses =await Course
    
    .find({price: {$exists:true}})
    .sort({price:1})   
    .select('name author price -_id')
    .limit(5)
   
    console.log(courses);
}
// Query6();
async function Query7(){
    const courses =await Course
    
    .find({price: {$exists:true}})
    .sort({price:-1})   
    .select('name author  price -_id')
    .limit(5)
   
    console.log(courses);
}
// Query7();

async function Query8(author_name){
    const courses =await Course
    .find({author:author_name})
    .select('name author isPublished -_id')
    return courses;
    // console.log(courses);
}

// Query8('Mubeen')
//     .then((courses) => console.log(courses));

    async function Query9(){
        const courses =await Course
        .find({tags:{$in :["embedded"]}})
        .select('name tags -_id')
       console.log(courses); 
    }   
    // Query9();


    async function Query10(){
        const courses =await Course
        .find({tags:{$nin :["embedded"]}})
        .select('name tags -_id')
       console.log(courses); 
    }   
    // Query10();

    async function Query11(){
        const courses =await Course
        .find({author :{$in : ['Jayakumar','Adil']}})
        .sort({name:1})
        // .or([{author :{$all : ['Jayakumar','Adil']}}])
        
       console.log(courses); 
    }   
    // Query11();
    

    async function Query12(){
        const courses =await Course
        .find({isPublished:true,tags:'backend'})
        .sort({name:1})
        .select('name author  -_id')
        
       console.log(courses); 
    }   
    // Query12();

    async function Query13(){
        const courses =await Course
        .find()
        .and([
             {isPublished:true},
             {tags: {$in: ['frontend','backend']}}
        ])
        .sort({price:-1})
        .select('name author -_id')
        
       console.log(courses); 
    }   
    // Query13();

    async function Query14(){
        const courses =await Course
        .find({isPublished:true})
        .or([{price : {$gte : 15}}, {name : /.*by.*/i}])
        
       console.log(courses); 
    }   
    Query14(); 

    async function Query15(){
        const courses =await Course
        .find({price : {$exists:false}})
       console.log(courses); 
    }   
    // Query15();
    
