const redis = require("redis");
const client = redis.createClient();

client.on("error", error => {
  console.error(error);
});

const peopleArray=[
  {
    name: "Furkan",
    lastname:"Karazeybek",
    id:1
  },
  {
    name: "Mert",
    lastname:"Karazeybek",
    id:2
  }
]
// SET
client.set("user_name", "FurkanK", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});
// GET
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Message", message);
});

//del
/* client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Delete?", message);
}); */

//append
client.append("surname","karazeybek", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Append", message);
  client.get("surname",(e,m) =>{
    console.log("surname Okunan değer :",m);
  });
});


//exists
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Exists", message);
});


//publish - subscriber

client.on("message", (channel, message) => {
   console.log(`${channel} isimli kanala ${message} geldi..`)
})

client.subscribe('kablosuzkedi');

