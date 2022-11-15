var express = require('express');
var router = express.Router();


let courses = [
                {id: 1, category: "Personal-Development", course_title: "How to Develop Growth Mindset", course_instructor: "Jim Carn", duration: "27:25", photo: "images/epd-course1.png"},
                {id: 2, category: "Personal-Development", course_title: "How to Succeed in Rewiring Your Mind", course_instructor: "Carlo Denz", duration: "28:45", photo: "images/epd-course2.png"},
                {id: 3, category: "Personal-Development", course_title: "How to Build Confidence", course_instructor: "John Lewis", duration: "32:15", photo: "images/epd-course3.png"},
                {id: 4, category: "Personal-Development", course_title: "How To Develop An Attractive Personality", course_instructor: "Robert Dy", duration: "40:16", photo: "images/epd-course4.png"},
                {id: 5, category: "Personal-Development", course_title: "Knowing Yourself", course_instructor: "Carlos Ruiz", duration: "35:00", photo: "images/epd-course5.png"},
                {id: 6, category: "Personal-Development", course_title: "Get Along With Others", course_instructor: "James Curtney", duration: "38:25", photo: "images/epd-course6.png"},
                {id: 7, category: "Personal-Development", course_title: "Become More Proactive", course_instructor: "Pablo Salazar", duration: "45:15", photo: "images/epd-course7.png"},
                {id: 8, category: "Personal-Development", course_title: "Master The Art Of Conflict Resolution", course_instructor: "Rex Veloso", duration: "38:10", photo: "images/epd-course8.png"},
                {id: 9, category: "Personal-Development", course_title: "Increase Your Willpower", course_instructor: "Greg Sy", duration: "26:35", photo: "images/epd-course9.png"},
                {id: 10, category: "Personal-Development", course_title: "Embrace Emphathy", course_instructor: "Jorge McCurry", duration: "43:12", photo: "images/epd-course10.png"},
                {id: 11, category: "Productivity-Hacks", course_title: "How to Manage Your Time Effectively", course_instructor: "Noah Go", duration: "28:00", photo: "images/eph-course1.png"},
                {id: 12, category: "Productivity-Hacks", course_title: "Dealing with Procrastination", course_instructor: "Sophia Perez", duration: "30:02", photo: "images/eph-course2.png"},
                {id: 13, category: "Productivity-Hacks", course_title: "How To Rewire Your Brain To Optimized Productivity", course_instructor: " Roy Dy", duration: "28:09", photo: "images/eph-course3.png"},
                {id: 14, category: "Productivity-Hacks", course_title: "How To Be More Productive When You're Feeling Unmotivated", course_instructor: "Liam Valdez", duration: "33:12", photo: "images/eph-course4.png"},
                {id: 15, category: "Productivity-Hacks", course_title: "Create A Motivating Workspace", course_instructor: "Mia Lucas", duration: "36:02", photo: "images/eph-course5.png"},
                {id: 16, category: "Productivity-Hacks", course_title: "Save Your Ideas", course_instructor: "Elijah Cruz", duration: "48:00", photo: "images/eph-course6.png"},
                {id: 17, category: "Productivity-Hacks", course_title: "Monitor Your Sanity", course_instructor: " Emma Cristobal", duration: "50:00", photo: "images/eph-course7.png"},
                {id: 18, category: "Productivity-Hacks", course_title: "Set Time For Non-work Related task", course_instructor: "John Smith", duration: "37:05", photo: "images/eph-course8.png"},
                {id: 19, category: "Productivity-Hacks", course_title: "Schedule Out Your Time", course_instructor: "Michael Devis", duration: "34:18", photo: "images/eph-course9.png"},
                {id: 20, category: "Productivity-Hacks", course_title: "Choose The Right Project/Task Management Tools", course_instructor: "Johnny Garcia", duration: "32:18", photo: "images/eph-course10.png"},
                {id: 21, category: "Personal-Finance", course_title: "Managing Personal Finances", course_instructor: "Mark Williams", duration: "29:19", photo: "images/epf-course1.png"},
                {id: 22, category: "Personal-Finance", course_title: "Financial Capability", course_instructor: "Greg Brown", duration: "28:26", photo: "images/epf-course2.png"},
                {id: 23, category: "Personal-Finance", course_title: "Budgeting or Tracking Spending", course_instructor: "Jean Johnson", duration: "30:12", photo: "images/epf-course2.png"},
                {id: 24, category: "Personal-Finance", course_title: "Establishing Emergency Fund", course_instructor: "Grace Miller", duration: "33:02", photo: "images/epf-course4.png"},
                {id: 25, category: "Personal-Finance", course_title: "Understanding Interest Rate", course_instructor: "Juan Baltimore", duration: "35:16", photo: "images/epf-course5.png"},
                {id: 26, category: "Personal-Finance", course_title: "Finacial Literacy and Investors Awareness", course_instructor: "Jaime Felch", duration: "36:54", photo: "images/epf-course6.png"},
                {id: 27, category: "Personal-Finance", course_title: "Insurance and Financial Security", course_instructor: "Alex Easterlin", duration: "41:03", photo: "images/epf-course7.png"},
                {id: 28, category: "Personal-Finance", course_title: "Financial Literacy Software", course_instructor: "Kelly Stewart", duration: "44:00", photo: "images/epf-course8.png"},
                {id: 29, category: "Personal-Finance", course_title: "Principles of Personal Finance and Budgeting", course_instructor: "Taylor Evans", duration: "34:05", photo: "images/epf-course9.png"},
                {id: 30, category: "Personal-Finance", course_title: "Money Habits to Develop", course_instructor: "Jorge Thompson", duration: "29:19", photo: "images/epf-course10.png"},
                {id: 31, category: "Communicating", course_title: "Acing Job Interviews", course_instructor: "Greg Walker", duration: "35:45", photo: "images/ec-course1.png"},
                {id: 32, category: "Communicating", course_title: "Public Speaking for Beginners", course_instructor: "Edward Moore", duration: "28:18", photo: "images/ec-course2.png"},
                {id: 33, category: "Communicating", course_title: "How To Be More Confident in Speaking Publicly", course_instructor: "Kelly Clark", duration: "25:13", photo: "images/ec-course2.png"},
                {id: 34, category: "Communicating", course_title: "How to Interact Effectively", course_instructor: "Venz Stewart", duration: "26:48", photo: "images/ec-course4.png"},
                {id: 35, category: "Communicating", course_title: "Learn How To Communicate Better", course_instructor: "Claire Baker", duration: "40:04", photo: "images/ec-course5.png"},
                {id: 36, category: "Communicating", course_title: "How To Talk With Confidence", course_instructor: "King Jackson", duration: "37:39", photo: "images/ec-course6.png"},
                {id: 37, category: "Communicating", course_title: "Communications Techniques", course_instructor: "Mary Harris", duration: "49.00", photo: "images/ec-course7.png"},
                {id: 38, category: "Communicating", course_title: "How to Listen Effectively", course_instructor: "Ben Washington", duration: "46:17", photo: "images/ec-course8.png"},
                {id: 39, category: "Communicating", course_title: "Communications Techniques", course_instructor: "Mike Lewis", duration: "35:00", photo: "images/ec-course9.png"},
                {id: 40, category: "Communicating", course_title: "How To Improve Communication Skills", course_instructor: "Harry Wolf", duration: "33:23", photo: "images/ec-course10.png"},
                {id: 41, category: "Writing", course_title: "Tips on Writing", course_instructor: "Alexander Adams", duration: "29:56", photo: "images/ew-course1.png"},
                {id: 42, category: "Writing", course_title: "How to write a Book ", course_instructor: "Andy Nielsen", duration: "30:04", photo: "images/ew-course2.png"},
                {id: 43, category: "Writing", course_title: "How To Write Descriptively", course_instructor: "Dave Robinson", duration: "34:06", photo: "images/ew-course2.png"},
                {id: 44, category: "Writing", course_title: "Improve Ypur Academic Writing", course_instructor: "Cris Bailey", duration: "38:08", photo: "images/ew-course4.png"},
                {id: 45, category: "Writing", course_title: "How To Use Writing To Sharpen Your Thinking", course_instructor: "Eva Bianchi", duration: "33:00", photo: "images/ew-course5.png"},
                {id: 46, category: "Writing", course_title: "The Complete Writing Guide", course_instructor: "Aira Bauer", duration: "41:09", photo: "images/ew-course6.png"},
                {id: 47, category: "Writing", course_title: "How To Improve Your Writing Skills And Grammar", course_instructor: "Ben Anderson", duration: "43:00", photo: "images/ew-course7.png"},
                {id: 48, category: "Writing", course_title: "How To Improve Your English Writing Skills", course_instructor: "Adam Petrov", duration: "37:00", photo: "images/ew-course8.png"},
                {id: 49, category: "Writing", course_title: "Develop A Freewriting Habit", course_instructor: "Nelson Russo", duration: "35:23", photo: "images/ew-course9.png"},
                {id: 50, category: "Writing", course_title: "Find Your Perfect Writing Environment", course_instructor: "Elizabeth Cruz", duration: "29:24", photo: "images/ew-course10.png"},
                {id: 51, category: "Leadership", course_title: "How To Be An Effective Leader", course_instructor: "Ruby Leply", duration: "25:45", photo: "images/el-course1.png"},
                {id: 52, category: "Leadership", course_title: "Traits of A Leader", course_instructor: "Luis Malich", duration: "27:49", photo: "images/el-course2.png"},
                {id: 53, category: "Leadership", course_title: "How To Build Self Discipline", course_instructor: "Romeo Cruz", duration: "30:00", photo: "images/el-course2.png"},
                {id: 54, category: "Leadership", course_title: "7 Leadership Skills", course_instructor: "Ashley Settlemire", duration: "34:08", photo: "images/el-course4.png"},
                {id: 55, category: "Leadership", course_title: "Learn How To Manage People and Be a Better Leader", course_instructor: "Mike Thoby", duration: "37:09", photo: "images/el-course5.png"},
                {id: 56, category: "Leadership", course_title: "How To Master The Art Of Leadership", course_instructor: "Dave Strome", duration: "50:00", photo: "images/el-course6.png"},
                {id: 57, category: "Leadership", course_title: "Adds a Motive Power To Group Efforts", course_instructor: "Daniela Canine", duration: "47:03", photo: "images/el-course7.png"},
                {id: 58, category: "Leadership", course_title: "The Right Way To Lead People", course_instructor: "Monica Biffle", duration: "30:21", photo: "images/el-course8.png"},
                {id: 59, category: "Leadership", course_title: "What Makes A Good Leader", course_instructor: "Nadia Dimick", duration: "29:46", photo: "images/el-course9.png"},
                {id: 60, category: "Leadership", course_title: "Habits of Great Leaders", course_instructor: "Jane Roosevelt", duration: "32:00", photo: "images/el-course10.png"},
                {id: 61, category: "Creativity", course_title: "How To Become Creative and Innovative", course_instructor: "Liza Serrano", duration: "48:00", photo: "images/ecr-course1.png"},
                {id: 62, category: "Creativity", course_title: "Visual Communication", course_instructor: "Amanda Aguilar", duration: "41:24", photo: "images/ecr-course2.png"},
                {id: 63, category: "Creativity", course_title: "Performance Art", course_instructor: "Mira Weber", duration: "37:00", photo: "images/ecr-course2.png"},
                {id: 64, category: "Creativity", course_title: "Be A Graphic Designer", course_instructor: "John Wagner", duration: "34:02", photo: "images/ecr-course4.png"},
                {id: 65, category: "Creativity", course_title: "The Secret To Creativity", course_instructor: "James Schneider", duration: "30:38", photo: "images/ecr-course5.png"},
                {id: 66, category: "Creativity", course_title: "The Creativity In You", course_instructor: "Luz Klein", duration: "38:00", photo: "images/ecr-course6.png"},
                {id: 67, category: "Creativity", course_title: "Making Connections", course_instructor: "Fritz Herrman", duration: "37:00", photo: "images/ecr-course7.png"},
                {id: 68, category: "Creativity", course_title: "Crash Course on Creativity", course_instructor: "Ivan Schmidt", duration: "46:02", photo: "images/ecr-course8.png"},
                {id: 69, category: "Creativity", course_title: "Boost Your Creativity with this 5 Habits", course_instructor: "Brian Fischer", duration: "35:04", photo: "images/ecr-course9.png"},
                {id: 70, category: "Creativity", course_title: "Art of Innovation", course_instructor: "Lily Bauer", duration: "34:00", photo: "images/ecr-course10.png"},
                ];



router.get('/', (req, res) => {
  res.send(courses);
});


router.get("/category/:keyword", (req, res) => {
  const { keyword } = req.params;
  const result = courses.filter(item=>item.category.toLowerCase().includes(keyword));
  res.status(200).send( result.length > 0 ? result : keyword + " not found!");
});



// router.get("/", (req, res) => {
//   const { keyword } = req.params;
//   const result = courses.filter(item=>item.category.toLowerCase().includes(keyword));
//   res.status(200).send( result.length > 0 ? result : keyword + " not found!");
// });

// router.get("/:category" , (req, res) => {
//   res.send(courses[6]);

// });


// router.get("/count/all", (req, res) => {
//   res.status(200).send({total:courses.length});
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   let result = courses.find((item) => {
//       return item.id == Number (id);
//   });
  
//   res.status(200).send(result ? result : "Record not found!");
// });






module.exports = router;


