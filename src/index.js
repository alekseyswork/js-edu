/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

// The Rolling Scopes School is widely known for its difficult curriculum that takes a lot of time.It usually takes 800 hours to master the JavaScript language, its ecosystem and related tools.About 500 hours are required to learn pretty basic programming(loops, if-else operators(flow of control), basic data structures and algorithms) from scratch.
// - 800
// 500

const defaultStudentSpeedConfig = {
  family: 4,
  friends: 10,
  normal_life: 20,
  profession: 30,
  carrier: 40,
  top_peformance: 60
}

const problemStudentSpeedConfig = {
  family: 2,
  friends: 4,
  normal_life: 8,
  profession: 20,
  carrier: 30
}

const talentedStudentSpeedConfig = {
  normal_life: 30,
  profession: 40,
  carrier: 55,
  top_peformance: 70
}

module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  return func(focus, knowsProgramming, config)
};

func = (focus,
  knowsProgramming,
  config) => {
  let temp = 0;
  if (knowsProgramming){
  temp = Math.ceil(800 / config[focus]);
  }else{
    temp = Math.ceil(800 / config[focus]) + Math.ceil(500 / config[focus]);
  }
  // if (!knowsProgramming) {
  //   temp = temp + 500 / 2;
  // }
  return temp;
}

// func(
//   'profession', true,
//   defaultStudentSpeedConfig
// )
studentConfig = defaultStudentSpeedConfig;
func('family', false, studentConfig);
