
  var questions = [
    {
      question: "Which access control is more effective at protecting a door against unauthorized access?",
      options: ["", "A. Fences", "B. Turnstiles", "C. Barriers", "D. Locks"],
      correctAnswer: "D"
    },
    {
      question: "Which type of attack PRIMARILY aims to make a resource inaccessible to its intended users?",
      options: ["", "A. Phishing", "B. Denial of Service", "C. Trojans", "D. Cross-Site Scripting"],
      correctAnswer: "B"
    },
	{
	  question: "Which of these types of user is LESS likely to have a privileged account?",
	  options: ["", "A. System Administrator", "B. Security Analyst", "C. External Worker", "D. Help Desk"],
	  correctAnswer: "C"
	},
  ];

  var questionsContainer = document.getElementById("questions");

  // Function to create MCQ elements
  function createMCQElement(questionObj, index) {
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.textContent = (index + 1) + ". " + questionObj.question;
    div.appendChild(label);

    var select = document.createElement("select");
    select.name = questionObj.question;
    questionObj.options.forEach(function(option, optionIndex) {
      var optionElement = document.createElement("option");
      optionElement.value = optionIndex === 0 ? "" : String.fromCharCode(64 + optionIndex); // Convert index to option letter
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });
    select.addEventListener("change", function() {
      select.disabled = true; // Disable the dropdown after selection
    });
    div.appendChild(select);
    questionsContainer.appendChild(div);
  }

  // Create MCQ elements from JSON
  questions.forEach(function(question, index) {
    createMCQElement(question, index);
  });

  // Stopwatch
  var startTime;
  var timeLimit = 0.5 * 60 * 1000; // 0.5 minutes in milliseconds
  var timerInterval;

  function updateTimer() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    var minutes = Math.floor(elapsedTime / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    document.getElementById("timer").textContent = "Elapsed Time: " + padNumber(minutes) + ":" + padNumber(seconds);
  }

  function padNumber(num) {
    return num < 10 ? "0" + num : num;
  }

  document.getElementById("startBtn").onclick = function() {
      document.getElementById("startBtn").style.display = "none";
      document.getElementById("hide").style.display = "block";
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
  };

  document.getElementById("examForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if time is over
    var currentTime = Date.now();
    var timeDifference = currentTime - startTime;
    if (timeDifference >= timeLimit) {
      clearInterval(timerInterval);
      alert("Time limit exceeded! You are not allowed to submit.");
      return;
    }

    // Get form values
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var examCode = document.getElementById("examCode").value;
    
    // Calculate total obtained marks
    var totalMarks = 0;
    questions.forEach(function(question, index) {
      var selectedOption = document.querySelector('select[name="' + question.question + '"]').value;
      if (selectedOption === question.correctAnswer) totalMarks += 1;
    });

    // Calculate time required
    var timeRequired = Math.floor(timeDifference / 1000 / 60) + ":" + padNumber(Math.floor((timeDifference / 1000) % 60));
    
    // Generate WhatsApp code and encrypt
    var whatsAppCode = encrypt(name + "_" + mobile + "_" + examCode + generateAnswerString() + "_MO_" + totalMarks + "_T" + timeRequired);
    
    // Send WhatsApp code to the specified number
    var whatsappNumber = "+8801515283462"; // Change this to your WhatsApp number
    var whatsappMessage = whatsAppCode;
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodeURIComponent(whatsappMessage);
    window.open(whatsappLink);
  };

  // Show correct answers when button clicked
  document.getElementById("showAnswers").onclick = function() {
    var correctAnswers = questions.map(function(question, index) {
      return (index + 1) + ". " + question.correctAnswer;
    });
    alert("Correct Answers:\n" + correctAnswers.join(", "));
  };

  // Unicode-based encryption function
  function encrypt(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      // Shift the character code by a fixed number (e.g., 3) and convert it back to a character
      var encryptedCharCode = charCode + 5;
      result += String.fromCharCode(encryptedCharCode);
    }
    return result;
  }

  // Generate answer string for WhatsApp code
  function generateAnswerString() {
    var answerString = "_A_";
    questions.forEach(function(question, index) {
      var selectedOption = document.querySelector('select[name="' + question.question + '"]').value;
      answerString += (index + 1) + "-" + selectedOption + ", ";
    });
    return answerString.slice(0, -2); // Remove trailing comma and space
  }
