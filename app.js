let raceNumber = Math.floor(Math.random() * 1000);
 let registeredEarly = true;
const runnerAge = 16;

if(registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if(registeredEarly && runnerAge > 18) {
  console.log(`You will race at 09:30 AM and Your race number is: ${raceNumber}`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 AM and Your race number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 PM and your race number is: ${raceNumber}`);
} else {
  console.log(`You are exactly 18 years old, please approach the registration desk for more information!`);
}
