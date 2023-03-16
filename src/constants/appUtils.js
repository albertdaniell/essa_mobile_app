import { useState } from "react";

var FormData = require("form-data");

var MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var DAYS_OF_WEEK = [
  "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
]

const JsonToformData = (item) => {
  var form_data = new FormData();
  // console.log(item)
  for (var key in item) {
    //check if item is an array

    if (Array.isArray(item[key])) {
      item[key].map((i) => {
        form_data.append(key, i);
      });
    } else {
      form_data.append(key, item[key]);
    }
  }

  return form_data;
};

const combineTwoFormData = (form1, form2) => {
  var form_data = form1;

  for (var pair of form2.entries()) {
    form_data.append(pair[0], pair[1]);
  }
  // console.log(form1)

  return form_data;
};

function convertDate(d, returnArray = false) {
  var parts = d.toString().split(" ");
  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return returnArray
    ? [parts[3], months[parts[1]], parts[2]]
    : parts[3] + "-" + months[parts[1]] + "-" + parts[2];
}

function FormatDate(d) {
  let date = new Date(d);
  var parts = date.toString().split(" ");

  // console.log(parts)

  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  return d === undefined ? "" : `${parts[1]} ${parts[2]}, ${parts[3]}`;
}


const FormatToDateFormat = (x, y)=> {
  var z = {
      M: x.getMonth() + 1,
      d: x.getDate(),
      h: x.getHours(),
      m: x.getMinutes(),
      s: x.getSeconds()
  };
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
      return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
  });

  return y.replace(/(y+)/g, function(v) {
      return x.getFullYear().toString().slice(-v.length)
  });
}

function convertTime(d) {
  // console.log(d);
  var parts = d.toString().split(" ");
  var months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  return parts[4];
}

const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};

const generateUniqueID = () => {
  return "nil";
};

const convertSolutionsToFormData = (solutions) => {
  let data = [];
  solutions.map((sol) => {
    return sol.selectedAnswer !== ""
      ? (data = [
          ...data,
          { selectedAnswer: sol.selectedAnswer, question_id: sol.id },
        ])
      : null;
  });

  var form_data = new FormData();

  for (var key in data) {
    // console.log(data[key])

    let mykey = `q_${data[key]["question_id"]}`;
    let myvalue = `${data[key]["selectedAnswer"]}`;

    form_data.append(mykey, myvalue);
  }

  return form_data;
};

const convertSkillsToFormData = (data,myKey="experienceskills") => {
  var form_data = new FormData();

  for (var key in data) {
    // console.log(data[key])

    let mykey = myKey;
    let myvalue = `${data[key].id}`;

    // console.log(myvalue)

    form_data.append(mykey, myvalue);
  }

  return form_data;
};


const AddIdToCountries = (data)=>{
  let countries =  []

  data.map((d)=>{
    countries = [...countries,{
      id:d.name,
      name:`${d.name} (${d.code})`,
      ...d
    }]
  })

  return countries


}

const SpreadCompanyUserDetails = (data) => {
  // console.log(data)

  //this function adds the user email and company company_website to the results s

  let { user } = data;
  let { email, company_website } = user;

  let newData = {
    ...data,
    email,
    company_website,
  };

  return newData;
};

const AddSkillToResult = (data) => {
  if (!Array.isArray(data)) {
    return data;
  }

  let dataToBeReturned = [];

  data.map((x) => {
    let { skill, proposal_solutions } = x;
    let { id, name, picture, percent_topass } = skill;
    let new_proposal_solutions = [];
    // let {proposal_solutions} = proposal_solutions

    proposal_solutions.map((y) => {
      let solution_answer_selected = {
        ...y,
        isSelected: false,
      };

      new_proposal_solutions = [
        ...new_proposal_solutions,
        solution_answer_selected,
      ];
    });

    let newskill = {
      ...x,
      selectedAnswer: "",
      proposal_solutions: new_proposal_solutions,
      skill_id: id,
      skill_name: name,
      skill_picture: picture,
      skill_percentage_topass: percent_topass,
    };

    dataToBeReturned = [...dataToBeReturned, newskill];
  });
  // console.log({ dataToBeReturned });

  return dataToBeReturned;
};

const CheckEndDateLessThanStart = (array) => {
  // console.log(JSON.parse(array))

  let data = JSON.parse(array);

  data = data.children.filter((d) => {
    return d.name === "start_date" || d.name === "end_date";
  });

  if (data.length === 2) {
    let start_date = data[0].value;
    let end_date = data[1].value;

    // console.log(JSON.parse(array))

    if (start_date !== "" && end_date !== "") {
      start_date = new Date(start_date[0], start_date[1]);
      end_date = new Date(end_date[0], end_date[1]);

      if (end_date < start_date) {
        // console.log("End date is greater")

        return true;
      } else {
        // console.log("End date is smaller")
        // console.log(end_date)

        return false;
      }
    } else {
      // console.log("dates are em[ty string")

      return false;
    }
  } else {
    // console.log("dates are em[ty")
    return false;
  }

  // let start_date = new Date(data.start_date);
  // let end_date = new Date(data.end_date);

  // console.log(start_date)

  // return "nothing"
};

