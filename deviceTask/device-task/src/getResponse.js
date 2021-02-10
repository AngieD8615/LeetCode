var getResponse = function(){
  var tasks = ["task1", "task2", "task3","task4","task5" ];
  var devices = ["device1", "device2", "device3","device4","device5", "device6", "device7"];
  var response = [];
  devices.forEach(function(device){
      if (Math.random() >= 0.5){
          var task_names = [];
          tasks.forEach(function(task){
              if (Math.random() >= 0.5){
                  task_names.push(task);
              }
          });
          if(task_names.length > 0){
              response.push({"device":device, "tasks":task_names})
          }
      }
  });
  return response;
};

export default getResponse;