const getSolutionAnswered = (data, answerID) => {
  if (Array.isArray(data)) {
    let filtered = data.filter((d) => {
      return parseInt(d.selectedAnswer) === parseInt(answerID);
    });
    if (filtered.length !== 0) {
      return filtered[0].selectedAnswer === answerID ? true : false;
    }
  } else {
    return false;
  }
};

const ExtractFieldsFromFormData = (
  dataToMap,
  onlyRequired = false,
  field = "isRequired"
) => {
  let dataToReturn = {};

  if (onlyRequired) {
    dataToMap.map((d1) => {
      d1.children.map((d2) => {
        // only pick the fields which have isRequired to true
        if (d2[field]) {
          // console.log(d2)
          dataToReturn[d2.name] = d2["value"];
        }
      });
    });
  } else {
    dataToMap.map((d1) => {
      d1.children.map((d2) => {
        dataToReturn[d2.name] = d2["value"];
        // return data
      });
    });
  }

  // console.log(dataToReturn)

  return dataToReturn;
};

const ExtractFieldsWithHasErrorStatus = (dataToMap) => {
  let dataToReturn = {};

  dataToMap.map((d1) => {
    d1.children.map((d2) => {
      // only pick the fields which have hasError to true
      if (d2["hasError"]) {
        // console.log(d2)
        dataToReturn[d2.hasError] = true;
      }
    });
  });

  // console.log(dataToReturn)

  return dataToReturn;
};

function checkPropertiesIsEmpty(obj) {
  for (var key in obj) {
    // console.log(obj[key])

    if (obj[key] === "" || obj[key] === null) {
      // console.log("is empty");

      return true;
    }
  }
  return false;
}

function checkObjectHasDateError(obj) {
  for (var key in obj) {
    if (obj["end_date"] !== undefined) {
      if (obj["start_date"] !== "" && obj["end_date"] !== "") {
        // console.log("is empty");
        console.log(obj);

        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

const PutTalentsInArray_FromJob = (dataPassed, filter = "all") => {
  let data = dataPassed;
  if (filter === "pending") {
    data = data.filter((d) => {
      return d.status === "pending";
    });
  } else if (filter === "rejected") {
    data = data.filter((d) => {
      return d.status === "rejected";
    });
  } else if (filter === "offered") {
    data = data.filter((d) => {
      return d.status === "offered";
    });
  }

  //  console.log(data)
  let talents = [];

  let jobDetails = {};

  data.map((d) => {
    jobDetails = d.job;
    talents = [
      ...talents,
      {
        ...d.talent,
        salary:
        d.job  !== null 
            ? d.job.salary
            : undefined,
        jobcreated_at:d.job !== null ? d.job.created_at : undefined,
        created_at:d.job !== null ? d.created_at:undefined,
        status: d.status,
      
        jobID: d.job !== null ? d.job.id : undefined,
        jobTitle: d.job !== null ? d.job.title : undefined,
        expiry_date: d.job !== null ?d.job.expiration_date : undefined,
        id:d.id,
        talentId:d.talent.id,


      },
    ];
  });

  let dataToReturn = {
    // job: jobDetails,
    talents: talents,
  };

  return dataToReturn;
};


const generateGraphData=(data)=>{
  let dates = [];

let data_for_graph = [];

data.map((d) => {
  let date_slice = d.created_at.slice(0, 10);
  if (dates.indexOf(date_slice) === -1) {
    dates.push(date_slice);
  }
});

dates.map((date) => {
  let filtered = data.filter((d) => {
    // console.log(d)
    let date_slice = d.created_at.slice(0, 10);
    return date_slice === date;
  }).length;

  data_for_graph = [
    ...data_for_graph,
    {
      name: FormatDate(new Date(date)),
      uv: filtered,
    },
  ];
});

return data_for_graph
}




async function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function checkStringIsBinary(str) {
  let isBinary = false;
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "0" || str[i] == "1") {
      isBinary = true;
    } else {
      isBinary = false;
    }
  }
}


function blobToFile(theBlob, fileName){
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}


const SearchFilterFunc = function (search,data) {
  var lowSearch = search.toLowerCase();
  return data.filter(wine =>
      Object.values(wine).some(val => 
          String(val).toLowerCase().includes(lowSearch) 
      )
  );
}

export {
  JsonToformData,
  convertDate,
  convertTime,
  useLocalStorage,
  generateUniqueID,
  AddSkillToResult,
  getSolutionAnswered,
  ExtractFieldsFromFormData,
  MONTHS,DAYS_OF_WEEK,
  FormatDate,
  SpreadCompanyUserDetails,
  checkPropertiesIsEmpty,
  convertSolutionsToFormData,
  CheckEndDateLessThanStart,
  checkObjectHasDateError,
  ExtractFieldsWithHasErrorStatus,
  PutTalentsInArray_FromJob,
  combineTwoFormData,
  convertSkillsToFormData,
  FormatToDateFormat,
  generateGraphData,
  blobToBase64,
  checkStringIsBinary,
  blobToFile,
  AddIdToCountries,
  SearchFilterFunc
};
